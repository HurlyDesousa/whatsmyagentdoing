// Synthetic cutaway of the office shadow fix.
// Renders the old single shadow map beside per-floor volumes and checks
// that an upper-floor blob, cat, and shelf still darken their own floor
// and do not darken the floor below. Uses web/floorshadow.js, the same
// module the office renderer imports.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.env.SHADOW_OUT || '/tmp/floor-shadow';
fs.mkdirSync(outDir, { recursive: true });

const html = `<!DOCTYPE html>
<meta charset="utf-8">
<script type="importmap">
{ "imports": { "three": "/node_modules/three/build/three.module.js" } }
</script>
<canvas id="view" width="960" height="700"></canvas>
<pre id="log"></pre>
<script type="module">
import * as THREE from 'three';
import {
  installFloorShadowChunk, createFloorShadowLight, mountFloorShadowLights, tagFloorShadowMaterials,
  setFloorShadowBand, setObjectFloorLayer, bindFloorShadowPasses, floorLayerBit,
} from '/web/floorshadow.js';

installFloorShadowChunk();

// Same stack spacing as the office (LEVEL_H).
const LEVEL = 2.95;
const W = 8, D = 8;
const UPPER = new THREE.Vector3(1.15, LEVEL + 0.55, 1.05);
const LOWER = new THREE.Vector3(2.15, 0.55, -1.55);
// Shelf and cat sit entirely on the upper storey. Footprints are XZ only.
const SHELF = new THREE.Vector3(-0.35, 0, -1.45);
const CAT = new THREE.Vector3(-2.15, 0, 0.55);
const SHELF_H = 1.7;

function world() {
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xfff6ea, 0xb7aa9a, 0.62));
  const sun = new THREE.DirectionalLight(0xfff1dc, 1.65);
  sun.position.set(-5, 14, -2.5);
  sun.target.position.set(0, 1.2, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.02;
  const sc = sun.shadow.camera;
  Object.assign(sc, { left: -10, right: 10, top: 14, bottom: -14, near: 1, far: 40 });
  sc.updateProjectionMatrix();
  scene.add(sun, sun.target);

  const floorMat = () => new THREE.MeshStandardMaterial({ color: 0xd5d0c6, roughness: 0.92 });
  for (const y of [0, LEVEL]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(W, D), floorMat());
    m.rotation.x = -Math.PI / 2;
    m.position.y = y;
    m.receiveShadow = true;
    scene.add(m);
    // a low wall at the back so the storey reads as a floor plate
    const wall = new THREE.Mesh(new THREE.BoxGeometry(W, 0.9, 0.12), new THREE.MeshStandardMaterial({ color: 0xc3bfd6, roughness: 1 }));
    wall.position.set(0, y + 0.45, -D / 2 + 0.06);
    wall.castShadow = true;
    wall.receiveShadow = true;
    wall.userData.kind = 'wall';
    scene.add(wall);
  }
  const blob = (pos, color) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.4, 28, 18), new THREE.MeshStandardMaterial({ color, roughness: 0.45 }));
    m.position.copy(pos);
    m.castShadow = true;
    scene.add(m);
    return m;
  };
  blob(UPPER, 0xf2c21b).userData.kind = 'upper-blob';
  blob(LOWER, 0x3b82f6).userData.kind = 'lower-blob';
  // Tall shelf: the long rectangle Hurly saw bleeding through the slab.
  const shelf = new THREE.Mesh(
    new THREE.BoxGeometry(1.35, SHELF_H, 0.38),
    new THREE.MeshStandardMaterial({ color: 0x8d6a4a, roughness: 0.8 }),
  );
  shelf.position.set(SHELF.x, LEVEL + SHELF_H / 2, SHELF.z);
  shelf.castShadow = true;
  shelf.receiveShadow = true;
  shelf.userData.kind = 'shelf';
  scene.add(shelf);
  // Cat, same idea as the office cat: a few casting meshes on one floor.
  const cat = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: 0xc4894f, roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), fur);
  body.scale.set(0.85, 0.7, 1.35);
  body.position.y = 0.16;
  body.castShadow = true;
  body.userData.kind = 'cat';
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 14, 10), fur);
  head.position.set(0, 0.28, 0.16);
  head.castShadow = true;
  head.userData.kind = 'cat';
  cat.add(body, head);
  cat.position.set(CAT.x, LEVEL, CAT.z);
  scene.add(cat);
  return { scene, sun };
}

function enableFix(scene, sun) {
  sun.castShadow = false;
  scene.updateMatrixWorld(true);
  const tmp = new THREE.Vector3();
  scene.traverse((o) => {
    if (!o.isMesh) return;
    setObjectFloorLayer(o, o.getWorldPosition(tmp).y >= LEVEL * 0.5 ? 1 : 0);
  });
  const lights = [0, LEVEL].map((floorY, i) => {
    const light = createFloorShadowLight({
      floorY, cx: 0, cz: 0, width: W, depth: D,
      // Same direction as the test sun (target is 0.6 above the floor, sun sits 12.8 above its target).
      offset: [-5, 13.4, -2.5], mapSize: 1024,
    });
    light.userData.shadowLayer = 1 << floorLayerBit(i);
    setFloorShadowBand(i, floorY, 2.9, 0.45);
    return light;
  });
  mountFloorShadowLights(scene, lights, sun);
  tagFloorShadowMaterials(scene, lights.length);
  scene.userData.floorLights = lights;
}

function cameraFor(floorY) {
  const cam = new THREE.PerspectiveCamera(34, 480 / 320, 0.05, 40);
  cam.position.set(0.15, floorY + 2.15, 3.55);
  cam.lookAt(0, floorY + 0.05, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
bindFloorShadowPasses(renderer);
renderer.setPixelRatio(1);
renderer.setSize(480, 320, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;

const broken = world();
const fixed = world();
enableFix(fixed.scene, fixed.sun);

const views = [
  ['Before · upper floor', broken.scene, cameraFor(LEVEL)],
  ['Before · floor below', broken.scene, cameraFor(0)],
  ['After · upper floor', fixed.scene, cameraFor(LEVEL)],
  ['After · floor below', fixed.scene, cameraFor(0)],
];

function topCamera(floorY) {
  const cam = new THREE.OrthographicCamera(-4.3, 4.3, 4.3, -4.3, 0.05, 12);
  cam.position.set(0, floorY + 5, 0.001);
  cam.up.set(0, 0, -1);
  cam.lookAt(0, floorY, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

// Lit floor is ~187. A shadow is ~102. Ignore the black background outside the slab.
function countShadowPixels() {
  const gl = renderer.getContext();
  const w = 480, h = 320;
  const buf = new Uint8Array(w * h * 4);
  gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
  let n = 0;
  for (let i = 0; i < buf.length; i += 16) {
    const y = 0.2126 * buf[i] + 0.7152 * buf[i + 1] + 0.0722 * buf[i + 2];
    if (y > 40 && y < 155) n++;
  }
  return n;
}

// One caster at a time, so a dark pixel can only be that object's shadow.
function shadowPixels(scene, kind) {
  const casters = [];
  const floors = [];
  scene.traverse((o) => {
    if (!o.isMesh) return;
    if (o.geometry && o.geometry.type === 'PlaneGeometry') floors.push(o);
    else casters.push(o);
  });
  for (const o of casters) o.visible = o.userData.kind === kind;
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;
  renderer.render(scene, topCamera(0));
  renderer.shadowMap.autoUpdate = false;
  for (const o of casters) o.visible = false;
  const out = {};
  for (const floorY of [LEVEL, 0]) {
    for (const f of floors) f.visible = Math.abs(f.position.y - floorY) < 0.01;
    renderer.render(scene, topCamera(floorY));
    out[floorY === 0 ? 'downstairs' : 'upstairs'] = countShadowPixels();
  }
  for (const o of casters) o.visible = true;
  for (const f of floors) f.visible = true;
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;
  return out;
}

const before = {
  empty: shadowPixels(broken.scene, 'none'),
  blob: shadowPixels(broken.scene, 'upper-blob'),
  shelf: shadowPixels(broken.scene, 'shelf'),
  cat: shadowPixels(broken.scene, 'cat'),
};
const after = {
  empty: shadowPixels(fixed.scene, 'none'),
  blob: shadowPixels(fixed.scene, 'upper-blob'),
  shelf: shadowPixels(fixed.scene, 'shelf'),
  cat: shadowPixels(fixed.scene, 'cat'),
  lowerBlob: shadowPixels(fixed.scene, 'lower-blob'),
};

const board = document.createElement('canvas');
board.width = 960;
board.height = 700;
const ctx = board.getContext('2d');
ctx.fillStyle = '#14141c';
ctx.fillRect(0, 0, 960, 700);
ctx.font = '600 18px ui-sans-serif, system-ui, sans-serif';
ctx.fillStyle = '#f4f1ea';
views.forEach(([label, scene, cam], i) => {
  renderer.render(scene, cam);
  const col = i % 2, row = Math.floor(i / 2);
  const x = col * 480, y = 36 + row * 332;
  ctx.drawImage(renderer.domElement, x, y);
  ctx.fillStyle = '#f4f1ea';
  ctx.fillText(label, x + 12, y - 10);
});

const result = { before, after };
const extra = (scene, kind, key) => scene[kind][key] - scene.empty[key];
const checks = {
  beforeBlobCastsAndBleeds: extra(before, 'blob', 'upstairs') > 40 && extra(before, 'blob', 'downstairs') > 40,
  beforeShelfCastsAndBleeds: extra(before, 'shelf', 'upstairs') > 40 && extra(before, 'shelf', 'downstairs') > 40,
  beforeCatCastsAndBleeds: extra(before, 'cat', 'upstairs') > 40 && extra(before, 'cat', 'downstairs') > 40,
  afterBlobOnOwnFloor: extra(after, 'blob', 'upstairs') > 40,
  afterBlobNoBleed: extra(after, 'blob', 'downstairs') < 20,
  afterShelfOnOwnFloor: extra(after, 'shelf', 'upstairs') > 40,
  afterShelfNoBleed: extra(after, 'shelf', 'downstairs') < 20,
  afterCatOnOwnFloor: extra(after, 'cat', 'upstairs') > 40,
  afterCatNoBleed: extra(after, 'cat', 'downstairs') < 20,
  afterLowerBlobOnOwnFloor: extra(after, 'lowerBlob', 'downstairs') > 40,
  afterLowerBlobNoBleedUp: extra(after, 'lowerBlob', 'upstairs') < 20,
};
result.checks = checks;
result.ok = Object.values(checks).every(Boolean);
document.getElementById('log').textContent = JSON.stringify(result, null, 2);
window.__shadow = { result, png: board.toDataURL('image/png') };
</script>
`;

function serve() {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json' };
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    if (url.pathname === '/shadow-test.html') {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }
    const file = path.join(root, decodeURIComponent(url.pathname));
    if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404); res.end('no'); return;
    }
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
}

const server = serve();
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const { port } = server.address();
const browser = await chromium.launch({
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({ viewport: { width: 1000, height: 760 } });
const logs = [];
page.on('console', (msg) => logs.push(msg.type() + ' ' + msg.text()));
page.on('pageerror', (err) => logs.push('PAGEERROR ' + err.message));
await page.goto(`http://127.0.0.1:${port}/shadow-test.html`, { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.__shadow, null, { timeout: 20000 });
const payload = await page.evaluate(() => window.__shadow);
const png = Buffer.from(payload.png.split(',')[1], 'base64');
const file = path.join(outDir, 'before-after.png');
fs.writeFileSync(file, png);
fs.writeFileSync(path.join(outDir, 'result.json'), JSON.stringify({ result: payload.result, logs }, null, 2));
await browser.close();
server.close();
console.log(JSON.stringify(payload.result, null, 2));
if (!payload.result.ok) {
  console.error(logs.join('\n'));
  process.exit(1);
}
console.log('wrote', file);
