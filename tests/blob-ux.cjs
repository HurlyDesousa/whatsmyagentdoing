// SWA-3639: the 2D office.js blob simulator was removed with the legacy shell.
// Keep deepened-module checks for looks + Berlin lighting (used by the 4D shell).
'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');

test('blobLookFor honors pinned session look and falls back by id', async () => {
  const { blobLookFor } = await import('../web/grokblobs.js');
  const pinned = blobLookFor({
    key: 'grokbot:monitor',
    s: { id: 'monitor', project: 'Monitor Master', look: { shape: 'squircle', color: 0xFD690F, accessory: 'none' } },
  });
  assert.equal(pinned.shape, 'squircle');
  assert.equal(pinned.color, 0xFD690F);
  const fallback = blobLookFor({
    key: 'grokbot:monitor',
    s: { id: 'monitor', project: 'Monitor Master' },
  });
  assert.equal(fallback.shape, 'squircle');
  assert.notEqual(fallback.color, 0xFD690F);
});

test('office-light helpers follow Europe/Berlin and manual OFFICE_LIGHT', async () => {
  const light = await import('../web/office-light.js');
  const target = { OFFICE_LIGHT: 'now' };
  light.installOfficeLightGlobals(target);
  assert.equal(target.officeBerlinHour(new Date('2026-01-15T04:30:00Z')), 5.5);
  assert.equal(target.officeLightKey(new Date('2026-01-15T04:30:00Z')), 'dawn');
  assert.equal(target.officeLightKey(new Date('2026-01-15T06:30:00Z')), 'day');
  target.OFFICE_LIGHT = 'night';
  assert.equal(target.officeLightKey(new Date('2026-01-15T11:00:00Z')), 'night');
  assert.equal(target.officeSunHour(new Date('2026-01-15T11:00:00Z')), 22);
  const dawn = target.officeSunOffset(6);
  const noon = target.officeSunOffset(12);
  assert.ok(dawn.x < -4, `dawn x ${dawn.x}`);
  assert.ok(Math.abs(noon.x) < 0.5, `noon x ${noon.x}`);
});
