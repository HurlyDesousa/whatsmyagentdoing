// High-quality office: same floor plan and behaviour as the 2D office
// (office.js), rendered in 3D with Kenney's CC0 models (assets/kenney).
// Bubbles and name tags are drawn by the 2D code on a canvas overlay.
// Source file: `npm run build` bundles it with three.js into public/office3d.js.
import * as THREE from 'three';
import { installFloorShadowChunk, createFloorShadowLight, mountFloorShadowLights, tagFloorShadowMaterials, setFloorShadowBand, setObjectFloorLayer, bindFloorShadowPasses, floorLayerBit } from './floorshadow.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { buildBlob, blobLookFor, CREW_LOOKS } from './grokblobs.js';
export { blobLookFor, CREW_LOOKS };
const FURNITURE = ['desk', 'chairDesk', 'computerScreen', 'computerKeyboard', 'computerMouse', 'laptop',
  'pottedPlant', 'plantSmall1', 'plantSmall2', 'plantSmall3', 'kitchenCabinet', 'kitchenCoffeeMachine',
  'kitchenSink', 'kitchenFridgeLarge', 'kitchenMicrowave', 'stoolBar', 'tableRound', 'table',
  'chairModernCushion', 'bookcaseOpen', 'books', 'loungeSofa', 'loungeChairRelax', 'tableCoffee', 'rugRectangle',
  'lampRoundFloor', 'lampSquareTable', 'televisionModern', 'cabinetTelevision', 'trashcan',
  'coatRackStanding', 'radio', 'speaker', 'toaster', 'cardboardBoxClosed'];

const STATUS_COLOR = {
  thinking: 0x8b6be6, tool: 0x3b8ee0, typing: 0x22a874, waiting: 0xe09412, error: 0xde4b40,
};
const CHAR_HEIGHT = 1.02; // world units (≈ tiles)
const WALL_H = 2.4;
const SIT_FORWARD = 0.16;
const FLOOR_T = 0.42; // thickness of the office floor slab (it used to be a paper-thin plane)
const LEVEL_H = (typeof window !== 'undefined' && window.OFFICE_LEVEL_H) || 2.95; // stack spacing (SWA-3012)

// Pastel room in both page themes; the Now/Day/Evening/Night lighting does the mood.
const dark3 = () => false;

// Soft "animation" palette for Kenney materials (shared names across models).
const PASTEL_MATS = {
  wood: 0xf3d2b3, woodDark: 0xdcae8f, metal: 0xe3e5ec, metalMedium: 0xa3a9bd, metalDark: 0x6e7387,
  metalLight: 0xf5f1ea, carpet: 0xeaa9ac, carpetDarker: 0xd4949a, carpetBlue: 0xa6bde8, carpetWhite: 0xf3ede4,
  plant: 0x8fcca3, lamp: 0xffe7a8, glass: 0xd9ecf5,
};
// Any other colour: lift it toward a soft pastel (no pure black / white slabs).
function softColor(c) {
  const col = new THREE.Color(c);
  const hsl = {}; col.getHSL(hsl);
  col.setHSL(hsl.h, Math.min(hsl.s, 0.6) * 0.72, 0.3 + hsl.l * 0.6);
  return col;
}
const soft = (c) => softColor(c).getHex();

// Demo-style activity kinds (legend: Coding, Browsing, In terminal, Thinking,
// Needs you, Error, Done, Idle), derived from our status + activity text.
export const KIND_COLOR = {
  coding: '#4f8ff7', browsing: '#2ec4b6', terminal: '#9bd04f', thinking: '#a48bf0',
  needs: '#ff8a3d', error: '#f0675d', done: '#3fc48f', idle: '#8a899a',
};
export function statusKind(s) {
  const st = s && s.status;
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
const WORKING_ST = new Set(['thinking', 'tool', 'typing']);
function filterMatch(s, f) {
  if (!f) return true;
  if (f === 'needs') return s.status === 'waiting' || s.status === 'error';
  if (f === 'working') return WORKING_ST.has(s.status);
  if (f === 'idle') return !WORKING_ST.has(s.status) && s.status !== 'waiting' && s.status !== 'error';
  return true;
}


// Turn a scene manifest into the floor plan the shared simulation uses:
// stations play the part of desks, pois are where off-duty agents hang out.
function scenePlan(def) {
  const grid = new window.OfficeGrid(def.W, def.D);
  const R = grid.res;
  grid.cost.fill(1); // everything blocked (sea) …
  for (const [x0, y0, x1, y1] of def.walk || []) {
    for (let j = Math.floor(y0 * R); j < Math.ceil(y1 * R); j++) {
      for (let i = Math.floor(x0 * R); i < Math.ceil(x1 * R); i++) {
        if (i >= 0 && j >= 0 && i < grid.cw && j < grid.ch) grid.cost[j * grid.cw + i] = 0; // … except walkable ground
      }
    }
  }
  for (const [x, y, w, d] of def.solid || []) grid.block(x, y, w, d, 0.1);
  const rad = (deg) => (deg == null ? null : (deg * Math.PI) / 180);
  const desks = def.stations.map((st) => ({
    x: st.x, y: st.y, side: 'n', pose: st.pose || 'stand', yaw: rad(st.yaw), anim: st.anim, seat: { x: st.x, y: st.y },
  }));
  const pois = def.pois.map((q) => ({
    ...q, yaw: rad(q.yaw), face: 'front', sit: q.sit ? (typeof q.sit === 'number' ? q.sit : 0.3) : 0, taken: null,
  }));
  return {
    W: def.W, D: def.D, viewH: def.viewH, grid, items: [], props: [], pois, desks,
    windows: [], posters: [], pp: null, door: def.spawn, fixed: true, noNap: true, terrain: !!def.terrain, scene: def,
  };
}

// Lighting presets for the Now / Day / Evening / Night control. `lamp`,
// `door`, `screen` and `ceil` scale the interior lights.
const LIGHTS = {
  day: { sky: 0xa9d4f2, sun: 1.75, sunCol: 0xfff3e0, amb: 1.2, hemiSky: 0xfff6ea, hemiGround: 0xc9b8a0, exposure: 1.12, lamp: 0.9, door: 1.8, halo: 0.55, screen: 1, ceil: 0, glow: 0.35, night: false },
  dawn: { sky: 0xf3c9a8, sun: 1.15, sunCol: 0xffd9b8, amb: 0.9, hemiSky: 0xffe6d2, hemiGround: 0xb39a8c, exposure: 1.1, lamp: 1.4, door: 2.4, halo: 0.7, screen: 1.15, ceil: 0.35, glow: 0.6, night: false },
  evening: { sky: 0xf2a46e, sun: 1.25, sunCol: 0xffa75e, amb: 0.72, hemiSky: 0xffc596, hemiGround: 0x8c6a62, exposure: 1.08, lamp: 2.2, door: 3, halo: 0.85, screen: 1.3, ceil: 0.75, glow: 0.9, night: false, evening: true },
  night: { sky: 0x1d2350, sun: 0.32, sunCol: 0x8d96ff, amb: 0.5, hemiSky: 0x9a96ff, hemiGround: 0x2c2646, exposure: 1.05, lamp: 3.6, door: 5.2, halo: 1, screen: 2.1, ceil: 1.1, glow: 1.5, night: true },
};
export const LIGHT_MODES = ['now', 'day', 'evening', 'night'];
// Mode comes from the page (window.OFFICE_LIGHT, saved in localStorage).
function skyNow() {
  const mode = (typeof window !== 'undefined' && window.OFFICE_LIGHT) || 'now';
  if (mode !== 'now' && LIGHTS[mode]) return LIGHTS[mode];
  const h = new Date().getHours() + new Date().getMinutes() / 60;
  if (h >= 7 && h < 17) return LIGHTS.day;
  if (h >= 5 && h < 7) return LIGHTS.dawn;
  if (h >= 17 && h < 19) return LIGHTS.evening;
  return LIGHTS.night;
}

// The scene pack for the instance being constructed. The base constructor
// builds the floor plan before our fields exist, so it's passed this way.
let PENDING_SCENE = null;

installFloorShadowChunk();

export class Office3D extends window.Office {
  constructor(root, opts) {
    PENDING_SCENE = (opts && opts.scene) || null;
    super(root, opts);
    this.sceneDef = PENDING_SCENE;
    this.compact = !!opts?.compact;
    this.canvas.classList.add('office-overlay');
    try {
      this.gl = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      // No WebGL here; the page falls back to the 2D office.
      this.loadError = 'WebGL unavailable';
      this.markReady(false);
      return;
    }
    this.gl.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.gl.shadowMap.enabled = true;
    this.gl.shadowMap.type = THREE.PCFSoftShadowMap;
    this.gl.outputColorSpace = THREE.SRGBColorSpace;
    this.gl.toneMapping = THREE.ACESFilmicToneMapping;
    this.gl.toneMappingExposure = 1.15;
    this.gl.domElement.className = 'office-gl';
    root.insertBefore(this.gl.domElement, this.canvas);

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 200);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.minPolarAngle = 0.35;
    this.controls.maxPolarAngle = 1.25;
    this.controls.minZoom = 0.6;
    this.controls.maxZoom = 4;
    this.controls.screenSpacePanning = true;
    this.controls.zoomToCursor = true;
    this.canvas.addEventListener('pointerdown', (e) => { this._down = { x: e.clientX, y: e.clientY }; });

    this.hemi = new THREE.HemisphereLight(0xfff4e2, 0x9a8468, 1.05);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff1dc, 1.6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.02;
    this.scene.add(this.sun, this.sun.target);
    this.floorShadowLights = [];
    this.floorShadowCount = 0;

    this.actors = new Map();     // person key -> { obj, blob, look, prop, cup, book }
    this.screens = new Map();    // desk -> emissive screen mesh
    this.blinkers = [];
    this.loaded = false;
    this.clock = new THREE.Clock();
    this.load().catch((e) => {
      this.loadError = String(e && e.message || e);
      console.error('3D office failed to load:', e);
      this.markReady(false);
    });
    this.resize();
  }

  destroy() {
    super.destroy();
    if (!this.gl) return;
    this.controls.dispose();
    this.gl.dispose();
    this.gl.domElement.remove();
  }

  buildPlan(n) {
    const def = PENDING_SCENE || this.sceneDef;
    return def ? scenePlan(def) : super.buildPlan(n);
  }

  // ------------------------------------------------------------ assets

  async load() {
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const get = (url) => new Promise((ok, fail) => loader.load(url, ok, undefined, fail));
    // Workers are procedural Grok blobs (grokblobs.js); only furniture is loaded.
    const furn = await Promise.all(FURNITURE.map((f) => get(`/assets/kenney/furniture/${f}.glb`).then((g) => [f, g.scene])));
    this.models = Object.fromEntries(furn);
    if (this.sceneDef) {
      const extra = [...new Set(this.sceneDef.props.filter((p) => p.f && !this.models[p.f]).map((p) => p.f))];
      const base = await Promise.all(extra.map((f) => get(`/assets/kenney/furniture/${f}.glb`).then((g) => [f, g.scene])));
      Object.assign(this.models, Object.fromEntries(base));
      for (const [, m] of base) m.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      const names = [...new Set(this.sceneDef.props.filter((p) => p.m).map((p) => p.m))];
      const got = await Promise.all(names.map((m) => get(`${this.sceneDef.base}models/${m}.glb`).then((g) => [`scene:${m}`, g.scene])));
      Object.assign(this.models, Object.fromEntries(got));
      for (const [, m] of got) m.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    }
    const softMats = new Map();
    const pastel = (mt) => {
      if (!mt || !mt.color) return mt;
      if (softMats.has(mt)) return softMats.get(mt);
      const c = mt.clone();
      if (PASTEL_MATS[mt.name] != null) c.color.setHex(PASTEL_MATS[mt.name]);
      else c.color.copy(softColor(mt.color));
      c.roughness = Math.max(0.78, c.roughness ?? 1);
      c.metalness = Math.min(0.08, c.metalness ?? 0);
      softMats.set(mt, c);
      return c;
    };
    for (const [name, m] of Object.entries(this.models)) {
      const scenePack = name.startsWith('scene:');
      m.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true; o.receiveShadow = true;
        if (scenePack || this.sceneDef) return; // scene packs keep their own art
        o.material = Array.isArray(o.material) ? o.material.map(pastel) : pastel(o.material);
      });
    }
    this.loaded = true;
  }

  // Place a furniture model so its footprint fills (x, y, w, d) on the floor
  // plan, standing on height y0. rot turns it (0 = model's own front faces +z).
  // With `stretch` the model is scaled per axis to exactly w × h × d.
  place(name, x, y, w, d, { rot = 0, y0 = 0, h = null, stretch = false, group = this.floorRoot || this.room } = {}) {
    const src = this.models[name];
    if (!src) return null;
    const m = src.clone(true);
    m.rotation.y = rot;
    m.updateMatrixWorld(true);
    let box = new THREE.Box3().setFromObject(m);
    const size = box.getSize(new THREE.Vector3());
    if (stretch) {
      const turned = Math.abs(Math.sin(rot)) > 0.5;
      m.scale.set((turned ? d : w) / (turned ? size.z : size.x), h / size.y, (turned ? w : d) / (turned ? size.x : size.z));
    } else {
      m.scale.setScalar(h ? h / size.y : Math.min(w / size.x, d / size.z));
    }
    m.updateMatrixWorld(true);
    box = new THREE.Box3().setFromObject(m);
    const c = box.getCenter(new THREE.Vector3());
    m.position.set(x + w / 2 - c.x, y0 - box.min.y, y + d / 2 - c.z);
    group.add(m);
    return m;
  }

  boxMesh(x, y, z, w, d, h, color, opts = {}) {
    const mat = opts.mat || new THREE.MeshStandardMaterial({ color, roughness: opts.rough ?? 0.8, metalness: opts.metal ?? 0, ...(opts.emissive ? { emissive: opts.emissive, emissiveIntensity: opts.ei ?? 1 } : {}) });
    // Soft rounded edges (animation look); tiny parts stay plain boxes.
    const r = Math.min(0.045, Math.min(w, h, d) * 0.35);
    const geo = opts.round !== false && r > 0.008 ? new RoundedBoxGeometry(w, h, d, 3, r) : new THREE.BoxGeometry(w, h, d);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x + w / 2, z + h / 2, y + d / 2);
    m.castShadow = opts.shadow !== false;
    m.receiveShadow = true;
    (opts.group || this.floorRoot || this.room).add(m);
    return m;
  }

  addToFloor(obj) {
    (this.floorRoot || this.room).add(obj);
    return obj;
  }

  glassMat() {
    return this._glass || (this._glass = new THREE.MeshPhysicalMaterial({
      color: 0xcfe6f5, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0, depthWrite: false,
    }));
  }

  textPlane(text, bg, w, h) {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = Math.round(256 * h / w);
    const c = cv.getContext('2d');
    c.fillStyle = bg; c.fillRect(0, 0, cv.width, cv.height);
    c.fillStyle = '#fff';
    c.font = `800 ${Math.round(cv.height * 0.22)}px ui-sans-serif, system-ui, sans-serif`;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(text, cv.width / 2, cv.height / 2);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
  }

  // ------------------------------------------------------------ build room

  build() {
    if (this.plan.scene) return this.buildScene();
    const plan = this.plan;
    if (this.room) { this.scene.remove(this.room); }
    this.room = new THREE.Group();
    this.scene.add(this.room);
    this.screens.clear();
    this.blinkers = [];
    this.glows = [];       // localized lights + additive halos, scaled by sky.glow
    this.screenGlows = []; // per-desk monitor halos, tinted by the worker's status
    this.initInteractive();
    // SWA-3012: stack basement / ground / 2nd as sibling groups.
    this.floors3d = {};
    for (const fl of (plan.floors || [0])) {
      const g = new THREE.Group();
      g.name = `floor-${fl}`;
      g.userData.floor = fl;
      g.position.y = fl * LEVEL_H;
      this.room.add(g);
      this.floors3d[fl] = g;
    }
    this.floorRoot = this.floors3d[0] || this.room;
    const { W, D, OW, MR, PY, RW } = plan;
    const dark = false; // pastel room in both page themes

    // A solid two-tone slab under the floor so the room reads as a chunky
    // diorama block instead of a sheet of paper.
    this.boxMesh(-0.12, -0.12, -0.16, W + 0.12, D + 0.12, 0.158, 0xf1dcc0, { rough: 0.9, shadow: false });
    this.boxMesh(-0.09, -0.09, -FLOOR_T, W + 0.06, D + 0.06, FLOOR_T - 0.15, 0xcbc1dd, { rough: 0.95, shadow: false });
    this.boxMesh(-0.1, -0.1, -0.175, W + 0.08, D + 0.08, 0.025, 0xf6b9c4, { rough: 0.9, shadow: false, round: false });

    // floors
    const floor = (x, y, w, d, color, tex) => {
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9, map: tex || null });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x + w / 2, 0, y + d / 2);
      m.receiveShadow = true;
      this.addToFloor(m);
    };
    const planks = this.patternTexture((c, s) => {
      // light tan floor tiles (Grok Bot Office look)
      // soft cream / tan tiles
      c.fillStyle = dark ? '#5a4a3a' : '#f4e6cc'; c.fillRect(0, 0, s, s);
      c.fillStyle = dark ? '#544536' : '#eedcbd'; c.fillRect(0, 0, s / 2, s / 2); c.fillRect(s / 2, s / 2, s / 2, s / 2);
      c.strokeStyle = dark ? 'rgba(0,0,0,.28)' : 'rgba(190,150,105,.16)'; c.lineWidth = 2;
      for (let i = 0; i <= 2; i++) { c.beginPath(); c.moveTo(0, i * s / 2); c.lineTo(s, i * s / 2); c.stroke(); c.beginPath(); c.moveTo(i * s / 2, 0); c.lineTo(i * s / 2, s); c.stroke(); }
    });
    const tiles = this.patternTexture((c, s) => {
      c.fillStyle = dark ? '#3d4044' : '#f3eef6'; c.fillRect(0, 0, s, s);
      c.fillStyle = dark ? '#35383c' : '#e8e1ee'; c.fillRect(0, 0, s / 2, s / 2); c.fillRect(s / 2, s / 2, s / 2, s / 2);
    });
    planks.repeat.set(OW / 2, D / 2);
    floor(0, 0, OW, D, 0xffffff, planks);
    floor(OW, 0, W - OW, MR, dark ? 0x33404d : 0xdcd8e8);
    tiles.repeat.set((W - OW), (PY - MR));
    floor(OW, MR, W - OW, PY - MR, 0xffffff, tiles);
    const planks2 = planks.clone(); planks2.needsUpdate = true; planks2.repeat.set((W - OW) / 2, (D - PY) / 2);
    floor(OW, PY, W - OW, D - PY, 0xffffff, planks2);
    const pp = plan.pp;
    const mat = new THREE.Mesh(new THREE.PlaneGeometry(pp.x1 - pp.x0 + 1.2, 2.7), new THREE.MeshStandardMaterial({ color: dark ? 0x2f4a3a : 0xcde6d4, roughness: 1 }));
    mat.rotation.x = -Math.PI / 2; mat.position.set((pp.x0 + pp.x1) / 2, 0.005, pp.y - 0.05); mat.receiveShadow = true;
    this.addToFloor(mat);
    this.buildCarpets();

    // walls: back (z=0) with windows, left (x=0) with a door
    const wallCol = dark ? 0x3e4655 : 0xc3bfd6; // muted lavender-gray
    const wallMat = new THREE.MeshStandardMaterial({ color: wallCol, roughness: 1 });
    this.ceilLights = [];
    const T = 0.12;
    let cx = -T;
    const sky = skyNow();
    this.windowMat = new THREE.MeshStandardMaterial({ color: sky.sky, emissive: sky.sky, emissiveIntensity: 0.6 });
    for (const wx of plan.windows) {
      this.boxMesh(cx, -T, 0, wx - cx, T, WALL_H, 0, { mat: wallMat });
      this.boxMesh(wx, -T, 0, 1.5, T, 0.85, 0, { mat: wallMat });
      this.boxMesh(wx, -T, 2.0, 1.5, T, WALL_H - 2.0, 0, { mat: wallMat });
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.15), this.windowMat);
      glass.position.set(wx + 0.75, 1.425, -T / 2);
      this.addToFloor(glass);
      this.boxMesh(wx + 0.73, -0.02, 0.85, 0.04, 0.04, 1.15, dark ? 0x2b2926 : 0xf2e8da);
      this.boxMesh(wx, -0.02, 0.83, 1.5, 0.1, 0.04, dark ? 0x2b2926 : 0xf2e8da);
      this.addBlind(wx);
      cx = wx + 1.5;
    }
    this.boxMesh(cx, -T, 0, W - cx, T, WALL_H, 0, { mat: wallMat });
    const dy = plan.door.y;
    this.boxMesh(-T, -T, 0, T, dy - 0.6 + T, WALL_H, 0, { mat: wallMat });
    this.boxMesh(-T, dy + 0.6, 0, T, D - dy - 0.6, WALL_H, 0, { mat: wallMat });
    this.boxMesh(-T, dy - 0.6, 1.8, T, 1.2, WALL_H - 1.8, 0, { mat: wallMat });
    {
      // entrance door on a hinge: click to open / close, opens by itself for arrivals
      const pv = new THREE.Group();
      pv.position.set(-T / 2, 0, dy - 0.55);
      this.boxMesh(-0.03, 0, 0, 0.06, 1.1, 1.78, 0xdcae8c, { group: pv });
      this.boxMesh(-0.045, 0.12, 0.25, 0.09, 0.86, 0.5, 0xe9c2a4, { group: pv }); // panel inset
      for (const sx of [-0.05, 0.05]) {
        const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), new THREE.MeshStandardMaterial({ color: 0xf5d27a, roughness: 0.4, metalness: 0.2 }));
        knob.position.set(sx, 0.95, 0.95); knob.castShadow = true; pv.add(knob);
      }
      this.addToFloor(pv);
      this.addDoor(pv, 0.35, dy, 1.45);
    }
    this.boxMesh(0, dy - 0.6, 0, 0.9, 1.2, 0.01, dark ? 0x5a3b2e : 0xe7a9a2, { shadow: false, round: false });
    // magenta doorway glow (demo look)
    const doorGlow = new THREE.PointLight(0xff5fc0, 2.2, 5.5, 1.6); // softer magenta; brighter at night
    doorGlow.position.set(0.6, 1.9, dy);
    this.addToFloor(doorGlow);
    this.doorGlow = doorGlow;
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.6), new THREE.MeshBasicMaterial({ map: this.glowTexture('255,95,192'), transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.rotation.y = Math.PI / 2; halo.position.set(0.02, 1.2, dy);
    this.addToFloor(halo);
    this.doorHalo = halo;
    // neon strip over the door frame
    this.glows.push({ m: this.boxMesh(-0.02, dy - 0.62, 1.82, 0.03, 1.24, 0.04, 0xff7ad0, { emissive: 0xff5fc0, ei: 1, shadow: false, round: false }), ei: 1.4 });
    // warm ceiling lights, only on in the evening / at night
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xffd6a0, 0, 7, 1.4);
      l.position.set(1.5 + (i + 0.5) * (W - 1.5) / 3, WALL_H + 0.2, D * 0.5);
      this.addToFloor(l);
      this.ceilLights.push(l);
    }
    // posters + whiteboard
    for (const ps of plan.posters) {
      const m = this.textPlane(ps.text, '#' + soft(ps.color).toString(16).padStart(6, '0'), 0.9, 1.0);
      m.rotation.y = Math.PI / 2; m.position.set(0.005, 1.45, ps.y + 0.45);
      this.addToFloor(m);
    }
    const wb = this.textPlane('', '#fdfdfb', 2.6, 1.15);
    wb.position.set(OW + 3.7, 1.4, 0.005);
    this.addToFloor(wb);
    this.whiteboardScribbles(OW + 3.7);
    const sign = this.textPlane('MEETING', dark ? '#3a4a5a' : '#b7a6d2', 1.3, 0.3);
    sign.position.set(OW + 1.1, 2.15, 0.005);
    this.addToFloor(sign);

    // desks + props on the ground floor only (other floors built below)
    for (const dk of plan.desks) if ((dk.floor ?? 0) === 0) this.buildDesk(dk);

    for (const p of plan.props) if ((p.floor ?? 0) === 0) this.buildProp(p);
    {
      // glass swing door into the meeting room (the gap in the glass wall)
      const pv = new THREE.Group();
      pv.position.set(OW, 0, 3.62);
      this.boxMesh(-0.025, 0, 0.02, 0.05, 0.96, 2.06, 0, { mat: this.glassMat(), shadow: false, group: pv });
      this.boxMesh(-0.035, 0, 0, 0.07, 0.96, 0.1, 0xe6dccd, { group: pv });
      this.boxMesh(-0.035, 0, 2.02, 0.07, 0.96, 0.06, 0xe6dccd, { group: pv });
      this.boxMesh(-0.06, 0.82, 0.8, 0.12, 0.04, 0.45, 0xb7a6d2, { group: pv });
      this.floorRoot.add(pv);
      this.addDoor(pv, OW, 4.1, 1.5);
    }
    this.buildButterfly(OW + RW / 2, PY + (D - PY) / 2, RW / 2 - 1.1, (D - PY) / 2 - 0.9);
    // Basement + 2nd floor shells (simpler props; ground keeps full interactivity).
    if (this.floors3d[-1]) { this.floorRoot = this.floors3d[-1]; this.buildExtraFloor(-1); }
    if (this.floors3d[1]) { this.floorRoot = this.floors3d[1]; this.buildExtraFloor(1); }
    this.floorRoot = this.floors3d[0] || this.room;
    this.buildStairsShaft();
    this.applyFloorView(true);
    this.clicks.updateMatrixWorld(true);
    this.installFloorShadows();
    this.fitCamera3D(true);
  }

  // Stacked floors share one angled sun for colour. Its shadow map used to
  // cover the whole building, and the slabs do not cast, so anything on
  // floor N darkened every floor under that ray. Each storey now has its
  // own angled shadow light (see floorshadow.js); casters and receivers
  // stay on that storey.
  installFloorShadows() {
    for (const light of this.floorShadowLights || []) this.scene.remove(light, light.target);
    this.floorShadowLights = [];
    const floors = (this.plan && this.plan.floors) || [0];
    const multi = !this.plan.scene && floors.length > 1;
    this.floorShadowCount = multi ? floors.length : 0;
    this.sun.castShadow = !multi;
    if (multi) {
      const { W, D } = this.plan;
      const cx = W / 2, cz = D / 2;
      floors.forEach((fl, i) => {
        const floorY = fl * LEVEL_H;
        const light = createFloorShadowLight({ floorY, cx, cz, width: W, depth: D });
        light.name = `floor-shadow-${fl}`;
        light.userData.floor = fl;
        light.userData.shadowLayer = 1 << floorLayerBit(fl);
        setFloorShadowBand(i, floorY, WALL_H + 0.5, 0.45);
        this.floorShadowLights.push(light);
        if (this.floors3d && this.floors3d[fl]) setObjectFloorLayer(this.floors3d[fl], fl);
      });
      mountFloorShadowLights(this.scene, this.floorShadowLights, this.sun);
      bindFloorShadowPasses(this.gl);
      if (this.catObj) setObjectFloorLayer(this.catObj.root, (this.cat && this.cat.floor) || 0);
    }
    tagFloorShadowMaterials(this.scene, this.floorShadowCount);
  }

  // Simpler stacked floors: thick slab, short walls, desks/props tagged for that floor.
  buildExtraFloor(fl) {
    const plan = this.plan;
    const { W, D } = plan;
    const slab = fl < 0 ? 0xb8c4e0 : 0xf0c4d4;
    const rim = fl < 0 ? 0x8aa0d0 : 0xe8a0b8;
    this.boxMesh(-0.12, -0.12, -0.16, W + 0.12, D + 0.12, 0.158, fl < 0 ? 0xd8e0f4 : 0xf8dde8, { rough: 0.9, shadow: false });
    this.boxMesh(-0.09, -0.09, -FLOOR_T, W + 0.06, D + 0.06, FLOOR_T - 0.15, slab, { rough: 0.95, shadow: false });
    this.boxMesh(-0.1, -0.1, -0.175, W + 0.08, D + 0.08, 0.025, rim, { rough: 0.9, shadow: false, round: false });
    const tiles = this.patternTexture((c, s) => {
      const a = fl < 0 ? '#e7eefb' : '#fde7ee';
      const b = fl < 0 ? '#d5e2f6' : '#f8d4e3';
      c.fillStyle = a; c.fillRect(0, 0, s, s);
      c.fillStyle = b; c.fillRect(0, 0, s / 2, s / 2); c.fillRect(s / 2, s / 2, s / 2, s / 2);
      c.strokeStyle = fl < 0 ? 'rgba(120,145,190,.18)' : 'rgba(210,140,165,.16)';
      c.lineWidth = 2;
      for (let i = 0; i <= 2; i++) {
        c.beginPath(); c.moveTo(0, i * s / 2); c.lineTo(s, i * s / 2); c.stroke();
        c.beginPath(); c.moveTo(i * s / 2, 0); c.lineTo(i * s / 2, s); c.stroke();
      }
    });
    tiles.repeat.set(W / 2, D / 2);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xffffff, map: tiles, roughness: 0.92 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(W, D), floorMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(W / 2, 0.002, D / 2);
    m.receiveShadow = true;
    this.floorRoot.add(m);
    const wallCol = fl < 0 ? 0xb0b8d4 : 0xd8b8c8;
    const wallMat = new THREE.MeshStandardMaterial({ color: wallCol, roughness: 1 });
    const T = 0.12, h = WALL_H * 0.92;
    this.boxMesh(-T, -T, 0, W + T, T, h, 0, { mat: wallMat });
    this.boxMesh(-T, -T, 0, T, D + T, h, 0, { mat: wallMat });
    // Open front so stacked floors stay readable from the default camera.
    this.boxMesh(-T, D, 0, W + T, T, 0.35, rim, { rough: 0.9, shadow: false });
    const label = fl < 0 ? 'OPS DEN' : 'THE LOFT';
    const sign = this.textPlane(label, fl < 0 ? '#7a90c8' : '#e089a8', 2.4, 0.42);
    sign.position.set(W * 0.55, 2.12, 0.02);
    this.floorRoot.add(sign);
    const posters = fl < 0
      ? [['ON CALL', '#6d84c8', 1.15], ['BLINK = OK', '#5eae8a', 3.55]]
      : [['ASK GROK', '#e07a9a', 1.15], ['SHIP IT', '#e0a15a', 3.55]];
    for (const [text, col, z] of posters) {
      const board = this.textPlane(text, col, 1.2, 0.78);
      board.rotation.y = Math.PI / 2;
      board.position.set(0.02, 1.48, z);
      this.floorRoot.add(board);
    }
    for (const dk of plan.desks) if ((dk.floor ?? 0) === fl) this.buildDesk(dk);
    for (const p of plan.props) if ((p.floor ?? 0) === fl) this.buildProp(p);
  }

  buildStairsShaft() {
    const at = this.plan.stairsAt;
    if (!at || !this.floors3d) return;
    const x = at.x - 0.55, z = at.y - 0.7;
    const post = 0xe8d5c0, step = 0xf2c9a8, plate = 0xf6e3cf;
    // Each storey owns its posts, landing, and the flight that arrives at it,
    // so culling a floor also removes the shaft above the selection.
    for (const fl of [-1, 0, 1]) {
      const g = this.floors3d[fl];
      if (!g) continue;
      const postH = WALL_H * 0.92;
      for (const [cx, cz] of [[x, z], [x + 1.2, z], [x, z + 1.4], [x + 1.2, z + 1.4]]) {
        this.boxMesh(cx, cz, 0, 0.12, 0.12, postH, post, { group: g, rough: 0.85 });
      }
      this.boxMesh(x + 0.06, z + 0.06, 0.02, 1.18, 1.28, 0.06, plate, { group: g, rough: 0.9 });
      if (fl > -1) {
        const stepN = 8;
        for (let i = 0; i < stepN; i++) {
          const t = i / stepN;
          const y0 = -LEVEL_H + t * LEVEL_H;
          const inset = (1 - t) * 1.05;
          this.boxMesh(x + 0.15 + inset * 0.15, z + 0.15, y0, 0.95 - inset * 0.1, 1.2, 0.12, step, { group: g, rough: 0.9 });
        }
      }
      const pad = this.clickBox(x, z, fl * LEVEL_H, 1.35, 1.6, 0.35, () => this.setViewFloor(fl));
      pad.userData.floor = fl;
      this.floorPads.push(pad);
    }
  }

  // Hide every floor above the picker selection. The selected floor and
  // everything below stay fully drawn — no ghost tint.
  applyFloorView(resetCam) {
    const vf = this.viewFloor || 0;
    for (const [key, g] of Object.entries(this.floors3d || {})) {
      g.visible = +key <= vf;
    }
    for (const pad of this.floorPads || []) pad.visible = (pad.userData.floor ?? 0) <= vf;
    if (resetCam || this._floorCam !== vf) {
      this._floorCam = vf;
      this.fitted = false;
      this.fitCamera3D(true);
    }
  }

  setViewFloor(fl) {
    super.setViewFloor(fl);
    if (this.floors3d) this.applyFloorView(true);
  }

  // Swap Kenney material colours by material name (clones, so other copies keep theirs).
  recolor(m, colors, glow = {}) {
    if (!m) return m;
    m.traverse((o) => {
      if (!o.isMesh) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      const out = mats.map((mt) => {
        if (colors[mt.name] == null) return mt;
        const c = mt.clone(); c.color.setHex(colors[mt.name]);
        if (glow[mt.name] != null) { c.emissive = new THREE.Color(glow[mt.name]); c.emissiveIntensity = 0.7; }
        return c;
      });
      o.material = Array.isArray(o.material) ? out : out[0];
    });
    return m;
  }

  potted(name, x, y, w, d, opts) {
    const m = this.recolor(this.place(name, x, y, w, d, opts), { wood: 0xf4a28f, woodDark: 0xe38f7d, plant: 0x86c99d }); // soft coral pots
    if (m && this.plants) this.addPlant(m);
    return m;
  }

  glowTexture(rgb) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    const c = cv.getContext('2d');
    const g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, `rgba(${rgb},0.55)`); g.addColorStop(1, `rgba(${rgb},0)`);
    c.fillStyle = g; c.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  // Additive soft halo (cheap "bloom" for lamps, screens, racks).
  haloSprite(rgb, x, y, z, size) {
    this._haloTex = this._haloTex || {};
    const tex = this._haloTex[rgb] || (this._haloTex[rgb] = this.glowTexture(rgb));
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    sp.position.set(x, y, z);
    sp.scale.set(size, size, 1);
    sp.renderOrder = 2;
    sp.raycast = () => {}; // never a floor/seat hit
    (this.floorRoot || this.room).add(sp);
    return sp;
  }

  // Night sky seen through the windows: deep blue gradient, stars, a moon.
  starTexture() {
    if (this._stars) return this._stars;
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = 384;
    const c = cv.getContext('2d');
    const g = c.createLinearGradient(0, 0, 0, 384);
    g.addColorStop(0, '#0b1030'); g.addColorStop(0.7, '#1c2358'); g.addColorStop(1, '#3a2f6e');
    c.fillStyle = g; c.fillRect(0, 0, 512, 384);
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 160; i++) {
      const r = rnd() < 0.12 ? 1.8 : rnd() < 0.5 ? 1.1 : 0.7;
      c.fillStyle = `rgba(255,255,${220 + Math.floor(rnd() * 35)},${0.55 + rnd() * 0.45})`;
      c.beginPath(); c.arc(rnd() * 512, rnd() * 300, r, 0, Math.PI * 2); c.fill();
    }
    c.fillStyle = 'rgba(255,246,214,.95)';
    c.beginPath(); c.arc(410, 70, 16, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#121845';
    c.beginPath(); c.arc(418, 64, 14, 0, Math.PI * 2); c.fill();
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    return (this._stars = t);
  }

  patternTexture(paint) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    paint(cv.getContext('2d'), 128);
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }

  whiteboardScribbles(cx) {
    const g = new THREE.Group();
    const line = (pts, color) => {
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y]) => new THREE.Vector3(x, y, 0)));
      g.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color })));
    };
    line([[-1.1, 0.35], [-0.6, 0.35]], 0x3b8ee0);
    line([[-1.1, 0.2], [-0.3, 0.2]], 0x3b8ee0);
    line([[0.0, 0.3], [0.4, 0.3], [0.4, 0.05], [0.0, 0.05], [0.0, 0.3]], 0xc96442);
    line([[0.4, 0.17], [0.65, 0.0]], 0xc96442);
    line([[0.65, 0.1], [1.05, 0.1], [1.05, -0.15], [0.65, -0.15], [0.65, 0.1]], 0xc96442);
    line([[-1.1, -0.35], [-0.9, -0.1], [-0.7, -0.3], [-0.5, -0.05], [-0.3, -0.25], [-0.1, 0.0]], 0x5f9a4c);
    g.position.set(cx, 1.4, 0.01);
    this.addToFloor(g);
  }

  buildDesk(dk) {
    const { x, y } = dk;
    const alt = (Math.round(x * 10) + Math.round(y * 10)) % 2;
    this.recolor(this.place('desk', x, y, 1.4, 0.8, { h: 0.75, rot: dk.side === 's' ? 0 : Math.PI }), { wood: alt ? 0xf6d8bd : 0xf4e5c9, metal: 0xe9e4ee });
    // low divider on the far edge, so facing pairs read as pods
    this.boxMesh(x + 0.02, dk.side === 's' ? y - 0.02 : y + 0.78, 0.75, 1.36, 0.04, 0.28, 0xd9cfe8, { rough: 1 });
    const top = 0.75;
    const back = dk.side === 's' ? y + 0.12 : y + 0.48;
    const rot = dk.side === 's' ? 0 : Math.PI;
    const mon = this.place('computerScreen', x + 0.4, back, 0.6, 0.2, { y0: top, h: 0.5, rot });
    const kb = dk.side === 's' ? y + 0.45 : y + 0.2;
    this.place('computerKeyboard', x + 0.45, kb, 0.5, 0.15, { y0: top, rot });
    this.place('computerMouse', x + 1.0, kb, 0.08, 0.12, { y0: top, rot });
    const h = (Math.round(x * 10) * 31 + Math.round(y * 10) * 17) >>> 0;
    if (h % 3 === 0) this.potted('plantSmall' + (1 + (h % 3)), x + 0.05, y + 0.3, 0.25, 0.25, { y0: top, h: 0.3 });
    if (h % 4 === 1) {
      const lm = this.recolor(this.place('lampSquareTable', x + 1.1, back, 0.25, 0.25, { y0: top, h: 0.35 }), { lamp: 0xffe3a0 }, { lamp: 0xffcf70 });
      const l = new THREE.PointLight(0xffc27a, 0, 2.6, 1.8);
      l.position.set(x + 1.22, top + 0.42, back + 0.12);
      this.addToFloor(l);
      // click to switch; off by default in Day light (see animateInteractive)
      const L = this.addLamp(lm, l, { base: 1.6, sprite: this.haloSprite('255,200,120', x + 1.22, top + 0.4, back + 0.12, 1.1), sbase: 0.85, at: [x + 1.22, top + 0.5, back + 0.12] });
      this.clickBox(x + 1.0, back - 0.1, top, 0.45, 0.45, 0.5, () => this.toggleLamp(L));
    }
    // chair, facing the desk
    const seat = dk.seat;
    const chair = this.recolor(this.place('chairDesk', seat.x - 0.3, seat.y - 0.3, 0.6, 0.6, { h: 0.9, rot: dk.side === 's' ? Math.PI : 0 }), { carpet: alt ? 0xa8dcc8 : 0xeab0b4, metalMedium: 0xb3b8c9 });
    if (chair) this.addChair(chair);
    // The monitor's own screen quad lights up in the worker's status colour.
    if (mon) {
      let quad = null;
      mon.traverse((o) => { if (o.isMesh && o.geometry.attributes.position.count === 4) quad = o; });
      if (quad) {
        quad.material = new THREE.MeshStandardMaterial({ color: 0x3a3f52, emissive: 0x000000, roughness: 0.4 });
        this.screens.set(dk, quad);
        quad.updateMatrixWorld(true);
        const wp = new THREE.Vector3(); quad.getWorldPosition(wp);
        const fz = dk.side === 's' ? 0.12 : -0.12;
        this.screenGlows.push({ dk, sprite: this.haloSprite('255,255,255', wp.x, wp.y, wp.z + fz, 1.0) });
      }
    }
  }

  buildProp(p) {
    const dark = false;
    switch (p.t) {
      case 'panel':
        this.boxMesh(p.x, p.y, 0, p.w, p.d, p.h, soft(p.color), { rough: 1 });
        break;
      case 'rack': {
        this.boxMesh(p.x, p.y, 0, 0.7, 0.6, 1.9, 0x646a80, { metal: 0.05, rough: 0.8 });
        for (let r = 0; r < 7; r++) {
          for (let k = 0; k < 4; k++) {
            const led = this.boxMesh(p.x + 0.12 + k * 0.13, p.y + 0.6, 1.7 - r * 0.22, 0.05, 0.01, 0.03, 0x113322,
              { emissive: k % 3 === 0 ? 0xffb347 : 0x5cf08a, ei: 1, shadow: false });
            this.blinkers.push({ m: led, r, k });
          }
        }
        {
          const l = new THREE.PointLight(0x4cf2c0, 0, 3.2, 1.6);
          l.position.set(p.x + 0.35, 1.2, p.y + 1.0);
          this.addToFloor(l);
          this.glows.push({ light: l, base: 1.8, sprite: this.haloSprite('76,242,192', p.x + 0.35, 1.1, p.y + 0.66, 1.6), sbase: 0.6 });
        }
        break;
      }
      case 'printer':
        this.boxMesh(p.x, p.y, 0, 0.75, 0.55, 0.55, 0xe6c3a2);
        this.boxMesh(p.x + 0.05, p.y + 0.05, 0.55, 0.65, 0.45, 0.28, 0xeeeaf2);
        this.boxMesh(p.x + 0.15, p.y + 0.35, 0.83, 0.45, 0.15, 0.02, 0xfaf6ee);
        this.place('cardboardBoxClosed', p.x - 0.7, p.y + 0.05, 0.5, 0.5, { h: 0.35 });
        break;
      case 'plant':
        this.potted('pottedPlant', p.x - 0.3, p.y - 0.3, 0.6, 0.6, { h: 1.0 });
        break;
      case 'pingpong': {
        const { x, y } = p;
        for (const [lx, ly] of [[0.1, 0.1], [2.4, 0.1], [0.1, 1.2], [2.4, 1.2]]) this.boxMesh(x + lx, y + ly, 0, 0.08, 0.08, 0.7, 0x7a7488);
        this.boxMesh(x, y, 0.7, 2.6, 1.4, 0.05, 0x86c7aa, { rough: 0.85 });
        this.boxMesh(x + 0.04, y + 0.69, 0.751, 2.52, 0.02, 0.002, 0xffffff, { shadow: false });
        this.boxMesh(x + 1.29, y - 0.05, 0.75, 0.02, 1.5, 0.17, 0xf4f4f4, { rough: 1 });
        this.ball = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 8), new THREE.MeshStandardMaterial({ color: 0xffffff }));
        this.ball.castShadow = true;
        this.ball.visible = false;
        this.addToFloor(this.ball);
        this.clickBox(x, y, 0, 2.6, 1.4, 0.8, () => { this.until.rally = this.t / 1000 + 7; this.spawnFx('spark', x + 1.3, 1.0, y + 0.7, { n: 5, spread: 0.6 }); });
        break;
      }
      case 'vending': {
        this.boxMesh(p.x, p.y, 0, 0.7, 0.75, 1.85, soft(p.color), { rough: 0.8 });
        this.boxMesh(p.x + 0.7, p.y + 0.08, 0.7, 0.01, 0.47, 1.0, 0x0d1520, { emissive: 0x2a4a6a, ei: 0.5, shadow: false });
        const cols = [0xf2d16b, 0x5cf08a, 0xff8a65, 0x81d4fa, 0xce93d8];
        for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) {
          this.boxMesh(p.x + 0.62, p.y + 0.13 + k * 0.14, 0.82 + r * 0.22, 0.06, 0.07, 0.13, cols[(r * 3 + k) % 5], { emissive: cols[(r * 3 + k) % 5], ei: 0.25, shadow: false });
        }
        {
          const l = new THREE.PointLight(0x7fc8ff, 0, 2.6, 1.8);
          l.position.set(p.x + 1.0, 1.3, p.y + 0.35);
          this.addToFloor(l);
          this.glows.push({ light: l, base: 1.3, sprite: this.haloSprite('127,200,255', p.x + 0.75, 1.3, p.y + 0.35, 1.3), sbase: 0.5 });
        }
        break;
      }
      case 'foosball': {
        const { x, y } = p;
        for (const [lx, ly] of [[0.1, 0.1], [1.42, 0.1], [0.1, 0.62], [1.42, 0.62]]) this.boxMesh(x + lx, y + ly, 0, 0.08, 0.08, 0.6, 0xb98f6e);
        this.boxMesh(x, y, 0.6, 1.6, 0.8, 0.06, 0xd8ae8a);
        this.boxMesh(x + 0.05, y + 0.05, 0.66, 1.5, 0.7, 0.01, 0x94d1a4, { shadow: false });
        this.boxMesh(x, y, 0.66, 1.6, 0.05, 0.18, 0xd8ae8a);
        this.boxMesh(x, y + 0.75, 0.66, 1.6, 0.05, 0.18, 0xd8ae8a);
        const table = { until: 0, pair: p.pair || 'fb' };
        for (let k = 0; k < 6; k++) {
          const rod = new THREE.Group();
          const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.2, 6), new THREE.MeshStandardMaterial({ color: 0xc8ccd0, metalness: 0.7, roughness: 0.3 }));
          bar.rotation.x = Math.PI / 2;
          rod.add(bar);
          for (let m = 0; m < 2; m++) {
            const man = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.05), new THREE.MeshStandardMaterial({ color: k % 2 ? 0xef9a9a : 0x93b6ee, roughness: 0.8 }));
            man.position.set(0, -0.03, -0.15 + m * 0.3);
            man.castShadow = true;
            rod.add(man);
          }
          rod.position.set(x + 0.2 + k * 0.24, 0.8, y + 0.4);
          rod.userData.baseZ = y + 0.4;
          rod.userData.table = table;
          this.addToFloor(rod);
          this.rods.push(rod);
        }
        this.clickBox(x, y, 0, 1.6, 0.8, 0.85, () => { table.until = this.t / 1000 + 5; this.spawnFx('spark', x + 0.8, 1.0, y + 0.4, { n: 4, spread: 0.5 }); });
        break;
      }
      case 'booth': {
        const { x, y } = p;
        const felt = new THREE.MeshStandardMaterial({ color: 0xc9bce0, roughness: 1 });
        this.boxMesh(x, y - 0.05, 0, 1.3, 0.05, 2.0, 0, { mat: felt });
        this.boxMesh(x - 0.05, y, 0, 0.05, 1.3, 2.0, 0, { mat: felt });
        this.boxMesh(x + 1.25, y, 0, 0.05, 1.3, 2.0, 0, { mat: this.glassMat(), shadow: false });
        this.boxMesh(x, y + 1.25, 0, 0.85, 0.05, 2.0, 0, { mat: this.glassMat(), shadow: false });
        this.boxMesh(x - 0.05, y - 0.05, 2.0, 1.4, 1.4, 0.06, 0xd8cde8);
        this.place('stoolBar', x + 0.45, y + 0.4, 0.4, 0.4, { h: 0.5 });
        const l = new THREE.PointLight(0xffd9a0, 0.6, 2.5);
        l.position.set(x + 0.65, 1.85, y + 0.65);
        this.addToFloor(l);
        break;
      }
      case 'glass':
        if (p.w === 0) this.boxMesh(p.x - 0.03, p.y, 0, 0.06, p.d, 2.1, 0, { mat: this.glassMat(), shadow: false });
        else this.boxMesh(p.x, p.y - 0.03, 0, p.w, 0.06, 2.1, 0, { mat: this.glassMat(), shadow: false });
        if (p.w === 0) this.boxMesh(p.x - 0.04, p.y, 0, 0.08, p.d, 0.12, 0xe6dccd);
        else this.boxMesh(p.x, p.y - 0.04, 0, p.w, 0.08, 0.12, 0xe6dccd);
        break;
      case 'meetingTable':
        this.place('table', p.x, p.y, p.w, p.d, { h: 0.75 });
        this.place('laptop', p.x + 1.2, p.y + 0.45, 0.45, 0.35, { y0: 0.75 });
        break;
      case 'chair':
        this.place('chairModernCushion', p.x - 0.28, p.y - 0.28, 0.56, 0.56, { h: 0.85, rot: p.face === 'front' ? 0 : Math.PI });
        break;
      case 'counter': {
        const n = Math.max(1, Math.round(p.w / 0.7));
        const u = p.w / n;
        for (let i = 0; i < n; i++) {
          const ux = p.x + i * u;
          const isSink = Math.abs(ux + u / 2 - (p.x + 3.15)) < u / 2;
          this.place(isSink ? 'kitchenSink' : 'kitchenCabinet', ux, p.y, u, p.d, { h: 0.9, stretch: true });
        }
        this.place('kitchenMicrowave', p.x + p.w - 0.75, p.y + 0.1, 0.55, 0.4, { y0: 0.9, h: 0.32 });
        this.place('toaster', p.x + 0.2, p.y + 0.2, 0.3, 0.2, { y0: 0.9, h: 0.18 });
        break;
      }
      case 'coffee':
        this.place('kitchenCoffeeMachine', p.x, p.y, 0.45, 0.4, { y0: 0.9, h: 0.5 });
        this.buildMug(p.x + 0.225, p.y + 0.36);
        this.clickBox(p.x - 0.05, p.y - 0.05, 0.9, 0.55, 0.6, 0.6, () => this.brew());
        break;
      case 'fridge':
        this.buildFridge(p.x, p.y);
        break;
      case 'cooler': {
        this.boxMesh(p.x, p.y, 0, 0.42, 0.42, 0.95, 0xe9eef2, { rough: 0.7 });
        const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.42, 16),
          new THREE.MeshPhysicalMaterial({ color: 0x8ec5f2, transparent: true, opacity: 0.65, roughness: 0.1 }));
        bottle.position.set(p.x + 0.21, 0.95 + 0.21, p.y + 0.21);
        this.addToFloor(bottle);
        break;
      }
      case 'sink':
        break; // part of the counter
      case 'roundTable':
        this.place('tableRound', p.x - 0.45, p.y - 0.45, 0.9, 0.9, { h: 0.75 });
        break;
      case 'barStool':
        this.place('stoolBar', p.x - 0.2, p.y - 0.2, 0.4, 0.4, { h: 0.5 });
        break;
      case 'shelf': {
        const n = Math.max(1, Math.round(p.w / 0.9));
        const u = p.w / n;
        for (let i = 0; i < n; i++) {
          const b = this.place('bookcaseOpen', p.x + i * u, p.y, u, p.d, { h: 1.45, stretch: true });
          if (!b) continue;
          // book stacks on each shelf
          b.updateMatrixWorld(true);
          const ray = new THREE.Raycaster();
          const floorY = (this.floorRoot && this.floorRoot.position.y) || 0;
          for (let k = 0; k < 2; k++) {
            const bx = p.x + i * u + 0.2 + k * (u - 0.4) * 0.6;
            ray.set(new THREE.Vector3(bx + 0.1, floorY + 1.6, p.y + p.d / 2), new THREE.Vector3(0, -1, 0));
            for (const hit of ray.intersectObject(b, true)) {
              if (hit.face && hit.face.normal.y > 0.5 && hit.point.y < floorY + 1.4) {
                this.place('books', bx, p.y + 0.06, 0.25, p.d - 0.12, { y0: hit.point.y - floorY, h: 0.14 + ((i + k) % 3) * 0.03 });
              }
            }
          }
        }
        break;
      }
      case 'couch':
        this.recolor(this.place('loungeSofa', p.x - 0.1, p.y - 0.15, p.w + 0.2, p.d + 0.2, { h: 0.8, stretch: true }), { carpet: p.color ? new THREE.Color(p.color).getHex() : 0x7fcbc2, wood: 0xe8c3a2 });
        break;
      case 'coffeeTable':
        this.place('tableCoffee', p.x, p.y, p.w, p.d, { h: 0.35 });
        if (p.radio !== false) {
          this.place('radio', p.x + 1.0, p.y + 0.2, 0.3, 0.18, { y0: 0.35, h: 0.18 });
          this.radioAt = [p.x + 1.15, 0.6, p.y + 0.29];
          this.clickBox(p.x + 0.9, p.y + 0.1, 0.35, 0.5, 0.4, 0.35, () => {
            const t = this.t / 1000;
            this.until.notes = this.until.notes > t ? 0 : t + 8;
          });
        }
        break;
      case 'beanbag': {
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 16), new THREE.MeshStandardMaterial({ color: soft(p.color), roughness: 0.95 }));
        m.scale.set(1, 0.5, 1);
        m.position.set(p.x, 0.2, p.y);
        m.castShadow = m.receiveShadow = true;
        this.addToFloor(m);
        const bean = { m, x: p.x, y: p.y, sy: 0.5, wob: 0 };
        this.beans.push(bean);
        this.clickBox(p.x - 0.45, p.y - 0.45, 0, 0.9, 0.9, 0.45, () => { bean.wob = 1; this.spawnFx('puff', p.x, 0.35, p.y, { n: 4, spread: 0.6, up: 0.25, life: 1, size: 0.25, grow: 1 }); });
        break;
      }
      case 'arcade': {
        const { x, y } = p;
        const body = p.color ? soft(p.color) : 0x9483c9;
        this.boxMesh(x, y, 0, 0.7, 0.7, 1.75, body, { rough: 0.8 });
        const screen = this.boxMesh(x + 0.1, y + 0.7, 1.0, 0.5, 0.01, 0.45, 0x000000, { emissive: 0xff44aa, ei: 1, shadow: false });
        this.boxMesh(x, y + 0.7, 1.55, 0.7, 0.02, 0.17, 0xffcf4a, { emissive: 0xffcf4a, ei: 0.6, shadow: false });
        this.boxMesh(x, y + 0.7, 0.8, 0.7, 0.2, 0.08, 0xa898dc);
        const l = new THREE.PointLight(0xff5fc0, 0, 3, 1.6);
        l.position.set(x + 0.35, 1.3, y + 1.1);
        this.addToFloor(l);
        const glow = { light: l, base: 1.6, sprite: this.haloSprite('255,95,192', x + 0.35, 1.25, y + 0.75, 1.4), sbase: 0.6 };
        this.glows.push(glow);
        const cab = { screen, glow, at: [x + 0.35, 1.3, y + 0.8], until: 0 };
        this.arcadeScreens.push(cab);
        this.arcadeScreen = screen;
        this.arcadeGlow = glow;
        this.arcadeAt = cab.at;
        this.clickBox(x, y, 0, 0.7, 0.95, 1.8, () => { cab.until = this.t / 1000 + 4.5; this.spawnFx('spark', cab.at[0], 1.6, cab.at[2], { n: 7, spread: 0.5, up: 0.9 }); });
        break;
      }
      case 'lamp':
      {
        const lm = this.recolor(this.place('lampRoundFloor', p.x - 0.25, p.y - 0.25, 0.5, 0.5, { h: 1.7 }), { lamp: 0xffd34d }, { lamp: 0xffc933 });
        const l = new THREE.PointLight(0xffc96a, 0, 4.5);
        l.position.set(p.x, 1.6, p.y);
        this.addToFloor(l);
        const L = this.addLamp(lm, l, { base: 1.6, floor: true, sprite: this.haloSprite('255,201,106', p.x, 1.55, p.y, 2.4), sbase: 0.8, at: [p.x, 1.7, p.y] });
        this.clickBox(p.x - 0.35, p.y - 0.35, 0, 0.7, 0.7, 1.8, () => this.toggleLamp(L));
        break;
      }
      case 'rug':
        this.recolor(this.place('rugRectangle', p.x, p.y, p.w, p.d, { y0: 0.004 }), {
          carpet: p.color ? new THREE.Color(p.color).getHex() : 0x9eaad9,
          carpetDarker: p.color2 ? new THREE.Color(p.color2).getHex() : 0x8592c6,
        });
        break;
      case 'stairs':
        // Landing + posts are built per floor in buildStairsShaft.
        break;
      case 'sprout':
        this.potted(p.kind || 'plantSmall2', p.x - 0.2, p.y - 0.2, 0.42, 0.42, { h: 0.55 });
        break;
      case 'loungeChair':
        this.recolor(this.place('loungeChairRelax', p.x, p.y, 0.78, 0.8, { h: 0.78, rot: p.rot || 0 }), { carpet: new THREE.Color(p.color || '#f2b7c1').getHex(), wood: 0xe8c3a2 });
        break;
      case 'bench':
        this.recolor(this.place('benchCushion', p.x, p.y, p.w || 1.4, p.d || 0.5, { h: 0.48, stretch: true }), { carpet: new THREE.Color(p.color || '#f6c9a8').getHex(), wood: 0xe8c3a2 });
        break;
      case 'tv':
        this.place('cabinetTelevision', p.x, p.y, 1.15, 0.42, { h: 0.55 });
        this.recolor(this.place('televisionModern', p.x + 0.18, p.y + 0.08, 0.78, 0.12, { y0: 0.55, h: 0.5 }), { metal: 0xd7dbe6 });
        break;
      case 'speaker':
        this.place('speaker', p.x, p.y, 0.28, 0.28, { h: 0.48 });
        break;
      case 'coat':
        this.place('coatRackStanding', p.x - 0.2, p.y - 0.2, 0.4, 0.4, { h: 1.55 });
        break;
    }
  }

  // ------------------------------------------------------------ interactive props
  // Lamps, doors, fridge, coffee, blinds, chairs, plants, beanbags, the cat and
  // a butterfly. Built office only (scene packs keep their own behaviour).

  initInteractive() {
    this.clicks = new THREE.Group(); // invisible hit boxes, never rendered (not in the scene)
    this.clickObjs = [];             // real meshes that are clickable themselves (doors, chairs, plants)
    this.lamps = []; this.doors = []; this.plants = []; this.chairs = []; this.beans = []; this.blinds = [];
    this.coffee = null; this.fridge = null; this.arcadeGlow = null; this.arcadeAt = null; this.radioAt = null; this.butterfly = null;
    this.arcadeScreens = [];
    this.rods = [];
    this.floorPads = [];
    this.until = { rally: 0, fb: 0, arcade: 0, notes: 0, notesNext: 0 };
    for (const f of this.fx || []) { this.scene.remove(f.sp); f.sp.material.dispose(); }
    this.fx = [];
    this._skyRef = null;
    this._ray = this._ray || new THREE.Raycaster();
    this._hitMat = this._hitMat || new THREE.MeshBasicMaterial({ visible: false });
    this._hitGeo = this._hitGeo || new THREE.BoxGeometry(1, 1, 1);
    if (!this.catObj) {
      this.catObj = this.buildCat();
      this.scene.add(this.catObj.root);
    }
  }

  clickBox(x, y, z, w, d, h, fn) {
    const m = new THREE.Mesh(this._hitGeo, this._hitMat);
    m.scale.set(w, h, d);
    m.position.set(x + w / 2, z + h / 2, y + d / 2);
    m.userData.onClick = fn;
    this.clicks.add(m);
    return m;
  }

  clickable(obj, fn) {
    obj.userData.onClick = fn;
    this.clickObjs.push(obj);
  }

  pickInteractive(e) {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this._ray.setFromCamera(ndc, this.camera);
    const targets = [this.clicks, ...this.clickObjs];
    if (this.catObj && this.catObj.root.visible) targets.push(this.catObj.root);
    for (const h of this._ray.intersectObjects(targets, true)) {
      let o = h.object;
      while (o && !o.userData.onClick) o = o.parent;
      if (o) return o;
    }
    return null;
  }

  // ---- lamps: click toggles; Day light switches them all off, Dawn/Eve/Night on
  addLamp(model, light, opts) {
    const mats = [];
    if (model) model.traverse((o) => {
      if (!o.isMesh) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) if (m.emissive && m.emissiveIntensity > 0 && m.emissive.getHex()) mats.push(m);
    });
    const L = { model, light, mats, e0: mats.map((m) => m.emissiveIntensity), on: true, k: -1, ...opts };
    this.lamps.push(L);
    return L;
  }

  toggleLamp(L) {
    L.on = !L.on;
    if (L.on && L.at) this.spawnFx('spark', L.at[0], L.at[1], L.at[2], { n: 3, spread: 0.2, up: 0.4, size: 0.14 });
  }

  // ---- doors (entrance, meeting room, fridge): click to open / close
  addDoor(pivot, cx, cy, max, extra = {}) {
    const d = { pivot, cx, cy, max, open: false, a: 0, ...extra };
    this.doors.push(d);
    this.clickable(pivot, () => { d.open = !d.open; });
    return d;
  }

  // ---- carpets: a patterned carpet in the meeting room and a round welcome mat
  buildCarpets() {
    const { OW } = this.plan;
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 208;
    const c = cv.getContext('2d');
    c.fillStyle = '#f3c3cc'; c.fillRect(0, 0, 256, 208);
    c.fillStyle = '#fbeee6'; c.fillRect(9, 9, 238, 190);
    c.fillStyle = '#c4e5d8'; c.fillRect(18, 18, 220, 172);
    c.fillStyle = 'rgba(255,255,255,.6)';
    for (let y = 32, row = 0; y < 182; y += 16, row++) for (let x = 32 + (row % 2) * 8; x < 228; x += 16) { c.beginPath(); c.arc(x, y, 2.4, 0, Math.PI * 2); c.fill(); }
    c.strokeStyle = '#f2b0bd'; c.lineWidth = 4; c.strokeRect(28, 28, 200, 152);
    c.strokeStyle = '#fbeee6'; c.lineWidth = 2; c.strokeRect(36, 36, 184, 136);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const side = new THREE.MeshStandardMaterial({ color: 0xeeb4bf, roughness: 1 });
    const top = new THREE.MeshStandardMaterial({ map: tex, roughness: 1 });
    const cw = 4.2, cd = 3.4, ch = 0.035;
    const carpet = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, cd), [side, side, top, side, side, side]);
    carpet.position.set(OW + 0.9 + cw / 2, ch / 2, 0.9 + cd / 2);
    carpet.receiveShadow = true;
    this.addToFloor(carpet);
    // round welcome rug inside the entrance door
    const rc = document.createElement('canvas');
    rc.width = rc.height = 128;
    const r = rc.getContext('2d');
    ['#f7c7a8', '#fbe8d6', '#cbbdf0', '#fbe8d6', '#f6b9c4'].forEach((col, i) => { r.fillStyle = col; r.beginPath(); r.arc(64, 64, 64 - i * 12, 0, Math.PI * 2); r.fill(); });
    const rt = new THREE.CanvasTexture(rc);
    rt.colorSpace = THREE.SRGBColorSpace;
    const rug = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.03, 40), [new THREE.MeshStandardMaterial({ color: 0xf2b39a, roughness: 1 }), new THREE.MeshStandardMaterial({ map: rt, roughness: 1 }), side]);
    rug.position.set(1.35, 0.015, this.plan.door.y);
    rug.receiveShadow = true;
    this.addToFloor(rug);
  }

  // ---- roller blinds on the back windows
  addBlind(wx) {
    if (!this._blindMat) {
      const tex = this.patternTexture((c, s) => {
        c.fillStyle = '#fbf1e6'; c.fillRect(0, 0, s, s);
        c.fillStyle = '#f1d9c7';
        for (let y = 0; y < s; y += 16) c.fillRect(0, y, s, 3);
      });
      tex.repeat.set(1, 5);
      this._blindMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 1, side: THREE.DoubleSide });
      this._blindGeo = new THREE.BoxGeometry(1.46, 1, 0.015);
      this._blindGeo.translate(0, -0.5, 0);
    }
    const g = new THREE.Group();
    g.position.set(wx + 0.75, 1.99, 0.04);
    const m = new THREE.Mesh(this._blindGeo, this._blindMat);
    m.castShadow = true;
    g.add(m);
    g.scale.y = 0.05;
    this.addToFloor(g);
    const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.56, 10), new THREE.MeshStandardMaterial({ color: 0xe9c9b4, roughness: 0.8 }));
    roller.rotation.z = Math.PI / 2;
    roller.position.set(wx + 0.75, 2.02, 0.05);
    this.addToFloor(roller);
    const b = { g, down: false, k: 0.05 };
    this.blinds.push(b);
    this.clickBox(wx, -0.12, 0.84, 1.5, 0.32, 1.25, () => { b.down = !b.down; });
  }

  // ---- desk chairs: click to spin, they settle back facing the desk
  addChair(m) {
    const box = new THREE.Box3().setFromObject(m);
    const c = box.getCenter(new THREE.Vector3());
    const g = new THREE.Group();
    g.position.set(c.x, 0, c.z);
    (m.parent || this.room).add(g);
    m.position.x -= c.x; m.position.z -= c.z;
    g.add(m);
    const ch = { g, a: 0, v: 0 };
    this.chairs.push(ch);
    this.clickable(g, () => { ch.v += (Math.random() < 0.5 ? -1 : 1) * (11 + Math.random() * 5); });
  }

  // ---- potted plants: gentle sway, click for a bounce and a burst of petals
  addPlant(m) {
    const box = new THREE.Box3().setFromObject(m);
    const top = new THREE.Vector3((box.min.x + box.max.x) / 2, box.max.y, (box.min.z + box.max.z) / 2);
    const pl = { m, s0: m.scale.clone(), ph: top.x * 1.3 + top.z * 0.7, pop: 0, top };
    this.plants.push(pl);
    this.clickable(m, () => {
      pl.pop = 1;
      this.spawnFx('petal', top.x, top.y, top.z, { n: 7, spread: 0.45, up: 0.7, size: 0.16, life: 1.6 });
    });
  }

  // ---- fridge: procedural body with shelves + snacks, two hinged doors
  buildFridge(x, y) {
    const w = 0.85, d = 0.75, h = 1.95;
    const body = new THREE.MeshStandardMaterial({ color: 0xc7e7dc, roughness: 0.6 });
    this.boxMesh(x, y, 0, w, 0.06, h, 0, { mat: body });
    this.boxMesh(x, y, 0, 0.05, d - 0.06, h, 0, { mat: body });
    this.boxMesh(x + w - 0.05, y, 0, 0.05, d - 0.06, h, 0, { mat: body });
    this.boxMesh(x, y, 0, w, d - 0.06, 0.12, 0, { mat: body });
    this.boxMesh(x, y, h - 0.06, w, d - 0.06, 0.06, 0, { mat: body });
    this.boxMesh(x + 0.05, y + 0.06, 1.3, w - 0.1, d - 0.12, 0.05, 0, { mat: body });
    const liner = new THREE.MeshStandardMaterial({ color: 0xf4f8fb, roughness: 0.7, emissive: 0xe6f6ff, emissiveIntensity: 0 });
    this.boxMesh(x + 0.05, y + 0.06, 0.12, w - 0.1, 0.012, h - 0.18, 0, { mat: liner, round: false, shadow: false });
    for (const z of [0.52, 0.92]) this.boxMesh(x + 0.06, y + 0.08, z, w - 0.12, d - 0.2, 0.015, 0xe4f1f8, { round: false });
    // snacks
    const cyl = (cx, cz, z, r, hh, col) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, hh, 10), new THREE.MeshStandardMaterial({ color: col, roughness: 0.6 }));
      m.position.set(cx, z + hh / 2, cz); m.castShadow = true; this.addToFloor(m);
    };
    cyl(x + 0.22, y + 0.35, 0.12, 0.05, 0.3, 0xa6d8f0);
    cyl(x + 0.36, y + 0.32, 0.12, 0.05, 0.26, 0xf7b7a3);
    this.boxMesh(x + 0.52, y + 0.25, 0.12, 0.16, 0.16, 0.24, 0xfff6e8);
    this.boxMesh(x + 0.15, y + 0.25, 0.535, 0.12, 0.1, 0.22, 0xfdfdfd);
    this.boxMesh(x + 0.15, y + 0.25, 0.68, 0.12, 0.1, 0.06, 0x8fb7e8);
    cyl(x + 0.5, y + 0.33, 0.535, 0.07, 0.12, 0xffd88a);
    for (const [ax, col] of [[0.22, 0xf28b8b], [0.36, 0x9bd37b], [0.5, 0xf28b8b]]) {
      const ap = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshStandardMaterial({ color: col, roughness: 0.5 }));
      ap.position.set(x + ax, 0.985, y + 0.35); ap.castShadow = true; this.addToFloor(ap);
    }
    this.boxMesh(x + 0.62, y + 0.2, 0.935, 0.14, 0.2, 0.1, 0xf6c1d6); // cake slice box
    this.boxMesh(x + 0.15, y + 0.15, 1.35, 0.25, 0.35, 0.08, 0xdff3ff);
    this.boxMesh(x + 0.45, y + 0.15, 1.35, 0.25, 0.35, 0.12, 0xcfe0ff);
    // doors hinge on the left front edge and swing out toward the camera side,
    // so the lit shelves are on show while open
    const door = (z0, hh, auto) => {
      const pv = new THREE.Group();
      pv.position.set(x, 0, y + d - 0.06);
      this.boxMesh(0, 0, z0, w, 0.06, hh, 0xd6efe6, { group: pv, rough: 0.6 });
      this.boxMesh(w - 0.095, 0.06, z0 + hh * 0.35, 0.035, 0.04, Math.min(0.5, hh * 0.45), 0xf6f1e8, { group: pv }); // handle
      this.boxMesh(0.08, -0.07, z0 + hh * 0.3, w - 0.16, 0.07, 0.035, 0xe4f1f8, { group: pv, round: false }); // door bin
      this.addToFloor(pv);
      return this.addDoor(pv, null, null, 1.75, { auto, sign: -1 });
    };
    const main = door(0.12, 1.18, 'fridge');
    door(1.32, 0.61, null);
    const l = new THREE.PointLight(0xe8f6ff, 0, 2.4, 2);
    l.position.set(x + w / 2, 1.0, y + d + 0.15);
    this.addToFloor(l);
    this.fridge = { main, light: l, liner };
  }

  // ---- coffee: click the machine (or a blob comes for coffee) → steam + mug fills
  buildMug(x, z) {
    const mug = new THREE.Group();
    mug.position.set(x, 0.9, z);
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.042, 0.1, 14, 1, true), new THREE.MeshStandardMaterial({ color: 0xfff1ec, roughness: 0.6, side: THREE.DoubleSide }));
    cup.position.y = 0.05;
    const base = new THREE.Mesh(new THREE.CircleGeometry(0.042, 14), cup.material);
    base.rotation.x = -Math.PI / 2; base.position.y = 0.002;
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.008, 6, 12), cup.material);
    handle.position.set(0.055, 0.05, 0);
    const lg = new THREE.CylinderGeometry(0.046, 0.042, 1, 14);
    lg.translate(0, 0.5, 0);
    const liquid = new THREE.Mesh(lg, new THREE.MeshStandardMaterial({ color: 0x8a5a3c, roughness: 0.3 }));
    liquid.position.y = 0.006; liquid.scale.y = 0.001;
    mug.add(cup, base, handle, liquid);
    mug.visible = false;
    this.addToFloor(mug);
    this.coffee = { mug, liquid, x, z, t0: -99 };
  }

  brew() {
    const c = this.coffee;
    if (!c) return;
    const t = this.t / 1000;
    if (t - c.t0 < 4) return;
    c.t0 = t;
  }

  // ---- butterfly over the lounge by day, a firefly by night
  buildButterfly(cx, cz, rx, rz) {
    const g = new THREE.Group();
    const wings = [];
    for (const [s, col] of [[1, 0xffb3d9], [-1, 0xb9a6ff]]) {
      const geo = new THREE.PlaneGeometry(0.14, 0.11);
      geo.rotateX(-Math.PI / 2);
      geo.translate(s * 0.07, 0, 0);
      const wing = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, side: THREE.DoubleSide, roughness: 0.8, emissive: col, emissiveIntensity: 0.15 }));
      wing.raycast = () => {};
      g.add(wing);
      wings.push([wing, s]);
    }
    const bodyM = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.07, 3, 6), new THREE.MeshStandardMaterial({ color: 0x6b5a7a }));
    bodyM.rotation.x = Math.PI / 2; bodyM.raycast = () => {};
    g.add(bodyM);
    this.addToFloor(g);
    const fly = this.haloSprite('255,240,140', cx, 1.2, cz, 0.45);
    this.butterfly = { g, wings, fly, cx, cz, rx: Math.max(0.6, rx), rz: Math.max(0.6, rz) };
  }

  // ---- the office cat (walks the shared floor-plan path from office.js)
  buildCat() {
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);
    const M = (c, r = 0.85) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
    const fur = M(0xf2b27c), cream = M(0xfbe9d6), pink = M(0xf4a7b4), ink = M(0x15151a, 0.4);
    const add = (geo, mat, x, y, z, parent = body) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
    add(new THREE.SphereGeometry(0.1, 14, 10), fur, 0, 0.17, 0).scale.set(0.85, 0.8, 1.45);
    add(new THREE.SphereGeometry(0.08, 12, 8), cream, 0, 0.14, 0.035).scale.set(0.8, 0.7, 1.25);
    const head = new THREE.Group();
    head.position.set(0, 0.27, 0.14);
    body.add(head);
    add(new THREE.SphereGeometry(0.085, 14, 10), fur, 0, 0, 0, head);
    add(new THREE.SphereGeometry(0.045, 10, 8), cream, 0, -0.025, 0.055, head).scale.set(1.2, 0.8, 0.8);
    for (const s of [-1, 1]) {
      add(new THREE.ConeGeometry(0.032, 0.065, 4), fur, s * 0.048, 0.072, -0.005, head).rotation.z = -s * 0.25;
      add(new THREE.ConeGeometry(0.018, 0.04, 4), pink, s * 0.048, 0.068, 0.008, head).rotation.z = -s * 0.25;
      add(new THREE.SphereGeometry(0.014, 8, 6), ink, s * 0.033, 0.012, 0.075, head);
    }
    add(new THREE.SphereGeometry(0.011, 6, 4), pink, 0, -0.008, 0.088, head);
    const legs = [];
    for (const [lx, lz] of [[-0.05, 0.09], [0.05, 0.09], [-0.05, -0.08], [0.05, -0.08]]) {
      const pivot = new THREE.Group();
      pivot.position.set(lx, 0.13, lz);
      body.add(pivot);
      add(new THREE.CylinderGeometry(0.022, 0.02, 0.13, 6), fur, 0, -0.065, 0, pivot);
      add(new THREE.SphereGeometry(0.024, 6, 5), cream, 0, -0.125, 0.006, pivot);
      legs.push(pivot);
    }
    const tail = new THREE.Group();
    tail.position.set(0, 0.2, -0.13);
    body.add(tail);
    add(new THREE.CylinderGeometry(0.014, 0.022, 0.24, 6), fur, 0, 0.12, 0, tail);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, 0.6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.y = 0.22;
    root.add(hit);
    root.scale.setScalar(1.35);
    const cat = { root, body, head, legs, tail, yaw: 0, last: null, hop: 0, sit: 0 };
    root.userData.onClick = () => {
      cat.hop = 0.6;
      const k = this.cat;
      this.spawnFx('heart', k.x, 0.75, k.y, { n: 4, spread: 0.3, up: 0.6, size: 0.16 });
      k.path = []; k.until = 0; // off it trots somewhere new
    };
    return cat;
  }

  animateCat(t, dt) {
    const c = this.catObj, k = this.cat;
    if (!c || !k) return;
    const catFloor = k.floor ?? 0;
    c.root.visible = !this.plan.scene && catFloor <= (this.viewFloor || 0);
    if (!c.root.visible) return;
    const walking = k.path.length > 0;
    if (c.last) {
      const dx = k.x - c.last.x, dz = k.y - c.last.y;
      if (Math.hypot(dx, dz) > 1e-4) {
        let dd = Math.atan2(dx, dz) - c.yaw;
        dd = Math.atan2(Math.sin(dd), Math.cos(dd));
        c.yaw += dd * Math.min(1, dt * 10);
      }
    }
    c.last = { x: k.x, y: k.y };
    c.hop = Math.max(0, c.hop - dt);
    const hopY = c.hop > 0 ? Math.sin((1 - c.hop / 0.6) * Math.PI) * 0.35 : 0;
    c.root.position.set(k.x, hopY + (this.plan.scene ? 0 : catFloor * LEVEL_H), k.y);
    if (this.floorShadowCount) setObjectFloorLayer(c.root, catFloor);
    c.root.rotation.y = c.yaw;
    c.sit += ((walking ? 0 : 1) - c.sit) * Math.min(1, dt * 4);
    const sw = walking ? Math.sin(t * 14) * 0.6 : 0;
    c.legs[0].rotation.x = sw; c.legs[1].rotation.x = -sw;
    c.legs[2].rotation.x = -sw - 1.1 * c.sit; c.legs[3].rotation.x = sw - 1.1 * c.sit;
    c.body.rotation.x = -0.32 * c.sit;
    c.body.position.y = (walking ? Math.abs(Math.sin(t * 14)) * 0.012 : 0) - 0.035 * c.sit;
    c.tail.rotation.x = -0.6 - 0.5 * c.sit;
    c.tail.rotation.z = Math.sin(t * (walking ? 6 : 2.2)) * 0.5;
    c.head.rotation.y = walking ? 0 : Math.sin(t * 0.7) * 0.45;
    c.head.rotation.x = 0.32 * c.sit;
  }

  // ---- little sprite particles (steam, hearts, notes, petals, sparks)
  fxTexture(kind) {
    this._fxTex = this._fxTex || {};
    if (this._fxTex[kind]) return this._fxTex[kind];
    if (kind === 'puff') return (this._fxTex[kind] = this.glowTexture('255,255,255'));
    const cv = document.createElement('canvas');
    cv.width = cv.height = 64;
    const c = cv.getContext('2d');
    c.translate(32, 32);
    if (kind === 'heart') {
      c.fillStyle = '#ff7aa8';
      c.beginPath(); c.moveTo(0, 20); c.bezierCurveTo(-34, -2, -16, -30, 0, -12); c.bezierCurveTo(16, -30, 34, -2, 0, 20); c.fill();
    } else if (kind === 'note') {
      c.fillStyle = '#ffffff';
      c.beginPath(); c.ellipse(-6, 16, 11, 8, -0.4, 0, Math.PI * 2); c.fill();
      c.fillRect(2, -24, 5, 40);
      c.beginPath(); c.moveTo(7, -24); c.quadraticCurveTo(24, -14, 18, 2); c.quadraticCurveTo(17, -10, 7, -12); c.fill();
    } else if (kind === 'petal') {
      c.fillStyle = '#ffb3c7';
      for (let i = 0; i < 5; i++) { c.save(); c.rotate((i * Math.PI * 2) / 5); c.beginPath(); c.ellipse(0, -13, 8, 13, 0, 0, Math.PI * 2); c.fill(); c.restore(); }
      c.fillStyle = '#ffe27a'; c.beginPath(); c.arc(0, 0, 7, 0, Math.PI * 2); c.fill();
    } else {
      c.fillStyle = '#ffe27a';
      c.beginPath();
      for (let i = 0; i < 10; i++) { const r = i % 2 ? 10 : 28, a = (i * Math.PI) / 5 - Math.PI / 2; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
      c.closePath(); c.fill();
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    return (this._fxTex[kind] = tex);
  }

  spawnFx(kind, x, y, z, { n = 6, spread = 0.25, up = 0.6, life = 1.4, size = 0.22, grow = 0, color = null, opacity = 1 } = {}) {
    for (let i = 0; i < n && this.fx.length < 90; i++) {
      const mat = new THREE.SpriteMaterial({ map: this.fxTexture(kind), transparent: true, depthWrite: false, opacity });
      if (color != null) mat.color.setHex(color);
      const sp = new THREE.Sprite(mat);
      sp.raycast = () => {};
      sp.position.set(x + (Math.random() - 0.5) * spread, y, z + (Math.random() - 0.5) * spread);
      sp.scale.setScalar(size);
      sp.renderOrder = 3;
      this.scene.add(sp);
      this.fx.push({
        sp, life, max: life, size, grow, o0: opacity,
        v: new THREE.Vector3((Math.random() - 0.5) * spread * 1.5, up * (0.7 + Math.random() * 0.6), (Math.random() - 0.5) * spread * 1.5),
      });
    }
  }

  updateFx(dt) {
    for (let i = this.fx.length - 1; i >= 0; i--) {
      const f = this.fx[i];
      f.life -= dt;
      if (f.life <= 0) { this.scene.remove(f.sp); f.sp.material.dispose(); this.fx.splice(i, 1); continue; }
      f.sp.position.addScaledVector(f.v, dt);
      f.v.multiplyScalar(1 - dt * 0.9);
      const k = f.life / f.max;
      f.sp.material.opacity = f.o0 * Math.min(1, k * 2);
      f.sp.scale.setScalar(f.size * (1 + f.grow * (1 - k)));
    }
  }

  // Per-frame motion for everything above.
  animateInteractive(t, dt, sky) {
    const ease = (rate) => Math.min(1, dt * rate);
    const gk = sky.glow ?? 0.5;
    const isDay = sky === LIGHTS.day;
    // Which hangout spots are in use right now (blob arrived, not walking).
    const acts = new Set();
    for (const p of this.people.values()) if (p.poi && !p.path.length && p.mode !== 'work') acts.add(p.poi.act);

    // lamps: a light-mode change resets them (Day → off, otherwise on)
    if (this._skyRef !== sky) {
      for (const L of this.lamps) L.on = !isDay;
      this._skyRef = sky;
    }
    for (const L of this.lamps) {
      const want = L.on ? 1 : 0;
      L.k = L.k < 0 ? want : L.k + (want - L.k) * ease(8);
      L.light.intensity = L.base * L.k * (L.floor ? Math.max(1, (sky.lamp || 1.6) / 1.6) : Math.max(0.8, gk));
      if (L.sprite) L.sprite.material.opacity = L.k * L.sbase * (isDay ? 0.6 : 1);
      L.mats.forEach((m, i) => { m.emissiveIntensity = L.e0[i] * L.k; });
    }

    // doors: manual toggle, plus auto-open when someone (or the cat) comes by
    for (const d of this.doors) {
      let near = false;
      if (d.cx != null) {
        for (const p of this.people.values()) if (Math.hypot(p.x - d.cx, p.y - d.cy) < 1.1) { near = true; break; }
        if (!near && this.cat && Math.hypot(this.cat.x - d.cx, this.cat.y - d.cy) < 0.8) near = true;
      }
      const auto = d.auto && acts.has(d.auto);
      const want = d.open || near || auto ? d.max : 0;
      d.a += (want - d.a) * ease(5);
      d.pivot.rotation.y = d.a * (d.sign || 1);
    }
    if (this.fridge) {
      const o = this.fridge.main.a / this.fridge.main.max;
      this.fridge.light.intensity = 1.6 * o;
      this.fridge.liner.emissiveIntensity = 0.7 * o;
    }

    // coffee
    const cf = this.coffee;
    if (cf) {
      if (acts.has('coffee') && t - cf.t0 > 15) this.brew();
      const e = t - cf.t0;
      cf.mug.visible = e >= 0 && e < 14;
      if (cf.mug.visible) {
        cf.liquid.scale.y = Math.max(0.001, Math.min(1, Math.max(0, e - 0.5) / 3) * 0.085);
        if (e < 3.8 && Math.random() < dt * 9) this.spawnFx('puff', cf.x, 1.32, cf.z - 0.12, { n: 1, spread: 0.06, up: 0.35, life: 1.6, size: 0.12, grow: 1.8, opacity: 0.55 });
        if (e > 3.5 && e < 12 && Math.random() < dt * 3) this.spawnFx('puff', cf.x, 1.02, cf.z, { n: 1, spread: 0.03, up: 0.25, life: 1.4, size: 0.08, grow: 1.5, opacity: 0.45 });
      }
    }

    // arcade "coin": fast rainbow flashing + a brighter glow
    for (const cab of this.arcadeScreens || []) {
      const on = t < cab.until;
      if (on) {
        cab.screen.material.emissive.setHSL((t * 1.5) % 1, 0.9, 0.55);
        cab.screen.material.emissiveIntensity = 1.5 + Math.sin(t * 30) * 0.5;
        if (cab.glow) cab.glow.light.intensity *= 2.5;
        if (cab.at && Math.random() < dt * 4) this.spawnFx('spark', cab.at[0], cab.at[1] + 0.3, cab.at[2], { n: 1, spread: 0.4, up: 0.7, size: 0.12 });
      } else cab.screen.material.emissiveIntensity = 1;
    }

    // radio: music notes while it's "playing"
    if (this.radioAt && t < this.until.notes && t > this.until.notesNext) {
      this.until.notesNext = t + 0.45;
      const cols = [0x8b6be6, 0x3b8ee0, 0xff7aa8, 0x22a874];
      this.spawnFx('note', this.radioAt[0], this.radioAt[1], this.radioAt[2], { n: 1, spread: 0.15, up: 0.5, life: 1.8, size: 0.16, color: cols[Math.floor(Math.random() * cols.length)] });
    }

    // blinds
    for (const b of this.blinds) {
      b.k += ((b.down ? 1.12 : 0.05) - b.k) * ease(4);
      b.g.scale.y = b.k;
    }

    // chairs spin and settle back
    for (const ch of this.chairs) {
      if (Math.abs(ch.v) > 0.5) {
        ch.a += ch.v * dt;
        ch.v *= Math.exp(-dt * 1.4);
      } else if (ch.a !== 0) {
        ch.v = 0;
        const target = Math.round(ch.a / (Math.PI * 2)) * Math.PI * 2;
        ch.a += (target - ch.a) * ease(4);
        if (Math.abs(target - ch.a) < 0.002) ch.a = 0;
      }
      ch.g.rotation.y = ch.a;
    }

    // plants sway; click pop
    for (const pl of this.plants) {
      pl.m.rotation.z = Math.sin(t * 1.3 + pl.ph) * 0.03;
      pl.m.rotation.x = Math.sin(t * 1.05 + pl.ph * 1.7) * 0.02;
      if (pl.pop > 0) {
        pl.pop = Math.max(0, pl.pop - dt * 1.3);
        const s = 1 + Math.sin((1 - pl.pop) * Math.PI * 3) * 0.14 * pl.pop;
        pl.m.scale.set(pl.s0.x * s, pl.s0.y * (2 - s), pl.s0.z * s);
      } else pl.m.scale.copy(pl.s0);
    }

    // beanbags dent when a blob sits; wobble when poked
    for (const bn of this.beans) {
      let occ = false;
      for (const p of this.people.values()) if (p.poi && p.poi.act === 'beanbag' && !p.path.length && Math.hypot(p.x - bn.x, p.y - bn.y) < 0.3) { occ = true; break; }
      bn.sy += ((occ ? 0.44 : 0.5) - bn.sy) * ease(5);
      bn.wob = Math.max(0, bn.wob - dt * 1.2);
      const w = Math.sin(t * 18) * 0.07 * bn.wob;
      const spread = 1 + (0.5 - bn.sy) * 1.2 - w * 0.6;
      bn.m.scale.set(spread, bn.sy + w, spread);
    }

    // butterfly by day, firefly by night
    const bf = this.butterfly;
    if (bf) {
      const u = t * 0.32;
      const x = bf.cx + Math.sin(u) * bf.rx, z = bf.cz + Math.sin(u * 2) * bf.rz;
      const y = 1.15 + Math.sin(t * 1.7) * 0.25;
      const night = !!sky.night;
      bf.g.visible = !night;
      if (!night) {
        bf.g.position.set(x, y, z);
        bf.g.rotation.y = Math.atan2(Math.cos(u) * bf.rx, 2 * Math.cos(u * 2) * bf.rz);
        const flap = 0.15 + Math.abs(Math.sin(t * 16)) * 1.1;
        for (const [wing, s] of bf.wings) wing.rotation.z = s * flap;
      }
      bf.fly.position.set(x, y, z);
      bf.fly.material.opacity = night ? 0.55 + 0.45 * Math.sin(t * 3.1) : 0;
    }

    // night: the ceiling lights now and then flicker for a moment
    if (sky.night && (t % 23) < 0.45) {
      const f = Math.sin(t * 70) > 0 ? 0.35 : 1;
      for (const l of this.ceilLights || []) l.intensity *= f;
    }

    this.animateCat(t, dt);
    this.updateFx(dt);
  }

  // ------------------------------------------------------------ scene packs

  buildScene() {
    const def = this.plan.scene;
    if (this.room) this.scene.remove(this.room);
    this.room = new THREE.Group();
    this.scene.add(this.room);
    this.screens.clear();
    this.blinkers = [];
    this.bobbers = [];
    this.flames = [];
    this.pendants = [];
    this.pulsers = [];
    this.windowMat = null;
    this.clearMat = null;
    this.stars = null;
    this.planet = null;
    this.scene.background = def.background === null ? null : new THREE.Color(def.background || def.sky || '#9fd3ef');
    if (def.fog) this.scene.fog = new THREE.Fog(def.fog[0], def.fog[1], def.fog[2]);

    if (def.water) {
      const geo = new THREE.PlaneGeometry(160, 160, 80, 80);
      geo.rotateX(-Math.PI / 2);
      this.water = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: def.water.color, roughness: 0.35, metalness: 0.05, flatShading: true,
      }));
      this.water.position.set(def.W / 2, -0.08, def.D / 2);
      this.water.receiveShadow = true;
      this.waterBase = geo.attributes.position.array.slice();
      this.room.add(this.water);
      if (def.water.island) {
        const [cx, cz, rx, rz] = def.water.island;
        const sh = new THREE.Mesh(new THREE.CircleGeometry(1, 48),
          new THREE.MeshStandardMaterial({ color: def.water.shallow, transparent: true, opacity: 0.7, roughness: 0.5 }));
        sh.rotation.x = -Math.PI / 2;
        sh.scale.set(rx, rz, 1);
        sh.position.set(cx, -0.035, cz);
        this.room.add(sh);
      }
    }
    for (const p of def.props) this.buildSceneProp(p);
    this.installFloorShadows();
    this.fitCamera3D(true);
  }

  // Top of the ground (sand, dock…) under a point, ignoring anything taller
  // than a step. Props stand on it; y0 in the manifest is relative to it.
  surfaceAt(x, z) {
    this.room.updateMatrixWorld(true); // boxes added so far have no world matrix until a render
    return this.surfaceBelow(x, z, 0.6, 2);
  }

  buildSceneProp(p) {
    const flat = ['sandbase', 'floor', 'wall', 'sign', 'pendant', 'stars', 'planet', 'lamp'];
    const ground = (p.m && p.m.startsWith('patch-')) || flat.includes(p.special) || p.abs ? 0 : this.surfaceAt(p.x + (p.w || 0) / 2, p.y + (p.d || 0) / 2);
    if (p.special === 'fire') return this.buildFire(p.x, p.y, ground + (p.y0 || 0), p);
    if (p.special === 'target') return this.buildTarget(p, ground);
    if (p.special === 'well') return this.buildWell(p, ground);
    if (p.special === 'map') return this.buildMap({ ...p, y0: ground + (p.y0 ?? 0.78) });
    if (p.special === 'dock') return this.buildDock(p);
    if (p.special === 'floor') return this.buildFloor(p);
    if (p.special === 'stars') return this.buildStars(p);
    if (p.special === 'lamp') {
      // an unseen ceiling light
      const l = new THREE.PointLight(p.color || '#ffffff', p.intensity ?? 1, p.range || 6);
      l.position.set(p.x, p.z || 2.3, p.y);
      this.room.add(l);
      return;
    }
    if (p.special === 'planet') return this.buildPlanet(p);
    if (p.special === 'glow') {
      // an emissive strip or panel (light bars, screens, floor markings)
      const m = this.boxMesh(p.x, p.y, ground + (p.y0 || 0), p.w, p.d, p.h || 0.03, 0, {
        mat: new THREE.MeshStandardMaterial({ color: p.color || '#5ad1ff', emissive: p.color || '#5ad1ff', emissiveIntensity: p.intensity ?? 1.2 }), shadow: false,
      });
      if (p.pulse) (this.pulsers = this.pulsers || []).push({ m, base: p.intensity ?? 1.2, ph: p.x + p.y });
      return m;
    }
    if (p.special === 'wall') return this.buildWall(p);
    if (p.special === 'sign') return this.buildSign(p);
    if (p.special === 'pendant') return this.buildPendant(p);
    if (p.special === 'box') return this.boxMesh(p.x, p.y, ground + (p.y0 || 0), p.w, p.d, p.h, new THREE.Color(p.color || '#888').getHex(), { rough: p.rough ?? 0.8, metal: p.metal || 0 });
    if (p.special === 'glass') return this.boxMesh(p.x, p.y, ground + (p.y0 || 0), p.w, p.d, p.h, 0, { mat: this.glassMat(), shadow: false });
    if (p.special === 'sandbase') {
      // a flat bed of sand under the island so seams between sand patches
      // show sand (and can be stood on) instead of the sea
      const m = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.5, 40),
        new THREE.MeshStandardMaterial({ color: p.color || '#d9a46c', roughness: 1 }));
      m.scale.set(p.rx, 1, p.rz);
      m.position.set(p.x, (p.top ?? 0.27) - 0.25, p.y);
      m.receiveShadow = true;
      this.room.add(m);
      return;
    }
    const name = p.m ? `scene:${p.m}` : p.f;
    const m = this.place(name, p.x, p.y, p.w, p.d, {
      rot: ((p.rot || 0) * Math.PI) / 180, y0: ground + (p.y0 || 0), h: p.h || null, stretch: !!p.stretch,
    });
    if (m && p.bob) this.bobbers.push({ m, y: m.position.y, ph: p.x * 0.7 });
  }

  buildFire(x, y, ground = 0.25, opts = {}) {
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 1 });
    for (let i = 0; i < 3; i++) {
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.75, 8), wood);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = (i * Math.PI) / 3;
      log.position.y = 0.32;
      log.castShadow = true;
      g.add(log);
    }
    const stone = new THREE.MeshStandardMaterial({ color: 0x8a8a8a, roughness: 1, flatShading: true });
    for (let i = 0; i < (opts.stones === false ? 0 : 9); i++) {
      const a = (i / 9) * Math.PI * 2;
      const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.09), stone);
      r.position.set(Math.cos(a) * 0.45, 0.3, Math.sin(a) * 0.45);
      r.castShadow = true;
      g.add(r);
    }
    const outer = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.55, 7), new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.9 }));
    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.38, 7), new THREE.MeshBasicMaterial({ color: 0xffe066 }));
    outer.position.y = 0.6; inner.position.y = 0.55;
    const light = new THREE.PointLight(0xffa040, 1.4, 6);
    light.position.y = 0.9;
    g.add(outer, inner, light);
    g.position.set(x, ground - 0.25, y); // parts are laid out for a 0.25 sand top
    if (opts.scale) g.scale.setScalar(opts.scale);
    this.room.add(g);
    this.flames.push({ outer, inner, light });
  }

  // Floor: planks, tiles or a checkerboard over a rectangle.
  buildFloor(p) {
    const dark = this.pal.dark;
    const a = p.color || (dark ? '#4a3f35' : '#e3cfb0');
    const b = p.color2 || (dark ? '#3e342b' : '#d6bf9c');
    const tex = this.patternTexture((c, s) => {
      c.fillStyle = a; c.fillRect(0, 0, s, s);
      if (p.pattern === 'checker') {
        c.fillStyle = b; c.fillRect(0, 0, s / 2, s / 2); c.fillRect(s / 2, s / 2, s / 2, s / 2);
      } else {
        c.strokeStyle = b; c.lineWidth = 3;
        for (let i = 0; i <= 4; i++) { c.beginPath(); c.moveTo(0, (i * s) / 4); c.lineTo(s, (i * s) / 4); c.stroke(); }
        for (let i = 0; i < 4; i++) { const x = (((i * 37) % 4) + 0.5) * (s / 4); c.beginPath(); c.moveTo(x, (i * s) / 4); c.lineTo(x, ((i + 1) * s) / 4); c.stroke(); }
      }
    });
    tex.repeat.set(p.w / (p.tile || 2), p.d / (p.tile || 2));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.d), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(p.x + p.w / 2, p.y0 || 0.002, p.y + p.d / 2);
    m.receiveShadow = true;
    this.room.add(m);
  }

  // Wall along x (axis "x": from x to x+len at depth y) or along z (axis
  // "z": from y to y+len at x), with optional window/door openings
  // [from, length, bottom, top] measured along the wall.
  buildWall(p) {
    const h = p.h || 2.4, t = p.t || 0.12;
    const mat = new THREE.MeshStandardMaterial({ color: p.color || (this.pal.dark ? '#4a4640' : '#f1ebe0'), roughness: 0.95 });
    if (p.clear) {
      this.clearMat = this.clearMat || new THREE.MeshPhysicalMaterial({ color: '#9fd8ff', transparent: true, opacity: 0.12, roughness: 0.05, depthWrite: false });
    } else if (!this.windowMat) {
      this.windowMat = new THREE.MeshStandardMaterial({ color: this.plan.scene.sky || '#a9d4f2', emissive: this.plan.scene.sky || '#a9d4f2', emissiveIntensity: 0.6 });
    }
    const paneMat = p.clear ? this.clearMat : this.windowMat;
    const seg = (a, len, z0, z1) => {
      if (len <= 0.001 || z1 - z0 <= 0.001) return;
      if (p.axis === 'z') this.boxMesh(p.x - t, p.y + a, z0, t, len, z1 - z0, 0, { mat });
      else this.boxMesh(p.x + a, p.y - t, z0, len, t, z1 - z0, 0, { mat });
    };
    const holes = (p.holes || []).slice().sort((u, v) => u[0] - v[0]);
    let at = 0;
    for (const [from, len, bot, top] of holes) {
      seg(at, from - at, 0, h);
      seg(from, len, 0, bot);
      seg(from, len, top, h);
      if (bot > 0.05) {
        // window pane + a mullion in the middle
        const pane = new THREE.Mesh(new THREE.PlaneGeometry(len, top - bot), paneMat);
        if (p.axis === 'z') { pane.rotation.y = Math.PI / 2; pane.position.set(p.x - t / 2, (bot + top) / 2, p.y + from + len / 2); }
        else pane.position.set(p.x + from + len / 2, (bot + top) / 2, p.y - t / 2);
        this.room.add(pane);
        const frame = new THREE.Color(p.frame || '#2b2926').getHex();
        for (let k = 1; k < Math.round(len / 1.2); k++) {
          const f = from + (len * k) / Math.round(len / 1.2);
          if (p.axis === 'z') this.boxMesh(p.x - 0.04, p.y + f - 0.03, bot, 0.04, 0.06, top - bot, frame);
          else this.boxMesh(p.x + f - 0.03, p.y - 0.04, bot, 0.06, 0.04, top - bot, frame);
        }
        if (p.axis === 'z') this.boxMesh(p.x - 0.02, p.y + from, bot - 0.05, 0.14, len, 0.05, frame);
        else this.boxMesh(p.x + from, p.y - 0.02, bot - 0.05, len, 0.14, 0.05, frame);
      } else if (p.door) {
        const door = new THREE.Color(p.door).getHex();
        if (p.axis === 'z') this.boxMesh(p.x - 0.06, p.y + from + 0.05, 0, 0.05, len - 0.1, top - 0.05, door);
        else this.boxMesh(p.x + from + 0.05, p.y - 0.06, 0, len - 0.1, 0.05, top - 0.05, door);
      }
      at = from + len;
    }
    seg(at, (p.len || 0) - at, 0, h);
  }

  // Text on a board, flat against a wall (face "+z" or "+x").
  buildSign(p) {
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = Math.round(512 * p.h / p.w);
    const c = cv.getContext('2d');
    c.fillStyle = p.bg || '#2b2b2b'; c.fillRect(0, 0, cv.width, cv.height);
    if (p.border) { c.strokeStyle = p.border; c.lineWidth = 14; c.strokeRect(7, 7, cv.width - 14, cv.height - 14); }
    c.fillStyle = p.fg || '#fff';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    const lines = String(p.text || '').split('\n');
    const size = Math.min(cv.height / (lines.length + 0.6), (cv.width * 1.6) / Math.max(...lines.map((l) => l.length), 1));
    c.font = `700 ${Math.round(size)}px ${p.font || 'ui-rounded, "Comic Sans MS", system-ui, sans-serif'}`;
    lines.forEach((l, i) => c.fillText(l, cv.width / 2, (cv.height * (i + 0.8)) / (lines.length + 0.6)));
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, emissive: p.glow ? '#ffffff' : '#000000', emissiveMap: p.glow ? tex : null, emissiveIntensity: p.glow ? 0.9 : 0 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h), mat);
    if (p.face === '+x') { m.rotation.y = Math.PI / 2; m.position.set(p.x + 0.01, p.z, p.y); }
    else m.position.set(p.x, p.z, p.y + 0.01);
    this.room.add(m);
  }

  // A field of stars on a big sphere around the scene.
  buildStars(p) {
    const n = p.count || 900, r = p.r || 70;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, k = Math.sqrt(1 - u * u);
      pos[i * 3] = this.plan.W / 2 + Math.cos(a) * k * r;
      pos[i * 3 + 1] = u * r * 0.6;
      pos[i * 3 + 2] = this.plan.D / 2 + Math.sin(a) * k * r;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(g, new THREE.PointsMaterial({ color: '#ffffff', size: p.size || 0.35, sizeAttenuation: true, fog: false }));
    this.room.add(this.stars);
  }

  // A planet (with an optional ring) out beyond the windows.
  buildPlanet(p) {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 128;
    const c = cv.getContext('2d');
    const cols = p.colors || ['#e08a5a', '#c76b45', '#f0b27a', '#a85a3c'];
    for (let y = 0; y < 128; y += 4) { c.fillStyle = cols[Math.floor((Math.sin(y * 0.21) + 1) * 1.99) % cols.length]; c.fillRect(0, y, 256, 4); }
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const planet = new THREE.Mesh(new THREE.SphereGeometry(p.r || 6, 40, 24), new THREE.MeshStandardMaterial({ map: tex, roughness: 1, fog: false }));
    planet.position.set(p.x, p.z || 0, p.y);
    planet.rotation.z = 0.35;
    this.room.add(planet);
    if (p.ring) {
      const ring = new THREE.Mesh(new THREE.RingGeometry((p.r || 6) * 1.3, (p.r || 6) * 1.75, 64),
        new THREE.MeshBasicMaterial({ color: p.ring, transparent: true, opacity: 0.4, side: THREE.DoubleSide, fog: false }));
      ring.position.copy(planet.position);
      ring.rotation.x = -Math.PI / 2 + 0.45;
      ring.rotation.y = 0.3;
      this.room.add(ring);
    }
    this.planet = planet;
  }

  // An archery target on a wooden stand, facing `yaw` degrees.
  buildTarget(p, ground) {
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x7a5232, roughness: 1 });
    for (const dz of [-0.28, 0.28]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.2, 0.06), wood);
      leg.position.set(-0.12, 0.6, dz); leg.rotation.z = 0.18; leg.castShadow = true; g.add(leg);
    }
    const cv = document.createElement('canvas'); cv.width = cv.height = 128;
    const c = cv.getContext('2d');
    ['#f4efe2', '#d23c2f', '#f4efe2', '#d23c2f', '#f2c14e'].forEach((col, i) => {
      c.fillStyle = col; c.beginPath(); c.arc(64, 64, 62 - i * 12, 0, Math.PI * 2); c.fill();
    });
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.38, 32), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }));
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.08, 32), new THREE.MeshStandardMaterial({ color: 0xd8c08a, roughness: 1 }));
    back.rotation.z = Math.PI / 2; back.position.set(0, 0.95, 0); back.castShadow = true;
    face.rotation.y = Math.PI / 2; face.position.set(0.045, 0.95, 0);
    g.add(back, face);
    g.rotation.y = ((p.yaw ?? -90) * Math.PI) / 180 + Math.PI / 2;
    g.position.set(p.x, ground, p.y);
    this.room.add(g);
  }

  // A stone well with a little roof and a bucket.
  buildWell(p, ground) {
    const g = new THREE.Group();
    const stone = new THREE.MeshStandardMaterial({ color: 0x8d8a84, roughness: 1, flatShading: true });
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.6, 12, 1, true), stone);
    ring.material.side = THREE.DoubleSide; ring.position.y = 0.3; ring.castShadow = true;
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), new THREE.MeshStandardMaterial({ color: 0x2f6f9a, roughness: 0.2 }));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.35;
    const wood = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 1 });
    for (const dx of [-0.5, 0.5]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.3, 0.08), wood); post.position.set(dx, 0.95, 0); post.castShadow = true; g.add(post); }
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.85, 0.45, 4), new THREE.MeshStandardMaterial({ color: 0x9c3b2e, roughness: 0.9 }));
    roof.position.y = 1.8; roof.rotation.y = Math.PI / 4; roof.castShadow = true;
    const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.16, 10), wood);
    bucket.position.set(0, 1.05, 0);
    g.add(ring, water, roof, bucket);
    g.position.set(p.x, ground, p.y);
    this.room.add(g);
  }

  // A hanging lamp: cord, shade and a soft warm light.
  buildPendant(p) {
    const top = p.top || 2.5, drop = p.drop || 0.8;
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, drop, 4), new THREE.MeshStandardMaterial({ color: 0x222222 }));
    cord.position.set(p.x, top - drop / 2, p.y);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 16, 1, true), new THREE.MeshStandardMaterial({ color: p.color || '#2f3b36', side: THREE.DoubleSide, roughness: 0.6 }));
    shade.position.set(p.x, top - drop, p.y);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffe7b0' }));
    bulb.position.set(p.x, top - drop - 0.07, p.y);
    const light = new THREE.PointLight(0xffd9a0, 0.7, 3.5);
    light.position.set(p.x, top - drop - 0.15, p.y);
    this.room.add(cord, shade, bulb, light);
    this.pendants.push(light);
  }

  // A plank boardwalk on posts, from the shore out over the water.
  buildDock(p) {
    const top = p.top ?? 0.32;
    const planks = [0x9c6b3c, 0xa8774a, 0x8f6236];
    for (let z = p.y, i = 0; z < p.y + p.d - 0.05; z += 0.3, i++) {
      this.boxMesh(p.x, z, top - 0.07, p.w, 0.26, 0.07, planks[i % 3], { rough: 0.95 });
    }
    for (const side of [p.x - 0.02, p.x + p.w - 0.1]) this.boxMesh(side, p.y, top - 0.16, 0.12, p.d, 0.1, 0x6b4426);
    for (let z = p.y + 0.1; z < p.y + p.d; z += 1.6) {
      for (const x of [p.x + 0.02, p.x + p.w - 0.14]) this.boxMesh(x, z, -0.9, 0.12, 0.12, top + 0.95, 0x5c3a20);
    }
    // a rope post at the far end
    this.boxMesh(p.x + p.w - 0.2, p.y + 0.05, top - 0.1, 0.14, 0.14, 0.55, 0x5c3a20);
  }

  buildMap(p) {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 160;
    const c = cv.getContext('2d');
    c.fillStyle = '#e9d5a6'; c.fillRect(0, 0, 256, 160);
    c.strokeStyle = '#8a6a3a'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(40, 120); c.bezierCurveTo(30, 60, 90, 20, 140, 40); c.bezierCurveTo(200, 60, 230, 110, 180, 135); c.bezierCurveTo(130, 150, 60, 150, 40, 120); c.stroke();
    c.setLineDash([6, 6]); c.strokeStyle = '#6b4426'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(70, 110); c.quadraticCurveTo(110, 60, 165, 95); c.stroke();
    c.setLineDash([]); c.strokeStyle = '#c0392b'; c.lineWidth = 5;
    c.beginPath(); c.moveTo(158, 88); c.lineTo(174, 104); c.moveTo(174, 88); c.lineTo(158, 104); c.stroke();
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.d), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(p.x + p.w / 2, (p.y0 || 0.78) + 0.005, p.y + p.d / 2);
    m.receiveShadow = true;
    this.room.add(m);
  }

  animateScene(t, sky) {
    const def = this.plan.scene;
    if (this.water) {
      const pos = this.water.geometry.attributes.position;
      const a = pos.array, b = this.waterBase;
      for (let i = 0; i < a.length; i += 3) {
        a[i + 1] = Math.sin(b[i] * 0.45 + t * 1.1) * 0.06 + Math.cos(b[i + 2] * 0.38 + t * 0.8) * 0.05;
      }
      pos.needsUpdate = true;
      if ((this.waterTick = (this.waterTick || 0) + 1) % 3 === 0) this.water.geometry.computeVertexNormals();
    }
    for (const b of this.bobbers) {
      b.m.position.y = b.y + Math.sin(t * 0.9 + b.ph) * 0.05;
      b.m.rotation.x = Math.sin(t * 0.7 + b.ph) * 0.015;
    }
    for (const f of this.flames) {
      const k = 0.85 + Math.sin(t * 13) * 0.08 + Math.sin(t * 7.3) * 0.07;
      f.outer.scale.set(1, k, 1);
      f.inner.scale.set(1, 1.6 - k * 0.6, 1);
      f.light.intensity = (sky.night ? 3 : 1.2) * k;
    }
    if (this.scene.background && !def.fixedSky) this.scene.background.set(sky.night ? '#13213f' : (def.background || def.sky || '#9fd3ef'));
    if (this.planet) this.planet.rotation.y = t * 0.03;
    if (this.stars) this.stars.rotation.y = t * 0.004;
    for (const g of this.pulsers || []) g.m.material.emissiveIntensity = g.base * (0.65 + 0.35 * Math.sin(t * 2.2 + g.ph));
    if (this.windowMat) { this.windowMat.color.set(sky.night ? '#1d2747' : def.sky); this.windowMat.emissive.set(sky.night ? '#1d2747' : def.sky); }
    for (const l of this.pendants || []) l.intensity = sky.night ? 1.6 : 0.7;
    if (this.scene.fog) this.scene.fog.color.set(sky.night ? '#1b2a4a' : def.fog[0]);
  }

  // ------------------------------------------------------------ camera

  fitCamera3D(reset) {
    const { W, D } = this.plan;
    const vf = this.viewFloor || 0;
    const ids = (this.plan.floors || [0]).filter((f) => this.plan.scene || f <= vf);
    const lo = ids.length ? Math.min(...ids) : 0;
    const hi = ids.length ? Math.max(...ids) : 0;
    const fy = (this.plan.scene ? 0 : vf) * LEVEL_H;
    const multi = !this.plan.scene && ids.length > 1;
    const span = Math.max(0, hi - lo);
    const center = new THREE.Vector3(W / 2, fy + 0.6, D / 2);
    if (reset || !this.fitted) {
      const dist = multi ? 48 : 40;
      this.camera.position.set(center.x + dist * 0.62, center.y + dist * 0.58, center.z + dist * 0.62);
      this.controls.target.copy(center);
      this.camera.zoom = this.compact ? 1 : (multi ? 1.05 : 1.25);
      this.fitted = true;
    }
    this.camera.lookAt(this.controls.target);
    this.camera.updateMatrixWorld(true);
    // Fit the room's corners into the view (include stacked floors when present).
    const inv = this.camera.matrixWorldInverse;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    const yLo = this.plan.scene ? 0 : (lo * LEVEL_H - FLOOR_T);
    const yHi = this.plan.viewH || (hi * LEVEL_H + WALL_H);
    for (const x of [0, W]) for (const y of [yLo, yHi]) for (const z of [0, D]) {
      const v = new THREE.Vector3(x, y, z).applyMatrix4(inv);
      minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x); minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
    }
    const aspect = this.cw / this.ch;
    let w = (maxX - minX) * 1.06, h = (maxY - minY) * 1.1;
    // Leave room for screen-space badges and bubbles in a small PiP window.
    if (this.compact) h *= this.ch / Math.max(80, this.ch - 48);
    if (w / h > aspect) h = w / aspect; else w = h * aspect;
    const cxv = (minX + maxX) / 2, cyv = (minY + maxY) / 2;
    Object.assign(this.camera, { left: cxv - w / 2, right: cxv + w / 2, top: cyv + h / 2, bottom: cyv - h / 2 });
    this.camera.updateProjectionMatrix();
    // Key light stays angled. On a stacked office it does not cast; each
    // storey copies this direction into its own shadow light.
    this.sun.position.set(center.x - 6, fy + (multi ? 18 : 14), center.z - 3);
    this.sun.target.position.copy(center);
    if (this.floorShadowLights && this.floorShadowLights.length) {
      const dx = this.sun.position.x - center.x;
      const dy = this.sun.position.y - center.y;
      const dz = this.sun.position.z - center.z;
      for (const light of this.floorShadowLights) {
        const floorY = light.userData.floor * LEVEL_H;
        light.position.set(center.x + dx, floorY + 0.6 + dy, center.z + dz);
        light.target.position.set(center.x, floorY + 0.6, center.z);
      }
    }
    const sc = this.sun.shadow.camera;
    const r = Math.max(W, D) * 0.75;
    Object.assign(sc, { left: -r, right: r, top: r + span * LEVEL_H, bottom: -r - span * LEVEL_H, near: 1, far: multi ? 80 : 50 });
    sc.updateProjectionMatrix();
  }

  resize() {
    super.resize();
    if (!this.gl) return;
    this.gl.setSize(this.cw, this.ch, false);
    this.gl.domElement.style.width = this.cw + 'px';
    this.gl.domElement.style.height = this.ch + 'px';
    if (this.room) this.fitCamera3D(false);
  }

  // ------------------------------------------------------------ actors

  actorFor(p) {
    let a = this.actors.get(p.key);
    if (a) return a;
    const look = blobLookFor(p);
    const blob = buildBlob(look, CHAR_HEIGHT * 0.84 * (p.s && p.s.subagent ? 0.8 : 1));
    const obj = blob.root;
    const prop = new THREE.Group();
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.04), new THREE.MeshStandardMaterial({ color: 0xc96442 }));
    prop.add(cup, book);
    this.scene.add(obj, prop);
    // selection ring (Team panel / click): shown when this.focusKey matches
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.5, 40), new THREE.MeshBasicMaterial({
      color: look.color, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide,
    }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; ring.visible = false;
    obj.add(ring);
    a = { obj, blob, look, prop, cup, book, ring, yaw: 0, last: { x: p.x, y: p.y }, hop: 0 };
    this.actors.set(p.key, a);
    tagFloorShadowMaterials(obj, this.floorShadowCount || 0);
    tagFloorShadowMaterials(prop, this.floorShadowCount || 0);
    return a;
  }

  // Blobs have no skeleton: walk / sit / wave / nap are simple transforms
  // on the hover group (float height, bob, lean, squash) plus eye blinks.
  animateBlob(a, p, st, t, dt) {
    const { hover, eyes, height } = a.blob;
    const k = t + p.phase;
    let y = 0.12 + Math.sin(k * 2.1) * 0.025, lean = 0, roll = 0, sq = 1;
    const act = st.act;
    if (st.pose === 'walk') {
      y = 0.14 + Math.abs(Math.sin(k * 8)) * 0.07;
      lean = 0.2; sq = 1 + Math.sin(k * 16) * 0.05;
    } else if (act === 'wave') {
      y = 0.12 + Math.abs(Math.sin(k * 5)) * 0.2;
      roll = Math.sin(k * 10) * 0.18; sq = 1 + Math.sin(k * 10 + 1) * 0.06;
    } else if (act === 'nap') {
      y = 0.03; roll = 0.32; sq = 0.86;
    } else if (st.pose === 'sit') {
      // hover just above the seat
      y = 0.04 + Math.sin(k * 1.6) * 0.02;
      if (act === 'think') roll = Math.sin(k * 1.4) * 0.09;
      else if (act === 'type') { y += Math.abs(Math.sin(k * 11)) * 0.025; lean = 0.12; }
    } else if (act === 'station') {
      if (p.s.status === 'thinking') roll = Math.sin(k * 1.4) * 0.09;
      else { y += Math.abs(Math.sin(k * 11)) * 0.03; lean = 0.12; }
    } else if (act && act !== 'idle') {
      y += Math.abs(Math.sin(k * 4)) * 0.05; lean = 0.08;
    }
    hover.position.y = y;
    hover.rotation.x += (lean - hover.rotation.x) * Math.min(1, dt * 8);
    hover.rotation.z += (roll - hover.rotation.z) * Math.min(1, dt * 8);
    hover.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq));
    // blink every few seconds; closed while napping
    const blink = act === 'nap' ? 0.12 : ((k * 0.31) % 1 < 0.035 ? 0.15 : 1);
    for (const e of eyes) e.scale.y = blink;
    a.blob.glow.material.opacity = 0.35 + 0.2 * (1 - Math.min(1, y / 0.35));
    return height;
  }

  play() {}

  facing(p, st) {
    if (st.pose === 'walk') return null;
    if (p.mode === 'work' && p.desk) {
      if (p.desk.yaw != null) return p.desk.yaw;
      return p.desk.side === 'n' ? 0 : Math.PI;
    }
    const q = p.poi;
    if (!q) return null;
    if (q.yaw != null) return q.yaw;
    if (q.pair) {
      const other = this.plan.pois.find((o) => o.pair === q.pair && o !== q);
      return Math.atan2(other.x - q.x, 0);
    }
    if (q.act === 'vending' || q.act === 'plant') return -Math.PI / 2;
    return st.face === 'back' ? Math.PI : 0;
  }

  syncActors(dt) {
    for (const [k, a] of this.actors) {
      if (!this.people.has(k)) { this.scene.remove(a.obj, a.prop); this.actors.delete(k); }
    }
    for (const p of this.people.values()) {
      const a = this.actorFor(p);
      const st = this.stateOf(p);
      p.pose = st.pose;
      // position + facing
      const dx = p.x - a.last.x, dy = p.y - a.last.y;
      let want = st.pose !== 'walk' && p.poi && p.poi.float ? null : this.facing(p, st);
      if (want == null && Math.hypot(dx, dy) > 0.001) want = Math.atan2(dx, dy);
      if (want != null) {
        let d = want - a.yaw;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        a.yaw += d * Math.min(1, dt * 10);
      }
      a.last = { x: p.x, y: p.y };
      a.obj.rotation.y = a.yaw;
      const fl = this.floorOf(p);
      const fy = (this.plan.scene ? 0 : fl) * LEVEL_H;
      const seatY = st.pose === 'sit' ? this.seatHeight(p.x, p.y, st.sitZ, fl)
        : this.plan.terrain ? this.groundHeight(p.x, p.y) : fy;
      // The sit pose's torso leans back past its origin; slide the body
      // forward so the back rests against the backrest instead of in it.
      const fwd = st.pose === 'sit' ? SIT_FORWARD * 0.4 : 0;
      let lift = 0;
      if (st.pose !== 'walk' && p.poi && p.poi.float) {
        // zero gravity: drift up and down, slowly turning
        const k = this.t / 1000 + p.phase;
        lift = 0.45 + Math.sin(k * 0.9) * 0.18;
        a.yaw += dt * 0.35;
      }
      a.obj.position.set(p.x + Math.sin(a.yaw) * fwd, seatY + lift, p.y + Math.cos(a.yaw) * fwd);
      if (this.floorShadowCount) {
        setObjectFloorLayer(a.obj, fl);
        setObjectFloorLayer(a.prop, fl);
      }
      this.animateBlob(a, p, st, this.t / 1000, dt);
      // Floors above the picker are culled. Lower floors stay fully visible.
      const culled = !this.plan.scene && fl > (this.viewFloor || 0);
      a.obj.visible = !culled;
      const want2 = culled ? 0 : (filterMatch(p.s, this.filter) ? 1 : 0.16);
      a.alpha = a.alpha ?? 1;
      if (Math.abs(a.alpha - want2) > 0.005) {
        a.alpha += (want2 - a.alpha) * Math.min(1, dt * 8);
        a.obj.traverse((o) => {
          if (!o.isMesh || o === a.ring) return;
          for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
            if (m.userData.o0 == null) { m.userData.o0 = m.opacity; m.userData.t0 = m.transparent; }
            const tr = m.userData.t0 || a.alpha < 0.99;
            if (m.transparent !== tr) { m.transparent = tr; m.needsUpdate = true; }
            m.opacity = m.userData.o0 * a.alpha;
          }
        });
      }
      const focused = this.focusKey === p.key;
      a.ring.visible = focused;
      if (focused) {
        const k = 1 + 0.12 * Math.sin(this.t / 220);
        a.ring.scale.setScalar(k);
        a.blob.glow.material.opacity = 0.9;
      }
      // hand-held props float beside the blob
      a.cup.visible = !culled && (st.act === 'coffee' || st.act === 'water' || (st.pose !== 'walk' && p.poi && p.poi.prop === 'cup'));
      a.book.visible = !culled && st.act === 'read';
      a.prop.visible = a.cup.visible || a.book.visible;
      if (a.cup.visible || a.book.visible) {
        a.obj.updateMatrixWorld(true);
        const hand = new THREE.Vector3(0.3, a.blob.height * 0.45 + a.blob.hover.position.y, 0.18);
        a.obj.localToWorld(hand);
        a.prop.position.copy(hand);
        a.prop.rotation.y = a.yaw;
        a.cup.material.color.set(st.act === 'water' ? 0x9fd3ff : 0xffffff);
      }
    }
  }

  // Highest surface below `limit` under (x, z). Sampled at the point and
  // four spots around it so a gap between dock planks or sand patches
  // doesn't read as the sea floor. World matrices must be current.
  surfaceBelow(x, z, limit, from = 1.2) {
    if (!this.room) return 0;
    const ray = new THREE.Raycaster();
    const down = new THREE.Vector3(0, -1, 0);
    let best = 0;
    for (const [dx, dz] of [[0, 0], [0.09, 0], [-0.09, 0], [0, 0.09], [0, -0.09]]) {
      ray.set(new THREE.Vector3(x + dx, from, z + dz), down);
      for (const h of ray.intersectObject(this.room, true)) {
        if (h.point.y < limit && h.point.y > best) best = h.point.y;
      }
    }
    return best;
  }

  // Height of the walkable surface (sand, dock planks…) on terrain scenes.
  groundHeight(x, y) {
    const key = `${Math.round(x * 4)},${Math.round(y * 4)}`;
    this.ground = this.ground || new Map();
    if (this.ground.has(key)) return this.ground.get(key);
    const v = this.surfaceBelow(x, y, 0.55);
    this.ground.set(key, v);
    return v;
  }

  // Kenney's `sit` clip is a sit-on-the-floor pose (seat at the model's
  // origin), so lift the character to whatever surface is under the seat
  // point: chair cushion, stool, sofa or beanbag. Measured once per spot.
  seatHeight(x, y, fallback, floor = 0) {
    const fy = (this.plan.scene ? 0 : floor) * LEVEL_H;
    const key = `${x.toFixed(2)},${y.toFixed(2)},${floor}`;
    this.seats = this.seats || new Map();
    if (this.seats.has(key)) return this.seats.get(key);
    const best = this.surfaceBelow(x, y, fy + 0.75, fy + 1.35);
    const v = best > fy + 0.05 ? best : fy + (fallback || 0);
    this.seats.set(key, v);
    return v;
  }

  // ------------------------------------------------------------ frame

  draw() {
    const c = this.ctx;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    c.clearRect(0, 0, this.cw, this.ch);
    if (!this.loaded) {
      c.fillStyle = this.pal.text;
      c.globalAlpha = 0.7;
      c.font = '600 14px ui-sans-serif, system-ui, sans-serif';
      c.textAlign = 'center';
      c.fillText(this.loadError ? `3D failed: ${this.loadError}` : '', this.cw / 2, this.ch / 2);
      c.globalAlpha = 1;
      return false;
    }
    if (this.room !== undefined && this.builtPlan === this.plan) {
      // fine
    } else {
      this.build();
      this.builtPlan = this.plan;
      this.room.updateMatrixWorld(true);
      this.seats = new Map();
      this.ground = new Map();
      for (const a of this.actors.values()) this.scene.remove(a.obj, a.prop);
      this.actors.clear();
    }
    const dt = Math.min(0.05, this.clock.getDelta());
    const t = this.t / 1000;

    // lighting follows the time of day
    const sky = skyNow();
    this.sky = sky;
    this.sun.intensity = sky.sun;
    this.sun.color.setHex(sky.sunCol);
    this.hemi.intensity = sky.amb;
    this.hemi.color.setHex(sky.hemiSky);
    this.hemi.groundColor.setHex(sky.hemiGround);
    this.gl.toneMappingExposure = sky.exposure;
    if (this.windowMat) {
      const starry = sky.night && !this.plan.scene;
      if (starry) {
        if (this.windowMat.map !== this.starTexture()) { this.windowMat.map = this.windowMat.emissiveMap = this.starTexture(); this.windowMat.needsUpdate = true; }
        this.windowMat.color.setHex(0xffffff);
        this.windowMat.emissive.setHex(0xffffff);
        this.windowMat.emissiveIntensity = 0.85;
      } else {
        if (this.windowMat.map) { this.windowMat.map = this.windowMat.emissiveMap = null; this.windowMat.needsUpdate = true; }
        this.windowMat.color.setHex(sky.sky);
        this.windowMat.emissive.setHex(sky.sky);
        this.windowMat.emissiveIntensity = sky.night ? 0.9 : 0.6;
      }
    }
    const gk = sky.glow ?? 0.5;
    for (const g of this.glows || []) {
      const flick = 0.94 + 0.06 * Math.sin(t * 1.7 + (g.base || 1) * 3);
      if (g.light) g.light.intensity = g.base * gk * flick;
      if (g.sprite) g.sprite.material.opacity = Math.min(1, g.sbase * (0.25 + 0.75 * Math.min(1, gk))) * (gk < 0.5 ? 0.55 : 1);
      if (g.m) g.m.material.emissiveIntensity = g.ei * (0.5 + 0.5 * gk);
    }
    if (this.plan.scene) this.animateScene(t, sky);
    if (this.doorGlow) this.doorGlow.intensity = sky.door * (0.92 + 0.08 * Math.sin(t * 1.3));
    if (this.doorHalo) this.doorHalo.material.opacity = sky.halo;
    for (const l of this.ceilLights || []) l.intensity = sky.ceil;

    // screens show who is working and on what
    const occupant = new Map();
    for (const p of this.people.values()) if (p.mode === 'work' && p.desk && !p.path.length) occupant.set(p.desk, p);
    for (const [dk, scr] of this.screens) {
      const p = occupant.get(dk);
      const col = p ? STATUS_COLOR[p.s.status] : null;
      if (col) {
        const pulse = p.s.status === 'thinking' ? 0.5 + 0.35 * Math.sin(t * 3 + p.phase) : 0.8 + 0.2 * Math.sin(t * 9 + p.phase);
        scr.material.emissive.setHex(col);
        scr.material.emissiveIntensity = pulse * sky.screen;
      } else {
        scr.material.emissive.setHex(0x000000);
      }
    }
    for (const g of this.screenGlows || []) {
      const p = occupant.get(g.dk);
      const col = p ? STATUS_COLOR[p.s.status] : null;
      if (col) { g.sprite.material.color.setHex(col); g.sprite.material.opacity = Math.min(1, 0.22 + 0.45 * gk) * (this.filter && !filterMatch(p.s, this.filter) ? 0.25 : 1); }
      else g.sprite.material.opacity = 0;
    }
    // rack LEDs blink faster the more agents are busy
    let busy = 0;
    for (const p of this.people.values()) if (p.mode === 'work' && WORKING_ST.has(p.s && p.s.status)) busy++;
    this.ledClock = (this.ledClock || 0) + dt * 1000 * (1 + Math.min(3, busy * 0.45));
    for (const b of this.blinkers) {
      const on = Math.sin(this.ledClock / (180 + b.r * 37 + b.k * 53) + b.r * b.k) > 0.2 && (b.r * 4 + b.k) < Math.max(4, this.deskOf.size * 3);
      b.m.material.emissiveIntensity = on ? 1.2 : 0.05;
    }
    for (const cab of this.arcadeScreens || []) {
      if (t >= cab.until) cab.screen.material.emissive.setHSL((t * 0.05 + cab.at[0]) % 1, 0.7, 0.5);
    }
    const fbCounts = {};
    for (const q of this.plan.pois) if (q.pair && q.taken) fbCounts[q.pair] = (fbCounts[q.pair] || 0) + 1;
    if (this.rods) this.rods.forEach((r, k) => {
      const table = r.userData.table;
      const playing = (table && t < table.until) || (table && fbCounts[table.pair] >= 2);
      const base = r.userData.baseZ;
      if (base == null) return;
      r.position.z = base + (playing ? Math.sin(t * 8 + k) * 0.06 : 0);
      r.rotation.z = playing ? Math.sin(t * 12 + k) * 0.6 : 0;
    });
    this.updateBall();
    if (!this.plan.scene) this.animateInteractive(t, dt, sky);
    else if (this.catObj) this.catObj.root.visible = false;

    this.syncActors(dt);
    this.controls.update();
    this.gl.render(this.scene, this.camera);

    // overlay: bubbles + name tags, reusing the 2D drawing code
    this.hit = [];
    const heads = [];
    const v = new THREE.Vector3();
    for (const p of this.people.values()) {
      const a = this.actors.get(p.key);
      if (!a) continue;
      const fl0 = this.floorOf(p);
      if (!this.plan.scene && fl0 > (this.viewFloor || 0)) continue;
      const st = this.stateOf(p);
      const scale = p.s.subagent ? 0.8 : 1;
      const fl = this.floorOf(p);
      const floorY = (this.plan.scene ? 0 : fl) * LEVEL_H;
      const base = this.plan.terrain && st.pose !== 'sit' ? this.groundHeight(p.x, p.y) : floorY;
      const floatUp = st.pose !== 'walk' && p.poi && p.poi.float ? 0.45 + Math.sin((this.t / 1000 + p.phase) * 0.9) * 0.18 : 0;
      const top = (st.pose === 'sit' ? this.seatHeight(p.x, p.y, st.sitZ, fl) + CHAR_HEIGHT * 0.8 * scale : base + CHAR_HEIGHT * scale) + floatUp;
      v.set(p.x, top + 0.05, p.y).project(this.camera);
      const sx = (v.x + 1) / 2 * this.cw, sy = (1 - v.y) / 2 * this.ch;
      const foot = new THREE.Vector3(p.x, floorY, p.y).project(this.camera);
      const fy = (1 - foot.y) / 2 * this.ch;
      heads.push([p, { x: sx, y: sy, act: st.act }, v.z]);
      this.hit.push({ key: p.key, x0: sx - 18, x1: sx + 18, y0: sy - 24, y1: fy + 4 });
    }
    heads.sort((a, b) => b[2] - a[2]);
    if (this.compact) for (const [p, at] of heads) this.bubble(p, at);
    else this.drawTags3D(heads);
    if (this.offDuty > 0) {
      c.font = '600 11px ui-sans-serif, system-ui, -apple-system, "PingFang TC", sans-serif';
      c.textAlign = 'left';
      c.fillStyle = this.pal.text;
      c.globalAlpha = 0.65;
      c.fillText(`+${this.offDuty} ${this.offDutyLabel}`, 12, this.ch - 12);
      c.globalAlpha = 1;
    }
  }

  // ------------------------------------------------------------ demo-style overlay
  // Name tags (dark pill + kind dot), floating speech bubbles with a dotted
  // connector: orange "NEEDS YOU" card, white chat bubble (task / activity),
  // optional step progress bar. "Show all tasks" (this.showAll) adds a chat
  // bubble over every working agent; otherwise only selected + Needs-you.
  drawTags3D(heads) {
    const c = this.ctx;
    const t = this.t / 1000;
    const font = (w, px) => `${w} ${px}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`;
    const placed = [];
    const overlaps = (r) => placed.some((q) => r.x0 < q.x1 && r.x1 > q.x0 && r.y0 < q.y1 && r.y1 > q.y0);
    const wrap = (text, maxW, maxLines) => {
      const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
      const lines = [];
      let cur = '';
      for (const w of words) {
        const next = cur ? cur + ' ' + w : w;
        if (c.measureText(next).width <= maxW || !cur) cur = next;
        else { lines.push(cur); cur = w; if (lines.length === maxLines) break; }
      }
      if (lines.length < maxLines && cur) lines.push(cur);
      else if (cur && lines.length === maxLines) lines[maxLines - 1] += '…';
      return lines.map((l) => { while (c.measureText(l).width > maxW && l.length > 2) l = l.slice(0, -2) + '…'; return l; });
    };
    const rr = (x, y, w, h, r) => { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); };
    const items = [];
    for (const [p, at] of heads) {
      const s = p.s || {};
      const kind = statusKind(s);
      const needs = kind === 'needs' || kind === 'error';
      const sel = this.focusKey === p.key;
      const hov = this.hoverKey === p.key;
      const match = filterMatch(s, this.filter);
      const atDesk = p.mode === 'work';
      const working = WORKING_ST.has(s.status) && atDesk && !p.path.length;
      const showTag = sel || hov || needs || atDesk || this.showAll;
      let bubble = null;
      if (match && (needs || sel || (this.showAll && working))) {
        // speechLine reads the session object on every frame, so an SSE or
        // /api/sessions patch shows up without a reload.
        const text = needs ? (this.speechLine(s) || 'Waiting for you') : this.speechLine(s);
        if (text) bubble = { needs, err: kind === 'error', text, step: s.step, steps: s.steps };
      }
      items.push({ p, at, s, kind, sel, hov, match, showTag, bubble, prio: sel ? 3 : needs ? 2 : 1 });
    }
    // tags first (front to back order already), then bubbles by priority so the
    // selected / Needs-you ones claim space first
    const tagAt = new Map();
    for (const it of items) {
      if (!it.showTag) continue;
      const { p, at, s, kind } = it;
      const name = this.label(s);
      c.font = font(700, 10.5);
      let tx = name;
      while (c.measureText(tx).width > 110 && tx.length > 2) tx = tx.slice(0, -2) + '…';
      const w = c.measureText(tx).width + 24, h = 19;
      const x = at.x - w / 2, y = at.y - 8 - h;
      c.globalAlpha = it.match ? (it.p.mode === 'work' || it.sel || it.hov ? 1 : 0.78) : 0.22;
      c.shadowColor = 'rgba(0,0,0,.35)'; c.shadowBlur = 6; c.shadowOffsetY = 2;
      rr(x, y, w, h, 7);
      c.fillStyle = 'rgba(22,24,33,.88)'; c.fill();
      c.shadowColor = 'transparent';
      if (it.sel) { c.strokeStyle = KIND_COLOR[kind]; c.lineWidth = 1.5; c.stroke(); }
      c.fillStyle = KIND_COLOR[kind];
      c.beginPath(); c.arc(x + 10, y + h / 2, 3.4, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#f2f1f7'; c.textAlign = 'left'; c.textBaseline = 'middle';
      c.fillText(tx, x + 17, y + h / 2 + 0.5);
      // "!" badge beside Needs-you tags
      if ((kind === 'needs' || kind === 'error') && it.match) {
        const jump = Math.abs(Math.sin(t * 3.2)) * 3;
        c.fillStyle = KIND_COLOR[kind];
        c.beginPath(); c.arc(x + w + 9, y + h / 2 - jump, 8, 0, Math.PI * 2); c.fill();
        c.fillStyle = '#fff'; c.font = font(900, 11); c.textAlign = 'center';
        c.fillText('!', x + w + 9, y + h / 2 - jump + 0.5);
      }
      c.globalAlpha = 1;
      placed.push({ x0: x, x1: x + w, y0: y, y1: y + h });
      tagAt.set(p.key, { x, y, w, h });
      this.hit.push({ key: p.key, x0: x, x1: x + w + (kind === 'needs' ? 18 : 0), y0: y, y1: y + h });
    }
    for (const it of items.filter((i) => i.bubble).sort((a, b) => a.prio - b.prio)) {
      const { p, at, bubble: b } = it;
      const tag = tagAt.get(p.key);
      const anchorY = tag ? tag.y : at.y - 10;
      c.font = font(600, 11);
      const maxW = b.needs ? 168 : 150;
      const lines = wrap(b.text, maxW, b.needs ? 3 : 2);
      const head = b.needs ? 14 : 0;
      const bar = b.steps ? 12 : 0;
      const w = Math.max(b.needs ? 120 : 60, ...lines.map((l) => c.measureText(l).width)) + 20;
      const h = 10 + head + lines.length * 14 + bar + 4;
      // first free spot: straight up, then nudged left / right, then higher;
      // always inside the canvas
      let gap = 22, r = null, dx = 0;
      const mk = (g, ox) => {
        let x0 = Math.max(4, Math.min(this.cw - w - 4, at.x - w / 2 + ox));
        let y0 = Math.max(4, anchorY - g - h);
        return { x0, x1: x0 + w, y0, y1: y0 + h };
      };
      search: for (let k = 0; k < 5; k++, gap += 16) {
        for (const ox of [0, -w * 0.55, w * 0.55]) {
          const c2 = mk(gap, ox);
          if (!overlaps(c2)) { r = c2; break search; }
        }
      }
      if (!r) { gap = 22; r = mk(gap, 0); }
      gap = Math.max(6, anchorY - r.y1);
      const x = r.x0, y = r.y0;
      dx = Math.max(x + 12, Math.min(x + w - 12, at.x));
      // dotted connector down to the name tag / head
      c.save();
      c.setLineDash([2, 3]);
      c.strokeStyle = b.needs ? 'rgba(255,170,100,.95)' : 'rgba(255,255,255,.8)';
      c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(dx, y + h); c.lineTo(at.x, anchorY - 1); c.stroke();
      c.restore();
      const pulse = b.needs ? 0.5 + 0.5 * Math.sin(t * 3) : 0;
      c.shadowColor = b.needs ? `rgba(255,138,61,${0.35 + 0.3 * pulse})` : 'rgba(0,0,0,.3)';
      c.shadowBlur = b.needs ? 14 : 8; c.shadowOffsetY = 2;
      rr(x, y, w, h, 10);
      c.fillStyle = b.needs ? '#ffe7c7' : '#ffffff'; c.fill();
      c.shadowColor = 'transparent';
      if (b.needs) { c.strokeStyle = b.err ? '#f0675d' : '#ff9a4d'; c.lineWidth = 1.5; c.stroke(); }
      c.textAlign = 'left'; c.textBaseline = 'middle';
      let ty = y + 5;
      if (b.needs) {
        c.font = font(800, 8.5);
        c.fillStyle = b.err ? '#c8412f' : '#c8611a';
        c.fillText(b.err ? 'ERROR' : 'NEEDS YOU', x + 10, ty + 7);
        ty += head;
      }
      c.font = font(600, 11);
      c.fillStyle = '#25232b';
      for (const l of lines) { c.fillText(l, x + 10, ty + 8); ty += 14; }
      if (b.steps) {
        const f = Math.max(0, Math.min(1, b.step / b.steps));
        rr(x + 10, ty + 4, w - 20, 4, 2); c.fillStyle = 'rgba(0,0,0,.1)'; c.fill();
        rr(x + 10, ty + 4, (w - 20) * f, 4, 2); c.fillStyle = '#ff8a3d'; c.fill();
      }
      placed.push(r);
      this.hit.push({ key: p.key, x0: r.x0, x1: r.x1, y0: r.y0, y1: r.y1 + gap });
    }
  }

  updateBall() {
    if (!this.ball) return;
    const players = this.plan.pois.filter((q) => q.pair === 'pp' && q.taken)
      .map((q) => this.people.get(q.taken)).filter((p) => p && p.poi && p.poi.pair === 'pp' && !p.path.length);
    this.ball.visible = players.length === 2 || (this.until && this.t / 1000 < this.until.rally);
    if (!this.ball.visible) return;
    const pp = this.plan.pp;
    const k = (this.t / 900) % 2;
    const f = k < 1 ? k : 2 - k;
    this.ball.position.set(pp.x0 + 0.3 + f * (pp.x1 - pp.x0 - 0.6), 0.8 + Math.abs(Math.sin(f * Math.PI * 2)) * 0.4, pp.y);
  }

  pointer(e, click) {
    // Let OrbitControls drags through without flickering the tooltip.
    if (e.buttons && !click) return;
    super.pointer(e, click);
    // Agents win; otherwise props (lamps, doors, fridge, cat…) are clickable.
    if (!this.gl || !this.room || !this.clicks || this.plan.scene || this.hoverKey) return;
    const now = performance.now();
    let hit;
    if (!click && now - (this._pickAt || 0) < 60) hit = this._pickLast;
    else { hit = this.pickInteractive(e); this._pickAt = now; this._pickLast = hit; }
    if (hit) this.canvas.style.cursor = 'pointer';
    if (click && hit) {
      const d = this._down;
      if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6) return; // that was an orbit drag
      hit.userData.onClick();
    }
  }
}
