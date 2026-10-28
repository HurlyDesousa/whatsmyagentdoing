// Bubble copy is canvas text, so this drives the real office page and reads
// what fillText paints before and after a session patch (the SSE payload).
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { DemoWatcher } = require('../src/demo');
const { createServer } = require('../src/server');

function row(over) {
  return {
    key: 'grokbot:chief', id: 'chief', agent: 'grokbot', project: 'Chief Master',
    cwd: '/hurly/Chief Master', status: 'thinking', activity: null,
    lastEventAt: Date.now(), turnStartedAt: Date.now() - 1000, startedAt: Date.now() - 5000,
    ...over,
  };
}

async function painted(page) {
  return page.evaluate(() => {
    const texts = [];
    const orig = office.ctx.fillText;
    office.ctx.fillText = function (t, ...args) { texts.push(String(t)); return orig.call(this, t, ...args); };
    try { office.frame(performance.now()); }
    finally { office.ctx.fillText = orig; }
    return texts.join('\n');
  });
}

async function show(page, sessions) {
  await page.evaluate((sessions) => {
    // Hold off /api/sessions polling so a demo snapshot can't replace this patch.
    sseLive = true;
    clearTimeout(pollTimer);
    state.showAll = true;
    onData({ now: Date.now(), sessions });
    office.showAll = true;
    office.focusKey = null;
    // Seat them. The first real snapshot does this itself; a test page may
    // already have spent that placement on an empty floor.
    for (const p of office.people.values()) {
      if (p.mode === 'work' && p.desk) { p.path = []; p.x = p.desk.seat.x; p.y = p.desk.seat.y; }
    }
    render();
  }, sessions);
  await page.waitForTimeout(80);
}

(async () => {
  const watcher = new DemoWatcher().start();
  const server = createServer(watcher, { demo: true, privacy: false });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.addInitScript(() => {
      window.EventSource = class { constructor() {} close() {} };
    });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto(`${base}/?view=office&quality=mid`, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => { sseLive = true; clearTimeout(pollTimer); });
    await page.waitForFunction(() => office && office.framesShown > 2, null, { timeout: 15000 });
    const seed = [row({ title: 'Ops coordination · SWA-2978 3D office spike', activity: 'Planning next dispatch', status: 'tool' })];
    await show(page, seed);
    const before = await painted(page);
    assert.match(before, /Planning next/);

    const live = [row({ title: 'SWA-3100 Refresh office bubbles', activity: 'Bash: npm test', status: 'tool' })];
    await show(page, live);
    const after = await painted(page);
    assert.match(after, /npm test/);
    assert.doesNotMatch(after, /SWA-2978|Planning next/);

    await show(page, [row({ title: 'Idle · last heartbeat 28/10/2026, 07:45:10', activity: null, status: 'done', reply: 'Idle · last heartbeat 28/10/2026, 07:45:10' })]);
    const idle = await painted(page);
    assert.doesNotMatch(idle, /npm test|SWA-2978|Planning next/);

    await page.goto(`${base}/?view=office&quality=high`, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => { sseLive = true; clearTimeout(pollTimer); });
    await page.waitForFunction(() => office && office.loaded && office.framesShown > 2 && typeof office.drawTags3D === 'function', null, { timeout: 20000 });
    await show(page, seed);
    const before3 = await painted(page);
    assert.match(before3, /Planning next/);
    await show(page, live);
    const after3 = await painted(page);
    assert.match(after3, /npm test/);
    assert.doesNotMatch(after3, /SWA-2978|Planning next/);
    await show(page, [row({ title: 'Idle · last heartbeat 28/10/2026, 07:45:10', activity: null, status: 'done' })]);
    const idle3 = await painted(page);
    assert.doesNotMatch(idle3, /npm test|SWA-2978|Planning next/);
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('PASS bubble text tracks session patches in 2D and 3D');
  } finally {
    await browser.close();
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
    watcher.stop();
  }
})().catch((err) => { console.error(err); process.exit(1); });
