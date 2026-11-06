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
// Outside live table_1 x≈[-6.8, 2.2]: safe columns for changing z around the desks.
export const AISLE_ENDS = Object.freeze([-7.0, 3.2]);
// Live office.glb table_1 ≈ z[-3.4,-2.0]; table_2 ≈ z[0.8, 2.2].
export const TABLE1_Z = Object.freeze([-3.5, -1.95]);
export const TABLE2_Z = Object.freeze([0.8, 2.2]);
// Frosted dept divider at x=-3.15; panels cover ~z[-2.375, 1.08]. Mid-aisle long X clips it.
export const DIVIDER_X = -3.15;
// Cross-divider long-X lanes past both tables and the divider ends (SWA-3276 FAIL).
export const SOUTH_X_Z = -4.55; // glass strip, south of supervisor top z[-4.10,-3.40]
export const NORTH_X_Z = 3.20;  // north of desk_12 poufs (z=2.70 + seat-row tol) and table_2

const SEAT_Y = 0.48;
// Live stool/pouf/supervisor seat rows — never long-lateral on these z values.
const SEAT_ROW_Z = Object.freeze([-3.9, -1.5, 0.3, 2.7]);
const SEAT_ROW_TOL = 0.35;

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

function pickAisleEnd(x0, x1) {
  const mid = (x0 + x1) / 2;
  return Math.abs(mid - AISLE_ENDS[0]) <= Math.abs(mid - AISLE_ENDS[1]) ? AISLE_ENDS[0] : AISLE_ENDS[1];
}

/** End column on the same side of the divider as x — Δx there never crosses the frost wall. */
function sameSideEnd(x) {
  return x < DIVIDER_X ? AISLE_ENDS[0] : AISLE_ENDS[1];
}

function rangesOverlap(a0, a1, b0, b1) {
  return Math.min(a0, a1) < Math.max(b0, b1) && Math.max(a0, a1) > Math.min(b0, b1);
}

/** True when a straight Δz would cross a communal table slab (live GLB bounds). */
export function crossesCommunalTable(z0, z1) {
  return rangesOverlap(z0, z1, TABLE1_Z[0], TABLE1_Z[1])
    || rangesOverlap(z0, z1, TABLE2_Z[0], TABLE2_Z[1]);
}

/** True when an X segment would walk through the frosted dept divider. */
export function crossesDeptDivider(x0, x1) {
  return Math.min(x0, x1) < DIVIDER_X && Math.max(x0, x1) > DIVIDER_X;
}

/** Live stool / pouf / supervisor seat rows — long X on these clips neighbors. */
export function isSeatRowZ(z) {
  return SEAT_ROW_Z.some((row) => Math.abs(z - row) < SEAT_ROW_TOL);
}

/** Can move between z0 and targetZ at a fixed desk-column x without hitting a table. */
export function canDropToZ(z, targetZ) {
  return !crossesCommunalTable(z, targetZ);
}

/** Can move between z0 and AISLE_Z at a fixed desk-column x without hitting a table. */
export function canDropToAisle(z) {
  return canDropToZ(z, AISLE_Z);
}

/**
 * Z lane for long X travel.
 * Mid-aisle is fine on one side of the divider; crossing x=-3.15 needs a gate
 * past the frosted panels (and past the communal tables).
 */
export function pickXCorridorZ(az, bz, ax, bx) {
  if (crossesDeptDivider(ax, bx)) {
    const mid = (az + bz) / 2;
    return Math.abs(mid - SOUTH_X_Z) <= Math.abs(mid - NORTH_X_Z) ? SOUTH_X_Z : NORTH_X_Z;
  }
  return AISLE_Z;
}

/**
 * Aisle-aware waypoints so travel does not clip communal desks/tables/stools/divider.
 * - Never Δz at a PAIR_X through a table top.
 * - Never long lateral along stool/pouf/supervisor seat rows.
 * - Long X on AISLE_Z only when it does not cross the dept divider; otherwise SOUTH/NORTH gate.
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

  const corridorZ = pickXCorridorZ(az, bz, ax, bx);
  const endTo = canDropToZ(bz, corridorZ) ? null : sameSideEnd(bx);
  const pts = [];
  const push = (x, z) => {
    const last = pts[pts.length - 1];
    if (last && Math.hypot(last.x - x, last.z - z) < 0.08) return;
    if (!pts.length && Math.hypot(ax - x, az - z) < 0.08) return;
    pts.push({ x, y, z });
  };

  // Reach corridorZ without: seat-row laterals, table Δz at desk columns, or mid-aisle
  // long X across the dept divider (use same-side end, then Δz there).
  if (Math.abs(az - corridorZ) > 0.2) {
    if (canDropToZ(az, corridorZ)) {
      push(ax, corridorZ);
    } else {
      let curX = ax;
      let curZ = az;
      if (isSeatRowZ(curZ) && canDropToAisle(curZ) && Math.abs(curZ - AISLE_Z) > 0.15) {
        push(curX, AISLE_Z);
        curZ = AISLE_Z;
      }
      if (canDropToZ(curZ, corridorZ)) {
        push(curX, corridorZ);
      } else {
        const end = sameSideEnd(curX);
        if (Math.abs(curX - end) > 0.08) push(end, curZ);
        push(end, corridorZ);
      }
    }
  }

  // Long X on corridorZ (gates clear divider+tables; mid-aisle only same-side).
  if (canDropToZ(bz, corridorZ)) {
    push(bx, corridorZ);
    if (Math.abs(bz - corridorZ) > 0.2) push(bx, bz);
  } else {
    const end = endTo || sameSideEnd(bx);
    push(end, corridorZ);
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
