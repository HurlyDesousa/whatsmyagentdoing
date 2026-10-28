// Live Paperclip payloads must replace seed bubble copy, and a later payload
// must replace the previous one. Seed text is only the cold fallback.
const assert = require('node:assert/strict');
const test = require('node:test');

process.env.HURLY_CREW_FILE = '/tmp/wmad-no-such-crew.json';
delete process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;

const { HurlyCrew } = require('../src/hurly-crew');
const { snapshot } = require('../src/server');

const CHIEF_SEED = 'Ops coordination · SWA-2978 3D office spike';
const MONITOR_SEED_ACT = 'Watching memory charts';

function crew() {
  return new HurlyCrew({ live: false });
}

function agent(id, name, status, extra = {}) {
  return { id, name, status, title: extra.role || null, role: extra.role || null, lastHeartbeatAt: extra.heartbeat || '2026-10-28T06:45:10.000Z', ...extra };
}

test('seed task and activity stay only until the first live payload', () => {
  const w = crew();
  w.tick();
  const chief = w.sessions().find((s) => s.id === 'chief');
  assert.equal(chief.source, 'seed');
  assert.equal(chief.title, CHIEF_SEED);
  const monitor = w.sessions().find((s) => s.id === 'monitor');
  assert.equal(monitor.source, 'seed');
  assert.ok(monitor.title === 'Charting mem watch' || monitor.activity === MONITOR_SEED_ACT);
});

test('a named Grok teammate picks up Paperclip issues and drops seed copy', () => {
  const w = crew();
  w.ingestLive({
    agents: { agents: [agent('pc-chief', 'Chief Master', 'running', { role: 'Ops lead' })] },
    issues: { issues: [{ id: 'iss-1', identifier: 'SWA-3100', title: 'Refresh office bubbles', status: 'in_progress', assigneeAgentId: 'pc-chief', updatedAt: '2026-10-28T10:00:00.000Z' }] },
    runs: [{ id: 'run-1', agentId: 'pc-chief', status: 'running', issueId: 'iss-1', currentStatusMessage: 'Reading the bubble renderer', startedAt: '2026-10-28T10:01:00.000Z' }],
  });
  w.tick();
  const chief = w.sessions().find((s) => s.id === 'chief');
  assert.equal(chief.pc, 'pc-chief');
  assert.equal(chief.source, 'paperclip');
  assert.equal(chief.status, 'thinking');
  assert.equal(chief.title, 'SWA-3100 Refresh office bubbles');
  assert.equal(chief.activity, 'Reading the bubble renderer');
  assert.equal(w.sessions().filter((s) => s.name === 'Chief Master').length, 1);
  const view = snapshot(w, { privacy: false }).sessions.find((s) => s.id === 'chief');
  assert.equal(view.title, 'SWA-3100 Refresh office bubbles');
  assert.equal(view.activity, 'Reading the bubble renderer');
  assert.doesNotMatch(`${view.title} ${view.activity}`, /SWA-2978|Planning next dispatch/);
});

test('Chief Master links to roster name Chief (alias) and drops SWA-2978 seed when idle', () => {
  const w = crew();
  // Simulate a stale/wrong seed pc so alias matching must win (live board name is "Chief").
  const chief = w.sessions().find((s) => s.id === 'chief');
  chief.pc = 'stale-not-on-roster';
  w.ingestLive({
    agents: [agent('2842a7bf-9527-42c1-aa86-ba5b599c8878', 'Chief', 'idle', { role: 'Ops lead', heartbeat: '2026-10-28T18:00:00.000Z' })],
    issues: [],
    runs: [],
  });
  w.tick();
  assert.equal(chief.pc, '2842a7bf-9527-42c1-aa86-ba5b599c8878');
  assert.equal(chief.source, 'paperclip');
  assert.equal(chief.status, 'done');
  assert.match(chief.title, /^Idle/);
  assert.equal(chief.activity, null);
  assert.doesNotMatch(`${chief.title} ${chief.activity || ''} ${chief.model}`, /SWA-2978|active \(seed\)|Planning next dispatch/);
  assert.equal(w.sessions().filter((s) => /Chief/.test(s.name)).length, 1);
});

test('Chief Master pinned pc follows a live run like Paperclip bubbles', () => {
  const w = crew();
  const chiefId = '2842a7bf-9527-42c1-aa86-ba5b599c8878';
  w.ingestLive({
    agents: [agent(chiefId, 'Chief', 'running', { role: 'Ops lead' })],
    issues: [{ id: 'iss-3009', identifier: 'SWA-3009', title: 'Grok live feed', status: 'in_progress', assigneeAgentId: chiefId, updatedAt: '2026-10-28T18:50:00.000Z' }],
    runs: [{ id: 'run-c', agentId: chiefId, status: 'running', issueId: 'iss-3009', currentStatusMessage: 'Routing Code Master 1', startedAt: '2026-10-28T18:57:00.000Z' }],
  });
  w.tick();
  const chief = w.sessions().find((s) => s.id === 'chief');
  assert.equal(chief.pc, chiefId);
  assert.equal(chief.source, 'paperclip');
  assert.equal(chief.title, 'SWA-3009 Grok live feed');
  assert.equal(chief.activity, 'Routing Code Master 1');
  assert.doesNotMatch(`${chief.title} ${chief.activity}`, /SWA-2978/);
});

test('Grok teammate with no board stand-in goes idle after roster poll (no forever seed)', () => {
  const w = crew();
  w.ingestLive({
    agents: [agent('someone', 'Newbie', 'idle')],
    issues: [],
    runs: [],
  });
  w.tick();
  const proxmox = w.sessions().find((s) => s.id === 'proxmox');
  assert.equal(proxmox.source, 'paperclip');
  assert.equal(proxmox.status, 'done');
  assert.match(proxmox.title, /^Idle/);
  assert.notEqual(proxmox.title, 'Proxmox cluster (pve*)');
  const doc = w.sessions().find((s) => s.id === 'doc');
  assert.equal(doc.source, 'paperclip');
  assert.equal(doc.status, 'idle');
  assert.equal(doc.title, 'Off the floor');
});

test('a later run replaces the bubble line without keeping the previous task', () => {
  const w = crew();
  const agents = [agent('pc-cm2', 'Code Master 2', 'running')];
  w.ingestLive({
    agents,
    issues: [{ id: 'a', identifier: 'SWA-1', title: 'First task', status: 'in_progress', assigneeAgentId: 'pc-cm2' }],
    runs: [{ id: 'r1', agentId: 'pc-cm2', status: 'running', issueId: 'a', currentToolName: 'Bash', currentStatusMessage: 'npm run build', startedAt: '2026-10-28T10:00:00.000Z' }],
  });
  w.tick();
  const first = snapshot(w, {}).sessions.find((s) => s.id === 'cm2');
  assert.equal(first.status, 'tool');
  assert.equal(first.title, 'SWA-1 First task');
  assert.equal(first.activity, 'Bash: npm run build');

  w.ingestLive({
    agents,
    issues: [{ id: 'b', identifier: 'SWA-2', title: 'Second task', status: 'in_progress', assigneeAgentId: 'pc-cm2', updatedAt: '2026-10-28T11:00:00.000Z' }],
    runs: [{ id: 'r2', agentId: 'pc-cm2', status: 'running', issueId: 'b', currentToolName: 'Read', lastAssistantSnippet: 'office3d.js', startedAt: '2026-10-28T11:00:00.000Z' }],
  });
  w.tick();
  const second = snapshot(w, {}).sessions.find((s) => s.id === 'cm2');
  assert.equal(second.title, 'SWA-2 Second task');
  assert.equal(second.activity, 'Read: office3d.js');
  assert.doesNotMatch(`${second.title} ${second.activity}`, /SWA-1|npm run build|SWA-2971/);
});

test('idle, paused, and error clear or replace the seed line', () => {
  const w = crew();
  const agents = [
    agent('pc-cm2', 'Code Master 2', 'idle', { heartbeat: '2026-10-28T06:45:10.000Z' }),
    agent('pc-claude', 'Claude', 'paused'),
    agent('pc-qa', 'QA Engineer', 'error', { error: 'build failed' }),
  ];
  w.ingestLive({
    agents,
    issues: [
      { id: 'old', identifier: 'SWA-9', title: 'Should not stick', status: 'in_progress', assigneeAgentId: 'pc-cm2' },
      { id: 'hold', identifier: 'SWA-8', title: 'Need a decision', status: 'in_review', assigneeAgentId: 'pc-claude' },
    ],
    runs: [],
  });
  w.tick();
  const by = Object.fromEntries(snapshot(w, {}).sessions.map((s) => [s.id, s]));
  assert.equal(by.cm2.status, 'done');
  assert.match(by.cm2.title, /^Idle · last heartbeat /);
  assert.equal(by.cm2.activity, null);
  assert.equal(by.claude.status, 'waiting');
  assert.equal(by.claude.title, 'SWA-8 Need a decision');
  assert.equal(by.claude.activity, 'Paused · needs you');
  assert.equal(by.qa.status, 'error');
  assert.equal(by.qa.activity, 'build failed');
  assert.equal(by.qa.error, 'build failed');
});

test('a crew.json override still pins task text over the live issue', () => {
  const w = crew();
  w.overrides = { chief: { task: 'Pinned by Hurly' } };
  w.ingestLive({
    agents: [agent('pc-chief', 'Chief Master', 'running')],
    issues: [{ id: 'iss', identifier: 'SWA-1', title: 'Live issue', status: 'in_progress', assigneeAgentId: 'pc-chief' }],
    runs: [],
  });
  w.tick();
  const chief = w.sessions().find((s) => s.id === 'chief');
  assert.equal(chief.title, 'Pinned by Hurly');
  assert.equal(chief.source, 'paperclip');
});

test('an agent that leaves the roster goes idle instead of back to seed', () => {
  const w = crew();
  w.ingestLive({
    agents: [agent('pc-chief', 'Chief Master', 'running')],
    issues: [{ id: 'iss', identifier: 'SWA-1', title: 'Live issue', status: 'in_progress', assigneeAgentId: 'pc-chief' }],
    runs: [],
  });
  w.tick();
  w.ingestLive({ agents: [agent('someone-else', 'Newbie', 'idle')], issues: [], runs: [] });
  w.tick();
  const chief = w.sessions().find((s) => s.id === 'chief');
  assert.equal(chief.status, 'done');
  assert.match(chief.title, /^Idle/);
  assert.notEqual(chief.title, CHIEF_SEED);
  assert.ok(w.sessions().some((s) => s.name === 'Newbie'));
});
