// Declarative Floor Blueprint — desk trims, mid-bay (kitchen/recreation), dept zones.
// Pure data + queries (no Three.js). Consumed by the GLB/scene patcher (office.js) and
// the spot & zone resolver (building.js, scene.js). SWA-3641.

/** Server desk numbers → visual desk_NN order used by tower seating. */
export const DESK_ORDER = Object.freeze([
  1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 12, 14, 16, 18, 20, 21,
]);

export const DESK_COUNT = 21;

/** Always-cleared window-side bank stools (all floors) — SWA-3221. */
export const REMOVED_BANK_DESKS = Object.freeze([3, 5, 7, 9]);
/** Logical bot.desk numbers for REMOVED_BANK_DESKS via DESK_ORDER. */
export const REMOVED_LOGICAL_DESKS = Object.freeze([2, 3, 4, 5]);

/** Infra middle columns → kitchen — SWA-3259. */
export const INFRA_MIDDLE_VISUAL_DESKS = Object.freeze([4, 6, 8, 13, 14, 15, 16, 17, 18]);
export const INFRA_REMOVED_LOGICAL_DESKS = Object.freeze([7, 8, 9, 12, 13, 14, 17, 18, 19]);
/** Watch shares the same mid clear → recreation — SWA-3258. */
export const WATCH_MIDDLE_VISUAL_DESKS = INFRA_MIDDLE_VISUAL_DESKS;
export const WATCH_REMOVED_LOGICAL_DESKS = INFRA_REMOVED_LOGICAL_DESKS;

/** Main Floor Websites aisle-mid stools — SWA-3535. */
export const MAIN_WEBSITES_TRIM_VISUAL_DESKS = Object.freeze([4, 6, 8]);
export const MAIN_WEBSITES_TRIM_LOGICAL_DESKS = Object.freeze([7, 8, 9]);

export const FloorKind = Object.freeze({
  MAIN: 'main',
  OPS: 'ops',
  INFRA: 'infra',
  WATCH: 'watch',
  OTHER: 'other',
});

function zones({
  deptNameplates = false,
  tradingDeskZone = false,
  marketingZone = false,
  deptDivider = true,
  infraMidDesks = true,
  infraKitchen = false,
  watchRecreation = false,
  mainWebsitesTrimVisible = true,
} = {}) {
  return Object.freeze({
    deptNameplates,
    tradingDeskZone,
    marketingZone,
    deptDivider,
    infraMidDesks,
    infraKitchen,
    watchRecreation,
    mainWebsitesTrimVisible,
  });
}

const BLUEPRINTS = Object.freeze({
  [FloorKind.MAIN]: Object.freeze({
    kind: FloorKind.MAIN,
    midBayCleared: false,
    websitesAisleTrim: true,
    loungeMode: 'default',
    extraClearedVisualDesks: MAIN_WEBSITES_TRIM_VISUAL_DESKS,
    extraClearedLogicalDesks: MAIN_WEBSITES_TRIM_LOGICAL_DESKS,
    zones: zones({
      deptNameplates: true,
      deptDivider: true,
      infraMidDesks: true,
      mainWebsitesTrimVisible: false,
    }),
  }),
  [FloorKind.OPS]: Object.freeze({
    kind: FloorKind.OPS,
    midBayCleared: false,
    websitesAisleTrim: false,
    loungeMode: 'default',
    extraClearedVisualDesks: Object.freeze([]),
    extraClearedLogicalDesks: Object.freeze([]),
    zones: zones({
      tradingDeskZone: true,
      marketingZone: true,
      deptDivider: true,
      infraMidDesks: true,
      mainWebsitesTrimVisible: true,
    }),
  }),
  [FloorKind.INFRA]: Object.freeze({
    kind: FloorKind.INFRA,
    midBayCleared: true,
    websitesAisleTrim: false,
    loungeMode: 'kitchen',
    extraClearedVisualDesks: INFRA_MIDDLE_VISUAL_DESKS,
    extraClearedLogicalDesks: INFRA_REMOVED_LOGICAL_DESKS,
    zones: zones({
      deptDivider: false,
      infraMidDesks: false,
      infraKitchen: true,
      mainWebsitesTrimVisible: true,
    }),
  }),
  [FloorKind.WATCH]: Object.freeze({
    kind: FloorKind.WATCH,
    midBayCleared: true,
    websitesAisleTrim: false,
    loungeMode: 'recreation',
    extraClearedVisualDesks: WATCH_MIDDLE_VISUAL_DESKS,
    extraClearedLogicalDesks: WATCH_REMOVED_LOGICAL_DESKS,
    zones: zones({
      deptDivider: false,
      infraMidDesks: false,
      infraKitchen: false,
      watchRecreation: true,
      mainWebsitesTrimVisible: true,
    }),
  }),
  [FloorKind.OTHER]: Object.freeze({
    kind: FloorKind.OTHER,
    midBayCleared: false,
    websitesAisleTrim: false,
    loungeMode: 'default',
    extraClearedVisualDesks: Object.freeze([]),
    extraClearedLogicalDesks: Object.freeze([]),
    zones: zones(),
  }),
});

export function floorKind(floorId) {
  const id = String(floorId || '');
  if (id === 'main-floor' || id.startsWith('main-floor-')) return FloorKind.MAIN;
  if (id === 'ops' || id.startsWith('ops-')) return FloorKind.OPS;
  if (id === 'infra' || id.startsWith('infra-')) return FloorKind.INFRA;
  if (id === 'watch' || id.startsWith('watch-')) return FloorKind.WATCH;
  return FloorKind.OTHER;
}

export function isInfraFloor(floorId) {
  return floorKind(floorId) === FloorKind.INFRA;
}

export function isWatchFloor(floorId) {
  return floorKind(floorId) === FloorKind.WATCH;
}

export function isOpsFloor(floorId) {
  return floorKind(floorId) === FloorKind.OPS;
}

export function isMainFloor(floorId) {
  return floorKind(floorId) === FloorKind.MAIN;
}

/** One declarative blueprint per floor kind. */
export function getFloorBlueprint(floorId) {
  return BLUEPRINTS[floorKind(floorId)];
}

export function visualToLogical(visualNum) {
  const logical = DESK_ORDER.indexOf(visualNum) + 1;
  return logical > 0 ? logical : visualNum;
}

export function logicalToVisual(logicalNum) {
  return DESK_ORDER[(logicalNum || 1) - 1] || 1;
}

const REMOVED_BANK_SET = new Set(REMOVED_BANK_DESKS);
const REMOVED_LOGICAL_SET = new Set(REMOVED_LOGICAL_DESKS);

/** Whether a visual desk_NN is seatable on this floor (no WebGL). */
export function isVisualDeskOpen(floorId, visualNum) {
  const n = Number(visualNum);
  if (!Number.isInteger(n) || n < 1) return false;
  if (REMOVED_BANK_SET.has(n)) return false;
  const bp = getFloorBlueprint(floorId);
  return !bp.extraClearedVisualDesks.includes(n);
}

/** Whether a logical bot.desk number is seatable on this floor (no WebGL). */
export function isLogicalDeskOpen(floorId, logicalNum) {
  const n = Number(logicalNum);
  if (!Number.isInteger(n) || n < 1 || n > DESK_COUNT) return false;
  if (REMOVED_LOGICAL_SET.has(n)) return false;
  const bp = getFloorBlueprint(floorId);
  return !bp.extraClearedLogicalDesks.includes(n);
}

/** Union of global + floor-specific cleared visual desks. */
export function clearedVisualDesksFor(floorId) {
  const bp = getFloorBlueprint(floorId);
  return Object.freeze([...REMOVED_BANK_DESKS, ...bp.extraClearedVisualDesks]);
}
