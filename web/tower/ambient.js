// SWA-3262: sparse ambient walk-around — one blob per floor, trip → short act → return to seat.
// Ten interact actions exist on every floor (reuse furniture; invent stand-in spots where needed).

export const INTERACT_ACTIONS = Object.freeze([
  'coffee',    // get coffee / coffee machine
  'fridge',    // check fridge / snack
  'window',    // stretch by the window
  'plant',     // water a plant
  'tasks',     // look at Tasks board
  'screen',    // check the wall screen / charts
  'couch',     // sit briefly on couch / lounge
  'elevator',  // visit elevator landing (look only)
  'chat',      // high-five / chat near another desk
  'pace',      // short loop then return
]);

// Default gap between ambient trips on a floor (ms). SWA-3107 spirit: sparse, minutes not seconds.
export const AMBIENT_GAP_MS = Object.freeze([120_000, 300_000]); // 2–5 min
export const ACT_DWELL_MS = Object.freeze([3_500, 7_000]);
// Live GLB aisle stools/poufs sit near z≈-1.5; front-bank stools near z≈-0.25 / 0.30 / 2.70.
// Mid corridor between stool rows — OK for same-side travel, but crosses the dept divider.
export const AISLE_Z = -0.85;
// Outside live table_1 x≈[-6.8, 2.2]: safe columns for mid-aisle Δz (east of tables).
// East mid column stays west of coffee_table / tree deep-south approaches (use GATE_ENDS there).
export const AISLE_ENDS = Object.freeze([-7.0, 3.2]);
// Gate Δz columns: west wall + east strip inside the floor (x≤8), west of elevator shaft (~8.2).
// SWA-3279 FAIL: x=8.2 was outside baked_floor and inside shaft_glass.
export const GATE_ENDS = Object.freeze([-7.0, 7.0]);
// Live office.glb table_1 ≈ z[-3.4,-2.0]; table_2 ≈ z[0.8, 2.2]; table x≈[-6.8, 2.2].
export const TABLE1_Z = Object.freeze([-3.5, -1.95]);
export const TABLE2_Z = Object.freeze([0.8, 2.2]);
export const TABLE_X = Object.freeze([-6.85, 2.25]);
// Frosted dept divider at x=-3.15; panels cover ~z[-2.375, 1.08]. Mid-aisle long X clips it.
export const DIVIDER_X = -3.15;
// Cross-divider long-X corridor: NORTH only.
// SWA-3279: no z clears both coffee_bar (south face -5.53) and glass_back (z=-6) with blob r≈0.46.
// Armchair north faces ≈3.35–3.39; lane at 3.90 clears them (+ pouf row).
export const NORTH_X_Z = 3.90;
/** @deprecated No walkable south long-X lane; kept so older tests/imports resolve. */
export const SOUTH_X_Z = NORTH_X_Z;

const SEAT_Y = 0.48;
// Live stool/pouf/supervisor desk + manager chair rows — never long-lateral on these z values.
const SEAT_ROW_Z = Object.freeze([-4.47, -3.9, -1.5, 0.3, 2.7]);
const SEAT_ROW_TOL = 0.35;
// Deep south (bar / window / fridge) or deep north (lounge) — Δz via GATE_ENDS, not x=3.2.
const DEEP_SOUTH_Z = -3.2;
const DEEP_NORTH_Z = 2.8;
// West-of-bar escape lane (south of chair/bar north face, north of glass+blob).
// Only for laterals that stay x ≲ 2 (never through coffee_bar).
export const SOUTH_ESCAPE_Z = -5.20;

function rnd(a, b) {
  return a + Math.random() * (b - a);
}

function hash01(s) {
  let h = 2166136261;
  for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); }
  return (h >>> 0) / 0xffffffff;
}

/** Build the 10 interact stand points for a floor. Positions are local to floor_open. */
export function buildFloorInteracts(spots = {}, layout = 'sofa') {
  const lounges = (spots.lounges || []).filter(Boolean);
  const desks = (spots.desks || []).filter(Boolean);
  const coffeeTable = lounges[0]
    ? { x: lounges[0].pos.x, y: SEAT_Y, z: lounges[0].pos.z + 0.85, yaw: Math.PI }
    : { x: 5.9, y: SEAT_Y, z: 1.4, yaw: Math.PI };
  const couch = lounges[1] || lounges[0]
    ? (() => {
      const s = lounges[1] || lounges[0];
      return { x: s.pos.x, y: s.pos.y ?? SEAT_Y, z: s.pos.z, yaw: s.yaw || 0, sit: 0.36, lounge: true };
    })()
    : { x: 5.9, y: SEAT_Y, z: 0.12, yaw: 0, sit: 0.36, lounge: true };

  // Floor-appropriate stand-ins: kitchen / media / sofa lounge all map coffee+fridge nearby.
  const pantry = layout === 'media'
    ? { coffee: { x: 3.7, y: SEAT_Y, z: 2.45, yaw: -Math.PI / 2 }, fridge: { x: 3.55, y: SEAT_Y, z: 1.2, yaw: -Math.PI / 2 } }
    : layout === 'meeting'
      ? { coffee: { x: 4.2, y: SEAT_Y, z: 2.9, yaw: 0 }, fridge: { x: 6.9, y: SEAT_Y, z: 2.9, yaw: Math.PI } }
      : { coffee: { x: coffeeTable.x - 0.55, y: SEAT_Y, z: coffeeTable.z, yaw: coffeeTable.yaw },
        fridge: { x: 6.55, y: SEAT_Y, z: -4.55, yaw: Math.PI } };

  const plant = { x: 7.35, y: SEAT_Y, z: -3.15, yaw: -Math.PI / 2 };
  const windowSpot = { x: -2.1, y: SEAT_Y, z: -5.15, yaw: Math.PI };
  const tasks = { x: -6.85, y: SEAT_Y, z: 0.1, yaw: -Math.PI / 2 };
  const screen = { x: -6.85, y: SEAT_Y, z: -4.3, yaw: -Math.PI / 2 };
  const elevator = { x: 7.55, y: SEAT_Y, z: -2.6, yaw: Math.PI / 2 };

  // Chat: stand beside a mid-bank desk (furniture spot — no second walker).
  const chatDesk = desks[Math.min(6, desks.length - 1)] || desks[0];
  const chat = chatDesk
    ? { x: chatDesk.pos.x + 0.85, y: SEAT_Y, z: chatDesk.pos.z, yaw: Math.atan2(-0.85, 0) }
    : { x: -0.3, y: SEAT_Y, z: -2.2, yaw: 0 };

  // Pace stays east of the dept divider so the loop never walks the frosted wall.
  const paceA = { x: -2.0, y: SEAT_Y, z: AISLE_Z, yaw: Math.PI / 2 };
  const paceB = { x: 2.5, y: SEAT_Y, z: AISLE_Z, yaw: -Math.PI / 2 };

  const byAct = {
    coffee: { act: 'coffee', ...pantry.coffee },
    fridge: { act: 'fridge', ...pantry.fridge },
    window: { act: 'window', ...windowSpot },
    plant: { act: 'plant', ...plant },
    tasks: { act: 'tasks', ...tasks },
    screen: { act: 'screen', ...screen },
    couch: { act: 'couch', ...couch },
    elevator: { act: 'elevator', ...elevator },
    chat: { act: 'chat', ...chat },
    pace: { act: 'pace', ...paceA, waypoints: [paceA, paceB, paceA] },
  };

  return INTERACT_ACTIONS.map((act) => {
    const s = byAct[act];
    return {
      act,
      pos: { x: s.x, y: s.y ?? SEAT_Y, z: s.z },
      yaw: s.yaw || 0,
      sit: s.sit || 0,
      lounge: !!s.lounge,
      waypoints: s.waypoints || null,
    };
  });
}

/** True when a z span needs the gate columns (bar/tree/armchair), not mid-aisle x=3.2. */
function needsGateEnds(z0, z1, corridorZ) {
  if (Math.abs(corridorZ - NORTH_X_Z) < 0.05) return true;
  if (Math.min(z0, z1) < DEEP_SOUTH_Z) return true;
  if (Math.max(z0, z1) > DEEP_NORTH_Z) return true;
  return false;
}

function endsFor(z0, z1, corridorZ) {
  return needsGateEnds(z0, z1, corridorZ) ? GATE_ENDS : AISLE_ENDS;
}

/** End column on the same side of the divider as x — Δx there never crosses the frost wall. */
function sameSideEnd(x, z0, z1, corridorZ = AISLE_Z) {
  const ends = endsFor(z0, z1, corridorZ);
  return x < DIVIDER_X ? ends[0] : ends[1];
}

/**
 * Column for deep south/north Δz. West of the coffee bar (x≲2.5) uses the west wall so
 * window/manager approaches never Δz at x=3.2 through tree_3 / bar stools.
 */
function approachEnd(x, z0, z1, corridorZ = AISLE_Z) {
  if (needsGateEnds(z0, z1, corridorZ)) {
    return x < 2.5 ? GATE_ENDS[0] : GATE_ENDS[1];
  }
  return sameSideEnd(x, z0, z1, corridorZ);
}

function rangesOverlap(a0, a1, b0, b1) {
  return Math.min(a0, a1) < Math.max(b0, b1) && Math.max(a0, a1) > Math.min(b0, b1);
}

/** True when a straight Δz would cross a communal table slab (live GLB bounds). */
export function crossesCommunalTable(z0, z1) {
  return rangesOverlap(z0, z1, TABLE1_Z[0], TABLE1_Z[1])
    || rangesOverlap(z0, z1, TABLE2_Z[0], TABLE2_Z[1]);
}

/** Columns outside the communal table x-span can change z freely. */
export function outsideTableX(x) {
  return x < TABLE_X[0] || x > TABLE_X[1];
}

/** True when an X segment would walk through the frosted dept divider. */
export function crossesDeptDivider(x0, x1) {
  return Math.min(x0, x1) < DIVIDER_X && Math.max(x0, x1) > DIVIDER_X;
}

/** Live stool / pouf / supervisor / manager seat rows — long X on these clips neighbors. */
export function isSeatRowZ(z) {
  return SEAT_ROW_Z.some((row) => Math.abs(z - row) < SEAT_ROW_TOL);
}

/**
 * Can move between z0 and targetZ at column x without hitting a table top.
 * Outside the table x-span, Δz is always free (SWA-3279: coffee at x=3.85 is east of tables).
 */
export function canDropToZ(z, targetZ, x = null) {
  if (x != null && outsideTableX(x)) return true;
  return !crossesCommunalTable(z, targetZ);
}

/** Can move between z0 and AISLE_Z at a fixed desk-column x without hitting a table. */
export function canDropToAisle(z, x = null) {
  return canDropToZ(z, AISLE_Z, x);
}

/**
 * Step off a seat row before any long X.
 * Prefer mid-aisle; else north gate; else west-of-bar south escape (manager chair).
 */
export function leaveSeatRowZ(z, x = null) {
  if (!isSeatRowZ(z)) return null;
  const cands = [AISLE_Z, NORTH_X_Z, SOUTH_ESCAPE_Z]
    .filter((c) => Math.abs(c - z) > 0.15)
    .sort((a, b) => Math.abs(a - z) - Math.abs(b - z));
  for (const c of cands) {
    if (canDropToZ(z, c, x)) return c;
  }
  return null;
}

/**
 * Z lane for long X travel.
 * Mid-aisle is fine on one side of the divider; crossing x=-3.15 always uses NORTH_X_Z
 * (no walkable south lane between coffee_bar and glass_back).
 */
export function pickXCorridorZ(az, bz, ax, bx) {
  if (crossesDeptDivider(ax, bx)) return NORTH_X_Z;
  return AISLE_Z;
}

/**
 * Aisle-aware waypoints so travel does not clip communal desks/tables/stools/divider.
 * - Never Δz at a PAIR_X through a table top (X-aware).
 * - Never long lateral along stool/pouf/manager seat rows.
 * - Cross-divider long X only on NORTH_X_Z; east gate column is x=7 (inside floor).
 * - Deep south/north Δz uses GATE_ENDS, not mid-aisle x=3.2 (tree / bar / armchair).
 */
export function aislePath(from, to) {
  const ax = from.x, az = from.z, bx = to.x, bz = to.z;
  const y = to.y ?? from.y ?? SEAT_Y;
  const dist = Math.hypot(bx - ax, bz - az);
  if (dist < 1.0) return [{ x: bx, y, z: bz }];

  // Short hop on the same open side of both tables (e.g. lounge-only).
  if (!crossesCommunalTable(az, bz) && Math.abs(az - bz) < 0.9 && Math.abs(ax - bx) < 2.5
      && !crossesDeptDivider(ax, bx) && !isSeatRowZ(az) && !isSeatRowZ(bz)) {
    return [{ x: bx, y, z: bz }];
  }

  let corridorZ = pickXCorridorZ(az, bz, ax, bx);
  // Same-side seat rows that cannot drop to mid-aisle must leave via north/escape, then
  // any hop that uses the west wall to re-enter east of the divider needs NORTH long-X.
  if (!crossesDeptDivider(ax, bx) && corridorZ === AISLE_Z) {
    if (isSeatRowZ(az) && !canDropToZ(az, AISLE_Z, ax)) {
      const leave = leaveSeatRowZ(az, ax);
      if (leave === NORTH_X_Z) corridorZ = NORTH_X_Z;
      else if (leave === SOUTH_ESCAPE_Z) corridorZ = NORTH_X_Z; // west-wall re-entry crosses divider
      else if (leave != null) corridorZ = leave;
    } else if (isSeatRowZ(bz) && !canDropToZ(bz, AISLE_Z, bx)) {
      const leave = leaveSeatRowZ(bz, bx);
      if (leave === NORTH_X_Z || leave === SOUTH_ESCAPE_Z) corridorZ = NORTH_X_Z;
      else if (leave != null) corridorZ = leave;
    }
  }

  const pts = [];
  const push = (x, z) => {
    const last = pts[pts.length - 1];
    if (last && Math.hypot(last.x - x, last.z - z) < 0.08) return;
    if (!pts.length && Math.hypot(ax - x, az - z) < 0.08) return;
    pts.push({ x, y, z });
  };

  // Reach corridorZ without seat-row laterals or table Δz at desk columns.
  if (Math.abs(az - corridorZ) > 0.2) {
    if (canDropToZ(az, corridorZ, ax)) {
      push(ax, corridorZ);
    } else {
      let curX = ax;
      let curZ = az;
      // Step off seat row at own x first (aisle / north / south-escape).
      if (isSeatRowZ(curZ)) {
        const leave = leaveSeatRowZ(curZ, curX);
        if (leave != null) {
          push(curX, leave);
          curZ = leave;
        }
      }
      if (canDropToZ(curZ, corridorZ, curX)) {
        push(curX, corridorZ);
      } else {
        // Change Z at a free column. South-escape laterals only go WEST (bar is east).
        const onSouthEscape = Math.abs(curZ - SOUTH_ESCAPE_Z) < 0.05 || curZ < DEEP_SOUTH_Z;
        const end = onSouthEscape ? GATE_ENDS[0] : sameSideEnd(curX, curZ, corridorZ, corridorZ);
        if (Math.abs(curX - end) > 0.08) push(end, curZ);
        push(end, corridorZ);
      }
    }
  }

  // Long X on corridorZ, then drop at destination x (never finish with a seat-row lateral).
  if (canDropToZ(bz, corridorZ, bx)) {
    push(bx, corridorZ);
    if (Math.abs(bz - corridorZ) > 0.2) {
      if (isSeatRowZ(bz) && !canDropToZ(corridorZ, bz, bx)) {
        // Approach seat via aisle at seat column.
        const leave = leaveSeatRowZ(bz, bx) ?? AISLE_Z;
        if (Math.abs(leave - corridorZ) > 0.15) push(bx, leave);
        push(bx, bz);
      } else {
        push(bx, bz);
      }
    }
  } else if (isSeatRowZ(bz) && canDropToAisle(bz, bx)) {
    const end = sameSideEnd(bx, corridorZ, AISLE_Z, corridorZ);
    push(end, corridorZ);
    push(end, AISLE_Z);
    push(bx, AISLE_Z);
    push(bx, bz);
  } else if (isSeatRowZ(bz)) {
    // Manager-style seat: arrive via west escape, then Δz to seat at own x.
    const end = GATE_ENDS[0];
    push(end, corridorZ);
    push(end, SOUTH_ESCAPE_Z);
    push(bx, SOUTH_ESCAPE_Z);
    push(bx, bz);
  } else {
    // Deep south/north: Δz at gate column, then short lateral (not along the bar at x=3.2).
    const end = approachEnd(bx, corridorZ, bz, corridorZ);
    const last = pts[pts.length - 1] || { x: ax, z: az };
    // Never mid-aisle across the divider to reach the west wall (window / manager escape).
    let lane = corridorZ;
    if (crossesDeptDivider(last.x, end) && Math.abs(lane - NORTH_X_Z) > 0.05) {
      if (canDropToZ(last.z, NORTH_X_Z, last.x)) push(last.x, NORTH_X_Z);
      else {
        const side = sameSideEnd(last.x, last.z, NORTH_X_Z, NORTH_X_Z);
        if (Math.abs(last.x - side) > 0.08) push(side, last.z);
        push(side, NORTH_X_Z);
      }
      lane = NORTH_X_Z;
    }
    push(end, lane);
    push(end, bz);
    push(bx, bz);
  }

  if (!pts.length) return [{ x: bx, y, z: bz }];
  return pts;
}

export function nextAmbientGapMs(fast = false) {
  if (fast) return rnd(5_000, 9_000);
  return rnd(AMBIENT_GAP_MS[0], AMBIENT_GAP_MS[1]);
}

export function nextActDwellMs() {
  return rnd(ACT_DWELL_MS[0], ACT_DWELL_MS[1]);
}

/**
 * Pick a seated blob for an ambient trip.
 * Prefer non-working; working only ~20% of the time. Skip user-command locks and current travelers.
 */
export function pickAmbientWalker(bots, { busyIds = new Set(), preferWorking = false } = {}) {
  const list = (bots || []).filter((b) => b && b.id && !busyIds.has(b.id));
  if (!list.length) return null;
  const resting = list.filter((b) => {
    const s = b.effective_status || b.status;
    return s !== 'working';
  });
  const working = list.filter((b) => (b.effective_status || b.status) === 'working');
  // ~20% chance to pick working when both pools exist (QA: old ternary never left resting).
  let pool;
  if (preferWorking && working.length) pool = working;
  else if (resting.length && working.length) pool = Math.random() > 0.2 ? resting : working;
  else pool = resting.length ? resting : working;
  if (!pool.length) return null;
  // Stable-ish shuffle: score by hash + random so the same bot is not always first.
  let best = null, bestScore = -1;
  for (const b of pool) {
    const score = hash01(b.id) * 0.35 + Math.random();
    if (score > bestScore) { best = b; bestScore = score; }
  }
  return best;
}

export function pickInteract(interacts, lastAct = null) {
  const list = interacts || [];
  if (!list.length) return null;
  const choices = list.filter((i) => i.act !== lastAct);
  const pool = choices.length ? choices : list;
  return pool[Math.floor(Math.random() * pool.length)] || null;
}

/**
 * Per-floor ambient state machine.
 * phases: idle → outbound → act → inbound → idle
 */
export function createFloorAmbient(floorId, { fast = false } = {}) {
  return {
    floorId,
    nextAt: performanceNow() + nextAmbientGapMs(fast) * (0.4 + hash01(floorId) * 0.6),
    walkerId: null,
    phase: 'idle',
    home: null,
    target: null,
    until: 0,
    lastAct: null,
    fast,
  };
}

function performanceNow() {
  return (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
}

export function ambientBusyIds(stateByFloor) {
  const ids = new Set();
  for (const st of stateByFloor.values()) {
    if (st.walkerId && st.phase !== 'idle') ids.add(st.walkerId);
  }
  return ids;
}

/**
 * Advance one floor's ambient director.
 * ctx: {
 *   now, bots, interacts, homeSpotFor(bot),
 *   isUserBusy(id), isTraveling(id),
 *   startTravel(id, waypoints, yaw),
 *   setAct(id, act, yaw),
 *   clearAct(id),
 * }
 */
export function stepFloorAmbient(st, ctx) {
  const now = ctx.now;
  if (st.phase === 'idle') {
    if (now < st.nextAt) return st;
    const busy = new Set(ctx.busyIds || []);
    for (const b of ctx.bots || []) {
      if (ctx.isUserBusy?.(b.id) || ctx.isTraveling?.(b.id)) busy.add(b.id);
    }
    const bot = pickAmbientWalker(ctx.bots, { busyIds: busy });
    const interact = pickInteract(ctx.interacts, st.lastAct);
    if (!bot || !interact) {
      st.nextAt = now + nextAmbientGapMs(st.fast);
      return st;
    }
    const home = ctx.homeSpotFor(bot);
    if (!home?.pos) {
      st.nextAt = now + nextAmbientGapMs(st.fast);
      return st;
    }
    // Pace walks the full loop in one outbound path; others go straight to the interact.
    let destPath;
    if (interact.waypoints && interact.waypoints.length) {
      destPath = [];
      let cur = home.pos;
      for (const wp of interact.waypoints) {
        destPath = destPath.concat(aislePath(cur, wp));
        cur = wp;
      }
    } else {
      destPath = aislePath(home.pos, interact.pos);
    }
    st.walkerId = bot.id;
    st.phase = 'outbound';
    st.home = { pos: { x: home.pos.x, y: home.pos.y, z: home.pos.z }, yaw: home.yaw || 0 };
    st.target = interact;
    st.lastAct = interact.act;
    ctx.beginTrip?.(bot.id);
    ctx.startTravel?.(bot.id, destPath, interact.yaw);
    return st;
  }

  if (!st.walkerId) {
    st.phase = 'idle';
    st.nextAt = now + nextAmbientGapMs(st.fast);
    return st;
  }

  // User command steals the walker. Release ambient ownership only — do NOT cancelTravel;
  // drag/meeting already started a reseat hop (SWA-3273 FAIL: endTrip erased it → floater).
  if (ctx.isUserBusy?.(st.walkerId)) {
    ctx.clearAct?.(st.walkerId);
    ctx.releaseTrip?.(st.walkerId);
    st.phase = 'idle';
    st.walkerId = null;
    st.target = null;
    st.home = null;
    st.nextAt = now + nextAmbientGapMs(st.fast);
    return st;
  }

  if (st.phase === 'outbound') {
    if (ctx.isTraveling?.(st.walkerId)) return st;
    st.phase = 'act';
    st.until = now + nextActDwellMs() * (st.target?.act === 'pace' ? 0.55 : 1);
    ctx.setAct?.(st.walkerId, st.target?.act || 'idle', st.target?.yaw || 0);
    return st;
  }

  if (st.phase === 'act') {
    if (now < st.until) return st;
    const home = st.home;
    if (!home?.pos) {
      ctx.endTrip?.(st.walkerId);
      st.phase = 'idle';
      st.walkerId = null;
      st.nextAt = now + nextAmbientGapMs(st.fast);
      return st;
    }
    const here = ctx.actorPos?.(st.walkerId) || home.pos;
    const path = aislePath(here, home.pos);
    st.phase = 'inbound';
    ctx.clearAct?.(st.walkerId);
    ctx.startTravel?.(st.walkerId, path, home.yaw);
    return st;
  }

  if (st.phase === 'inbound') {
    if (ctx.isTraveling?.(st.walkerId)) return st;
    ctx.clearAct?.(st.walkerId);
    ctx.endTrip?.(st.walkerId);
    st.phase = 'idle';
    st.walkerId = null;
    st.target = null;
    st.home = null;
    st.nextAt = now + nextAmbientGapMs(st.fast);
    return st;
  }

  return st;
}

export function assertTenInteracts(interacts) {
  if (!Array.isArray(interacts) || interacts.length !== INTERACT_ACTIONS.length) {
    throw new Error(`expected ${INTERACT_ACTIONS.length} interacts, got ${interacts?.length}`);
  }
  const acts = new Set(interacts.map((i) => i.act));
  for (const a of INTERACT_ACTIONS) {
    if (!acts.has(a)) throw new Error(`missing interact ${a}`);
  }
  return true;
}
