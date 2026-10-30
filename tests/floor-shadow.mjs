// Synthetic cutaway of the office shadow fix.
// Renders the old single shadow map beside per-floor volumes and checks
// that an upper-floor caster still darkens its own floor, and no longer
// darkens the floor below. Uses web/floorshadow.js, the same module the
// office renderer imports.
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
} from '/web/floorshadow.js';

installFloorShadowChunk();

const LEVEL = 3;
const W = 8, D = 8;
const UPPER = new THREE.Vector3(-1.35, LEVEL + 0.72, 0.35);
const LOWER = new THREE.Vector3(1.55, 0.72, -0.45);

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
    scene.add(wall);
  }
  const blob = (pos, color) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.4, 28, 18), new THREE.MeshStandardMaterial({ color, roughness: 0.45 }));
    m.position.copy(pos);
    m.castShadow = true;
    scene.add(m);
    return m;
  };
  blob(UPPER, 0xf2c21b);
  blob(LOWER, 0x3b82f6);
  return { scene, sun };
}

function enableFix(scene, sun) {
  sun.castShadow = false;
  const lights = [0, LEVEL].map((floorY) => createFloorShadowLight({
    floorY, cx: 0, cz: 0, width: W, depth: D, above: 2.5, below: 0.4, mapSize: 1024,
  }));
  mountFloorShadowLights(scene, lights, sun);
  tagFloorShadowMaterials(scene, lights.length);
}

function cameraFor(floorY) {
  const cam = new THREE.PerspectiveCamera(34, 480 / 320, 0.05, 40);
  cam.position.set(0.15, floorY + 2.15, 3.55);
  cam.lookAt(0, floorY + 0.05, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

function glY(ndcY, h) {
  return Math.round((ndcY + 1) * 0.5 * (h - 1));
}

function project(cam, w, h, v) {
  const p = v.clone().project(cam);
  return {
    x: Math.round((p.x + 1) * 0.5 * (w - 1)),
    y: glY(p.y, h),
  };
}

function luma(px) {
  return 0.2126 * px[0] + 0.7152 * px[1] + 0.0722 * px[2];
}

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
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

function sampleAt(cam, worldPos) {
  const gl = renderer.getContext();
  const { x, y } = project(cam, 480, 320, worldPos);
  const px = new Uint8Array(4);
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
  return { x, y, rgba: [px[0], px[1], px[2], px[3]], luma: luma(px) };
}

function rayHit(origin, through, floorY) {
  const dir = new THREE.Vector3().subVectors(through, origin);
  const t = (floorY + 0.02 - origin.y) / dir.y;
  return origin.clone().add(dir.multiplyScalar(t));
}

function topCamera(floorY) {
  const cam = new THREE.OrthographicCamera(-4.3, 4.3, 4.3, -4.3, 0.05, 12);
  cam.position.set(0, floorY + 5, 0.001);
  cam.up.set(0, 0, -1);
  cam.lookAt(0, floorY, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

// Bake shadow maps, then hide the casters so the oval on the floor can be
// sampled instead of the sphere that sits on top of it.
function measure(scene, lightPos, straightDown) {
  const casters = [];
  const floors = [];
  scene.traverse((o) => {
    if (!o.isMesh) return;
    if (o.geometry && o.geometry.type === 'PlaneGeometry') floors.push(o);
    else casters.push(o);
  });
  const probe = topCamera(0);
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;
  renderer.render(scene, probe);
  renderer.shadowMap.autoUpdate = false;
  for (const o of casters) o.visible = false;

  const spot = (sphere, floorY) => straightDown
    ? new THREE.Vector3(sphere.x, floorY + 0.02, sphere.z)
    : rayHit(lightPos, sphere, floorY);
  const read = (floorY, worldPos) => {
    for (const f of floors) f.visible = Math.abs(f.position.y - floorY) < 0.01;
    const cam = topCamera(floorY);
    renderer.render(scene, cam);
    return sampleAt(cam, worldPos);
  };
  const away = new THREE.Vector3(3.1, 0, 3.1);
  const out = {
    upperContact: read(LEVEL, spot(UPPER, LEVEL)),
    upperAway: read(LEVEL, away.clone().setY(LEVEL + 0.02)),
    bleed: read(0, spot(UPPER, 0)),
    lowerContact: read(0, spot(LOWER, 0)),
    lowerAway: read(0, away),
  };
  for (const o of casters) o.visible = true;
  for (const f of floors) f.visible = true;
  renderer.shadowMap.autoUpdate = true;
  renderer.shadowMap.needsUpdate = true;
  return out;
}

const before = measure(broken.scene, broken.sun.position, false);
const after = measure(fixed.scene, null, true);

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
const darker = (a, b, minDrop) => a.luma < b.luma - minDrop;
const flat = (a, b, maxDrop) => a.luma > b.luma - maxDrop;
const checks = {
  beforeUpperHasShadow: darker(before.upperContact, before.upperAway, 12),
  beforeBleed: darker(before.bleed, before.lowerAway, 12),
  afterUpperHasShadow: darker(after.upperContact, after.upperAway, 12),
  afterLowerHasOwnShadow: darker(after.lowerContact, after.lowerAway, 12),
  afterNoBleed: flat(after.bleed, after.lowerAway, 8),
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
