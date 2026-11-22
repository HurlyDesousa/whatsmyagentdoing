// SWA-3641: Floor Blueprint desk spots + zone rules without WebGL.
import assert from 'node:assert/strict';
import test from 'node:test';
import {
  DESK_ORDER,
  DESK_COUNT,
  FloorKind,
  REMOVED_BANK_DESKS,
  REMOVED_LOGICAL_DESKS,
  INFRA_MIDDLE_VISUAL_DESKS,
  INFRA_REMOVED_LOGICAL_DESKS,
  MAIN_WEBSITES_TRIM_VISUAL_DESKS,
  MAIN_WEBSITES_TRIM_LOGICAL_DESKS,
  floorKind,
  getFloorBlueprint,
  isVisualDeskOpen,
  isLogicalDeskOpen,
  visualToLogical,
  logicalToVisual,
  clearedVisualDesksFor,
} from '../web/tower/floor-blueprint.js';

test('floorKind maps ids and hyphenated variants', () => {
  assert.equal(floorKind('main-floor'), FloorKind.MAIN);
  assert.equal(floorKind('main-floor-a'), FloorKind.MAIN);
  assert.equal(floorKind('ops'), FloorKind.OPS);
  assert.equal(floorKind('ops-night'), FloorKind.OPS);
  assert.equal(floorKind('infra'), FloorKind.INFRA);
  assert.equal(floorKind('infra-2'), FloorKind.INFRA);
  assert.equal(floorKind('watch'), FloorKind.WATCH);
  assert.equal(floorKind('watch-east'), FloorKind.WATCH);
  assert.equal(floorKind('loft'), FloorKind.OTHER);
  assert.equal(floorKind(null), FloorKind.OTHER);
});

test('DESK_ORDER round-trips visual ↔ logical', () => {
  assert.equal(DESK_ORDER.length, DESK_COUNT);
  for (let logical = 1; logical <= DESK_COUNT; logical++) {
    const visual = logicalToVisual(logical);
    assert.equal(visualToLogical(visual), logical);
  }
  for (const v of REMOVED_BANK_DESKS) {
    assert.ok(REMOVED_LOGICAL_DESKS.includes(visualToLogical(v)));
  }
});

test('global removed bank desks are closed on every floor', () => {
  for (const floor of ['main-floor', 'ops', 'infra', 'watch', 'loft']) {
    for (const v of REMOVED_BANK_DESKS) {
      assert.equal(isVisualDeskOpen(floor, v), false, `${floor} visual ${v}`);
    }
    for (const d of REMOVED_LOGICAL_DESKS) {
      assert.equal(isLogicalDeskOpen(floor, d), false, `${floor} logical ${d}`);
    }
  }
});

test('Main trims Websites aisle-mid stools only', () => {
  const bp = getFloorBlueprint('main-floor');
  assert.equal(bp.websitesAisleTrim, true);
  assert.equal(bp.midBayCleared, false);
  assert.equal(bp.zones.deptNameplates, true);
  assert.equal(bp.zones.mainWebsitesTrimVisible, false);
  for (const v of MAIN_WEBSITES_TRIM_VISUAL_DESKS) {
    assert.equal(isVisualDeskOpen('main-floor', v), false);
    assert.equal(isVisualDeskOpen('ops', v), true);
  }
  for (const d of MAIN_WEBSITES_TRIM_LOGICAL_DESKS) {
    assert.equal(isLogicalDeskOpen('main-floor', d), false);
    assert.equal(isLogicalDeskOpen('ops', d), true);
  }
  // Research mid (visual 13) stays open on Main.
  assert.equal(isVisualDeskOpen('main-floor', 13), true);
});

test('Infra and Watch clear the shared mid bay', () => {
  for (const floor of ['infra', 'watch']) {
    const bp = getFloorBlueprint(floor);
    assert.equal(bp.midBayCleared, true);
    assert.equal(bp.zones.deptDivider, false);
    assert.equal(bp.zones.infraMidDesks, false);
    for (const v of INFRA_MIDDLE_VISUAL_DESKS) {
      if (REMOVED_BANK_DESKS.includes(v)) continue;
      assert.equal(isVisualDeskOpen(floor, v), false, `${floor} visual ${v}`);
    }
    for (const d of INFRA_REMOVED_LOGICAL_DESKS) {
      assert.equal(isLogicalDeskOpen(floor, d), false, `${floor} logical ${d}`);
    }
  }
  assert.equal(getFloorBlueprint('infra').loungeMode, 'kitchen');
  assert.equal(getFloorBlueprint('infra').zones.infraKitchen, true);
  assert.equal(getFloorBlueprint('watch').loungeMode, 'recreation');
  assert.equal(getFloorBlueprint('watch').zones.watchRecreation, true);
});

test('Ops keeps mid desks and shows Trading + Marketing zones', () => {
  const bp = getFloorBlueprint('ops');
  assert.equal(bp.midBayCleared, false);
  assert.equal(bp.websitesAisleTrim, false);
  assert.equal(bp.zones.tradingDeskZone, true);
  assert.equal(bp.zones.marketingZone, true);
  assert.equal(bp.zones.deptNameplates, false);
  assert.equal(isVisualDeskOpen('ops', 4), true);
  assert.equal(isVisualDeskOpen('ops', 13), true);
});

test('clearedVisualDesksFor unions global + floor extras', () => {
  const main = clearedVisualDesksFor('main-floor');
  for (const v of REMOVED_BANK_DESKS) assert.ok(main.includes(v));
  for (const v of MAIN_WEBSITES_TRIM_VISUAL_DESKS) assert.ok(main.includes(v));
  const infra = clearedVisualDesksFor('infra');
  for (const v of INFRA_MIDDLE_VISUAL_DESKS) assert.ok(infra.includes(v));
});
