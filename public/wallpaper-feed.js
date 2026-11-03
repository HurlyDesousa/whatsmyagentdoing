// Client-side Grok Bot wallpaper feed. The office page reads a relay / ntfy
// topic itself (hash, ?feed= once, or a Settings value in localStorage).
// Nothing here is sent to the office server, and this file never writes the
// topic into a log line.
//
// Line shapes match grokbot-wallpaper (docs/CONTRACT.md, README, web/feed.js):
//   {"bot","status","step","group"?}
//   {"roster":[...]}  {"looks":{...}}  {"groups":{...}}  {"chat":{...}}
//   {"routines":{"bot","items":[...]}}
//   {"type":"usage","total_used_pct","resets_at","bots":{...}}
(function (root) {
  'use strict';

  const RELAY = 'https://relay.0xcodila.com';
  const NTFY = 'https://ntfy.sh';
  const TOPIC = /^[A-Za-z0-9_-]{6,64}$/;
  const HEX6 = /^#?[0-9a-f]{6}$/i;
  const MAX_LINE = 4096;
  const KEEP = 600;
  const QUIET_MS = 20 * 60 * 1000;
  const DONE_MS = 60 * 1000;
  const IDLE_MS = 3 * 60 * 60 * 1000;
  const STORE_KEY = 'wmad.wallpaperLink';
  const STATUSES = new Set(['working', 'idle', 'waiting_user', 'error', 'done']);

  // Wallpaper picker shapes -> the office blobs that already exist
  // (web/grokblobs.js / public/office.js). Triangle in the wallpaper is the
  // play-button wedge; rounded_square is the upright squircle.
  const SHAPE_MAP = {
    sphere: 'oval', cloud: 'cloud', rounded_square: 'squircle', star4: 'cloud',
    clover: 'cloud', bubble: 'drop', flower: 'cloud', drop: 'drop', pill: 'tablet',
    triangle: 'wedge', pentagon: 'squircle', star6: 'cloud', hexagon: 'squircle',
    rounded_cube: 'squircle', cone: 'triangle', trio: 'cloud',
  };
  const OFFICE_SHAPES = new Set(['triangle', 'drop', 'cloud', 'oval', 'bean', 'wedge', 'squircle', 'tablet']);
  const ACCESSORIES = new Set(['none', 'glasses', 'stem', 'antenna', 'bow']);

  // Hurly's six, used only when a feed is connected and that bot has no look
  // line yet. Not a topic, and not applied when the feed is off.
  const REMEMBERED = [
    { name: 'Chief Master', shape: 'triangle', color: '#8F59F9', accessory: 'none', group: 'Ops' },
    { name: 'Monitor Master', shape: 'rounded_square', color: '#FD690F', accessory: 'none', group: 'Watch' },
    { name: 'Proxmox Master', shape: 'cloud', color: '#14C16F', accessory: 'none', group: 'Infra' },
    { name: 'Dockhand Master', shape: 'triangle', color: '#F93498', accessory: 'none', group: 'Infra' },
    { name: 'TrueNAS Master', shape: 'rounded_square', color: '#A06B39', accessory: 'none', group: 'Infra' },
    { name: 'Doc Master', shape: 'drop', color: '#EB2B3E', accessory: 'none', group: 'Ops' },
  ];

  function canon(v) {
    return String(v || '').toLowerCase().replace(/proximox/g, 'proxmox').replace(/\s+/g, ' ').trim();
  }
  function aliases(v) {
    const n = canon(v).replace(/[^a-z0-9]+/g, ' ').trim();
    if (!n) return [];
    const out = [n];
    if (n.endsWith(' master')) out.push(n.slice(0, -7).trim());
    const first = n.split(' ')[0];
    if (first && first !== n) out.push(first);
    return out;
  }
  function botId(name) {
    const s = canon(name).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return (s || 'bot').slice(0, 64);
  }
  function clip(v, n) {
    const t = String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
    if (!t) return '';
    return t.length > n ? t.slice(0, n) : t;
  }
  function normShape(v) {
    if (typeof v !== 'string') return null;
    const s = v.trim().toLowerCase().replace(/[\s-]+/g, '_');
    return Object.prototype.hasOwnProperty.call(SHAPE_MAP, s) ? s : null;
  }
  function normAccessory(v) {
    if (typeof v !== 'string') return 'none';
    const s = v.trim().toLowerCase();
    return ACCESSORIES.has(s) ? s : 'none';
  }
  function normColor(v) {
    if (typeof v !== 'string' || !HEX6.test(v.trim())) return null;
    return '#' + v.trim().replace('#', '').toUpperCase();
  }
  function isMap(v) { return !!v && typeof v === 'object' && !Array.isArray(v); }

  function feedBase(raw) {
    let s = String(raw == null ? '' : raw).trim();
    if (!s) return null;
    try { s = decodeURIComponent(s); } catch (_) { /* keep */ }
    if (!/^[a-z]+:\/\//i.test(s)) s = 'https://' + s;
    try {
      const u = new URL(s);
      const local = u.protocol === 'http:' && /^(localhost|127\.0\.0\.1)$/.test(u.hostname);
      if (u.protocol !== 'https:' && !local) return null;
      return u.origin + u.pathname.replace(/\/+$/, '');
    } catch (_) { return null; }
  }

  // A page location -> { topic, bases } or null. bases have no trailing slash.
  // A plain #topic reads the relay and ntfy.sh. #topic@host reads one mailbox.
  // ?feed=<topic> is the older wallpaper link. ?feed=<https url> names a base
  // and still needs the topic in the hash.
  function parseFeedLink(hash, search) {
    const q = new URLSearchParams(search || '').get('feed');
    const qBase = q && /[./:]/.test(q) ? feedBase(q) : null;
    const m = /^#([A-Za-z0-9_-]{6,64})(?:@([^&#]+)|&ntfy=([^&#]+))?$/.exec(hash || '');
    const topic = m ? m[1] : (q && TOPIC.test(q) ? q : null);
    if (!topic) return null;
    const named = m ? feedBase(m[2] || m[3]) : null;
    const one = named || qBase;
    return { topic, bases: one ? [one.replace(/\/$/, '')] : [RELAY, NTFY] };
  }

  // Settings field: hash form, bare topic, topic@host, or https://host/<topic>.
  function parseFeedInput(text) {
    const raw = String(text || '').trim();
    if (!raw) return null;
    if (raw.startsWith('#')) return parseFeedLink(raw, '');
    if (/^https?:\/\//i.test(raw)) {
      try {
        const u = new URL(raw);
        const parts = u.pathname.split('/').filter(Boolean);
        const topic = parts.find((p) => TOPIC.test(p)) || '';
        if (!topic) return null;
        const idx = u.pathname.indexOf('/' + topic);
        const path = idx > 0 ? u.pathname.slice(0, idx) : '';
        return { topic, bases: [(u.origin + path).replace(/\/$/, '')] };
      } catch (_) { return null; }
    }
    if (raw.includes('@')) return parseFeedLink('#' + raw, '');
    if (TOPIC.test(raw)) return { topic: raw, bases: [RELAY, NTFY] };
    return null;
  }

  function hashTag(link) {
    if (!link) return '';
    const base = link.bases.length === 1 ? link.bases[0].replace(/^https:\/\//, '').replace(/\/$/, '') : '';
    return '#' + link.topic + (base ? '@' + base : '');
  }

  function mapLook(look) {
    if (!isMap(look)) return null;
    const wallpaperShape = normShape(look.shape);
    const hex = normColor(look.color);
    if (!wallpaperShape && !hex) return null;
    const shape = wallpaperShape ? SHAPE_MAP[wallpaperShape] : 'oval';
    if (!OFFICE_SHAPES.has(shape) || !hex) return null;
    return {
      shape,
      color: parseInt(hex.slice(1), 16),
      hex,
      accessory: normAccessory(look.accessory),
      wallpaperShape,
    };
  }

  function rememberedFor(name) {
    const n = canon(name);
    for (const row of REMEMBERED) {
      if (aliases(row.name).some((a) => a && a === n)) return row;
      if (canon(row.name) === n) return row;
    }
    for (const row of REMEMBERED) {
      if (aliases(name).some((a) => aliases(row.name).includes(a) && a.length > 2)) return row;
    }
    return null;
  }

  function emptyBot(name) {
    return {
      id: botId(name), name: clip(name, 80), status: 'idle', step: '', group: '',
      look: null, chat: '', seenMs: 0, usagePct: null,
    };
  }

  function lineMs(line, rec) {
    if (rec && typeof rec.t === 'string') {
      const p = Date.parse(rec.t);
      if (Number.isFinite(p)) return p;
    }
    const t = Number(line && line.time) || 0;
    if (t > 1e12) return t;
    if (t > 1e9) return t * 1000;
    return 0;
  }

  function effectiveOf(bot, now) {
    if (!bot.seenMs) return 'idle';
    const age = now - bot.seenMs;
    if (age > IDLE_MS) return 'idle';
    if (bot.status === 'done') return age <= DONE_MS ? 'done' : 'idle';
    if (bot.status === 'working') return age > QUIET_MS ? 'idle' : 'working';
    return STATUSES.has(bot.status) ? bot.status : 'idle';
  }

  function reduceFeed(lines, nowMs) {
    const now = Number.isFinite(nowMs) ? nowMs : Date.now();
    const bots = new Map();
    const routines = new Map();
    let usage = null;
    const ordered = (Array.isArray(lines) ? lines : []).map((l, i) => ({ l, i }))
      .sort((a, b) => (Number(a.l && a.l.time) || 0) - (Number(b.l && b.l.time) || 0) || a.i - b.i);

    function ensure(name) {
      const id = botId(name);
      let bot = bots.get(id);
      if (!bot) {
        const remembered = rememberedFor(name);
        bot = emptyBot(remembered ? remembered.name : name);
        bot.id = id;
        bots.set(id, bot);
      }
      return bot;
    }

    for (const { l } of ordered) {
      if (!l || typeof l.message !== 'string' || l.message.length > MAX_LINE) continue;
      let rec;
      try { rec = JSON.parse(l.message); } catch (_) { continue; }
      if (!isMap(rec)) continue;
      const ms = lineMs(l, rec);

      if (Array.isArray(rec.roster)) {
        for (const name of rec.roster.slice(0, 400)) {
          if (typeof name === 'string' && name.trim()) ensure(name);
        }
        continue;
      }
      if (isMap(rec.looks)) {
        for (const [name, look] of Object.entries(rec.looks).slice(0, 400)) {
          if (!name.trim()) continue;
          const bot = ensure(name);
          const mapped = mapLook(look);
          bot.look = mapped ? { shape: mapped.wallpaperShape, color: mapped.hex, accessory: mapped.accessory } : null;
        }
        continue;
      }
      if (isMap(rec.groups)) {
        for (const [name, team] of Object.entries(rec.groups).slice(0, 400)) {
          if (typeof team === 'string' && team.trim()) ensure(name).group = clip(team, 40);
        }
        continue;
      }
      if (isMap(rec.chat)) {
        for (const [name, url] of Object.entries(rec.chat).slice(0, 400)) {
          if (typeof url !== 'string') continue;
          const u = url.trim();
          if (/^(grokbot|https):\/\//i.test(u)) ensure(name).chat = u.slice(0, 400);
        }
        continue;
      }
      if (isMap(rec.routines)) {
        const name = typeof rec.routines.bot === 'string' ? rec.routines.bot.trim() : '';
        if (!name || !Array.isArray(rec.routines.items)) continue;
        const items = rec.routines.items.slice(0, 50).filter(isMap).map((r) => ({
          bot: clip(name, 80),
          name: clip(r.name, 80),
          schedule: clip(r.schedule, 80),
          next_run: Number.isFinite(Date.parse(r.next_run)) ? new Date(r.next_run).toISOString() : '',
        })).filter((r) => r.name);
        routines.set(botId(name), items);
        continue;
      }
      if (rec.type === 'usage' || Object.prototype.hasOwnProperty.call(rec, 'total_used_pct')) {
        const botsPct = {};
        if (isMap(rec.bots)) {
          for (const [name, n] of Object.entries(rec.bots)) {
            const num = typeof n === 'number' ? n : Number(n);
            if (name.trim() && Number.isFinite(num)) botsPct[clip(name, 80)] = num;
          }
        }
        const total = typeof rec.total_used_pct === 'number' ? rec.total_used_pct : Number(rec.total_used_pct);
        usage = {
          total_used_pct: Number.isFinite(total) ? total : null,
          resets_at: typeof rec.resets_at === 'string' ? rec.resets_at : '',
          bots: botsPct,
          at: ms || now,
        };
        continue;
      }
      if (typeof rec.bot !== 'string' || !STATUSES.has(rec.status)) continue;
      const bot = ensure(rec.bot);
      bot.status = rec.status;
      bot.step = clip(rec.step, 80);
      if (typeof rec.group === 'string' && rec.group.trim()) bot.group = clip(rec.group, 40);
      bot.seenMs = ms || now;
    }

    const out = {};
    for (const bot of bots.values()) {
      bot.effective = effectiveOf(bot, now);
      if (usage && isMap(usage.bots)) {
        const hit = Object.keys(usage.bots).find((n) => botId(n) === bot.id || canon(n) === canon(bot.name));
        bot.usagePct = hit ? usage.bots[hit] : null;
      }
      out[bot.id] = bot;
    }
    const routineList = [];
    for (const items of routines.values()) routineList.push(...items);
    routineList.sort((a, b) => (a.next_run || '9999').localeCompare(b.next_run || '9999'));
    return { bots: out, usage, routines: routineList };
  }

  const OFFICE_STATUS = {
    working: 'thinking', waiting_user: 'waiting', error: 'error', done: 'done', idle: 'idle',
  };

  function officeStatus(effective) {
    return OFFICE_STATUS[effective] || 'idle';
  }

  function indexBots(feed) {
    const list = Object.values(feed && feed.bots || {});
    const firstCount = new Map();
    for (const bot of list) {
      const first = aliases(bot.name)[aliases(bot.name).length - 1];
      if (first) firstCount.set(first, (firstCount.get(first) || 0) + 1);
    }
    return { list, firstCount };
  }

  function matchBot(session, index, used) {
    const names = [session.project, session.title, session.id, String(session.key || '').split(':').pop()];
    const want = new Set();
    for (const n of names) for (const a of aliases(n)) if (a) want.add(a);
    let best = null;
    let score = 0;
    for (const bot of index.list) {
      if (used.has(bot.id)) continue;
      const full = canon(bot.name).replace(/[^a-z0-9]+/g, ' ').trim();
      const als = aliases(bot.name);
      let s = 0;
      if (want.has(full)) s = 3;
      else if (als.some((a) => a !== full && a !== als[als.length - 1] && want.has(a))) s = 2;
      else {
        const first = als[als.length - 1];
        if (first && want.has(first) && index.firstCount.get(first) === 1) s = 1;
      }
      if (s > score) { best = bot; score = s; }
    }
    return best;
  }

  function lookFor(session, bot) {
    if (bot && bot.look) {
      const mapped = mapLook(bot.look);
      if (mapped) return { shape: mapped.shape, color: mapped.color, accessory: mapped.accessory };
    }
    const row = rememberedFor((bot && bot.name) || session.project || session.title || session.id || '');
    if (!row) return null;
    const mapped = mapLook(row);
    return mapped ? { shape: mapped.shape, color: mapped.color, accessory: mapped.accessory } : null;
  }

  function wallpaperView(bot) {
    return {
      name: bot.name,
      status: bot.status,
      effective: bot.effective,
      step: bot.step || '',
      group: bot.group || '',
      chat: bot.chat || '',
      usagePct: bot.usagePct,
      seenMs: bot.seenMs || 0,
    };
  }

  // Paperclip / office status, activity, and title stay as they are.
  // Feed-only bots become extra grokbot sessions on the same floors.
  function mergeSessions(sessions, feed, nowMs) {
    const list = Array.isArray(sessions) ? sessions : [];
    if (!feed) return list.map((s) => ({ ...s }));
    const now = Number.isFinite(nowMs) ? nowMs : Date.now();
    const index = indexBots(feed);
    const used = new Set();
    const out = list.map((s) => {
      const bot = matchBot(s, index, used);
      if (bot) used.add(bot.id);
      const look = lookFor(s, bot);
      const next = { ...s };
      if (look) next.look = look;
      if (bot) {
        next.wallpaper = wallpaperView(bot);
        if (!next.wallpaper.group) {
          const row = rememberedFor(bot.name);
          if (row) next.wallpaper.group = row.group;
        }
      }
      return next;
    });
    for (const bot of index.list) {
      if (used.has(bot.id)) continue;
      const look = lookFor({ project: bot.name }, bot);
      const status = officeStatus(bot.effective);
      out.push({
        key: 'wallpaper:' + bot.id,
        agent: 'grokbot',
        id: bot.id,
        project: bot.name,
        cwd: '/wallpaper/' + bot.name,
        title: bot.step || bot.group || 'Wallpaper',
        status,
        activity: bot.step || null,
        role: bot.group || (rememberedFor(bot.name) || {}).group || 'Wallpaper',
        model: 'Wallpaper feed',
        wallpaperOnly: true,
        wallpaper: wallpaperView(bot),
        look: look || undefined,
        lastEventAt: bot.seenMs || now,
        startedAt: bot.seenMs || now,
        subagent: false,
        prompt: bot.step || null,
        reply: status === 'done' ? (bot.step || null) : null,
      });
    }
    return out;
  }

  function fnv(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  }

  function cacheKey(link) {
    return 'wmad.wallpaperCache.' + fnv(link.bases.join('|') + '\n' + link.topic);
  }

  // Poll the last 12h, then follow /sse. Replays a local cache of line bodies
  // (id, time, message) so a quiet night still has bots. The topic is not
  // stored in the cache and is not passed to onStatus.
  function connectFeed(link, onState, onStatus) {
    if (!link || !link.topic || !link.bases || !link.bases.length) {
      return { stop() {} };
    }
    let dead = false;
    const sources = link.bases.map((base) => ({
      base: base.replace(/\/$/, '') + '/' + encodeURIComponent(link.topic),
      tag: base.indexOf('relay.0xcodila.com') >= 0 ? 'relay' : 'ntfy',
      lastId: null,
      es: null,
    }));
    const key = cacheKey(link);
    let lines = [];
    const seen = new Set();
    let saveTimer = 0;
    let tickTimer = 0;

    function report(phase, extra) {
      if (typeof onStatus !== 'function') return;
      const bots = extra && extra.bots;
      onStatus({ phase, bots: bots || 0, message: (extra && extra.message) || '' });
    }
    function cached() {
      try { return JSON.parse(localStorage.getItem(key)) || []; } catch (_) { return []; }
    }
    function save() {
      try { localStorage.setItem(key, JSON.stringify(lines.slice(-KEEP))); } catch (_) { /* private mode */ }
    }
    function fresh(src, m) {
      const id = src.tag + ' ' + m.id;
      const body = (m.time || 0) + ' ' + m.message;
      if (seen.has(id) || seen.has(body)) return false;
      seen.add(id); seen.add(body);
      return true;
    }
    function take(src, m) {
      if (!m || m.event !== 'message' || typeof m.id !== 'string' || typeof m.message !== 'string') return false;
      src.lastId = m.id;
      if (!fresh(src, m)) return false;
      lines.push({ id: m.id, time: Number(m.time) || Math.floor(Date.now() / 1000), message: m.message, src: src.tag });
      if (lines.length > KEEP * 1.5) lines = lines.slice(-KEEP);
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 1500);
      return true;
    }
    function publish() {
      if (dead) return;
      const state = reduceFeed(lines, Date.now());
      state.live = true;
      try { onState(state); } catch (_) { /* the page guards itself */ }
      report('live', { bots: Object.keys(state.bots).length });
    }
    async function pull(src, since) {
      const res = await fetch(src.base + '/json?poll=1&since=' + encodeURIComponent(since), { cache: 'no-store' });
      if (!res.ok) throw new Error('feed http ' + res.status);
      const text = await res.text();
      let changed = false;
      for (const row of text.split('\n')) {
        if (!row) continue;
        try { if (take(src, JSON.parse(row))) changed = true; } catch (_) { /* skip a bad row */ }
      }
      return changed;
    }
    function follow(src) {
      if (typeof EventSource !== 'function') return;
      const es = new EventSource(src.base + '/sse');
      src.es = es;
      es.onopen = () => { catchUp(src); };
      es.onmessage = (e) => {
        try { if (take(src, JSON.parse(e.data))) publish(); } catch (_) { /* keepalive */ }
      };
    }
    async function catchUp(src) {
      if (dead) return;
      try {
        if (await pull(src, src.lastId || '12h')) publish();
      } catch (_) { /* the stream retries */ }
    }

    lines = cached().map((l) => ({ id: l.id, time: l.time, message: l.message, src: l.src || sources[0].tag }));
    for (const l of lines) {
      if (l.id) seen.add(l.src + ' ' + l.id);
      if (l.message) seen.add((l.time || 0) + ' ' + l.message);
    }
    report('loading', { message: 'Reading the feed' });
    if (lines.length) publish();

    Promise.all(sources.map(async (src) => {
      try { await pull(src, '12h'); } catch (_) { src.failed = true; }
    })).then(() => {
      if (dead) return;
      lines = lines.sort((a, b) => (a.time || 0) - (b.time || 0));
      for (const src of sources) {
        const last = lines.filter((l) => l.src === src.tag).slice(-1)[0];
        if (last) src.lastId = last.id;
        follow(src);
      }
      save();
      publish();
      if (sources.every((s) => s.failed) && !lines.length) report('error', { message: 'Feed unreachable' });
    });

    tickTimer = setInterval(() => { if (!dead && lines.length) publish(); }, 30000);

    return {
      stop() {
        dead = true;
        clearInterval(tickTimer);
        clearTimeout(saveTimer);
        for (const src of sources) { try { src.es && src.es.close(); } catch (_) { /* already closed */ } }
      },
      clearCache() { try { localStorage.removeItem(key); } catch (_) { /* private */ } },
    };
  }

  // Captured at load, before the page strips ?feed= out of the address bar.
  let pageLink = null;
  try {
    if (typeof location !== 'undefined') {
      pageLink = parseFeedLink(location.hash, location.search);
      if (pageLink && !/^#[A-Za-z0-9_-]{6,64}/.test(location.hash || '')) {
        history.replaceState(null, '', location.pathname + location.search + hashTag(pageLink));
      }
    }
  } catch (_) { pageLink = null; }

  root.WallpaperFeed = {
    RELAY, NTFY, STORE_KEY, REMEMBERED,
    parseFeedLink, parseFeedInput, mapLook, reduceFeed, mergeSessions, officeStatus,
    connectFeed, hashTag, rememberedFor, botId,
    get pageLink() { return pageLink; },
    set pageLink(v) { pageLink = v; },
  };
})(typeof window !== 'undefined' ? window : globalThis);
