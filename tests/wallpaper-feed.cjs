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
  // Feed still carried grokbot://; office resolves to Paperclip chat.
  assert.equal(nas.wallpaper.chat, 'https://paperclip.s-w.art/SWA/chats/truenas-master');
  assert.equal(nas.wallpaper.usagePct, 3);
  const tower = WF.towerState(merged, { usage: feed.usage, routines: feed.routines });
  const nasBot = tower.bots[WF.botId('TrueNAS Master')];
  assert.equal(nasBot.effective_status, 'working');
  assert.equal(nasBot.step, 'scrubbing a pool');
  assert.equal(nasBot.chat_url, 'https://paperclip.s-w.art/SWA/chats/truenas-master');
  assert.equal(nasBot.usage_share, 0.174);
  assert.equal(tower.usage.period, 'week');
  assert.equal(tower.usage.total_used_pct, 17.2);
  assert.equal(tower.usage.resets_at, '2026-11-08T14:19:00Z');
  const chiefBot = tower.bots[WF.botId('Chief Master')];
  assert.equal(chiefBot.effective_status, 'idle');
  // Chief's feed chat was javascript: (rejected); office map still supplies Paperclip.
  assert.equal(chiefBot.chat_url, 'https://paperclip.s-w.art/SWA/chats/chief');
  assert.equal(chiefBot.usage_share, 1);
  assert.equal(tower.routines.length, 2);
  assert.equal(tower.routines[0].routine, 'Morning dispatch');
  assert.equal(tower.routines[0].bot, WF.botId('Chief Master'));
  assert.equal(JSON.stringify(tower).includes('javascript:'), false);
});

test('towerState sets last_seen from wallpaper seenMs', () => {
  const statusAt = NOW - 90_000;
  const feed = WF.reduceFeed([
    line({ bot: 'Monitor Master', status: 'working', step: 'watching alerts' }, statusAt / 1000),
    line({ chat: { 'Monitor Master': 'grokbot://app/v1/agent?id=monitor' } }),
  ], NOW);
  const merged = WF.mergeSessions([], feed, NOW);
  const mon = merged.find((s) => s.project === 'Monitor Master');
  assert.equal(mon.wallpaper.seenMs, statusAt);
  const withFeed = WF.towerState(merged, { feedLive: true });
  const bot = withFeed.bots[WF.botId('Monitor Master')];
  assert.equal(bot.last_seen, new Date(statusAt).toISOString());
  assert.equal(bot.chat_url, 'https://paperclip.s-w.art/SWA/chats/monitor-master');
  assert.equal(withFeed.wallpaper_feed, true);
  const quiet = WF.towerState([{
    key: 'paperclip:chief', id: 'chief', agent: 'claude', project: 'Chief Master',
    status: 'idle', activity: null, title: 'Ops',
  }], {});
  assert.equal(quiet.bots[WF.botId('Chief Master')].last_seen, null);
  assert.equal(quiet.wallpaper_feed, false);
  // No feed chat line — office map still enables Open chat for known agents.
  assert.equal(quiet.bots[WF.botId('Chief Master')].chat_url, 'https://paperclip.s-w.art/SWA/chats/chief');
});

test('resolveChatUrl prefers Paperclip urlKey and drops grokbot://', () => {
  assert.equal(WF.paperclipUrlKey('Chief Master'), 'chief');
  assert.equal(WF.paperclipUrlKey('Monitor'), 'monitor-master');
  assert.equal(WF.resolveChatUrl('Chief Master', 'grokbot://app/v1/agent?id=x'),
    'https://paperclip.s-w.art/SWA/chats/chief');
  assert.equal(WF.resolveChatUrl('Doc Master', 'grokbot://app/v1/agent?id=doc'), '');
  assert.equal(WF.resolveChatUrl('Doc Master', 'https://example.com/chat'), 'https://example.com/chat');
  assert.equal(WF.isPaperclipChatUrl('https://paperclip.s-w.art/SWA/chats/chief'), true);
  assert.equal(WF.isPaperclipChatUrl('https://example.com/SWA/chats/chief'), false);
  assert.equal(JSON.stringify(WF.resolveChatUrl('Chief Master', 'grokbot://x')).includes('grokbot'), false);
  assert.equal(WF.paperclipIssueUrl('SWA-3263'), 'https://paperclip.s-w.art/SWA/issues/SWA-3263');
  assert.equal(WF.isPaperclipIssueUrl('https://paperclip.s-w.art/SWA/issues/SWA-3263'), true);
  assert.equal(WF.isPaperclipBoardUrl('https://paperclip.s-w.art/SWA/issues/SWA-3263'), true);
  assert.equal(WF.isPaperclipBoardUrl('https://paperclip.s-w.art/SWA/chats/chief'), true);
  assert.equal(WF.isPaperclipIssueUrl('https://example.com/SWA/issues/SWA-3263'), false);
});

test('towerState passes Pipeline board issues through extras', () => {
  const sessions = [{
    key: 'paperclip:cm1', id: 'cm1', agent: 'paperclip', project: 'Code Master 1',
    status: 'thinking', activity: 'editing', title: 'SWA-3263 Pipeline',
    pc: 'a08c0cb1-355a-4cd6-ade3-91fe773d05ea',
  }];
  const tower = WF.towerState(sessions, {
    pipeline: [{
      id: 'ea9d630d-91f3-4858-b270-ccbdecc69481',
      identifier: 'SWA-3263',
      title: 'office sidebar Pipeline',
      status: 'in_progress',
      assigneeAgentId: 'a08c0cb1-355a-4cd6-ade3-91fe773d05ea',
      assigneeName: 'Code Master 1',
      updatedAt: '2026-11-06T11:00:00.000Z',
      url: 'https://paperclip.s-w.art/SWA/issues/SWA-3263',
    }],
  });
  assert.equal(tower.pipeline.length, 1);
  assert.equal(tower.pipeline[0].identifier, 'SWA-3263');
  assert.equal(tower.pipeline[0].status, 'in_progress');
  assert.equal(tower.pipeline[0].assigneeName, 'Code Master 1');
  assert.equal(tower.pipeline[0].url, 'https://paperclip.s-w.art/SWA/issues/SWA-3263');
  assert.equal(WF.towerState(sessions, {}).pipeline.length, 0);
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

test('office default feed topic is baked in; hash and Settings still override', () => {
  assert.equal(WF.DEFAULT_FEED_TOPIC, 'gbw-YdhGRttWLlcHJZK6CgzHLP');
  assert.deepEqual(WF.defaultFeedLink(), WF.parseFeedInput(WF.DEFAULT_FEED_TOPIC));
  assert.equal(WF.resolveFeedTarget({}).topic, WF.DEFAULT_FEED_TOPIC);
  assert.equal(WF.resolveFeedTarget({ saved: '' }).topic, WF.DEFAULT_FEED_TOPIC);
  assert.equal(WF.resolveFeedTarget({ saved: '#other-TOPIC-OVERRIDE-001' }).topic, 'other-TOPIC-OVERRIDE-001');
  const page = WF.parseFeedLink('#hash-TOPIC-OVERRIDE-00002', '');
  assert.equal(WF.resolveFeedTarget({ pageLink: page, saved: 'other-TOPIC-OVERRIDE-001' }).topic, 'hash-TOPIC-OVERRIDE-00002');
});

test('paperclipAgentId maps names and session pc; seats persist via assignSeat', () => {
  assert.equal(WF.paperclipAgentId('Grok'), '2b483eac-3320-4c85-9f05-c88db157c63c');
  assert.equal(WF.paperclipAgentId('Chief Master'), '2842a7bf-9527-42c1-aa86-ba5b599c8878');
  assert.equal(WF.paperclipAgentId('Doc Master'), null);
  assert.equal(
    WF.paperclipAgentId('Someone', 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'),
    'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
  );
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  const feedSrc = require('node:fs').readFileSync(require('node:path').join(__dirname, '..', 'public/wallpaper-feed.js'), 'utf8');
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  const a = W.botId('Chief Master');
  const b = W.botId('Monitor Master');
  const peers = [a, b]; // same-floor swap peers
  assert.equal(W.assignSeat(a, 1, peers), 1);
  assert.equal(W.assignSeat(b, 6, peers), 6);
  assert.equal(W.assignSeat(a, 6, peers), 6); // Chief takes Monitor's desk; Monitor keeps prior seat 1 via swap
  assert.equal(W.assignSeat(a, 21, peers), 21); // department manager desk is a valid seating target
  assert.equal(W.assignSeat(a, 5, peers), null); // SWA-3221: cleared window-side logical desks are not seatable
  assert.equal(W.PER_FLOOR, 21);
  const seats = W.loadSeatAssign();
  assert.equal(seats[a], 21);
  assert.equal(seats[b], 1);
  const tower = W.towerState([
    { key: 'paperclip:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x', pc: '2842a7bf-9527-42c1-aa86-ba5b599c8878' },
    { key: 'paperclip:mon', id: 'mon', agent: 'grokbot', project: 'Monitor Master', status: 'waiting', activity: 'needs you' },
  ], {});
  assert.equal(tower.bots[a].desk, 21);
  assert.equal(tower.bots[b].desk, 1);
  assert.equal(tower.bots[a].paperclip_agent_id, '2842a7bf-9527-42c1-aa86-ba5b599c8878');
  assert.equal(tower.bots[b].paperclip_agent_id, '4f2ddf7b-26ee-4beb-8424-beddd98a0247');
  // Auto desk fill skips removed logical 2–5 (window-side visuals 03/05/07/09).
  const filled = W.towerState([
    { key: 'p1', id: '1', agent: 'paperclip', project: 'Code Master', status: 'thinking', activity: 'a' },
    { key: 'p2', id: '2', agent: 'paperclip', project: 'Code Master 2', status: 'thinking', activity: 'b' },
    { key: 'p3', id: '3', agent: 'paperclip', project: 'QA Engineer', status: 'thinking', activity: 'c' },
  ], {});
  const desks = Object.values(filled.bots).map((bot) => bot.desk).sort((x, y) => x - y);
  // QA + Code Master 2 are Dept A (1, skip 2–5 → 6); bare "Code Master" is bank B (11).
  assert.deepEqual(desks, [1, 6, 11]);
});

test('moveToFloor relocates across floors, persists, and refuses a full floor', () => {
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  const chief = W.botId('Chief Master');
  const mon = W.botId('Monitor Master');
  const prox = W.botId('Proxmox Master');
  const sessions = [
    { key: 'pc:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x' },
    { key: 'gb:mon', id: 'mon', agent: 'grokbot', project: 'Monitor Master', status: 'waiting', activity: 'needs you' },
    { key: 'gb:prox', id: 'prox', agent: 'grokbot', project: 'Proxmox Master', status: 'idle', activity: null },
  ];
  const before = W.towerState(sessions, {});
  assert.equal(before.bots[chief].floor, 'ops');
  assert.equal(before.bots[mon].floor, 'watch');
  assert.equal(before.bots[prox].floor, 'infra');
  const floorIds = before.floors.map((f) => f.id).slice().sort();
  assert.equal(floorIds.join(','), 'infra,ops,watch');

  const moved = W.moveToFloor(chief, 'watch', sessions, {});
  assert.equal(moved.ok, true);
  assert.equal(moved.floorId, 'watch');
  assert.ok(moved.desk >= 1 && moved.desk <= W.PER_FLOOR);
  assert.equal(W.loadFloorAssign()[chief], 'watch');

  const after = W.towerState(sessions, {});
  assert.equal(after.bots[chief].floor, 'watch');
  assert.equal(after.bots[chief].desk, moved.desk);
  assert.equal(after.bots[mon].floor, 'watch');
  // Menu source matches floor switcher: still the live floor list, no hardcodes.
  assert.ok(after.floors.some((f) => f.id === 'watch' && f.name === 'Watch'));
  assert.equal(after.floors.find((f) => f.id === 'ops'), undefined); // Chief was alone on Ops

  // Reload persistence: fresh WallpaperFeed + same localStorage keeps the move.
  const sandbox2 = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: sandbox.localStorage,
  };
  sandbox2.window = sandbox2;
  sandbox2.globalThis = sandbox2;
  require('node:vm').runInNewContext(feedSrc, sandbox2, { filename: 'wallpaper-feed.js' });
  const W2 = sandbox2.WallpaperFeed;
  const reloaded = W2.towerState(sessions, {});
  assert.equal(reloaded.bots[chief].floor, 'watch');
  assert.equal(reloaded.bots[chief].desk, moved.desk);

  // Fill Watch to capacity, then refuse another move without dropping the agent.
  const fillers = [];
  for (let i = 0; i < W.PER_FLOOR; i++) {
    fillers.push({
      key: `gb:fill-${i}`, id: `fill-${i}`, agent: 'grokbot',
      project: `Fill Bot ${i}`, status: 'idle', activity: null,
      wallpaper: { group: 'Watch', step: 'pad' },
    });
  }
  const packedSessions = [
    { key: 'pc:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x' },
    ...fillers,
  ];
  // Clear prior override so Chief starts on Ops; Watch is full of fillers.
  W2.saveFloorAssign({});
  W2.saveSeatAssign({});
  const packed = W2.towerState(packedSessions, {});
  const baseWatch = packed.floors.find((f) => f.id === 'watch');
  assert.ok(baseWatch);
  assert.equal(baseWatch.free_desks, 0);
  assert.equal(packed.bots[chief].floor, 'ops');
  const refuse = W2.moveToFloor(chief, 'watch', packedSessions, {});
  assert.equal(refuse.ok, false);
  assert.equal(refuse.reason, 'full');
  const stayed = W2.towerState(packedSessions, {});
  assert.ok(stayed.bots[chief], 'full-floor refusal must not drop the agent');
  assert.equal(stayed.bots[chief].floor, 'ops');
});

test('moveToFloor does not wipe another floor’s drag-drop seat at the same desk number', () => {
  // QA FAIL repro (SWA-3213 / PR #32): Chief drag-seated Ops desk 7; Infra has
  // open desks 1+6 taken; SWA-3259 kitchen closes 7–9 so first free is 10 (2–5 removed);
  // moving Monitor to Infra must keep Chief at Ops 7.
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  const chief = W.botId('Chief Master');
  const doc = W.botId('Doc Master');
  const mon = W.botId('Monitor Master');
  const dock = W.botId('Dockhand Master');
  const prox = W.botId('Proxmox Master');
  const sessions = [
    { key: 'pc:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x' },
    { key: 'gb:doc', id: 'doc', agent: 'grokbot', project: 'Doc Master', status: 'idle', activity: null },
    { key: 'gb:mon', id: 'mon', agent: 'grokbot', project: 'Monitor Master', status: 'waiting', activity: 'needs you' },
    { key: 'gb:dock', id: 'dock', agent: 'grokbot', project: 'Dockhand Master', status: 'idle', activity: null },
    { key: 'gb:prox', id: 'prox', agent: 'grokbot', project: 'Proxmox Master', status: 'idle', activity: null },
  ];
  const before = W.towerState(sessions, {});
  assert.equal(before.bots[chief].floor, 'ops');
  assert.equal(before.bots[doc].floor, 'ops');
  assert.equal(before.bots[mon].floor, 'watch');
  assert.equal(before.bots[dock].floor, 'infra');
  assert.equal(before.bots[prox].floor, 'infra');

  W.assignSeat(chief, 7, before.floors.find((f) => f.id === 'ops').bots, 'ops');
  W.assignSeat(dock, 1, before.floors.find((f) => f.id === 'infra').bots, 'infra');
  W.assignSeat(prox, 6, before.floors.find((f) => f.id === 'infra').bots, 'infra');
  assert.equal(W.loadSeatAssign()[chief], 7);

  const moved = W.moveToFloor(mon, 'infra', sessions, {});
  assert.equal(moved.ok, true);
  // SWA-3259: Infra middle desks 7–9 are kitchen — first free after 1+6 is 10.
  assert.equal(moved.desk, 10);
  const seats = W.loadSeatAssign();
  assert.equal(seats[mon], 10);
  assert.equal(seats[chief], 7, 'Ops drag-drop seat must survive a same-number Infra move');
  assert.equal(seats[dock], 1);
  assert.equal(seats[prox], 6);

  const after = W.towerState(sessions, {});
  assert.equal(after.bots[mon].floor, 'infra');
  assert.equal(after.bots[mon].desk, 10);
  assert.equal(after.bots[chief].floor, 'ops');
  assert.equal(after.bots[chief].desk, 7);
});

test('lounge assign persists meeting sit and clears on desk assign (SWA-3257)', () => {
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  const qa = W.botId('QA Engineer');
  assert.equal(W.assignLounge(qa, 2), 2);
  assert.equal(W.loadLoungeAssign()[qa], 2);
  W.assignLounge(W.botId('Dispatcher'), 2);
  assert.equal(W.loadLoungeAssign()[qa], undefined, 'same chair displaces prior occupant');
  assert.equal(W.loadLoungeAssign()[W.botId('Dispatcher')], 2);
  W.assignSeat(W.botId('Dispatcher'), 11, [W.botId('Dispatcher')]);
  assert.equal(W.loadLoungeAssign()[W.botId('Dispatcher')], undefined, 'desk assign clears lounge');
  W.assignLounge(qa, 0);
  W.clearLounge(qa);
  assert.equal(W.loadLoungeAssign()[qa], undefined);
});

test('SWA-3258 Watch middle desks are closed; other floors keep them', () => {
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  assert.equal(W.isDeskOpen(7), true);
  assert.equal(W.isDeskOpen(7, 'ops'), true);
  assert.equal(W.isDeskOpen(7, 'watch'), false);
  assert.equal(W.isDeskOpen(12, 'watch'), false);
  assert.equal(W.isDeskOpen(1, 'watch'), true);
  assert.equal(W.isDeskOpen(21, 'watch'), true);
  assert.equal(W.assignSeat(W.botId('Monitor Master'), 7, null, 'watch'), null);
  assert.equal(W.assignSeat(W.botId('Monitor Master'), 1, null, 'watch'), 1);
  assert.equal(W.assignSeat(W.botId('Chief Master'), 7, null, 'ops'), 7);

  const sessions = [
    { key: 'gb:mon', id: 'mon', agent: 'grokbot', project: 'Monitor Master', status: 'waiting', activity: 'needs you' },
    { key: 'pc:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x' },
  ];
  const mon = W.botId('Monitor Master');
  const chief = W.botId('Chief Master');
  W.saveSeatAssign({ [mon]: 12, [chief]: 7 }); // Watch-removed logical for Monitor; Ops keeps 7
  const tower = W.towerState(sessions, {});
  assert.equal(tower.bots[mon].floor, 'watch');
  assert.ok(W.isDeskOpen(tower.bots[mon].desk, 'watch'));
  assert.notEqual(tower.bots[mon].desk, 12);
  assert.equal(tower.bots[chief].floor, 'ops');
  assert.equal(tower.bots[chief].desk, 7);
});

test('SWA-3259 Infra middle desks are closed; other floors keep them', () => {
  const mem = new Map();
  const sandbox = {
    URL, URLSearchParams, encodeURIComponent, decodeURIComponent, Promise, Date, JSON, Math, Number, Object, Array, String,
    Map, Set,
    history: { replaceState() {} },
    location: { hash: '', search: '', pathname: '/' },
    localStorage: {
      getItem: (k) => (mem.has(k) ? mem.get(k) : null),
      setItem: (k, v) => mem.set(k, v),
      removeItem: (k) => mem.delete(k),
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  require('node:vm').runInNewContext(feedSrc, sandbox, { filename: 'wallpaper-feed.js' });
  const W = sandbox.WallpaperFeed;
  assert.equal(W.isDeskOpen(7), true);
  assert.equal(W.isDeskOpen(7, 'ops'), true);
  assert.equal(W.isDeskOpen(7, 'infra'), false);
  assert.equal(W.isDeskOpen(12, 'infra'), false);
  assert.equal(W.isDeskOpen(1, 'infra'), true);
  assert.equal(W.isDeskOpen(21, 'infra'), true);
  assert.equal(W.assignSeat(W.botId('Proxmox Master'), 7, null, 'infra'), null);
  assert.equal(W.assignSeat(W.botId('Proxmox Master'), 1, null, 'infra'), 1);
  assert.equal(W.assignSeat(W.botId('Chief Master'), 7, null, 'ops'), 7);

  const sessions = [
    { key: 'gb:prox', id: 'prox', agent: 'grokbot', project: 'Proxmox Master', status: 'waiting', activity: 'needs you' },
    { key: 'pc:chief', id: 'chief', agent: 'paperclip', project: 'Chief Master', status: 'thinking', activity: 'x' },
  ];
  const prox = W.botId('Proxmox Master');
  const chief = W.botId('Chief Master');
  W.saveSeatAssign({ [prox]: 12, [chief]: 7 }); // Infra-removed logical for Proxmox; Ops keeps 7
  const tower = W.towerState(sessions, {});
  assert.equal(tower.bots[prox].floor, 'infra');
  assert.ok(W.isDeskOpen(tower.bots[prox].desk, 'infra'));
  assert.notEqual(tower.bots[prox].desk, 12);
  assert.equal(tower.bots[chief].floor, 'ops');
  assert.equal(tower.bots[chief].desk, 7);
});
