// 4D is the sole office view. Legacy mid/high prefs and query params resolve to 4D.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const feedSrc = fs.readFileSync(path.join(root, 'public/wallpaper-feed.js'), 'utf8');

function loadFeed() {
  const sandbox = { URL, URLSearchParams, history: { replaceState() {} }, location: { hash: '', search: '', pathname: '/' } };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  return sandbox.WallpaperFeed;
}

const WF = loadFeed();
const NOW = Date.parse('2026-11-03T12:00:00Z');

function line(message, timeSec) {
  return { time: timeSec == null ? NOW / 1000 : timeSec, message: JSON.stringify(message) };
}

test('quality is always 4D; legacy mid/high resolve to the sole view', () => {
  assert.equal(WF.DEFAULT_QUALITY, '4d');
  assert.equal(JSON.stringify(WF.QUALITIES), JSON.stringify(['4d']));
  assert.equal(WF.resolveQuality(undefined), '4d');
  assert.equal(WF.resolveQuality(null), '4d');
  assert.equal(WF.resolveQuality(''), '4d');
  assert.equal(WF.resolveQuality('low'), '4d');
  assert.equal(WF.resolveQuality('mid'), '4d');
  assert.equal(WF.resolveQuality('high'), '4d');
  assert.equal(WF.resolveQuality('4d'), '4d');
});

test('4D seats from Paperclip status and dresses blobs from the feed look', () => {
  const sessions = [
    { key: 'grokbot:chief', id: 'chief', agent: 'grokbot', project: 'Chief Master', status: 'thinking', activity: 'Planning next dispatch', title: 'Ops coordination' },
    { key: 'grokbot:doc', id: 'doc', agent: 'grokbot', project: 'Doc Master', status: 'idle', activity: null, title: 'Off the floor' },
    { key: 'paperclip:qa', id: 'qa', agent: 'paperclip', project: 'QA Engineer', status: 'tool', activity: 'Bash: npm test', title: 'QA' },
  ];
  const feed = WF.reduceFeed([
    line({ bot: 'Chief Master', status: 'done', step: 'SWA-3131 tracked' }),
    line({ bot: 'Proximox Master', status: 'working', step: 'cluster check' }),
    line({ looks: { 'Doc Master': { shape: 'drop', color: '#EB2B3E', accessory: 'none' } } }),
    line({ groups: { 'Chief Master': 'Ops', 'Doc Master': 'Ops' } }),
  ], NOW);
  const merged = WF.mergeSessions(sessions, feed, NOW);
  const chief = merged.find((s) => s.id === 'chief');
  assert.equal(chief.status, 'thinking');
  assert.equal(chief.wallpaper.effective, 'done');
  assert.equal(chief.wallpaperLook.shape, 'triangle');
  assert.equal(chief.look.shape, 'wedge');
  const tower = WF.towerState(merged);
  const chiefBot = tower.bots[WF.botId('Chief Master')];
  assert.equal(chiefBot.effective_status, 'working');
  assert.equal(chiefBot.step, 'Planning next dispatch');
  assert.equal(chiefBot.look.shape, 'triangle');
  assert.equal(chiefBot.look.color, '#8F59F9');
  assert.equal(chiefBot.has_glb, false);
  // SWA-3171: floors follow wallpaper group again; Dept A seating only on Main floor.
  assert.equal(chiefBot.floor, 'ops');
  const doc = tower.bots[WF.botId('Doc Master')];
  assert.equal(doc.effective_status, 'idle');
  assert.equal(doc.look.shape, 'drop');
  assert.equal(doc.look.color, '#EB2B3E');
  assert.equal(doc.floor, 'ops');
  const prox = tower.bots[WF.botId('Proxmox Master')];
  assert.equal(prox.effective_status, 'working');
  assert.equal(prox.step, 'cluster check');
  assert.equal(prox.look.shape, 'cloud');
  assert.equal(prox.floor, 'infra');
  const qa = tower.bots[WF.botId('QA Engineer')];
  assert.equal(qa.effective_status, 'working');
  assert.equal(qa.step, 'Bash: npm test');
  assert.equal(qa.floor, 'main-floor');
  assert.ok(qa.desk >= 1 && qa.desk <= 10, 'Dept A desk on bank A');
  assert.equal(qa.look, null);
  assert.equal(JSON.stringify(tower.floors.map((f) => f.id)), JSON.stringify(['ops', 'infra', 'main-floor']));
  assert.equal(JSON.stringify(tower).includes('gbw-'), false);
});

test('an empty roster still has a tower floor, and remembered looks apply with no feed lines', () => {
  const empty = WF.towerState([]);
  assert.equal(empty.floors.length, 1);
  assert.equal(empty.floors[0].id, 'main-floor');
  assert.equal(empty.floors[0].name, 'Main floor');
  assert.equal(Object.keys(empty.bots).length, 0);
  const quiet = WF.towerState([
    { key: 'grokbot:chief', id: 'chief', project: 'Chief Master', status: 'idle' },
  ]);
  const bot = quiet.bots[WF.botId('Chief Master')];
  assert.equal(bot.look.shape, 'triangle');
  assert.equal(bot.look.color, '#8F59F9');
  assert.equal(bot.floor, 'ops');
  assert.equal(bot.effective_status, 'idle');
});

test('Main floor keeps Dept A vs B banks when mixed crew lands there', () => {
  const tower = WF.towerState([
    { key: 'paperclip:disp', id: 'disp', project: 'Dispatcher', status: 'thinking', activity: 'routing' },
    { key: 'paperclip:cm1', id: 'cm1', project: 'Code Master 1', status: 'tool', activity: 'edit' },
    { key: 'paperclip:qa', id: 'qa', project: 'QA Engineer', status: 'idle', activity: null },
    { key: 'paperclip:gpu', id: 'gpu', project: 'GPU Agent', status: 'idle', activity: null },
    { key: 'paperclip:amazon', id: 'amazon', project: 'Amazon Master', status: 'idle', activity: null },
  ]);
  assert.equal(JSON.stringify(tower.floors.map((f) => f.id)), JSON.stringify(['main-floor']));
  for (const name of ['Dispatcher', 'Code Master 1', 'QA Engineer']) {
    const bot = tower.bots[WF.botId(name)];
    assert.ok(bot.desk >= 1 && bot.desk <= 10, `${name} on bank A`);
  }
  for (const name of ['GPU Agent', 'Amazon Master']) {
    const bot = tower.bots[WF.botId(name)];
    assert.ok(bot.desk >= 11 && bot.desk <= 20, `${name} on bank B`);
  }
});

test('4D is the sole view: no mode pill; legacy mid/high URLs land on the tower', { timeout: 90000 }, async () => {
  const { createServer } = require('../src/server');
  const { DemoWatcher } = require('../src/demo');
  const watcher = new DemoWatcher().start();
  const server = createServer(watcher, { demo: true, privacy: false });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    const glb = await fetch(base + '/4d/office/office.glb');
    assert.equal(glb.status, 200);
    assert.match(glb.headers.get('content-type') || '', /gltf/);
    const css = await fetch(base + '/4d/scene.css');
    assert.equal(css.status, 200);
    browser = await chromium.launch({
      headless: true,
      channel: 'chrome',
    });
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && officeKind === '4d' && office?.isTower, null, { timeout: 10000 });
    assert.equal(await page.locator('#qualSeg').count(), 0);
    assert.equal(await page.locator('.bhq-qual').count(), 0);
    assert.equal(await page.evaluate(() => !!document.body.textContent && !/\b4D\b/.test(document.querySelector('#topbar')?.innerText || '')), true);
    await page.waitForFunction(() => document.body.classList.contains('tower-site') && document.querySelector('#topbar .bhq-word')?.textContent === 'Grok Bot Dashboard' && document.querySelector('#floors')?.textContent.includes('Floors'), null, { timeout: 15000 });
    assert.equal(await page.locator('body.tower-site .wrap > header').isHidden(), true);
    await page.waitForFunction(() => officeKind === '4d' && office?.isTower && office.loaded && office.framesShown > 4, null, { timeout: 20000 });
    const shot = await page.evaluate(() => {
      const live = document.querySelector('#office canvas.hq-canvas');
      const still = office.captureShare && office.captureShare();
      if (!live || !still) return { ok: false, reason: 'no tower canvas', live: !!live, still: !!still, source: window.bothq && window.bothq.source };
      const sample = document.createElement('canvas');
      sample.width = 48; sample.height = 27;
      const g = sample.getContext('2d');
      g.drawImage(still, 0, 0, 48, 27);
      const data = g.getImageData(0, 0, 48, 27).data;
      const colors = new Set();
      for (let i = 0; i < data.length; i += 16) colors.add(`${data[i]},${data[i + 1]},${data[i + 2]}`);
      return { ok: true, colors: colors.size, w: live.width, h: live.height, source: window.bothq && window.bothq.source };
    });
    assert.equal(shot.ok, true, shot.reason);
    assert.ok(shot.w > 100 && shot.h > 100, JSON.stringify(shot));
    assert.ok(shot.colors > 8, 'tower frame should not be a flat colour: ' + JSON.stringify(shot));
    await page.waitForTimeout(900);
    await page.screenshot({ path: '/tmp/tower-4d.png' });

    // Saved mid / high prefs must remount as 4D (no Kenney 2D/3D).
    await page.evaluate(() => {
      localStorage.setItem('wmad.quality', JSON.stringify('mid'));
    });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && officeKind === '4d' && office?.isTower && office.loaded, null, { timeout: 20000 });
    assert.equal(await page.locator('#qualSeg, .bhq-qual').count(), 0);
    assert.notEqual(await page.locator('#floorSeg button').first().innerText(), 'B');

    await page.evaluate(() => {
      localStorage.setItem('wmad.quality', JSON.stringify('high'));
    });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && officeKind === '4d' && office?.isTower && office.loaded, null, { timeout: 20000 });

    // Legacy query params also land on the sole tower view.
    await page.goto(base + '/?view=office&quality=mid', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && office?.isTower && office.loaded, null, { timeout: 20000 });
    await page.goto(base + '/?view=office&quality=high', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && office?.isTower && office.loaded, null, { timeout: 20000 });

    assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), 'light');
    await page.locator('.bhq-theme').click();
    await page.waitForFunction(() => document.documentElement.dataset.theme === 'dark' && document.documentElement.dataset.themeChoice === 'dark');
    await page.waitForTimeout(400);
    await page.screenshot({ path: '/tmp/tower-4d-dark.png' });
    assert.equal(await page.locator('.bhq-theme').innerText(), 'Light');
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => state.quality === '4d' && document.documentElement.dataset.theme === 'dark' && document.documentElement.dataset.themeChoice === 'dark' && office?.isTower && office.loaded, null, { timeout: 20000 });
    assert.equal(await page.locator('.bhq-theme').innerText(), 'Light');
    assert.deepEqual(errors, []);
  } finally {
    await browser?.close();
    watcher.stop();
    server.closeAllConnections?.();
    await new Promise((resolve) => server.close(resolve));
  }
});
