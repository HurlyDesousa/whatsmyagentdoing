// Wallpaper feed reducer, look mapping, and the rule that Paperclip keeps the desk.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = path.join(__dirname, '..');
const feedSrc = fs.readFileSync(path.join(root, 'public/wallpaper-feed.js'), 'utf8');

function loadFeed() {
  const sandbox = { URL, URLSearchParams, history: { replaceState() {} }, location: { hash: '', search: '', pathname: '/' } };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  return sandbox.WallpaperFeed;
}

const WF = loadFeed();
const NOW = Date.parse('2026-11-03T12:00:00Z');

function line(message, timeSec) {
  return { time: timeSec == null ? NOW / 1000 : timeSec, message: JSON.stringify(message) };
}

test('link forms name a topic and one or two mailboxes, and never require a server', () => {
  const plain = WF.parseFeedLink('#feed-TESTTOPICONLY000000', '');
  assert.equal(plain.topic, 'feed-TESTTOPICONLY000000');
  assert.deepEqual([...plain.bases], [WF.RELAY, WF.NTFY]);
  const one = WF.parseFeedLink('#feed-TESTTOPICONLY000000@relay.example.com', '');
  assert.deepEqual([...one.bases], ['https://relay.example.com']);
  const query = WF.parseFeedLink('', '?feed=feed-TESTTOPICONLY000000');
  assert.equal(query.topic, plain.topic);
  assert.equal(query.bases.length, 2);
  const url = WF.parseFeedInput('https://relay.example.com/feed-TESTTOPICONLY000000');
  assert.equal(url.topic, plain.topic);
  assert.deepEqual([...url.bases], ['https://relay.example.com']);
  assert.equal(WF.parseFeedLink('#nope', ''), null);
  assert.equal(WF.parseFeedInput('javascript:alert(1)'), null);
});

test('status, roster, looks, usage, chat and routines reduce, and garbage is skipped', () => {
  const feed = WF.reduceFeed([
    line({ roster: ['Chief Master', 'Doc Master', 'Quiet Bot'] }),
    line({ looks: { 'Chief Master': { shape: 'triangle', color: '#8F59F9', accessory: 'none' }, 'Nope': { shape: 'nope', color: 'red' } } }),
    line({ groups: { 'Doc Master': 'Ops', 'Quiet Bot': 'Watch' } }),
    line({ chat: { 'Doc Master': 'grokbot://app/v1/agent?id=doc', 'Quiet Bot': 'javascript:alert(1)' } }),
    line({ bot: 'Chief Master', status: 'working', step: 'dispatching the office' }),
    line({ bot: 'Doc Master', status: 'waiting_user', step: 'needs a look' }),
    line({ type: 'usage', total_used_pct: 14, resets_at: '2026-11-08T14:19:00Z', bots: { 'Chief Master': 34, 'Doc Master': 31 } }),
    line({ routines: { bot: 'Doc Master', items: [{ name: 'BGA des Tages', schedule: 'daily 08:00', next_run: '2026-11-04T07:00:00Z' }] } }),
    { time: NOW / 1000, message: 'not json' },
    line({ bot: 'Chief Master', status: 'nope', step: 'ignored' }),
    { time: NOW / 1000, message: 'x'.repeat(5000) },
  ], NOW);
  assert.equal(feed.bots[WF.botId('Chief Master')].effective, 'working');
  assert.equal(feed.bots[WF.botId('Chief Master')].step, 'dispatching the office');
  assert.equal(feed.bots[WF.botId('Chief Master')].look.color, '#8F59F9');
  assert.equal(feed.bots[WF.botId('Chief Master')].usagePct, 34);
  assert.equal(feed.bots[WF.botId('Doc Master')].effective, 'waiting_user');
  assert.equal(feed.bots[WF.botId('Doc Master')].chat.startsWith('grokbot://'), true);
  assert.equal(feed.bots[WF.botId('Quiet Bot')].chat, '');
  assert.equal(feed.bots[WF.botId('Quiet Bot')].group, 'Watch');
  assert.equal(feed.bots[WF.botId('Quiet Bot')].effective, 'idle');
  assert.equal(feed.usage.total_used_pct, 14);
  assert.equal(feed.routines.length, 1);
  assert.equal(feed.routines[0].name, 'BGA des Tages');
  assert.equal(feed.bots[WF.botId('Nope')].look, null);
});

test('a silent worker goes idle after 20 minutes and done lasts a minute', () => {
  const old = (NOW - 21 * 60 * 1000) / 1000;
  const feed = WF.reduceFeed([
    line({ bot: 'Monitor Master', status: 'working', step: 'still on it' }, old),
    line({ bot: 'TrueNAS Master', status: 'done', step: 'finished' }, (NOW - 61 * 1000) / 1000),
    line({ bot: 'Dockhand Master', status: 'done', step: 'just done' }, (NOW - 10 * 1000) / 1000),
  ], NOW);
  assert.equal(feed.bots[WF.botId('Monitor Master')].status, 'working');
  assert.equal(feed.bots[WF.botId('Monitor Master')].effective, 'idle');
  assert.equal(feed.bots[WF.botId('TrueNAS Master')].effective, 'idle');
  assert.equal(feed.bots[WF.botId('Dockhand Master')].effective, 'done');
});

test('Paperclip keeps the desk; the feed step and look sit beside it', () => {
  const sessions = [
    { key: 'grokbot:chief', id: 'chief', agent: 'grokbot', project: 'Chief Master', status: 'thinking', activity: 'Planning next dispatch', title: 'Ops coordination' },
    { key: 'grokbot:doc', id: 'doc', agent: 'grokbot', project: 'Doc Master', status: 'idle', activity: null, title: 'Off the floor' },
    { key: 'paperclip:qa', id: 'qa', agent: 'paperclip', project: 'QA Engineer', status: 'tool', activity: 'Bash: npm test', title: 'QA' },
  ];
  const feed = WF.reduceFeed([
    line({ bot: 'Chief Master', status: 'done', step: 'SWA-3131 tracked' }),
    line({ bot: 'Proximox Master', status: 'working', step: 'cluster check' }),
    line({ looks: { 'Doc Master': { shape: 'drop', color: '#EB2B3E', accessory: 'none' } } }),
    line({ groups: { 'Chief Master': 'Ops', 'Doc Master': 'Ops' } }),
  ], NOW);
  const merged = WF.mergeSessions(sessions, feed, NOW);
  const chief = merged.find((s) => s.id === 'chief');
  assert.equal(chief.status, 'thinking');
  assert.equal(chief.activity, 'Planning next dispatch');
  assert.equal(chief.title, 'Ops coordination');
  assert.equal(chief.wallpaper.effective, 'done');
  assert.equal(chief.wallpaper.step, 'SWA-3131 tracked');
  assert.equal(chief.wallpaper.group, 'Ops');
  assert.equal(chief.look.shape, 'wedge');
  assert.equal(chief.look.color, 0x8F59F9);
  const doc = merged.find((s) => s.id === 'doc');
  assert.equal(doc.status, 'idle');
  assert.equal(doc.look.shape, 'drop');
  assert.equal(doc.look.color, 0xEB2B3E);
  const qa = merged.find((s) => s.id === 'qa');
  assert.equal(qa.status, 'tool');
  assert.equal(qa.wallpaper, undefined);
  assert.equal(qa.look, undefined);
  const prox = merged.find((s) => s.project === 'Proxmox Master');
  assert.equal(prox.wallpaperOnly, true);
  assert.equal(prox.status, 'thinking');
  assert.equal(prox.activity, 'cluster check');
  assert.equal(prox.look.shape, 'cloud');
  assert.equal(prox.look.color, 0x14C16F);
  assert.equal(sessions[0].status, 'thinking');
  assert.equal(sessions[0].wallpaper, undefined);
});

test('a connected but quiet feed still dresses the six remembered bots', () => {
  const sessions = [{ key: 'grokbot:truenas', id: 'truenas', agent: 'grokbot', project: 'TrueNAS Master', status: 'done', title: 'Idle' }];
  const quiet = WF.mergeSessions(sessions, { bots: {}, usage: null, routines: [] }, NOW);
  assert.equal(quiet[0].status, 'done');
  assert.equal(quiet[0].look.shape, 'squircle');
  assert.equal(quiet[0].look.color, 0xA06B39);
  assert.equal(quiet[0].wallpaper, undefined);
  const off = WF.mergeSessions(sessions, null, NOW);
  assert.equal(off[0].look, undefined);
});

test('the office blob uses a session look and still hops on Paperclip status', () => {
  const el = (tag) => ({
    tag, className: '', hidden: false, children: [], style: {}, dataset: {},
    appendChild(c) { this.children.push(c); return c; },
    removeChild(c) { return c; },
    addEventListener() {}, removeEventListener() {}, setAttribute() {}, remove() {},
    contains() { return false; }, getContext() { return {}; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 900, height: 700, right: 900, bottom: 700 }; },
  });
  const sandbox = {
    document: { head: el('head'), body: el('body'), getElementById() { return null; }, createElement: el, addEventListener() {}, removeEventListener() {} },
    Image: class { set src(v) { this._src = v; } },
    ResizeObserver: class { observe() {} disconnect() {} },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    requestAnimationFrame: () => 1, cancelAnimationFrame() {},
    localStorage: { getItem: () => null, setItem() {} },
    performance: { now: () => Date.now() }, devicePixelRatio: 1, innerWidth: 1280, innerHeight: 800,
    console, Date, Intl, Math, Map, Set, Number,
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'public/office.js'), 'utf8'), sandbox, { filename: 'office.js' });
  const office = new sandbox.Office(el('div'), {});
  const cues = [];
  office.playCue = (kind) => cues.push(kind);
  office.update([{ key: 'bot', agent: 'grokbot', id: 'chief', status: 'thinking', project: 'Chief Master', lastEventAt: Date.now(), startedAt: 1 }]);
  office.update([{
    key: 'bot', agent: 'grokbot', id: 'chief', status: 'waiting', project: 'Chief Master', lastEventAt: Date.now(), startedAt: 1,
    look: { shape: 'wedge', color: 0x8F59F9, accessory: 'none' },
    wallpaper: { effective: 'waiting_user', step: 'needs Hurly' },
  }]);
  const p = office.people.get('bot');
  assert.equal(p.look.shape, 'wedge');
  assert.equal(p.look.color, 0x8F59F9);
  assert.deepEqual(cues, ['ding']);
  assert.equal(office.speechLine(p.s).includes('needs Hurly'), true);
  office.destroy();
});

test('3D blobLookFor honors the same session look', async () => {
  const { blobLookFor } = await import('../web/grokblobs.js');
  const look = blobLookFor({ key: 'grokbot:monitor', s: { id: 'monitor', project: 'Monitor Master', look: { shape: 'squircle', color: 0xFD690F, accessory: 'none' } } });
  assert.equal(look.shape, 'squircle');
  assert.equal(look.color, 0xFD690F);
  const fallback = blobLookFor({ key: 'grokbot:monitor', s: { id: 'monitor', project: 'Monitor Master' } });
  assert.equal(fallback.shape, 'squircle');
  assert.notEqual(fallback.color, 0xFD690F);
});

test('4D tower keeps Paperclip status and shows usage share, chat and routines', () => {
  const sessions = [
    { key: 'grokbot:truenas', id: 'truenas', agent: 'grokbot', project: 'TrueNAS Master', status: 'thinking', activity: 'scrubbing a pool', title: 'Storage' },
    { key: 'grokbot:chief', id: 'chief', agent: 'grokbot', project: 'Chief Master', status: 'idle', activity: null, title: 'Ops' },
  ];
  const feed = WF.reduceFeed([
    line({ bot: 'TrueNAS Master', status: 'idle', step: 'feed says idle' }),
    line({ bot: 'Chief Master', status: 'working', step: 'feed says working' }),
    line({ chat: { 'TrueNAS Master': 'grokbot://app/v1/agent?id=truenas', 'Chief Master': 'javascript:alert(1)' } }),
    line({ type: 'usage', total_used_pct: 17.2, resets_at: '2026-11-08T14:19:00Z', bots: { 'TrueNAS Master': 3, 'Chief Master': 37 } }),
    line({ routines: { bot: 'Chief Master', items: [{ name: 'Morning dispatch', schedule: 'daily 08:00', next_run: '2026-11-04T07:00:00Z' }] } }),
    line({ routines: { bot: 'TrueNAS Master', items: [{ name: 'Scrub check', schedule: 'weekly', next_run: '2026-11-09T01:00:00Z' }] } }),
  ], NOW);
  const merged = WF.mergeSessions(sessions, feed, NOW);
  const nas = merged.find((s) => s.id === 'truenas');
  assert.equal(nas.status, 'thinking');
  assert.equal(nas.activity, 'scrubbing a pool');
  assert.equal(nas.wallpaper.chat.startsWith('grokbot://'), true);
  assert.equal(nas.wallpaper.usagePct, 3);
  const tower = WF.towerState(merged, { usage: feed.usage, routines: feed.routines });
  const nasBot = tower.bots[WF.botId('TrueNAS Master')];
  assert.equal(nasBot.effective_status, 'working');
  assert.equal(nasBot.step, 'scrubbing a pool');
  assert.equal(nasBot.chat_url, 'grokbot://app/v1/agent?id=truenas');
  assert.equal(nasBot.usage_share, 0.174);
  assert.equal(tower.usage.period, 'week');
  assert.equal(tower.usage.total_used_pct, 17.2);
  assert.equal(tower.usage.resets_at, '2026-11-08T14:19:00Z');
  const chiefBot = tower.bots[WF.botId('Chief Master')];
  assert.equal(chiefBot.effective_status, 'idle');
  assert.equal(chiefBot.chat_url, null);
  assert.equal(chiefBot.usage_share, 1);
  assert.equal(tower.routines.length, 2);
  assert.equal(tower.routines[0].routine, 'Morning dispatch');
  assert.equal(tower.routines[0].bot, WF.botId('Chief Master'));
  assert.equal(JSON.stringify(tower).includes('javascript:'), false);
});

test('config lines stay after the relay window drops them', async () => {
  const mem = new Map();
  let round = 0;
  const routine = { routines: { bot: 'Doc Master', items: [{ name: 'BGA des Tages', schedule: 'daily 08:00', next_run: '2026-11-04T07:00:00Z' }] } };
  const chat = { chat: { 'Doc Master': 'grokbot://app/v1/agent?id=doc' } };
  const status = { bot: 'Doc Master', status: 'idle', step: 'resting' };
  function ndjson(recs, time) {
    return recs.map((rec, i) => JSON.stringify({
      id: 'id' + time + i, time, event: 'message', message: JSON.stringify(rec),
    })).join('\n');
  }
  function load() {
    const sandbox = {
      URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
      Map, Set, Int8Array: globalThis.Int8Array,
      history: { replaceState() {} },
      location: { hash: '', search: '', pathname: '/' },
      localStorage: {
        getItem: (k) => (mem.has(k) ? mem.get(k) : null),
        setItem: (k, v) => mem.set(k, v),
        removeItem: (k) => mem.delete(k),
      },
      fetch: async () => {
        round += 1;
        const body = round <= 2 ? ndjson([routine, chat, status], 1000) : ndjson([status], 5000);
        return { ok: true, text: async () => body };
      },
      setTimeout: (fn) => { fn(); return 1; },
      clearTimeout() {},
      setInterval: () => 1,
      clearInterval() {},
    };
    sandbox.window = sandbox;
    sandbox.globalThis = sandbox;
    vm.runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
    return sandbox.WallpaperFeed;
  }
  const first = load();
  const link = first.parseFeedInput('#feed-TESTTOPICONLY000000');
  let seen;
  const handle = first.connectFeed(link, (state) => { seen = state; });
  await new Promise((resolve) => setImmediate(resolve));
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(seen.routines.length, 1);
  assert.equal(seen.routines[0].name, 'BGA des Tages');
  assert.equal(seen.bots[first.botId('Doc Master')].chat, 'grokbot://app/v1/agent?id=doc');
  handle.stop();
  for (const k of [...mem.keys()]) if (!k.endsWith('.pins')) mem.delete(k);
  const second = load();
  let again;
  second.connectFeed(link, (state) => { again = state; });
  await new Promise((resolve) => setImmediate(resolve));
  await new Promise((resolve) => setImmediate(resolve));
  assert.ok(again, 'pinned lines should publish even when the relay reply has none');
  assert.equal(again.routines.length, 1);
  assert.equal(again.routines[0].name, 'BGA des Tages');
  assert.equal(again.bots[second.botId('Doc Master')].chat, 'grokbot://app/v1/agent?id=doc');
  assert.equal(JSON.stringify(again).includes('feed-TESTTOPIC'), false);
});

test('the repo does not contain a wallpaper topic literal', () => {
  const banned = /gbw-[A-Za-z0-9]{16,}/;
  const skip = new Set(['node_modules', '.git', 'public/office3d.js']);
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const rel = path.relative(root, path.join(dir, name));
      if (skip.has(name) || skip.has(rel)) continue;
      const st = fs.statSync(path.join(dir, name));
      if (st.isDirectory()) walk(path.join(dir, name));
      else if (/\.(js|cjs|mjs|html|md|json)$/.test(name)) {
        const text = fs.readFileSync(path.join(dir, name), 'utf8');
        assert.equal(banned.test(text), false, rel);
      }
    }
  }
  walk(root);
});
