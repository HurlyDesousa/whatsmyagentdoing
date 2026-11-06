// Isometric 3D building (CONTRACT §6, v2): renderer, camera on springs, floor stack, actors, picking, post.
// Public API (unchanged): initScene, renderScene, zoom, focusBot.
import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { loadOfficeAssets, REMOVED_BANK_DESKS } from './office.js';
import { Building } from './building.js';
import { createDaylight } from './daylight.js';
import { createPost } from './post.js';
import { studioCss } from './studio.js';
import { Actor } from './actor.js';
import { generateBlob } from './blobgen.js';
import { Spring, clamp } from './spring.js';
import { sofiaHour, fontsPromise } from './walls.js';
import {
  buildFloorInteracts, createFloorAmbient, stepFloorAmbient, assertTenInteracts,
} from './ambient.js';

// Swart Ops embed: same-origin tower assets (office.glb + night lightmaps), not the wallpaper site root.
const ASSETS = '/4d';
const ISO_DIR = new THREE.Vector3(1, 1, 1).normalize();
const HOME = { x: -0.4, y: -0.3, z: 0.3 };             // camera target relative to the active floor's surface
const VIEW_SPAN = { w: 35, h: 22 };                 // meters visible at zoom 1 (the stack + the white air around it)
const PHONE_SPAN_W = 29.5;                          // m across a phone's scene box: the floor + shaft fill ~90 % of the screen
const ZOOM = { min: 0.75, max: 3, focus: 2 };
const UI_LEFT = 230, UI_RIGHT = 360;                   // glass panels the building must not hide behind
const SIN_E = Math.sin(Math.atan(1 / Math.SQRT2));      // sin(35.264°) = ground foreshortening
// Server desk numbers: Bank A (table_1, 01–10) then Bank B (table_2, 11–20), then manager desk 21.
// Within each bank seat the far side first (odd desks face the camera) so tags stay clear of each other.
// SWA-3221 removed visual desks 03/05/07/09 (logical 2–5); spots are sparse — skip nulls when seating.
const DESK_ORDER = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 12, 14, 16, 18, 20, 21];
const REMOVED_VISUAL = new Set(REMOVED_BANK_DESKS);

let renderer, labels, camera, scene, container, callbacks, daylight, building, post;
let assets = null;
let lastState = null, lastView = { currentFloor: null, selectedBot: null };
const actors = new Map();
const retiring = new Set();
const pickables = new Set();
const models = new Map();            // avatar id -> Promise<Object3D|null>
const effects = [];
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const cursor = { active: false, x: 0, z: 0 };
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const tmp = new THREE.Vector3();
const clock = new THREE.Clock();
const cam = {
  x: new Spring(HOME.x, 0.45), y: new Spring(HOME.y, 0.55), z: new Spring(HOME.z, 0.45), zoom: new Spring(0, 0.4),   // zoom is ln(zoom)
};
let hoveredId = null, pointerDirty = false, drag = null;
const touches = new Map();
let pinch = null;
let introDone = false, switchedAt = 0, nowSec = 0, settledOnce = false;
let loadingEl = null;
let generation = 0;
let resizeObserver = null;
let sceneVisible = true;
// Debug/test switches: ?floor=<id> forces the active floor, ?from=<id> starts there first, ?intro=0 skips the load
// animation, ?hold=<s> fast-forwards that long after the (last) switch and freezes time, ?cam=x,z,zoom snaps the camera.
// Full dashboard: the building sits between the floor list and the team card, same as the wallpaper site.
const WALLPAPER = false;
const CENTERED = false;
const WALLPAPER_TAGS = false;
const WALLPAPER_FRAME_MS = 1000 / 30;
const WALLPAPER_FRAMING = 0.9;                        // < 1 = closer: the side panels' space is not needed, so the tower fills more
const TEST = (() => {
  const q = new URLSearchParams(location.search);
  return {
    floor: WALLPAPER ? null : q.get('floor'),
    from: q.get('from'),
    intro: q.get('intro'),
    hold: q.has('hold') ? Number(q.get('hold')) : null,
    cam: q.get('cam'),
    cursor: q.get('cursor'),
    // SWA-3262: ?ambient=1 → ~5–9s gaps so Visual QA can see a trip quickly.
    ambient: q.get('ambient') === '1' || q.get('ambient') === 'fast',
  };
})();
let frozen = false, pinCursor = false;
const ambientByFloor = new Map();
let floorInteracts = null;
const loungeAssign = new Map(); // botId -> lounge index (SWA-3257 meeting sit persistence)

// The office GLB is the biggest download: start it the moment this module runs (index.html may have preloaded it
// already; the loader then reuses that response), not after the renderer and the UI are set up.
const officeAssets = loadOfficeAssets(`${ASSETS}/office`);

export function initScene(el, cbs = {}) {
  const gen = ++generation;
  sceneVisible = true;
  container = el;
  callbacks = cbs;
  container.classList.add('hq-scene');
  ensureAssets();

  // Loader: index.html may already carry it (visible from the first paint). It stays until the first floor drops in,
  // so nobody sees a half-built office (the elevator shaft alone) while the bots are still on their way.
  loadingEl = container.querySelector('.hq-loading');
  if (!loadingEl) {
    loadingEl = document.createElement('div');
    loadingEl.className = 'hq-loading';
    loadingEl.setAttribute('role', 'status');
    loadingEl.innerHTML = '<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>';
    container.append(loadingEl);
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'default', failIfMajorPerformanceCaveat: false });
  // the post chain (MSAA, half-float) is capped at 1.5x: soft by design, and it keeps VRAM and fill cost sane
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = 'hq-canvas';
  container.append(renderer.domElement);

  labels = new CSS2DRenderer();
  labels.domElement.className = 'hq-labels';
  container.append(labels.domElement);

  scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  daylight = createDaylight({ scene, renderer });
  document.documentElement.dataset.sky = 'studio';        // white backdrop at every hour: the UI stays on light glass (web/styles.css)
  container.style.background = studioCss(towerDark);               // the same backdrop as the post pass draws, for the first moments

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 240);
  camera.position.copy(ISO_DIR).multiplyScalar(80);
  camera.lookAt(0, 0, 0);

  officeAssets.then((a) => {
    if (gen !== generation || !renderer) return;
    assets = a;
    building = new Building({ scene, daylight, assets: a, baseUrl: `${ASSETS}/office`, renderer });
    daylight.setBuilding(building);                        // sun stripes on the active floor, ambient tint of the baked surfaces
    a.spots.lounges.forEach((s) => { if (s) s.lounge = true; });
    try {
      floorInteracts = buildFloorInteracts(a.spots, 'sofa');
      assertTenInteracts(floorInteracts);
    } catch (err) {
      console.warn('[ambient] interact catalog:', err.message);
      floorInteracts = buildFloorInteracts(a.spots, 'sofa');
    }
    window.bothq = Object.assign(window.bothq || {}, {
      source: a.source,
      ambient: {
        interacts: () => floorInteracts,
        state: () => Object.fromEntries([...ambientByFloor.entries()].map(([k, v]) => [k, { ...v }])),
        force: (floorId) => {
          const st = ambientByFloor.get(floorId);
          if (st) st.nextAt = 0;
        },
      },
      sendToMeeting: (botId) => sendBotToMeeting(botId),
      loungeAssign,
    });
    resize();
    const go = () => { if (lastState) sync(); };
    Promise.race([fontsPromise, new Promise((r) => setTimeout(r, 1500))]).then(go, go);
  });

  post = createPost(renderer, scene, camera);
  if (towerDark && post.setDark) post.setDark(true);

  addPointerHandlers();
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();
  renderer.setAnimationLoop(frame);

  window.bothq = Object.assign(window.bothq || {}, {
    scene: { get camera() { return camera; }, get building() { return building; }, cam, actors, get daylight() { return daylight; }, switchFloor: (id) => building && switchFloor(id, false), settle },
  });
}

// The page may not load Inter / scene.css itself (older index.html): make sure both are there.
function ensureAssets() {
  if (!document.querySelector('link[href*="scene.css"]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '/4d/scene.css';
    document.head.append(l);
  }
  if (!document.querySelector('link[href*="family=Inter"]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap';
    document.head.append(l);
  }
}

export function renderScene(state, view) {
  lastState = state;
  lastView = { ...view };
  if (building) sync();
}

function sync() {
  const state = lastState, view = lastView;
  const floors = [...state.floors].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  building.setFloors(floors);
  let want = view.currentFloor && floors.some((f) => f.id === view.currentFloor) ? view.currentFloor : (floors[0]?.id ?? '_');
  if (TEST.floor && floors.some((f) => f.id === TEST.floor)) want = TEST.from && !introDone && floors.some((f) => f.id === TEST.from) ? TEST.from : TEST.floor;
  if (building.activeId !== want) switchFloor(want, !introDone);
  introDone = true;

  const inst = building.activeOpen();
  if (!inst) return;
  const floorBots = Object.values(state.bots).filter((b) => b.floor === building.activeId);
  const ids = new Set(floorBots.map((b) => b.id));

  for (const [id, actor] of actors) if (!ids.has(id)) { actor.retire(); retiring.add(actor); actors.delete(id); }

  const maxShare = Math.max(0.0001, ...floorBots.map((b) => b.usage_share || 0));
  const lounge = assignLounge(floorBots);
  applyLoungeOverrides(lounge, floorBots);
  const layout = building.styles?.get(building.activeId)?.layout || 'sofa';
  floorInteracts = buildFloorInteracts(assets.spots, layout);
  const amb = ensureAmbient(building.activeId);
  const flags = new Array(Math.max(20, assets.spots.desks.length)).fill(0);
  const delay = Math.max(0, switchedAt + 0.55 - nowSec);
  const homeOf = new Map();
  for (const bot of floorBots) {
    let actor = actors.get(bot.id);
    if (!actor) {
      actor = new Actor(bot, { parent: inst.root, inst, pickables, confetti, cursor, dropDelay: delay });
      actors.set(bot.id, actor);
      attachModel(actor, bot);
    }
    const deskIdx = (DESK_ORDER[(bot.desk || 1) - 1] || 1) - 1;
    const desk = assets.spots.desks[deskIdx] || assets.spots.desks.find(Boolean);
    const home = lounge.get(bot.id) || desk;
    homeOf.set(bot.id, home);
    if ((bot.effective_status || bot.status) === 'working' && !lounge.has(bot.id) && assets.spots.desks[deskIdx]) flags[deskIdx] = 1;
    // While ambient owns the walker, keep feeding the home seat (return target) without yanking motion.
    const spot = home;
    actor.update(bot, spot, { maxShare, selectedBot: view.selectedBot });
  }
  stepAmbient(amb, floorBots, homeOf);
  building.setScreens(flags);
  const floor = floors.find((f) => f.id === building.activeId);
  building.setDisplayData({ floorName: floor ? floor.name : '', bots: floorBots, hour: sofiaHour(state.now) });
  if (hoveredId && !actors.has(hoveredId)) hoveredId = null;
  if (!settledOnce) {
    settledOnce = true;
    if (TEST.intro === '0') settle(3.5);
    if (TEST.from && TEST.floor) sync();                 // second pass: ride from `from` to `floor`
    if (TEST.hold !== null) { settle(TEST.hold); frozen = true; }
    if (TEST.cursor) {                                   // debug: ?cursor=x,z pins the cursor ground point
      const [x, z] = TEST.cursor.split(',').map(Number);
      cursor.active = true; cursor.x = x; cursor.z = z; pinCursor = true;
      settle(1.2);
    }
    if (TEST.cam) {
      const [x, z, zm] = TEST.cam.split(',').map(Number);
      cam.x.snap(x); cam.z.snap(z); cam.zoom.snap(Math.log(zm || 1));
    }
  }
}

// Fast-forward all springs/animations (used by ?intro=0 and window.bothq.settle() for tests and screenshots).
function settle(seconds = 3) {
  const step = 1 / 30;
  for (let t = 0; t < seconds; t += step) {
    nowSec += step;
    stepCamera(step);
    building.update(step, performance.now());
    for (const a of actors.values()) { a.hostAlpha = building.activeOpen()?.alpha ?? 1; a.tick(step, nowSec); }
    for (const a of retiring) { a.tick(step, nowSec); if (a.dead) retiring.delete(a); }
  }
}

// Idle bots go to the lounge while seats last; the rest nap at their desks.
function assignLounge(bots) {
  const map = new Map();
  const seats = assets.spots.lounges.filter(Boolean);
  const idle = bots.filter((b) => (b.effective_status || b.status) === 'idle').sort((a, b) => (a.desk || 0) - (b.desk || 0));
  idle.slice(0, seats.length).forEach((b, i) => map.set(b.id, seats[i]));
  return map;
}

function hydrateLoungeAssign() {
  try {
    const feed = globalThis.WallpaperFeed;
    if (!feed || typeof feed.loadLoungeAssign !== 'function') return;
    const map = feed.loadLoungeAssign() || {};
    loungeAssign.clear();
    for (const [id, idx] of Object.entries(map)) loungeAssign.set(id, idx);
  } catch { /* optional */ }
}

// SWA-3257: persisted meeting / lounge seat overrides (any status).
function applyLoungeOverrides(map, bots) {
  hydrateLoungeAssign();
  const seats = (assets.spots.lounges || []).filter(Boolean);
  if (!seats.length) return;
  for (const bot of bots) {
    const idx = loungeAssign.get(bot.id);
    if (idx == null || !seats[idx]) continue;
    const s = seats[idx];
    map.set(bot.id, { pos: s.pos, yaw: s.yaw, lounge: true, meeting: true });
  }
}

function ensureAmbient(floorId) {
  if (!floorId) return null;
  let st = ambientByFloor.get(floorId);
  if (!st) {
    st = createFloorAmbient(floorId, { fast: TEST.ambient });
    ambientByFloor.set(floorId, st);
  }
  st.fast = TEST.ambient;
  return st;
}

function stepAmbient(st, floorBots, homeOf) {
  if (!st || !floorInteracts) return;
  const now = performance.now();
  stepFloorAmbient(st, {
    now,
    bots: floorBots,
    interacts: floorInteracts,
    busyIds: new Set(
      [...ambientByFloor.values()]
        .filter((s) => s !== st && s.walkerId && s.phase !== 'idle')
        .map((s) => s.walkerId),
    ),
    homeSpotFor: (bot) => homeOf.get(bot.id),
    isUserBusy: (id) => actors.get(id)?.isUserBusy(now),
    isTraveling: (id) => actors.get(id)?.isTraveling(),
    beginTrip: (id) => actors.get(id)?.beginAmbientTrip(),
    endTrip: (id) => actors.get(id)?.endAmbientTrip(),
    releaseTrip: (id) => actors.get(id)?.releaseAmbientTrip(),
    startTravel: (id, path, yaw) => actors.get(id)?.travelPath(path, yaw),
    setAct: (id, act, yaw) => actors.get(id)?.setAmbientAct(act, yaw),
    clearAct: (id) => actors.get(id)?.clearAmbientAct(),
    actorPos: (id) => {
      const a = actors.get(id);
      return a ? { x: a.root.position.x, y: a.root.position.y, z: a.root.position.z } : null;
    },
  });
}

/** SWA-3257: path a blob to a free conference / lounge chair and persist the seat. */
export function sendBotToMeeting(botId) {
  if (!assets?.spots?.lounges || !building) return { ok: false, reason: 'loading' };
  const seats = assets.spots.lounges.filter(Boolean);
  if (!seats.length) return { ok: false, reason: 'no-meeting' };
  const layout = building.styles?.get(building.activeId)?.layout;
  // Meeting corner is the racetrack table; sofa/media/library lounges still accept a sit.
  const preferMeeting = layout === 'meeting';
  const taken = new Set([...loungeAssign.entries()].filter(([id]) => id !== botId).map(([, i]) => i));
  // Also treat currently seated lounge occupants as taken.
  for (const [id, actor] of actors) {
    if (id === botId || !actor.spotIsLounge()) continue;
    const idx = seats.findIndex((s) => s && actor.spot && actor.spot.pos.distanceToSquared(s.pos) < 0.04);
    if (idx >= 0) taken.add(idx);
  }
  let pick = -1;
  const order = preferMeeting
    ? [0, 1, 2, 3, 4, ...seats.map((_, i) => i)].filter((i, n, a) => i < seats.length && a.indexOf(i) === n)
    : seats.map((_, i) => i);
  for (const i of order) {
    if (!taken.has(i)) { pick = i; break; }
  }
  if (pick < 0) return { ok: false, reason: 'full' };
  const actor = actors.get(botId);
  if (actor) {
    actor.markUserBusy(20_000);
    actor.endAmbientTrip();
  }
  // Cancel ambient if this bot was walking.
  for (const st of ambientByFloor.values()) {
    if (st.walkerId === botId) {
      st.phase = 'idle';
      st.walkerId = null;
      st.home = null;
      st.target = null;
    }
  }
  loungeAssign.set(botId, pick);
  try {
    const feed = globalThis.WallpaperFeed;
    if (feed && typeof feed.assignLounge === 'function') feed.assignLounge(botId, pick);
  } catch { /* optional persistence */ }
  if (lastState) sync();
  return { ok: true, lounge: pick, meeting: preferMeeting };
}

export function clearLoungeAssign(botId) {
  loungeAssign.delete(botId);
  try {
    const feed = globalThis.WallpaperFeed;
    if (feed && typeof feed.clearLounge === 'function') feed.clearLounge(botId);
  } catch { /* optional */ }
}

// Avatar chain (docs/AVATARS.md): 1. hand-made GLB assets/blobs/<avatar>.glb, 2. generated blob from bot.look
// (shape / colour / accessory written by Grok Bot from a screenshot), 3. generated blob from a hash of the id.
// A look that changes later (data/bots.json is hot-reloaded) re-dresses the actor on the next state poll.
function attachModel(actor, bot) {
  let current = null;
  const apply = (b) => {
    const key = `${b.avatar || b.id}|${b.color || ''}|${JSON.stringify(b.look || null)}`;
    if (key === current) return;
    current = key;
    (b.has_glb === false ? Promise.resolve(null) : loadModel(b.avatar || b.id)).then((m) => {   // has_glb: server knows the file is missing, no probe
      if (actor.dead || current !== key) return;
      if (m) return actor.setModel(m.clone(true));
      const look = b.look || {};
      actor.setModel(generateBlob({ shape: look.shape, color: look.color || b.color, accessory: look.accessory, seed: b.id }));
    });
  };
  apply(bot);
  const update = actor.update.bind(actor);
  actor.update = (b, spot, view) => { apply(b); return update(b, spot, view); };
}

function loadModel(id) {
  if (!models.has(id)) {
    models.set(id, new GLTFLoader().loadAsync(`${ASSETS}/blobs/${encodeURIComponent(id)}.glb`)
      .then((g) => g.scene)
      .catch(() => null));
  }
  return models.get(id);
}

// ---------- floor switch = elevator ride ----------

function switchFloor(id, first) {
  for (const a of actors.values()) { a.retire(); retiring.add(a); }
  actors.clear();
  hoveredId = null;
  building.setActive(id, { intro: first });
  const y = building.activeY + HOME.y;
  cam.x.to(HOME.x); cam.z.to(HOME.z); cam.y.to(y); cam.zoom.to(0);
  if (first) {
    cam.x.snap(HOME.x); cam.z.snap(HOME.z);
    cam.y.snap(y - 2.6); cam.zoom.snap(Math.log(0.86));
    cam.y.to(y, 0.1); cam.zoom.to(0, 0.1);
  }
  switchedAt = nowSec;
  if (first) { building.prewarm(camera); hideLoader(); }
}

let towerDark = false;

export function setTowerTheme(dark) {
  towerDark = !!dark;
  if (container) container.style.background = studioCss(towerDark);
  if (post && post.setDark) post.setDark(towerDark);
}

export function sceneCanvas() {
  return renderer ? renderer.domElement : null;
}

export function setSceneVisible(on) {
  sceneVisible = !!on;
  if (sceneVisible && renderer) resize();
}

// Drop the WebGL tower so 2D / 3D can take the same office element. Assets stay loaded for the next 4D visit.
export function destroyScene() {
  generation++;
  sceneVisible = false;
  if (renderer) {
    renderer.setAnimationLoop(null);
    try { renderer.dispose(); } catch { /* context already lost */ }
    renderer.domElement.remove();
  }
  try { post?.composer?.dispose?.(); } catch { /* composer may already be gone */ }
  labels?.domElement.remove();
  loadingEl?.remove();
  resizeObserver?.disconnect();
  resizeObserver = null;
  if (container) container.classList.remove('hq-scene', 'is-hovering');
  actors.clear();
  retiring.clear();
  effects.length = 0;
  pickables.clear();
  building = null;
  post = null;
  daylight = null;
  scene = null;
  camera = null;
  renderer = null;
  labels = null;
  container = null;
  callbacks = null;
  loadingEl = null;
  lastState = null;
  introDone = false;
  settledOnce = false;
  hoveredId = null;
  drag = null;
  pinch = null;
  switchedAt = 0;
}

function hideLoader() {
  const el = loadingEl;
  if (!el) return;
  loadingEl = null;
  el.classList.add('is-done');
  setTimeout(() => el.remove(), 450);
  callbacks?.onReady?.();
}

// ---------- camera (all on springs) ----------

export function zoom(dir) {
  if (!building) return;
  if (dir === 'reset') {
    cam.x.to(HOME.x); cam.z.to(HOME.z); cam.y.to(building.activeY + HOME.y); cam.zoom.to(0);
    return;
  }
  const z = clamp(Math.exp(cam.zoom.target) * (dir === 'in' ? 1.3 : 1 / 1.3), ZOOM.min, ZOOM.max);
  cam.zoom.to(Math.log(z));
}

export function focusBot(id) {
  const a = actors.get(id);
  if (!a || !building) return;
  cam.x.to(a.root.position.x);
  cam.z.to(a.root.position.z);
  cam.y.to(building.activeY + 0.6);
  cam.zoom.to(Math.log(Math.max(Math.exp(cam.zoom.target), ZOOM.focus)));
}

function stepCamera(dt) {
  clampTarget();
  cam.x.step(dt); cam.y.step(dt); cam.z.step(dt); cam.zoom.step(dt);
  const z = clamp(Math.exp(cam.zoom.x), ZOOM.min * 0.85, ZOOM.max * 1.1);
  if (Math.abs(z - camera.zoom) > 1e-5) { camera.zoom = z; camera.updateProjectionMatrix(); }
  tmp.set(cam.x.x, cam.y.x, cam.z.x);
  camera.position.copy(tmp).addScaledVector(ISO_DIR, 80);
}

function clampTarget() {
  cam.x.target = clamp(cam.x.target, -9.5, 9.5);
  cam.z.target = clamp(cam.z.target, -7.5, 7.5);
  cam.zoom.target = clamp(cam.zoom.target, Math.log(ZOOM.min), Math.log(ZOOM.max));
}

function resize() {
  if (!renderer) return;
  const w = container.clientWidth || 1, h = container.clientHeight || 1;
  renderer.setSize(w, h, false);
  labels.setSize(w, h);
  post?.setSize(w, h);
  const aspect = w / h;
  // phones (the UI's <= 900 px layout) have no side panels to keep clear: the floor fills the width, bots read bigger
  const spanW = CENTERED ? VIEW_SPAN.w : VIEW_SPAN.w + (PHONE_SPAN_W - VIEW_SPAN.w) * (1 - clamp((w - 560) / 340, 0, 1));
  const halfH = Math.max(VIEW_SPAN.h, spanW / aspect) / 2 * (CENTERED ? WALLPAPER_FRAMING : 1);
  camera.left = -halfH * aspect; camera.right = halfH * aspect;
  camera.top = halfH; camera.bottom = -halfH;
  // keep the building clear of the glass panels: shift the view so its centre is the free space between them
  const shift = CENTERED ? 0 : clamp((w - 900) / 600, 0, 1) * (UI_RIGHT - UI_LEFT) / 2;   // embed: no side panels, centred
  if (shift > 0.5) camera.setViewOffset(w, h, shift, 0, w, h); else camera.clearViewOffset();
  camera.updateProjectionMatrix();
}

const pxPerMeter = () => renderer.domElement.clientHeight / ((camera.top - camera.bottom) / camera.zoom);

// ---------- pointer: pan, zoom, hover, click ----------

function addPointerHandlers() {
  const el = renderer.domElement;
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerleave', () => { cursor.active = false; setHover(null); });
  if (WALLPAPER) return;                              // a desktop background: bots follow the cursor, nothing else
  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); drag = null; pinch = null; });
  el.addEventListener('wheel', onWheel, { passive: false });
  el.addEventListener('contextmenu', onContextMenu);
}

function setPointer(e) {
  const r = renderer.domElement.getBoundingClientRect();
  pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
}

function onDown(e) {
  // Right/middle click: leave drag/select alone so context menus do not reseat or pan.
  if (e.button != null && e.button !== 0) return;
  renderer.domElement.setPointerCapture?.(e.pointerId);
  setPointer(e);
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (touches.size === 2) {
    const [a, b] = [...touches.values()];
    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: cam.zoom.target };
    drag = null;
    return;
  }
  const hitBot = pick();
  drag = {
    id: e.pointerId, x0: e.clientX, y0: e.clientY, lx: e.clientX, ly: e.clientY,
    lt: performance.now(), panning: false, seating: false, seatBot: hitBot, vx: 0, vz: 0,
  };
}

function onContextMenu(e) {
  e.preventDefault();
  setPointer(e);
  const bot = pick();
  if (bot && callbacks.onBotContextMenu) callbacks.onBotContextMenu(bot, e.clientX, e.clientY);
}

function onMove(e) {
  setPointer(e);
  cursor.active = true;
  pointerDirty = true;
  if (touches.has(e.pointerId)) touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pinch && touches.size === 2) {
    const [a, b] = [...touches.values()];
    cam.zoom.to(pinch.z + Math.log(Math.hypot(a.x - b.x, a.y - b.y) / pinch.d));
    return;
  }
  if (!drag || drag.id !== e.pointerId) return;
  const moved = Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) > 5;
  if (!drag.panning && !drag.seating && moved) {
    // Drag starting on a blob reseats it; empty-floor drag pans the camera.
    if (drag.seatBot && callbacks.onAssignSeat) drag.seating = true;
    else drag.panning = true;
  }
  if (drag.seating) {
    container.classList.add('is-seating');
    return;
  }
  if (!drag.panning) return;
  const now = performance.now();
  const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
  const dtS = Math.max(0.001, (now - drag.lt) / 1000);
  drag.lx = e.clientX; drag.ly = e.clientY; drag.lt = now;
  // screen-space drag -> ground-plane move of the camera target (content follows the pointer 1:1)
  const ppm = pxPerMeter();
  const mx = -dx / ppm, mz = dy / ppm / SIN_E;
  const wx = (mx - mz) / Math.SQRT2, wz = (-mx - mz) / Math.SQRT2;
  cam.x.snap(clamp(cam.x.x + wx, -9.5, 9.5));
  cam.z.snap(clamp(cam.z.x + wz, -7.5, 7.5));
  drag.vx = drag.vx * 0.6 + (wx / dtS) * 0.4;
  drag.vz = drag.vz * 0.6 + (wz / dtS) * 0.4;
}

function onUp(e) {
  touches.delete(e.pointerId);
  container.classList.remove('is-seating');
  if (pinch) { if (touches.size < 2) pinch = null; drag = null; return; }
  if (!drag || drag.id !== e.pointerId) return;
  const d = drag;
  drag = null;
  if (d.seating && d.seatBot) {
    setPointer(e);
    const desk = nearestDeskLogical();
    if (desk) {
      clearLoungeAssign(d.seatBot);
      const actor = actors.get(d.seatBot);
      if (actor) {
        actor.markUserBusy(8_000);
        // Cancel ambient hop, but leave reseat travel to update() — do not let the
        // director's user-busy abort cancelTravel over the new path (SWA-3273).
        actor.cancelTravel();
        actor.releaseAmbientTrip();
      }
      for (const st of ambientByFloor.values()) {
        if (st.walkerId === d.seatBot) {
          st.phase = 'idle';
          st.walkerId = null;
          st.home = null;
          st.target = null;
        }
      }
      callbacks.onAssignSeat?.(d.seatBot, desk);
    }
    callbacks.onSelectBot?.(d.seatBot);
    return;
  }
  if (d.panning) {                                   // let it glide a little, then settle
    const vx = clamp(d.vx, -30, 30), vz = clamp(d.vz, -30, 30);
    cam.x.v = vx; cam.z.v = vz;
    cam.x.to(cam.x.x + vx * 0.12); cam.z.to(cam.z.x + vz * 0.12);
    return;
  }
  setPointer(e);
  callbacks.onSelectBot?.(pick());
}

// Visual desk index → logical desk number used by towerState / seat map.
// Spots are { pos, yaw } in floor-local xz (floor only translates in y), not Object3Ds.
function nearestDeskLogical() {
  if (!assets || !assets.spots || !assets.spots.desks) return null;
  raycaster.setFromCamera(pointer, camera);
  if (building) groundPlane.constant = -building.activeY;
  if (!raycaster.ray.intersectPlane(groundPlane, tmp)) return null;
  const gx = tmp.x, gz = tmp.z;
  let best = null, bestD = Infinity;
  for (let visual = 0; visual < assets.spots.desks.length; visual++) {
    const spot = assets.spots.desks[visual];
    if (!spot || !spot.pos || REMOVED_VISUAL.has(visual + 1)) continue;
    const d = (spot.pos.x - gx) ** 2 + (spot.pos.z - gz) ** 2;
    if (d < bestD) { bestD = d; best = visual; }
  }
  if (best == null || bestD > 4.5) return null; // ~2.1 m radius
  const visualNum = best + 1;
  const logical = DESK_ORDER.indexOf(visualNum) + 1;
  return logical > 0 ? logical : visualNum;
}

function onWheel(e) {
  e.preventDefault();
  setPointer(e);
  const z0 = Math.exp(cam.zoom.target);
  const z1 = clamp(z0 * Math.exp(-e.deltaY * (e.ctrlKey ? 0.012 : 0.0016)), ZOOM.min, ZOOM.max);
  if (z1 === z0) return;
  // keep the ground point under the cursor in place while zooming
  const shift = camera.view?.enabled ? (camera.view.offsetX / camera.view.fullWidth) * 2 : 0;
  const nx = pointer.x + shift, ny = pointer.y;
  const k = 1 / z0 - 1 / z1;
  const mx = nx * camera.right * k, my = ny * camera.top * k / SIN_E;
  cam.x.to(cam.x.target + (mx - my) / Math.SQRT2);
  cam.z.to(cam.z.target + (-mx - my) / Math.SQRT2);
  cam.zoom.to(Math.log(z1));
}

function pick() {
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects([...pickables], false)[0];
  return hit ? hit.object.userData.actorId : null;
}

function setHover(id) {
  if (id === hoveredId) return;
  if (hoveredId) actors.get(hoveredId)?.setHovered(false);
  hoveredId = id;
  if (id) actors.get(id)?.setHovered(true);
  container.classList.toggle('is-hovering', !!id);
  callbacks.onHoverBot?.(id);
}

// ---------- effects ----------

const CONFETTI_COLORS = [0x34C759, 0x0A84FF, 0xFF9F0A, 0xFF4FA0, 0xFF6A13, 0x14B8A6];
const confettiGeo = new THREE.PlaneGeometry(0.07, 0.035);

function confetti(at) {
  const group = new THREE.Group();
  group.position.copy(at);
  const parts = [];
  for (let i = 0; i < 36; i++) {
    const m = new THREE.Mesh(confettiGeo, new THREE.MeshBasicMaterial({ color: CONFETTI_COLORS[i % CONFETTI_COLORS.length], side: THREE.DoubleSide, transparent: true }));
    const a = Math.random() * Math.PI * 2, up = 2.2 + Math.random() * 1.6, out = 0.8 + Math.random() * 1.2;
    parts.push({ m, v: new THREE.Vector3(Math.cos(a) * out, up, Math.sin(a) * out), spin: new THREE.Vector3(Math.random() * 9, Math.random() * 9, 0) });
    group.add(m);
  }
  scene.add(group);
  effects.push({ group, parts, t: 0, life: 1.6 });
}

function stepEffects(dt) {
  for (let i = effects.length - 1; i >= 0; i--) {
    const fx = effects[i];
    fx.t += dt;
    for (const p of fx.parts) {
      p.v.y -= 6.5 * dt;
      p.v.multiplyScalar(1 - 1.4 * dt);
      p.m.position.addScaledVector(p.v, dt);
      p.m.rotation.x += p.spin.x * dt; p.m.rotation.y += p.spin.y * dt;
      p.m.material.opacity = Math.max(0, 1 - fx.t / fx.life);
    }
    if (fx.t >= fx.life) {
      fx.group.removeFromParent();
      fx.parts.forEach((p) => p.m.material.dispose());
      effects.splice(i, 1);
    }
  }
}

// ---------- share image (web/share/share.js) ----------

// One still of the current floor for the share card, framed like a product shot: the floor, the stack under it and the
// elevator fitted into `box` (fractions of the frame, y down: the caption gets the rest), on the same white studio
// through the same post chain, at width x height, supersampled by `scale` when the GPU allows it.
// Nothing private gets in: the in-scene tags are DOM and are never drawn into the canvas; the wall screen and the task
// board are redrawn for this one frame without the floor's name, bot names or tasks; selection / hover rings, bots on
// their way out and confetti are hidden. The live canvas is resized, drawn, copied out and restored inside this one
// task, then the live view is drawn again before the browser paints, so nothing flickers.
// Returns a <canvas> of width x height, or null while the office is still loading.
export function captureScene({ width = 1600, height = 900, scale = 1, box = { x: 0.06, y: 0.06, w: 0.88, h: 0.76 } } = {}) {
  const inst = building?.activeOpen();
  if (!inst || !post) return null;
  const pr = renderer.getPixelRatio();
  const maxPx = Math.min(renderer.capabilities.maxTextureSize, renderer.capabilities.maxRenderbufferSize || Infinity);
  const ss = Math.max(1, Math.min(scale, maxPx / width, maxPx / height));
  const zoom0 = camera.zoom, pos0 = camera.position.clone();
  const hidden = [];
  const hide = (o) => { if (o?.visible) { o.visible = false; hidden.push(o); } };
  for (const a of actors.values()) hide(a.ring);
  for (const a of retiring) hide(a.root);
  for (const fx of effects) hide(fx.group);
  const walls = inst.walls, live = walls?.data;
  try {
    if (live) {
      const anon = { ...live, floorName: `Floor ${building.activeIndex + 1}`, bots: live.bots.map((b) => ({ ...b, name: '', task: '', step: '' })) };
      if (walls.screen) walls.drawScreen(anon);
      if (walls.board) walls.drawBoard(anon);
    }
    renderer.setPixelRatio(ss);
    renderer.setSize(width, height, false);
    post.setSize(width, height);
    frameShot(width / height, box);
    focusV.set(0, building.cabinY.x + 0.7, 0).project(camera);
    post.render(clamp(focusV.y * 0.5 + 0.5, 0, 1), 0, 1);
    const out = document.createElement('canvas');
    out.width = width; out.height = height;
    const g = out.getContext('2d');
    g.imageSmoothingQuality = 'high';
    g.drawImage(renderer.domElement, 0, 0, width, height);
    return out;
  } finally {
    hidden.forEach((o) => { o.visible = true; });
    if (live) {
      if (walls.screen) walls.drawScreen(live);
      if (walls.board) walls.drawBoard(live);
    }
    renderer.setPixelRatio(pr);
    resize();
    camera.zoom = zoom0;
    camera.position.copy(pos0);
    camera.updateProjectionMatrix();
    focusV.set(0, building.cabinY.x + 0.7, 0).project(camera);
    post.render(clamp(focusV.y * 0.5 + 0.5, 0, 1), 0, clamp(1.5 / camera.zoom, 0.25, 1));
  }
}

// The camera at its home spot over the active floor, the frustum fitted to every visible building mesh (in view space,
// so the iso silhouette is measured, not a world box) and placed so that silhouette is centred in `box`.
const shotBox = new THREE.Box3();
const shotCorner = new THREE.Vector3();
function frameShot(aspect, box) {
  camera.clearViewOffset();
  camera.zoom = 1;
  camera.position.set(HOME.x, building.activeY + HOME.y, HOME.z).addScaledVector(ISO_DIR, 80);
  camera.updateMatrixWorld(true);
  building.group.updateMatrixWorld(true);
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  const walk = (o) => {
    if (!o.visible) return;
    if (o.isMesh && o.geometry) {
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      shotBox.copy(o.geometry.boundingBox);
      for (let i = 0; i < 8; i++) {
        shotCorner.set(i & 1 ? shotBox.max.x : shotBox.min.x, i & 2 ? shotBox.max.y : shotBox.min.y, i & 4 ? shotBox.max.z : shotBox.min.z)
          .applyMatrix4(o.matrixWorld).applyMatrix4(camera.matrixWorldInverse);
        x0 = Math.min(x0, shotCorner.x); x1 = Math.max(x1, shotCorner.x);
        y0 = Math.min(y0, shotCorner.y); y1 = Math.max(y1, shotCorner.y);
      }
    }
    for (const c of o.children) walk(c);
  };
  walk(building.group);
  if (!Number.isFinite(x0)) { x0 = -VIEW_SPAN.w / 2; x1 = VIEW_SPAN.w / 2; y0 = -VIEW_SPAN.h / 2; y1 = VIEW_SPAN.h / 2; }
  const fh = Math.max((y1 - y0) / box.h, (x1 - x0) / (box.w * aspect)), fw = fh * aspect;
  camera.left = (x0 + x1) / 2 - (box.x + box.w / 2) * fw;
  camera.right = camera.left + fw;
  camera.top = (y0 + y1) / 2 + (box.y + box.h / 2) * fh;
  camera.bottom = camera.top - fh;
  camera.updateProjectionMatrix();
}

// ---------- loop ----------

function updateCursorGround() {
  if (pinCursor || !cursor.active || !building) return;
  raycaster.setFromCamera(pointer, camera);
  groundPlane.constant = -building.activeY;
  if (raycaster.ray.intersectPlane(groundPlane, tmp)) { cursor.x = tmp.x; cursor.z = tmp.z; } else cursor.active = false;
}

const focusV = new THREE.Vector3();

let lastDraw = 0;

function frame(t) {
  if (!renderer) return;
  if (!sceneVisible || document.hidden) { clock.getDelta(); return; }       // no work while 2D is showing or the tab is hidden
  if (WALLPAPER) {                                          // <= 30 fps: skip the in-between vsyncs; dt keeps real time
    const since = t - lastDraw;
    if (since < WALLPAPER_FRAME_MS - 2) return;
    lastDraw += Math.max(1, Math.round(since / WALLPAPER_FRAME_MS)) * WALLPAPER_FRAME_MS;  // stay on the 33 ms grid (100+ Hz displays)
    if (t - lastDraw > WALLPAPER_FRAME_MS / 2) lastDraw = t;                                // fell behind (hidden, hitch): resync, no bursts
  }
  const dt = frozen ? 0 : Math.min(clock.getDelta(), 0.05);
  if (frozen) clock.getDelta();
  nowSec = clock.elapsedTime;
  const nowMs = performance.now();

  daylight.update(dt, nowMs);
  stepCamera(dt);
  if (building) building.update(dt, nowMs);
  if (pointerDirty && !drag?.panning) { pointerDirty = false; setHover(pick()); }
  updateCursorGround();

  const hostAlpha = building?.activeOpen()?.alpha ?? 1;
  for (const a of actors.values()) { a.hostAlpha = hostAlpha; a.tick(dt, nowSec); }
  for (const a of retiring) {
    a.hostAlpha = a.ctx.inst.alpha;
    a.tick(dt, nowSec);
    if (a.dead) retiring.delete(a);
  }
  // Ambient trip machine runs every frame so walk/act/return progress between feed ticks.
  if (building?.activeId && lastState && assets) {
    const floorBots = Object.values(lastState.bots || {}).filter((b) => b.floor === building.activeId);
    const lounge = assignLounge(floorBots);
    applyLoungeOverrides(lounge, floorBots);
    const homeOf = new Map();
    for (const bot of floorBots) {
      const deskIdx = (DESK_ORDER[(bot.desk || 1) - 1] || 1) - 1;
      const desk = assets.spots.desks[deskIdx] || assets.spots.desks.find(Boolean);
      homeOf.set(bot.id, lounge.get(bot.id) || desk);
    }
    stepAmbient(ensureAmbient(building.activeId), floorBots, homeOf);
  }
  stepEffects(dt);

  if (post) {
    focusV.set(0, (building ? building.cabinY.x : 0) + 0.7, 0).project(camera);
    post.render(clamp(focusV.y * 0.5 + 0.5, 0, 1), dt, clamp(1.5 / camera.zoom, 0.25, 1));
  } else renderer.render(scene, camera);
  if (labels && (!WALLPAPER || WALLPAPER_TAGS)) labels.render(scene, camera);
  callbacks?.onFrame?.();
}
