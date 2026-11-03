// 4D is the wallpaper dashboard: the tower fills the viewport and the glass panels
// (floors, team, activity, usage) sit on top of it. The feed topic never comes through here.
import { initScene, renderScene, destroyScene, setSceneVisible, sceneCanvas, focusBot, captureScene, zoom, setTowerTheme } from './tower/scene.js';
import { initUI, renderUI, destroyUI } from './tower-ui/ui.js';

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
    this.plan = { desks: Array.from({ length: 20 }, (_, i) => i) };
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
    });
    initUI({
      onSelectBot: (id) => this.selectBot(id),
      onSelectFloor: (id) => this.setTowerFloor(id),
      onZoom: (dir) => zoom(dir),
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
    this.canvas = sceneCanvas();
    this.syncLight();
    this.setTheme(document.documentElement.dataset.theme === 'dark');
  }

  selectBot(id) {
    this.pickedId = id || null;
    this._followPick = !!id;
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
    this.viewFloorId = id;
    this._lastFocus = this.focusKey;
    this.update(this.sessions);
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
    try { destroyUI(); } catch (e) { console.error(e); }
    try { destroyScene(); } catch (e) { console.error(e); }
    this.canvas = null;
  }
}
