// SWA-3262: sparse ambient walk catalog + aisle path + one-walker pick.
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  INTERACT_ACTIONS,
  buildFloorInteracts,
  aislePath,
  crossesCommunalTable,
  canDropToAisle,
  pickAmbientWalker,
  pickInteract,
  assertTenInteracts,
  createFloorAmbient,
  stepFloorAmbient,
  AISLE_Z,
  AISLE_ENDS,
} from '../web/tower/ambient.js';

test('every floor layout exposes exactly 10 distinct interacts', () => {
  for (const layout of ['sofa', 'media', 'library', 'meeting']) {
    const interacts = buildFloorInteracts({
      lounges: [
        { pos: { x: 5, y: 0.48, z: 0.1 }, yaw: 0 },
        { pos: { x: 5.9, y: 0.48, z: 0.1 }, yaw: 0 },
      ],
      desks: [
        { pos: { x: -2.1, y: 0.48, z: -3.4 }, yaw: 0 },
        { pos: { x: -0.3, y: 0.48, z: -3.4 }, yaw: 0 },
        { pos: { x: 1.5, y: 0.48, z: -3.4 }, yaw: 0 },
        { pos: { x: -2.1, y: 0.48, z: 0.8 }, yaw: Math.PI },
        { pos: { x: -0.3, y: 0.48, z: 0.8 }, yaw: Math.PI },
        { pos: { x: 1.5, y: 0.48, z: 0.8 }, yaw: Math.PI },
        { pos: { x: -3.9, y: 0.48, z: -3.4 }, yaw: 0 },
      ],
    }, layout);
    assertTenInteracts(interacts);
    assert.equal(interacts.length, INTERACT_ACTIONS.length);
    assert.deepEqual(interacts.map((i) => i.act), [...INTERACT_ACTIONS]);
  }
});

test('aisle path detours through the corridor for long desk-crossing trips', () => {
  const from = { x: -4, y: 0.48, z: -3.5 };
  const to = { x: 6, y: 0.48, z: 1.2 };
  const path = aislePath(from, to);
  assert.ok(path.length >= 2);
  assert.ok(path.some((p) => Math.abs(p.z - AISLE_Z) < 0.01));
  assert.ok(path.some((p) => AISLE_ENDS.includes(p.x)), 'routes via a table-end column');
  const last = path[path.length - 1];
  assert.equal(last.x, to.x);
  assert.equal(last.z, to.z);
});

test('aisle path never changes z on a desk-column x through table_1 (QA FAIL)', () => {
  // desk_05 → desk_06 style: same PAIR_X, far stool to near stool / across table_1.
  const pairX = -2.1;
  const from = { x: pairX, y: 0.48, z: -4.45 };
  const to = { x: pairX, y: 0.48, z: -2.35 };
  assert.equal(crossesCommunalTable(from.z, to.z), true);
  const path = aislePath(from, to);
  let prev = from;
  for (const p of path) {
    if (Math.abs(p.z - prev.z) > 0.2) {
      const atEnd = AISLE_ENDS.some((ex) => Math.abs(p.x - ex) < 0.05)
        || AISLE_ENDS.some((ex) => Math.abs(prev.x - ex) < 0.05);
      const dropToAisle = Math.abs(p.z - AISLE_Z) < 0.05 || Math.abs(prev.z - AISLE_Z) < 0.05;
      assert.ok(atEnd || (dropToAisle && canDropToAisle(prev.z)),
        `Δz segment must be at an aisle end or safe drop, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
      if (crossesCommunalTable(prev.z, p.z)) {
        assert.ok(Math.abs(p.x - pairX) > 0.5 || Math.abs(prev.x - pairX) > 0.5, 'must leave PAIR_X before crossing table');
      }
    }
    prev = p;
  }
  const last = path[path.length - 1];
  assert.equal(last.x, to.x);
  assert.equal(last.z, to.z);
});

test('return home and elevator paths stay off the z≈-1.5 stool row (SWA-3273)', () => {
  const assertNoAisleStoolLateral = (path, start, label) => {
    let prev = start;
    for (const p of path) {
      if (Math.abs(p.x - prev.x) > 1.0) {
        // Forbidden: long X travel on the live aisle-stool row (z≈-1.5 ± pouf radius).
        const onStoolRow = (z) => z > -1.95 && z < -1.1;
        assert.ok(!(onStoolRow(prev.z) || onStoolRow(p.z)),
          `${label}: no lateral on stool row, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
      }
      prev = p;
    }
  };

  const coffee = { x: 3.85, y: 0.48, z: 1.55 };
  const desk01 = { x: -5.7, y: 0.48, z: -3.9 };
  const home = aislePath(coffee, desk01);
  assertNoAisleStoolLateral(home, coffee, 'home');
  assert.equal(home[home.length - 1].x, desk01.x);
  assert.equal(home[home.length - 1].z, desk01.z);

  // desk_02 aisle stool → elevator must detour (live table_1 z to -2.0).
  const desk02 = { x: -5.7, y: 0.48, z: -1.5 };
  const elev = { x: 7.55, y: 0.48, z: -2.6 };
  assert.equal(crossesCommunalTable(desk02.z, elev.z), true);
  const elevPath = aislePath(desk02, elev);
  assert.ok(elevPath.length > 1, 'elevator hop must not be a straight clip through table_1');
  assert.ok(elevPath.some((p) => Math.abs(p.z - AISLE_Z) < 0.05));
  assertNoAisleStoolLateral(elevPath, desk02, 'elevator');

  // Meeting from aisle stool must not lateral through neighbors on z=-1.5.
  const desk06 = { x: -2.3, y: 0.48, z: -1.5 };
  const chair = { x: 4.75, y: 0.48, z: 1.03 };
  const meet = aislePath(desk06, chair);
  assertNoAisleStoolLateral(meet, desk06, 'meeting');
});

test('user-busy abort releases ambient without cancelTravel (SWA-3273 reseat race)', () => {
  const interacts = buildFloorInteracts({ lounges: [], desks: [] }, 'sofa');
  const st = createFloorAmbient('ops', { fast: true });
  st.nextAt = 0;
  const home = { pos: { x: 0, y: 0.48, z: -3.4 }, yaw: 0 };
  let traveling = false;
  let ended = 0;
  let released = 0;
  const ctx = {
    now: 1000,
    bots: [{ id: 'blob', status: 'idle', effective_status: 'idle' }],
    interacts,
    homeSpotFor: () => home,
    isUserBusy: () => false,
    isTraveling: () => traveling,
    beginTrip: () => {},
    endTrip: () => { ended += 1; traveling = false; },
    releaseTrip: () => { released += 1; },
    startTravel: () => { traveling = true; },
    setAct: () => {},
    clearAct: () => {},
    actorPos: () => ({ x: 1, y: 0.48, z: AISLE_Z }),
  };
  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'outbound');
  assert.equal(traveling, true);
  ctx.isUserBusy = () => true;
  ctx.now = 1500;
  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'idle');
  assert.equal(released, 1);
  assert.equal(ended, 0, 'must not cancelTravel over an in-flight reseat');
  assert.equal(traveling, true, 'reseat hop stays alive');
});
test('short hops stay direct', () => {
  const path = aislePath({ x: 1, z: 1 }, { x: 1.2, z: 1.1 });
  assert.equal(path.length, 1);
});

test('pickAmbientWalker prefers non-working blobs', () => {
  const bots = [
    { id: 'w1', status: 'working', effective_status: 'working' },
    { id: 'w2', status: 'working', effective_status: 'working' },
    { id: 'r1', status: 'idle', effective_status: 'idle' },
    { id: 'r2', status: 'error', effective_status: 'error' },
  ];
  const counts = { w1: 0, w2: 0, r1: 0, r2: 0 };
  for (let i = 0; i < 80; i++) {
    const p = pickAmbientWalker(bots, { busyIds: new Set() });
    counts[p.id] += 1;
  }
  assert.ok(counts.r1 + counts.r2 > counts.w1 + counts.w2, 'resting should win most draws');
});

test('pickAmbientWalker skips busy ids', () => {
  const bots = [
    { id: 'a', status: 'idle', effective_status: 'idle' },
    { id: 'b', status: 'idle', effective_status: 'idle' },
  ];
  for (let i = 0; i < 20; i++) {
    const p = pickAmbientWalker(bots, { busyIds: new Set(['a']) });
    assert.equal(p.id, 'b');
  }
});

test('floor ambient runs trip → act → return with one walker', () => {
  const interacts = buildFloorInteracts({ lounges: [], desks: [] }, 'sofa');
  const st = createFloorAmbient('ops', { fast: true });
  st.nextAt = 0;
  const home = { pos: { x: 0, y: 0.48, z: -3.4 }, yaw: 0 };
  let traveling = false;
  let act = null;
  let trips = 0;
  const ctx = {
    now: 1000,
    bots: [{ id: 'blob', status: 'idle', effective_status: 'idle' }],
    interacts,
    homeSpotFor: () => home,
    isUserBusy: () => false,
    isTraveling: () => traveling,
    beginTrip: () => { trips += 1; },
    endTrip: () => {},
    startTravel: () => { traveling = true; },
    setAct: (_id, a) => { act = a; traveling = false; },
    clearAct: () => { act = null; },
    actorPos: () => ({ x: 1, y: 0.48, z: AISLE_Z }),
  };

  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'outbound');
  assert.equal(st.walkerId, 'blob');
  assert.equal(trips, 1);

  traveling = false;
  ctx.now = 2000;
  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'act');
  assert.ok(INTERACT_ACTIONS.includes(act));

  ctx.now = st.until + 1;
  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'inbound');
  traveling = true;

  traveling = false;
  ctx.now += 100;
  stepFloorAmbient(st, ctx);
  assert.equal(st.phase, 'idle');
  assert.equal(st.walkerId, null);
});

test('pickInteract rotates away from the last act when possible', () => {
  const interacts = buildFloorInteracts({ lounges: [], desks: [] }, 'sofa');
  const seen = new Set();
  let last = null;
  for (let i = 0; i < 30; i++) {
    const pick = pickInteract(interacts, last);
    assert.ok(pick);
    if (last) assert.notEqual(pick.act, last);
    last = pick.act;
    seen.add(pick.act);
  }
  assert.ok(seen.size >= 5);
});
