// SWA-3409: office mobile readiness — 360/390/430 portrait+landscape + desktop regression.
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

let chromium = null;
try {
  ({ chromium } = require('playwright'));
} catch {
  chromium = null;
}

const root = path.join(__dirname, '..');
const CSS = fs.readFileSync(path.join(root, 'public', '4d', 'ui.css'), 'utf8');
const DASH = fs.readFileSync(path.join(root, 'public', '4d', 'dashboard.css'), 'utf8');
const UI = fs.readFileSync(path.join(root, 'web', 'tower-ui', 'ui.js'), 'utf8');
const HTML = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');

const PHONE_W = [360, 390, 430];
const LAND_H = [360, 390, 430];

test('mobile readiness source contracts (viewport, phone MQ, Activity-in-sheet)', () => {
  assert.match(HTML, /viewport-fit=cover/, 'viewport must opt into safe-area insets');
  assert.match(UI, /max-width:\s*900px/, 'phone MQ must cover narrow tablet so dock is not lost');
  assert.match(UI, /document\.body\.append\(S\.feed\)/, 'leaving phone must restore Activity to body (right CSS)');
  assert.match(DASH, /#feed\s*\{[^}]*right:\s*var\(--gutter/, 'desktop Activity stays on the right');
  assert.match(CSS, /html\.bhq-phone\s+\.bhq-dock\s*\{[^}]*display:\s*none/, 'phone hides empty dock shell');
  assert.match(
    CSS,
    /\.bhq-phone\s+\.bhq-sheet\s+#feed\s*\{[^}]*display:\s*block\s*!important/,
    'phone sheet must force-show Activity against ≤1100 hide',
  );
  assert.match(CSS, /html\.bhq-phone[^{]*\{[^}]*overflow-x:\s*hidden/, 'phone must clip horizontal page overflow');
  assert.match(CSS, /--bhq-st:\s*env\(safe-area-inset-top/, 'safe-area tokens present');
  assert.match(CSS, /\.bhq-phone\.bhq-land\s+\.bhq-sheet/, 'landscape phone side-sheet present');
});

async function launchBrowser() {
  if (!chromium) return { error: new Error('playwright module not installed') };
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
    () => state.quality === '4d' && officeKind === '4d' && office?.isTower && office.loaded && office.framesShown > 2,
    null,
    { timeout: 30000 },
  );
  await page.waitForSelector('#topbar', { timeout: 15000 });
}

async function layoutProbe(page) {
  return page.evaluate(() => {
    const html = document.documentElement;
    const sheet = document.querySelector('.bhq-sheet');
    const feed = document.getElementById('feed');
    const dock = document.querySelector('.bhq-dock');
    const panel = document.getElementById('panel');
    const topbar = document.getElementById('topbar');
    const floors = document.getElementById('floors');
    const close = document.querySelector('#panel .bhq-close');
    const sheetKids = sheet
      ? [...sheet.querySelectorAll('[data-dock], #feed, .bhq-tcard')].map((el) => ({
        dock: el.getAttribute('data-dock') || (el.id === 'feed' ? 'feed' : el.className),
        inSheet: sheet.contains(el),
      }))
      : [];
    const boxes = [topbar, floors, sheet, feed, panel].filter(Boolean).map((el) => {
      const r = el.getBoundingClientRect();
      return {
        id: el.id || el.className.split(/\s+/)[0],
        x: r.x, y: r.y, w: r.width, h: r.height,
        right: r.right, bottom: r.bottom,
      };
    });
    return {
      phone: html.classList.contains('bhq-phone'),
      land: html.classList.contains('bhq-land'),
      scrollW: html.scrollWidth,
      innerW: window.innerWidth,
      innerH: window.innerHeight,
      overflowX: html.scrollWidth > window.innerWidth + 1,
      feedInSheet: !!(sheet && feed && sheet.contains(feed)),
      dockDisplay: dock ? getComputedStyle(dock).display : null,
      feedDisplay: feed ? getComputedStyle(feed).display : null,
      topbarVisible: !!(topbar && getComputedStyle(topbar).display !== 'none' && topbar.getBoundingClientRect().height > 0),
      floorsVisible: !!(floors && getComputedStyle(floors).display !== 'none' && floors.getBoundingClientRect().height > 0),
      closeHit: close ? (() => {
        const r = close.getBoundingClientRect();
        return { w: r.width, h: r.height, x: r.x, y: r.y };
      })() : null,
      sheetKids,
      boxes,
      feedRight: feed ? getComputedStyle(feed).right : null,
      feedLeft: feed ? getComputedStyle(feed).left : null,
    };
  });
}

test('mobile readiness clickthrough at 360/390/430 + landscape + desktop', { timeout: 180000 }, async (t) => {
  const browserOrErr = await launchBrowser();
  if (browserOrErr.error || !browserOrErr.newPage) {
    t.skip('Chromium/Chrome not runnable in this environment: ' + (browserOrErr.error?.message || 'no browser'));
    return;
  }
  const { createServer } = require('../src/server');
  const { DemoWatcher } = require('../src/demo');
  const browser = browserOrErr;
  const watcher = new DemoWatcher().start();
  const server = createServer(watcher, { demo: true, privacy: false });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));

    await page.goto(base + '/?sheet=open', { waitUntil: 'domcontentloaded' });
    await waitTower(page);
    await page.waitForTimeout(400);

    // ---- desktop regression: Activity on the right, dock on the left ----
    let probe = await layoutProbe(page);
    assert.equal(probe.phone, false, 'desktop must not use phone chrome');
    assert.equal(probe.overflowX, false, 'desktop must not horizontally overflow');
    assert.ok(probe.feedDisplay !== 'none', 'desktop Activity visible');
    // feed fixed to the right
    const feedBox = probe.boxes.find((b) => b.id === 'feed');
    const floorsBox = probe.boxes.find((b) => b.id === 'floors');
    assert.ok(feedBox, 'feed box present');
    assert.ok(floorsBox, 'floors box present');
    assert.ok(feedBox.x > floorsBox.x, 'Activity should sit to the right of floors/dock column');
    assert.ok(feedBox.right <= probe.innerW + 2, 'Activity must stay on-screen');

    // pick a bot if possible to exercise panel dismiss later
    const member = page.locator('.bhq-member').first();
    if (await member.count()) {
      await member.click({ force: true }).catch(() => {});
      await page.waitForTimeout(300);
    }

    for (const w of PHONE_W) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(350);
      probe = await layoutProbe(page);
      assert.equal(probe.phone, true, `portrait ${w}: expected bhq-phone`);
      assert.equal(probe.land, false, `portrait ${w}: not landscape`);
      assert.equal(probe.overflowX, false, `portrait ${w}: no horizontal overflow (scrollW=${probe.scrollW})`);
      assert.equal(probe.feedInSheet, true, `portrait ${w}: Activity must live in the sheet`);
      assert.equal(probe.dockDisplay, 'none', `portrait ${w}: empty dock shell hidden`);
      assert.ok(probe.topbarVisible, `portrait ${w}: topbar visible`);
      assert.ok(probe.floorsVisible, `portrait ${w}: floor chips visible`);
      assert.ok(
        probe.sheetKids.some((k) => k.dock === 'waiting' || k.dock === 'pipeline' || k.dock === 'finished' || k.dock === 'routines'),
        `portrait ${w}: sheet should hold dock queues: ` + JSON.stringify(probe.sheetKids),
      );
      assert.ok(probe.sheetKids.some((k) => k.dock === 'feed'), `portrait ${w}: sheet holds Activity`);

      // open sheet (already ?sheet=open) and toggle a dock card if present
      const waitingToggle = page.locator('.bhq-sheet [data-dock="waiting"] .bhq-dtoggle, .bhq-sheet [data-dock="pipeline"] .bhq-dtoggle').first();
      if (await waitingToggle.count()) {
        await waitingToggle.click();
        await page.waitForTimeout(200);
      }

      // bot panel: if open, close must be hittable
      const closeBtn = page.locator('#panel .bhq-close');
      if (await closeBtn.isVisible().catch(() => false)) {
        const box = await closeBtn.boundingBox();
        assert.ok(box && box.width >= 40 && box.height >= 40, `portrait ${w}: close hit target >=40`);
        await closeBtn.click();
        await page.waitForTimeout(250);
      }
    }

    for (const h of LAND_H) {
      // landscape phone: width > height, height in the short band that triggers MQ_LAND
      const w = Math.max(740, Math.round(h * 2.1));
      await page.setViewportSize({ width: w, height: h });
      await page.waitForTimeout(400);
      probe = await layoutProbe(page);
      assert.equal(probe.phone, true, `landscape h=${h}: expected bhq-phone`);
      assert.equal(probe.land, true, `landscape h=${h}: expected bhq-land`);
      assert.equal(probe.overflowX, false, `landscape h=${h}: no horizontal overflow`);
      assert.equal(probe.feedInSheet, true, `landscape h=${h}: Activity in side sheet`);
      assert.ok(probe.topbarVisible, `landscape h=${h}: topbar visible`);
    }

    // back to desktop — Activity returns to right, phone chrome off
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.waitForTimeout(400);
    probe = await layoutProbe(page);
    assert.equal(probe.phone, false, 'return to desktop clears bhq-phone');
    assert.equal(probe.feedInSheet, false, 'Activity leaves the sheet on desktop');
    assert.ok(probe.feedDisplay !== 'none', 'desktop Activity visible again');
    const feedAgain = probe.boxes.find((b) => b.id === 'feed');
    assert.ok(feedAgain && feedAgain.x > 400, 'Activity restored on the right half');

    assert.deepEqual(errors, [], 'no page errors: ' + errors.join('; '));
  } finally {
    await browser.close();
    watcher.stop();
    server.closeAllConnections?.();
    await new Promise((resolve) => server.close(resolve));
  }
});
