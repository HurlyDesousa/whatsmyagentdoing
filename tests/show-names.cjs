// SWA-3377: topbar Show/Hide names toggle for all blobs on the current floor.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { chromium } = require('playwright');
const { createServer } = require('../src/server');
const { DemoWatcher } = require('../src/demo');

const root = path.join(__dirname, '..');

test('show-names wiring is present in sources and the 4D bundle', () => {
  const actor = fs.readFileSync(path.join(root, 'web/tower/actor.js'), 'utf8');
  const ui = fs.readFileSync(path.join(root, 'web/tower-ui/ui.js'), 'utf8');
  const office = fs.readFileSync(path.join(root, 'web/office4d.js'), 'utf8');
  const scene = fs.readFileSync(path.join(root, 'web/tower/scene.js'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'public/4d/scene.css'), 'utf8');
  const dash = fs.readFileSync(path.join(root, 'public/4d/dashboard.css'), 'utf8');
  const bundle = fs.readFileSync(path.join(root, 'public/office4d.js'), 'utf8');

  assert.match(ui, /class: 'bhq-names bhq-surface'/);
  assert.match(ui, /Show names/);
  assert.match(ui, /Hide names/);
  assert.match(ui, /onToggleNames/);
  assert.match(ui, /aria-pressed/);
  assert.match(office, /setShowNames/);
  assert.match(office, /showNames: !!this\.showNames/);
  assert.match(office, /bhq-show-names/);
  assert.match(scene, /showNames: !!view\.showNames/);
  assert.match(actor, /this\.showNames \? 'names' : 'off'/);
  assert.match(css, /data-mode="names"/);
  assert.match(css, /html\.bhq-show-names \.hq-labels/);
  assert.match(dash, /\.bhq-names/);
  assert.match(bundle, /bhq-names/);
  assert.match(bundle, /Show names/);
  assert.match(bundle, /Hide names/);
  assert.match(bundle, /bhq-show-names/);
});

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true, channel: 'chrome' });
  } catch {
    try {
      return await chromium.launch({ headless: true, args: ['--no-sandbox'] });
    } catch (err) {
      return { error: err };
    }
  }
}

async function waitTower(page) {
  await page.waitForFunction(
    () => state.quality === '4d' && officeKind === '4d' && office?.isTower && office.loaded && office.framesShown > 4,
    null,
    { timeout: 25000 },
  );
  await page.waitForSelector('#topbar .bhq-names', { timeout: 15000 });
}

function nameModes(page) {
  return page.evaluate(() => {
    const tags = [...document.querySelectorAll('.hq-labels .hqt')];
    return {
      total: tags.length,
      names: tags.filter((el) => el.dataset.mode === 'names').length,
      visibleText: tags
        .filter((el) => el.dataset.mode !== 'off')
        .map((el) => (el.querySelector('.hqt-text')?.textContent || '').trim())
        .filter(Boolean),
    };
  });
}

test('topbar Show/Hide names toggles persistent labels on the current floor', { timeout: 90000 }, async (t) => {
  const browserOrErr = await launchBrowser();
  if (browserOrErr.error || !browserOrErr.newPage) {
    t.skip('Chromium/Chrome not runnable in this environment: ' + (browserOrErr.error?.message || 'no browser'));
    return;
  }
  const browser = browserOrErr;
  const watcher = new DemoWatcher().start();
  const server = createServer(watcher, { demo: true, privacy: false });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
    await waitTower(page);

    const btn = page.locator('#topbar .bhq-names');
    assert.equal(await btn.innerText(), 'Show names');
    assert.equal(await btn.getAttribute('aria-pressed'), 'false');
    assert.equal(await page.evaluate(() => document.documentElement.classList.contains('bhq-show-names')), false);

    await page.waitForTimeout(400);
    const before = await nameModes(page);
    assert.equal(before.names, 0, 'default should not use names mode: ' + JSON.stringify(before));

    await btn.click();
    await page.waitForFunction(() => document.querySelector('#topbar .bhq-names')?.getAttribute('aria-pressed') === 'true');
    assert.equal(await btn.innerText(), 'Hide names');
    assert.equal(await page.evaluate(() => document.documentElement.classList.contains('bhq-show-names')), true);

    await page.waitForFunction(() => {
      const tags = [...document.querySelectorAll('.hq-labels .hqt')];
      return tags.some((el) => el.dataset.mode === 'names' || (el.dataset.mode !== 'off' && el.querySelector('.hqt-text')?.textContent));
    }, null, { timeout: 10000 });

    const on = await nameModes(page);
    assert.ok(on.total > 0, 'expected CSS2D tags for current-floor blobs');
    assert.ok(on.names > 0 || on.visibleText.length > 0, 'expected visible name labels when ON: ' + JSON.stringify(on));

    const floorBtns = page.locator('#floors .bhq-floor');
    const floorCount = await floorBtns.count();
    if (floorCount > 1) {
      await floorBtns.nth(1).click();
      await page.waitForTimeout(700);
      assert.equal(await btn.getAttribute('aria-pressed'), 'true');
      const afterFloor = await nameModes(page);
      assert.ok(afterFloor.names > 0 || afterFloor.visibleText.length > 0, 'floor switch should still show names: ' + JSON.stringify(afterFloor));
    }

    await btn.click();
    await page.waitForFunction(() => document.querySelector('#topbar .bhq-names')?.getAttribute('aria-pressed') === 'false');
    assert.equal(await btn.innerText(), 'Show names');
    await page.waitForTimeout(300);
    const off = await nameModes(page);
    assert.equal(off.names, 0, 'Hide names should clear names mode: ' + JSON.stringify(off));
    assert.equal(await page.evaluate(() => document.documentElement.classList.contains('bhq-show-names')), false);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(200);
    assert.equal(await btn.isVisible(), true);
    await btn.click();
    await page.waitForFunction(() => document.querySelector('#topbar .bhq-names')?.getAttribute('aria-pressed') === 'true');
    assert.equal(await btn.innerText(), 'Hide names');

    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
    watcher.stop();
    server.closeAllConnections?.();
    await new Promise((resolve) => server.close(resolve));
  }
});
