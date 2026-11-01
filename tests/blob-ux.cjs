// SWA-3107: blob auto-rate, send-to targets, and click jelly. The office
// simulator lives in the browser bundle, so this loads it against a tiny DOM.
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
    get firstChild() { return this.children[0] || null; },
    appendChild(child) { child.parent = this; this.children.push(child); return child; },
    removeChild(child) {
      const i = this.children.indexOf(child);
      if (i >= 0) this.children.splice(i, 1);
      return child;
    },
    addEventListener(type, fn) {
      this._ev = this._ev || {};
      (this._ev[type] = this._ev[type] || []).push(fn);
    },
    removeEventListener() {},
    setAttribute() {},
    remove() { if (this.parent) this.parent.removeChild(this); },
    contains(n) {
      if (n === this) return true;
      return this.children.some((c) => (c.contains ? c.contains(n) : c === n));
    },
    getContext() { return {}; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 900, height: 700, right: 900, bottom: 700 }; },
    click() {
      for (const fn of this._ev?.click || []) fn({ preventDefault() {}, stopPropagation() {} });
    },
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
    Math,
    Map,
    Set,
    performanceNow: Date.now,
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../public/office.js'), 'utf8'), sandbox, { filename: 'office.js' });
  const root = el('div');
  const office = new sandbox.Office(root, {});
  return office;
}

function person(office, key, floor = 0) {
  const p = office.newPerson({ key, agent: 'claude', status: 'idle', id: key });
  p.floor = floor;
  p.placeOnArrive = false;
  office.people.set(key, p);
  return p;
}

test('hangout dwell is about ten times the old intervals', () => {
  const office = loadOffice();
  const bands = {
    couch: [8, 20],
    nap: [25, 60],
    pingpong: [15, 30],
  };
  for (const [act, [lo, hi]] of Object.entries(bands)) {
    for (let i = 0; i < 12; i++) {
      const stay = office.dwellFor({ act });
      assert.ok(stay >= lo * 1000 * 10 - 1, `${act} stay ${stay} below 10×`);
      assert.ok(stay <= hi * 1000 * 10 + 1, `${act} stay ${stay} above 10×`);
    }
  }
  for (let i = 0; i < 8; i++) {
    const stay = office.dwellFor({ act: 'stairs', stairs: true });
    assert.ok(stay >= 12000 - 1 && stay <= 22000 + 1, `stairs stay ${stay}`);
  }
  office.destroy();
});

test('send targets follow the blob floor and no-op when furniture is missing', () => {
  const office = loadOffice();
  for (const fl of [-1, 0, 1]) {
    const t = office.blobTargets(fl);
    assert.equal(t.computer, true, `computer on ${fl}`);
    assert.equal(t.couch, true, `couch on ${fl}`);
    assert.equal(t.fridge, fl === 0, `fridge on ${fl}`);
  }

  const basement = person(office, 'basement', -1);
  assert.equal(office.sendBlob('basement', 'fridge'), false);
  assert.equal(basement.poi ?? null, null);
  assert.equal(office.sendBlob('basement', 'couch'), true);
  assert.equal(basement.poi.act, 'couch');
  assert.equal(basement.poi.floor, -1);
  assert.equal(basement.floor, -1);
  assert.ok(basement.path.length > 0);
  assert.equal(basement.poi.yaw, Math.PI / 2);
  assert.equal(basement.mode, 'wander');
  assert.equal(basement.errandUntil, Infinity);

  const ground = person(office, 'ground', 0);
  assert.equal(office.sendBlob('ground', 'fridge'), true);
  assert.equal(ground.poi.act, 'fridge');
  assert.equal(ground.poi.floor, 0);
  assert.equal(ground.poi.sit, 0);

  const loft = person(office, 'loft', 1);
  loft.x = 2; loft.y = 2;
  assert.equal(office.sendBlob('loft', 'computer'), true);
  assert.equal(loft.poi.act, 'type');
  assert.equal(loft.poi.sit, 0.34);
  assert.equal(loft.poi.floor, 1);
  assert.equal(loft.napDesk.floor, 1);
  assert.equal(loft.napDesk.napper, 'loft');
  assert.ok(!office.workingDesk(loft.napDesk));

  office.destroy();
});

test('an errand survives session updates until it expires', () => {
  const office = loadOffice();
  const p = person(office, 'worker', 0);
  const desk = office.plan.desks.find((d) => (d.floor ?? 0) === 0);
  const idx = office.plan.desks.indexOf(desk);
  office.deskOf.set('worker', idx);
  p.desk = desk;
  p.s.status = 'thinking';
  assert.equal(office.sendBlob('worker', 'couch'), true);
  const poi = p.poi;
  const session = { key: 'worker', agent: 'claude', status: 'thinking', lastEventAt: Date.now(), startedAt: 1 };
  office.update([session]);
  assert.equal(p.mode, 'wander');
  assert.equal(p.poi, poi);
  assert.equal(p.poi.act, 'couch');
  assert.equal(p.poi.floor, 0);

  p.errandUntil = Date.now() - 5;
  p.until = p.errandUntil;
  office.update([session]);
  assert.equal(p.mode, 'work');
  assert.equal(p.desk, desk);
  office.destroy();
});

test('left click wobbles and still selects; a drag does not wobble', () => {
  const office = loadOffice();
  const p = person(office, 'blob', 0);
  office.hit = [{ key: 'blob', x0: 0, x1: 30, y0: 0, y1: 40 }];
  let clicks = 0;
  office.onHover = (s, _at, click) => { if (click) clicks++; assert.equal(s, p.s); };
  office._down = { x: 8, y: 8 };
  office.pointer({ clientX: 10, clientY: 12 }, true);
  assert.equal(clicks, 1);
  assert.equal(p.jelly, 0.58);
  const squash = office.jellyScale(p);
  assert.ok(squash.sy < 0.8 && squash.sy > 0.6);
  assert.ok(Math.abs(squash.sx * squash.sx * squash.sy - 1) < 0.02);
  office.step(0.7);
  assert.equal(p.jelly, 0);
  const settled = office.jellyScale(p);
  assert.equal(settled.sx, 1);
  assert.equal(settled.sy, 1);

  office._down = { x: 0, y: 0 };
  office.pointer({ clientX: 22, clientY: 24 }, true);
  assert.equal(clicks, 2);
  assert.equal(p.jelly || 0, 0);
  office.destroy();
});

test('right-click menu enables only destinations on that floor', () => {
  const office = loadOffice();
  const p = person(office, 'menu', -1);
  office.hit = [{ key: 'menu', x0: 0, x1: 40, y0: 0, y1: 40 }];
  let prevented = false;
  office.onBlobContext({
    clientX: 12, clientY: 12,
    preventDefault() { prevented = true; },
  });
  assert.equal(prevented, true);
  const menu = office._blobMenu;
  assert.equal(menu.hidden, false);
  assert.equal(menu._btns.computer.disabled, false);
  assert.equal(menu._btns.couch.disabled, false);
  assert.equal(menu._btns.fridge.disabled, true);
  assert.equal(menu._btns.fridge.title, 'Not on this floor');
  menu._btns.fridge.click();
  assert.equal(p.poi ?? null, null);
  assert.equal(menu.hidden, false);
  menu._btns.computer.click();
  assert.equal(p.poi.act, 'type');
  assert.equal(p.poi.floor, -1);
  assert.equal(menu.hidden, true);

  prevented = false;
  office.onBlobContext({
    clientX: 800, clientY: 800,
    preventDefault() { prevented = true; },
  });
  assert.equal(prevented, false);
  office.destroy();
});
