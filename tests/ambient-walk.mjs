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
  NORTH_X_Z,
  SOUTH_ESCAPE_Z,
  SOUTH_SERVICE_Z,
  GATE_ENDS,
  EAST_STAGING_X,
  ELEV_PLANT_X,
  SOUTH_SERVICE_X_MAX,
  WEST_HUB_X,
  leaveSeatRowZ,
  canDropToZ,
  dividerBlocksZ,
  longXBlockedZ,
  isDeskBankX,
  isSeatColumnX,
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
  // North-rail east stand (lounge z=1.2 at x=6 clips sofa/tree — use elev stand).
  const to = { x: ELEV_PLANT_X, y: 0.48, z: NORTH_X_Z };
  const path = aislePath(from, to);
  assert.ok(path.length >= 2);
  // Cross-divider trips use north gate only; same-side may use mid-aisle.
  assert.ok(
    path.some((p) => Math.abs(p.z - AISLE_Z) < 0.01 || Math.abs(p.z - NORTH_X_Z) < 0.01),
    'routes via a clear X corridor',
  );
  assert.ok(path.some((p) => AISLE_ENDS.includes(p.x) || GATE_ENDS.includes(p.x)
    || Math.abs(p.z - NORTH_X_Z) < 0.01 || Math.abs(p.x - ELEV_PLANT_X) < 0.05),
    'routes via an end column or gate');
  const last = path[path.length - 1];
  assert.equal(last.x, to.x);
  assert.equal(last.z, to.z);
});

test('aisle path never changes z on a desk-column x through table_1 (QA FAIL)', () => {
  // West-bank same PAIR_X across table_1 (east-of-divider bank uses NORTH→aisle→seat).
  const pairX = -5.7;
  const from = { x: pairX, y: 0.48, z: -3.9 };
  const to = { x: pairX, y: 0.48, z: -1.5 };
  assert.equal(crossesCommunalTable(from.z, to.z), true);
  const path = aislePath(from, to);
  let prev = from;
  for (const p of path) {
    if (Math.abs(p.z - prev.z) > 0.2) {
      const atEnd = [...AISLE_ENDS, ...GATE_ENDS].some((ex) => Math.abs(p.x - ex) < 0.05)
        || [...AISLE_ENDS, ...GATE_ENDS].some((ex) => Math.abs(prev.x - ex) < 0.05);
      const dropToAisle = Math.abs(p.z - AISLE_Z) < 0.05 || Math.abs(prev.z - AISLE_Z) < 0.05;
      const dropEscape = Math.abs(p.z - SOUTH_ESCAPE_Z) < 0.05 || Math.abs(prev.z - SOUTH_ESCAPE_Z) < 0.05
        || Math.abs(p.z - NORTH_X_Z) < 0.05 || Math.abs(prev.z - NORTH_X_Z) < 0.05
        || Math.abs(p.z - SOUTH_SERVICE_Z) < 0.05 || Math.abs(prev.z - SOUTH_SERVICE_Z) < 0.05;
      assert.ok(atEnd || dropEscape || (dropToAisle && canDropToAisle(prev.z)),
        `Δz segment must be at an aisle end or safe drop, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
      if (crossesCommunalTable(prev.z, p.z)) {
        assert.ok(Math.abs(p.x - pairX) > 0.5 || Math.abs(prev.x - pairX) > 0.5, 'must leave PAIR_X before crossing table');
      }
    }
    // No arrival long-X on a divider-blocked / seat-row z (SWA-3282).
    if (Math.abs(p.x - prev.x) > 1.0) {
      assert.ok(!longXBlockedZ(prev.z) || Math.abs(prev.z - NORTH_X_Z) < 0.08
        || Math.abs(prev.z - SOUTH_ESCAPE_Z) < 0.08 || Math.abs(prev.z - SOUTH_SERVICE_Z) < 0.08
        || Math.abs(prev.z - AISLE_Z) < 0.08,
        `no long X on blocked z, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
      if ((dividerBlocksZ(prev.z) || dividerBlocksZ(p.z)) && Math.abs(prev.z - AISLE_Z) > 0.08) {
        assert.ok(!crossesDeptDivider(prev.x, p.x),
          `no divider cross on blocked z, got ${prev.x}→${p.x} at z≈${prev.z}`);
      }
    }
    prev = p;
  }
  const last = path[path.length - 1];
  assert.equal(last.x, to.x);
  assert.equal(last.z, to.z);
});

test('return home and elevator paths stay off seat rows + divider (SWA-3273…3280)', () => {
  assert.ok(GATE_ENDS[1] <= 7.5 && GATE_ENDS[1] >= 6.5, 'east gate inside floor, west of shaft');
  assert.ok(NORTH_X_Z >= 3.66, 'NORTH_X_Z clears armchair north face');
  assert.ok(canDropToZ(AISLE_Z, SOUTH_SERVICE_Z, EAST_STAGING_X), 'east staging climbs aisle→service');

  const assertSafeLongX = (path, start, label) => {
    let prev = start;
    for (const p of path) {
      assert.ok(prev.z > -5.85 && p.z > -5.85,
        `${label}: path must stay inside floor / off glass, got ${prev.z}→${p.z}`);
      assert.ok(prev.x <= 7.6 && p.x <= 7.6,
        `${label}: path must stay west of shaft, got x ${prev.x}→${p.x}`);
      if (Math.abs(p.x - prev.x) > 1.0) {
        assert.ok(!isSeatRowZ(prev.z) && !isSeatRowZ(p.z),
          `${label}: no lateral on seat row, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
        if (dividerBlocksZ(prev.z) || dividerBlocksZ(p.z)) {
          assert.ok(!crossesDeptDivider(prev.x, p.x),
            `${label}: no divider cross on blocked z, got ${prev.x}→${p.x} at z≈${prev.z}`);
        }
        const onSupervisorBand = (z) => z > -5.0 && z < -3.35;
        if (onSupervisorBand(prev.z) || onSupervisorBand(p.z)) {
          const crossesDesk = Math.min(prev.x, p.x) < -0.775 && Math.max(prev.x, p.x) > -2.125;
          assert.ok(!crossesDesk,
            `${label}: no long X through supervisor desk/chair, got ${prev.x},${prev.z} → ${p.x},${p.z}`);
        }
      }
      // Tall Δz only at clear columns (hub / staging), never desk-bank / meeting (SWA-3284).
      if (Math.abs(p.z - prev.z) > 1.0 && Math.abs(p.x - prev.x) < 0.25) {
        const mx = (prev.x + p.x) / 2;
        const atHub = Math.abs(mx - WEST_HUB_X) < 0.35;
        const aisleToNearSeat = Math.abs(prev.z - AISLE_Z) < 0.08 && Math.abs(p.z - AISLE_Z) < 1.0
          && (isSeatRowZ(p.z) || (p.z > 0.5 && p.z < 1.2));
        const escapeToSeat = Math.abs(prev.z - SOUTH_ESCAPE_Z) < 0.08 && isSeatRowZ(p.z);
        assert.ok(atHub || aisleToNearSeat || escapeToSeat || canDropToZ(prev.z, p.z, mx),
          `${label}: Δz must be furniture-clear at x=${mx.toFixed(2)}, got ${prev.z}→${p.z}`);
        // Never aisle↔NORTH on a desk-bank / seat column (laptop screens). Hub is fine.
        const northAisle = (Math.abs(prev.z - AISLE_Z) < 0.08 && Math.abs(p.z - NORTH_X_Z) < 0.08)
          || (Math.abs(p.z - AISLE_Z) < 0.08 && Math.abs(prev.z - NORTH_X_Z) < 0.08);
        if (northAisle && !atHub && (isDeskBankX(mx) || isSeatColumnX(mx))) {
          assert.fail(`${label}: no NORTH↔AISLE on desk/seat column x=${mx.toFixed(2)}`);
        }
        if (Math.abs(prev.z - NORTH_X_Z) < 0.08 && p.z > 0.5 && p.z < 1.2 && mx > 4.3 && mx < 6.8) {
          assert.fail(`${label}: no NORTH→chair drop through conference at x=${mx.toFixed(2)}`);
        }
      }
      prev = p;
    }
  };

  // Coffee / elev on NORTH rail (SWA-3282: old z=1.55 / service x=6.20 clipped roof panels).
  const coffee = { x: 3.85, y: 0.48, z: NORTH_X_Z };
  const desk01 = { x: -5.7, y: 0.48, z: -3.9 };
  const home = aislePath(coffee, desk01);
  assertSafeLongX(home, coffee, 'home');
  assert.equal(home[home.length - 1].x, desk01.x);
  assert.equal(home[home.length - 1].z, desk01.z);

  const desk02 = { x: -5.7, y: 0.48, z: -1.5 };
  const elev = { x: ELEV_PLANT_X, y: 0.48, z: NORTH_X_Z };
  const elevPath = aislePath(desk02, elev);
  assert.ok(elevPath.length > 1, 'elevator hop must not be a straight clip through table_1');
  assertSafeLongX(elevPath, desk02, 'elevator');
  assert.ok(elevPath.every((p) => p.x <= ELEV_PLANT_X + 0.05),
    'elevator stand stays on north rail, west of shaft');
  assert.ok(SOUTH_SERVICE_X_MAX <= 3.0, 'service lane capped west of mid roof panel');

  const desk06 = { x: -2.3, y: 0.48, z: -1.5 };
  const chair = { x: 4.75, y: 0.48, z: 1.03 };
  const meet = aislePath(desk06, chair);
  assertSafeLongX(meet, desk06, 'meeting');
  assert.ok(!meet.some((p, i) => {
    if (!i) return false;
    const prev = meet[i - 1];
    // Reject NORTH→chair (through conference); aisle→chair is the required approach.
    return Math.abs(p.x - 4.75) < 0.1 && Math.abs(prev.x - 4.75) < 0.1
      && Math.abs(prev.z - NORTH_X_Z) < 0.08 && p.z < 1.2 && p.z > 0.5;
  }), 'meeting must not Δz from NORTH at x=4.75 through the conference top');

  const desk12 = { x: -5.7, y: 0.48, z: 2.7 };
  const desk11 = { x: -5.7, y: 0.48, z: 0.3 };
  assertSafeLongX(aislePath(desk12, elev), desk12, 'desk_12');
  assertSafeLongX(aislePath(desk11, elev), desk11, 'desk_11');

  const desk04 = { x: -4.0, y: 0.48, z: -1.5 };
  assertSafeLongX(aislePath(elev, desk04), elev, 'desk_04_return');
  const desk16 = { x: -2.3, y: 0.48, z: 2.7 };
  assertSafeLongX(aislePath(desk16, elev), desk16, 'desk_16');
  assert.ok(leaveSeatRowZ(2.7) != null && Math.abs(leaveSeatRowZ(2.7) - NORTH_X_Z) < 0.05,
    'desk_16 pouf row leaves via north gate');

  const desk21 = { x: -1.45, y: 0.48, z: -4.47 };
  assert.ok(isSeatRowZ(-4.47), 'manager chair is a seat row');
  assertSafeLongX(aislePath(desk21, elev), desk21, 'desk_21');
  const fridge = { x: 1.5, y: 0.48, z: SOUTH_ESCAPE_Z };
  const windowSpot = { x: -2.1, y: 0.48, z: -5.15 };
  assertSafeLongX(aislePath(desk06, fridge), desk06, 'fridge');
  assertSafeLongX(aislePath(desk06, windowSpot), desk06, 'window');
  assertSafeLongX(aislePath(desk01, { x: -2.0, y: 0.48, z: NORTH_X_Z }), desk01, 'pace');

  // SWA-3282: coffee/elev on NORTH; no service long-X past mid panel; no seat-row home lateral.
  const coffeePath = aislePath(coffee, desk01);
  assertSafeLongX(coffeePath, coffee, 'coffee_home');
  const coffeeBack = aislePath(desk01, coffee);
  assertSafeLongX(coffeeBack, desk01, 'desk01_coffee');
  assert.ok(!coffeeBack.some((p, i) => {
    if (!i) return false;
    const prev = coffeeBack[i - 1];
    return Math.abs(p.x - 3.85) < 0.1 && Math.abs(prev.x - 3.85) < 0.1
      && Math.min(prev.z, p.z) < 2.0 && Math.max(prev.z, p.z) > 3.0;
  }), 'coffee arrival must not Δz at x=3.85 through armchair_1');

  const elev12 = aislePath(desk12, elev);
  assertSafeLongX(elev12, desk12, 'desk12_elev');
  let prev = desk12;
  for (const p of elev12) {
    if (Math.abs(p.z - SOUTH_SERVICE_Z) < 0.05 && Math.abs(prev.z - SOUTH_SERVICE_Z) < 0.05) {
      assert.ok(Math.max(prev.x, p.x) <= SOUTH_SERVICE_X_MAX + 0.05,
        'service lane stays west of mid roof panel');
    }
    prev = p;
  }

  // Return from window/fridge must not long-X on the seat row through the divider.
  const winHome = aislePath(windowSpot, desk06);
  assertSafeLongX(winHome, windowSpot, 'window_home');
  const fridgeHome = aislePath(fridge, desk06);
  assertSafeLongX(fridgeHome, fridge, 'fridge_home');

  // SWA-3283: couch stand is on NORTH rail; home must not long-X on lounge z through frost.
  const couch = { x: 5.30, y: 0.48, z: NORTH_X_Z };
  assertSafeLongX(aislePath(couch, desk01), couch, 'couch_home');
  const sameCol = aislePath(desk02, desk01);
  assertSafeLongX(sameCol, desk02, 'same_col');
  // Window-bank seat: approach from south escape, not aisle→seat across the table.
  assert.ok(sameCol.some((p, i) => {
    if (!i) return false;
    const prev = sameCol[i - 1];
    return Math.abs(prev.z - SOUTH_ESCAPE_Z) < 0.08 && Math.abs(p.z - desk01.z) < 0.08
      && Math.abs(p.x - desk01.x) < 0.1;
  }), 'window-bank seat rises from south escape');
  assert.ok(!sameCol.some((p, i) => {
    if (!i) return false;
    const prev = sameCol[i - 1];
    return Math.abs(prev.z - AISLE_Z) < 0.08 && Math.abs(p.z - desk01.z) < 0.08
      && Math.abs(p.x - desk01.x) < 0.1;
  }), 'same-column must not aisle→window-seat through the table');
  // Meeting chair: hub drops to aisle, then aisle→chair (never NORTH→AISLE at x=4.75).
  assert.equal(meet[meet.length - 1].z, chair.z);
  assert.ok(meet.some((p, i) => {
    if (!i) return false;
    const prev = meet[i - 1];
    return Math.abs(prev.z - AISLE_Z) < 0.08 && Math.abs(p.x - chair.x) < 0.1
      && Math.abs(p.z - chair.z) < 0.08;
  }), 'meeting chair rises from the aisle, not through the conference top');
  assert.ok(!meet.some((p, i) => {
    if (!i) return false;
    const prev = meet[i - 1];
    return Math.abs(p.x - chair.x) < 0.1 && Math.abs(prev.x - chair.x) < 0.1
      && Math.abs(prev.z - NORTH_X_Z) < 0.08 && Math.abs(p.z - AISLE_Z) < 0.08;
  }), 'meeting must not NORTH→AISLE at the chair column');
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
