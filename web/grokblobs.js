// Procedural "Grok blob" workers for Hurly's ops office: soft coloured
// shapes with two black vertical oval eyes (like Hurly's Grok Bot sidebar
// avatars), floating a little above the floor like the Grok Bot Office demo.
// No external assets: everything is built from three.js primitives.
import * as THREE from 'three';

// Named crew -> silhouette + colour. Keys match HurlyCrew session ids
// (`grokbot:chief`, `paperclip:cm2`, …); names are matched as a fallback.
export const CREW_LOOKS = {
  chief: { shape: 'wedge', color: 0x8b5cf6 },       // Chief Master — violet wedge
  monitor: { shape: 'squircle', color: 0xff7417 },   // Monitor — orange squircle
  proxmox: { shape: 'cloud', color: 0x22c06a },      // Proxmox — green cloud
  dockhand: { shape: 'wedge', color: 0xff4fa3 },     // Dockhand — magenta wedge
  truenas: { shape: 'tablet', color: 0x9b6436 },     // TrueNAS — brown tablet
  doc: { shape: 'drop', color: 0xf0384a },           // Doc Master — red teardrop
  // Paperclip agents: the rest of the palette, fixed so they never shuffle.
  cm2: { shape: 'triangle', color: 0x3b82f6 },
  cm1: { shape: 'oval', color: 0x6366f1 },
  claude: { shape: 'drop', color: 0xe07a50 },
  qa: { shape: 'cloud', color: 0x14b8a6 },
  dispatcher: { shape: 'wedge', color: 0xf2c21b },
  gpu: { shape: 'bean', color: 0x84cc16 },
  amazon: { shape: 'oval', color: 0xf59e0b },
  accountant: { shape: 'cloud', color: 0x0ea5e9 },
};
const NAME_KEYS = [
  [/chief/i, 'chief'], [/proxmox/i, 'proxmox'], [/monitor/i, 'monitor'], [/dock/i, 'dockhand'],
  [/truenas/i, 'truenas'], [/doc master|^doc\b/i, 'doc'], [/code master 2/i, 'cm2'], [/code master 1/i, 'cm1'],
  [/claude/i, 'claude'], [/\bqa\b/i, 'qa'], [/dispatch/i, 'dispatcher'], [/gpu/i, 'gpu'], [/amazon/i, 'amazon'],
  [/account/i, 'accountant'],
];
export const SHAPES = ['triangle', 'drop', 'cloud', 'oval', 'bean', 'wedge', 'squircle', 'tablet'];
const RESERVED = new Set(['wedge:8b5cf6', 'squircle:ff7417', 'cloud:22c06a', 'wedge:ff4fa3', 'tablet:9b6436', 'drop:f0384a']);
const EXTRA_COLORS = [0x8b5cf6, 0xf0384a, 0x22c06a, 0xff7417, 0x9b6436, 0xff4fa3, 0x3b82f6, 0x14b8a6, 0xf2c21b, 0x6366f1, 0x84cc16, 0x0ea5e9];

function strHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export function blobLookFor(p) {
  const s = p.s || {};
  const id = String(s.id || (p.key || '').split(':').pop() || '');
  if (CREW_LOOKS[id]) return CREW_LOOKS[id];
  const name = s.project || s.title || '';
  for (const [re, k] of NAME_KEYS) if (re.test(name)) return CREW_LOOKS[k];
  const h = strHash(String(p.key || name));
  const shape = SHAPES[h % SHAPES.length];
  let ci = (h >>> 8) % EXTRA_COLORS.length;
  while (RESERVED.has(shape + ':' + EXTRA_COLORS[ci].toString(16))) ci = (ci + 1) % EXTRA_COLORS.length;
  return { shape, color: EXTRA_COLORS[ci] };
}

// Rounded polygon outline for the flat sidebar shapes (triangle / wedge).
function roundedPoly(pts, r) {
  const sh = new THREE.Shape();
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i + n - 1) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const a = new THREE.Vector2(p0[0] - p1[0], p0[1] - p1[1]).normalize();
    const b = new THREE.Vector2(p2[0] - p1[0], p2[1] - p1[1]).normalize();
    const s = [p1[0] + a.x * r, p1[1] + a.y * r], e = [p1[0] + b.x * r, p1[1] + b.y * r];
    if (i === 0) sh.moveTo(s[0], s[1]); else sh.lineTo(s[0], s[1]);
    sh.quadraticCurveTo(p1[0], p1[1], e[0], e[1]);
  }
  sh.closePath();
  return sh;
}

function puffy(shape, depth) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.1, bevelSegments: 6, curveSegments: 18 });
  g.translate(0, 0, -depth / 2);
  g.computeVertexNormals();
  return g;
}

function lathe(profile) {
  return new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(x, y)), 40);
}

// Body meshes for a silhouette, roughly 1 unit tall, base at y=0, front +z.
function bodyParts(shape, mat) {
  const parts = [];
  const add = (geo, pos = [0, 0, 0], scale = [1, 1, 1], rot = [0, 0, 0]) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(...pos); m.scale.set(...scale); m.rotation.set(...rot);
    parts.push(m);
  };
  const sphere = new THREE.SphereGeometry(0.5, 40, 28);
  switch (shape) {
    case 'triangle': // purple — rounded triangle, apex up
      add(puffy(roundedPoly([[-0.48, 0.1], [0.48, 0.1], [0.02, 0.98]], 0.2), 0.34));
      break;
    case 'wedge': { // pink — rounded triangle pointing right
      add(puffy(roundedPoly([[-0.38, 0.06], [0.5, 0.36], [-0.3, 0.96]], 0.2), 0.34));
      break;
    }
    case 'drop': { // red — teardrop, tip up-right
      const prof = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24; // 0 bottom .. 1 tip
        const y = t;
        const r = t < 0.55 ? 0.42 * Math.sin(Math.acos(1 - t / 0.55 * 1.0) || 0) : 0.42 * Math.pow(1 - (t - 0.55) / 0.45, 1.25);
        prof.push([Math.max(0.0001, r), y]);
      }
      prof[0][0] = 0.0001;
      add(lathe(prof), [0, 0, 0], [1, 1, 0.82], [0, 0, -0.22]);
      break;
    }
    case 'cloud': // green — cluster of puffs
      add(sphere, [0, 0.4, 0], [0.86, 0.7, 0.7]);
      add(sphere, [-0.28, 0.6, -0.02], [0.52, 0.52, 0.5]);
      add(sphere, [0.26, 0.62, -0.02], [0.56, 0.56, 0.52]);
      add(sphere, [0, 0.78, -0.05], [0.56, 0.5, 0.5]);
      add(sphere, [-0.4, 0.3, 0], [0.42, 0.42, 0.42]);
      add(sphere, [0.4, 0.3, 0], [0.42, 0.42, 0.42]);
      break;
    case 'squircle': // orange — soft rounded square, upright
      add(new THREE.CapsuleGeometry(0.34, 0.22, 10, 32), [0, 0.5, 0], [1.2, 0.9, 0.95]);
      break;
    case 'tablet': // brown — flat rounded horizontal tablet
      add(new THREE.CapsuleGeometry(0.3, 0.5, 10, 32), [0, 0.3, 0], [1.05, 0.95, 0.85], [0, 0, Math.PI / 2]);
      break;
    case 'bean': // brown — horizontal oval
      add(sphere, [0, 0.36, 0], [1.08, 0.72, 0.74], [0, 0, 0.12]);
      break;
    case 'oval':
    default: // orange — upright oval, slight tilt
      add(sphere, [0, 0.48, 0], [0.8, 0.96, 0.7], [0, 0, 0.22]);
      break;
  }
  return parts;
}

const EYE_AT = {
  triangle: [[-0.13, 0.42], [0.13, 0.42]],
  wedge: [[-0.19, 0.5], [0.05, 0.5]],
  drop: [[-0.12, 0.42], [0.12, 0.42]],
  cloud: [[-0.14, 0.5], [0.14, 0.5]],
  bean: [[-0.12, 0.42], [0.14, 0.42]],
  oval: [[-0.1, 0.56], [0.14, 0.56]],
};

let glowTex = null;
function floorGlow() {
  if (glowTex) return glowTex;
  const cv = document.createElement('canvas');
  cv.width = cv.height = 64;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,0.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  glowTex = new THREE.CanvasTexture(cv);
  return glowTex;
}

// Returns { root, hover, body, eyes, height }. Animate `hover` (y offset,
// squash, lean); `root` takes position + yaw.
export function buildBlob(look, height) {
  const root = new THREE.Group();
  const hover = new THREE.Group();
  const body = new THREE.Group();
  root.add(hover); hover.add(body);
  const col = new THREE.Color(look.color);
  const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5, metalness: 0, emissive: col, emissiveIntensity: 0.18 });
  const parts = bodyParts(look.shape, mat);
  for (const m of parts) { m.castShadow = true; m.receiveShadow = false; body.add(m); }
  body.updateMatrixWorld(true);

  // Eyes: black vertical ovals with a white glint (Grok bot look, default).
  // ?eyes=white brings back the glowing white demo-style eyes.
  const blackEyes = !(typeof location !== 'undefined' && /[?&]eyes=white\b/.test(location.search));
  const eyeMat = blackEyes
    ? new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.25 })
    : new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const glintMat = blackEyes ? new THREE.MeshBasicMaterial({ color: 0xffffff }) : new THREE.MeshBasicMaterial({ color: col.clone().lerp(new THREE.Color(0xffffff), 0.75), transparent: true, opacity: 0 });
  const eyeGeo = new THREE.SphereGeometry(0.068, 18, 14);
  const glintGeo = new THREE.SphereGeometry(0.02, 10, 8);
  const ray = new THREE.Raycaster();
  const eyes = [];
  for (const [ex, ey] of EYE_AT[look.shape] || EYE_AT.oval) {
    ray.set(new THREE.Vector3(ex, ey, 5), new THREE.Vector3(0, 0, -1));
    const hit = ray.intersectObjects(parts, false)[0];
    const z = hit ? hit.point.z : 0.3;
    const eye = new THREE.Group();
    eye.position.set(ex, ey, z - 0.012);
    const e = new THREE.Mesh(eyeGeo, eyeMat);
    e.scale.set(0.78, 1.45, 0.45);
    const gl = new THREE.Mesh(glintGeo, glintMat);
    gl.position.set(0.016, 0.045, 0.026);
    eye.add(e, gl);
    body.add(eye);
    eyes.push(eye);
  }

  // Normalise to the requested height.
  const box = new THREE.Box3().setFromObject(body);
  const h = box.max.y - box.min.y;
  const k = height / h;
  body.scale.setScalar(k);
  body.position.y = -box.min.y * k;

  // Soft coloured glow on the floor under the blob.
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
    map: floorGlow(), color: col, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.012;
  glow.scale.setScalar(height * 1.25);
  root.add(glow);
  return { root, hover, body, eyes, glow, height, mat };
}
