// Wallpaper cues: Berlin sun, hop / ding / done flash, and a clean share still.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

function el(tag) {
  const node = {
    tag,
    className: '',
    hidden: false,
    disabled: false,
    type: '',
    textContent: '',
    title: '',
    id: '',
    dataset: {},
    style: {},
    children: [],
    width: 0,
    height: 0,
    get firstChild() { return this.children[0] || null; },
    appendChild(child) { child.parent = this; this.children.push(child); return child; },
    removeChild(child) {
      const i = this.children.indexOf(child);
      if (i >= 0) this.children.splice(i, 1);
      return child;
    },
    addEventListener() {},
    removeEventListener() {},
    setAttribute() {},
    remove() { if (this.parent) this.parent.removeChild(this); },
    contains(n) {
      if (n === this) return true;
      return this.children.some((c) => (c.contains ? c.contains(n) : c === n));
    },
    getContext() { return {}; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 900, height: 700, right: 900, bottom: 700 }; },
    click() {},
  };
  return node;
}

function loadOffice() {
  const sandbox = {
    document: {
      head: el('head'),
      body: el('body'),
      getElementById() { return null; },
      createElement: (tag) => el(tag),
      addEventListener() {},
      removeEventListener() {},
    },
    Image: class { set src(v) { this._src = v; } },
    ResizeObserver: class { observe() {} disconnect() {} },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    requestAnimationFrame: () => 1,
    cancelAnimationFrame() {},
    localStorage: { getItem: () => null, setItem() {} },
    performance: { now: () => Date.now() },
    devicePixelRatio: 1,
    innerWidth: 1280,
    innerHeight: 800,
    console,
    Date,
    Intl,
    Math,
    Map,
    Set,
    Number,
    performanceNow: Date.now,
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../public/office.js'), 'utf8'), sandbox, { filename: 'office.js' });
  const root = el('div');
  const office = new sandbox.Office(root, {});
  return { sandbox, office };
}

function session(key, status) {
  return { key, agent: 'paperclip', status, lastEventAt: Date.now(), startedAt: 1, project: key };
}

test('Now lighting follows Europe/Berlin, and a manual mode still wins', () => {
  const { sandbox } = loadOffice();
  const { officeBerlinHour, officeLightKey, officeSunHour } = sandbox;
  // January is CET (UTC+1). July is CEST (UTC+2).
  assert.equal(officeBerlinHour(new Date('2026-01-15T04:30:00Z')), 5.5);
  assert.equal(officeBerlinHour(new Date('2026-07-15T03:30:00Z')), 5.5);
  assert.equal(officeLightKey(new Date('2026-01-15T04:30:00Z')), 'dawn');
  assert.equal(officeLightKey(new Date('2026-01-15T06:30:00Z')), 'day');
  assert.equal(officeLightKey(new Date('2026-01-15T16:30:00Z')), 'evening');
  assert.equal(officeLightKey(new Date('2026-01-15T22:30:00Z')), 'night');
  assert.equal(officeLightKey(new Date('2026-07-15T15:30:00Z')), 'evening');
  sandbox.OFFICE_LIGHT = 'night';
  assert.equal(officeLightKey(new Date('2026-01-15T11:00:00Z')), 'night');
  assert.equal(officeSunHour(new Date('2026-01-15T11:00:00Z')), 22);
  sandbox.OFFICE_LIGHT = 'day';
  assert.equal(officeSunHour(new Date('2026-01-15T22:00:00Z')), 12);
  sandbox.OFFICE_LIGHT = 'evening';
  assert.equal(officeSunHour(), 18.25);
  sandbox.OFFICE_LIGHT = 'now';
  assert.equal(officeSunHour(new Date('2026-01-15T09:15:00Z')), 10.25);
});

test('the sun is low in the east at dawn, overhead at noon, and low in the west at sunset', () => {
  const { sandbox } = loadOffice();
  const off = sandbox.officeSunOffset;
  const dawn = off(6);
  const noon = off(12);
  const sunset = off(18.25);
  const night = off(22);
  assert.ok(dawn.x < -4, `dawn x ${dawn.x}`);
  assert.ok(Math.abs(noon.x) < 0.5, `noon x ${noon.x}`);
  assert.ok(noon.y > dawn.y && noon.y > sunset.y);
  assert.ok(sunset.x > 4, `sunset x ${sunset.x}`);
  assert.ok(night.y < noon.y);
  assert.notEqual(night.x, sunset.x);
});

test('status changes hop, ding, and flash without repeating inside a family', () => {
  const { sandbox, office } = loadOffice();
  const cues = [];
  office.playCue = (kind) => cues.push(kind);
  assert.equal(office.statusCue('thinking', 'tool'), null);
  assert.equal(office.statusCue('thinking', 'waiting'), 'ding');
  assert.equal(office.statusCue('thinking', 'waiting_user'), 'ding');
  assert.equal(office.statusCue('idle', 'active'), 'hop');
  assert.equal(office.statusCue('tool', 'completed'), 'done');
  assert.equal(office.statusCue('done', 'succeeded'), null);

  office.update([session('bot', 'thinking')]);
  assert.deepEqual(cues, []);
  const p = office.people.get('bot');
  assert.equal(p.hop || 0, 0);

  office.update([session('bot', 'waiting')]);
  assert.deepEqual(cues, ['ding']);
  assert.equal(p.flash || 0, 0);

  office.update([session('bot', 'thinking')]);
  assert.deepEqual(cues, ['ding', 'hop']);
  assert.equal(p.hop, 0.62);
  p.hopT = p.hop / 2;
  const lift = office.hopLift(p);
  assert.ok(lift > 0.1 && lift < 0.2);

  office.update([session('bot', 'tool')]);
  assert.deepEqual(cues, ['ding', 'hop']);

  office.update([session('bot', 'done')]);
  assert.deepEqual(cues, ['ding', 'hop', 'done']);
  assert.equal(p.flash, 1.2);
  p.flashT = 0.3;
  assert.ok(office.flashAmt(p) > 0.4);

  p.hopT = 0.1;
  office.step(0.2);
  assert.ok(p.hop > 0 && p.hopT >= 0.3);
  office.step(0.5);
  assert.equal(p.hop, 0);
  office.step(2);
  assert.equal(p.flash, 0);

  p.s.status = 'typing';
  p.phase = 0;
  const beat = office.workHop(p, 0.1 / 0.42);
  assert.ok(beat > 0.04 && beat < 0.06);
  p.s.status = 'idle';
  assert.equal(office.workHop(p, 0.1 / 0.42), 0);
  office.destroy();
});

test('cue audio collapses a burst and reuses the generated-tone path', () => {
  const { sandbox, office } = loadOffice();
  let t = 1000;
  let chirps = 0;
  sandbox.performance.now = () => t;
  office.playChirp = () => { chirps++; };
  office.playCue('ding');
  office.playCue('hop');
  assert.equal(chirps, 1);
  t = 1300;
  office.playCue('done');
  assert.equal(chirps, 2);
  office.destroy();
});

test('share capture uses the 3D view and skips name and task labels', () => {
  const { office } = loadOffice();
  let bubbles = 0;
  office.bubble = () => { bubbles++; };
  office.ctx = { save() {}, restore() {}, setTransform() {}, fillText() {} };
  office.paintPeopleLabels([[{ s: { status: 'thinking', project: 'Secret Name' } }, { x: 10, y: 12 }]]);
  assert.equal(bubbles, 1);
  office._shareFrame = true;
  office.paintPeopleLabels([[{ s: { status: 'thinking', activity: 'task text' } }, { x: 10, y: 12 }]]);
  assert.equal(bubbles, 1);
  office._shareFrame = false;

  const ring = { visible: true };
  let rendered = 0;
  const glCanvas = { width: 640, height: 360 };
  office.actors = new Map([['bot', { ring }]]);
  office.gl = {
    render() { rendered++; assert.equal(ring.visible, false); },
    domElement: glCanvas,
  };
  office.scene = {};
  office.camera = {};
  office.loaded = true;
  office.sky = { sky: 0x1d2350, night: true };
  const shot = office.captureShare();
  assert.equal(rendered, 1);
  assert.equal(ring.visible, true);
  assert.equal(shot._share.src, glCanvas);
  assert.notEqual(shot._share.src, office.canvas);
  assert.equal(shot._share.backdrop, '#1d2350');
  assert.equal(shot.width, 640);
  assert.equal(shot.height, 360);
  office.destroy();
});
