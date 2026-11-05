// 4D is the wallpaper dashboard: the tower fills the viewport and the glass panels
// (floors, team, activity, usage) sit on top of it. The feed topic never comes through here.
import { initScene, renderScene, destroyScene, setSceneVisible, sceneCanvas, focusBot, captureScene, zoom, setTowerTheme } from './tower/scene.js';
import { initUI, renderUI, destroyUI, setStartBusy, setClearErrorBusy } from './tower-ui/ui.js';
import { initSound, destroySound, sfx } from './tower-ui/sound.js';

const LIGHT_TIME = { day: '13:00', evening: '18:50', night: '23:00' };

function mountQuality(onQuality) {
  const host = document.querySelector('#topbar .bhq-right');
  if (!host || host.querySelector('.bhq-qual')) return;
  const seg = document.createElement('div');
  seg.className = 'bhq-qual bhq-surface';
  seg.setAttribute('role', 'group');
  seg.setAttribute('aria-label', 'Office quality');
  for (const [v, label] of [['mid', '2D'], ['high', '3D'], ['4d', '4D']]) {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.v = v;
    b.textContent = label;
    if (v === '4d') b.classList.add('on');
    b.addEventListener('click', () => onQuality(v));
    seg.append(b);
  }
  host.prepend(seg);
}

function mountTheme(onTheme) {
  const host = document.querySelector('#topbar .bhq-right');
  if (!host || host.querySelector('.bhq-theme')) return;
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'bhq-theme bhq-surface';
  b.addEventListener('click', () => onTheme());
  const qual = host.querySelector('.bhq-qual');
  host.insertBefore(b, qual ? qual.nextSibling : host.firstChild);
  paintThemeButton(b);
}

function paintThemeButton(b) {
  if (!b) return;
  const dark = document.documentElement.dataset.theme === 'dark';
  b.textContent = dark ? 'Light' : 'Dark';
  b.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  b.setAttribute('aria-pressed', dark ? 'true' : 'false');
  b.setAttribute('aria-label', b.title);
}

export class Office4D {
  constructor(root, opts = {}) {
    this.root = root;
    this.opts = opts;
    this.kind = '4d';
    this.isTower = true;
    this.loaded = false;
    this.visible = true;
    this.framesShown = 0;
    this.deskOf = new Map();
    this.plan = { desks: Array.from({ length: 21 }, (_, i) => i) };
    this.pal = { dark: false };
    this.sessions = [];
    this.extras = null;
    this.keyOf = new Map();
    this.towerFloors = [];
    this.focusKey = null;
    this.pickedId = null;
    this.viewFloorId = typeof opts.towerFloor === 'string' ? opts.towerFloor : null;
    this._lastSel = null;
    this._readyFired = false;
    this.ready = new Promise((ok) => { this.markReady = ok; });
    initScene(root, {
      onReady: () => {
        this.loaded = true;
        this.canvas = sceneCanvas();
        if (!this._readyFired) {
          this._readyFired = true;
          this.markReady(true);
        }
      },
      onFrame: () => {
        if (!this.visible) return;
        this.framesShown++;
        this.canvas = this.canvas || sceneCanvas();
        if (this.opts.onFrame) this.opts.onFrame(this);
      },
      onSelectBot: (id) => this.selectBot(id),
      onHoverBot: (id) => sfx.hover(id),
      onAssignSeat: (id, desk) => this.assignSeat(id, desk),
    });
    initUI({
      onSelectBot: (id) => this.selectBot(id),
      onSelectFloor: (id) => this.setTowerFloor(id),
      onZoom: (dir) => { zoom(dir); sfx.zoom(dir); },
      onOpenChat: (_id, url) => openWallpaperChat(url),
      onStartAgent: (_id, agentId) => startPaperclipAgent(agentId),
      onClearErrorAgent: (_id, agentId) => clearPaperclipError(agentId),
      onShare: () => {
        const shot = this.captureShare();
        if (!shot) return;
        const a = document.createElement('a');
        a.href = shot.toDataURL('image/png');
        a.download = 'office.png';
        a.click();
      },
    });
    mountQuality((v) => { if (this.opts.onQuality) this.opts.onQuality(v); });
    mountTheme(() => { if (this.opts.onTheme) this.opts.onTheme(); });
    initSound({ slot: document.querySelector('#topbar .bhq-right') });
    const snd = document.querySelector('#topbar .bhq-snd');
    const usage = document.querySelector('#topbar .bhq-usage');
    if (snd && usage && usage.parentElement) usage.parentElement.insertBefore(snd, usage);
    this.canvas = sceneCanvas();
    this.syncLight();
    this.setTheme(document.documentElement.dataset.theme === 'dark');
  }

  selectBot(id) {
    const next = id || null;
    if (next !== this.pickedId) sfx.select(!!next);
    this.pickedId = next;
    this._followPick = !!next;
    this.update(this.sessions);
  }

  assignSeat(botId, desk) {
    const feed = globalThis.WallpaperFeed;
    if (!feed || typeof feed.assignSeat !== 'function') return;
    if (!feed.assignSeat(botId, desk)) return;
    sfx.select(true);
    this.update(this.sessions);
  }

  update(sessions) {
    this.sessions = Array.isArray(sessions) ? sessions : [];
    const feed = globalThis.WallpaperFeed;
    const state = feed && typeof feed.towerState === 'function'
      ? feed.towerState(this.sessions, this.extras || {})
      : { floors: [], bots: {} };
    this._state = state;
    this.towerFloors = (state.floors || []).map((f) => ({ id: f.id, name: f.name }));
    this.keyOf = new Map();
    const byId = state.bots || {};
    for (const s of this.sessions) {
      const name = s.project || s.title || s.id || s.key;
      let id = feed && feed.botId ? feed.botId(name) : String(name || '');
      if (!byId[id]) id = Object.keys(byId).find((k) => byId[k].name === name) || id;
      if (byId[id]) this.keyOf.set(id, s.key);
    }
    const floors = state.floors || [];
    let want = this.viewFloorId && floors.some((f) => f.id === this.viewFloorId) ? this.viewFloorId : null;
    const sel = this.pickedId && byId[this.pickedId] ? this.pickedId : null;
    this.pickedId = sel;
    if (sel && byId[sel].floor && byId[sel].floor !== want && this._followPick) want = byId[sel].floor;
    this._followPick = false;
    if (!want) want = floors.slice().sort((a, b) => (b.bots?.length || 0) - (a.bots?.length || 0))[0]?.id || null;
    this.viewFloorId = want;
    this.deskOf = new Map();
    for (const [id, key] of this.keyOf) {
      const bot = byId[id];
      if (bot && bot.floor === want && bot.effective_status === 'working') this.deskOf.set(key, (bot.desk || 1) - 1);
    }
    const view = { currentFloor: want, selectedBot: sel };
    renderScene(state, view);
    try { renderUI(state, view); } catch (e) { console.error(e); }
    this._soundStatus(state);
    if (sel && sel !== this._lastSel) {
      this._lastSel = sel;
      focusBot(sel);
    }
    if (!sel) this._lastSel = null;
    if (this.opts.onFloors) this.opts.onFloors(this.towerFloors);
  }

  _selectedId(byId) {
    if (!this.focusKey) return null;
    for (const [id, key] of this.keyOf) if (key === this.focusKey && (!byId || byId[id])) return id;
    return null;
  }

  setTowerFloor(id) {
    if (id && id !== this.viewFloorId) {
      const floors = ((this._state && this._state.floors) || []).slice().sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
      const order = floors.findIndex((f) => f.id === id);
      if (order >= 0) sfx.floor(order);
    }
    this.viewFloorId = id;
    this._lastFocus = this.focusKey;
    this.update(this.sessions);
  }

  _soundStatus(state) {
    const now = {};
    const bots = (state && state.bots) || {};
    for (const [id, b] of Object.entries(bots)) now[id] = b.effective_status;
    if (this._lastStatus) {
      const fresh = new Set();
      for (const [id, s] of Object.entries(now)) if (this._lastStatus[id] && this._lastStatus[id] !== s) fresh.add(s);
      const kind = ['waiting_user', 'error', 'done'].find((k) => fresh.has(k));
      if (kind) sfx.status(kind);
    }
    this._lastStatus = now;
  }

  setVisible(v) {
    this.visible = !!v;
    setSceneVisible(this.visible);
  }

  setTheme(dark) {
    try { setTowerTheme(!!dark); } catch (e) { console.error(e); }
    paintThemeButton(document.querySelector('.bhq-theme'));
  }

  syncLight() {
    const mode = globalThis.OFFICE_LIGHT || 'now';
    const time = Object.prototype.hasOwnProperty.call(LIGHT_TIME, mode) ? LIGHT_TIME[mode] : null;
    if (globalThis.bothq && typeof globalThis.bothq.setTime === 'function') globalThis.bothq.setTime(time);
  }

  captureShare() {
    try { return captureScene(); } catch (e) { console.error(e); return null; }
  }

  destroy() {
    try { destroySound(); } catch (e) { console.error(e); }
    try { destroyUI(); } catch (e) { console.error(e); }
    try { destroyScene(); } catch (e) { console.error(e); }
    this.canvas = null;
  }
}

// Open chat: https only (Paperclip agent chats). Never grokbot:// — that
// triggers the OS "Open Grok Bot?" dialog. Paperclip URLs open an in-page
// panel (Phase B); if the embed is unusable the user can open the same tab.
function openWallpaperChat(url) {
  if (!url || !/^https:\/\//i.test(url)) return;
  const WF = typeof globalThis !== 'undefined' ? globalThis.WallpaperFeed : null;
  if (WF && typeof WF.isPaperclipChatUrl === 'function' && WF.isPaperclipChatUrl(url)) {
    openPaperclipChatPanel(url);
    return;
  }
  followHttps(url);
}

function followHttps(url) {
  const a = document.createElement('a');
  a.href = url;
  a.rel = 'noopener';
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  a.remove();
}

async function startPaperclipAgent(agentId) {
  if (!agentId) return;
  setStartBusy(true);
  try {
    const r = await fetch('/api/paperclip/resume', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ agentId }),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok || !body.ok) {
      console.warn('[office] Start failed:', (body && body.error) || `HTTP ${r.status}`);
    }
  } catch (e) {
    console.warn('[office] Start error:', e);
  } finally {
    setStartBusy(false);
  }
}

async function clearPaperclipError(agentId) {
  if (!agentId) return;
  setClearErrorBusy(true);
  try {
    const r = await fetch('/api/paperclip/clear-error', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ agentId }),
    });
    const body = await r.json().catch(() => ({}));
    if (!r.ok || !body.ok) {
      console.warn('[office] Clear error failed:', (body && body.error) || `HTTP ${r.status}`);
    }
  } catch (e) {
    console.warn('[office] Clear error:', e);
  } finally {
    setClearErrorBusy(false);
  }
}

let paperclipPanel = null;

function openPaperclipChatPanel(url) {
  if (!paperclipPanel) paperclipPanel = buildPaperclipChatPanel();
  const p = paperclipPanel;
  p.frame.src = url;
  p.open.href = url;
  p.root.hidden = false;
  p.root.setAttribute('aria-hidden', 'false');
  try { p.closeBtn.focus(); } catch (_) { /* ignore */ }
}

function closePaperclipChatPanel() {
  if (!paperclipPanel) return;
  paperclipPanel.root.hidden = true;
  paperclipPanel.root.setAttribute('aria-hidden', 'true');
  paperclipPanel.frame.removeAttribute('src');
}

function buildPaperclipChatPanel() {
  const root = document.createElement('div');
  root.className = 'bhq-pcchat';
  root.hidden = true;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Paperclip chat');
  root.setAttribute('aria-hidden', 'true');

  const sheet = document.createElement('div');
  sheet.className = 'bhq-pcchat-sheet bhq-surface';

  const head = document.createElement('div');
  head.className = 'bhq-pcchat-head';
  const title = document.createElement('b');
  title.className = 'bhq-pcchat-title';
  title.textContent = 'Paperclip chat';
  const open = document.createElement('a');
  open.className = 'bhq-pcchat-open';
  open.textContent = 'Open full page';
  open.rel = 'noopener';
  open.addEventListener('click', (e) => {
    // Same-tab navigation (Phase A fallback) — leave the office for Paperclip.
    e.preventDefault();
    const href = open.getAttribute('href');
    closePaperclipChatPanel();
    if (href) followHttps(href);
  });
  const closeBtn = document.createElement('button');
  closeBtn.className = 'bhq-pcchat-close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close chat');
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => closePaperclipChatPanel());
  head.append(title, open, closeBtn);

  const note = document.createElement('p');
  note.className = 'bhq-pcchat-note';
  note.textContent = 'Uses your Paperclip board login. If the panel stays blank, open the full page.';

  const frame = document.createElement('iframe');
  frame.className = 'bhq-pcchat-frame';
  frame.title = 'Paperclip agent chat';
  frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  frame.setAttribute('allow', 'clipboard-read; clipboard-write');

  sheet.append(head, note, frame);
  root.append(sheet);
  root.addEventListener('click', (e) => { if (e.target === root) closePaperclipChatPanel(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && paperclipPanel && !paperclipPanel.root.hidden) closePaperclipChatPanel();
  });
  document.body.append(root);
  return { root, frame, open, closeBtn };
}
