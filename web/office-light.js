// Berlin office lighting helpers (extracted from the retired 2D office.js shell).
// Shared by the Office4D shell and unit tests. "Now" follows Europe/Berlin.
const OFFICE_TZ = 'Europe/Berlin';

function berlinParts(date = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: OFFICE_TZ, hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
    }).formatToParts(date);
    const num = (type) => {
      const v = parts.find((p) => p.type === type);
      return v ? Number(v.value) : NaN;
    };
    const hour = num('hour');
    const minute = num('minute');
    if (Number.isFinite(hour) && Number.isFinite(minute)) return { hour, minute };
  } catch (_) {}
  return { hour: date.getHours(), minute: date.getMinutes() };
}
function berlinHour(date = new Date()) {
  const p = berlinParts(date);
  return p.hour + p.minute / 60;
}
function lightMode(target = globalThis) {
  return (target && target.OFFICE_LIGHT) || 'now';
}
function officeLightKey(date = new Date(), target = globalThis) {
  const mode = lightMode(target);
  if (mode === 'day' || mode === 'dawn' || mode === 'evening' || mode === 'night') return mode;
  const h = berlinHour(date);
  if (h >= 7 && h < 17) return 'day';
  if (h >= 5 && h < 7) return 'dawn';
  if (h >= 17 && h < 19) return 'evening';
  return 'night';
}
// Anchor hours for a manual preset. "Now" keeps the real Berlin hour so
// the sun actually travels, instead of snapping to four still pictures.
function officeSunHour(date = new Date(), target = globalThis) {
  const mode = lightMode(target);
  if (mode === 'day') return 12;
  if (mode === 'dawn') return 6;
  if (mode === 'evening') return 18.25;
  if (mode === 'night') return 22;
  return berlinHour(date);
}
// Offset from the floor centre. East is -x at dawn, west is +x at sunset.
function officeSunOffset(hour) {
  const h = ((Number(hour) % 24) + 24) % 24;
  if (h < 5 || h >= 19) return { x: 2.5, y: 9, z: -7 };
  const t = (h - 5) / 14;
  const elev = Math.sin(t * Math.PI);
  const az = (t - 0.5) * Math.PI;
  return { x: Math.sin(az) * 8, y: 6 + elev * 12, z: -4 * Math.cos(az) };
}
function skyColor(d = new Date()) {
  const key = officeLightKey(d);
  if (key === 'day') return { sky: '#a9d4f2', night: false, key };
  if (key === 'dawn') return { sky: '#f3c9a8', night: false, key };
  if (key === 'evening') return { sky: '#f2a46e', night: false, key };
  return { sky: '#1d2350', night: true, key };
}



export {
  OFFICE_TZ,
  berlinParts,
  berlinHour,
  officeLightKey,
  officeSunHour,
  officeSunOffset,
  skyColor,
};

export function installOfficeLightGlobals(target = globalThis) {
  target.officeBerlinHour = berlinHour;
  target.officeLightKey = (date) => officeLightKey(date, target);
  target.officeSunHour = (date) => officeSunHour(date, target);
  target.officeSunOffset = officeSunOffset;
  if (typeof target.OFFICE_LIGHT === 'undefined') target.OFFICE_LIGHT = 'now';
}
