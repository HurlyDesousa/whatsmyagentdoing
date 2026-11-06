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
// Mid-gap between communal table banks (TABLE_Z -3.4 / 0.8). Never walk Δz at a desk-column x —
// that clips table tops and the paired stool on the same PAIR_X (QA FAIL on PR #38).
export const AISLE_Z = -1.3;
// Outside TABLE_X±TABLE_LEN/2 (−6.5…2.3): safe columns for changing z around the desks.
export const AISLE_ENDS = Object.freeze([-7.0, 3.2]);

const SEAT_Y = 0.48;

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

  const paceA = { x: -4.0, y: SEAT_Y, z: AISLE_Z, yaw: Math.PI / 2 };
  const paceB = { x: 1.2, y: SEAT_Y, z: AISLE_Z, yaw: -Math.PI / 2 };

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

/** True when a straight Δz at fixed x would cross a communal table slab. */
export function crossesCommunalTable(z0, z1) {
  const lo = Math.min(z0, z1), hi = Math.max(z0, z1);
  // table_1 slab ~ z∈[-3.95,-2.85]; table_2 ~ z∈[0.25,1.35]
  if (lo < -2.85 && hi > -3.95) return true;
  if (lo < 1.35 && hi > 0.25) return true;
  return false;
}

/**
 * Aisle-aware waypoints so travel does not clip communal desks/tables.
 * Long Δz moves go via a table-end column, then the mid-bank aisle, then in —
 * never straight through a PAIR_X column (desk_05→desk_06 / table_1).
 */
export function aislePath(from, to) {
  const ax = from.x, az = from.z, bx = to.x, bz = to.z;
  const y = to.y ?? from.y ?? SEAT_Y;
  const dist = Math.hypot(bx - ax, bz - az);
  if (dist < 1.2) return [{ x: bx, y, z: bz }];

  // Same side of both tables and no slab cross: direct is fine (short lounge hops).
  if (!crossesCommunalTable(az, bz) && Math.abs(az - bz) < 1.4) {
    return [{ x: bx, y, z: bz }];
  }

  const end = pickAisleEnd(ax, bx);
  const pts = [];
  const push = (x, z) => {
    const last = pts[pts.length - 1];
    if (last && Math.hypot(last.x - x, last.z - z) < 0.08) return;
    if (Math.hypot(ax - x, az - z) < 0.08 && !pts.length) return;
    pts.push({ x, y, z });
  };

  // 1) Lateral along the current stool/lounge row to a clear end column (outside the oak tables).
  if (Math.abs(ax - end) > 0.35) push(end, az);
  // 2) Change z at the end column into the mid-bank aisle.
  if (Math.abs(az - AISLE_Z) > 0.35) push(end, AISLE_Z);
  // 3) If the target is far in x, stay on aisle until the end nearer the target (optional second end).
  const endTo = pickAisleEnd(bx, bx);
  if (endTo !== end && Math.abs(bx - end) > 2.5) push(endTo, AISLE_Z);
  const gate = pts.length ? pts[pts.length - 1].x : end;
  // 4) Leave aisle at the gate x to the target's z, then seat.
  if (Math.abs(bz - AISLE_Z) > 0.35) push(gate, bz);
  push(bx, bz);

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
  const pool = (!preferWorking && resting.length && Math.random() > 0.2) ? resting
    : (resting.length ? resting : working);
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

  // User command steals the walker — abort; seat sync reseats them.
  if (ctx.isUserBusy?.(st.walkerId)) {
    ctx.clearAct?.(st.walkerId);
    ctx.endTrip?.(st.walkerId);
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
