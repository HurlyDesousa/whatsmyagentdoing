// Isometric office: agents that are working sit at cubicle desks; a few that
// are off duty wander between the pantry, lounge, meeting room and ping-pong
// table. Plain canvas 2D with local provider logos, no dependencies.
(() => {
  'use strict';

  const TW = 64; // tile width px
  const TH = 32; // tile height px; one z unit is TH px too
  const WALL_H = 2.4;
  const WORKING = new Set(['thinking', 'tool', 'typing', 'waiting', 'error']);
  const MAX_WANDERERS = 7;
  const SPEED = 2.1; // tiles / second
  // SWA-3107: idle / wander retargets use dwellFor(). Hangout intervals are
  // 10× the old 8–60s bands so auto actions fire about one-tenth as often.
  const AUTO_STAY_SCALE = 10;

  const SKIN = ['#f3cfb0', '#e5b38f', '#c98d66', '#9a6646', '#6e4630', '#f7dcc7'];
  const HAIR = ['#2a2019', '#4b3020', '#8a4b2a', '#c99a5b', '#1c1c1c', '#8c8c8c', '#a33a2c', '#3d3550'];
  const SHIRT = {
    claude: ['#c96442', '#d9825f', '#b4553a', '#e09a72'],
    codex: ['#10a37f', '#2bb38f', '#0d8a6b', '#4cc3a0'],
    gemini: ['#4f7cf0', '#6b8ff5', '#3d66d6', '#8aa6f8'],
    omp: ['#a96926', '#c78942', '#8d531e', '#dca45c'],
    grokbot: ['#2b2b2b', '#444444', '#1a1a1a', '#5a5a5a'],
    paperclip: ['#6d5bd0', '#8574e0', '#5847b8', '#9d8ff0'],
  };
  // Official product icons, shared by both renderers and the page UI (OMP: a neutral monogram).
  // Load once per page from the same origin so video capture stays readable.
  // Initials remain a fallback if an image cannot be loaded.
  const AGENT_BADGES = {
    claude: { label: 'Claude', short: 'Cl', color: '#c96442', logo: '/assets/agents/claude.png' },
    codex: { label: 'Codex', short: 'Cx', color: '#10a37f', logo: '/assets/agents/codex.png' },
    gemini: { label: 'Gemini', short: 'G', color: '#4f7cf0', logo: '/assets/agents/gemini.png' },
    omp: { label: 'OMP', short: 'OMP', color: '#a96926', logo: '/assets/agents/omp.svg' },
    grokbot: { label: 'Grok Bot', short: 'GB', color: '#2b2b2b', logo: '/assets/agents/grokbot.svg' },
    paperclip: { label: 'Paperclip', short: 'PC', color: '#6d5bd0', logo: '/assets/agents/paperclip.svg' },
  };
  for (const badge of Object.values(AGENT_BADGES)) {
    badge.image = new Image();
    badge.image.src = badge.logo;
  }
  const PANTS = ['#34405a', '#2c2c34', '#4a3f35', '#3b4a3f'];
  const PANEL = ['#7d93c4', '#d98b6a', '#7fb08a', '#c9a24c'];

  const STATUS_COLOR = {
    thinking: '#8b6be6', tool: '#3b8ee0', typing: '#22a874', waiting: '#e09412',
    done: '#5f9a4c', error: '#de4b40', interrupted: '#9b9a94', idle: '#9b9a94',
  };

  // Multi-floor office (SWA-3012): basement / ground / 2nd. Shared x–y sim;
  // floor is a separate layer attribute. 3D stacks slabs; 2D filters by view.
  const OFFICE_FLOORS = [
    { id: -1, key: 'basement', short: 'B', label: 'Boiler room' },
    { id: 0, key: 'ground', short: '1', label: 'Ground' },
    { id: 1, key: 'second', short: '2', label: '2nd' },
  ];
  const LEVEL_H = 2.95; // world units between stacked slabs (3D)

  const ACT_EMOJI = {
    coffee: '☕', water: '💧', fridge: '🍎', sink: '🫧', stool: '💬', couch: '💬', beanbag: '🎧',
    window: '☁️', read: '📖', whiteboard: '✏️', meeting: '💬', arcade: '🎮', pingpong: '🏓', plant: '🌱',
    vending: '🥤', foosball: '⚽', phone: '📞', stairs: '🪜',
  };

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  const pick = (arr, h, salt) => arr[(Math.imul(h ^ Math.imul(salt, 2654435761), 2246822519) >>> 0) % arr.length];
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ---- 2D Grok blobs (SWA-2995). Mirrors web/grokblobs.js so the 2D floor
  // shows the same jellyblob crew as the 3D office: same silhouette + colour
  // per agent (keep CREW_LOOKS / NAME_KEYS / SHAPES / RESERVED / EXTRA_COLORS
  // and blobLook() in sync with web/grokblobs.js). Drawn plain like the Grok
  // Bot avatar picker: flat solid fill + two black slanted dash eyes.
  const BLOB_LOOKS = {
    chief: { shape: 'wedge', color: 0x8b5cf6 },       // Chief Master — violet wedge
    monitor: { shape: 'squircle', color: 0xff7417 },   // Monitor — orange squircle
    proxmox: { shape: 'cloud', color: 0x22c06a },      // Proxmox — green cloud
    dockhand: { shape: 'wedge', color: 0xff4fa3 },     // Dockhand — magenta wedge
    truenas: { shape: 'tablet', color: 0x9b6436 },     // TrueNAS — brown tablet
    doc: { shape: 'drop', color: 0xf0384a },           // Doc Master — red teardrop
    cm2: { shape: 'triangle', color: 0x3b82f6 },
    cm1: { shape: 'oval', color: 0x6366f1 },
    claude: { shape: 'drop', color: 0xe07a50 },
    qa: { shape: 'cloud', color: 0x14b8a6 },
    dispatcher: { shape: 'wedge', color: 0xf2c21b },
    gpu: { shape: 'bean', color: 0x84cc16 },
    amazon: { shape: 'oval', color: 0xf59e0b },
    accountant: { shape: 'cloud', color: 0x0ea5e9 },
  };
  const BLOB_NAME_KEYS = [
    [/chief/i, 'chief'], [/proxmox/i, 'proxmox'], [/monitor/i, 'monitor'], [/dock/i, 'dockhand'],
    [/truenas/i, 'truenas'], [/doc master|^doc\b/i, 'doc'], [/code master 2/i, 'cm2'], [/code master 1/i, 'cm1'],
    [/claude/i, 'claude'], [/\bqa\b/i, 'qa'], [/dispatch/i, 'dispatcher'], [/gpu/i, 'gpu'], [/amazon/i, 'amazon'],
    [/account/i, 'accountant'],
  ];
  const BLOB_SHAPES = ['triangle', 'drop', 'cloud', 'oval', 'bean', 'wedge', 'squircle', 'tablet'];
  const BLOB_RESERVED = new Set(['wedge:8b5cf6', 'squircle:ff7417', 'cloud:22c06a', 'wedge:ff4fa3', 'tablet:9b6436', 'drop:f0384a']);
  const BLOB_EXTRA = [0x8b5cf6, 0xf0384a, 0x22c06a, 0xff7417, 0x9b6436, 0xff4fa3, 0x3b82f6, 0x14b8a6, 0xf2c21b, 0x6366f1, 0x84cc16, 0x0ea5e9];
  function blobLook(p) {
    const s = p.s || {};
    const id = String(s.id || (p.key || '').split(':').pop() || '');
    if (BLOB_LOOKS[id]) return BLOB_LOOKS[id];
    const name = s.project || s.title || '';
    for (const [re, k] of BLOB_NAME_KEYS) if (re.test(name)) return BLOB_LOOKS[k];
    const h = hash(String(p.key || name));
    const shape = BLOB_SHAPES[h % BLOB_SHAPES.length];
    let ci = (h >>> 8) % BLOB_EXTRA.length;
    while (BLOB_RESERVED.has(shape + ':' + BLOB_EXTRA[ci].toString(16))) ci = (ci + 1) % BLOB_EXTRA.length;
    return { shape, color: BLOB_EXTRA[ci] };
  }
  const hex6 = (n) => '#' + n.toString(16).padStart(6, '0');
  const BLOB_WHITE_EYES = typeof location !== 'undefined' && /[?&]eyes=white\b/.test(location.search);

  // Rounded polygon, unit coords (x right, y up; canvas y is flipped by caller).
  function blobPoly(c, pts, r) {
    const n = pts.length;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i + n - 1) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
      const ax = p0[0] - p1[0], ay = p0[1] - p1[1], al = Math.hypot(ax, ay);
      const bx = p2[0] - p1[0], by = p2[1] - p1[1], bl = Math.hypot(bx, by);
      const sx = p1[0] + ax / al * r, sy = p1[1] + ay / al * r;
      const ex = p1[0] + bx / bl * r, ey = p1[1] + by / bl * r;
      if (i === 0) c.moveTo(sx, sy); else c.lineTo(sx, sy);
      c.quadraticCurveTo(p1[0], p1[1], ex, ey);
    }
    c.closePath();
  }
  function blobEll(c, x, y, rx, ry, rot = 0) { c.moveTo(x + rx * Math.cos(rot), y + rx * Math.sin(rot)); c.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); }
  function blobPill(c, cx, cy, w, h) {
    const r = Math.min(w, h) / 2, x = cx - w / 2, y = cy - h / 2;
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }
  // Body path in unit space (base y=0, up = +y), matching bodyParts() in grokblobs.js.
  const BLOB_TOP = { triangle: 1.0, wedge: 0.99, drop: 1.0, cloud: 1.03, squircle: 0.91, tablet: 0.62, bean: 0.72, oval: 0.96 };
  function blobPath(c, shape) {
    c.beginPath();
    switch (shape) {
      case 'triangle': blobPoly(c, [[-0.48, 0.1], [0.48, 0.1], [0.02, 0.98]], 0.2); break;
      case 'wedge': blobPoly(c, [[-0.38, 0.06], [0.5, 0.36], [-0.3, 0.96]], 0.2); break;
      case 'drop': {
        const pts = [];
        for (let i = 0; i <= 24; i++) {
          const t = i / 24;
          const r = t < 0.55 ? 0.42 * Math.sin(Math.acos(1 - t / 0.55) || 0) : 0.42 * Math.pow(1 - (t - 0.55) / 0.45, 1.25);
          pts.push([r, t]);
        }
        const rot = -0.22, cs = Math.cos(rot), sn = Math.sin(rot);
        const tf = ([x, y]) => [x * cs - y * sn, x * sn + y * cs];
        const ring = [...pts.map(([r, y]) => tf([r, y])), ...pts.slice().reverse().map(([r, y]) => tf([-r, y]))];
        ring.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
        c.closePath();
        break;
      }
      case 'cloud':
        blobEll(c, 0, 0.4, 0.43, 0.35);
        blobEll(c, -0.28, 0.6, 0.26, 0.26);
        blobEll(c, 0.26, 0.62, 0.28, 0.28);
        blobEll(c, 0, 0.78, 0.28, 0.25);
        blobEll(c, -0.4, 0.3, 0.21, 0.21);
        blobEll(c, 0.4, 0.3, 0.21, 0.21);
        break;
      case 'squircle': blobPill(c, 0, 0.5, 0.82, 0.81); break; // capsule, rounder corners below
      case 'tablet': blobPill(c, 0, 0.31, 1.05, 0.62); break;
      case 'bean': blobEll(c, 0, 0.36, 0.54, 0.36, 0.12); break;
      case 'oval':
      default: blobEll(c, 0, 0.48, 0.4, 0.48, 0.22); break;
    }
  }
  const BLOB_EYES = {
    triangle: [[-0.13, 0.42], [0.13, 0.42]],
    wedge: [[-0.19, 0.5], [0.05, 0.5]],
    drop: [[-0.12, 0.42], [0.12, 0.42]],
    cloud: [[-0.14, 0.5], [0.14, 0.5]],
    bean: [[-0.12, 0.42], [0.14, 0.42]],
    oval: [[-0.1, 0.56], [0.14, 0.56]],
    squircle: [[-0.13, 0.55], [0.13, 0.55]],
    tablet: [[-0.14, 0.36], [0.14, 0.36]],
  };

  function palette() {
    const dark = matchMedia('(prefers-color-scheme: dark)').matches;
    return dark ? {
      dark: true,
      wood1: '#4a3f35', wood2: '#453a31', woodLine: 'rgba(0,0,0,.22)',
      tileA: '#3d4044', tileB: '#35383c', carpet: '#33404d', carpetLine: 'rgba(255,255,255,.04)',
      wallL: '#4a4640', wallR: '#3f3b36', wallTop: '#5a554e', trim: '#2b2926',
      deskTop: '#8a6a4c', deskL: '#6e533b', deskR: '#5c4431',
      monitor: '#18181a', screenOff: '#26282c', chair: '#2d2d32',
      rug: '#47544f', rugEdge: '#3a4541', couch: '#5b6b8c', couchD: '#4a587a',
      counter: '#d9d4c9', counterL: '#a9a397', counterR: '#958f84', metal: '#8d939a',
      glass: 'rgba(160,200,230,.10)', glassEdge: 'rgba(190,220,240,.35)', mat: '#2f4a3a',
      text: '#ecebe6', tagBg: 'rgba(20,20,19,.78)', bubble: '#f4f3ee', bubbleInk: '#1c1c1a',
      plant: '#4f8a52', pot: '#9a5b3c', shadow: 'rgba(0,0,0,.28)', book: ['#c96442', '#3b8ee0', '#5f9a4c', '#c9a24c', '#8b6be6'],
    } : {
      dark: false,
      wood1: '#e6d3b6', wood2: '#dfcaab', woodLine: 'rgba(120,90,50,.12)',
      tileA: '#f4f4f1', tileB: '#e6e7e3', carpet: '#c9d3dc', carpetLine: 'rgba(0,0,0,.035)',
      wallL: '#f4efe6', wallR: '#e8e1d4', wallTop: '#fbf8f2', trim: '#cfc5b3',
      deskTop: '#c89f72', deskL: '#a8825a', deskR: '#946f4b',
      monitor: '#2a2a2e', screenOff: '#3a3d44', chair: '#4a4a52',
      rug: '#c4d4cb', rugEdge: '#a9bcb1', couch: '#7d93c4', couchD: '#6a80b0',
      counter: '#fbfaf7', counterL: '#d9d4c9', counterR: '#c9c3b6', metal: '#b5bcc4',
      glass: 'rgba(170,210,235,.16)', glassEdge: 'rgba(120,160,190,.55)', mat: '#bfd8c4',
      text: '#1c1c1a', tagBg: 'rgba(255,255,255,.9)', bubble: '#ffffff', bubbleInk: '#1c1c1a',
      plant: '#5a9b5d', pot: '#b86f4b', shadow: 'rgba(60,40,20,.18)', book: ['#c96442', '#3b8ee0', '#5f9a4c', '#c9a24c', '#8b6be6'],
    };
  }

  // Europe/Berlin from the viewer's clock. The office container uses this
  // zone, so "Now" follows Berlin morning / sunset / night even if the
  // browser is somewhere else. Manual Day / Dawn / Evening / Night still win.
  const OFFICE_TZ = 'Europe/Berlin';
  const CUE_WORK = new Set(['thinking', 'tool', 'typing', 'working', 'active', 'running']);
  const CUE_WAIT = new Set(['waiting', 'waiting_user', 'needs_user', 'needs_you', 'needs-you']);
  const CUE_DONE = new Set(['done', 'completed', 'complete', 'succeeded', 'success']);

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
  function officeLightKey(date = new Date()) {
    const mode = (typeof window !== 'undefined' && window.OFFICE_LIGHT) || 'now';
    if (mode === 'day' || mode === 'dawn' || mode === 'evening' || mode === 'night') return mode;
    const h = berlinHour(date);
    if (h >= 7 && h < 17) return 'day';
    if (h >= 5 && h < 7) return 'dawn';
    if (h >= 17 && h < 19) return 'evening';
    return 'night';
  }
  // Anchor hours for a manual preset. "Now" keeps the real Berlin hour so
  // the sun actually travels, instead of snapping to four still pictures.
  function officeSunHour(date = new Date()) {
    const mode = (typeof window !== 'undefined' && window.OFFICE_LIGHT) || 'now';
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

  // ---------------------------------------------------------------- A* grid

  class Grid {
    constructor(W, D, res = 4) {
      this.res = res;
      this.cw = Math.ceil(W * res);
      this.ch = Math.ceil(D * res);
      this.cost = new Uint8Array(this.cw * this.ch);
    }
    block(x, y, w, d, pad = 0.12) {
      const R = this.res;
      const i0 = clamp(Math.floor((x - pad) * R), 0, this.cw - 1);
      const i1 = clamp(Math.ceil((x + w + pad) * R) - 1, 0, this.cw - 1);
      const j0 = clamp(Math.floor((y - pad) * R), 0, this.ch - 1);
      const j1 = clamp(Math.ceil((y + d + pad) * R) - 1, 0, this.ch - 1);
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) this.cost[j * this.cw + i] = 1;
    }
    blocked(x, y) {
      const i = Math.floor(x * this.res), j = Math.floor(y * this.res);
      if (i < 0 || j < 0 || i >= this.cw || j >= this.ch) return true;
      return !!this.cost[j * this.cw + i];
    }
    path(ax, ay, bx, by) {
      const R = this.res, cw = this.cw, ch = this.ch;
      const si = clamp(Math.floor(ax * R), 0, cw - 1), sj = clamp(Math.floor(ay * R), 0, ch - 1);
      const gi = clamp(Math.floor(bx * R), 0, cw - 1), gj = clamp(Math.floor(by * R), 0, ch - 1);
      const N = cw * ch;
      const g = new Float32Array(N).fill(Infinity);
      const came = new Int32Array(N).fill(-1);
      const closed = new Uint8Array(N);
      const heap = [];
      const push = (f, n) => {
        heap.push([f, n]);
        let k = heap.length - 1;
        while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; }
      };
      const pop = () => {
        const top = heap[0], last = heap.pop();
        if (heap.length) {
          heap[0] = last;
          let k = 0;
          for (;;) {
            const l = 2 * k + 1, r = l + 1;
            let m = k;
            if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
            if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
            if (m === k) break;
            [heap[m], heap[k]] = [heap[k], heap[m]]; k = m;
          }
        }
        return top;
      };
      const hfn = (i, j) => { const dx = Math.abs(i - gi), dy = Math.abs(j - gj); return Math.max(dx, dy) + 0.41 * Math.min(dx, dy); };
      // Blocked cells are expensive, not impossible, so a path always exists
      // (someone standing right against furniture can still step away).
      const stepCost = (n) => (this.cost[n] ? 25 : 1);
      const start = sj * cw + si, goal = gj * cw + gi;
      g[start] = 0;
      push(hfn(si, sj), start);
      const dirs = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.41], [1, -1, 1.41], [-1, 1, 1.41], [-1, -1, 1.41]];
      while (heap.length) {
        const [, n] = pop();
        if (n === goal) break;
        if (closed[n]) continue;
        closed[n] = 1;
        const i = n % cw, j = (n / cw) | 0;
        for (const [di, dj, c] of dirs) {
          const ni = i + di, nj = j + dj;
          if (ni < 0 || nj < 0 || ni >= cw || nj >= ch) continue;
          if (di && dj && (this.cost[j * cw + ni] || this.cost[nj * cw + i])) continue;
          const nn = nj * cw + ni;
          const ng = g[n] + c * stepCost(nn);
          if (ng < g[nn]) { g[nn] = ng; came[nn] = n; push(ng + hfn(ni, nj), nn); }
        }
      }
      const cells = [];
      for (let n = goal; n !== -1 && n !== start; n = came[n]) cells.push(n);
      cells.reverse();
      const pts = [];
      let lastDir = null;
      for (let k = 0; k < cells.length; k++) {
        const n = cells[k];
        const dir = n - (k ? cells[k - 1] : start);
        const pt = { x: ((n % cw) + 0.5) / R, y: (((n / cw) | 0) + 0.5) / R };
        if (dir === lastDir && pts.length) pts[pts.length - 1] = pt;
        else pts.push(pt);
        lastDir = dir;
      }
      if (pts.length) pts[pts.length - 1] = { x: bx, y: by };
      else pts.push({ x: bx, y: by });
      return pts;
    }
  }

  // ---------------------------------------------------------------- office

  class Office {
    constructor(root, { onHover, label, onFrame, showAgent = true, compact = false } = {}) {
      this.root = root;
      this.onHover = onHover || (() => {});
      this.label = label || ((s) => s.project || s.agent);
      this.onFrame = onFrame;
      this.showAgent = showAgent;
      this.compact = compact;
      this.offDutyLabel = 'went home';
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'office-canvas';
      root.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.people = new Map();
      this.deskOf = new Map();
      this.offDuty = 0;
      this.maxWanderers = MAX_WANDERERS; // the page lifts this to show the whole crew
      this.first = true;
      this.visible = true;
      this.hit = [];
      this.hoverKey = null;
      this.t = performance.now();
      this.pal = palette();
      this.plan = this.buildPlan(0);
      this.viewFloor = 0;
      try {
        const saved = localStorage.getItem('officeFloor');
        if (saved != null && OFFICE_FLOORS.some((f) => String(f.id) === saved)) this.viewFloor = +saved;
      } catch (_) {}
      this.cat = { x: this.plan.W - 3, y: this.plan.D - 2, path: [], until: 0, face: 1, floor: 0 };
      this.theme = matchMedia('(prefers-color-scheme: dark)');
      this.onTheme = () => (this.pal = palette());
      this.theme.addEventListener('change', this.onTheme);

      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(root);
      this.canvas.addEventListener('mousemove', (e) => this.pointer(e));
      this.canvas.addEventListener('click', (e) => this.pointer(e, true));
      this.canvas.addEventListener('contextmenu', (e) => this.onBlobContext(e));
      this.canvas.addEventListener('pointerdown', (e) => { this._down = { x: e.clientX, y: e.clientY }; });
      this.canvas.addEventListener('mouseleave', () => { this.hoverKey = null; this.onHover(null); });
      this._onMenuDoc = (e) => {
        if (this._blobMenu && !this._blobMenu.hidden && !this._blobMenu.contains(e.target)) this.hideBlobMenu();
      };
      this._onMenuKey = (e) => { if (e.key === 'Escape') this.hideBlobMenu(); };
      document.addEventListener('pointerdown', this._onMenuDoc, true);
      document.addEventListener('keydown', this._onMenuKey);
      // Status dings are not themselves a click. Arm the same generated-tone
      // context on the first gesture so a later cue is allowed to play.
      this._unlockAudio = () => {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        try {
          const ctx = this._blobAudio || (this._blobAudio = new AC());
          if (ctx.state === 'suspended') ctx.resume();
        } catch (_) {}
      };
      document.addEventListener('pointerdown', this._unlockAudio);
      this.resize();
      this.last = performance.now();
      // Resolves true once a few frames have been drawn with data in place,
      // false if the renderer gave up (3D load failure).
      this.ready = new Promise((ok) => (this.markReady = ok));
      this.framesShown = 0;
      const loop = (t) => { if (this.dead) return; this.frame(t); this.raf = requestAnimationFrame(loop); };
      this.raf = requestAnimationFrame(loop);
    }

    destroy() {
      this.dead = true;
      cancelAnimationFrame(this.raf);
      this.ro.disconnect();
      this.theme.removeEventListener('change', this.onTheme);
      document.removeEventListener('pointerdown', this._onMenuDoc, true);
      document.removeEventListener('keydown', this._onMenuKey);
      document.removeEventListener('pointerdown', this._unlockAudio);
      this.hideBlobMenu();
      if (this._blobMenu) this._blobMenu.remove();
      this.canvas.remove();
    }

    // ------------------------------------------------------------ floor plan

    buildPlan(nWorking) {
      const pal = this.pal;
      const pods = Math.max(2, Math.ceil((nWorking + 2) / 4));
      const podCols = pods <= 4 ? 2 : 3;
      const podRows = Math.ceil(pods / podCols);
      const OW = 1.3 + (podCols - 1) * 4.2 + 3.9; // open office width
      const OD = podRows * 4.7 + 0.8;             // open office depth (pods)
      const D = Math.max(OD + 3.6, 14.5);
      const RW = 7.2;                              // right column width
      const W = OW + RW;
      const MR = 5.2;                              // meeting room depth
      const PY = 9.9;                              // pantry / lounge boundary
      const grid = new Grid(W, D);
      const items = [];
      const pois = [];
      const desks = [];
      const add = (depth, draw) => items.push({ depth, draw });
      // Semantic list of what is where, for renderers that don't use the 2D
      // draw closures (the 3D view).
      const props = [];
      const prop = (t, o) => props.push({ t, ...o });
      const solid = (x, y, w, d, pad) => grid.block(x, y, w, d, pad);
      const poi = (x, y, act, face, opt = {}) => pois.push({ x, y, act, face, sit: 0, ...opt });

      // Long boxes are split into ~1 tile pieces so depth sorting against
      // people stays right along their length. `extra(x0, x1)` draws things on
      // the front face of each piece (books on a shelf, etc).
      const longBox = (x, y, z, w, d, h, top, left, right, opts = {}) => {
        const n = Math.max(1, Math.ceil(Math.max(w, d) / 0.9));
        for (let k = 0; k < n; k++) {
          const sx = w >= d ? x + (w / n) * k : x, sy = w >= d ? y : y + (d / n) * k;
          const sw = w >= d ? w / n : w, sd = w >= d ? d : d / n;
          add(sx + sw / 2 + sy + sd / 2 + (opts.bias || 0), () => {
            this.box(sx, sy, z, sw, sd, h, top, left, right);
            if (opts.extra) opts.extra(sx, sx + sw);
          });
        }
      };

      // ---- cubicle pods: 4 desks back to back with a divider
      for (let p = 0; p < pods; p++) {
        const c = p % podCols, r = Math.floor(p / podCols);
        const px = 1.3 + c * 4.2, py = 2.0 + r * 4.7;
        const panel = PANEL[p % PANEL.length];
        for (let k = 0; k < 2; k++) {
          const x = px + k * 1.5;
          desks.push({ x, y: py, side: 'n', seat: { x: x + 0.7, y: py - 0.45 } });
          desks.push({ x, y: py + 0.92, side: 's', seat: { x: x + 0.7, y: py + 0.92 + 1.25 } });
          solid(x, py, 1.4, 0.8, 0.08);
          solid(x, py + 0.92, 1.4, 0.8, 0.08);
        }
        longBox(px - 0.1, py + 0.82, 0, 3.15, 0.08, 1.15, this.shade(panel, 25), panel, this.shade(panel, -15), { bias: 0.05 });
        prop('panel', { x: px - 0.1, y: py + 0.82, w: 3.15, d: 0.08, h: 1.15, color: panel });
        prop('panel', { x: px - 0.18, y: py - 0.05, w: 0.08, d: 1.82, h: 1.15, color: panel });
        add(px - 0.1 + py + 0.86, () => this.box(px - 0.18, py - 0.05, 0, 0.08, 1.82, 1.15, this.shade(panel, 25), panel, this.shade(panel, -15)));
        solid(px - 0.18, py + 0.8, 3.25, 0.12, 0.05);
      }

      // ---- open office extras
      const rx = OW - 1.15;
      add(rx + 0.35 + 0.5, () => this.serverRack(rx, 0.2));
      prop('rack', { x: rx, y: 0.2 });
      prop('printer', { x: OW - 2.3, y: 0.25 });
      solid(rx, 0.2, 0.7, 0.6);
      add(OW - 2.3 + 0.3 + 0.5, () => this.printer(OW - 2.3, 0.25));
      solid(OW - 2.3, 0.25, 0.75, 0.55);
      for (const [x, y] of [[0.45, 0.45], [0.45, OD - 0.2]]) { add(x + y, () => this.plant(x, y)); prop('plant', { x, y }); solid(x - 0.2, y - 0.2, 0.4, 0.4); }
      const windows = [];
      for (let x = 1.0; x < OW - 2.6; x += 2.4) {
        windows.push(x);
        poi(x + 0.75, 0.75, 'window', 'back');
      }
      poi(0.95, OD - 0.2, 'plant', 'back');

      // ---- ping-pong corner
      const tx = 2.4, ty = OD + 1.0;
      add(tx + 1.3 + ty + 0.7, () => this.pingpong(tx, ty));
      prop('pingpong', { x: tx, y: ty });
      solid(tx, ty, 2.6, 1.4, 0.05);
      poi(tx - 0.55, ty + 0.7, 'pingpong', 'side', { pair: 'pp' });
      poi(tx + 3.15, ty + 0.7, 'pingpong', 'side', { pair: 'pp' });
      const pp = { x0: tx - 0.2, x1: tx + 2.8, y: ty + 0.7 };

      // ---- front corner: vending machines, foosball, phone booth
      const fy = OD + 3.7;
      if (D - fy >= 3.4) {
        add(0.5 + fy + 0.4, () => this.vending(0.12, fy, '#c0392b'));
        prop('vending', { x: 0.12, y: fy, color: '#c0392b' });
        prop('vending', { x: 0.12, y: fy + 0.8, color: '#2f6fb0' });
        add(0.5 + fy + 1.2, () => this.vending(0.12, fy + 0.8, '#2f6fb0'));
        solid(0.1, fy, 0.75, 1.55);
        poi(1.3, fy + 0.4, 'vending', 'back');
        poi(1.3, fy + 1.2, 'vending', 'back');
      }
      if (D - fy >= 2.2) {
        const fx = 3.0, fby = fy + 0.4;
        add(fx + 0.8 + fby + 0.4, () => this.foosball(fx, fby));
        prop('foosball', { x: fx, y: fby });
        solid(fx, fby, 1.6, 0.8, 0.05);
        poi(fx - 0.45, fby + 0.4, 'foosball', 'side', { pair: 'fb' });
        poi(fx + 2.05, fby + 0.4, 'foosball', 'side', { pair: 'fb' });
        const bx = OW - 2.0, by = fy;
        this.booth(add, bx, by);
        prop('booth', { x: bx, y: by });
        solid(bx - 0.05, by - 0.05, 1.4, 0.1, 0.03);
        solid(bx - 0.05, by - 0.05, 0.1, 1.4, 0.03);
        solid(bx + 1.25, by - 0.05, 0.1, 1.4, 0.03);
        solid(bx + 0.85, by + 1.25, 0.5, 0.1, 0.03);
        poi(bx + 0.65, by + 0.6, 'phone', 'front', { sit: 0.45 });
        add(OW - 0.45 + D - 0.6, () => this.plant(OW - 0.45, D - 0.6));
        prop('plant', { x: OW - 0.45, y: D - 0.6 });
      }

      // ---- meeting room behind glass, door at y 3.6–4.6
      const mx = OW;
      for (const [y, d] of [[0, 1], [1, 1], [2, 1], [3, 0.6], [4.6, MR - 4.6]]) this.glassX(add, mx, y, d);
      for (let x = mx; x < W - 0.01; x += 1) this.glassY(add, x, MR, Math.min(1, W - x));
      prop('glass', { x: mx, y: 0, w: 0, d: 3.6 });
      prop('glass', { x: mx, y: 4.6, w: 0, d: MR - 4.6 });
      prop('glass', { x: mx, y: MR, w: RW, d: 0 });
      solid(mx - 0.05, 0, 0.1, 3.6, 0.05);
      solid(mx - 0.05, 4.6, 0.1, MR - 4.6, 0.05);
      solid(mx, MR - 0.05, RW, 0.1, 0.05);
      const mtx = mx + 1.6, mty = 1.7;
      add(mtx + 1.5 + mty + 0.7, () => this.meetingTable(mtx, mty));
      prop('meetingTable', { x: mtx, y: mty, w: 3.0, d: 1.4 });
      solid(mtx, mty, 3.0, 1.4);
      for (let k = 0; k < 3; k++) {
        const cx = mtx + 0.5 + k * 1.0;
        add(cx + mty - 0.45, () => this.stool(cx, mty - 0.4, 0.4, '#555c66'));
        add(cx + mty + 1.78, () => this.stool(cx, mty + 1.8, 0.4, '#555c66'));
        poi(cx, mty - 0.4, 'meeting', 'front', { sit: 0.42 });
        prop('chair', { x: cx, y: mty - 0.4, face: 'front' });
        prop('chair', { x: cx, y: mty + 1.8, face: 'back' });
        poi(cx, mty + 1.8, 'meeting', 'back', { sit: 0.42 });
      }
      poi(mx + 3.6, 0.65, 'whiteboard', 'back');
      add(W - 0.45 + 0.45, () => this.plant(W - 0.45, 0.45));
      prop('plant', { x: W - 0.45, y: 0.45 });
      solid(W - 0.65, 0.25, 0.4, 0.4);

      // ---- pantry
      const cy = MR + 0.3;
      longBox(mx + 1.0, cy, 0, RW - 2.3, 0.7, 0.9, pal.counter, pal.counterL, pal.counterR, { bias: -0.5 });
      solid(mx + 1.0, cy, RW - 2.3, 0.7);
      prop('counter', { x: mx + 1.0, y: cy, w: RW - 2.3, d: 0.7 });
      prop('coffee', { x: mx + 2.4, y: cy + 0.12 });
      prop('sink', { x: mx + 3.9, y: cy + 0.12 });
      prop('fridge', { x: W - 1.15, y: cy });
      prop('cooler', { x: mx + 0.35, y: cy + 0.05 });
      add(mx + 2.65 + cy + 0.35, () => this.coffeeMachine(mx + 2.4, cy + 0.12));
      add(mx + 4.15 + cy + 0.35, () => this.sink(mx + 3.9, cy + 0.12));
      add(W - 0.75 + cy + 0.4, () => this.fridge(W - 1.15, cy));
      solid(W - 1.15, cy, 0.85, 0.75);
      add(mx + 0.55 + cy + 0.25, () => this.waterCooler(mx + 0.35, cy + 0.05));
      solid(mx + 0.3, cy, 0.5, 0.5);
      poi(mx + 2.65, cy + 1.2, 'coffee', 'back');
      poi(mx + 4.15, cy + 1.2, 'sink', 'back');
      poi(W - 0.75, cy + 1.3, 'fridge', 'back');
      poi(mx + 0.6, cy + 0.95, 'water', 'back');
      const rtx = mx + 3.6, rty = MR + 2.9;
      add(rtx + rty, () => this.roundTable(rtx, rty));
      prop('roundTable', { x: rtx, y: rty });
      solid(rtx - 0.45, rty - 0.45, 0.9, 0.9);
      for (const [sx, sy, face] of [[rtx - 1.0, rty, 'front'], [rtx + 1.0, rty, 'front'], [rtx, rty + 1.0, 'back'], [rtx, rty - 0.95, 'front']]) {
        add(sx + sy - 0.02, () => this.stool(sx, sy, 0.45, '#c9a24c'));
        poi(sx, sy, 'stool', face, { sit: 0.47 });
        prop('barStool', { x: sx, y: sy });
      }

      // ---- lounge
      const lx = mx + 0.6, ly = PY + 0.4;
      const shelfX = mx + 3.4, shelfW = RW - 3.6;
      longBox(shelfX, PY - 0.25, 0, shelfW, 0.45, 1.45, this.shade(pal.deskTop, -5), pal.deskL, pal.deskR, {
        extra: (x0, x1) => this.books(x0, x1, PY + 0.2),
      });
      solid(shelfX, PY - 0.25, shelfW, 0.45);
      prop('shelf', { x: shelfX, y: PY - 0.25, w: shelfW, d: 0.45 });
      poi(mx + 4.6, PY + 0.75, 'read', 'back');
      poi(mx + 5.8, PY + 0.75, 'read', 'back');
      add(lx + ly + 0.6, () => this.couch(lx, ly + 0.6));
      prop('couch', { x: lx, y: ly + 0.6, w: 2.8, d: 0.8 });
      prop('coffeeTable', { x: lx + 0.6, y: ly + 2.0, w: 1.6, d: 0.7 });
      prop('beanbag', { x: lx + 0.4, y: ly + 3.6, color: '#c96442' });
      prop('beanbag', { x: lx + 2.6, y: ly + 3.6, color: '#7d93c4' });
      solid(lx, ly + 0.6, 2.8, 0.8);
      for (let k = 0; k < 3; k++) poi(lx + 0.5 + k * 0.9, ly + 1.2, 'couch', 'front', { sit: 0.36 });
      add(lx + 1.4 + ly + 2.35, () => this.coffeeTable(lx + 0.6, ly + 2.0));
      solid(lx + 0.6, ly + 2.0, 1.6, 0.7);
      add(lx + 0.4 + ly + 3.6, () => this.beanbag(lx + 0.4, ly + 3.6, '#c96442'));
      add(lx + 2.6 + ly + 3.6, () => this.beanbag(lx + 2.6, ly + 3.6, '#7d93c4'));
      poi(lx + 0.4, ly + 3.6, 'beanbag', 'front', { sit: 0.18 });
      poi(lx + 2.6, ly + 3.6, 'beanbag', 'front', { sit: 0.18 });
      const ax = W - 1.2, ay = ly + 1.0;
      add(ax + 0.35 + ay + 0.35, () => this.arcade(ax, ay));
      prop('arcade', { x: ax, y: ay });
      prop('plant', { x: W - 0.5, y: D - 0.5 });
      prop('lamp', { x: lx - 0.2, y: D - 0.6 });
      prop('rug', { x: OW + 0.3, y: PY + 0.6, w: 4.0, d: D - PY - 1.0 });
      solid(ax, ay, 0.7, 0.7);
      poi(ax + 0.35, ay + 1.15, 'arcade', 'back');
      add(W - 0.5 + D - 0.5, () => this.plant(W - 0.5, D - 0.5));
      add(lx - 0.2 + D - 0.6, () => this.floorLamp(lx - 0.2, D - 0.6));

      const posters = [
        { y: 2.2, color: '#c96442', text: 'SHIP IT' },
        { y: 4.6, color: '#10a37f', text: 'TESTS ✓' },
      ];

      // ---- multi-floor (SWA-3012): tag ground, add basement + 2nd pods + stairs
      for (const d of desks) d.floor = 0;
      for (const q of pois) if (q.floor == null) q.floor = 0;
      for (const p of props) if (p.floor == null) p.floor = 0;

      // SWA-3029: elevator shaft, a visible step right of the left wall / door.
      // Nudge clear of ping-pong if a bigger crew pushes that table forward.
      const shaftW = 1.35, shaftD = 1.6;
      let sx = 3.35;
      let sy = Math.max(OD + 0.4, D - 2.55);
      const overlap = (x, y, w, d, x0, y0, x1, y1) => x < x1 && x + w > x0 && y < y1 && y + d > y0;
      const ppX0 = 2.4, ppY0 = OD + 1.0, ppX1 = ppX0 + 2.6, ppY1 = ppY0 + 1.4;
      if (overlap(sx, sy, shaftW, shaftD, ppX0, ppY0, ppX1, ppY1)) {
        const nudged = ppY1 + 0.25;
        if (nudged + shaftD <= D - 0.15) sy = nudged;
        else sx = Math.max(0.85, ppX0 - shaftW - 0.35);
      }
      solid(sx, sy, shaftW, shaftD, 0.05);
      prop('stairs', { x: sx, y: sy, w: shaftW, d: shaftD, floor: 0 });
      // One stairs POI per floor (same x/y footprint) so wanderers can change levels.
      for (const fl of [-1, 0, 1]) {
        poi(sx + 0.65, sy + 0.75, 'stairs', 'front', { floor: fl, stairs: true });
      }

      const addFloorPod = (floor, ox, oy, panel) => {
        for (let k = 0; k < 2; k++) {
          const x = ox + k * 1.5;
          desks.push({ x, y: oy, side: 'n', seat: { x: x + 0.7, y: oy - 0.45 }, floor });
          desks.push({ x, y: oy + 0.92, side: 's', seat: { x: x + 0.7, y: oy + 0.92 + 1.25 }, floor });
        }
        prop('panel', { x: ox - 0.1, y: oy + 0.82, w: 3.15, d: 0.08, h: 1.15, color: panel, floor });
        prop('panel', { x: ox - 0.18, y: oy - 0.05, w: 0.08, d: 1.82, h: 1.15, color: panel, floor });
        prop('plant', { x: ox - 0.15, y: oy + 1.7, floor });
        prop('lamp', { x: ox + 2.9, y: oy + 1.5, floor });
        poi(ox + 1.4, oy - 0.55, 'window', 'back', { floor });
      };
      // Basement is the boiler room: concrete, pipes, a mechanical bay and a
      // claimed after-hours den. Eight shop benches keep the old desk count so
      // overflow workers still have a seat. The couch stays turned 90° — the
      // long side runs down the den and the cushion faces the old cabinet.
      const addShopDesks = (ox, oy) => {
        for (let k = 0; k < 2; k++) {
          const x = ox + k * 1.55;
          desks.push({ x, y: oy, side: 'n', seat: { x: x + 0.7, y: oy - 0.45 }, floor: -1, shop: true });
          desks.push({ x, y: oy + 0.92, side: 's', seat: { x: x + 0.7, y: oy + 0.92 + 1.25 }, floor: -1, shop: true });
          solid(x, oy, 1.4, 0.8, 0.08);
          solid(x, oy + 0.92, 1.4, 0.8, 0.08);
        }
      };
      addShopDesks(1.2, 2.05);
      addShopDesks(5.05, 2.05);

      for (const dx of [0.28, 1.12, 1.96]) {
        prop('rack', { x: OW + dx, y: 0.2, floor: -1 });
        solid(OW + dx, 0.2, 0.7, 0.6);
      }
      prop('rug', { x: OW + 0.16, y: 0.1, w: 2.55, d: 0.88, color: '#3c4038', color2: '#2a2d28', floor: -1 });
      prop('boiler', { x: OW + 3.05, y: 0.16, floor: -1 });
      solid(OW + 3.05, 0.16, 1.2, 0.9);
      prop('heater', { x: OW + 4.45, y: 0.22, floor: -1 });
      solid(OW + 4.45, 0.22, 0.58, 0.58);
      prop('washer', { x: OW + 5.25, y: 0.2, floor: -1 });
      prop('dryer', { x: OW + 6.05, y: 0.2, floor: -1 });
      solid(OW + 5.25, 0.2, 1.55, 0.72);

      prop('janitor', { x: OW + 0.22, y: MR + 0.18, floor: -1 });
      solid(OW + 0.22, MR + 0.18, 0.7, 0.55);
      poi(OW + 0.55, MR + 1.05, 'water', 'back', { floor: -1 });
      prop('shelf', { x: OW + 1.15, y: MR + 0.16, w: 1.7, d: 0.42, floor: -1 });
      solid(OW + 1.15, MR + 0.16, 1.7, 0.42);
      poi(OW + 1.7, MR + 0.85, 'read', 'back', { floor: -1 });
      const spoolX = OW + 4.45, spoolY = MR + 2.15;
      prop('spool', { x: spoolX, y: spoolY, floor: -1 });
      solid(spoolX - 0.42, spoolY - 0.42, 0.84, 0.84);
      for (const [dx, dy, face] of [[-1.05, 0, 'front'], [1.05, 0, 'front'], [0, 1.05, 'back'], [0, -1.0, 'front']]) {
        prop('barStool', { x: spoolX + dx, y: spoolY + dy, tint: '#6e5844', floor: -1 });
        poi(spoolX + dx, spoolY + dy, 'stool', face, { sit: 0.47, floor: -1 });
      }
      prop('trashcan', { x: OW + 6.4, y: MR + 0.4, floor: -1 });

      prop('workbench', { x: 0.35, y: 6.2, w: 2.5, d: 0.68, floor: -1 });
      solid(0.35, 6.2, 2.5, 0.68);
      prop('barStool', { x: 1.35, y: 7.22, tint: '#6e5844', floor: -1 });
      poi(1.35, 7.22, 'stool', 'back', { sit: 0.47, floor: -1 });
      prop('toolchest', { x: 3.15, y: 6.25, floor: -1 });
      solid(3.15, 6.25, 0.62, 0.5);
      prop('boxes', { x: 0.3, y: 8.15, floor: -1 });
      solid(0.3, 8.15, 1.15, 0.7);
      prop('coat', { x: 0.42, y: 5.15, floor: -1 });
      prop('beanbag', { x: 1.7, y: 9.45, color: '#8a5a3c', raw: true, floor: -1 });
      prop('beanbag', { x: 2.85, y: 10.25, color: '#3e4650', raw: true, floor: -1 });
      poi(1.7, 9.45, 'beanbag', 'front', { sit: 0.18, floor: -1 });
      poi(2.85, 10.25, 'beanbag', 'front', { sit: 0.18, floor: -1 });

      prop('rug', { x: OW + 1.35, y: PY - 1.05, w: 1.35, d: 3.15, color: '#6a332c', color2: '#4a241f', floor: -1 });
      prop('couch', { x: OW + 1.55, y: PY - 0.85, w: 0.8, d: 2.8, rot: Math.PI / 2, color: '#6b342c', wood: '#3f2c22', floor: -1 });
      solid(OW + 1.45, PY - 1.0, 1.05, 3.0);
      for (let k = 0; k < 3; k++) poi(OW + 1.85, PY - 0.3 + k * 0.7, 'couch', 'front', { sit: 0.36, yaw: Math.PI / 2, floor: -1 });
      prop('crates', { x: OW + 2.7, y: PY + 0.15, floor: -1 });
      solid(OW + 2.7, PY + 0.15, 0.7, 0.62);
      prop('beanbag', { x: OW + 3.35, y: PY + 2.05, color: '#c4a15a', raw: true, floor: -1 });
      poi(OW + 3.35, PY + 2.05, 'beanbag', 'front', { sit: 0.18, floor: -1 });
      prop('arcade', { x: W - 1.2, y: PY + 0.35, color: '#3a322c', raw: true, floor: -1 });
      solid(W - 1.2, PY + 0.35, 0.7, 0.7);
      poi(W - 0.85, PY + 1.4, 'arcade', 'back', { floor: -1 });
      prop('lamp', { x: OW + 0.48, y: PY + 2.55, floor: -1 });
      const plantY = Math.min(D - 0.55, PY + 3.85);
      prop('plant', { x: W - 0.5, y: plantY, floor: -1 });
      solid(W - 0.72, plantY - 0.22, 0.44, 0.44);
      prop('sump', { x: 0.42, y: D - 0.72, floor: -1 });
      solid(0.22, D - 0.95, 0.42, 0.42);
      // 2nd floor: prompt loft — warm pastel lounge, garden, play table.
      addFloorPod(1, 1.5, 2.2, '#d4a0b8');
      addFloorPod(1, 5.7, 2.2, '#c9b07a');
      for (const [px, py, kind] of [[0.45, 0.42, 'plantSmall1'], [2.5, 0.4, 'plantSmall2'], [4.7, 0.48, 'plantSmall3'], [8.5, 0.42, 'plantSmall1']]) {
        prop('sprout', { x: px, y: py, kind, floor: 1 });
      }
      prop('foosball', { x: 3.35, y: 6.95, pair: 'fb2', floor: 1 });
      poi(2.9, 7.35, 'foosball', 'side', { pair: 'fb2', floor: 1 });
      poi(5.4, 7.35, 'foosball', 'side', { pair: 'fb2', floor: 1 });
      prop('bench', { x: 6.35, y: 7.15, w: 1.45, d: 0.48, color: '#f0b090', floor: 1 });
      prop('plant', { x: 6.55, y: 8.55, floor: 1 });
      prop('loungeChair', { x: 7.55, y: 6.85, color: '#ee8eae', floor: 1 });
      prop('loungeChair', { x: 7.55, y: 8.15, color: '#f0c56a', rot: Math.PI, floor: 1 });
      prop('shelf', { x: OW + 0.35, y: 0.22, w: 3.1, d: 0.45, floor: 1 });
      prop('speaker', { x: OW + 3.65, y: 0.32, floor: 1 });
      prop('tv', { x: OW + 4.15, y: 0.22, floor: 1 });
      prop('speaker', { x: OW + 5.45, y: 0.32, floor: 1 });
      prop('loungeChair', { x: OW + 4.35, y: 1.55, color: '#f09a74', rot: Math.PI, floor: 1 });
      prop('plant', { x: W - 0.5, y: 0.5, floor: 1 });
      poi(OW + 1.2, 1.05, 'read', 'back', { floor: 1 });
      poi(OW + 2.4, 1.05, 'read', 'back', { floor: 1 });
      prop('coat', { x: OW + 0.45, y: MR + 0.4, floor: 1 });
      prop('roundTable', { x: OW + 2.3, y: MR + 2.05, floor: 1 });
      for (const [dx, dy, face] of [[-0.95, 0, 'front'], [0.95, 0, 'front'], [0, 0.95, 'back'], [0, -0.9, 'front']]) {
        prop('barStool', { x: OW + 2.3 + dx, y: MR + 2.05 + dy, floor: 1 });
        poi(OW + 2.3 + dx, MR + 2.05 + dy, 'stool', face, { sit: 0.47, floor: 1 });
      }
      prop('lamp', { x: OW + 5.7, y: MR + 1.15, floor: 1 });
      prop('sprout', { x: OW + 4.4, y: MR + 0.45, kind: 'plantSmall2', floor: 1 });
      prop('sprout', { x: OW + 6.3, y: MR + 2.6, kind: 'plantSmall3', floor: 1 });
      prop('rug', { x: OW + 0.28, y: PY + 0.38, w: 6.35, d: Math.max(3.3, D - PY - 0.9), color: '#f2b39a', color2: '#e8927a', floor: 1 });
      prop('couch', { x: OW + 0.55, y: PY + 0.9, w: 2.8, d: 0.8, color: '#ee7f9e', floor: 1 });
      prop('coffeeTable', { x: OW + 1.15, y: PY + 2.2, w: 1.6, d: 0.7, radio: false, floor: 1 });
      prop('beanbag', { x: OW + 0.85, y: PY + 3.4, color: '#f2b59a', floor: 1 });
      prop('beanbag', { x: OW + 2.15, y: PY + 3.55, color: '#f3d78a', floor: 1 });
      prop('beanbag', { x: OW + 3.4, y: PY + 3.25, color: '#b7e0c2', floor: 1 });
      prop('bench', { x: OW + 4.15, y: PY + 2.45, w: 1.45, d: 0.48, color: '#f0c56e', floor: 1 });
      prop('lamp', { x: OW + 0.32, y: D - 0.62, floor: 1 });
      prop('arcade', { x: W - 1.25, y: PY + 1.15, color: '#e7a0c4', floor: 1 });
      prop('plant', { x: W - 0.5, y: D - 0.5, floor: 1 });
      prop('plant', { x: OW + 5.35, y: PY + 0.5, floor: 1 });
      prop('plant', { x: OW + 5.7, y: D - 0.7, floor: 1 });
      for (let k = 0; k < 3; k++) poi(OW + 1.05 + k * 0.9, PY + 1.6, 'couch', 'front', { sit: 0.36, floor: 1 });
      poi(OW + 0.85, PY + 3.4, 'beanbag', 'front', { sit: 0.18, floor: 1 });
      poi(OW + 2.15, PY + 3.55, 'beanbag', 'front', { sit: 0.18, floor: 1 });
      poi(OW + 3.4, PY + 3.25, 'beanbag', 'front', { sit: 0.18, floor: 1 });
      poi(W - 0.9, PY + 2.2, 'arcade', 'back', { floor: 1 });

      return {
        W, D, OW, OD, MR, PY, RW, grid, items, props, pois, desks, windows, posters, pp,
        door: { x: 0.4, y: D - 1.2, floor: 0 },
        floors: [-1, 0, 1],
        stairsAt: { x: sx + 0.65, y: sy + 0.75 },
      };
    }

    floorOf(p) {
      if (!p) return this.viewFloor || 0;
      if (p.desk && p.desk.floor != null) return p.desk.floor;
      if (p.napDesk && p.napDesk.floor != null) return p.napDesk.floor;
      if (p.poi && p.poi.floor != null) return p.poi.floor;
      return p.floor ?? 0;
    }

    setViewFloor(fl) {
      const id = OFFICE_FLOORS.some((f) => f.id === fl) ? fl : 0;
      if (this.viewFloor === id) return;
      this.viewFloor = id;
      try { localStorage.setItem('officeFloor', String(id)); } catch (_) {}
      if (typeof this.onFloorChange === 'function') this.onFloorChange(id);
    }

    glassX(add, x, y, d) {
      add(x + y + d / 2 + 0.02, () => {
        const P = (a, b, c) => this.iso(a, b, c);
        this.poly([P(x, y, 0), P(x, y + d, 0), P(x, y + d, 0.22), P(x, y, 0.22)], this.pal.trim);
        this.poly([P(x, y, 0.22), P(x, y + d, 0.22), P(x, y + d, 2.1), P(x, y, 2.1)], this.pal.glass, this.pal.glassEdge);
      });
    }

    glassY(add, x, y, w) {
      add(x + w / 2 + y + 0.02, () => {
        const P = (a, b, c) => this.iso(a, b, c);
        this.poly([P(x, y, 0), P(x + w, y, 0), P(x + w, y, 0.22), P(x, y, 0.22)], this.pal.trim);
        this.poly([P(x, y, 0.22), P(x + w, y, 0.22), P(x + w, y, 2.1), P(x, y, 2.1)], this.pal.glass, this.pal.glassEdge);
      });
    }

    // ------------------------------------------------------------ sessions → people

    update(sessions) {
      const working = sessions.filter((s) => WORKING.has(s.status));
      const off = sessions
        .filter((s) => !WORKING.has(s.status))
        .sort((a, b) => (b.lastEventAt || 0) - (a.lastEventAt || 0));
      const wanderers = off.slice(0, this.maxWanderers);
      this.offDuty = off.length - wanderers.length;

      const cap = this.plan.desks.length;
      const groundCap = this.plan.desks.filter((d) => (d.floor ?? 0) === 0).length;
      // Scene packs have a fixed floor plan; the built-in office grows with the team.
      // Shrink/grow against ground desks only — basement/2nd pods are fixed extras.
      if (!this.plan.fixed && (working.length > cap - 1 || (groundCap > 8 && working.length < groundCap * 0.35))) {
        this.plan = this.buildPlan(working.length);
        this.deskOf.clear();
        for (const p of this.people.values()) { p.poi = null; p.napDesk = null; p.desk = null; p.until = 0; }
      }

      const workKeys = new Set(working.map((s) => s.key));
      for (const k of [...this.deskOf.keys()]) if (!workKeys.has(k)) this.deskOf.delete(k);
      const used = new Set(this.deskOf.values());
      // Fill the desks that face us first so more faces and screens show.
      const desks = this.plan.desks;
      const order = desks.map((d, i) => i).sort((a, b) => (desks[a].side === 's') - (desks[b].side === 's') || a - b);
      for (const s of [...working].sort((a, b) => (a.startedAt || 0) - (b.startedAt || 0))) {
        if (this.deskOf.has(s.key)) continue;
        const i = order.find((n) => !used.has(n));
        if (i == null) continue;
        this.deskOf.set(s.key, i);
        used.add(i);
      }
      const takenDesks = new Set([...this.deskOf.values()].map((i) => desks[i]));

      const shown = new Set();
      for (const s of [...working, ...wanderers]) {
        const isWorker = this.deskOf.has(s.key);
        if (!isWorker && WORKING.has(s.status)) continue; // no desk left
        shown.add(s.key);
        let p = this.people.get(s.key);
        const born = !p;
        if (!p) { p = this.newPerson(s); this.people.set(s.key, p); }
        const prevCue = p.cueStatus;
        p.s = s;
        p.leaving = false;
        // Hop / ding / done flash follow the status the office already
        // consumes. The first snapshot stays quiet so a page load doesn't
        // chime the whole floor.
        if (!this.first && !born && prevCue && prevCue !== s.status) this.cueStatus(p, prevCue, s.status);
        p.cueStatus = s.status;
        // A right-click "send to…" holds the blob on that errand. Session
        // ticks must not yank a worker back to their desk until it ends.
        if (p.errandUntil && Date.now() < p.errandUntil) continue;
        if (isWorker) {
          this.release(p);
          const desk = desks[this.deskOf.get(s.key)];
          p.floor = desk.floor ?? 0;
          if (p.desk !== desk || p.mode !== 'work') { p.desk = desk; this.goTo(p, desk.seat); }
          p.mode = 'work';
        } else {
          if (p.mode !== 'wander') { p.mode = 'wander'; p.desk = null; p.poi = null; p.until = 0; p.floor = p.floor ?? 0; }
          // Someone started working at the desk this one was napping on.
          if (p.napDesk && takenDesks.has(p.napDesk)) { this.release(p); p.path = []; }
        }
      }
      for (const [k, p] of this.people) {
        if (!shown.has(k) && !p.leaving) {
          p.leaving = true;
          p.mode = 'leave';
          this.release(p);
          p.desk = null;
          this.goTo(p, this.plan.door);
        }
      }
      this.first = false;
    }

    release(p) {
      if (p.poi) { p.poi.taken = null; p.poi = null; }
      if (p.napDesk) { p.napDesk.napper = null; p.napDesk = null; }
    }

    newPerson(s) {
      const h = hash(s.key);
      const door = this.plan.door;
      return {
        key: s.key, h, s,
        skin: pick(SKIN, h, 3), hair: pick(HAIR, h, 7), pants: pick(PANTS, h, 13),
        shirt: pick(SHIRT[s.agent] || SHIRT.claude, h, 11),
        hairStyle: h % 4,
        phase: (h % 1000) / 1000 * Math.PI * 2,
        x: door.x, y: door.y, floor: door.floor ?? 0,
        path: [], walkFace: 'front', until: 0, mode: null,
        // On the first snapshot everyone is placed directly, no stampede.
        placeOnArrive: this.first,
      };
    }

    goTo(p, target) {
      if (p.placeOnArrive) {
        p.x = target.x; p.y = target.y; p.path = []; p.placeOnArrive = false;
        return;
      }
      p.path = this.plan.grid.path(p.x, p.y, target.x, target.y);
    }

    // How long a blob stays at a hangout before the next auto retarget.
    // SWA-3107 scales every band by AUTO_STAY_SCALE (10×).
    dwellFor(choice) {
      const base = choice.act === 'nap' ? rand(25, 60)
        : choice.act === 'pingpong' ? rand(15, 30)
        : choice.stairs ? rand(1.2, 2.2)
        : rand(8, 20);
      return base * 1000 * AUTO_STAY_SCALE;
    }

    wander(p, now) {
      if (p.errandUntil && now < p.errandUntil) return;
      if (p.path.length) return;
      if (p.poi && now < p.until) return;
      this.release(p);
      const plan = this.plan;
      const fl = p.floor ?? 0;
      const workingDesks = new Set([...this.deskOf.values()].map((i) => plan.desks[i]));
      const sleepy = p.s.status === 'idle';
      const weighted = [];
      for (const q of plan.pois) {
        if (q.taken) continue;
        if ((q.floor ?? 0) !== fl) continue;
        let w = 1;
        if (q.stairs) w = 0.55;
        if (q.pair) w = plan.pois.some((o) => o.pair === q.pair && o !== q && o.taken) ? 7 : 1.2;
        if (q.act === 'couch' || q.act === 'beanbag' || q.sleepy) w = sleepy ? 3 : 1.4;
        weighted.push([q, w]);
      }
      for (const d of plan.noNap ? [] : plan.desks) {
        if ((d.floor ?? 0) !== fl) continue;
        if (workingDesks.has(d) || d.napper) continue;
        weighted.push([{ x: d.seat.x, y: d.seat.y, act: 'nap', face: d.side === 'n' ? 'front' : 'back', sit: 0.34, desk: d, floor: d.floor }, sleepy ? 3 : 0.25]);
      }
      if (!weighted.length) return;
      let r = Math.random() * weighted.reduce((a, [, w]) => a + w, 0);
      let choice = weighted[0][0];
      for (const [q, w] of weighted) { r -= w; if (r <= 0) { choice = q; break; } }
      if (choice.desk) { choice.desk.napper = p.key; p.napDesk = choice.desk; }
      choice.taken = p.key;
      p.poi = choice;
      p.until = Infinity; // set on arrival
      p.stay = this.dwellFor(choice);
      this.goTo(p, choice);
    }

    // Which send-to targets exist on a floor. Missing furniture disables
    // the menu item; it never throws.
    blobTargets(floor) {
      const fl = floor ?? 0;
      const desks = (this.plan.desks || []).some((d) => (d.floor ?? 0) === fl);
      const acts = new Set((this.plan.pois || []).filter((q) => (q.floor ?? 0) === fl).map((q) => q.act));
      return { computer: desks, fridge: acts.has('fridge'), couch: acts.has('couch') };
    }

    workingDesk(d) {
      for (const i of this.deskOf.values()) if (this.plan.desks[i] === d) return true;
      return false;
    }

    nearest(list, p, xy) {
      let best = list[0], bestD = Infinity;
      for (const q of list) {
        const pt = xy(q);
        const d = Math.hypot(pt.x - p.x, pt.y - p.y);
        if (d < bestD) { best = q; bestD = d; }
      }
      return best;
    }

    // Desk seat in front of a monitor. Same point naps already use, but the
    // pose is an upright sit (act 'type') so they look at the computer.
    computerSpot(p, fl) {
      const desks = this.plan.desks.filter((d) => (d.floor ?? 0) === fl);
      if (!desks.length) return null;
      const free = desks.filter((d) => !this.workingDesk(d) && (!d.napper || d.napper === p.key));
      const idle = desks.filter((d) => !this.workingDesk(d));
      const pool = free.length ? free : (idle.length ? idle : desks);
      const best = this.nearest(pool, p, (d) => d.seat);
      return {
        x: best.seat.x, y: best.seat.y, act: 'type',
        face: best.side === 'n' ? 'front' : 'back', sit: 0.34,
        yaw: best.yaw, desk: best, floor: best.floor ?? fl,
      };
    }

    // Fridge / couch interact points already on this floor. Prefer a free
    // seat and claim it; if every seat is taken, copy the nearest point
    // without stealing the other blob's claim.
    hangoutSpot(p, kind, fl) {
      const spots = this.plan.pois.filter((q) => (q.floor ?? 0) === fl && q.act === kind && !q.stairs);
      if (!spots.length) return null;
      const free = spots.filter((q) => !q.taken || q.taken === p.key);
      const pool = free.length ? free : spots;
      const best = this.nearest(pool, p, (q) => q);
      if (free.length) return best;
      return {
        x: best.x, y: best.y, act: best.act, face: best.face,
        sit: best.sit || 0, yaw: best.yaw, floor: best.floor ?? fl,
      };
    }

    spotFor(p, kind, floor) {
      const fl = floor ?? 0;
      if (kind === 'computer') return this.computerSpot(p, fl);
      if (kind === 'fridge' || kind === 'couch') return this.hangoutSpot(p, kind, fl);
      return null;
    }

    // Path the blob to a computer, fridge, or couch on its current floor.
    // Returns false when that floor has no such target.
    sendBlob(key, kind) {
      const p = this.people.get(key);
      if (!p || p.leaving) return false;
      const fl = this.floorOf(p);
      const spot = this.spotFor(p, kind, fl);
      if (!spot) return false;
      this.release(p);
      p.mode = 'wander';
      p.desk = null;
      p.floor = fl;
      p.poi = spot;
      if (spot.desk && !this.workingDesk(spot.desk)) {
        spot.desk.napper = p.key;
        p.napDesk = spot.desk;
      } else if (!spot.desk && this.plan.pois.includes(spot)) {
        spot.taken = p.key;
      }
      p.until = Infinity;
      p.stay = this.dwellFor(spot);
      p.errandUntil = Infinity; // pinned until arrival, then set to p.until
      p.placeOnArrive = false;
      this.goTo(p, spot);
      return true;
    }

    // Squash-stretch for a left-click. u=0 is the impact squash; it
    // rebounds tall and damps out. Volume stays roughly constant.
    jellyScale(p) {
      if (!p || !p.jelly) return { sx: 1, sy: 1 };
      const u = Math.min(1, (p.jellyT || 0) / p.jelly);
      if (u >= 1) return { sx: 1, sy: 1 };
      const wob = -Math.cos(u * Math.PI * 2.35) * Math.pow(1 - u, 1.05);
      let amp = 0.28;
      try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) amp = 0.08; } catch (_) {}
      const sy = 1 + wob * amp;
      const sx = 1 / Math.sqrt(Math.max(0.35, sy));
      return { sx, sy };
    }

    motionScale() {
      try { if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 0.28; } catch (_) {}
      return 1;
    }

    // working / active -> hop. waiting_user / needs you -> ding.
    // done / completed -> flash. Same-family changes (thinking -> tool) stay quiet.
    statusCue(prev, next) {
      const n = String(next || '').toLowerCase();
      const p = String(prev || '').toLowerCase();
      if (!n || n === p) return null;
      if (CUE_DONE.has(n) && !CUE_DONE.has(p)) return 'done';
      if (CUE_WAIT.has(n) && !CUE_WAIT.has(p)) return 'ding';
      if (CUE_WORK.has(n) && !CUE_WORK.has(p)) return 'hop';
      return null;
    }

    cueStatus(p, prev, next) {
      const kind = this.statusCue(prev, next);
      if (!kind || !p) return null;
      if (kind === 'hop') { p.hop = 0.62; p.hopT = 0; }
      else if (kind === 'done') { p.flash = 1.2; p.flashT = 0; }
      this.playCue(kind);
      return kind;
    }

    // One-shot hop height in world units (0 at takeoff and landing).
    hopLift(p) {
      if (!p || !p.hop) return 0;
      const u = Math.min(1, (p.hopT || 0) / p.hop);
      if (u >= 1) return 0;
      return Math.sin(u * Math.PI) * 0.16 * this.motionScale();
    }

    // Gentle per-bot hop while the status stays working, so each blob
    // has its own beat instead of bouncing in unison.
    workHop(p, t) {
      const st = p && p.s && String(p.s.status || '').toLowerCase();
      if (!CUE_WORK.has(st) || (p.hop > 0)) return 0;
      const u = (((Number(t) || 0) + (p.phase || 0)) * 0.42) % 1;
      if (u < 0 || u >= 0.2) return 0;
      return Math.sin((u / 0.2) * Math.PI) * 0.05 * this.motionScale();
    }

    flashAmt(p) {
      if (!p || !p.flash) return 0;
      const u = Math.min(1, (p.flashT || 0) / p.flash);
      if (u >= 1) return 0;
      return Math.sin(u * Math.PI) * (1 - u * 0.2);
    }

    playCue(kind) {
      const now = performance.now();
      if (now - (this._cueAt || 0) < 180) return;
      this._cueAt = now;
      if (kind === 'ding') this.playChirp(880, 1175, 0.2, 0.09);
      else if (kind === 'done') this.playChirp(523, 784, 0.24, 0.08, 'triangle');
      else if (kind === 'hop') this.playChirp(494, 659, 0.11, 0.045);
    }

    // Same generated-tone path as the click wobble. No sample assets.
    playChirp(freq, freq2, dur, vol, type = 'sine') {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        const ctx = this._blobAudio || (this._blobAudio = new AC());
        if (ctx.state === 'suspended') ctx.resume();
        const t0 = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(Math.max(40, freq), t0);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq2), t0 + dur * 0.85);
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t0 + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + dur + 0.02);
      } catch (_) {}
    }

    // Short generated click-wobble. No sample asset; a damped sine drop.
    playBlobSfx() {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const now = performance.now();
      if (now - (this._sfxAt || 0) < 50) return;
      this._sfxAt = now;
      try {
        const ctx = this._blobAudio || (this._blobAudio = new AC());
        if (ctx.state === 'suspended') ctx.resume();
        const t0 = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t0);
        osc.frequency.exponentialRampToValueAtTime(92, t0 + 0.16);
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(0.16, t0 + 0.016);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0);
        osc.stop(t0 + 0.22);
        const body = ctx.createOscillator();
        const bodyGain = ctx.createGain();
        body.type = 'triangle';
        body.frequency.setValueAtTime(180, t0);
        body.frequency.exponentialRampToValueAtTime(70, t0 + 0.12);
        bodyGain.gain.setValueAtTime(0.0001, t0);
        bodyGain.gain.exponentialRampToValueAtTime(0.05, t0 + 0.012);
        bodyGain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.14);
        body.connect(bodyGain);
        bodyGain.connect(ctx.destination);
        body.start(t0);
        body.stop(t0 + 0.16);
      } catch (_) {}
    }

    pokeBlob(p) {
      if (!p) return;
      p.jelly = 0.58;
      p.jellyT = 0;
      this.playBlobSfx();
    }

    shareBackdrop(sky) {
      const c = sky && sky.sky;
      if (typeof c === 'number' && Number.isFinite(c)) return '#' + c.toString(16).padStart(6, '0');
      if (typeof c === 'string' && c) return c;
      return '#10121c';
    }

    // Clean still for X. The 3D path copies the WebGL view only, so name
    // tags, task bubbles and the page chrome are not in the picture.
    // 2D redraws into an offscreen canvas with those labels skipped.
    captureShare() {
      if (this.gl && this.loaded && this.scene && this.camera) {
        const rings = [];
        if (this.actors) {
          for (const a of this.actors.values()) {
            if (a.ring && a.ring.visible) { rings.push(a.ring); a.ring.visible = false; }
          }
        }
        try {
          this.gl.render(this.scene, this.camera);
          return this._blitShare(this.gl.domElement, this.sky);
        } finally {
          for (const r of rings) r.visible = true;
        }
      }
      if (!this.canvas) return null;
      const sky = skyColor();
      const snap = document.createElement('canvas');
      snap.width = this.canvas.width || this.cw || 0;
      snap.height = this.canvas.height || this.ch || 0;
      const ctx = snap.getContext('2d');
      if (!ctx || typeof ctx.setTransform !== 'function') {
        this._shareFrame = true;
        try { this.draw(); }
        finally { this._shareFrame = false; }
        return this._blitShare(this.canvas, sky);
      }
      const live = this.ctx;
      this.ctx = ctx;
      this._shareFrame = true;
      try { this.draw(); }
      finally { this.ctx = live; this._shareFrame = false; }
      return this._blitShare(snap, sky);
    }

    _blitShare(src, sky) {
      const sw = src && (src.width || 0);
      const sh = src && (src.height || 0);
      const backdrop = this.shareBackdrop(sky);
      if (!sw || !sh) return null;
      const out = document.createElement('canvas');
      const scale = Math.min(1, 1600 / Math.max(sw, sh));
      out.width = Math.max(1, Math.round(sw * scale));
      out.height = Math.max(1, Math.round(sh * scale));
      const ctx = out.getContext('2d');
      if (!ctx || typeof ctx.drawImage !== 'function') {
        out._share = { src, backdrop, empty: false };
        return out;
      }
      ctx.fillStyle = backdrop;
      ctx.fillRect(0, 0, out.width, out.height);
      ctx.drawImage(src, 0, 0, out.width, out.height);
      return out;
    }

    personKeyAt(e) {
      const r = this.canvas.getBoundingClientRect();
      const mx = e.clientX - r.left, my = e.clientY - r.top;
      for (let i = this.hit.length - 1; i >= 0; i--) {
        const h = this.hit[i];
        if (mx >= h.x0 && mx <= h.x1 && my >= h.y0 && my <= h.y1) return h.key;
      }
      return null;
    }

    onBlobContext(e) {
      const key = this.personKeyAt(e);
      if (!key || !this.people.get(key)) { this.hideBlobMenu(); return; }
      e.preventDefault();
      this.showBlobMenu(key, e.clientX, e.clientY);
    }

    ensureBlobMenu() {
      if (this._blobMenu) return;
      if (!document.getElementById('blob-menu-style')) {
        const css = document.createElement('style');
        css.id = 'blob-menu-style';
        css.textContent = [
          '.blob-menu{position:fixed;z-index:40;min-width:188px;padding:6px;border-radius:10px;',
          'border:1px solid var(--line,#e4e3dd);background:var(--panel,#fff);color:var(--ink,#1c1c1a);',
          'box-shadow:0 10px 28px rgba(0,0,0,.16);font:13px/1.3 ui-sans-serif,system-ui,sans-serif;}',
          '.blob-menu[hidden]{display:none;}',
          '.blob-menu button{display:block;width:100%;text-align:left;border:0;background:transparent;',
          'color:inherit;font:inherit;padding:7px 10px;border-radius:7px;cursor:pointer;}',
          '.blob-menu button:hover:not(:disabled){background:var(--bg,#f6f6f3);}',
          '.blob-menu button:disabled{opacity:.38;cursor:default;}',
        ].join('');
        document.head.appendChild(css);
      }
      const menu = document.createElement('div');
      menu.className = 'blob-menu';
      menu.hidden = true;
      menu.setAttribute('role', 'menu');
      menu.addEventListener('contextmenu', (ev) => ev.preventDefault());
      const items = [
        ['computer', 'Send to computer'],
        ['fridge', 'Send to fridge'],
        ['couch', 'Send to couch'],
      ];
      menu._btns = {};
      for (const [kind, label] of items) {
        const b = document.createElement('button');
        b.type = 'button';
        b.dataset.dest = kind;
        b.textContent = label;
        b.setAttribute('role', 'menuitem');
        b.addEventListener('click', (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          if (b.disabled) return;
          this.sendBlob(menu.dataset.key, kind);
          this.hideBlobMenu();
        });
        menu.appendChild(b);
        menu._btns[kind] = b;
      }
      document.body.appendChild(menu);
      this._blobMenu = menu;
    }

    showBlobMenu(key, clientX, clientY) {
      const p = this.people.get(key);
      if (!p) return;
      this.ensureBlobMenu();
      const avail = this.blobTargets(this.floorOf(p));
      const menu = this._blobMenu;
      menu.dataset.key = p.key;
      for (const kind of ['computer', 'fridge', 'couch']) {
        const b = menu._btns[kind];
        b.disabled = !avail[kind];
        b.title = b.disabled ? 'Not on this floor' : '';
      }
      menu.hidden = false;
      const pad = 8;
      const w = 200, h = 132;
      let x = clientX, y = clientY;
      const vw = window.innerWidth || 1024, vh = window.innerHeight || 768;
      if (x + w > vw - pad) x = Math.max(pad, vw - w - pad);
      if (y + h > vh - pad) y = Math.max(pad, vh - h - pad);
      menu.style.left = x + 'px';
      menu.style.top = y + 'px';
    }

    hideBlobMenu() {
      if (!this._blobMenu) return;
      this._blobMenu.hidden = true;
      this._blobMenu.dataset.key = '';
    }

    takeStairs(p) {
      const cur = p.floor ?? 0;
      const opts = [-1, 0, 1].filter((f) => Math.abs(f - cur) === 1);
      if (!opts.length) return;
      p.floor = opts[(p.h + Math.floor(this.t / 700)) % opts.length];
    }

    setVisible(v) { this.visible = v; if (v) this.resize(); }

    // ------------------------------------------------------------ camera / input

    resize() {
      const r = this.root.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      this.cw = Math.max(this.compact ? 1 : 200, r.width);
      this.ch = Math.max(this.compact ? 1 : 240, r.height);
      this.canvas.width = Math.round(this.cw * dpr);
      this.canvas.height = Math.round(this.ch * dpr);
      this.canvas.style.width = this.cw + 'px';
      this.canvas.style.height = this.ch + 'px';
      this.dpr = dpr;
    }

    fitCamera() {
      const { W, D } = this.plan;
      const left = this.iso(0, D, 0).x, right = this.iso(W, 0, 0).x;
      const top = this.iso(0, 0, WALL_H).y - 20, bottom = this.iso(W, D, 0).y + 10;
      const zoom = Math.min(this.cw / (right - left + 30), this.ch / (bottom - top + 30), 2);
      const want = { zoom, ox: this.cw / 2 - ((left + right) / 2) * zoom, oy: this.ch / 2 - ((top + bottom) / 2) * zoom };
      if (!this.cam) this.cam = want;
      else for (const k of ['zoom', 'ox', 'oy']) this.cam[k] += (want[k] - this.cam[k]) * 0.1;
    }

    // Short line for speech / thought bubbles. Live activity wins, then the
    // current issue title. Idle has no working line; done shows the idle note
    // (the previous task is already gone).
    speechLine(s) {
      s = s || {};
      const clean = (v) => String(v || '').replace(/\s*·\s*needs you$/i, '').replace(/\s+/g, ' ').trim();
      const clip = (v) => { const t = clean(v); return t.length > 180 ? t.slice(0, 179) + '…' : t; };
      const activity = clip(s.activity);
      const title = clip(s.title);
      const reply = clip(s.reply);
      if (s.status === 'error') return activity || clip(s.error) || title || 'Error';
      if (s.status === 'waiting') {
        if (activity && !/^paused$/i.test(activity)) return activity;
        return title || activity || reply || 'Waiting for you';
      }
      if (s.status === 'idle') return '';
      if (s.status === 'done' || s.status === 'interrupted') return reply || title || '';
      return activity || title || reply || (s.status === 'thinking' ? 'Thinking…' : '');
    }

    pointer(e, click) {
      const key = this.personKeyAt(e);
      this.canvas.style.cursor = key ? 'pointer' : 'default';
      // Orbit drags also emit click; only a real press pokes the blob.
      // Selection / focus still runs for every click, including a drag release.
      const dragged = !!(click && this._down && Math.hypot(e.clientX - this._down.x, e.clientY - this._down.y) > 6);
      if (click && key && !dragged) this.pokeBlob(this.people.get(key));
      if (key !== this.hoverKey || click) {
        this.hoverKey = key;
        const p = key && this.people.get(key);
        this.onHover(p ? p.s : null, { x: e.clientX, y: e.clientY }, !!click);
      }
    }

    iso(x, y, z = 0) {
      return { x: (x - y) * TW / 2, y: (x + y) * TH / 2 - z * TH };
    }

    // ------------------------------------------------------------ primitives

    poly(pts, fill, stroke) {
      const c = this.ctx;
      c.beginPath();
      pts.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
      c.closePath();
      if (fill) { c.fillStyle = fill; c.fill(); }
      if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1; c.stroke(); }
    }

    box(x, y, z, w, d, h, top, left, right) {
      const P = (a, b, cc) => this.iso(a, b, cc);
      this.poly([P(x, y + d, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x, y + d, z + h)], left);
      this.poly([P(x + w, y, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x + w, y, z + h)], right);
      this.poly([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)], top);
    }

    shade(color, amt) {
      if (color[0] !== '#') return color;
      const n = parseInt(color.slice(1), 16);
      const f = (v) => clamp(Math.round(v + amt), 0, 255);
      return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
    }

    roundRect(x, y, w, h, r, fill, stroke) {
      const c = this.ctx;
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
      if (fill) { c.fillStyle = fill; c.fill(); }
      if (stroke) { c.strokeStyle = stroke; c.lineWidth = 1.5; c.stroke(); }
    }

    // Draw flat things on a wall: 'y0' = back wall (runs along x),
    // 'x0' = left wall (runs along y).
    onWall(dir, a, z, fn) {
      const c = this.ctx;
      const o = dir === 'y0' ? this.iso(a, 0, z) : this.iso(0, a, z);
      c.save();
      c.translate(o.x, o.y);
      c.transform(1, dir === 'y0' ? 0.5 : -0.5, 0, 1, 0, 0);
      fn(c);
      c.restore();
    }

    // ------------------------------------------------------------ room shell

    // Concrete, cinder block and a low pipe run. Ground and loft keep drawRoom.
    drawBasementRoom() {
      const { W, D } = this.plan;
      const P = (x, y, z) => this.iso(x, y, z);
      const c = this.ctx;
      for (let x = 0; x < Math.ceil(W); x++) {
        for (let y = 0; y < Math.ceil(D); y++) {
          const x1 = Math.min(W, x + 1), y1 = Math.min(D, y + 1);
          this.poly([P(x, y), P(x1, y), P(x1, y1), P(x, y1)], (x + y) % 2 ? '#8a847c' : '#7a746c');
        }
      }
      c.strokeStyle = 'rgba(40,36,32,.35)';
      c.lineWidth = 1;
      for (let y = 0; y <= D; y += 2) {
        const a = P(0, y), b = P(W, y);
        c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      }
      this.poly([P(0, 0, 0), P(W, 0, 0), P(W, 0, WALL_H), P(0, 0, WALL_H)], '#6a635c');
      this.poly([P(0, 0, 0), P(0, D, 0), P(0, D, WALL_H), P(0, 0, WALL_H)], '#5c564e');
      this.poly([P(0, 0, WALL_H), P(W, 0, WALL_H), P(W, -0.12, WALL_H), P(-0.12, -0.12, WALL_H), P(-0.12, D, WALL_H), P(0, D, WALL_H)], '#3e3832');
      // exposed joists and a copper main, so the ceiling reads as a basement
      c.strokeStyle = '#3c2a1c';
      c.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        const z = 0.9 + i * ((D - 1.8) / 3);
        const a = P(0.2, z, 2.05), b = P(W - 0.2, z, 2.05);
        c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      }
      c.strokeStyle = '#b87333';
      c.lineWidth = 2.5;
      {
        const a = P(0.3, 1.15, 1.9), b = P(W - 0.3, 1.15, 1.9);
        c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      }
      // bare bulbs
      for (const [x, y] of [[W * 0.32, 3.2], [W * 0.72, 2.2], [2.2, 8.6]]) {
        const p = P(x, y, 1.75);
        c.fillStyle = '#ffd7a1';
        c.beginPath(); c.arc(p.x, p.y, 3.2, 0, Math.PI * 2); c.fill();
      }
      this.onWall('y0', W * 0.38, 1.7, (g) => {
        g.font = '800 11px ui-sans-serif, system-ui, sans-serif';
        g.fillStyle = '#f3e6cf';
        g.fillText('BOILER ROOM', 0, 0);
      });
      this.onWall('x0', 1.3, 1.5, (g) => {
        g.font = '800 8px ui-sans-serif, system-ui, sans-serif';
        g.fillStyle = '#f2e2a8';
        g.fillText('LOW PIPE', 0, 0);
      });
      this.onWall('x0', 3.6, 1.45, (g) => {
        g.font = '800 8px ui-sans-serif, system-ui, sans-serif';
        g.fillStyle = '#e7d27a';
        g.fillText('WET FLOOR', 0, 0);
      });
      // hopper vent, high on the left wall
      this.poly([P(0, 2.15, 1.55), P(0, 3.05, 1.55), P(0, 3.05, 1.92), P(0, 2.15, 1.92)], '#8ea094', '#2a2c28');
      // caution curb along the open front
      for (let x = 0; x < W; x += 0.4) {
        this.poly([P(x, D - 0.08, 0.18), P(Math.min(W, x + 0.2), D - 0.08, 0.18), P(Math.min(W, x + 0.2), D, 0.18), P(x, D, 0.18)], (x / 0.4) % 2 < 1 ? '#e2b43a' : '#1c1c1c');
      }
    }

    drawBasementProp(p) {
      const { x, y } = p;
      switch (p.t) {
        case 'rug':
          this.poly([
            this.iso(x, y), this.iso(x + p.w, y), this.iso(x + p.w, y + p.d), this.iso(x, y + p.d),
          ], p.color || '#6a332c', p.color2 || '#4a241f');
          break;
        case 'rack': this.serverRack(x, y); break;
        case 'boiler':
          this.box(x, y, 0, 1.15, 0.85, 1.35, '#4a4846', '#2e2c2a', '#3a3836');
          this.box(x + 0.4, y + 0.85, 0.62, 0.32, 0.04, 0.22, '#ff6a1a', '#ff6a1a', '#c2410c');
          break;
        case 'heater':
          this.box(x, y, 0, 0.55, 0.55, 1.1, '#e4dfd6', '#b7b1a8', '#9c968e');
          break;
        case 'washer':
        case 'dryer':
          this.box(x, y, 0, 0.68, 0.68, 0.9, p.t === 'dryer' ? '#c8c2b8' : '#d5d8dc', '#9a968e', '#7e7a74');
          break;
        case 'janitor':
          this.box(x, y, 0, 0.7, 0.55, 0.82, '#8a8e86', '#5e625c', '#6a6e66');
          break;
        case 'shelf':
          this.box(x, y, 0, p.w || 1.6, p.d || 0.4, 1.35, '#6a5a48', '#4a3e32', '#5a4a3c');
          break;
        case 'spool':
          this.box(x - 0.4, y - 0.4, 0.3, 0.8, 0.8, 0.42, '#c4a574', '#8a6239', '#6e4e2c');
          break;
        case 'barStool': this.stool(x, y, 0.47, p.tint || '#6e5844'); break;
        case 'trashcan':
          this.box(x - 0.15, y - 0.15, 0, 0.32, 0.32, 0.45, '#5a5e62', '#3a3e42', '#2a2e32');
          break;
        case 'workbench':
          this.box(x, y, 0.74, p.w || 2.2, p.d || 0.7, 0.06, '#c4a36a', '#8a6239', '#6e4e2c');
          this.box(x + 0.08, y + 0.08, 0, 0.08, 0.08, 0.74, '#5c6368', '#3e4448', '#4a5054');
          break;
        case 'toolchest':
          this.box(x, y, 0, 0.58, 0.48, 1.05, '#c45a4e', '#8e2e26', '#a33b32');
          break;
        case 'boxes':
          this.box(x, y, 0, 0.55, 0.45, 0.4, '#c4a574', '#a8845a', '#8a6a42');
          this.box(x + 0.08, y + 0.06, 0.4, 0.4, 0.34, 0.26, '#d2b48a', '#b89468', '#9a7a50');
          break;
        case 'coat':
          this.box(x - 0.08, y - 0.08, 0, 0.08, 0.08, 1.4, '#5c5348', '#3e3830', '#4a433c');
          break;
        case 'beanbag': this.beanbag(x, y, p.color || '#8a5a3c'); break;
        case 'couch':
          this.box(x, y, 0, p.w || 0.8, p.d || 2.6, 0.36, '#6b342c', '#4a2420', '#5a2c26');
          this.box(x - 0.06, y, 0.28, 0.12, p.d || 2.6, 0.28, '#7a4036', '#4a2420', '#5a2c26');
          break;
        case 'crates':
          this.box(x, y, 0, 0.48, 0.42, 0.32, '#b5834e', '#8a6239', '#6e4e2c');
          this.box(x + 0.18, y + 0.12, 0, 0.42, 0.36, 0.26, '#c4965c', '#9a7040', '#7a5830');
          break;
        case 'arcade':
          this.box(x, y, 0, 0.7, 0.7, 1.7, '#4a4038', '#2a2420', '#3a322c');
          this.poly([
            this.iso(x + 0.1, y + 0.7, 1.0), this.iso(x + 0.6, y + 0.7, 1.0),
            this.iso(x + 0.6, y + 0.7, 1.42), this.iso(x + 0.1, y + 0.7, 1.42),
          ], '#ff44aa');
          break;
        case 'lamp': this.floorLamp(x, y); break;
        case 'plant': this.plant(x, y); break;
        case 'sump':
          this.box(x - 0.22, y - 0.22, 0, 0.44, 0.44, 0.12, '#2e3438', '#1c2024', '#262a2e');
          break;
        default: break;
      }
    }

    drawRoom() {
      if ((this.viewFloor || 0) === -1) return this.drawBasementRoom();
      const { W, D, OW, MR, PY, pp } = this.plan;
      const pal = this.pal;
      const P = (x, y, z) => this.iso(x, y, z);
      const t = this.t / 1000;

      // floors: wood office, carpet meeting room, tiled pantry, wood lounge
      for (let x = 0; x < Math.ceil(OW); x++) {
        for (let y = 0; y < Math.ceil(D); y++) {
          const x1 = Math.min(OW, x + 1), y1 = Math.min(D, y + 1);
          this.poly([P(x, y), P(x1, y), P(x1, y1), P(x, y1)], (x + y) % 2 ? pal.wood1 : pal.wood2);
        }
      }
      for (let y = 0.5; y < D; y += 0.5) this.poly([P(0, y), P(OW, y), P(OW, y + 0.012), P(0, y + 0.012)], pal.woodLine);
      this.poly([P(OW, 0), P(W, 0), P(W, MR), P(OW, MR)], pal.carpet);
      for (let x = OW + 0.5; x < W; x += 0.5) this.poly([P(x, 0), P(x + 0.015, 0), P(x + 0.015, MR), P(x, MR)], pal.carpetLine);
      for (let i = 0; i < Math.ceil((W - OW) * 2); i++) {
        for (let j = 0; j < Math.ceil((PY - MR) * 2); j++) {
          const x = OW + i / 2, y = MR + j / 2;
          const x1 = Math.min(W, x + 0.5), y1 = Math.min(PY, y + 0.5);
          this.poly([P(x, y), P(x1, y), P(x1, y1), P(x, y1)], (i + j) % 2 ? pal.tileA : pal.tileB);
        }
      }
      for (let x = Math.floor(OW); x < W; x++) {
        for (let y = PY; y < D; y++) {
          const x0 = Math.max(OW, x), x1 = Math.min(W, x + 1), y1 = Math.min(D, y + 1);
          this.poly([P(x0, y), P(x1, y), P(x1, y1), P(x0, y1)], (x + Math.floor(y)) % 2 ? pal.wood1 : pal.wood2);
        }
      }
      this.poly([P(OW + 0.3, PY + 0.6), P(OW + 4.3, PY + 0.6), P(OW + 4.3, D - 0.4), P(OW + 0.3, D - 0.4)], pal.rug);
      this.poly([P(OW + 0.5, PY + 0.8), P(OW + 4.1, PY + 0.8), P(OW + 4.1, D - 0.6), P(OW + 0.5, D - 0.6)], null, pal.rugEdge);
      this.poly([P(pp.x0 - 0.6, pp.y - 1.4), P(pp.x1 + 0.6, pp.y - 1.4), P(pp.x1 + 0.6, pp.y + 1.3), P(pp.x0 - 0.6, pp.y + 1.3)], pal.mat);

      // walls
      this.poly([P(0, 0, 0), P(W, 0, 0), P(W, 0, WALL_H), P(0, 0, WALL_H)], pal.wallL);
      this.poly([P(0, 0, 0), P(0, D, 0), P(0, D, WALL_H), P(0, 0, WALL_H)], pal.wallR);
      this.poly([P(0, 0, WALL_H), P(W, 0, WALL_H), P(W, -0.15, WALL_H), P(-0.15, -0.15, WALL_H), P(-0.15, D, WALL_H), P(0, D, WALL_H)], pal.wallTop);
      this.poly([P(0, 0, 0), P(W, 0, 0), P(W, 0, 0.12), P(0, 0, 0.12)], pal.trim);
      this.poly([P(0, 0, 0), P(0, D, 0), P(0, D, 0.12), P(0, 0, 0.12)], pal.trim);

      // windows with the real sky outside
      const sky = skyColor();
      for (const x of this.plan.windows) {
        this.poly([P(x, 0, 0.85), P(x + 1.5, 0, 0.85), P(x + 1.5, 0, 2.0), P(x, 0, 2.0)], sky.sky);
        if (sky.night) {
          this.onWall('y0', x + 0.3, 1.75, (c) => { c.fillStyle = '#f4f1d0'; c.beginPath(); c.arc(0, 0, 3, 0, Math.PI * 2); c.fill(); });
          this.onWall('y0', x + 1.1, 1.55, (c) => { c.fillStyle = 'rgba(255,255,255,.7)'; c.fillRect(0, 0, 1.5, 1.5); });
        } else {
          const cx = x + 0.25 + ((t * 0.02 + x * 0.37) % 1) * 1.0;
          this.onWall('y0', cx, 1.65, (c) => {
            c.fillStyle = 'rgba(255,255,255,.85)';
            c.beginPath(); c.ellipse(0, 0, 7, 3, 0, 0, Math.PI * 2); c.ellipse(5, -2, 5, 3, 0, 0, Math.PI * 2); c.fill();
          });
        }
        this.poly([P(x + 0.74, 0, 0.85), P(x + 0.76, 0, 0.85), P(x + 0.76, 0, 2.0), P(x + 0.74, 0, 2.0)], pal.trim);
        this.poly([P(x, 0, 0.85), P(x + 1.5, 0, 0.85), P(x + 1.5, 0, 0.9), P(x, 0, 0.9)], pal.trim);
        this.poly([P(x, 0.05), P(x + 1.5, 0.05), P(x + 1.95, 1.2), P(x + 0.45, 1.2)], sky.night ? 'rgba(120,140,200,.06)' : 'rgba(255,250,230,.16)');
      }
      // meeting room whiteboard + sign
      const wx = OW + 2.4;
      this.poly([P(wx, 0, 0.8), P(wx + 2.6, 0, 0.8), P(wx + 2.6, 0, 1.95), P(wx, 0, 1.95)], '#fdfdfb', pal.trim);
      this.onWall('y0', wx + 0.25, 1.75, (c) => {
        c.lineWidth = 1.4;
        c.strokeStyle = '#3b8ee0';
        c.beginPath(); c.moveTo(0, 0); c.lineTo(22, 0); c.moveTo(0, 7); c.lineTo(36, 7); c.stroke();
        c.strokeStyle = '#c96442';
        c.strokeRect(46, -2, 20, 12); c.strokeRect(80, 6, 20, 12);
        c.beginPath(); c.moveTo(66, 4); c.lineTo(80, 12); c.stroke();
        c.strokeStyle = '#5f9a4c';
        c.beginPath(); c.moveTo(0, 22); for (let i = 0; i < 8; i++) c.lineTo(i * 8, 22 - ((i * 37) % 13)); c.stroke();
      });
      this.onWall('y0', OW + 0.5, 2.2, (c) => {
        c.font = '700 9px ui-sans-serif, system-ui, sans-serif'; c.fillStyle = this.shade(pal.trim, -60); c.fillText('MEETING', 0, 0);
      });
      // left wall: posters, clock, door
      for (const ps of this.plan.posters) {
        this.poly([P(0, ps.y, 0.95), P(0, ps.y + 0.9, 0.95), P(0, ps.y + 0.9, 1.95), P(0, ps.y, 1.95)], ps.color);
        this.onWall('x0', ps.y + 0.45, 1.4, (c) => {
          c.font = '800 8px ui-sans-serif, system-ui, sans-serif'; c.fillStyle = '#fff'; c.textAlign = 'center'; c.fillText(ps.text, 0, 0);
        });
      }
      this.onWall('x0', 1.0, 1.85, (c) => {
        c.beginPath(); c.arc(0, 0, 11, 0, Math.PI * 2); c.fillStyle = pal.bubble; c.fill();
        c.lineWidth = 2; c.strokeStyle = pal.trim; c.stroke();
        const parts = berlinParts();
        const hand = (ang, len, w) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.sin(ang) * len, -Math.cos(ang) * len); c.lineWidth = w; c.strokeStyle = pal.bubbleInk; c.stroke(); };
        hand(((parts.hour % 12) + parts.minute / 60) / 12 * Math.PI * 2, 5.5, 2);
        hand((parts.minute / 60) * Math.PI * 2, 8, 1.4);
      });
      const dy = this.plan.door.y;
      this.poly([P(0, dy - 0.6, 0), P(0, dy + 0.6, 0), P(0, dy + 0.6, 1.8), P(0, dy - 0.6, 1.8)], pal.trim);
      this.poly([P(0, dy - 0.52, 0), P(0, dy + 0.52, 0), P(0, dy + 0.52, 1.72), P(0, dy - 0.52, 1.72)], this.shade(pal.deskL, -10));
      this.onWall('x0', dy - 0.25, 0.85, (c) => { c.fillStyle = '#d8c48a'; c.beginPath(); c.arc(0, 0, 1.8, 0, Math.PI * 2); c.fill(); });
      this.poly([P(0.05, dy - 0.6), P(0.9, dy - 0.6), P(0.9, dy + 0.6), P(0.05, dy + 0.6)], pal.dark ? '#5a3b2e' : '#b9654a');
    }

    // ------------------------------------------------------------ furniture

    plant(x, y) {
      const pal = this.pal;
      this.box(x - 0.18, y - 0.18, 0, 0.36, 0.36, 0.3, this.shade(pal.pot, 10), pal.pot, this.shade(pal.pot, -15));
      const c = this.ctx;
      const b = this.iso(x, y, 0.3);
      const sway = Math.sin(this.t / 1400 + x) * 0.05;
      c.fillStyle = pal.plant;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        c.beginPath();
        c.ellipse(b.x + Math.cos(a) * 6, b.y - 13 + Math.sin(a) * 3, 5.5, 13, a / 3 + sway, 0, Math.PI * 2);
        c.fill();
      }
      c.fillStyle = this.shade(pal.plant, 22);
      c.beginPath(); c.ellipse(b.x, b.y - 20, 5, 10, sway, 0, Math.PI * 2); c.fill();
    }

    serverRack(x, y) {
      this.box(x, y, 0, 0.7, 0.6, 1.9, '#3a3d44', '#24262b', '#1b1d21');
      const c = this.ctx;
      const busy = this.deskOf.size;
      for (let r = 0; r < 7; r++) {
        for (let k = 0; k < 4; k++) {
          const on = Math.sin(this.t / (180 + r * 37 + k * 53) + r * k) > 0.2 && (r * 4 + k) < Math.max(4, busy * 3);
          const p = this.iso(x + 0.12 + k * 0.13, y + 0.6, 1.7 - r * 0.22);
          c.fillStyle = on ? (k % 3 === 0 ? '#ffb347' : '#5cf08a') : '#2f3a33';
          c.fillRect(p.x - 1, p.y - 1, 2.5, 2);
        }
      }
    }

    printer(x, y) {
      const pal = this.pal;
      this.box(x, y, 0, 0.75, 0.55, 0.55, pal.deskTop, pal.deskL, pal.deskR);
      this.box(x + 0.05, y + 0.05, 0.55, 0.65, 0.45, 0.28, '#e8e8e8', '#c8c8c8', '#b3b3b3');
      this.box(x + 0.15, y + 0.35, 0.83, 0.45, 0.15, 0.02, '#ffffff', '#eee', '#ddd');
    }

    pingpong(x, y) {
      for (const [lx, ly] of [[0.1, 0.1], [2.4, 0.1], [0.1, 1.2], [2.4, 1.2]]) this.box(x + lx, y + ly, 0, 0.08, 0.08, 0.7, '#333', '#333', '#222');
      this.box(x, y, 0.7, 2.6, 1.4, 0.06, '#2f7a52', '#245f40', '#1d4f35');
      const P = (a, b, c) => this.iso(a, b, c);
      this.poly([P(x + 0.04, y + 0.69, 0.765), P(x + 2.56, y + 0.69, 0.765), P(x + 2.56, y + 0.71, 0.765), P(x + 0.04, y + 0.71, 0.765)], '#ffffff');
      this.poly([P(x + 1.3, y - 0.05, 0.76), P(x + 1.3, y + 1.45, 0.76), P(x + 1.3, y + 1.45, 0.95), P(x + 1.3, y - 0.05, 0.95)], 'rgba(255,255,255,.55)', '#ddd');
    }

    meetingTable(x, y) {
      const pal = this.pal;
      this.box(x + 0.3, y + 0.5, 0, 0.12, 0.4, 0.7, pal.deskL, pal.deskL, pal.deskR);
      this.box(x + 2.6, y + 0.5, 0, 0.12, 0.4, 0.7, pal.deskL, pal.deskL, pal.deskR);
      this.box(x, y, 0.7, 3.0, 1.4, 0.08, this.shade(pal.deskTop, 12), pal.deskL, pal.deskR);
      this.box(x + 1.2, y + 0.45, 0.78, 0.5, 0.35, 0.03, '#2a2a2e', '#222', '#1a1a1a');
      this.box(x + 0.4, y + 0.3, 0.78, 0.2, 0.28, 0.02, '#fff', '#eee', '#ddd');
      this.box(x + 2.2, y + 0.8, 0.78, 0.12, 0.12, 0.12, '#f2f2f2', '#d0d0d0', '#bbb');
    }

    stool(x, y, h, color) {
      this.box(x - 0.04, y - 0.04, 0, 0.08, 0.08, h, '#555', '#444', '#333');
      this.box(x - 0.2, y - 0.2, h, 0.4, 0.4, 0.07, this.shade(color, 18), color, this.shade(color, -18));
    }

    roundTable(x, y) {
      const c = this.ctx;
      this.box(x - 0.05, y - 0.05, 0, 0.1, 0.1, 0.72, '#555', '#444', '#333');
      const p = this.iso(x, y, 0.75);
      c.fillStyle = this.shade(this.pal.deskTop, -15);
      c.beginPath(); c.ellipse(p.x, p.y + 3, 30, 15, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = this.shade(this.pal.deskTop, 15);
      c.beginPath(); c.ellipse(p.x, p.y, 30, 15, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#fff';
      c.beginPath(); c.ellipse(p.x + 8, p.y - 2, 5, 2.5, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#e6b35c';
      c.beginPath(); c.arc(p.x + 8, p.y - 3, 2, 0, Math.PI * 2); c.fill();
    }

    coffeeMachine(x, y) {
      this.box(x, y, 0.9, 0.5, 0.45, 0.6, '#555b63', '#3a3f45', '#2e3237');
      this.box(x + 0.15, y + 0.42, 1.0, 0.2, 0.05, 0.15, '#222', '#111', '#111');
      const p = this.iso(x + 0.4, y + 0.45, 1.35);
      this.ctx.fillStyle = Math.sin(this.t / 400) > 0 ? '#ff6b4a' : '#7a3a2a';
      this.ctx.fillRect(p.x, p.y, 2.5, 2.5);
      this.box(x + 0.6, y + 0.1, 0.9, 0.14, 0.14, 0.14, '#fff', '#ddd', '#ccc');
    }

    sink(x, y) {
      this.box(x, y + 0.05, 0.9, 0.55, 0.4, 0.02, '#9aa3ad', '#7d858e', '#6c737b');
      this.box(x + 0.22, y + 0.02, 0.92, 0.06, 0.06, 0.3, this.pal.metal, this.pal.metal, '#888');
      this.box(x + 0.22, y + 0.02, 1.2, 0.06, 0.2, 0.04, this.pal.metal, this.pal.metal, '#888');
    }

    fridge(x, y) {
      this.box(x, y, 0, 0.85, 0.75, 1.95, '#eef1f4', '#cfd5db', '#bcc3ca');
      const P = (a, b, c) => this.iso(a, b, c);
      this.poly([P(x, y + 0.75, 1.25), P(x + 0.85, y + 0.75, 1.25), P(x + 0.85, y + 0.75, 1.27), P(x, y + 0.75, 1.27)], '#9aa3ad');
      this.poly([P(x + 0.7, y + 0.75, 1.4), P(x + 0.73, y + 0.75, 1.4), P(x + 0.73, y + 0.75, 1.75), P(x + 0.7, y + 0.75, 1.75)], '#888');
      for (const [mx, mz, col] of [[0.2, 1.6, '#c96442'], [0.4, 1.45, '#3b8ee0'], [0.3, 0.9, '#5f9a4c']]) {
        const p = P(x + mx, y + 0.75, mz);
        this.ctx.fillStyle = col; this.ctx.fillRect(p.x, p.y, 4, 4);
      }
    }

    waterCooler(x, y) {
      this.box(x, y, 0, 0.42, 0.42, 0.95, '#e8ecef', '#cfd5db', '#bcc3ca');
      const c = this.ctx;
      const p = this.iso(x + 0.21, y + 0.21, 0.95);
      c.fillStyle = 'rgba(120,180,240,.6)';
      c.beginPath(); c.ellipse(p.x, p.y - 9, 8, 11, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = 'rgba(255,255,255,.5)';
      c.fillRect(p.x - 4, p.y - 16, 2, 10);
      const k = (this.t / 1800) % 1;
      c.fillStyle = 'rgba(255,255,255,.85)';
      c.beginPath(); c.arc(p.x + 2, p.y - 2 - k * 16, 1.2, 0, Math.PI * 2); c.fill();
      const tap = this.iso(x + 0.21, y + 0.42, 0.65);
      c.fillStyle = '#3b8ee0'; c.fillRect(tap.x - 1.5, tap.y, 3, 3);
    }

    couch(x, y) {
      const pal = this.pal;
      this.box(x, y - 0.05, 0.32, 2.8, 0.25, 0.42, this.shade(pal.couch, 10), pal.couchD, this.shade(pal.couchD, -12));
      this.box(x, y, 0, 2.8, 0.8, 0.32, pal.couch, pal.couchD, this.shade(pal.couchD, -12));
      this.box(x - 0.15, y - 0.05, 0, 0.18, 0.85, 0.52, this.shade(pal.couch, 6), pal.couchD, this.shade(pal.couchD, -12));
      this.box(x + 2.8, y - 0.05, 0, 0.18, 0.85, 0.52, this.shade(pal.couch, 6), pal.couchD, this.shade(pal.couchD, -12));
      this.box(x + 2.15, y + 0.12, 0.32, 0.35, 0.16, 0.28, '#e9c46a', '#d4ae52', '#c19c43');
    }

    coffeeTable(x, y) {
      const pal = this.pal;
      this.box(x, y, 0, 1.6, 0.7, 0.3, this.shade(pal.deskTop, -10), pal.deskL, pal.deskR);
      this.box(x + 0.2, y + 0.15, 0.3, 0.35, 0.25, 0.06, '#c96442', '#a85336', '#8f462e');
      this.box(x + 1.1, y + 0.3, 0.3, 0.12, 0.12, 0.12, '#fff', '#ddd', '#ccc');
    }

    beanbag(x, y, color) {
      const c = this.ctx;
      const p = this.iso(x, y, 0);
      c.fillStyle = this.shade(color, -25);
      c.beginPath(); c.ellipse(p.x, p.y - 4, 20, 11, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = color;
      c.beginPath(); c.ellipse(p.x, p.y - 8, 18, 10, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = this.shade(color, 20);
      c.beginPath(); c.ellipse(p.x - 3, p.y - 14, 10, 6, -0.2, 0, Math.PI * 2); c.fill();
    }

    books(x0, x1, y) {
      const P = (a, b, c) => this.iso(a, b, c);
      const cols = this.pal.book;
      for (let shelf = 0; shelf < 3; shelf++) {
        const z = 0.12 + shelf * 0.45;
        let bx = x0 + 0.05;
        let i = Math.round(x0 * 7) + shelf * 5;
        while (bx < x1 - 0.1) {
          const bw = 0.07 + ((i * 13) % 5) * 0.015;
          const bh = 0.25 + ((i * 7) % 4) * 0.03;
          if (i % 7 !== 3) this.poly([P(bx, y, z), P(bx + bw, y, z), P(bx + bw, y, z + bh), P(bx, y, z + bh)], cols[i % cols.length]);
          bx += bw + 0.015;
          i++;
        }
        this.poly([P(x0, y, z - 0.02), P(x1, y, z - 0.02), P(x1, y, z), P(x0, y, z)], this.pal.deskR);
      }
    }

    arcade(x, y) {
      this.box(x, y, 0, 0.7, 0.7, 1.75, '#3a2a6a', '#2b1f52', '#221843');
      const P = (a, b, c) => this.iso(a, b, c);
      const hue = (this.t / 20) % 360;
      this.poly([P(x + 0.1, y + 0.7, 1.0), P(x + 0.6, y + 0.7, 1.0), P(x + 0.6, y + 0.7, 1.45), P(x + 0.1, y + 0.7, 1.45)], `hsl(${hue},70%,55%)`);
      const blip = this.iso(x + 0.25 + 0.2 * Math.sin(this.t / 300), y + 0.7, 1.2);
      this.ctx.fillStyle = '#fff'; this.ctx.fillRect(blip.x, blip.y, 3, 3);
      this.poly([P(x, y + 0.7, 1.55), P(x + 0.7, y + 0.7, 1.55), P(x + 0.7, y + 0.7, 1.72), P(x, y + 0.7, 1.72)], '#ffcf4a');
      this.box(x, y + 0.7, 0.8, 0.7, 0.2, 0.08, '#4a3a8a', '#3a2a6a', '#2b1f52');
      const j = this.iso(x + 0.25, y + 0.8, 0.88);
      this.ctx.fillStyle = '#e04a4a'; this.ctx.beginPath(); this.ctx.arc(j.x, j.y - 3, 2.5, 0, Math.PI * 2); this.ctx.fill();
    }

    floorLamp(x, y) {
      const c = this.ctx;
      const b = this.iso(x, y, 0), t = this.iso(x, y, 1.7);
      if (skyColor().night) {
        c.fillStyle = 'rgba(255,220,140,.14)';
        c.beginPath(); c.ellipse(b.x, b.y, 50, 25, 0, 0, Math.PI * 2); c.fill();
      }
      c.strokeStyle = '#333'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(b.x, b.y); c.lineTo(t.x, t.y); c.stroke();
      c.fillStyle = '#333'; c.beginPath(); c.ellipse(b.x, b.y, 7, 3.5, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#f3e3b5';
      c.beginPath(); c.moveTo(t.x - 9, t.y + 4); c.lineTo(t.x + 9, t.y + 4); c.lineTo(t.x + 5, t.y - 8); c.lineTo(t.x - 5, t.y - 8); c.closePath(); c.fill();
    }

    vending(x, y, color) {
      this.box(x, y, 0, 0.7, 0.75, 1.85, this.shade(color, 15), this.shade(color, -10), color);
      const P = (a, b, c) => this.iso(a, b, c);
      const fx = x + 0.7;
      this.poly([P(fx, y + 0.08, 0.7), P(fx, y + 0.55, 0.7), P(fx, y + 0.55, 1.7), P(fx, y + 0.08, 1.7)], 'rgba(20,30,40,.75)');
      const cols = ['#f2d16b', '#5cf08a', '#ff8a65', '#81d4fa', '#ce93d8'];
      for (let r = 0; r < 4; r++) {
        for (let k = 0; k < 3; k++) {
          const q = P(fx, y + 0.15 + k * 0.14, 1.55 - r * 0.23);
          this.ctx.fillStyle = cols[(r * 3 + k + Math.round(y)) % cols.length];
          this.ctx.fillRect(q.x - 1.5, q.y - 4, 3, 5);
        }
      }
      this.poly([P(fx, y + 0.1, 0.25), P(fx, y + 0.5, 0.25), P(fx, y + 0.5, 0.45), P(fx, y + 0.1, 0.45)], '#222');
      const glow = P(fx, y + 0.65, 1.2);
      this.ctx.fillStyle = Math.sin(this.t / 700 + y) > 0 ? '#9ef' : '#4ad';
      this.ctx.fillRect(glow.x - 1, glow.y - 3, 2, 6);
    }

    foosball(x, y) {
      for (const [lx, ly] of [[0.1, 0.1], [1.42, 0.1], [0.1, 0.62], [1.42, 0.62]]) this.box(x + lx, y + ly, 0, 0.08, 0.08, 0.6, '#5a4030', '#5a4030', '#4a3428');
      this.box(x, y, 0.6, 1.6, 0.8, 0.25, '#2f8a4a', '#6e533b', '#5c4431');
      const P = (a, b, c) => this.iso(a, b, c);
      const players = this.plan && this.plan.pois.filter((q) => q.pair === 'fb' && q.taken).length === 2;
      for (let k = 0; k < 6; k++) {
        const rx = x + 0.2 + k * 0.24;
        const shift = players ? Math.sin(this.t / 120 + k) * 0.06 : 0;
        const a = P(rx, y - 0.15, 0.82), b = P(rx, y + 0.95, 0.82);
        this.ctx.strokeStyle = '#c8ccd0'; this.ctx.lineWidth = 1.2;
        this.ctx.beginPath(); this.ctx.moveTo(a.x, a.y); this.ctx.lineTo(b.x, b.y); this.ctx.stroke();
        for (let m = 0; m < 2; m++) {
          const q = P(rx, y + 0.25 + m * 0.3 + shift, 0.82);
          this.ctx.fillStyle = k % 2 ? '#c0392b' : '#2f6fb0';
          this.ctx.fillRect(q.x - 1.5, q.y - 3, 3, 6);
        }
      }
    }

    booth(add, x, y) {
      const P = (a, b, c) => this.iso(a, b, c);
      const pal = this.pal;
      const H = 2.0;
      // back walls (felt panels), then the stool, then glass front
      add(x + 0.65 + y + 0.05, () => {
        this.poly([P(x, y, 0), P(x + 1.3, y, 0), P(x + 1.3, y, H), P(x, y, H)], pal.dark ? '#3c4a5a' : '#9fb3c8');
        this.poly([P(x, y, 0), P(x, y + 1.3, 0), P(x, y + 1.3, H), P(x, y, H)], pal.dark ? '#34404e' : '#8ea3b8');
        this.poly([P(x + 0.02, y + 0.02), P(x + 1.28, y + 0.02), P(x + 1.28, y + 1.28), P(x + 0.02, y + 1.28)], pal.dark ? '#2a323b' : '#d8dee5');
        const lamp = P(x + 0.65, y + 0.65, H - 0.05);
        this.ctx.fillStyle = 'rgba(255,230,160,.9)';
        this.ctx.beginPath(); this.ctx.ellipse(lamp.x, lamp.y, 8, 4, 0, 0, Math.PI * 2); this.ctx.fill();
        this.stool(x + 0.65, y + 0.6, 0.43, '#c96442');
      });
      add(x + 1.3 + y + 0.65 + 0.3, () => {
        this.poly([P(x + 1.3, y, 0), P(x + 1.3, y + 1.3, 0), P(x + 1.3, y + 1.3, H), P(x + 1.3, y, H)], pal.glass, pal.glassEdge);
        this.poly([P(x, y + 1.3, 0), P(x + 1.3, y + 1.3, 0), P(x + 1.3, y + 1.3, H), P(x, y + 1.3, H)], pal.glass, pal.glassEdge);
        this.poly([P(x + 0.85, y + 1.3, 0), P(x + 0.87, y + 1.3, 0), P(x + 0.87, y + 1.3, H), P(x + 0.85, y + 1.3, H)], pal.glassEdge);
        this.box(x - 0.03, y - 0.03, H, 1.36, 1.36, 0.08, pal.dark ? '#4a5868' : '#b5c4d3', pal.trim, pal.trim);
      });
    }

    desk(dk, p) {
      const pal = dk.shop
        ? { ...this.pal, deskTop: '#8a8176', deskL: '#5e5a54', deskR: '#3f3c38', pot: '#6a6258', plant: '#6d8a62' }
        : this.pal;
      const { x, y } = dk;
      for (const [lx, ly] of [[0.05, 0.05], [1.27, 0.05], [0.05, 0.67], [1.27, 0.67]]) {
        this.box(x + lx, y + ly, 0, 0.08, 0.08, 0.72, pal.deskL, pal.deskL, pal.deskR);
      }
      this.box(x, y, 0.72, 1.4, 0.8, 0.07, pal.deskTop, pal.deskL, pal.deskR);
      const worker = p && p.mode === 'work' ? p : null;
      if (dk.side === 's') {
        const mx = x + 0.42, my = y + 0.1, mz = 0.79;
        this.box(mx + 0.22, my + 0.04, mz, 0.1, 0.1, 0.18, pal.monitor, pal.monitor, pal.monitor);
        this.box(mx, my, mz + 0.18, 0.56, 0.08, 0.42, pal.monitor, pal.monitor, this.shade(pal.monitor, 10));
        this.screen(mx + 0.04, my + 0.08, mz + 0.22, 0.48, 0.34, worker);
        this.box(x + 0.48, y + 0.48, 0.79, 0.44, 0.16, 0.025, '#d8d8d8', '#aaa', '#999');
      } else {
        // We see this monitor from behind; a status LED on its back.
        const mx = x + 0.42, my = y + 0.6, mz = 0.79;
        this.box(x + 0.48, y + 0.16, 0.79, 0.44, 0.16, 0.025, '#d8d8d8', '#aaa', '#999');
        this.box(mx + 0.22, my - 0.02, mz, 0.1, 0.1, 0.18, pal.monitor, pal.monitor, pal.monitor);
        this.box(mx, my, mz + 0.18, 0.56, 0.08, 0.42, this.shade(pal.monitor, 15), this.shade(pal.monitor, 8), this.shade(pal.monitor, 12));
        if (worker) {
          const g = this.iso(mx + 0.28, my + 0.08, mz + 0.5);
          this.ctx.fillStyle = STATUS_COLOR[worker.s.status] || '#888';
          this.ctx.globalAlpha = 0.6 + 0.4 * Math.sin(this.t / 400 + worker.phase);
          this.ctx.beginPath(); this.ctx.arc(g.x, g.y, 1.8, 0, Math.PI * 2); this.ctx.fill();
          this.ctx.globalAlpha = 1;
        }
      }
      // personal touches, stable per desk
      const h = hash(`${x.toFixed(1)},${y.toFixed(1)}`);
      if (h % 3 === 0) this.box(x + 1.12, y + 0.3, 0.79, 0.12, 0.12, 0.13, '#f2f2f2', '#d0d0d0', '#bbb');
      if (!dk.shop && h % 5 === 1) {
        this.box(x + 0.14, y + 0.24, 0.79, 0.12, 0.12, 0.08, pal.pot, pal.pot, this.shade(pal.pot, -15));
        const q = this.iso(x + 0.2, y + 0.3, 0.87);
        this.ctx.fillStyle = pal.plant;
        this.ctx.beginPath(); this.ctx.ellipse(q.x, q.y - 4, 4, 6, 0, 0, Math.PI * 2); this.ctx.fill();
      }
      if (h % 4 === 2) this.box(x + 0.12, y + 0.45, 0.79, 0.22, 0.15, 0.05, '#f2d16b', '#d9b84f', '#c4a33f');
    }

    screen(x, y, z, w, h, p) {
      const P = (a, b, cc) => this.iso(a, b, cc);
      const st = p ? p.s.status : 'off';
      const base = { thinking: '#3a3160', tool: '#14324f', typing: '#123d2e', waiting: '#4d3510', error: '#4a1612' }[st] || this.pal.screenOff;
      const corners = [P(x, y, z), P(x + w, y, z), P(x + w, y, z + h), P(x, y, z + h)];
      this.poly(corners, base);
      if (!p) return;
      const c = this.ctx;
      c.save();
      c.beginPath();
      corners.forEach((q, i) => (i ? c.lineTo(q.x, q.y) : c.moveTo(q.x, q.y)));
      c.closePath();
      c.clip();
      const t = this.t / 1000;
      const col = STATUS_COLOR[st];
      if (st === 'tool' || st === 'typing') {
        const scroll = (t * (st === 'tool' ? 2.2 : 1.2) + p.phase) % 1;
        for (let i = -1; i < 6; i++) {
          const zz = z + h - 0.05 - ((i + scroll) * h) / 5;
          const len = 0.12 + ((p.h >> ((i + 8) & 15)) % 7) / 20;
          const a = P(x + 0.05, y, zz), b = P(x + 0.05 + Math.min(len, w - 0.1), y, zz);
          c.strokeStyle = i % 3 === 0 ? col : 'rgba(255,255,255,.55)';
          c.lineWidth = 1.5;
          c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
        }
      } else {
        const m = P(x + w / 2, y, z + h / 2);
        c.fillStyle = col;
        c.globalAlpha = st === 'thinking' ? 0.5 + 0.4 * Math.sin(t * 3 + p.phase) : 0.9;
        c.font = '700 10px ui-sans-serif, system-ui, sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText({ thinking: '…', waiting: '?', error: '!' }[st] || '', m.x, m.y);
      }
      c.restore();
      c.save();
      c.globalAlpha = 0.18;
      const g = P(x + w / 2, y + 0.35, 0.8);
      c.fillStyle = col;
      c.beginPath(); c.ellipse(g.x, g.y, 18, 7, 0, 0, Math.PI * 2); c.fill();
      c.restore();
    }

    chair(dk, p) {
      const pal = dk.shop ? { ...this.pal, chair: '#5c5146' } : this.pal;
      const sx = dk.seat.x - 0.25, sy = dk.seat.y - 0.22;
      const seated = p && !p.path.length && p.pose === 'sit' && Math.hypot(p.x - dk.seat.x, p.y - dk.seat.y) < 0.05;
      const ox = seated ? 0 : 0.12, oy = seated ? 0 : dk.side === 's' ? 0.18 : -0.18;
      this.box(sx + 0.22 + ox, sy + 0.19 + oy, 0, 0.06, 0.06, 0.32, '#222', '#222', '#111');
      if (dk.side === 'n') this.box(sx + ox, sy + oy - 0.05, 0.4, 0.5, 0.07, 0.55, this.shade(pal.chair, 15), pal.chair, this.shade(pal.chair, -10));
      this.box(sx + ox, sy + oy, 0.32, 0.5, 0.45, 0.08, this.shade(pal.chair, 15), pal.chair, this.shade(pal.chair, -10));
      if (dk.side === 's' && !seated) this.box(sx + ox, sy + oy + 0.4, 0.4, 0.5, 0.07, 0.5, this.shade(pal.chair, 15), pal.chair, this.shade(pal.chair, -10));
    }

    // ------------------------------------------------------------ people

    stateOf(p) {
      const s = p.s || {};
      if (p.path.length) return { pose: 'walk', face: p.walkFace, act: null, sitZ: 0 };
      if (p.mode === 'work' && p.desk) {
        const face = p.desk.side === 'n' ? 'front' : 'back';
        if (s.status === 'waiting' || s.status === 'error') return { pose: 'stand', face, act: 'wave', sitZ: 0 };
        if (p.desk.pose === 'stand') return { pose: 'stand', face, act: 'station', sitZ: 0 };
        return { pose: 'sit', face, act: s.status === 'tool' || s.status === 'typing' ? 'type' : 'think', sitZ: 0.34 };
      }
      if (p.mode === 'wander' && p.poi) {
        const q = p.poi;
        return { pose: q.sit ? 'sit' : 'stand', face: q.face === 'side' ? 'front' : q.face, act: q.act, sitZ: q.sit || 0 };
      }
      return { pose: 'stand', face: 'front', act: null, sitZ: 0 };
    }

    person(p) {
      const c = this.ctx;
      const t = this.t / 1000;
      const s = p.s || {};
      const st = this.stateOf(p);
      p.pose = st.pose;
      if (!p.look) p.look = blobLook(p);
      const look = p.look;
      const col = hex6(look.color);
      const moving = st.pose === 'walk';
      const seated = st.pose === 'sit';
      const front = st.face !== 'back';
      const napping = st.act === 'nap';
      const b = this.iso(p.x, p.y, st.sitZ * 0.6);
      const step = moving ? Math.sin(t * 12 + p.phase) : 0;
      // Blobs float a little above the floor (like the 3D office) and hop when walking.
      const hover = napping ? 0.5 : 3 + Math.sin(t * 2.2 + p.phase) * 1.2;
      const bob = moving ? Math.abs(step) * 3 : 0;

      const fb = this.iso(p.x, p.y, 0);
      // Plain flat shadow under the blob (no coloured glow).
      c.save();
      c.fillStyle = this.pal.shadow;
      c.beginPath(); c.ellipse(fb.x, fb.y, 9 - hover * 0.4, 4.5 - hover * 0.2, 0, 0, Math.PI * 2); c.fill();
      c.restore();
      if (this.hoverKey === p.key) {
        c.strokeStyle = STATUS_COLOR[s.status] || '#888';
        c.lineWidth = 2;
        c.beginPath(); c.ellipse(fb.x, fb.y, 14, 7, 0, 0, Math.PI * 2); c.stroke();
      }

      let x = b.x;
      if (st.act === 'pingpong') x += Math.sin(t * 7 + p.phase) * 4;
      if (st.act === 'foosball') x += Math.sin(t * 5 + p.phase) * 1.5;
      const hopPx = (this.hopLift(p) + (moving ? 0 : this.workHop(p, t))) * 46;
      const y = b.y - hover - bob - hopPx;
      const sc = s.subagent ? 0.8 : 1;
      const H = 28; // blob height in px (people were ~35px incl. legs)
      const top = BLOB_TOP[look.shape] || 1;
      const k = H / top;
      // Squash & stretch: walking hop, typing jiggle, napping melt, waving wobble.
      let sx = 1, sy = 1, lean = 0;
      if (moving) { const q = Math.cos(t * 24 + p.phase * 2) * 0.05; sx += q; sy -= q; }
      if (st.act === 'type') { const q = Math.sin(t * 18 + p.phase) > 0 ? 0.03 : 0; sy -= q; sx += q; }
      if (st.act === 'think') lean = Math.sin(t * 1.5 + p.phase) * 0.05;
      if (st.act === 'wave') lean = Math.sin(t * 8 + p.phase) * 0.12;
      if (napping) { sy = 0.72; sx = 1.18; }
      if (seated && !napping) { sy *= 0.94; sx *= 1.03; }
      const jelly = this.jellyScale(p);
      sx *= jelly.sx;
      sy *= jelly.sy;

      c.save();
      c.translate(x, y);
      c.scale(sc, sc);
      c.rotate(lean);
      c.scale(sx * k, -sy * k); // unit space, y up

      // Body: one flat solid colour, like the Grok Bot avatar picker (no
      // gradient, outline or sheen).
      blobPath(c, look.shape);
      c.fillStyle = col;
      c.fill('nonzero');

      // Eyes: two plain black slanted dashes (picker style). Closed/sleepy =
      // short flat dashes. ?eyes=white swaps the ink to white.
      if (front) {
        const sleepy = s.status === 'idle' || napping;
        const blink = Math.sin(t * 0.7 + p.phase * 3) > 0.985;
        const closed = sleepy || blink;
        c.strokeStyle = BLOB_WHITE_EYES ? '#ffffff' : '#111114';
        c.lineCap = 'round';
        c.lineWidth = 0.062;
        const tilt = 0.22; // lean the dashes slightly, like the picker eyes
        for (const [ex, ey] of BLOB_EYES[look.shape] || BLOB_EYES.oval) {
          c.beginPath();
          if (closed) { c.moveTo(ex - 0.045, ey); c.lineTo(ex + 0.045, ey); }
          else {
            const hl = 0.06, dx = Math.sin(tilt) * hl, dy = Math.cos(tilt) * hl;
            c.moveTo(ex - dx, ey - dy); c.lineTo(ex + dx, ey + dy);
          }
          c.stroke();
        }
        if (s.status === 'error' && p.mode === 'work') {
          const [[ax], [bx]] = BLOB_EYES[look.shape] || BLOB_EYES.oval;
          const ey0 = (BLOB_EYES[look.shape] || BLOB_EYES.oval)[0][1];
          c.strokeStyle = '#111114'; c.lineWidth = 0.035;
          c.beginPath(); c.arc((ax + bx) / 2, ey0 - 0.2, 0.06, 0.15 * Math.PI, 0.85 * Math.PI); c.stroke();
        }
      }
      c.restore();

      const flash = this.flashAmt(p);
      if (flash > 0) {
        c.save();
        c.globalAlpha = 0.42 * flash;
        c.fillStyle = '#fff4cc';
        c.beginPath();
        c.ellipse(x, y - 10 * sc, 16 * sc, 14 * sc, 0, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }

      // Small props so activities still read on the floor.
      const px = x + 11 * sc, py = y - 8 * sc;
      const sip = Math.sin(t * 0.9 + p.phase) > 0.6;
      switch (st.act) {
        case 'coffee':
        case 'water': {
          const cy = sip ? py - 6 : py;
          c.fillStyle = st.act === 'water' ? 'rgba(170,215,255,.95)' : '#fafafa';
          c.fillRect(px - 2, cy, 5, 6);
          if (st.act === 'coffee') { c.fillStyle = '#6b3f22'; c.fillRect(px - 1, cy, 3, 1.5); }
          break;
        }
        case 'read':
          if (front) { c.fillStyle = pick(this.pal.book, p.h, 5); c.fillRect(x - 7, y - 10, 14, 9); c.fillStyle = '#fff'; c.fillRect(x - 0.5, y - 10, 1, 9); }
          break;
        case 'phone':
          c.fillStyle = '#222'; c.fillRect(px - 1, py - 10, 3, 6);
          break;
        case 'pingpong':
          c.fillStyle = '#c0392b';
          c.beginPath(); c.arc(px + 1, py - 6, 4, 0, Math.PI * 2); c.fill();
          break;
        case 'arcade':
        case 'beanbag': {
          const hy = y - H * sc * 0.75;
          c.strokeStyle = '#222'; c.lineWidth = 2;
          c.beginPath(); c.arc(x, hy, 9 * sc, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
          break;
        }
        default: break;
      }

      const headTop = y - H * sc * (napping ? 0.72 : 1) - 2;
      this.hit.push({ key: p.key, x0: x - 15, x1: x + 15, y0: headTop - 18, y1: fb.y + 4 });
      return { x, y: headTop, act: st.act };
    }

    bubble(p, at) {
      const c = this.ctx;
      const t = this.t / 1000;
      const s = p.s || {};
      const st = s.status;
      const pal = this.pal;
      const x = at.x, y = at.y - 6;
      c.save();
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      const font = (w, px) => `${w} ${px}px ui-sans-serif, system-ui, -apple-system, "PingFang TC", "Apple Color Emoji", sans-serif`;
      c.font = font(600, 10);

      const badge = this.showAgent && AGENT_BADGES[s.agent];
      const pill = (text, fg, bg, yy, alpha = 1, identify = false) => {
        c.globalAlpha = alpha;
        let tx = text;
        while (c.measureText(tx).width > 118 && tx.length > 2) tx = tx.slice(0, -2) + '…';
        const extra = badge && identify ? 26 : 0;
        const w = c.measureText(tx).width + 12 + extra;
        const height = extra ? 22 : 16;
        this.roundRect(x - w / 2, yy - height / 2, w, height, 8, bg);
        c.fillStyle = fg;
        c.fillText(tx, x + extra / 2, yy + 0.5);
        if (extra) this.agentBadge(badge, x - w / 2 + 13, yy);
        c.globalAlpha = 1;
        return yy - 8;
      };

      let top = y;
      const spoken = this.speechLine(s);
      const caption = spoken && !/^thinking…$/i.test(spoken) ? spoken : '';
      if (p.mode === 'work' && !p.path.length) {
        const col = STATUS_COLOR[st] || '#888';
        if (st === 'thinking') {
          c.fillStyle = pal.bubble;
          c.beginPath(); c.arc(x + 6, y - 2, 2, 0, Math.PI * 2); c.fill();
          c.beginPath(); c.arc(x + 10, y - 7, 3, 0, Math.PI * 2); c.fill();
          this.roundRect(x - 2, y - 26, 32, 16, 8, pal.bubble);
          for (let i = 0; i < 3; i++) {
            c.fillStyle = col;
            c.globalAlpha = 0.3 + 0.7 * Math.max(0, Math.sin(t * 5 - i * 0.7));
            c.beginPath(); c.arc(x + 6 + i * 8, y - 18, 2.4, 0, Math.PI * 2); c.fill();
          }
          c.globalAlpha = 1;
          top = y - 26;
        } else if (st === 'typing') {
          this.roundRect(x - 2, y - 24, 34, 16, 5, col);
          c.beginPath(); c.moveTo(x + 2, y - 9); c.lineTo(x - 2, y - 3); c.lineTo(x + 8, y - 9); c.fillStyle = col; c.fill();
          const n = Math.floor(t * 4) % 4;
          c.fillStyle = '#fff';
          for (let i = 0; i < n; i++) { c.beginPath(); c.arc(x + 7 + i * 8, y - 16, 2, 0, Math.PI * 2); c.fill(); }
          top = y - 24;
        } else if (st === 'tool') {
          top = pill('⚙ ' + (caption || (s.activity || 'tool').split(/[:\s]/)[0]), '#fff', col, y - 12);
        } else if (st === 'waiting' || st === 'error') {
          const jump = Math.abs(Math.sin(t * 4)) * 4;
          c.fillStyle = col;
          c.beginPath(); c.arc(x, y - 12 - jump, 9, 0, Math.PI * 2); c.fill();
          c.fillStyle = '#fff';
          c.font = font(800, 12);
          c.fillText('!', x, y - 11.5 - jump);
          c.font = font(600, 10);
          top = y - 22 - jump;
        }
        if (caption && st !== 'tool') top = pill(caption, pal.bubbleInk, pal.bubble, top - 14);
      } else if (p.mode === 'wander') {
        const justDone = st === 'done' && Date.now() - (s.lastEventAt || 0) < 3 * 60_000;
        const dozing = at.act === 'nap' || (st === 'idle' && (at.act === 'couch' || at.act === 'beanbag' || (p.poi && p.poi.sleepy)));
        if (justDone) {
          c.fillStyle = STATUS_COLOR.done;
          c.beginPath(); c.arc(x, y - 10, 7, 0, Math.PI * 2); c.fill();
          c.fillStyle = '#fff'; c.font = font(800, 9); c.fillText('✓', x, y - 9.5); c.font = font(600, 10);
          top = y - 18;
        } else if (dozing && !p.path.length) {
          c.fillStyle = STATUS_COLOR.idle;
          c.font = font(700, 10);
          for (let i = 0; i < 3; i++) {
            const k = (t * 0.6 + i / 3) % 1;
            c.globalAlpha = 1 - k;
            c.fillText('z', x + 6 + k * 10, y - 4 - k * 18);
          }
          c.globalAlpha = 1;
          c.font = font(600, 10);
          top = y - 20;
        } else if (at.act && (ACT_EMOJI[at.act] || (p.poi && p.poi.emoji)) && !p.path.length) {
          const cycle = (t + p.phase * 3) % 9;
          if (cycle < 2.2) {
            c.globalAlpha = Math.min(1, cycle * 3, (2.2 - cycle) * 3);
            c.font = font(400, 13);
            c.fillText((p.poi && p.poi.emoji) || ACT_EMOJI[at.act], x, y - 10);
            c.globalAlpha = 1;
            c.font = font(600, 10);
            top = y - 18;
          }
        }
      }

      const hover = this.hoverKey === p.key;
      if (!s.subagent || hover) {
        pill(this.label(s), pal.text, pal.tagBg, top - 11, p.mode === 'work' || hover ? 1 : 0.7, true);
      } else if (badge) {
        this.agentBadge(badge, x, top - 11);
      }
      c.restore();
    }

    agentBadge(badge, x, y) {
      const c = this.ctx;
      c.save();
      c.globalAlpha = 1;
      if (badge.image.complete && badge.image.naturalWidth > 0) {
        c.imageSmoothingEnabled = true;
        c.imageSmoothingQuality = 'high';
        c.drawImage(badge.image, x - 9, y - 9, 18, 18);
      } else {
        c.fillStyle = this.pal.text;
        c.font = '800 10px ui-sans-serif, system-ui, sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(badge.short, x, y + 0.5);
      }
      c.restore();
    }

    moveCat(dt, now) {
      const k = this.cat;
      if (!k.path.length && now > k.until) {
        const { W, D, grid } = this.plan;
        let tx, ty, tries = 0;
        do { tx = rand(0.6, W - 0.6); ty = rand(1, D - 0.6); tries++; } while (grid.blocked(tx, ty) && tries < 30);
        k.path = grid.path(k.x, k.y, tx, ty);
        k.until = Infinity;
      }
      if (k.path.length) {
        const n = k.path[0];
        const dx = n.x - k.x, dy = n.y - k.y, d = Math.hypot(dx, dy), v = 1.2 * dt;
        if (d > 0.001) k.face = dx - dy >= 0 ? 1 : -1;
        if (d <= v) { k.x = n.x; k.y = n.y; k.path.shift(); if (!k.path.length) k.until = now + rand(4000, 12000); }
        else { k.x += (dx / d) * v; k.y += (dy / d) * v; }
      }
    }

    drawCat() {
      const k = this.cat;
      const c = this.ctx;
      const p = this.iso(k.x, k.y, 0);
      const t = this.t / 1000;
      const walking = k.path.length > 0;
      c.save();
      c.translate(p.x, p.y);
      c.scale(k.face, 1);
      c.fillStyle = this.pal.shadow;
      c.beginPath(); c.ellipse(0, 0, 8, 3, 0, 0, Math.PI * 2); c.fill();
      const col = '#e09a4a';
      c.fillStyle = col;
      if (walking) {
        const s = Math.sin(t * 14) * 1.5;
        c.fillRect(-5, -4, 2, 4 + s); c.fillRect(3, -4, 2, 4 - s);
      }
      c.beginPath(); c.ellipse(0, walking ? -6 : -4, 7, walking ? 4 : 5, 0, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.arc(6, walking ? -10 : -9, 3.6, 0, Math.PI * 2); c.fill();
      c.beginPath(); c.moveTo(4, -12); c.lineTo(5, -16); c.lineTo(7, -12.5); c.fill();
      c.beginPath(); c.moveTo(7, -12.5); c.lineTo(9, -15.5); c.lineTo(9.5, -11); c.fill();
      c.strokeStyle = col; c.lineWidth = 2; c.lineCap = 'round';
      c.beginPath(); c.moveTo(-6, -6); c.quadraticCurveTo(-12, -8 + Math.sin(t * 3) * 3, -10, -14); c.stroke();
      c.fillStyle = '#2a2018';
      c.fillRect(7, -10.5, 1.2, walking ? 1.2 : 0.6);
      c.restore();
    }

    pingPongBall() {
      const players = this.plan.pois
        .filter((q) => q.pair === 'pp' && q.taken)
        .map((q) => this.people.get(q.taken))
        .filter((p) => p && p.poi && p.poi.pair === 'pp' && !p.path.length);
      if (players.length < 2) return;
      const pp = this.plan.pp;
      const k = (this.t / 900) % 2;
      const f = k < 1 ? k : 2 - k;
      const x = pp.x0 + 0.3 + f * (pp.x1 - pp.x0 - 0.6);
      const z = 0.8 + Math.abs(Math.sin(f * Math.PI * 2)) * 0.45;
      const c = this.ctx;
      const sh = this.iso(x, pp.y, 0.77);
      c.fillStyle = 'rgba(0,0,0,.25)';
      c.beginPath(); c.ellipse(sh.x, sh.y, 2.5, 1.2, 0, 0, Math.PI * 2); c.fill();
      const p = this.iso(x, pp.y, z);
      c.fillStyle = '#fff';
      c.beginPath(); c.arc(p.x, p.y, 2.2, 0, Math.PI * 2); c.fill();
    }

    // ------------------------------------------------------------ frame

    frame(now) {
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.t = now;
      if (!this.visible) return;
      this.step(dt);
      if (this.draw() !== false) {
        if (!this.first && ++this.framesShown === 3) this.markReady(true);
        // Capture immediately: a WebGL drawing buffer may be cleared after
        // this task. The overlay and the 3D canvas must be copied together.
        if (this.onFrame) this.onFrame(this);
      }
    }

    // Advance people and the cat; shared by the 2D and 3D renderers.
    step(dt) {
      const wall = Date.now();
      for (const [k, p] of this.people) {
        if (p.jelly > 0) {
          p.jellyT = (p.jellyT || 0) + dt;
          if (p.jellyT >= p.jelly) { p.jelly = 0; p.jellyT = 0; }
        }
        if (p.hop > 0) {
          p.hopT = (p.hopT || 0) + dt;
          if (p.hopT >= p.hop) { p.hop = 0; p.hopT = 0; }
        }
        if (p.flash > 0) {
          p.flashT = (p.flashT || 0) + dt;
          if (p.flashT >= p.flash) { p.flash = 0; p.flashT = 0; }
        }
        if (p.mode === 'wander') {
          if (p.poi && !p.path.length && p.until === Infinity) {
            if (p.poi.stairs) {
              this.takeStairs(p);
              this.release(p);
              p.until = wall + 600;
            } else {
              p.until = wall + p.stay;
              if (p.errandUntil === Infinity) p.errandUntil = p.until;
            }
          }
          this.wander(p, wall);
        }
        if (p.path.length) {
          const n = p.path[0];
          const dx = n.x - p.x, dy = n.y - p.y, d = Math.hypot(dx, dy), v = SPEED * dt;
          if (d > 0.001) p.walkFace = dx + dy >= 0 ? 'front' : 'back';
          if (d <= v) { p.x = n.x; p.y = n.y; p.path.shift(); }
          else { p.x += (dx / d) * v; p.y += (dy / d) * v; }
        } else if (p.leaving) {
          this.people.delete(k);
        }
      }
      this.moveCat(dt, wall);
    }

    draw() {
      const c = this.ctx;
      c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      c.clearRect(0, 0, this.cw, this.ch);
      this.fitCamera();
      c.translate(this.cam.ox, this.cam.oy);
      c.scale(this.cam.zoom, this.cam.zoom);

      const vf = this.viewFloor || 0;
      this.drawRoom();
      const occupant = new Map();
      for (const p of this.people.values()) {
        if (this.floorOf(p) !== vf) continue;
        if (p.mode === 'work' && p.desk) occupant.set(p.desk, p);
        else if (p.napDesk) occupant.set(p.napDesk, p);
      }
      const items = vf === 0 ? [...this.plan.items] : [];
      for (const dk of this.plan.desks) {
        if ((dk.floor ?? 0) !== vf) continue;
        const p = occupant.get(dk);
        items.push({ depth: dk.x + 0.7 + dk.y + 0.4, draw: () => this.desk(dk, p) });
        items.push({ depth: dk.seat.x + dk.seat.y - 0.06, draw: () => this.chair(dk, p) });
      }
      if (vf === -1) {
        for (const p of this.plan.props) {
          if ((p.floor ?? 0) !== -1 || p.t === 'stairs') continue;
          const depth = (p.x || 0) + (p.w || 0) / 2 + (p.y || 0) + (p.d || 0) / 2 + (p.t === 'rug' ? -0.4 : 0.12);
          items.push({ depth, draw: () => this.drawBasementProp(p) });
        }
      }
      for (const p of this.people.values()) {
        if (this.floorOf(p) !== vf) continue;
        items.push({ depth: p.x + p.y + 0.01, person: p });
      }
      if (vf === 0) items.push({ depth: this.cat.x + this.cat.y, draw: () => this.drawCat() });
      items.sort((a, b) => a.depth - b.depth);

      this.hit = [];
      const heads = [];
      for (const it of items) {
        if (it.person) heads.push([it.person, this.person(it.person)]);
        else it.draw();
      }
      this.pingPongBall();
      const z = this.cam.zoom;
      this.hit = this.hit.map((h) => ({
        key: h.key,
        x0: h.x0 * z + this.cam.ox, x1: h.x1 * z + this.cam.ox,
        y0: h.y0 * z + this.cam.oy, y1: h.y1 * z + this.cam.oy,
      }));
      this.paintPeopleLabels(heads);
    }

    // Name tags, task bubbles, the off-duty count and the floor chip.
    // A share still skips all of them so the picture is just the room.
    paintPeopleLabels(heads) {
      if (this._shareFrame) return;
      const c = this.ctx;
      if (this.compact) {
        // Keep labels readable when the room is scaled down for PiP.
        c.save();
        c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        for (const [p, at] of heads) this.bubble(p, {
          ...at, x: at.x * this.cam.zoom + this.cam.ox, y: at.y * this.cam.zoom + this.cam.oy,
        });
        c.restore();
      } else {
        for (const [p, at] of heads) this.bubble(p, at);
      }

      if (this.offDuty > 0) {
        const d = this.iso(0.2, this.plan.door.y + 0.9, 0);
        c.font = '600 10px ui-sans-serif, system-ui, -apple-system, "PingFang TC", sans-serif';
        c.textAlign = 'center';
        c.fillStyle = this.pal.text;
        c.globalAlpha = 0.65;
        c.fillText(`+${this.offDuty} ${this.offDutyLabel}`, d.x - 10, d.y + 14);
        c.globalAlpha = 1;
      }

      // Floor chip (screen space) so 2D matches the picker.
      const meta = OFFICE_FLOORS.find((f) => f.id === (this.viewFloor || 0)) || OFFICE_FLOORS[1];
      c.save();
      c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      c.font = '700 12px ui-rounded, "Comic Sans MS", system-ui, sans-serif';
      c.textAlign = 'left';
      c.fillStyle = this.pal.text;
      c.globalAlpha = 0.75;
      c.fillText(meta.label, 12, 18);
      c.globalAlpha = 1;
      c.restore();
    }
  }

  window.Office = Office;
  window.officeBerlinHour = berlinHour;
  window.officeLightKey = officeLightKey;
  window.officeSunHour = officeSunHour;
  window.officeSunOffset = officeSunOffset;
  window.OFFICE_FLOORS = OFFICE_FLOORS;
  window.OFFICE_LEVEL_H = LEVEL_H;
  window.OFFICE_AGENT_BADGES = AGENT_BADGES;
  window.OfficeGrid = Grid;
})();
