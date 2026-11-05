// Legacy mid/high office URLs must land on the sole 4D tower without blanking.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { DemoWatcher } = require('../src/demo');
const { createServer } = require('../src/server');

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
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    for (const quality of ['mid', 'high', '4d']) {
      await page.goto(`${base}/?view=office&quality=${quality}`, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => state.quality === '4d' && officeKind === '4d' && office?.isTower && office.loaded && office.framesShown > 2, null, { timeout: 20000 });
      assert.equal(await page.locator('#qualSeg, .bhq-qual').count(), 0);
    }

    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('PASS legacy mid/high URLs land on the sole 4D tower');
  } finally {
    await browser.close();
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
    watcher.stop();
  }
})().catch((err) => { console.error(err); process.exit(1); });
