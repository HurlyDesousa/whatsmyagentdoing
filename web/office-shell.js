// Office page shell: prefs, SSE, BGM, list/side chrome, and Office4D bootstrap.
// Bundled into public/office4d.js. Behaviour-preserving lift from public/index.html (SWA-3639).
import { blobLookFor } from './grokblobs.js';
import { installOfficeLightGlobals } from './office-light.js';
import { installOfficeBadges } from './office-badges.js';

export function bootOfficeShell({ Office4D }) {
  if (typeof document === 'undefined') return;
  if (document.documentElement.dataset.officeShellBooted === '1') return;
  document.documentElement.dataset.officeShellBooted = '1';
  installOfficeLightGlobals(globalThis);
  installOfficeBadges(globalThis);


  // SWA-2995: looping office background music + top-right mute toggle.
  // Preference persists in localStorage.officeBgmMuted ('1' muted / '0' on). Default: on.
  // After a fresh login (sessionStorage.officeBgmUnlock) it is forced on.
  // If the browser blocks autoplay with sound, we stay muted until the first user gesture.
  (function () {
    const KEY = 'officeBgmMuted';
    const audio = document.getElementById('officeBgm');
    const btn = document.getElementById('bgmBtn');
    if (!audio || !btn) return;
    const ICON_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>';
    const ICON_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>';
    let pref = null;
    try { pref = localStorage.getItem(KEY); } catch {}
    let userMuted = pref === '1';
    let held = false; // 4D holds this track so the wallpaper Music switch is the one that plays
    // Just logged in (login.html sets this before redirecting): the click's user
    // activation doesn't survive the redirect, so force music on and try now.
    let unlock = null;
    try { unlock = sessionStorage.getItem('officeBgmUnlock'); sessionStorage.removeItem('officeBgmUnlock'); } catch {}
    if (unlock === '1') userMuted = false;
    audio.loop = true; // continuous seamless loop
    audio.volume = 0.4;
    // Belt-and-braces: if 'ended' ever fires (loop unsupported), restart immediately.
    audio.addEventListener('ended', () => { if (held) return; audio.currentTime = 0; audio.play().catch(() => {}); });
    function render() {
      const muted = audio.muted || audio.paused;
      btn.innerHTML = muted ? ICON_OFF : ICON_ON;
      const label = muted ? 'Unmute music' : 'Mute music';
      btn.setAttribute('aria-label', label);
      btn.title = label;
      btn.setAttribute('aria-pressed', String(muted));
    }
    function save() { try { localStorage.setItem(KEY, userMuted ? '1' : '0'); } catch {} }
    function start() {
      if (held) { audio.pause(); render(); return Promise.resolve(); }
      audio.muted = userMuted;
      return audio.play().then(render, () => {
        // Autoplay with sound blocked: keep it muted (try muted playback) and wait for a gesture.
        audio.muted = true;
        audio.play().catch(() => {}).finally(render);
        armGesture();
      });
    }
    let armed = false;
    function onGesture(e) {
      if (held) return;
      if (e && e.target && btn.contains(e.target)) return; // the button handles itself
      disarm();
      if (!userMuted) { audio.muted = false; audio.play().catch(() => {}).finally(render); }
    }
    const EVENTS = ['pointerdown', 'keydown', 'touchstart'];
    function armGesture() { if (armed) return; armed = true; EVENTS.forEach((t) => document.addEventListener(t, onGesture, { capture: true })); }
    function disarm() { armed = false; EVENTS.forEach((t) => document.removeEventListener(t, onGesture, { capture: true })); }
    btn.addEventListener('click', () => {
      if (held) return;
      disarm();
      const nowMuted = !(audio.muted || audio.paused);
      userMuted = nowMuted;
      save();
      audio.muted = nowMuted;
      if (!nowMuted) audio.play().catch(() => {}).finally(render); else render();
    });
    audio.addEventListener('play', render);
    audio.addEventListener('pause', render);
    audio.addEventListener('volumechange', render);
    render();
    start();
    // 4D plays the wallpaper loop from its own Music switch. Hold this track
    // so the two don't play at once; the mute choice is left as it was.
    window.officeBgmHold = (on) => { held = !!on; if (held) { audio.pause(); render(); } else start(); };
  })();



  // SWA-2995: show "Sign out" only when the login gate is on.
  (function () {
    const b = document.getElementById('signOutBtn');
    fetch('/api/me', { credentials: 'same-origin', cache: 'no-store' }).then((r) => r.ok ? r.json() : null).then((me) => {
      if (!me || !me.auth) return;
      if (me.email) b.title = 'Sign out ' + me.email;
      b.hidden = false;
    }).catch(() => {});
    b.addEventListener('click', () => {
      fetch('/api/logout', { method: 'POST', credentials: 'same-origin' }).finally(() => location.replace('/login'));
    });
  })();



// Language: your pick in the 🌐 menu, else the language of your prompts
// (the server guesses it), else the browser's, else English.
let L = I18N.en;
let langCode = 'en';
let rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto', style: 'short' });
function chooseLang(serverGuess) {
  const pick = store.get('lang', 'auto');
  if (pick !== 'auto' && I18N[pick]) return pick;
  if (serverGuess && I18N[serverGuess]) return serverGuess;
  return i18nFromBrowser(navigator.languages || [navigator.language]) || 'en';
}
function applyLang(code) {
  if (code === langCode && L === I18N[code] && document.documentElement.dataset.localized) return;
  document.documentElement.dataset.localized = 'true';
  langCode = code;
  L = I18N[code];
  document.documentElement.lang = L.html;
  rtf = new Intl.RelativeTimeFormat(L.html, { numeric: 'auto', style: 'short' });
  document.querySelectorAll('[data-t]').forEach((el) => (el.textContent = L[el.dataset.t]));
  const legend = document.getElementById('legend');
  if (legend) legend.innerHTML = Object.entries(LEGEND_LABEL)
    .map(([k, v]) => `<span data-k="${k}"><span class="dot" style="color:var(--s)"></span>${esc(v)}</span>`).join('');
  const sel = document.getElementById('langSel');
  if (sel) sel.options[0].textContent = `🌐 ${L.auto}`;
  if (typeof office !== 'undefined' && office) office.offDutyLabel = L.wentHome;
  if (typeof syncControls === 'function') syncControls();
  if (typeof renderSceneSel === 'function') renderSceneSel();
  if (typeof renderVersion === 'function') renderVersion();
}

const store = (() => {
  const fallback = new Map();
  const get = (k, d) => { try { const v = localStorage.getItem('wmad.' + k); return v == null ? d : JSON.parse(v); } catch { return fallback.has(k) ? fallback.get(k) : d; } };
  const set = (k, v) => { fallback.set(k, v); try { localStorage.setItem('wmad.' + k, JSON.stringify(v)); } catch {} };
  return { get, set };
})();

const PREF_DEFAULTS = { view: 'office', quality: WallpaperFeed.DEFAULT_QUALITY, scene: 'office', agent: 'all', showSub: false, showIdle: true, showAgent: true, lang: 'auto', light: 'now', showAll: false, floor: 0, theme: 'auto' };
function validPreference(k, v) {
  if (!Object.hasOwn(PREF_DEFAULTS, k)) return false;
  if (typeof PREF_DEFAULTS[k] === 'boolean') return typeof v === 'boolean';
  if (k === 'view') return ['office', 'list'].includes(v);
  // Accept legacy mid/high so old ?quality= / saved prefs resolve to the sole 4D view.
  if (k === 'quality') return ['mid', 'high', '4d'].includes(v);
  if (k === 'light') return ['now', 'day', 'evening', 'night'].includes(v);
  if (k === 'theme') return ['auto', 'light', 'dark'].includes(v);
  if (k === 'floor') return [-1, 0, 1].includes(+v);
  if (k === 'agent') return ['all', 'grokbot', 'paperclip'].includes(v);
  if (k === 'scene') return v === 'office' || v === 'cafe';
  if (k === 'lang') return v === 'auto' || Object.hasOwn(I18N, v);
  return typeof v === 'string' && /^[a-z0-9-]+$/.test(v);
}
function readPreferences() {
  return Object.fromEntries(Object.entries(PREF_DEFAULTS).map(([k, d]) => {
    let v = store.get(k, d);
    if (k === 'floor') v = +v;
    if (k === 'quality') return [k, WallpaperFeed.resolveQuality(validPreference(k, v) ? v : d)];
    return [k, validPreference(k, v) ? v : d];
  }));
}
const PIP = new URLSearchParams(location.search).get('pip') === '1';
if (PIP) document.body.classList.add('pip');

// SWA-3226: 4D is the only office view. Migrate any saved 2D/3D quality.
{
  const saved = store.get('quality', null);
  if (saved != null && saved !== WallpaperFeed.DEFAULT_QUALITY) store.set('quality', WallpaperFeed.DEFAULT_QUALITY);
}

// ?view=office&quality=high (legacy) still sets prefs, but quality always lands on 4D.
{
  const q = new URLSearchParams(location.search);
  if (PIP) {
    try {
      for (const [k, v] of Object.entries(JSON.parse(q.get('prefs')) || {})) {
        if (!validPreference(k, v)) continue;
        store.set(k, k === 'quality' ? WallpaperFeed.resolveQuality(v) : v);
      }
    } catch { /* malformed preferences use the saved defaults */ }
  }
  for (const k of ['view', 'quality', 'scene', 'lang', 'light', 'theme']) {
    if (!validPreference(k, q.get(k))) continue;
    store.set(k, k === 'quality' ? WallpaperFeed.resolveQuality(q.get(k)) : q.get(k));
  }
  if (q.has('floor') && validPreference('floor', q.get('floor'))) store.set('floor', +q.get('floor'));
  // SWA-3310: keep ambient for scene.js (TEST.ambient); strip other legacy URL prefs.
  if (location.search) {
    const keep = [];
    if (PIP) keep.push('pip=1');
    const ambient = q.get('ambient');
    if (ambient === '1' || ambient === 'fast') keep.push('ambient=' + encodeURIComponent(ambient));
    history.replaceState(null, '', location.pathname + (keep.length ? '?' + keep.join('&') : '') + location.hash);
  }
}

const state = {
  ...readPreferences(),
  scenes: [],
  data: { now: Date.now(), sessions: [] },
  skew: 0,
  prev: new Map(),
  flash: new Set(),
};
state.towerFloor = typeof store.get('towerFloor', null) === 'string' ? store.get('towerFloor', null) : null;
state.towerFloors = [];
let popout = null;
window.OFFICE_LIGHT = state.light;

function themeChoice() {
  const saved = store.get('theme', 'auto');
  return ['auto', 'light', 'dark'].includes(saved) ? saved : 'auto';
}
function resolvedTheme() {
  const choice = themeChoice();
  if (choice === 'light' || choice === 'dark') return choice;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function paintThemeButtons() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = dark ? 'Light' : 'Dark';
  const title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  for (const b of document.querySelectorAll('#themeBtn, .bhq-theme')) {
    b.textContent = label;
    b.title = title;
    b.setAttribute('aria-label', title);
    b.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
}
function applyTheme() {
  const resolved = resolvedTheme();
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeChoice = themeChoice();
  document.documentElement.style.colorScheme = resolved;
  paintThemeButtons();
  if (typeof office !== 'undefined' && office) {
    if (typeof office.onTheme === 'function') office.onTheme();
    if (typeof office.setTheme === 'function') office.setTheme(resolved === 'dark');
  }
}
function toggleTheme() {
  store.set('theme', resolvedTheme() === 'dark' ? 'light' : 'dark');
  applyTheme();
}
document.getElementById('themeBtn').addEventListener('click', toggleTheme);

const ACTIVE = new Set(['thinking', 'tool', 'typing']);
const AGENT_NAME = { claude: 'Claude', codex: 'Codex', gemini: 'Gemini', omp: 'OMP', grokbot: 'Grok Bot', paperclip: 'Paperclip' };
const GROUPS = [
  { key: 'needsYou', match: (s) => s === 'waiting' || s === 'error' },
  { key: 'working', match: (s) => ACTIVE.has(s) },
  { key: 'finished', match: (s) => s === 'done' || s === 'interrupted' },
  { key: 'idle', match: (s) => s === 'idle' },
];

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function dur(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ${String(s % 60).padStart(2, '0')}s`;
  const h = Math.floor(m / 60);
  return `${h}h ${String(m % 60).padStart(2, '0')}m`;
}

function ago(t, now) {
  const s = Math.round((t - now) / 1000);
  if (s > -45) return rtf.format(0, 'second');
  const m = Math.round(s / 60);
  if (m > -60) return rtf.format(m, 'minute');
  const h = Math.round(m / 60);
  if (h > -24) return rtf.format(h, 'hour');
  return rtf.format(Math.round(h / 24), 'day');
}

function timeLabel(s, now) {
  if ((ACTIVE.has(s.status) || s.status === 'waiting') && s.turnStartedAt) return dur(now - s.turnStartedAt);
  return s.lastEventAt ? ago(s.lastEventAt, now) : '';
}

// Single-quote for POSIX shells: inside '…' nothing ($(), backticks, $VAR)
// is expanded, so a folder or session name can't run anything when pasted.
const shq = (v) => `'${String(v).replace(/'/g, `'\\''`)}'`;
function resumeCmd(s) {
  if (s.agent === 'omp') return s.resumeCommand || '';
  if (s.agent === 'grokbot' || s.agent === 'paperclip') return s.title || '';
  const cd = s.cwd ? `cd ${shq(s.cwd)} && ` : '';
  if (s.agent === 'claude') return `${cd}claude --resume ${shq(s.id)}`;
  if (s.agent === 'gemini') return `${cd}gemini --resume ${shq(s.sessionId || s.id)}`;
  return `${cd}codex resume ${shq(s.id)}`;
}

function agentLogo(agent) {
  const badge = OFFICE_AGENT_BADGES[agent];
  return badge ? `<img class="agent-logo" src="${badge.logo}" alt="" aria-hidden="true">` : '';
}

function card(s, now) {
  const project = s.project || (s.cwd ? s.cwd : '—');
  const title = s.title && s.title !== project ? `<div class="title" title="${esc(s.title)}">${esc(s.title)}</div>` : '';
  const act = s.activity ? `<span class="act" title="${esc(s.activity)}">${esc(s.activity)}</span>` : '';
  const showText = !s.subagent || ACTIVE.has(s.status);
  const q = showText && s.prompt ? `<div class="q" title="${esc(s.prompt)}">${esc(s.prompt)}</div>` : '';
  const r = showText && s.reply && !ACTIVE.has(s.status) ? `<div class="r" title="${esc(s.reply)}">${esc(s.reply)}</div>` : '';
  const err = s.error ? `<div class="err">${esc(s.error)}</div>` : '';
  const sub = s.subagent ? ` · ${L.sub}` : '';
  return `
  <div class="card${s.subagent ? ' sub' : ''}${state.flash.has(s.key) ? ' flash' : ''}" data-s="${s.status}" data-key="${esc(s.key)}">
    <div class="top">
      <span class="agent ${esc(s.agent)}">${agentLogo(s.agent)}${esc(AGENT_NAME[s.agent] || s.agent)}</span>
      <span class="project" title="${esc(s.cwd)}">${esc(project)}</span>
      <span class="time" data-time="${esc(s.key)}">${esc(timeLabel(s, now))}</span>
    </div>
    ${title}
    <div class="status"><span class="ind"><i></i><i></i><i></i></span><span class="lbl">${esc(L[s.status] || s.status)}</span>${act}</div>
    ${err}${q}${r}
    <div class="foot"><span class="model">${esc((s.model || '') + sub)}</span><button class="copy" data-copy="${esc(resumeCmd(s))}">${L.copy}</button></div>
  </div>`;
}

function visible() {
  return state.data.sessions.filter((s) =>
    (state.agent === 'all' || s.agent === state.agent) &&
    (state.showSub || !s.subagent) &&
    (state.showIdle || s.status !== 'idle'));
}

function render() {
  if (window.WallpaperFeed && Array.isArray(state.baseSessions)) {
    state.data.sessions = WallpaperFeed.mergeSessions(state.baseSessions, wallpaperFeed, Date.now());
    noteWallpaper(state.data.sessions);
  }
  const now = Date.now() - state.skew;
  const list = visible();
  const all = state.data.sessions.filter((s) => (state.agent === 'all' || s.agent === state.agent) && (state.showSub || !s.subagent));

  const count = (f) => all.filter((s) => f(s.status)).length;
  {
    const desks = office?.plan?.desks?.length || 0;
    const used = office?.deskOf?.size || 0;
    const nWork = count((s) => ACTIVE.has(s)), nNeed = count(GROUPS[0].match), nIdle = count((s) => !ACTIVE.has(s) && !GROUPS[0].match(s));
    const fp = (f, n, label, icon, warn) => `<button class="pill${warn ? ' warn' : ''}${state.filter === f ? ' on' : ''}" data-f="${f}" aria-pressed="${state.filter === f}" title="${state.filter === f ? 'Clear filter' : 'Show only ' + label}">${icon}<b>${n}</b>${label}</button>`;
    document.getElementById('summary').innerHTML =
      fp('working', nWork, 'working', PILL_ICON.working) +
      fp('needs', nNeed, 'need you', PILL_ICON.needs, nNeed) +
      fp('idle', nIdle, 'idle', PILL_ICON.idle) +
      (desks ? `<span class="pill">${PILL_ICON.desk}<b>${Math.max(0, desks - used)}</b>free desks</span>` : '') +
      feedPills();
  }

  const working = count((s) => ACTIVE.has(s));
  const needs = count(GROUPS[0].match);
  document.title = (needs ? `(${needs}!) ` : working ? `(${working}) ` : '') + 'Office · Swart Ops';

  const main = document.getElementById('main');
  const officeMode = state.view === 'office';
  document.getElementById('dashgrid').classList.toggle('list-mode', !officeMode);
  autoFocus(all);
  if (office) { office.filter = state.filter; office.showAll = state.showAll; }
  renderSide(all, now);
  document.getElementById('officeWrap').style.display = officeMode ? '' : 'none';
  // The office decides who sits at a desk and who wanders around.
  const officeList = all;
  const poppedOut = !!popout?.win;
  // Wait for the first snapshot so people start at their places instead of
  // all walking in through the door.
  if (office && office.isTower) {
    office.extras = {
      usage: wallpaperFeed && wallpaperFeed.usage,
      routines: wallpaperFeed && wallpaperFeed.routines,
      feedLive: !!wallpaperFeed,
      // Active Paperclip issues from the Hurly crew SSE snapshot (Pipeline / Waiting on me).
      pipeline: Array.isArray(state.data && state.data.pipeline) ? state.data.pipeline : [],
      waiting_issues: Array.isArray(state.data && state.data.waiting_issues) ? state.data.waiting_issues : [],
    };
  }
  if (office && state.loaded) {
    office.showAgent = state.showAgent;
    // "Show idle" (default on) puts the whole crew on the floor, not just 7 wanderers.
    office.maxWanderers = state.showIdle ? Infinity : 7;
    office.setVisible(officeMode && !poppedOut);
    office.update(officeList);
  }
  if (poppedOut) {
    document.getElementById('officeWrap').style.display = 'none';
    main.innerHTML = `<div class="empty">${esc(L.pipOn)}</div>`;
    hideTip();
    return;
  }
  if (officeMode) {
    // Always show the floor (empty desks are fine); the Team panel says when nobody's in.
    main.innerHTML = '';
    document.getElementById('officeWrap').style.display = '';
    refreshTip();
    return;
  }
  const groups = PIP ? GROUPS.slice(0, 2) : GROUPS;
  if (!list.some((s) => groups.some((g) => g.match(s.status)))) {
    main.innerHTML = `<div class="empty">${esc(PIP ? L.pipQuiet : L.empty)}</div>`;
    return;
  }
  main.innerHTML = groups.map((g) => {
    const items = list.filter((s) => g.match(s.status));
    if (!items.length) return '';
    return `<section><h2>${L[g.key]} <span class="n">${items.length}</span></h2><div class="grid">${items.map((s) => card(s, now)).join('')}</div></section>`;
  }).join('');
}

function tickTimes() {
  if (typeof syncLight === 'function') syncLight();
  if (tipKey) refreshTip();
  const now = Date.now() - state.skew;
  const byKey = new Map(state.data.sessions.map((s) => [s.key, s]));
  document.querySelectorAll('[data-time]').forEach((el) => {
    const s = byKey.get(el.dataset.time);
    if (s) el.textContent = timeLabel(s, now);
  });
}

function onData(data) {
  state.skew = Date.now() - data.now;
  const first = state.prev.size === 0;
  state.flash.clear();
  for (const s of data.sessions) {
    const before = state.prev.get(s.key);
    if (!first && before && ACTIVE.has(before) && (s.status === 'done' || s.status === 'waiting')) {
      state.flash.add(s.key);
      if (!PIP && !s.subagent && window.Notification && Notification.permission === 'granted') {
        try { new Notification(s.status === 'done' ? L.doneNote(s.project || s.agent) : `${s.project || s.agent}: ${L.waiting}`, { body: s.reply || s.activity || '', tag: s.key }); } catch {}
      }
    }
    state.prev.set(s.key, s.status);
  }
  logChanges(data.sessions, first);
  state.baseSessions = data.sessions;
  state.data = data;
  state.loaded = true;
  markDataReady();
  applyLang(chooseLang(data.lang));
  render();
}

// Live data comes over SSE (/events). Proxies in front of the office
// (Cloudflare ~100s, Kemp/nginx often ~60s) cut a quiet stream. The server
// sends a padded comment plus a named `ping` every 15s: the bytes keep the
// proxy idle timer reset, and `ping` lets us see a black-holed socket
// (SSE comments never reach JS).
// EventSource stops retrying when readyState is CLOSED (401, or a proxy
// 502/504 HTML page). Polling /api/sessions kept the floor live, but the
// red pill only cleared on an SSE message, so it stayed on. A successful
// poll or a reopened stream clears it.
const POLL_MS = 5000;
const SSE_STALE_MS = 45000;
const DISCONNECT_GRACE_MS = 4000;
const ES_CONNECTING = 0, ES_OPEN = 1, ES_CLOSED = 2;
let sseLive = false, pollTimer = 0, pollGen = 0, pollInFlight = false;
let reconnectTimer = 0, reconnectAttempt = 0, disconnectTimer = 0;
let es = null, lastBeat = 0;
function showDisconnected(stuck) {
  const conn = document.getElementById('conn');
  if (!conn) return;
  if (!stuck) {
    clearTimeout(disconnectTimer);
    disconnectTimer = 0;
    conn.classList.remove('on');
    return;
  }
  // A native retry (retry: 2000) or one poll usually lands inside this
  // window; don't flash the badge for a blip that already recovered.
  if (conn.classList.contains('on') || disconnectTimer) return;
  disconnectTimer = setTimeout(() => {
    disconnectTimer = 0;
    if (!sseLive) conn.classList.add('on');
  }, DISCONNECT_GRACE_MS);
}
function noteBeat() {
  lastBeat = Date.now();
  sseLive = true;
  reconnectAttempt = 0;
  pollGen++;
  clearTimeout(pollTimer);
  pollTimer = 0;
  showDisconnected(false);
}
function pollSessions() {
  clearTimeout(pollTimer);
  pollTimer = 0;
  if (sseLive || pollInFlight) return;
  const gen = ++pollGen;
  pollInFlight = true;
  fetch('/api/sessions', { credentials: 'same-origin', cache: 'no-store' }).then((r) => {
    if (r.status === 401) { location.href = '/login'; return null; }
    return r.ok ? r.json() : null;
  }).then((d) => {
    if (gen !== pollGen || sseLive) return;
    if (d && Array.isArray(d.sessions)) { onData(d); showDisconnected(false); }
    else showDisconnected(true);
  }).catch(() => { if (gen === pollGen && !sseLive) showDisconnected(true); })
    .finally(() => {
      pollInFlight = false;
      if (!sseLive && gen === pollGen) pollTimer = setTimeout(pollSessions, POLL_MS);
    });
}
function scheduleReconnect() {
  if (reconnectTimer) return;
  const delay = Math.min(15000, 1000 * (2 ** Math.min(reconnectAttempt, 4)));
  reconnectAttempt++;
  reconnectTimer = setTimeout(() => { reconnectTimer = 0; connect(); }, delay);
}
function connect() {
  clearTimeout(reconnectTimer);
  reconnectTimer = 0;
  pollGen++;
  clearTimeout(pollTimer);
  pollTimer = 0;
  sseLive = false;
  if (es) {
    es.onopen = es.onmessage = es.onerror = null;
    try { es.close(); } catch (e) { console.error(e); }
    es = null;
  }
  try { es = new EventSource('/events'); }
  catch (e) {
    console.error(e);
    showDisconnected(true);
    pollSessions();
    scheduleReconnect();
    return;
  }
  lastBeat = Date.now();
  // The UI test stubs EventSource without addEventListener; pings are optional.
  if (typeof es.addEventListener === 'function') es.addEventListener('ping', () => noteBeat());
  es.onopen = () => { lastBeat = Date.now(); };
  es.onmessage = (e) => {
    let d;
    try { d = JSON.parse(e.data); } catch (err) { console.error('bad /events payload', err); return; }
    if (!d || !Array.isArray(d.sessions)) return;
    noteBeat();
    onData(d);
  };
  es.onerror = () => {
    sseLive = false;
    showDisconnected(true);
    pollSessions();
    // CLOSED: the browser will not retry. CONNECTING: native retry is in flight.
    if (es && es.readyState === ES_CLOSED) scheduleReconnect();
  };
  // Nothing on the stream yet (buffering proxy?): start polling meanwhile.
  pollTimer = setTimeout(() => { if (!sseLive) pollSessions(); }, POLL_MS);
}
// readyState stays OPEN when a proxy black-holes the socket without a TCP close.
function watchSse() {
  if (!es || (es.readyState !== ES_OPEN && es.readyState !== ES_CONNECTING)) return;
  if (!lastBeat || Date.now() - lastBeat < SSE_STALE_MS) return;
  console.warn('SSE silent; reopening');
  connect();
  showDisconnected(true);
  pollSessions();
}
setInterval(watchSse, 5000);

// Native disclosure keeps settings keyboard-accessible without a modal focus trap.
const settingsMenu = document.getElementById('settingsMenu');
document.addEventListener('click', (e) => {
  if (!settingsMenu.contains(e.target)) settingsMenu.open = false;
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && settingsMenu.open) {
    settingsMenu.open = false;
    settingsMenu.querySelector('summary').focus();
  }
});
settingsMenu.addEventListener('toggle', () => { if (settingsMenu.open) hideTip(); });

document.getElementById('floorSeg').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  state.towerFloor = b.dataset.v;
  store.set('towerFloor', state.towerFloor);
  if (office && typeof office.setTowerFloor === 'function') office.setTowerFloor(state.towerFloor);
  syncControls();
});
document.getElementById('viewSeg').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  state.view = b.dataset.v; store.set('view', state.view); hideTip(); syncControls(); render();
});
document.getElementById('agentSeg').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  state.agent = b.dataset.v; store.set('agent', state.agent); syncControls(); render();
});
const showSub = document.getElementById('showSub');
const showIdle = document.getElementById('showIdle');
const showAgent = document.getElementById('showAgent');
showSub.addEventListener('change', () => { state.showSub = showSub.checked; store.set('showSub', state.showSub); render(); });
showIdle.addEventListener('change', () => { state.showIdle = showIdle.checked; store.set('showIdle', state.showIdle); render(); });
showAgent.addEventListener('change', () => { state.showAgent = showAgent.checked; store.set('showAgent', state.showAgent); syncControls(); render(); });

const notifyBtn = document.getElementById('notify');
function syncControls() {
  state.quality = WallpaperFeed.resolveQuality(state.quality);
  document.querySelectorAll('#agentSeg button').forEach((b) => b.classList.toggle('on', b.dataset.v === state.agent));
  document.querySelectorAll('#viewSeg button').forEach((b) => b.classList.toggle('on', b.dataset.v === state.view));
  document.body.classList.toggle('tower-site', state.view === 'office');
  renderFloorSeg();
  document.getElementById('sceneGroup').hidden = true;
  const activeFilter = document.getElementById('activeFilter');
  activeFilter.hidden = state.agent === 'all';
  activeFilter.textContent = AGENT_NAME[state.agent] || '';
  document.querySelectorAll('.seg button').forEach(b => b.setAttribute('aria-pressed', b.classList.contains('on')));
  showSub.checked = state.showSub;
  showIdle.checked = state.showIdle;
  showAgent.checked = state.showAgent;
  document.getElementById('agentBadgeToggle').style.display = state.view === 'office' ? '' : 'none';
  document.getElementById('agentLegend').hidden = !state.showAgent;
  popout?.sync(PIP, state.view);
  if (!window.Notification) notifyBtn.style.display = 'none';
  else if (Notification.permission === 'granted') { notifyBtn.textContent = L.notifyOn; notifyBtn.disabled = true; }
}
notifyBtn.addEventListener('click', () => Notification.requestPermission().then(syncControls));

document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-copy]'); if (!b) return;
  navigator.clipboard?.writeText(b.dataset.copy).then(() => {
    b.textContent = L.copied; setTimeout(() => (b.textContent = L.copy), 1400);
  });
});

// ---- office view
const tip = document.getElementById('tip');
let tipKey = null, tipPinned = false, tipAt = { x: 0, y: 0 };
function placeTip() {
  const r = tip.getBoundingClientRect();
  let x = tipAt.x + 16, y = tipAt.y + 16;
  if (x + r.width > innerWidth - 8) x = tipAt.x - r.width - 16;
  if (y + r.height > innerHeight - 8) y = Math.max(8, innerHeight - r.height - 8);
  tip.style.left = Math.max(8, x) + 'px';
  tip.style.top = y + 'px';
}
function refreshTip() {
  if (!tipKey) return;
  const s = state.data.sessions.find((x) => x.key === tipKey);
  if (!s) return hideTip();
  tip.innerHTML = card(s, Date.now() - state.skew);
  placeTip();
}
function hideTip() { tipKey = null; tipPinned = false; tip.style.display = 'none'; tip.classList.remove('pinned'); }
function renderFloorSeg() {
  const el = document.getElementById('floorSeg');
  const tower = state.view === 'office';
  el.style.display = tower ? '' : 'none';
  if (!tower) return;
  const floors = state.towerFloors || [];
  const sig = floors.map((f) => f.id).join('|');
  if (el.dataset.mode !== 'tower' || el.dataset.sig !== sig) {
    el.dataset.mode = 'tower';
    el.dataset.sig = sig;
    el.innerHTML = floors.map((f) => `<button data-v="${esc(f.id)}" title="${esc(f.name)}">${esc(f.name)}</button>`).join('');
  }
  const cur = state.towerFloor && floors.some((f) => f.id === state.towerFloor) ? state.towerFloor : (floors[0] && floors[0].id);
  el.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === cur));
}
const officeOpts = {
  compact: PIP,
  onFrame: (renderer) => popout?.drawPreview(renderer),
  onFloors(floors) { state.towerFloors = floors; renderFloorSeg(); },
  onTheme() { toggleTheme(); },
  label: (s) => s.project || AGENT_NAME[s.agent] || s.agent,
  onHover(s, at, click) {
    if (click) {
      if (s) selectAgent(s.key);
      if (!s) return hideTip();
      tipPinned = true; tip.classList.add('pinned');
    } else if (tipPinned) return;
    if (!s) { if (!tipPinned) hideTip(); return; }
    tipKey = s.key; tipAt = at;
    tip.style.display = 'block';
    refreshTip();
  },
};
let office = null;
applyTheme();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (themeChoice() === 'auto') applyTheme();
});
let officeKind = null;
Object.defineProperty(window, 'office', { configurable: true, get() { return office; }, set(v) { office = v; } });
Object.defineProperty(window, 'officeKind', { configurable: true, get() { return officeKind; }, set(v) { officeKind = v; } });
Object.defineProperty(window, 'popout', { configurable: true, get() { return popout; }, set(v) { popout = v; } });
Object.defineProperty(window, 'langCode', { configurable: true, get() { return langCode; }, set(v) { langCode = v; } });
Object.defineProperty(window, 'L', { configurable: true, get() { return L; }, set(v) { L = v; } });
window.state = state;
// Until the tower has drawn a settled frame, show a loader instead of a
// half-built scene.
const officeEl = document.getElementById('office');
// SWA-2995: the loader must never spin forever. Every setLoading(true) arms a
// hard watchdog; if nothing hides the loader by then, hide it anyway.
const LOADER_HARD_MAX_MS = 20000;
let loaderWatchdog = 0;
function setLoading(on, text) {
  officeEl.classList.toggle('loading', on);
  if (text) document.getElementById('loaderText').textContent = text;
  clearTimeout(loaderWatchdog);
  if (on) loaderWatchdog = setTimeout(() => {
    console.warn(`office loader still up after ${LOADER_HARD_MAX_MS} ms; hiding it`);
    officeEl.classList.remove('loading');
  }, LOADER_HARD_MAX_MS);
}
// Hard budget for bringing up the 4D tower (module import + GLB + settled frames).
const OFFICE4D_TIMEOUT_MS = 14000;
// office.ready only resolves after the first session snapshot (so people start
// at their desks). If /events is slow, blocked or 401s, don't let that hold the
// office hostage: after this grace, settle on an empty floor.
const DATA_GRACE_MS = 4000;
const TIMED_OUT = Symbol('timeout');
function withDeadline(p, deadline) {
  const ms = Math.max(0, deadline - performance.now());
  let t;
  return Promise.race([
    Promise.resolve(p).finally(() => clearTimeout(t)),
    new Promise((res) => { t = setTimeout(() => res(TIMED_OUT), ms); }),
  ]);
}
let markDataReady;
const dataReady = new Promise((ok) => (markDataReady = ok));
// Settings → Scene menu stays in the DOM (hidden); only Café packs are listed.
const SETTINGS_SCENE_IDS = new Set(['cafe']);
async function makeOffice() {
  state.quality = WallpaperFeed.resolveQuality(state.quality);
  store.set('quality', state.quality);
  const kind = '4d';
  if (kind === officeKind) return;
  officeKind = kind;
  setLoading(true, L.loading4d || 'Loading the tower office…');
  const deadline = performance.now() + OFFICE4D_TIMEOUT_MS;
  const opts = { ...officeOpts, showAgent: state.showAgent, towerFloor: state.towerFloor };
  if (officeKind !== kind) return;
  if (office) { try { office.destroy(); } catch (e) { console.error(e); } office = null; }
  let mine;
  try {
    mine = new Office4D(officeEl, opts);
  } catch (e) {
    console.error(e);
    setLoading(true, L.failed4d || "Couldn't load the tower office.");
    officeKind = null;
    return;
  }
  office = mine;
  if (window.officeBgmHold) window.officeBgmHold(!!office.isTower);
  office.offDutyLabel = L.wentHome;
  office.onFloorChange = (fl) => {
    state.floor = fl; store.set('floor', fl);
    syncControls();
  };
  render();
  // No snapshot yet? Give it a moment, then settle on the empty floor so the
  // tower can report ready; real data still flows in later.
  if (!state.loaded) {
    withDeadline(dataReady, performance.now() + DATA_GRACE_MS).then(() => {
      if (office !== mine || state.loaded) return;
      console.warn(`no session snapshot after ${DATA_GRACE_MS} ms; showing an empty office`);
      try { mine.update([]); } catch (e) { console.error(e); }
    });
  }
  let ok = await withDeadline(mine.ready || true, deadline);
  if (office !== mine) return;
  if (ok === TIMED_OUT) {
    console.warn(`4D office not ready after ${OFFICE4D_TIMEOUT_MS} ms`);
    ok = false;
  }
  if (!ok) {
    setLoading(true, L.failed4d || "Couldn't load the tower office.");
    return;
  }
  setLoading(false);
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideTip(); });

const sceneSel = document.getElementById('sceneSeg');
state.available = [];
function renderSceneSel() {
  const name = (x) => (x.name && (x.name[langCode] || x.name.en)) || x.id;
  const kb = (n) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);
  const installed = state.scenes.filter((x) => SETTINGS_SCENE_IDS.has(x.id));
  const available = state.available.filter((x) => SETTINGS_SCENE_IDS.has(x.id));
  const current = installed.some((x) => x.id === state.scene) ? state.scene : 'office';
  const btn = (v, label, title = '') =>
    `<button data-v="${esc(v)}" class="${v === current ? 'on' : ''}" aria-pressed="${v === current}"${title ? ` title="${esc(title)}"` : ''}>${label}</button>`;
  sceneSel.innerHTML = btn('office', `🏢 ${esc(L.office)}`) +
    installed.map((x) => btn(x.id, `${esc(x.icon || '🗺️')} ${esc(name(x))}`, x.credits || '')).join('') +
    available.map((x) => btn(`dl:${x.id}`, `⬇ ${esc(x.icon || '')} ${esc(name(x))} <small>${kb(x.size)}</small>`, `${L.dl} ${kb(x.size)}`)).join('');
}
function loadScenes() {
  return fetch('/api/scenes').then((r) => r.json()).then((d) => {
    state.scenes = d.installed || [];
    state.available = d.available || [];
    renderSceneSel();
  }).catch(() => {});
}
sceneSel.addEventListener('click', async (e) => {
  const b = e.target.closest('button');
  if (!b || b.classList.contains('on') || sceneSel.dataset.busy) return;
  let id = b.dataset.v;
  hideTip();
  if (id.startsWith('dl:')) {
    // A scene pack: download it (the server checks its checksum), then switch.
    id = id.slice(3);
    sceneSel.dataset.busy = '1';
    setLoading(true, L.installing);
    const r = await fetch(`/api/scenes/install?id=${encodeURIComponent(id)}`, { method: 'POST', headers: { 'x-whatsmyagentdoing': 'install' } })
      .then((x) => x.json()).catch(() => ({ ok: false }));
    await loadScenes();
    delete sceneSel.dataset.busy;
    if (!r.ok) { setLoading(true, L.installFailed); setTimeout(() => setLoading(false), 2000); renderSceneSel(); return; }
  }
  state.scene = id; store.set('scene', id); renderSceneSel(); makeOffice();
});
// Know the installed scenes before building the first office, so a saved
// scene choice doesn't build the default office first and then swap.
const scenesReady = loadScenes();

// ---- version + one-click update
const verEl = document.getElementById('ver');
let verInfo = null;
function renderVersion() {
  if (!verInfo) return;
  let html = `<span>v${esc(verInfo.version)}</span>`;
  if (verInfo.updateAvailable) {
    html = verInfo.canUpdate
      ? `<button id="updBtn">⬆ ${esc(L.update)} v${esc(verInfo.latest)}</button>` + html
      : `<span>${esc(L.gitPull)} → v${esc(verInfo.latest)}</span>` + html;
  }
  verEl.innerHTML = html;
  // a second, more visible way in, next to the title
  const top = document.getElementById('newVer');
  top.hidden = !(verInfo.updateAvailable && verInfo.canUpdate);
  if (!top.hidden && !top.disabled) top.textContent = `⬆ ${L.newVersion} v${verInfo.latest}`;
  top.onclick = () => { const b2 = document.getElementById('updBtn'); if (b2) { top.disabled = true; top.textContent = L.updating; b2.click(); } };
  const b = document.getElementById('updBtn');
  if (b) b.onclick = async () => {
    b.disabled = true; b.textContent = L.updating;
    const r = await fetch('/api/update', { method: 'POST', headers: { 'x-whatsmyagentdoing': 'update' } }).then((x) => x.json()).catch(() => ({ ok: false }));
    if (!r.ok) { b.textContent = `${L.updateFailed}${r.error ? ': ' + r.error : ''}`; setTimeout(renderVersion, 4000); return; }
    b.textContent = L.updated;
    // the server restarts itself; reload once it answers again
    const t0 = Date.now();
    const wait = setInterval(() => {
      fetch('/api/version', { cache: 'no-store' }).then((x) => x.json()).then((v) => {
        if (v.version !== verInfo.version || Date.now() - t0 > 20000) { clearInterval(wait); location.reload(); }
      }).catch(() => {});
    }, 1000);
  };
}
function loadVersion() {
  fetch('/api/version', { cache: 'no-store' }).then((r) => r.json()).then((v) => { verInfo = v; renderVersion(); }).catch(() => {});
}
loadVersion();
setInterval(loadVersion, 30 * 60 * 1000);

const langSel = document.getElementById('langSel');
langSel.innerHTML = '<option value="auto"></option>' +
  Object.entries(I18N).map(([k, v]) => `<option value="${k}">${v.langName}</option>`).join('');
langSel.value = store.get('lang', 'auto');
langSel.addEventListener('change', () => {
  store.set('lang', langSel.value);
  applyLang(chooseLang(state.data.lang));
  render();
});
document.getElementById('agentLegend').innerHTML = Object.entries(OFFICE_AGENT_BADGES)
  .map(([key, a]) => `<span>${agentLogo(key)}${a.label}</span>`).join('');
popout = new OfficePopout({
  preferences: () => ({ ...Object.fromEntries(Object.keys(PREF_DEFAULTS).map((k) => [k, state[k]])), lang: store.get('lang', 'auto') }),
  office: () => office,
  text: (key) => L[key],
  changed: () => { syncControls(); render(); },
});
// Both windows share preferences; keep filters, language, scene and badges in
// sync even when changes come from the compact window or another open tab.
window.addEventListener('storage', (e) => {
  if (e.key !== null && !Object.keys(PREF_DEFAULTS).some((k) => e.key === 'wmad.' + k)) return;
  Object.assign(state, readPreferences());
  syncLight();
  langSel.value = state.lang;
  hideTip();
  applyLang(chooseLang(state.data.lang));
  syncControls();
  renderSceneSel();
  makeOffice();
  render();
});

// ---- Hurly dashboard: Team panel, task detail, activity log, lighting.
const LEGEND_LABEL = { coding: 'Coding', browsing: 'Browsing', terminal: 'In terminal', thinking: 'Thinking', needs: 'Needs you', error: 'Error', done: 'Done', idle: 'Idle' };
const KIND_COLOR = { coding: '#4f8ff7', browsing: '#2ec4b6', terminal: '#9bd04f', thinking: '#a48bf0', needs: '#ff8a3d', error: '#f0675d', done: '#3fc48f', idle: '#8a899a' };
// Same mapping as statusKind() used by the tower blobs (kept in sync by hand).
function kindOf(s) {
  const st = s.status;
  if (st === 'waiting') return 'needs';
  if (st === 'error') return 'error';
  if (st === 'thinking') return 'thinking';
  if (st === 'typing') return 'coding';
  if (st === 'tool') {
    const a = String(s.activity || '');
    if (/brows|web|fetch|http|search|read|chart|watch|page|url/i.test(a)) return 'browsing';
    if (/edit|write|patch|apply|code/i.test(a)) return 'coding';
    return 'terminal';
  }
  if (st === 'done' || st === 'interrupted') return 'done';
  return 'idle';
}
const PILL_ICON = {
  working: '<svg class="pi spin" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2.4" stroke-linecap="round"/></svg>',
  needs: '<svg class="pi" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 4.4v4.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="11.4" r="1.1" fill="currentColor"/></svg>',
  idle: '<svg class="pi" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6.5h4.2L2 11.5h4.4M8.6 3h3.6L8.6 7.6h3.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  desk: '<svg class="pi" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 2.5h7v5h-7z M3 9.5h10 M5 9.5v4 M11 9.5v4 M4.5 7.5v2 M11.5 7.5v2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
const FILTERS = {
  needs: (s) => s.status === 'waiting' || s.status === 'error',
  working: (s) => ACTIVE.has(s.status),
  idle: (s) => !ACTIVE.has(s.status) && s.status !== 'waiting' && s.status !== 'error',
};
state.filter = null;
document.getElementById('summary').addEventListener('click', (e) => {
  const usage = e.target.closest('details.usage');
  if (usage) { setTimeout(() => { state.usageOpen = usage.open; }, 0); return; }
  const b = e.target.closest('[data-f]'); if (!b) return;
  state.filter = state.filter === b.dataset.f ? null : b.dataset.f;
  render();
});
// Auto-focus: with nothing selected, select the first Needs-you agent so its
// card + bubble show. Never overrides a pick; after the user closes the card
// it only re-triggers for a Needs-you agent that wasn't there before.
const needsSeen = new Set();
state.userCleared = false;
function autoFocus(all) {
  const needs = all.filter((s) => !s.subagent && FILTERS.needs(s));
  const fresh = needs.filter((s) => !needsSeen.has(s.key));
  for (const k of [...needsSeen]) if (!needs.some((s) => s.key === k)) needsSeen.delete(k);
  needs.forEach((s) => needsSeen.add(s.key));
  if (state.sel && all.some((s) => s.key === state.sel)) return;
  if (state.sel) state.sel = null;
  const pick = state.userCleared ? fresh[0] : needs[0];
  if (pick) { state.sel = pick.key; state.userCleared = false; }
}
const showAllEl = document.getElementById('showAll');
showAllEl.checked = !!state.showAll;
showAllEl.addEventListener('change', () => { state.showAll = showAllEl.checked; store.set('showAll', state.showAll); render(); });
const STATUS_HEX = { thinking: '#a48bf0', tool: '#5ea4ee', typing: '#3fc48f', waiting: '#ff8a3d', done: '#86b872', interrupted: '#77768a', error: '#f0675d', idle: '#77768a' };
let lookFor = blobLookFor;
function agentColor(s) {
  const pinned = s.look && s.look.color;
  if (typeof pinned === 'number' && pinned >= 0) return '#' + pinned.toString(16).padStart(6, '0');
  if (lookFor) { try { return '#' + lookFor({ s, key: s.key }).color.toString(16).padStart(6, '0'); } catch {} }
  return STATUS_HEX[s.status] || '#888';
}
function pillOf(s) {
  const k = kindOf(s);
  return { cls: k === 'needs' || k === 'error' ? 'p-needs' : '', txt: LEGEND_LABEL[k], k };
}
// Demo-style narrative line: "Browsing — Reading 6 landing pages".
function narrative(s) {
  const k = kindOf(s);
  const verb = { coding: 'Coding', browsing: 'Browsing', terminal: 'In terminal', thinking: 'Thinking', needs: 'Needs you', error: 'Error', done: 'Done', idle: 'Idle' }[k];
  const what = statusLine(s);
  if (!what || what === verb || /^(thinking…|idle)$/i.test(what)) return { verb, what: k === 'done' ? 'Free for a new task' : '' };
  return { verb, what };
}
const unNeed = (t) => String(t || '').replace(/\s*·\s*needs you$/i, '').trim();
function statusLine(s) {
  if (s.status === 'waiting') { const a = unNeed(s.activity); return (a && !/^paused$/i.test(a) ? a : '') || s.title || s.reply || 'Waiting for you'; }
  if (s.status === 'error') return s.error || s.activity || s.title || 'Error';
  if (ACTIVE.has(s.status)) return s.activity || s.title || (s.status === 'thinking' ? 'Thinking…' : L[s.status]);
  if (s.status === 'done') return s.reply || s.title || 'Finished — free for a new task';
  return s.title || 'Idle';
}
const ROLE = { grokbot: 'Grok Bot', paperclip: 'Paperclip' };
const roleOf = (s) => s.role ? `${String(s.role).replace(/\s*\(.*$/, '')} · ${ROLE[s.agent] || AGENT_NAME[s.agent] || s.agent}` : (ROLE[s.agent] || AGENT_NAME[s.agent] || s.agent);
const FEED_WORD = { working: 'working', idle: 'idle', waiting_user: 'waiting for you', error: 'error', done: 'done' };
const OFFICE_FAMILY = { thinking: 'working', tool: 'working', typing: 'working', waiting: 'waiting_user', error: 'error', done: 'done', interrupted: 'done', idle: 'idle' };
function feedWord(effective) { return FEED_WORD[effective] || effective || 'live'; }
function roleLine(s) {
  const base = roleOf(s);
  const g = s.wallpaper && s.wallpaper.group;
  if (g && base.toLowerCase().indexOf(g.toLowerCase()) < 0) return g + ' · ' + base;
  return base;
}
let wallpaperFeed = null;
function feedPills() {
  const feed = wallpaperFeed;
  if (!feed) return '';
  const n = Object.keys(feed.bots || {}).length;
  const live = n ? `<span class="pill" title="Wallpaper feed, read in this browser">feed <b>${n}</b></span>` : '';
  const u = feed.usage;
  if (!u || !Number.isFinite(u.total_used_pct)) return live;
  const when = u.resets_at ? new Date(u.resets_at).toLocaleString('en-GB', { timeZone: 'Europe/Berlin', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
  const rows = Object.entries(u.bots || {}).map(([name, pct]) => `<span>${esc(name)}<b>${esc(pct)}</b></span>`).join('');
  return live + `<details class="pill usage" id="usageBox"${state.usageOpen ? ' open' : ''}><summary title="Usage posted on the wallpaper feed">used <b>${esc(u.total_used_pct)}%</b></summary><div class="usage-body"><span>resets<b>${esc(when || '—')}</b></span>${rows}<span>per bot<b>as posted</b></span></div></details>`;
}
state.usageOpen = false;
const ORDER = (s) => (GROUPS[0].match(s.status) ? 0 : ACTIVE.has(s.status) ? 1 : s.status === 'done' ? 2 : 3);
state.sel = null;
function selectAgent(key) {
  state.sel = state.sel === key ? null : key;
  if (!state.sel) state.userCleared = true;
  if (office) office.focusKey = state.sel;
  render();
}
function updatedLabel(s, now) {
  const t = s.lastEventAt;
  if (!t) return '—';
  return now - t < 15_000 ? 'just now' : ago(t, now);
}
// Task steps for the detail card. Real data first (session step/steps/plan,
// e.g. the Hurly crew loop); otherwise build an honest estimate from this
// agent's own activity history (done = earlier entries, current = latest).
function stepsOf(s) {
  const hist = actLog.filter((e) => e.key === s.key);
  const curText = statusLine(s);
  if (Number.isFinite(s.step) && Number.isFinite(s.steps) && s.steps > 0) {
    const plan = Array.isArray(s.plan) && s.plan.length === s.steps ? s.plan : Array.from({ length: s.steps }, (_, i) => `Step ${i + 1}`);
    const rows = plan.map((text, i) => ({ text: i + 1 === s.step && statusLine(s) && !/^thinking…$/i.test(statusLine(s)) ? `${text} — ${statusLine(s)}` : text, state: i + 1 < s.step ? 'ok' : i + 1 === s.step ? 'cur' : '' }));
    return { exact: true, cur: s.step, total: s.steps, rows, source: 'from session step data' };
  }
  const seen = new Set();
  const past = [];
  for (const e of hist.slice().reverse()) {
    const k = e.text.replace(/^(on shift|joined) · /, '');
    if (seen.has(k)) continue;
    seen.add(k);
    past.push({ text: k, ts: e.ts });
    if (past.length >= 5) break;
  }
  past.reverse();
  if (!ACTIVE.has(s.status) && s.status !== 'waiting' && s.status !== 'error') {
    const rows = past.map((r) => ({ ...r, state: 'ok' }));
    return { exact: false, cur: rows.length, total: s.status === 'done' && rows.length ? rows.length : 0, rows, source: 'from activity history' };
  }
  const last = past.pop();
  const rows = past.map((r) => ({ ...r, state: 'ok' }));
  rows.push({ text: curText, ts: last ? last.ts : '', state: 'cur' });
  const total = rows.length + (s.status === 'waiting' ? 1 : 2);
  return { exact: false, cur: rows.length, total, rows, source: 'estimated from activity history' };
}
function renderSide(all, now) {
  renderRoutines();
  const list = all.filter((s) => !s.subagent).slice().sort((a, b) => ORDER(a) - ORDER(b) || String(a.project).localeCompare(String(b.project)));
  const f = state.filter && FILTERS[state.filter];
  const shown = f ? list.filter(f) : list;
  const flabel = { needs: 'need you', working: 'working', idle: 'idle' }[state.filter];
  document.getElementById('teamN').innerHTML = f ? `${shown.length} of ${list.length} bots<span class="filterchip" data-clearf title="Clear filter">${esc(flabel)} ×</span>` : `${list.length} bots`;
  document.getElementById('teamList').innerHTML = shown.map((s) => {
    const p = pillOf(s);
    const n = narrative(s);
    const live = s.wallpaper && (s.wallpaper.step || s.wallpaper.effective);
    const liveHtml = live ? `<span class="tline live"><b>live ${esc(feedWord(s.wallpaper.effective))}</b> — ${esc(s.wallpaper.step || 'no step')}</span>` : '';
    return `<div class="trow${state.sel === s.key ? ' sel' : ''}${p.cls ? ' warnrow' : ''}${live ? ' has-live' : ''}" data-sel="${esc(s.key)}" data-s="${esc(s.status)}" data-k="${p.k}" title="${esc(s.title || '')}">
      <span class="sw" style="--c:${agentColor(s)}"></span>
      <span class="tname">${esc(s.project || s.agent)}<span class="rl">${esc(roleLine(s))}</span></span>
      <span class="spill ${p.cls}" data-k="${p.k}">${esc(p.txt)}</span>
      <span class="tline">${n.what ? `<b>${esc(n.verb)}</b> — ${esc(n.what)}` : `<b>${esc(n.verb)}</b>`}</span>
      ${liveHtml}</div>`;
  }).join('') || `<div class="tline" style="padding:8px">${f ? 'Nobody matches this filter' : 'No sessions yet'}</div>`;
  if (office) office.focusKey = state.sel;
  const det = document.getElementById('detail');
  const s = state.sel && all.find((x) => x.key === state.sel);
  if (!s) { det.hidden = true; det.innerHTML = ''; return; }
  const p = pillOf(s);
  const st = stepsOf(s);
  det.hidden = false;
  det.dataset.s = s.status;
  det.innerHTML = `
    <div class="dh"><span class="sw" style="--c:${agentColor(s)}"></span>
      <div><div class="dn">${esc(s.project || s.agent)}</div><div class="dm">${esc(roleLine(s))} · updated ${esc(updatedLabel(s, now))}</div></div>
      <span class="spill ${p.cls}" data-k="${p.k}" style="margin-left:auto">${esc(p.txt)}</span><button class="dx" data-unsel title="Close">×</button></div>
    <div class="lab">Task</div>
    <div class="task">${esc(s.title || '—')}</div>
    ${st.total ? `<div class="bar thin"><i style="width:${Math.round(100 * st.cur / st.total)}%"></i></div>
    <div class="stepmeta"><span>${esc(st.source)}</span><span>${st.exact ? `step ${st.cur} of ${st.total}` : `≈ step ${st.cur} of ${st.total} (est.)`}</span></div>` : ''}
    ${s.error ? `<div class="txt" style="color:var(--error)">${esc(s.error)}</div>` : ''}
    ${st.rows.length ? `<div class="steps">${st.rows.map((r) => `<div class="stp ${r.state}"><span class="ck">${r.state === 'ok' ? '✓' : ''}</span><span class="st">${r.ts ? `<time>${esc(r.ts)}</time>` : ''}${esc(r.text)}</span></div>`).join('')}</div>` : ''}
    <div class="note">${esc(s.model || '')}${s.status === 'waiting' ? ' · answer it where the agent runs (Paperclip / Grok Bot chat)' : ''}</div>
    ${liveBlock(s, now)}`;
}
function liveBlock(s, now) {
  const w = s.wallpaper;
  if (!w) return '';
  const family = OFFICE_FAMILY[s.status] || s.status;
  const disagree = w.effective && family !== w.effective;
  const seen = w.seenMs ? (now - w.seenMs < 15000 ? 'just now' : ago(w.seenMs, now)) : 'no status yet';
  // Paperclip map wins; never emit grokbot:// (OS "Open Grok Bot?" dialog).
  const name = s.project || s.title || w.name || '';
  const chatUrl = (typeof WallpaperFeed !== 'undefined' && WallpaperFeed.resolveChatUrl)
    ? WallpaperFeed.resolveChatUrl(name, w.chat || '')
    : (/^https:\/\//i.test(w.chat || '') ? w.chat : '');
  const chat = chatUrl
    ? `<a class="chatlink" href="${esc(chatUrl)}">Open chat</a>`
    : '';
  const pc = (typeof WallpaperFeed !== 'undefined' && WallpaperFeed.paperclipAgentId)
    ? WallpaperFeed.paperclipAgentId(name, s.pc)
    : (s.pc || '');
  const needsStart = (s.status === 'waiting' || w.effective === 'waiting_user') && pc;
  const start = needsStart
    ? `<button type="button" class="startlink" data-pc-start="${esc(pc)}">Start</button>`
    : '';
  const usage = Number.isFinite(w.usagePct) ? `<div class="txt">usage ${esc(w.usagePct)} as posted</div>` : '';
  return `<div class="lab">Live feed</div>
    <div class="task">${esc(feedWord(w.effective))}${w.step ? ' — ' + esc(w.step) : ''}</div>
    <div class="txt">${esc([w.group, 'seen ' + seen].filter(Boolean).join(' · '))}</div>
    ${usage}${start}${chat}
    ${disagree ? `<div class="note">Paperclip keeps this desk (${esc(s.status)}). The feed says ${esc(feedWord(w.effective))}.</div>` : ''}`;
}
function renderRoutines() {
  const box = document.getElementById('routinesBox');
  if (!box) return;
  const items = (wallpaperFeed && wallpaperFeed.routines) || [];
  box.hidden = !items.length;
  if (!items.length) return;
  document.getElementById('routinesN').textContent = String(items.length);
  document.getElementById('routinesList').innerHTML = items.slice(0, 24).map((r) => {
    const when = r.next_run ? new Date(r.next_run).toLocaleString('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' }) : '';
    return `<div class="routine-row"><b>${esc(r.bot)}</b> · ${esc(r.name)}${r.schedule ? ' · ' + esc(r.schedule) : ''}${when ? ' · ' + esc(when) : ''}</div>`;
  }).join('');
}
document.getElementById('side').addEventListener('click', (e) => {
  const startBtn = e.target.closest('[data-pc-start]');
  if (startBtn) {
    e.preventDefault();
    const agentId = startBtn.getAttribute('data-pc-start');
    if (!agentId) return;
    startBtn.disabled = true;
    startBtn.textContent = 'Starting…';
    fetch('/api/paperclip/resume', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ agentId }),
    }).then((r) => r.json().catch(() => ({}))).then((body) => {
      if (!body || !body.ok) console.warn('[office] Start failed', body && body.error);
    }).catch((err) => console.warn('[office] Start error', err)).finally(() => {
      startBtn.disabled = false;
      startBtn.textContent = 'Start';
    });
    return;
  }
  if (e.target.closest('[data-clearf]')) { state.filter = null; render(); return; }
  if (e.target.closest('[data-unsel]')) { state.sel = null; state.userCleared = true; if (office) office.focusKey = null; render(); return; }
  const row = e.target.closest('[data-sel]');
  if (row) { hideTip(); selectAgent(row.dataset.sel); }
});

// Activity log: derived from status / activity / reply changes between
// snapshots (SSE). Keeps the last 40 lines.
const actLog = [];
const lastSeen = new Map();
const clip = (t, n = 90) => { t = String(t || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };
function pushAct(s, text) {
  const d = new Date();
  actLog.push({ key: s.key, name: s.project || s.agent, color: agentColor(s), status: s.status, text: clip(text), ts: d.toTimeString().slice(0, 8) });
  while (actLog.length > 40) actLog.shift();
}
function describe(s) {
  switch (s.status) {
    case 'thinking': return s.activity ? `thinking · ${s.activity}` : 'thinking…';
    case 'tool': return `tool · ${s.activity || 'running a tool'}`;
    case 'typing': return s.activity ? `writing · ${s.activity}` : 'writing a reply';
    case 'waiting': return `needs you · ${s.activity || s.reply || 'waiting for input'}`;
    case 'error': return `error · ${s.error || s.activity || ''}`;
    case 'done': return s.reply ? `done · ${s.reply}` : 'finished';
    case 'interrupted': return 'interrupted';
    default: return 'went idle';
  }
}
function logChanges(sessions, first) {
  const seen = new Set();
  for (const s of sessions) {
    if (s.subagent) continue;
    seen.add(s.key);
    const b = lastSeen.get(s.key);
    if (!b) { if (first ? s.status !== 'idle' : true) pushAct(s, first ? `on shift · ${describe(s)}` : `joined · ${describe(s)}`); }
    else if (b.status !== s.status) pushAct(s, describe(s));
    else if (s.activity && b.activity !== s.activity) pushAct(s, s.status === 'waiting' ? `needs you · ${s.activity}` : s.activity);
    else if (s.reply && b.reply !== s.reply) pushAct(s, `replied · ${s.reply}`);
    else if (s.title && b.title !== s.title) pushAct(s, `now on · ${s.title}`);
    lastSeen.set(s.key, { status: s.status, activity: s.activity, reply: s.reply, title: s.title });
  }
  for (const [k, b] of [...lastSeen]) if (!seen.has(k)) { pushAct({ key: k, project: b.name || k, status: 'idle' }, 'left the office'); lastSeen.delete(k); }
  renderLog();
}
const wallpaperSeen = new Map();
function noteWallpaper(sessions) {
  let changed = false;
  const seen = new Set();
  for (const s of sessions) {
    if (s.subagent || !s.wallpaper) continue;
    seen.add(s.key);
    const sig = (s.wallpaper.effective || '') + '|' + (s.wallpaper.step || '');
    if (wallpaperSeen.get(s.key) === sig) continue;
    wallpaperSeen.set(s.key, sig);
    changed = true;
    pushAct(s, s.wallpaper.step ? `live ${feedWord(s.wallpaper.effective)} · ${s.wallpaper.step}` : `live ${feedWord(s.wallpaper.effective)}`);
  }
  for (const k of [...wallpaperSeen.keys()]) if (!seen.has(k)) wallpaperSeen.delete(k);
  if (changed) renderLog();
}
function renderLog() {
  const el = document.getElementById('actLog');
  const stick = el.scrollTop + el.clientHeight >= el.scrollHeight - 30;
  el.innerHTML = actLog.map((e) => `<div class="${e.status === 'waiting' || e.status === 'error' ? 'warnl' : ''}" title="${esc(e.text)}"><time>${esc(e.ts)}</time><b style="color:${e.color}">${esc(e.name)}</b>${esc(e.text)}</div>`).join('');
  if (stick) el.scrollTop = el.scrollHeight;
}

// Now / Day / Evening / Night (saved in localStorage as wmad.light).
const lightSeg = document.getElementById('lightSeg');
function berlinLightKey() {
  if (typeof officeLightKey !== 'function') return '';
  const prev = window.OFFICE_LIGHT;
  window.OFFICE_LIGHT = 'now';
  let key = '';
  try { key = officeLightKey(); } finally { window.OFFICE_LIGHT = prev; }
  return key;
}
function syncLight() {
  window.OFFICE_LIGHT = state.light;
  lightSeg.querySelectorAll('button').forEach((b) => { b.classList.toggle('on', b.dataset.v === state.light); b.setAttribute('aria-pressed', b.dataset.v === state.light); });
  if (office && typeof office.syncLight === 'function') office.syncLight();
  const nowBtn = lightSeg.querySelector('[data-v="now"]');
  if (nowBtn) {
    const key = berlinLightKey();
    nowBtn.title = key ? `Follows Europe/Berlin · ${key}` : 'Follows Europe/Berlin';
  }
}
lightSeg.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  state.light = b.dataset.v; store.set('light', state.light); syncLight();
});
syncLight();

// One tap: a clean picture of the 3D view (no names, task text, or chrome)
// for posting on X. Falls back to a download when the share sheet isn't there.
(function () {
  const btn = document.getElementById('shareOffice');
  if (!btn) return;
  function fileFromUrl(url) {
    const comma = url.indexOf(',');
    if (comma < 0) return null;
    const bin = atob(url.slice(comma + 1));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new File([bytes], 'hurly-office.png', { type: 'image/png' });
  }
  function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hurly-office.png';
    a.click();
  }
  btn.addEventListener('click', () => {
    const shot = office && typeof office.captureShare === 'function' ? office.captureShare() : null;
    if (!shot || typeof shot.toDataURL !== 'function') return;
    let url;
    try { url = shot.toDataURL('image/png'); } catch (e) { console.error(e); return; }
    const file = fileFromUrl(url);
    const label = btn.textContent;
    const saved = () => {
      btn.textContent = 'Saved';
      setTimeout(() => { if (btn.textContent === 'Saved') btn.textContent = label; }, 1400);
    };
    if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: 'Hurly office' }).then(saved, (err) => {
        if (err && err.name === 'AbortError') return;
        download(url);
        saved();
      });
      return;
    }
    download(url);
    saved();
  });
})();

let feedHandle = null;
function feedTarget() {
  if (!window.WallpaperFeed || !WallpaperFeed.resolveFeedTarget) return null;
  let saved = '';
  try { saved = localStorage.getItem(WallpaperFeed.STORE_KEY) || ''; } catch (_) {}
  return WallpaperFeed.resolveFeedTarget({ pageLink: WallpaperFeed.pageLink, saved });
}
function feedUsingDefault(link) {
  if (!window.WallpaperFeed || !link) return false;
  let saved = '';
  try { saved = localStorage.getItem(WallpaperFeed.STORE_KEY) || ''; } catch (_) {}
  return !WallpaperFeed.pageLink && !saved && link.topic === WallpaperFeed.DEFAULT_FEED_TOPIC;
}
function setFeedHint(text) {
  const el = document.getElementById('wallpaperHint');
  if (el) el.textContent = text;
}
function startFeed() {
  if (feedHandle) { feedHandle.stop(); feedHandle = null; }
  const link = feedTarget();
  if (!link) {
    wallpaperFeed = null;
    setFeedHint('No feed set. Paste #topic or #topic@host. It stays in this browser and is not sent to the office server.');
    if (state.baseSessions) render();
    return;
  }
  const officeDefault = feedUsingDefault(link);
  setFeedHint(officeDefault
    ? 'Reading the office default feed in this browser…'
    : 'Reading the feed in this browser…');
  feedHandle = WallpaperFeed.connectFeed(link, (feed) => {
    wallpaperFeed = feed;
    if (state.baseSessions || state.loaded) render();
  }, (st) => {
    if (st.phase === 'live') {
      setFeedHint('Live feed · ' + st.bots + (st.bots === 1 ? ' bot' : ' bots')
        + (officeDefault
          ? '. Office default — paste another topic in Settings to override.'
          : '. The topic stays in this browser.'));
    } else if (st.phase === 'error') {
      setFeedHint(officeDefault
        ? 'Could not reach the office default feed.'
        : 'Could not reach the feed. The topic was not sent to the office server.');
    } else {
      setFeedHint(officeDefault
        ? 'Reading the office default feed in this browser…'
        : 'Reading the feed in this browser…');
    }
  });
}
document.getElementById('wallpaperSave').addEventListener('click', () => {
  const raw = document.getElementById('wallpaperFeed').value.trim();
  const parsed = WallpaperFeed.parseFeedInput(raw);
  if (!parsed) { setFeedHint('Use #topic, #topic@host, or https://host/topic.'); return; }
  try { localStorage.setItem(WallpaperFeed.STORE_KEY, raw); } catch (_) {}
  WallpaperFeed.pageLink = null;
  const pip = new URLSearchParams(location.search).get('pip') === '1' ? '?pip=1' : '';
  history.replaceState(null, '', location.pathname + pip);
  document.getElementById('wallpaperFeed').value = '';
  startFeed();
});
document.getElementById('wallpaperClear').addEventListener('click', () => {
  if (feedHandle && feedHandle.clearCache) feedHandle.clearCache();
  try { localStorage.removeItem(WallpaperFeed.STORE_KEY); } catch (_) {}
  WallpaperFeed.pageLink = null;
  const pip = new URLSearchParams(location.search).get('pip') === '1' ? '?pip=1' : '';
  history.replaceState(null, '', location.pathname + pip);
  document.getElementById('wallpaperFeed').value = '';
  startFeed();
});
document.getElementById('wallpaperFeed').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); document.getElementById('wallpaperSave').click(); }
});

applyLang(chooseLang(null));
syncControls();
window.onData = onData;
window.makeOffice = makeOffice;
window.connect = connect;
scenesReady.then(() => makeOffice());
connect();
startFeed();
setInterval(tickTimes, 1000);
}
