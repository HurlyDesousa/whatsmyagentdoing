// Client-side Grok Bot wallpaper feed. The office page reads a relay / ntfy
// topic itself (hash, ?feed= once, Settings localStorage, or the baked office
// default). Nothing here is sent to the office server, and connect/publish
// paths never put the topic into a log line.
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
  // Office.s-w.art default so Open chat works on a plain origin with no hash
  // and no Settings paste. Hash and Settings still override. Clear drops the
  // override and falls back here.
  const DEFAULT_FEED_TOPIC = 'gbw-YdhGRttWLlcHJZK6CgzHLP';
  const STATUSES = new Set(['working', 'idle', 'waiting_user', 'error', 'done']);

  // Office Open chat → Paperclip agent conversations (not grokbot://).
  // Board UI route: /{issuePrefix}/chats/{urlKey}. Feed chat maps may still
  // publish grokbot://; the office ignores those when a urlKey is known.
  const PAPERCLIP_ORIGIN = 'https://paperclip.s-w.art';
  const PAPERCLIP_PREFIX = 'SWA';
  // Display / wallpaper names → Paperclip agent urlKey (aliases included).
  const PAPERCLIP_CHAT_KEYS = {
    'chief master': 'chief',
    chief: 'chief',
    'monitor master': 'monitor-master',
    monitor: 'monitor-master',
    'dockhand master': 'dockhand-master',
    dockhand: 'dockhand-master',
    'truenas master': 'truenas-master',
    truenas: 'truenas-master',
    'code master 2': 'code-master-2',
    'code master 1': 'code-master-1',
    'qa engineer': 'qa-engineer',
    'qa engineer 2': 'qa-engineer-2',
    'qa clicker': 'qa-clicker',
    dispatcher: 'dispatcher',
    'gpu agent': 'gpu-agent',
    'amazon master': 'amazon-master',
    accountant: 'accountant',
    claude: 'claude',
    grok: 'grok',
    'smoke scout': 'smoke-scout',
    'cursor cloud': 'cursor-cloud',
  };
  // urlKey → Paperclip agent UUID (for Start / resume).
  const PAPERCLIP_AGENT_IDS = {
    chief: '2842a7bf-9527-42c1-aa86-ba5b599c8878',
    'monitor-master': '4f2ddf7b-26ee-4beb-8424-beddd98a0247',
    'dockhand-master': 'e679f570-38bb-4de0-b754-89425d98d398',
    'truenas-master': '9082e6f0-9eae-472e-b0ef-81a423e4cfff',
    'code-master-2': 'eb8ecca2-c2cd-4fc9-ac22-0c63b25d2e4b',
    'code-master-1': 'a08c0cb1-355a-4cd6-ade3-91fe773d05ea',
    'qa-engineer': '47312222-173f-478e-bdb3-c36938e012dd',
    'qa-engineer-2': '9017add5-a1b7-4505-92dd-95cf86a96782',
    'qa-clicker': '9ae4c8ec-bb36-4052-a249-d17f8938f361',
    dispatcher: '00862553-fcd5-476d-a5d8-e8102c846c16',
    'gpu-agent': 'bca31b4a-add1-4299-8865-c04100478d18',
    'amazon-master': '644aa5aa-f4a7-4114-ad84-d0277307b9e8',
    accountant: '2fdb3770-fda5-4675-bfbd-6aef0f950f9d',
    claude: 'abd3ef5c-f872-4a0f-a626-ab48518b3242',
    grok: '2b483eac-3320-4c85-9f05-c88db157c63c',
    'smoke-scout': '9948dfec-b8f5-4e98-8cdb-7404c83821d1',
    'cursor-cloud': '1103a0e7-abc7-42fd-a5c9-66cfb37ce344',
  };
  const SEAT_STORE_KEY = 'wmad.seatAssign';
  // 20 communal bank stools + 1 department manager desk (SWA-3195).
  const PER_FLOOR = 21;
  // SWA-3221: logical desks mapping to removed window-side visuals 03/05/07/09 via DESK_ORDER.
  const REMOVED_LOGICAL_DESKS = new Set([2, 3, 4, 5]);
  function isDeskOpen(n) {
    return Number.isInteger(n) && n >= 1 && n <= PER_FLOOR && !REMOVED_LOGICAL_DESKS.has(n);
  }
  function nextOpenInRange(start, maxInclusive, taken) {
    let d = start;
    while (d <= maxInclusive && (!isDeskOpen(d) || (taken && taken.has(d)))) d += 1;
    return d <= maxInclusive ? d : null;
  }

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

  function paperclipUrlKey(name) {
    for (const a of aliases(name)) {
      if (Object.prototype.hasOwnProperty.call(PAPERCLIP_CHAT_KEYS, a)) return PAPERCLIP_CHAT_KEYS[a];
    }
    return null;
  }

  function paperclipChatUrl(name) {
    const key = paperclipUrlKey(name);
    if (!key) return '';
    return PAPERCLIP_ORIGIN + '/' + PAPERCLIP_PREFIX + '/chats/' + encodeURIComponent(key);
  }

  // Prefer the office Paperclip map so Open chat never depends on grokbot://.
  // Unmapped bots may still use an https feed link; grokbot:// is dropped.
  function resolveChatUrl(name, feedChat) {
    const mapped = paperclipChatUrl(name);
    if (mapped) return mapped;
    const u = String(feedChat == null ? '' : feedChat).trim();
    if (/^https:\/\//i.test(u)) return u.slice(0, 400);
    return '';
  }

  function isPaperclipChatUrl(url) {
    const u = String(url == null ? '' : url).trim();
    if (!/^https:\/\//i.test(u)) return false;
    try {
      const parsed = new URL(u);
      return parsed.origin === PAPERCLIP_ORIGIN && /\/chats\//i.test(parsed.pathname);
    } catch (_) { return false; }
  }

  function paperclipAgentId(name, sessionPc) {
    const fromSession = String(sessionPc || '').trim();
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(fromSession)) {
      return fromSession.toLowerCase();
    }
    const key = paperclipUrlKey(name);
    if (!key || !Object.prototype.hasOwnProperty.call(PAPERCLIP_AGENT_IDS, key)) return null;
    return PAPERCLIP_AGENT_IDS[key];
  }

  function loadSeatAssign() {
    try {
      const raw = globalThis.localStorage && localStorage.getItem(SEAT_STORE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
      const out = {};
      let dropped = false;
      for (const [id, desk] of Object.entries(parsed)) {
        const n = Number(desk);
        if (!id || !isDeskOpen(n)) { if (id && Number.isInteger(n)) dropped = true; continue; }
        out[String(id).slice(0, 64)] = n;
      }
      if (dropped) saveSeatAssign(out);
      return out;
    } catch (_) { return {}; }
  }

  function saveSeatAssign(map) {
    try {
      if (!globalThis.localStorage) return;
      localStorage.setItem(SEAT_STORE_KEY, JSON.stringify(map || {}));
    } catch (_) { /* private mode */ }
  }

  function assignSeat(botId, desk) {
    const id = String(botId || '').slice(0, 64);
    const n = Number(desk);
    if (!id || !isDeskOpen(n)) return null;
    const map = loadSeatAssign();
    const prev = map[id];
    let displaced = null;
    for (const [other, d] of Object.entries(map)) {
      if (other !== id && d === n) { displaced = other; break; }
    }
    if (displaced) {
      if (prev && isDeskOpen(prev)) map[displaced] = prev;
      else delete map[displaced];
    }
    map[id] = n;
    saveSeatAssign(map);
    return n;
  }

  function applySeatOverrides(bots, floorIds) {
    const map = loadSeatAssign();
    if (!Object.keys(map).length) return;
    const onFloor = new Set(floorIds || []);
    const taken = new Map();
    for (const id of onFloor) {
      const b = bots[id];
      if (!b) continue;
      taken.set(b.desk, id);
    }
    for (const id of onFloor) {
      const want = map[id];
      if (!want || !bots[id] || !isDeskOpen(want)) continue;
      const cur = bots[id].desk;
      if (cur === want) continue;
      const other = taken.get(want);
      if (other && other !== id) {
        bots[other].desk = cur;
        taken.set(cur, other);
      } else {
        taken.delete(cur);
      }
      bots[id].desk = want;
      taken.set(want, id);
    }
  }

  // SWA-3221: move anyone still on a cleared window seat to the next free valid desk; scrub seat store.
  function relocateRemovedDesks(bots, floorIds) {
    const onFloor = floorIds || [];
    const taken = new Set();
    for (const id of onFloor) {
      const d = bots[id] && bots[id].desk;
      if (isDeskOpen(d)) taken.add(d);
    }
    const map = loadSeatAssign();
    let dirty = false;
    for (const [id, d] of Object.entries(map)) {
      if (!isDeskOpen(d)) { delete map[id]; dirty = true; }
    }
    for (const id of onFloor) {
      const b = bots[id];
      if (!b || isDeskOpen(b.desk)) continue;
      let free = null;
      for (let d = 1; d <= PER_FLOOR; d++) {
        if (isDeskOpen(d) && !taken.has(d)) { free = d; break; }
      }
      if (free == null) continue;
      b.desk = free;
      taken.add(free);
      map[id] = free;
      dirty = true;
    }
    if (dirty) saveSeatAssign(map);
  }

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

  function defaultFeedLink() {
    return parseFeedInput(DEFAULT_FEED_TOPIC);
  }

  // Priority: URL/page link → Settings localStorage → office default topic.
  function resolveFeedTarget(opts) {
    const page = opts && opts.pageLink;
    if (page && page.topic) return page;
    const fromSaved = parseFeedInput(opts && opts.saved);
    if (fromSaved) return fromSaved;
    return defaultFeedLink();
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
          period: typeof rec.period === 'string' && rec.period.trim() ? clip(rec.period, 20) : 'week',
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

  // The tower (4D) draws wallpaper shapes, not the 2D silhouette map.
  function wallpaperLookFor(session, bot) {
    if (bot && bot.look && bot.look.shape && bot.look.color) {
      return { shape: bot.look.shape, color: bot.look.color, accessory: bot.look.accessory || 'none' };
    }
    const row = rememberedFor((bot && bot.name) || (session && (session.project || session.title || session.id)) || '');
    if (!row) return null;
    return { shape: row.shape, color: row.color, accessory: row.accessory || 'none' };
  }

  function wallpaperView(bot) {
    return {
      name: bot.name,
      status: bot.status,
      effective: bot.effective,
      step: bot.step || '',
      group: bot.group || '',
      chat: resolveChatUrl(bot.name, bot.chat || ''),
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
      const wallpaperLook = wallpaperLookFor(s, bot);
      const next = { ...s };
      if (look) next.look = look;
      if (wallpaperLook) next.wallpaperLook = wallpaperLook;
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
      const wallpaperLook = wallpaperLookFor({ project: bot.name }, bot);
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
        wallpaperLook: wallpaperLook || undefined,
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

  // Roster, looks, teams, chat links and routines are posted about once a day.
  // The relay forgets them after 12 hours of status lines. The wallpaper keeps
  // whatever it has already seen; these pins do the same, separate from the
  // rolling status log, until a newer line of the same kind replaces them.
  function configPinKey(rec) {
    if (!isMap(rec)) return null;
    if (isMap(rec.routines)) {
      const name = typeof rec.routines.bot === 'string' ? rec.routines.bot.trim() : '';
      return name ? 'routines:' + botId(name) : null;
    }
    if (isMap(rec.chat)) return 'chat';
    if (isMap(rec.looks)) return 'looks';
    if (isMap(rec.groups)) return 'groups';
    if (Array.isArray(rec.roster)) return 'roster';
    return null;
  }

  function pinsFromLines(lines) {
    const pins = {};
    const ordered = (Array.isArray(lines) ? lines : []).map((l, i) => ({ l, i }))
      .sort((a, b) => (Number(a.l && a.l.time) || 0) - (Number(b.l && b.l.time) || 0) || a.i - b.i);
    for (const { l } of ordered) {
      if (!l || typeof l.message !== 'string') continue;
      let rec;
      try { rec = JSON.parse(l.message); } catch (_) { continue; }
      const key = configPinKey(rec);
      if (!key) continue;
      pins[key] = { id: l.id || key, time: Number(l.time) || 0, message: l.message, src: l.src || 'pin' };
    }
    return pins;
  }

  function mergePinned(lines, pins) {
    const out = Array.isArray(lines) ? lines.slice() : [];
    const have = new Set(out.map((l) => (Number(l && l.time) || 0) + ' ' + (l && l.message)));
    for (const p of Object.values(pins || {})) {
      if (!p || typeof p.message !== 'string') continue;
      const body = (Number(p.time) || 0) + ' ' + p.message;
      if (have.has(body)) continue;
      out.push({ id: p.id, time: p.time, message: p.message, src: p.src || 'pin' });
      have.add(body);
    }
    return out;
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
    const pinKey = key + '.pins';
    let lines = [];
    let pins = {};
    const seen = new Set();
    let saveTimer = 0;
    let tickTimer = 0;

    function loadPins() {
      try {
        const raw = JSON.parse(localStorage.getItem(pinKey));
        return raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
      } catch (_) { return {}; }
    }
    function savePins() {
      try { localStorage.setItem(pinKey, JSON.stringify(pins)); } catch (_) { /* private mode */ }
    }
    function rememberPins(list) {
      const found = pinsFromLines(list);
      let changed = false;
      for (const k of Object.keys(found)) {
        const prev = pins[k];
        const next = found[k];
        if (!prev || (Number(next.time) || 0) >= (Number(prev.time) || 0)) {
          if (!prev || prev.message !== next.message) changed = true;
          pins[k] = next;
        }
      }
      if (changed) savePins();
    }

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
      const kept = { id: m.id, time: Number(m.time) || Math.floor(Date.now() / 1000), message: m.message, src: src.tag };
      lines.push(kept);
      rememberPins([kept]);
      if (lines.length > KEEP * 1.5) lines = lines.slice(-KEEP);
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 1500);
      return true;
    }
    function publish() {
      if (dead) return;
      const state = reduceFeed(mergePinned(lines, pins), Date.now());
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

    pins = loadPins();
    lines = cached().map((l) => ({ id: l.id, time: l.time, message: l.message, src: l.src || sources[0].tag }));
    rememberPins(lines);
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
      rememberPins(lines);
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
      clearCache() {
        try { localStorage.removeItem(key); localStorage.removeItem(pinKey); } catch (_) { /* private */ }
      },
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

  const DEFAULT_QUALITY = '4d';
  const QUALITIES = ['mid', 'high', '4d'];
  function resolveQuality(saved) {
    return QUALITIES.includes(saved) ? saved : DEFAULT_QUALITY;
  }

  // Paperclip / office status owns the seat. Feed-only bots already carry the
  // feed's effective status on session.status (working → thinking, and so on).
  const TOWER_STATUS = {
    thinking: 'working', tool: 'working', typing: 'working',
    waiting: 'waiting_user', error: 'error', done: 'done',
    interrupted: 'idle', idle: 'idle',
  };
  const FLOOR_RANK = { ops: 0, infra: 1, watch: 2, 'main-floor': 3 };
  const COUNT_KEYS = ['working', 'idle', 'waiting_user', 'error', 'stuck', 'done'];
  // SWA-3171: floors come from wallpaper group again (Ops/Infra/Watch + Main floor).
  // Dept A vs B desk banks apply only when a bot lands on Main floor.
  const DEPT_A = [
    'dispatcher', 'code master 1', 'code master 2', 'qa engineer', 'qa engineer 2',
  ];

  function zeroCounts() {
    return { working: 0, idle: 0, waiting_user: 0, error: 0, stuck: 0, done: 0 };
  }

  function hashHex(id) {
    let h = 2166136261;
    const s = String(id);
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return '#' + (((h >>> 0) & 0xffffff) | 0x303030).toString(16).padStart(6, '0').slice(-6).toUpperCase();
  }

  function normBot(name) {
    return String(name || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function isDeptA(name) {
    const n = normBot(name);
    return DEPT_A.some((k) => n === k || n.startsWith(k + ' '));
  }

  function towerFloorName(session) {
    const g = session && session.wallpaper && session.wallpaper.group;
    if (g) return clip(g, 60);
    const row = rememberedFor((session && (session.project || session.title)) || '');
    if (row && row.group) return row.group;
    return 'Main floor';
  }

  function deptDeskRank(name) {
    return isDeptA(name) ? 0 : 1;
  }

  // Same split as the wallpaper: a bot's posted number over the week's total
  // used. 3 against a 17.2 limit is 17% of all.
  function shareOf(pct, total) {
    const n = Number(pct);
    if (!Number.isFinite(n) || !(total > 0)) return null;
    return Math.round(Math.min(1, Math.max(0, n / total)) * 1000) / 1000;
  }

  // Sessions (already merged with the feed) → the tower scene's state.
  // A bot who is in both keeps the office status at the desk. The feed still
  // supplies the glossy look and the floor (group). No topic is read or returned.
  function towerState(sessions, extras) {
    const list = (Array.isArray(sessions) ? sessions : []).filter((s) => s && typeof s === 'object');
    const extra = extras && typeof extras === 'object' ? extras : {};
    const rows = [];
    const used = new Set();
    for (const s of list) {
      const name = clip(s.project || s.title || s.id || 'Bot', 80) || 'Bot';
      let id = botId(name);
      if (used.has(id)) id = (id + '-' + botId(String(s.key || s.id || rows.length))).slice(0, 64);
      used.add(id);
      const look = towerLook(s);
      const status = TOWER_STATUS[s.status] || 'idle';
      const step = s.wallpaperOnly
        ? clip((s.wallpaper && s.wallpaper.step) || s.activity || '', 160)
        : clip(s.activity || '', 160);
      const chatRaw = s.wallpaper && typeof s.wallpaper.chat === 'string' ? s.wallpaper.chat.trim() : '';
      // wallpaperView already resolves; resolve again so Paperclip-only sessions
      // (no feed chat line) still get an Open chat URL from the office map.
      const chat = resolveChatUrl(name, chatRaw);
      const posted = s.wallpaper && Number.isFinite(Number(s.wallpaper.usagePct)) ? Number(s.wallpaper.usagePct) : null;
      const seenRaw = s.wallpaper && Number(s.wallpaper.seenMs);
      const seenMs = Number.isFinite(seenRaw) && seenRaw > 0 ? seenRaw : null;
      const pc = paperclipAgentId(name, s.pc || s.paperclipAgentId);
      rows.push({ id, name, floorName: towerFloorName(s), look, status, step, chat, pc, usagePct: posted, seenMs });
    }
    rows.sort((a, b) => a.floorName.localeCompare(b.floorName)
      || deptDeskRank(a.name) - deptDeskRank(b.name)
      || a.name.localeCompare(b.name)
      || a.id.localeCompare(b.id));

    const floors = new Map();
    function takeFloor(name) {
      const base = botId(name) || 'floor';
      let n = 1;
      let id = base;
      while (floors.has(id) && floors.get(id).ids.length >= PER_FLOOR) {
        n += 1;
        id = base + '-' + n;
      }
      if (!floors.has(id)) floors.set(id, { id, name: n === 1 ? name : `${name} · ${n}`, ids: [], counts: zeroCounts(), nextA: 1, nextB: 11 });
      return floors.get(id);
    }

    const nowIso = new Date().toISOString();
    const bots = {};
    const summary = zeroCounts();
    summary.total = 0;
    const usageBots = extra.usage && isMap(extra.usage.bots) ? extra.usage.bots : null;
    let usageTotal = extra.usage && Number(extra.usage.total_used_pct);
    if (!(usageTotal > 0) && usageBots) {
      usageTotal = Object.values(usageBots).reduce((sum, v) => sum + (Number(v) || 0), 0);
    }
    const takenByFloor = new Map();
    for (const row of rows) {
      const floor = takeFloor(row.floorName);
      if (!takenByFloor.has(floor.id)) takenByFloor.set(floor.id, new Set());
      const taken = takenByFloor.get(floor.id);
      let desk;
      if (floor.id === 'main-floor' || floor.id.startsWith('main-floor-')) {
        // Dept A → bank A (1–10), Dept B → bank B (11–20); overflow fills the other bank.
        // SWA-3221 skips cleared logical desks 2–5 (removed window-side visuals).
        const takeA = () => {
          const d = nextOpenInRange(floor.nextA, 10, taken);
          if (d == null) return null;
          floor.nextA = d + 1;
          return d;
        };
        const takeB = () => {
          const d = nextOpenInRange(floor.nextB, 20, taken);
          if (d == null) return null;
          floor.nextB = d + 1;
          return d;
        };
        if (isDeptA(row.name)) desk = takeA() || takeB();
        else desk = takeB() || takeA();
        if (desk == null) desk = nextOpenInRange(1, PER_FLOOR, taken) || (floor.ids.length + 1);
      } else {
        desk = floor.ids.length + 1;
      }
      if (Number.isInteger(desk)) taken.add(desk);
      floor.ids.push(row.id);
      const status = COUNT_KEYS.includes(row.status) ? row.status : 'idle';
      floor.counts[status] += 1;
      summary[status] += 1;
      summary.total += 1;
      const look = row.look;
      bots[row.id] = {
        id: row.id,
        name: row.name,
        floor: floor.id,
        desk,
        group: row.floorName,
        status,
        effective_status: status,
        step: row.step,
        task: row.step,
        usage_pct: Number.isFinite(row.usagePct) ? row.usagePct : null,
        usage_share: shareOf(row.usagePct, usageTotal),
        chat_url: row.chat || null,
        paperclip_agent_id: row.pc || null,
        color: look ? look.color : hashHex(row.id),
        look,
        avatar: row.id,
        has_glb: false,
        last_seen: row.seenMs != null ? new Date(row.seenMs).toISOString() : null,
        last_event: nowIso,
        today: { working_min: 0, events: 0, tasks_done: 0, hourly: new Array(24).fill(0) },
        history: row.step ? [{ t: nowIso, status, step: row.step }] : [],
      };
    }
    for (const floor of floors.values()) {
      applySeatOverrides(bots, floor.ids);
      relocateRemovedDesks(bots, floor.ids);
    }

    let floorList = [...floors.values()];
    floorList.sort((a, b) => (FLOOR_RANK[a.id] ?? 50) - (FLOOR_RANK[b.id] ?? 50) || a.name.localeCompare(b.name));
    if (!floorList.length) floorList = [{ id: 'main-floor', name: 'Main floor', ids: [], counts: zeroCounts() }];
    const usage = extra.usage && Number.isFinite(Number(extra.usage.total_used_pct))
      ? {
        period: extra.usage.period || 'week',
        total_used_pct: Number(extra.usage.total_used_pct),
        resets_at: extra.usage.resets_at || null,
        updated_at: extra.usage.updated_at || (Number.isFinite(Number(extra.usage.at)) ? new Date(Number(extra.usage.at)).toISOString() : null),
        bots: usageBots || {},
      }
      : null;
    const routines = (Array.isArray(extra.routines) ? extra.routines : []).map((r) => ({
      bot: botId(r.bot || ''),
      name: r.bot || '',
      routine: r.name || r.routine || '',
      schedule: r.schedule || '',
      next_run: r.next_run || null,
    })).filter((r) => r.routine);
    return {
      version: 1,
      now: nowIso,
      demo: false,
      // True when index.html has a live wallpaperFeed object for this browser.
      // Used by the Open chat CTA title; never carries the topic string.
      wallpaper_feed: !!extra.feedLive,
      summary,
      usage,
      floors: floorList.map((f, i) => ({
        id: f.id,
        name: f.name,
        order: i + 1,
        bots: f.ids.slice(),
        counts: f.counts,
        free_desks: PER_FLOOR - f.ids.length,
      })),
      bots,
      feed: rows.filter((r) => r.step).slice(0, 12).reverse().map((r) => ({
        t: nowIso, bot: r.id, name: r.name, status: r.status, step: r.step,
      })),
      finished: Object.values(bots).filter((b) => b.effective_status === 'done').map((b) => ({
        t: nowIso, bot: b.id, name: b.name, step: b.step || 'done',
      })),
      routines,
    };
  }

  function towerLook(session) {
    const w = session && session.wallpaperLook;
    if (w && typeof w.shape === 'string' && typeof w.color === 'string') {
      return { shape: w.shape, color: w.color, accessory: w.accessory || 'none' };
    }
    return wallpaperLookFor(session, null);
  }

  root.WallpaperFeed = {
    RELAY, NTFY, STORE_KEY, REMEMBERED,
    DEFAULT_FEED_TOPIC, DEFAULT_QUALITY, QUALITIES,
    PAPERCLIP_ORIGIN, PAPERCLIP_PREFIX, PAPERCLIP_CHAT_KEYS, PAPERCLIP_AGENT_IDS,
    SEAT_STORE_KEY, PER_FLOOR,
    parseFeedLink, parseFeedInput, defaultFeedLink, resolveFeedTarget,
    mapLook, reduceFeed, mergeSessions, officeStatus,
    resolveQuality, towerState,
    paperclipUrlKey, paperclipChatUrl, paperclipAgentId, resolveChatUrl, isPaperclipChatUrl,
    loadSeatAssign, saveSeatAssign, assignSeat, applySeatOverrides,
    connectFeed, hashTag, rememberedFor, botId,
    configPinKey, pinsFromLines, mergePinned,
    get pageLink() { return pageLink; },
    set pageLink(v) { pageLink = v; },
  };
})(typeof window !== 'undefined' ? window : globalThis);
