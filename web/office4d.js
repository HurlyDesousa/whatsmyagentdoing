// 4D office: the wallpaper tower (glossy blobs, stacked floors) inside the Swart Ops page.
// Scene sources live in web/tower (Bodila51/grokbot-wallpaper web/scene). The feed topic never
// comes through here — WallpaperFeed.towerState only sees sessions the page already merged.
import { initScene, renderScene, destroyScene, setSceneVisible, sceneCanvas, focusBot, captureScene } from './tower/scene.js';

const LIGHT_TIME = { day: '13:00', evening: '18:50', night: '23:00' };

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
    this.keyOf = new Map();
    this.towerFloors = [];
    this.focusKey = null;
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
      onSelectBot: (id) => {
        const key = id ? this.keyOf.get(id) : null;
        const s = key ? this.sessions.find((x) => x.key === key) : null;
        if (this.opts.onHover) this.opts.onHover(s || null, null, true);
      },
    });
    this.canvas = sceneCanvas();
    this.syncLight();
  }

  update(sessions) {
    this.sessions = Array.isArray(sessions) ? sessions : [];
    const feed = globalThis.WallpaperFeed;
    const state = feed && typeof feed.towerState === 'function' ? feed.towerState(this.sessions) : { floors: [], bots: {} };
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
    const sel = this._selectedId(byId);
    if (sel && byId[sel] && this.focusKey !== this._lastFocus) want = byId[sel].floor;
    if (!want) want = floors.slice().sort((a, b) => (b.bots?.length || 0) - (a.bots?.length || 0))[0]?.id || null;
    this.viewFloorId = want;
    this._lastFocus = this.focusKey;
    this.deskOf = new Map();
    for (const [id, key] of this.keyOf) {
      const bot = byId[id];
      if (bot && bot.floor === want && bot.effective_status === 'working') this.deskOf.set(key, (bot.desk || 1) - 1);
    }
    renderScene(state, { currentFloor: want, selectedBot: sel });
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

  syncLight() {
    const mode = globalThis.OFFICE_LIGHT || 'now';
    const time = Object.prototype.hasOwnProperty.call(LIGHT_TIME, mode) ? LIGHT_TIME[mode] : null;
    if (globalThis.bothq && typeof globalThis.bothq.setTime === 'function') globalThis.bothq.setTime(time);
  }

  captureShare() {
    try { return captureScene(); } catch (e) { console.error(e); return null; }
  }

  destroy() {
    try { destroyScene(); } catch (e) { console.error(e); }
    this.canvas = null;
  }
}
