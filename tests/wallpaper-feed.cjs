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
