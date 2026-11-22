// SWA-3639 QA follow-up: boot the shell without a pre-seeded OFFICE_AGENT_BADGES
// and expect EventSource + Office4D construction (the crash QA caught at agentLegend).
import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function el(tag = 'div', id = '') {
  const node = {
    tag,
    id,
    className: '',
    hidden: false,
    disabled: false,
    checked: false,
    open: false,
    value: '',
    textContent: '',
    innerHTML: '',
    style: {},
    dataset: {},
    options: [],
    children: [],
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); },
      remove(c) { this._set.delete(c); },
      toggle(c, on) { if (on) this._set.add(c); else this._set.delete(c); return on; },
      contains(c) { return this._set.has(c); },
    },
    appendChild(c) { this.children.push(c); return c; },
    removeChild(c) {
      const i = this.children.indexOf(c);
      if (i >= 0) this.children.splice(i, 1);
      return c;
    },
    addEventListener() {},
    removeEventListener() {},
    setAttribute() {},
    getAttribute() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    closest() { return null; },
    focus() {},
    click() {},
    contains(n) { return n === this || this.children.includes(n); },
    getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 40, right: 100, bottom: 40 }; },
    play() { return Promise.resolve(); },
    pause() {},
  };
  return node;
}

function loadI18n(sandbox) {
  const src = fs.readFileSync(path.join(root, 'public/i18n.js'), 'utf8');
  vm.runInNewContext(src, sandbox, { filename: 'i18n.js' });
}

function loadWallpaperFeed(sandbox) {
  const src = fs.readFileSync(path.join(root, 'public/wallpaper-feed.js'), 'utf8');
  vm.runInNewContext(src, sandbox, { filename: 'wallpaper-feed.js' });
}

function loadPopout(sandbox) {
  // Real popout.js binds to pip DOM; stub is enough to prove shell boot order.
  sandbox.OfficePopout = class OfficePopout {
    constructor() { this.win = null; }
    sync() {}
    drawPreview() {}
  };
}

test('installOfficeBadges seeds the six agent logos without a prior global', async () => {
  const { installOfficeBadges, OFFICE_AGENT_BADGES } = await import('../web/office-badges.js');
  const target = {};
  installOfficeBadges(target);
  assert.equal(Object.keys(target.OFFICE_AGENT_BADGES).sort().join(','), 'claude,codex,gemini,grokbot,omp,paperclip');
  assert.equal(target.OFFICE_AGENT_BADGES.claude.logo, '/assets/agents/claude.png');
  assert.equal(OFFICE_AGENT_BADGES.paperclip.logo, '/assets/agents/paperclip.svg');
});

test('bootOfficeShell reaches EventSource + Office4D without pre-seeded OFFICE_AGENT_BADGES', async () => {
  const ids = [
    'actLog', 'activeFilter', 'agentBadgeToggle', 'agentLegend', 'agentSeg', 'bgmBtn', 'conn',
    'closePreview', 'dashgrid', 'detail', 'floorSeg', 'langSel', 'legend', 'lightSeg', 'loaderText',
    'main', 'newVer', 'notify', 'office', 'officeBgm', 'officeWrap', 'pipBtn', 'pipError',
    'pipPreview', 'pipVideo', 'routinesBox', 'routinesList', 'routinesN', 'sceneGroup', 'sceneSeg',
    'settingsMenu', 'shareOffice', 'showAgent', 'showAll', 'showIdle', 'showSub', 'side',
    'signOutBtn', 'summary', 'teamList', 'teamN', 'themeBtn', 'tip', 'updBtn', 'ver', 'videoPipBtn',
    'viewSeg', 'wallpaperClear', 'wallpaperFeed', 'wallpaperHint', 'wallpaperSave',
  ];
  const byId = Object.fromEntries(ids.map((id) => [id, el('div', id)]));
  byId.office.classList.add('loading');
  byId.officeBgm.muted = false;
  byId.officeBgm.paused = true;
  byId.officeBgm.volume = 1;
  byId.officeBgm.loop = false;
  byId.officeBgm.currentTime = 0;
  byId.langSel.options = [{ textContent: '' }];
  byId.settingsMenu.querySelector = () => el('summary');
  byId.agentSeg.querySelectorAll = () => [];
  byId.viewSeg.querySelectorAll = () => [];
  byId.lightSeg.querySelectorAll = () => [];
  byId.floorSeg.querySelectorAll = () => [];
  byId.sceneSeg.querySelectorAll = () => [];

  let esBuilt = 0;
  let officeBuilt = 0;
  const listeners = new Map();
  const timers = new Set();
  const nativeSetTimeout = setTimeout;
  const nativeClearTimeout = clearTimeout;
  const nativeSetInterval = setInterval;
  const nativeClearInterval = clearInterval;

  const sandbox = {
    console,
    Date,
    Math,
    JSON,
    Map,
    Set,
    Number,
    String,
    Object,
    Array,
    Promise,
    Symbol,
    URL,
    URLSearchParams,
    Intl,
    TextEncoder,
    TextDecoder,
    clearTimeout(id) { timers.delete(id); return nativeClearTimeout(id); },
    clearInterval(id) { timers.delete(id); return nativeClearInterval(id); },
    setTimeout(fn, ms, ...args) {
      const id = nativeSetTimeout(() => { timers.delete(id); fn(...args); }, ms);
      timers.add(id);
      return id;
    },
    setInterval(_fn, ms) {
      // Keep boot from hanging the test runner on version/SSE watchers.
      const id = nativeSetInterval(() => {}, Math.max(ms || 0, 60_000));
      timers.add(id);
      return id;
    },
    performance: { now: () => Date.now() },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    localStorage: { store: new Map(), getItem(k) { return this.store.has(k) ? this.store.get(k) : null; }, setItem(k, v) { this.store.set(k, String(v)); }, removeItem(k) { this.store.delete(k); } },
    sessionStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    history: { replaceState() {} },
    location: { search: '', pathname: '/', hash: '', href: 'http://127.0.0.1/' },
    navigator: { languages: ['en'], language: 'en', clipboard: null },
    Notification: undefined,
    fetch: async (url) => {
      const u = String(url);
      if (u.includes('/api/me')) return { ok: true, json: async () => ({ auth: false }) };
      if (u.includes('/api/version')) return { ok: true, json: async () => ({ version: 'test' }) };
      if (u.includes('/api/scenes')) return { ok: true, json: async () => ({ installed: [], available: [] }) };
      if (u.includes('/api/sessions')) return { ok: true, json: async () => ({ now: Date.now(), sessions: [] }) };
      return { ok: true, json: async () => ({}) };
    },
    Image: class { set src(v) { this._src = v; this.complete = true; this.naturalWidth = 16; } },
    addEventListener(type, fn) {
      const list = listeners.get('window:' + type) || [];
      list.push(fn);
      listeners.set('window:' + type, list);
    },
    removeEventListener() {},
    EventSource: class {
      constructor() {
        esBuilt += 1;
        this.readyState = 1;
        this.onopen = null;
        this.onmessage = null;
        this.onerror = null;
      }
      addEventListener() {}
      close() { this.readyState = 2; }
    },
    document: {
      documentElement: { dataset: {}, style: {}, lang: 'en' },
      body: el('body'),
      head: el('head'),
      getElementById(id) { return byId[id] || null; },
      createElement: (tag) => el(tag),
      querySelector() { return null; },
      querySelectorAll(sel) {
        if (sel === '[data-t]') return [];
        if (sel === '#themeBtn, .bhq-theme') return [byId.themeBtn];
        if (sel === '.seg button') return [];
        if (sel === '#agentSeg button' || sel === '#viewSeg button') return [];
        return [];
      },
      addEventListener(type, fn) {
        const list = listeners.get(type) || [];
        list.push(fn);
        listeners.set(type, list);
      },
      removeEventListener() {},
    },
    innerWidth: 1280,
    innerHeight: 800,
    devicePixelRatio: 1,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame() {},
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;

  loadI18n(sandbox);
  loadWallpaperFeed(sandbox);
  loadPopout(sandbox);
  assert.equal(sandbox.OFFICE_AGENT_BADGES, undefined);

  // Import shell into this sandbox via dynamic import of the real module, then
  // call boot with globals swapped onto the real globalThis temporarily.
  const badges = await import('../web/office-badges.js');
  const light = await import('../web/office-light.js');
  const { bootOfficeShell } = await import('../web/office-shell.js');

  class FakeOffice4D {
    constructor(root, opts) {
      officeBuilt += 1;
      this.root = root;
      this.opts = opts;
      this.kind = '4d';
      this.isTower = true;
      this.loaded = true;
      this.visible = true;
      this.framesShown = 5;
      this.ready = Promise.resolve(true);
      this.showAgent = true;
    }
    update() {}
    destroy() {}
    syncLight() {}
    setTheme() {}
    setTowerFloor() {}
    captureShare() { return null; }
  }

  const prev = {
    document: globalThis.document,
    window: globalThis.window,
    EventSource: globalThis.EventSource,
    I18N: globalThis.I18N,
    i18nFromBrowser: globalThis.i18nFromBrowser,
    WallpaperFeed: globalThis.WallpaperFeed,
    OfficePopout: globalThis.OfficePopout,
    OFFICE_AGENT_BADGES: globalThis.OFFICE_AGENT_BADGES,
    OFFICE_LIGHT: globalThis.OFFICE_LIGHT,
    localStorage: globalThis.localStorage,
    sessionStorage: globalThis.sessionStorage,
    location: globalThis.location,
    history: globalThis.history,
    matchMedia: globalThis.matchMedia,
    Notification: globalThis.Notification,
    fetch: globalThis.fetch,
    Image: globalThis.Image,
    innerWidth: globalThis.innerWidth,
    innerHeight: globalThis.innerHeight,
    setInterval: globalThis.setInterval,
    clearInterval: globalThis.clearInterval,
    setTimeout: globalThis.setTimeout,
    clearTimeout: globalThis.clearTimeout,
  };

  try {
    delete globalThis.OFFICE_AGENT_BADGES;
    globalThis.document = sandbox.document;
    globalThis.window = sandbox;
    globalThis.EventSource = sandbox.EventSource;
    globalThis.I18N = sandbox.I18N;
    globalThis.i18nFromBrowser = sandbox.i18nFromBrowser;
    globalThis.WallpaperFeed = sandbox.WallpaperFeed;
    globalThis.OfficePopout = sandbox.OfficePopout;
    globalThis.localStorage = sandbox.localStorage;
    globalThis.sessionStorage = sandbox.sessionStorage;
    globalThis.location = sandbox.location;
    globalThis.history = sandbox.history;
    globalThis.matchMedia = sandbox.matchMedia;
    globalThis.Notification = undefined;
    globalThis.fetch = sandbox.fetch;
    globalThis.Image = sandbox.Image;
    globalThis.innerWidth = 1280;
    globalThis.innerHeight = 800;
    globalThis.setInterval = sandbox.setInterval;
    globalThis.clearInterval = sandbox.clearInterval;
    globalThis.setTimeout = sandbox.setTimeout;
    globalThis.clearTimeout = sandbox.clearTimeout;

    // Ensure a clean boot flag
    sandbox.document.documentElement.dataset = {};

    assert.equal(globalThis.OFFICE_AGENT_BADGES, undefined);
    bootOfficeShell({ Office4D: FakeOffice4D });

    assert.ok(globalThis.OFFICE_AGENT_BADGES, 'shell must install OFFICE_AGENT_BADGES');
    assert.equal(Object.keys(globalThis.OFFICE_AGENT_BADGES).length, 6);
    assert.ok(byId.agentLegend.innerHTML.includes('/assets/agents/'), 'agent legend must render logos');
    assert.equal(esBuilt, 1, 'SSE EventSource must open');
    // makeOffice is async via scenesReady.then — flush microtasks / timers
    await new Promise((r) => nativeSetTimeout(r, 30));
    assert.equal(officeBuilt, 1, 'Office4D must construct');
    // Shell publishes page globals onto `window` (our sandbox).
    assert.equal(typeof sandbox.onData, 'function');
    assert.equal(typeof sandbox.makeOffice, 'function');
    assert.equal(sandbox.officeKind, '4d');
    assert.ok(sandbox.office && sandbox.office.isTower);
  } finally {
    for (const id of timers) {
      nativeClearTimeout(id);
      nativeClearInterval(id);
    }
    for (const [k, v] of Object.entries(prev)) {
      if (typeof v === 'undefined') delete globalThis[k];
      else globalThis[k] = v;
    }
    // Keep module badges clean for other tests
    badges.installOfficeBadges(globalThis);
    light.installOfficeLightGlobals(globalThis);
  }
});

test('office4d entry installs badges before shell legend use', () => {
  const entry = fs.readFileSync(path.join(root, 'web/office4d.js'), 'utf8');
  const shell = fs.readFileSync(path.join(root, 'web/office-shell.js'), 'utf8');
  assert.match(entry, /bootOfficeShell\(\{\s*Office4D\s*\}\)/);
  assert.match(shell, /installOfficeBadges\(globalThis\)/);
  const installAt = shell.indexOf('installOfficeBadges(globalThis)');
  const legendAt = shell.indexOf('Object.entries(OFFICE_AGENT_BADGES)');
  assert.ok(installAt >= 0 && legendAt > installAt, 'badges must install before legend build');
});
