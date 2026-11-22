// Wallpaper cues: Berlin sun helpers (office-light) after SWA-3639 removed the 2D shell.
'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');

async function loadLight() {
  const light = await import('../web/office-light.js');
  const sandbox = { OFFICE_LIGHT: 'now' };
  light.installOfficeLightGlobals(sandbox);
  return sandbox;
}

test('Now lighting follows Europe/Berlin, and a manual mode still wins', async () => {
  const sandbox = await loadLight();
  const { officeBerlinHour, officeLightKey, officeSunHour } = sandbox;
  assert.equal(officeBerlinHour(new Date('2026-01-15T04:30:00Z')), 5.5);
  assert.equal(officeBerlinHour(new Date('2026-07-15T03:30:00Z')), 5.5);
  assert.equal(officeLightKey(new Date('2026-01-15T04:30:00Z')), 'dawn');
  assert.equal(officeLightKey(new Date('2026-01-15T06:30:00Z')), 'day');
  assert.equal(officeLightKey(new Date('2026-01-15T16:30:00Z')), 'evening');
  assert.equal(officeLightKey(new Date('2026-01-15T22:30:00Z')), 'night');
  assert.equal(officeLightKey(new Date('2026-07-15T15:30:00Z')), 'evening');
  sandbox.OFFICE_LIGHT = 'night';
  assert.equal(officeLightKey(new Date('2026-01-15T11:00:00Z')), 'night');
  assert.equal(officeSunHour(new Date('2026-01-15T11:00:00Z')), 22);
  sandbox.OFFICE_LIGHT = 'day';
  assert.equal(officeSunHour(new Date('2026-01-15T22:00:00Z')), 12);
  sandbox.OFFICE_LIGHT = 'evening';
  assert.equal(officeSunHour(), 18.25);
  sandbox.OFFICE_LIGHT = 'now';
  assert.equal(officeSunHour(new Date('2026-01-15T09:15:00Z')), 10.25);
});

test('the sun is low in the east at dawn, overhead at noon, and low in the west at sunset', async () => {
  const sandbox = await loadLight();
  const off = sandbox.officeSunOffset;
  const dawn = off(6);
  const noon = off(12);
  const sunset = off(18.25);
  const night = off(22);
  assert.ok(dawn.x < -4, `dawn x ${dawn.x}`);
  assert.ok(Math.abs(noon.x) < 0.5, `noon x ${noon.x}`);
  assert.ok(noon.y > dawn.y && noon.y > sunset.y);
  assert.ok(sunset.x > 4, `sunset x ${sunset.x}`);
  assert.ok(night.y < noon.y);
  assert.notEqual(night.x, sunset.x);
});
