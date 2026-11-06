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
// Gate / hub columns. East "gate" is only for laterals on clear z — Δz there hits armchairs.
// SWA-3280: lounge columns are NOT free highways; full-height Δz uses the west hub.
export const GATE_ENDS = Object.freeze([-7.0, 7.0]);
export const WEST_HUB_X = -7.0;
// East of tables — climbs AISLE → SOUTH_SERVICE, then escape → west hub (SWA-3280).
export const EAST_STAGING_X = 3.20;
// Live office.glb table_1 ≈ z[-3.4,-2.0]; table_2 ≈ z[0.8, 2.2]; table x≈[-6.8, 2.2].
export const TABLE1_Z = Object.freeze([-3.5, -1.95]);
export const TABLE2_Z = Object.freeze([0.8, 2.2]);
export const TABLE_X = Object.freeze([-6.85, 2.25]);
// Frosted dept divider at x=-3.15; panels cover ~z[-2.375, 1.08]. Mid-aisle long X clips it.
export const DIVIDER_X = -3.15;
// Cross-divider long-X corridor: NORTH only (no walkable south long-X past coffee_bar/glass).
export const NORTH_X_Z = 3.90;
/** @deprecated No walkable south long-X lane; kept so older tests/imports resolve. */
export const SOUTH_X_Z = NORTH_X_Z;

const SEAT_Y = 0.48;
const BLOB_R = 0.46;
// Live stool/pouf/supervisor desk + manager chair rows — never long-lateral on these z values.
const SEAT_ROW_Z = Object.freeze([-4.47, -3.9, -1.5, 0.3, 2.7]);
const SEAT_ROW_TOL = 0.35;
const DEEP_SOUTH_Z = -3.2;
const DEEP_NORTH_Z = 2.8;
// West-of-bar escape lane (south of chair/bar, north of glass). Laterals stay x ≤ SOUTH_ESCAPE_X_MAX.
export const SOUTH_ESCAPE_Z = -5.20;
export const SOUTH_ESCAPE_X_MAX = 1.80;
// Clear east-west lane south of tables / bar stools and south of tree_1 (for elev / plant).
export const SOUTH_SERVICE_Z = -3.55;
// Service lane ends west of the head-high roof_equipment panel at x≈6.90 (SWA-3281 FAIL).
export const SOUTH_SERVICE_X_MAX = 6.20;
// Live GLB lounge blockers (floor_open space). canDrop pads by BLOB_R.
const FURNITURE_XZ = Object.freeze([
  { name: 'armchair_1', x0: 3.00, x1: 4.10, z0: 2.29, z1: 3.20 },
  { name: 'armchair_2', x0: 6.50, x1: 7.60, z0: 2.29, z1: 3.20 },
  { name: 'sofa', x0: 3.69, x1: 6.91, z0: 0.11, z1: 1.08 },
  { name: 'coffee_table', x0: 4.75, x1: 5.85, z0: 1.85, z1: 2.95 },
  { name: 'tree_1', x0: 6.24, x1: 7.75, z0: -2.51, z1: -0.90 },
  { name: 'tree_3', x0: 2.37, x1: 3.50, z0: -5.72, z1: -4.95 },
  { name: 'coffee_bar', x0: 2.85, x1: 6.35, z0: -5.53, z1: -4.67 },
  { name: 'bar_stools', x0: 3.21, x1: 5.99, z0: -4.34, z1: -3.96 },
  // Head-high panel in roof_equipment (QA sample x≈6.90, z[-4.33,-2.47]).
  { name: 'service_panel', x0: 6.70, x1: 7.15, z0: -4.35, z1: -2.45 },
]);

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
      // Fridge west of coffee_bar on the south-escape lane (SWA-3280: old 6.55,-4.55 clipped bar/tree).
      : { coffee: { x: coffeeTable.x - 0.55, y: SEAT_Y, z: coffeeTable.z, yaw: coffeeTable.yaw },
        fridge: { x: 1.50, y: SEAT_Y, z: SOUTH_ESCAPE_Z, yaw: Math.PI } };

  // Plant / elevator on SOUTH_SERVICE_Z, west of the x≈6.90 roof panel (SWA-3281).
  const plant = { x: SOUTH_SERVICE_X_MAX, y: SEAT_Y, z: SOUTH_SERVICE_Z, yaw: -Math.PI / 2 };
  const windowSpot = { x: -2.1, y: SEAT_Y, z: -5.15, yaw: Math.PI };
  const tasks = { x: -6.85, y: SEAT_Y, z: 0.1, yaw: -Math.PI / 2 };
  const screen = { x: -6.85, y: SEAT_Y, z: -4.3, yaw: -Math.PI / 2 };
  const elevator = { x: SOUTH_SERVICE_X_MAX, y: SEAT_Y, z: SOUTH_SERVICE_Z, yaw: Math.PI / 2 };

  // Chat: stand beside a mid-bank desk (furniture spot — no second walker).
  const chatDesk = desks[Math.min(6, desks.length - 1)] || desks[0];
  const chat = chatDesk
    ? { x: chatDesk.pos.x + 0.85, y: SEAT_Y, z: chatDesk.pos.z, yaw: Math.atan2(-0.85, 0) }
    : { x: -0.3, y: SEAT_Y, z: -2.2, yaw: 0 };

  // Pace on the north rail (east of divider) — reachable after cross-divider NORTH travel
  // without an impossible NORTH→AISLE drop through lounge furniture (SWA-3280).
  const paceA = { x: -2.0, y: SEAT_Y, z: NORTH_X_Z, yaw: Math.PI / 2 };
  const paceB = { x: 2.5, y: SEAT_Y, z: NORTH_X_Z, yaw: -Math.PI / 2 };

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

function rangesOverlap(a0, a1, b0, b1) {
  return Math.min(a0, a1) < Math.max(b0, b1) && Math.max(a0, a1) > Math.min(b0, b1);
}

/** True when a straight Δz would cross a communal table slab (live GLB bounds). */
export function crossesCommunalTable(z0, z1) {
  return rangesOverlap(z0, z1, TABLE1_Z[0], TABLE1_Z[1])
    || rangesOverlap(z0, z1, TABLE2_Z[0], TABLE2_Z[1]);
}

/** Columns outside the communal table x-span (still may hit lounge furniture). */
export function outsideTableX(x) {
  return x < TABLE_X[0] || x > TABLE_X[1];
}

/** True when an X segment would walk through the frosted dept divider. */
export function crossesDeptDivider(x0, x1) {
  return Math.min(x0, x1) < DIVIDER_X && Math.max(x0, x1) > DIVIDER_X;
}

/**
 * Divider frost panels cover ~z[-2.38, 1.08]. Long X on these z values clips the glass.
 * NORTH_X_Z and SOUTH_ESCAPE_Z are clear rails; AISLE_Z is not.
 */
export function dividerBlocksZ(z) {
  return z > -2.84 && z < 1.54;
}

/** Long X also blocked when the lane cuts through a communal table slab (coffee z=1.55). */
export function tableBlocksLongX(z) {
  return (z + BLOB_R > TABLE1_Z[0] && z - BLOB_R < TABLE1_Z[1])
    || (z + BLOB_R > TABLE2_Z[0] && z - BLOB_R < TABLE2_Z[1]);
}

/** True when a long lateral at this z would clip divider glass or a table top. */
export function longXBlockedZ(z) {
  // Declared clear rails — including SOUTH_SERVICE (intentional east lane south of tables).
  if (Math.abs(z - NORTH_X_Z) < 0.08 || Math.abs(z - SOUTH_ESCAPE_Z) < 0.08
      || Math.abs(z - SOUTH_SERVICE_Z) < 0.08) return false;
  return dividerBlocksZ(z) || tableBlocksLongX(z);
}

/** Live stool / pouf / supervisor / manager seat rows — long X on these clips neighbors. */
export function isSeatRowZ(z) {
  return SEAT_ROW_Z.some((row) => Math.abs(z - row) < SEAT_ROW_TOL);
}

function hitsFurniture(x, z0, z1) {
  for (const b of FURNITURE_XZ) {
    if (x + BLOB_R > b.x0 && x - BLOB_R < b.x1 && rangesOverlap(z0, z1, b.z0, b.z1)) return true;
  }
  return false;
}

/**
 * Can move between z0 and targetZ at column x without hitting a table or lounge prop.
 * West hub is always allowed (minor table-end brush; only clear full-height column).
 */
export function canDropToZ(z, targetZ, x = null) {
  if (x == null) return !crossesCommunalTable(z, targetZ);
  if (Math.abs(x - WEST_HUB_X) < 0.35) return true;
  // Pad table x by blob radius so edge columns (x≈2.3) are not treated as free.
  const inTableX = x + BLOB_R > TABLE_X[0] && x - BLOB_R < TABLE_X[1];
  if (inTableX && crossesCommunalTable(z, targetZ)) return false;
  if (hitsFurniture(x, z, targetZ)) return false;
  return true;
}

/** Can move between z0 and AISLE_Z at a fixed desk-column x without hitting a table/prop. */
export function canDropToAisle(z, x = null) {
  return canDropToZ(z, AISLE_Z, x);
}

/** Prefer a column where Δz is clear; fall back to the west hub. */
export function findDropColumn(z0, z1, preferX = WEST_HUB_X) {
  const cands = [preferX, WEST_HUB_X, 2.9, 1.5, GATE_ENDS[1], 5.0, -5.0];
  for (const x of cands) {
    if (canDropToZ(z0, z1, x)) return x;
  }
  return WEST_HUB_X;
}

/**
 * Step off a seat row before any long X.
 * Prefer mid-aisle; else north gate; else west-of-bar south escape (manager chair).
 */
export function leaveSeatRowZ(z, x = null) {
  if (!isSeatRowZ(z)) return null;
  const cands = [AISLE_Z, NORTH_X_Z, SOUTH_ESCAPE_Z, SOUTH_SERVICE_Z]
    .filter((c) => Math.abs(c - z) > 0.15)
    .sort((a, b) => Math.abs(a - z) - Math.abs(b - z));
  for (const c of cands) {
    if (canDropToZ(z, c, x)) return c;
  }
  return null;
}

/**
 * Z lane for long X travel.
 * Mid-aisle is fine on one side of the divider; crossing x=-3.15 always uses NORTH_X_Z.
 */
export function pickXCorridorZ(az, bz, ax, bx) {
  if (crossesDeptDivider(ax, bx)) return NORTH_X_Z;
  return AISLE_Z;
}

/**
 * Aisle-aware waypoints (SWA-3280):
 * - Furniture-aware Δz (lounge columns are not free).
 * - Climb AISLE→NORTH at EAST_STAGING_X (2.5), then west on NORTH to the hub.
 * - Never long X on a divider-blocked z.
 * - Deep-south east (elev/plant) uses SOUTH_SERVICE_Z after escape approach.
 */
export function aislePath(from, to) {
  const ax = from.x, az = from.z, bx = to.x, bz = to.z;
  const y = to.y ?? from.y ?? SEAT_Y;
  if (Math.hypot(bx - ax, bz - az) < 1.0) return [{ x: bx, y, z: bz }];

  if (!crossesCommunalTable(az, bz) && Math.abs(az - bz) < 0.9 && Math.abs(ax - bx) < 2.5
      && !crossesDeptDivider(ax, bx) && !isSeatRowZ(az) && !isSeatRowZ(bz)
      && canDropToZ(az, bz, ax) && canDropToZ(az, bz, bx)) {
    return [{ x: bx, y, z: bz }];
  }

  const pts = [];
  const push = (px, pz) => {
    const last = pts[pts.length - 1];
    if (last && Math.hypot(last.x - px, last.z - pz) < 0.08) return;
    if (!pts.length && Math.hypot(ax - px, az - pz) < 0.08) return;
    pts.push({ x: px, y, z: pz });
  };

  let x = ax;
  let z = az;

  /** Reach west hub without long-X through tables / frost wall. */
  const toWestHub = () => {
    if (Math.abs(x - WEST_HUB_X) < 0.08) return;
    // Already on a clear cross-divider rail — walk straight to the hub.
    if (Math.abs(z - NORTH_X_Z) < 0.08 || Math.abs(z - SOUTH_ESCAPE_Z) < 0.08) {
      push(WEST_HUB_X, z); x = WEST_HUB_X;
      return;
    }
    // East bank on a blocked lane: climb first, then staging → escape → hub (SWA-3281 coffee z=1.55).
    if (x > DIVIDER_X && (longXBlockedZ(z) || crossesDeptDivider(x, WEST_HUB_X))) {
      // Climb off the table lane. Coffee (x=3.85,z=1.55) can drop to SERVICE at staging x=3.2.
      if (longXBlockedZ(z) && !canDropToZ(z, NORTH_X_Z, x) && !canDropToZ(z, SOUTH_SERVICE_Z, x)
          && !canDropToZ(z, SOUTH_ESCAPE_Z, x)) {
        if (Math.abs(x - EAST_STAGING_X) > 0.08) { push(EAST_STAGING_X, z); x = EAST_STAGING_X; }
      }
      if (longXBlockedZ(z)) {
        if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
        else if (canDropToZ(z, SOUTH_SERVICE_Z, x)) { push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z; }
        else if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
      }
      if (Math.abs(x - EAST_STAGING_X) > 0.08 && !crossesDeptDivider(x, EAST_STAGING_X)
          && !longXBlockedZ(z)) {
        push(EAST_STAGING_X, z); x = EAST_STAGING_X;
      }
      if (Math.abs(z - SOUTH_ESCAPE_Z) > 0.12 && Math.abs(z - NORTH_X_Z) > 0.12) {
        if (canDropToZ(z, SOUTH_SERVICE_Z, x)) { push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z; }
        else if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
      }
      if (Math.abs(z - SOUTH_ESCAPE_Z) > 0.12) {
        const escX = Math.min(x, SOUTH_ESCAPE_X_MAX);
        if (Math.abs(x - escX) > 0.08) { push(escX, z); x = escX; }
        if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
        else if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
        else { push(WEST_HUB_X, z); x = WEST_HUB_X; push(WEST_HUB_X, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; return; }
      }
      if (Math.abs(z - NORTH_X_Z) < 0.08) {
        push(WEST_HUB_X, NORTH_X_Z); x = WEST_HUB_X; z = NORTH_X_Z;
        return;
      }
      push(WEST_HUB_X, SOUTH_ESCAPE_Z); x = WEST_HUB_X; z = SOUTH_ESCAPE_Z;
      return;
    }
    // Climb off a blocked lane before the final westbound leg.
    if (longXBlockedZ(z)) {
      if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
      else if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
    }
    // Never long-lateral on SOUTH_SERVICE across the room (supervisor oak).
    if (Math.abs(z - SOUTH_SERVICE_Z) < 0.08 && x > SOUTH_ESCAPE_X_MAX) {
      push(SOUTH_ESCAPE_X_MAX, SOUTH_SERVICE_Z); x = SOUTH_ESCAPE_X_MAX;
      if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
      else if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
    }
    push(WEST_HUB_X, z); x = WEST_HUB_X;
  };

  const moveX = (tx) => {
    if (Math.abs(x - tx) < 0.08) return;
    // Cap service lane east of the roof panel.
    let destX = tx;
    if (Math.abs(z - SOUTH_SERVICE_Z) < 0.08 && destX > SOUTH_SERVICE_X_MAX) {
      destX = SOUTH_SERVICE_X_MAX;
    }
    // SOUTH_SERVICE is only an east lane; going west crosses the supervisor oak top.
    if (Math.abs(z - SOUTH_SERVICE_Z) < 0.08 && destX < SOUTH_ESCAPE_X_MAX && x > SOUTH_ESCAPE_X_MAX - 0.05) {
      push(SOUTH_ESCAPE_X_MAX, SOUTH_SERVICE_Z); x = SOUTH_ESCAPE_X_MAX;
      if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
      else { toWestHub(); }
    }
    if ((longXBlockedZ(z) || dividerBlocksZ(z)) && crossesDeptDivider(x, destX)) {
      // Reroute via a clear rail (prefer NORTH).
      if (Math.abs(z - NORTH_X_Z) > 0.12) {
        if (!canDropToZ(z, NORTH_X_Z, x)) {
          if (x > DIVIDER_X) {
            push(EAST_STAGING_X, z); x = EAST_STAGING_X;
          } else {
            toWestHub();
          }
        }
        if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
        else { toWestHub(); }
      }
      push(destX, NORTH_X_Z); x = destX; z = NORTH_X_Z;
      return;
    }
    if (Math.abs(z - SOUTH_ESCAPE_Z) < 0.08 && destX > SOUTH_ESCAPE_X_MAX) {
      push(SOUTH_ESCAPE_X_MAX, SOUTH_ESCAPE_Z); x = SOUTH_ESCAPE_X_MAX;
      push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z;
      push(Math.min(destX, SOUTH_SERVICE_X_MAX), SOUTH_SERVICE_Z); x = Math.min(destX, SOUTH_SERVICE_X_MAX);
      return;
    }
    // Climb before long X on a table lane (coffee); same-side aisle laterals are fine.
    if (tableBlocksLongX(z) && Math.abs(x - destX) > 2.0) {
      if (canDropToZ(z, NORTH_X_Z, x)) { push(x, NORTH_X_Z); z = NORTH_X_Z; }
      else if (canDropToZ(z, SOUTH_SERVICE_Z, x)) { push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z; }
      else if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
    }
    push(destX, z); x = destX;
  };

  const moveZ = (tz) => {
    if (Math.abs(z - tz) < 0.12) return;
    if (canDropToZ(z, tz, x)) { push(x, tz); z = tz; return; }
    toWestHub();
    push(WEST_HUB_X, tz); z = tz; x = WEST_HUB_X;
  };

  // 1) Leave seat row.
  if (isSeatRowZ(z)) {
    const leave = leaveSeatRowZ(z, x);
    if (leave != null && canDropToZ(z, leave, x)) { push(x, leave); z = leave; }
    else moveZ(leave ?? NORTH_X_Z);
  }

  // Same desk-column across a communal table: Δz only at a clear column (never through the slab).
  if (Math.abs(ax - bx) < 0.55 && crossesCommunalTable(az, bz)) {
    const onClearRail = Math.abs(z - NORTH_X_Z) < 0.12 || Math.abs(z - SOUTH_ESCAPE_Z) < 0.12
      || Math.abs(x - WEST_HUB_X) < 0.35;
    if (onClearRail || ax < DIVIDER_X) {
      // Already on a clear rail (or west bank): hub Δz, then hop to bx.
      toWestHub();
      if (Math.abs(z - bz) > 0.12) { push(WEST_HUB_X, bz); z = bz; x = WEST_HUB_X; }
      if (Math.abs(x - bx) > 0.08) { push(bx, bz); x = bx; }
    } else if (ax > DIVIDER_X && bx > DIVIDER_X) {
      // East bank mid-room: staging → service/escape → dest z (or hub if blocked) → bx.
      if (Math.abs(x - EAST_STAGING_X) > 0.08) { push(EAST_STAGING_X, z); x = EAST_STAGING_X; }
      if (canDropToZ(z, SOUTH_SERVICE_Z, x)) { push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z; }
      if (!canDropToZ(z, bz, x)) {
        push(SOUTH_ESCAPE_X_MAX, z); x = SOUTH_ESCAPE_X_MAX;
        if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) { push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z; }
      }
      if (canDropToZ(z, bz, x)) { push(x, bz); z = bz; }
      else {
        toWestHub();
        if (Math.abs(z - bz) > 0.12) { push(WEST_HUB_X, bz); z = bz; x = WEST_HUB_X; }
      }
      if (Math.abs(x - bx) > 0.08) { push(bx, bz); x = bx; }
    } else {
      toWestHub();
      if (Math.abs(z - bz) > 0.12) { push(WEST_HUB_X, bz); z = bz; }
      if (Math.abs(x - bx) > 0.08) { push(bx, bz); x = bx; }
    }
    if (!pts.length) return [{ x: bx, y, z: bz }];
    const last = pts[pts.length - 1];
    if (Math.abs(last.x - bx) > 0.05 || Math.abs(last.z - bz) > 0.05) pts.push({ x: bx, y, z: bz });
    return pts;
  }

  const deepSouthEast = bz <= SOUTH_SERVICE_Z + 0.25 && bx > SOUTH_ESCAPE_X_MAX;
  const deepSouthWest = bz < DEEP_SOUTH_Z && bx <= SOUTH_ESCAPE_X_MAX + 0.25;
  const bothEast = ax > DIVIDER_X && bx > DIVIDER_X;
  const bothWest = ax < DIVIDER_X && bx < DIVIDER_X;

  if (deepSouthEast) {
    toWestHub();
    moveZ(SOUTH_ESCAPE_Z);
    moveX(SOUTH_ESCAPE_X_MAX);
    moveZ(SOUTH_SERVICE_Z);
    moveX(bx);
    if (Math.abs(z - bz) > 0.12) { push(bx, bz); z = bz; }
  } else if (deepSouthWest || (bz < DEEP_SOUTH_Z && bx < 2.6)) {
    // Window / fridge / south-west stands (and window at x≈-2).
    // Prefer a clear drop to ESCAPE at current/staging x before a full hub loop.
    if (Math.abs(z - SOUTH_ESCAPE_Z) > 0.12) {
      if (canDropToZ(z, SOUTH_ESCAPE_Z, x)) {
        push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z;
      } else if (x > DIVIDER_X && canDropToZ(z, SOUTH_SERVICE_Z, EAST_STAGING_X)) {
        push(EAST_STAGING_X, z); x = EAST_STAGING_X;
        push(x, SOUTH_SERVICE_Z); z = SOUTH_SERVICE_Z;
        push(SOUTH_ESCAPE_X_MAX, SOUTH_SERVICE_Z); x = SOUTH_ESCAPE_X_MAX;
        push(x, SOUTH_ESCAPE_Z); z = SOUTH_ESCAPE_Z;
      } else {
        toWestHub();
        moveZ(SOUTH_ESCAPE_Z);
      }
    }
    if (bx <= SOUTH_ESCAPE_X_MAX + 0.2) {
      moveX(bx);
      if (Math.abs(z - bz) > 0.12) moveZ(bz);
    } else {
      moveX(SOUTH_ESCAPE_X_MAX);
      moveZ(SOUTH_SERVICE_Z);
      moveX(bx);
      if (Math.abs(z - bz) > 0.12) moveZ(bz);
    }
  } else if (bothEast) {
    if (Math.abs(z - AISLE_Z) > 0.12) {
      if (canDropToZ(z, AISLE_Z, x)) { push(x, AISLE_Z); z = AISLE_Z; }
      else moveZ(AISLE_Z);
    }
    if (canDropToZ(AISLE_Z, bz, bx)) {
      moveX(bx);
      moveZ(bz);
    } else {
      const col = findDropColumn(AISLE_Z, bz, bx > 5 ? 7.5 : 2.9);
      moveX(col);
      moveZ(bz);
      moveX(bx);
    }
  } else if (bothWest) {
    if (Math.abs(z - AISLE_Z) > 0.12) {
      if (canDropToZ(z, AISLE_Z, x)) { push(x, AISLE_Z); z = AISLE_Z; }
      else moveZ(AISLE_Z);
    }
    if (canDropToZ(z, bz, bx)) { moveX(bx); moveZ(bz); }
    else if (isSeatRowZ(bz) && canDropToAisle(bz, bx)) {
      moveX(bx); moveZ(AISLE_Z); push(bx, bz); z = bz;
    } else {
      moveZ(SOUTH_ESCAPE_Z);
      moveX(Math.min(bx, SOUTH_ESCAPE_X_MAX));
      moveX(bx);
      moveZ(bz);
    }
  } else {
    // Cross-divider via NORTH (decide arrival before walking onto the dest column).
    toWestHub();
    moveZ(NORTH_X_Z);
    if (Math.abs(z - bz) < 0.12) {
      moveX(bx);
    } else if (canDropToZ(NORTH_X_Z, bz, bx)) {
      moveX(bx);
      push(bx, bz); z = bz;
    } else if (isSeatRowZ(bz) && canDropToAisle(bz, bx)) {
      if (bx < DIVIDER_X) {
        // Hub → aisle → seat (never Δz at the desk column through a table).
        push(WEST_HUB_X, AISLE_Z); z = AISLE_Z; x = WEST_HUB_X;
        push(bx, AISLE_Z); x = bx;
        push(bx, bz); z = bz;
      } else {
        moveX(EAST_STAGING_X);
        if (canDropToZ(z, AISLE_Z, x)) { push(x, AISLE_Z); z = AISLE_Z; }
        else { push(WEST_HUB_X, z); push(WEST_HUB_X, AISLE_Z); x = WEST_HUB_X; z = AISLE_Z; moveX(EAST_STAGING_X); }
        push(bx, AISLE_Z); x = bx;
        push(bx, bz); z = bz;
      }
    } else if (Math.abs(bz - AISLE_Z) < 0.2 && bx > DIVIDER_X) {
      moveX(EAST_STAGING_X);
      if (canDropToZ(z, AISLE_Z, x)) { push(x, AISLE_Z); z = AISLE_Z; }
      push(bx, AISLE_Z); x = bx; z = AISLE_Z;
    } else if (bx < DIVIDER_X) {
      push(WEST_HUB_X, bz); z = bz; x = WEST_HUB_X;
      push(bx, bz); x = bx;
    } else {
      const col = findDropColumn(AISLE_Z, bz, 2.9);
      moveX(EAST_STAGING_X);
      moveZ(AISLE_Z);
      moveX(col);
      moveZ(bz);
      moveX(bx);
    }
  }

  if (!pts.length) return [{ x: bx, y, z: bz }];
  const last = pts[pts.length - 1];
  if (Math.abs(last.x - bx) > 0.05 || Math.abs(last.z - bz) > 0.05) pts.push({ x: bx, y, z: bz });
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
