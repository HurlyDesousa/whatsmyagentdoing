// SWA-3262: sparse ambient walk catalog + aisle path + one-walker pick.
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  INTERACT_ACTIONS,
  buildFloorInteracts,
  aislePath,
  crossesCommunalTable,
  crossesDeptDivider,
  canDropToAisle,
  isSeatRowZ,
  pickAmbientWalker,
  pickInteract,
  assertTenInteracts,
  createFloorAmbient,
  stepFloorAmbient,
  AISLE_Z,
  AISLE_ENDS,
  DIVIDER_X,
  SOUTH_X_Z,
  NORTH_X_Z,
  GATE_ENDS,
  leaveSeatRowZ,
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
  // Cross-divider trips use south/north gates; same-side may use mid-aisle.
  assert.ok(
    path.some((p) => Math.abs(p.z - AISLE_Z) < 0.01
      || Math.abs(p.z - SOUTH_X_Z) < 0.01
      || Math.abs(p.z - NORTH_X_Z) < 0.01),
    'routes via a clear X corridor',
  );
  assert.ok(path.some((p) => AISLE_ENDS.includes(p.x)
    || Math.abs(p.z - SOUTH_X_Z) < 0.01
    || Math.abs(p.z - NORTH_X_Z) < 0.01), 'routes via an end column or gate');
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

test('return home and elevator paths stay off seat rows + divider (SWA-3273/3276/3278)', () => {
  const assertSafeLongX = (path, start, label) => {
    let prev = start;
    for (const p of path) {
      if (Math.abs(p.x - prev.x) > 1.0) {
        assert.ok(!isSeatRowZ(prev.z) && !isSeatRowZ(p.z),
          `${label}: no lateral on seat row, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
        if (Math.abs(prev.z - AISLE_Z) < 0.05 || Math.abs(p.z - AISLE_Z) < 0.05) {
          assert.ok(!crossesDeptDivider(prev.x, p.x),
            `${label}: mid-aisle must not cross divider x=${DIVIDER_X}, got ${prev.x}→${p.x} at z≈${prev.z}`);
        }
        // Supervisor oak top ≈ x[-2.13,-0.78] z[-4.10,-3.40]; chair pad ≈(-1.45,-4.47) r0.26.
        const onSupervisorBand = (z) => z > -5.0 && z < -3.35;
        if (onSupervisorBand(prev.z) || onSupervisorBand(p.z)) {
          const crossesDesk = Math.min(prev.x, p.x) < -0.775 && Math.max(prev.x, p.x) > -2.125;
          assert.ok(!crossesDesk,
            `${label}: no long X through supervisor desk/chair, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
        }
        // South gate must sit south of coffee_bar (z≥-5.53) and clear of bar stools.
        if (Math.abs(prev.z - SOUTH_X_Z) < 0.05 || Math.abs(p.z - SOUTH_X_Z) < 0.05) {
          assert.ok(SOUTH_X_Z <= -5.95, `${label}: SOUTH_X_Z must clear coffee_bar south face`);
        }
        // North gate must sit north of armchair north face (z=3.20) + blob.
        if (Math.abs(prev.z - NORTH_X_Z) < 0.05 || Math.abs(p.z - NORTH_X_Z) < 0.05) {
          assert.ok(NORTH_X_Z >= 3.66, `${label}: NORTH_X_Z must clear armchair_1`);
        }
        // Gate long-X must use the far-east column, not mid-aisle x=3.2 (bar/armchair).
        const onGate = Math.abs(prev.z - SOUTH_X_Z) < 0.05 || Math.abs(prev.z - NORTH_X_Z) < 0.05
          || Math.abs(p.z - SOUTH_X_Z) < 0.05 || Math.abs(p.z - NORTH_X_Z) < 0.05;
        if (onGate && Math.min(prev.x, p.x) < 4 && Math.max(prev.x, p.x) > 5) {
          // Crossing the lounge x-band on a gate is fine; Δz columns are checked below.
        }
      }
      // Δz at x≈3.2 through bar/armchair band is forbidden on gate trips.
      if (Math.abs(p.z - prev.z) > 1.0 && Math.abs(p.x - 3.2) < 0.15 && Math.abs(prev.x - 3.2) < 0.15) {
        const zLo = Math.min(prev.z, p.z), zHi = Math.max(prev.z, p.z);
        const hitsBar = zLo < -3.9 && zHi > -4.4;
        const hitsChair = zLo < 2.3 && zHi > 3.2;
        assert.ok(!hitsBar && !hitsChair,
          `${label}: no Δz at x=3.2 through bar stools/armchair, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
      }
      prev = p;
    }
  };

  const coffee = { x: 3.85, y: 0.48, z: 1.55 };
  const desk01 = { x: -5.7, y: 0.48, z: -3.9 };
  const home = aislePath(coffee, desk01);
  assertSafeLongX(home, coffee, 'home');
  assert.equal(home[home.length - 1].x, desk01.x);
  assert.equal(home[home.length - 1].z, desk01.z);
  assert.ok(home.some((p) => Math.abs(p.z - SOUTH_X_Z) < 0.05 || Math.abs(p.z - NORTH_X_Z) < 0.05),
    'cross-divider home uses a gate corridor');

  const desk02 = { x: -5.7, y: 0.48, z: -1.5 };
  const elev = { x: 7.55, y: 0.48, z: -2.6 };
  assert.equal(crossesCommunalTable(desk02.z, elev.z), true);
  const elevPath = aislePath(desk02, elev);
  assert.ok(elevPath.length > 1, 'elevator hop must not be a straight clip through table_1');
  assertSafeLongX(elevPath, desk02, 'elevator');
  assert.ok(elevPath.some((p) => Math.abs(p.x - GATE_ENDS[1]) < 0.05 || Math.abs(p.x - GATE_ENDS[0]) < 0.05),
    'cross-divider elevator uses gate end column');

  const desk06 = { x: -2.3, y: 0.48, z: -1.5 };
  const chair = { x: 4.75, y: 0.48, z: 1.03 };
  const meet = aislePath(desk06, chair);
  assertSafeLongX(meet, desk06, 'meeting');

  const desk12 = { x: -5.7, y: 0.48, z: 2.7 };
  const desk11 = { x: -5.7, y: 0.48, z: 0.3 };
  assertSafeLongX(aislePath(desk12, elev), desk12, 'desk_12');
  assertSafeLongX(aislePath(desk11, elev), desk11, 'desk_11');

  // SWA-3278: seat-row laterals on desk_04 return and desk_16 outbound.
  const desk04 = { x: -4.0, y: 0.48, z: -1.5 };
  assertSafeLongX(aislePath(elev, desk04), elev, 'desk_04_return');
  const desk16 = { x: -2.3, y: 0.48, z: 2.7 };
  assertSafeLongX(aislePath(desk16, elev), desk16, 'desk_16');
  assert.ok(leaveSeatRowZ(2.7) != null && Math.abs(leaveSeatRowZ(2.7) - NORTH_X_Z) < 0.05,
    'desk_16 pouf row leaves via north gate');
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
