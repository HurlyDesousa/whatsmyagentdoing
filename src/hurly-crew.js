'use strict';

// `--hurly`: Hurly's ops crew (Grok Bot teammates + Paperclip agents) as
// office avatars. Same interface as Watcher / DemoWatcher.
//
// Sources, in priority order:
//   1. Paperclip live feed when PAPERCLIP_CHIEF_BOARD_TOKEN is set:
//      agents, open issues, and live heartbeat runs. Polled every few seconds
//      and pushed on the existing SSE `/events` stream. Grok teammates use a
//      board stand-in `pc` id when known, else link by name / alias (e.g.
//      "Chief Master" → roster "Chief"). After a successful roster poll,
//      unbound Grok rows go idle/offline — seed never sticks forever.
//   2. Override file (HURLY_CREW_FILE, default ../crew.json next to the repo):
//      { "<key>": { "status": "...", "task": "...", "activity": "..." } }
//      Re-read on change; an override pins that field over the live value.
//   3. Built-in seed below. Seed task/activity is only a cold fallback until
//      the first live payload for that agent — it never sticks after that.
//
// UI statuses: thinking | tool | typing  -> at a desk (working)
//              waiting                    -> at a desk, waving (needs you)
//              done                       -> off duty, wanders the office
//              idle                       -> asleep on the floor (office shows everyone by default)

const fs = require('fs');
const path = require('path');
const https = require('https');
const { EventEmitter } = require('events');

const PAPERCLIP_URL = process.env.PAPERCLIP_URL || 'https://paperclip.s-w.art';
const PAPERCLIP_COMPANY = process.env.PAPERCLIP_COMPANY_ID || '48fbb725-2aaf-41c3-becd-90aeec0e1a49';
const CREW_FILE = process.env.HURLY_CREW_FILE || path.join(__dirname, '..', '..', 'crew.json');
const POLL_MS = 5_000;

// key, display name, agent badge, paperclip agent id (live), seed status, task, activity
// Grok Bot specialists are Paperclip process/bridge stand-ins — pin their `pc`
// so popouts follow board heartbeats/issues (roster name may be shorter, e.g. Chief).
const CREW = [
  // Grok Bot teammates (board stand-ins)
  { key: 'chief', role: 'Ops lead', name: 'Chief Master', agent: 'grokbot', pc: '2842a7bf-9527-42c1-aa86-ba5b599c8878', status: 'active', task: 'Ops coordination · SWA-2978 3D office spike', activity: 'Planning next dispatch' },
  { key: 'monitor', role: 'Monitoring', name: 'Monitor Master', agent: 'grokbot', pc: '4f2ddf7b-26ee-4beb-8424-beddd98a0247', status: 'watching', task: 'Charting mem watch', activity: 'Watching memory charts' },
  { key: 'proxmox', role: 'Proxmox infra', name: 'Proxmox Master', agent: 'grokbot', status: 'idle', task: 'Proxmox cluster (pve*)' },
  { key: 'dockhand', role: 'Docker hosts', name: 'Dockhand Master', agent: 'grokbot', pc: 'e679f570-38bb-4de0-b754-89425d98d398', status: 'idle', task: 'Docker hosts' },
  { key: 'truenas', role: 'Storage', name: 'TrueNAS Master', agent: 'grokbot', pc: '9082e6f0-9eae-472e-b0ef-81a423e4cfff', status: 'idle', task: 'TrueNAS storage' },
  { key: 'doc', role: 'Docs', name: 'Doc Master', agent: 'grokbot', status: 'offline', task: 'Docs (off the floor)' },
  // Paperclip agents
  { key: 'cm2', role: 'Code', name: 'Code Master 2', agent: 'paperclip', pc: 'eb8ecca2-c2cd-4fc9-ac22-0c63b25d2e4b', status: 'running', task: 'Charting batch SWA-2971', activity: 'Bash: npm run build' },
  { key: 'qa', role: 'QA', name: 'QA Engineer', agent: 'paperclip', pc: '47312222-173f-478e-bdb3-c36938e012dd', status: 'idle', task: 'QA' },
  { key: 'claude', role: 'Code · Claude', name: 'Claude', agent: 'paperclip', pc: 'abd3ef5c-f872-4a0f-a626-ab48518b3242', status: 'paused', task: 'Paused — needs Hurly', activity: 'Paused · needs you' },
  { key: 'dispatcher', role: 'Dispatch', name: 'Dispatcher', agent: 'paperclip', pc: '00862553-fcd5-476d-a5d8-e8102c846c16', status: 'idle', task: 'Queue: SWA-2978 follow-up' },
  { key: 'cm1', role: 'Code', name: 'Code Master 1', agent: 'paperclip', pc: 'a08c0cb1-355a-4cd6-ade3-91fe773d05ea', status: 'idle', task: 'Coding' },
  { key: 'gpu', role: 'GPU jobs', name: 'GPU Agent', agent: 'paperclip', pc: 'bca31b4a-add1-4299-8865-c04100478d18', status: 'idle', task: 'GPU jobs' },
  { key: 'amazon', role: 'Shopping', name: 'Amazon Master', agent: 'paperclip', pc: '644aa5aa-f4a7-4114-ad84-d0277307b9e8', status: 'idle', task: 'Amazon' },
  { key: 'accountant', role: 'Finance', name: 'Accountant', agent: 'paperclip', pc: '2fdb3770-fda5-4675-bfbd-6aef0f950f9d', status: 'idle', task: 'Books' },
];

// Small loops so seed-only working avatars visibly move between thinking / tools / typing.
// Live agents do not use this — their status comes from Paperclip.
const LOOPS = {
  running: [['thinking', 4], ['tool', 8], ['thinking', 3], ['tool', 6], ['typing', 4]],
  active: [['thinking', 9], ['typing', 4], ['thinking', 6], ['tool', 4]],
  watching: [['tool', 10], ['thinking', 5]],
};
// Crew vocabulary -> UI status (non-looping ones).
const FIXED = { paused: 'waiting', waiting: 'waiting', error: 'error', idle: 'done', done: 'done', offline: 'idle', terminated: 'idle' };

function clip(v, n = 90) {
  const t = String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
  if (!t) return null;
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
}

function normName(v) {
  return String(v || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

// Roster names are often shorter than office labels ("Chief" vs "Chief Master").
// Exact match first; then drop a trailing " master" / first token when unique.
function nameAliases(v) {
  const n = normName(v);
  if (!n) return [];
  const out = [n];
  const push = (x) => { if (x && !out.includes(x)) out.push(x); };
  if (n.endsWith(' master')) push(n.slice(0, -7).trim());
  const first = n.split(' ')[0];
  if (first && first !== n) push(first);
  return out;
}

function resolveAgent(session, byId, byName, used) {
  if (session.pc && byId.has(session.pc) && !used.has(session.pc)) return byId.get(session.pc);
  for (const key of nameAliases(session.name)) {
    const a = byName.get(key);
    if (a && !used.has(a.id)) return a;
  }
  return null;
}

function unboundLive(session) {
  const offline = String(session.crewStatus || '').toLowerCase() === 'offline';
  return {
    role: session.baseRole || null,
    status: offline ? 'offline' : 'idle',
    heartbeat: null,
    task: null,
    activity: null,
    tool: false,
    error: null,
  };
}

// Paperclip list routes have returned both a bare array and a wrapped page.
function unwrapList(body) {
  if (Array.isArray(body)) return body;
  if (body && typeof body === 'object') {
    for (const k of ['agents', 'issues', 'items', 'data', 'runs', 'results', 'heartbeats']) {
      if (Array.isArray(body[k])) return body[k];
    }
  }
  return [];
}

function assigneeId(iss) {
  if (!iss || typeof iss !== 'object') return null;
  return iss.assigneeAgentId || iss.assigneeId
    || (iss.assignee && (iss.assignee.id || iss.assignee.agentId))
    || null;
}

function issueLabel(iss) {
  if (!iss || typeof iss !== 'object') return null;
  const id = iss.identifier || iss.key || iss.issueIdentifier || '';
  const title = iss.title || iss.name || '';
  return clip(`${id} ${title}`.trim(), 120);
}

function liveActivity(run) {
  if (!run || typeof run !== 'object') return null;
  const tool = clip(run.currentToolName, 48);
  const msg = clip(run.currentStatusMessage || run.lastAssistantSnippet || run.nextAction || run.triggerDetail, 90);
  if (tool && msg) {
    if (msg.toLowerCase().startsWith(tool.toLowerCase())) return clip(msg, 90);
    return clip(`${tool}: ${msg}`, 90);
  }
  return msg || tool;
}

function runRank(run) {
  const st = String(run && run.status || '').toLowerCase();
  if (st === 'running' || st === 'in_progress' || st === 'active') return 0;
  if (st === 'queued' || st === 'pending') return 1;
  return 9;
}

function pickRun(runs, agentId) {
  const mine = unwrapList(runs).filter((r) => r && r.agentId === agentId && runRank(r) < 9);
  mine.sort((a, b) => runRank(a) - runRank(b) || String(b.startedAt || b.createdAt || '').localeCompare(String(a.startedAt || a.createdAt || '')));
  return mine[0] || null;
}

function pickIssue(issues, agentId, run) {
  const list = unwrapList(issues);
  const byId = new Map(list.filter((x) => x && x.id).map((x) => [x.id, x]));
  const runIssue = run && (run.issue && typeof run.issue === 'object' ? run.issue : null);
  const runId = run && (run.issueId || (runIssue && runIssue.id));
  if (runId && byId.has(runId)) return byId.get(runId);
  if (runIssue && (runIssue.identifier || runIssue.title)) return runIssue;
  const mine = list.filter((x) => assigneeId(x) === agentId && String(x.status || '') === 'in_progress');
  mine.sort((a, b) => String(b.updatedAt || b.startedAt || '').localeCompare(String(a.updatedAt || a.startedAt || '')));
  if (mine[0]) return mine[0];
  const review = list.filter((x) => assigneeId(x) === agentId && (x.status === 'in_review' || x.status === 'blocked'));
  review.sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
  return review[0] || null;
}

// Map a Paperclip status onto the office. Seed loops never run once this applies.
function liveUi(crew, live) {
  const st = String(crew || '').toLowerCase();
  const task = live.task || null;
  const act = live.activity || null;
  let beat = '';
  if (live.heartbeat) {
    const d = new Date(live.heartbeat);
    if (!Number.isNaN(d.getTime())) beat = ` · last heartbeat ${d.toLocaleString('en-GB', { timeZone: 'Europe/Berlin' })}`;
  }
  if (st === 'paused' || st === 'waiting' || st === 'pending_approval' || st === 'pending') {
    return { status: 'waiting', task: task || 'Paused — needs Hurly', activity: act || 'Paused · needs you', error: null };
  }
  if (st === 'error' || st === 'failed') {
    const err = live.error || act || 'Error';
    return { status: 'error', task: task || err, activity: err, error: err };
  }
  if (st === 'offline' || st === 'terminated') {
    return { status: 'idle', task: 'Off the floor', activity: null, error: null };
  }
  if (st === 'idle' || st === 'done' || st === 'succeeded' || st === 'success') {
    return { status: 'done', task: `Idle${beat}`, activity: null, error: null };
  }
  const status = live.tool ? 'tool' : 'thinking';
  return { status, task: task || act || 'Working', activity: act, error: null };
}

function getJSON(url, token) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { authorization: `Bearer ${token}` }, timeout: 15_000 }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`${res.statusCode} ${url}`));
        try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => req.destroy(new Error('timeout')));
  });
}

class HurlyCrew extends EventEmitter {
  constructor({ live = !!process.env.PAPERCLIP_CHIEF_BOARD_TOKEN } = {}) {
    super();
    this.live = live && !!process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
    this.liveError = null;
    this.liveAt = null;
    this.polling = false;
    this.overrides = {};
    this.overridesMtime = 0;
    const now = Date.now();
    this.list = CREW.map((c, i) => this.entry(c, i, now));
  }

  entry(c, i, now = Date.now()) {
    return {
      ...c,
      id: c.key,
      file: null,
      cwd: `/hurly/${c.name}`, // the UI labels avatars with basename(cwd)
      title: c.task,
      model: c.agent === 'grokbot' ? 'Grok Bot teammate' : 'Paperclip agent',
      subagent: false,
      parentId: null,
      crewStatus: c.status,
      seedActivity: c.activity || null,
      prompt: c.task,
      reply: null,
      error: null,
      turnStartedAt: now - (i + 1) * 120_000,
      lastEventAt: now,
      startedAt: now - (i + 1) * 600_000,
      offset: (i * 5.3) % 17,
      source: 'seed',
      baseRole: c.role || null,
    };
  }

  start() {
    this.tick();
    this.timer = setInterval(() => this.tick(), 500);
    if (this.live) {
      this.poll();
      this.pollTimer = setInterval(() => this.poll(), POLL_MS);
    }
    return this;
  }

  stop() { clearInterval(this.timer); clearInterval(this.pollTimer); }

  readOverrides() {
    try {
      const st = fs.statSync(CREW_FILE);
      if (st.mtimeMs === this.overridesMtime) return;
      this.overridesMtime = st.mtimeMs;
      this.overrides = JSON.parse(fs.readFileSync(CREW_FILE, 'utf8')) || {};
    } catch { if (this.overridesMtime) { this.overrides = {}; this.overridesMtime = 0; } }
  }

  async poll() {
    if (this.polling) return;
    this.polling = true;
    const token = process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
    const base = `${PAPERCLIP_URL}/api/companies/${PAPERCLIP_COMPANY}`;
    try {
      const [agents, issues, runs] = await Promise.all([
        getJSON(`${base}/agents`, token),
        getJSON(`${base}/issues?status=in_progress,in_review,blocked`, token).catch(() =>
          getJSON(`${base}/issues?status=in_progress`, token).catch(() => [])),
        getJSON(`${base}/live-runs?limit=100`, token).catch(() => []),
      ]);
      this.ingestLive({ agents, issues, runs });
      if (this.liveError) console.error('paperclip poll recovered');
      this.liveError = null;
      this.liveAt = Date.now();
    } catch (e) {
      const msg = String(e.message || e);
      if (msg !== this.liveError) console.error(`paperclip poll failed: ${msg} (showing seed/crew.json)`);
      this.liveError = msg;
    } finally {
      this.polling = false;
    }
  }

  // Apply one Paperclip payload. Safe to call from tests with fixture JSON.
  // After the first payload for an agent, seed task/activity is not used again.
  ingestLive({ agents, issues, runs } = {}) {
    const agentList = unwrapList(agents).filter((a) => a && a.id);
    if (!agentList.length) return;
    const byId = new Map(agentList.map((a) => [a.id, a]));
    const byName = new Map();
    for (const a of agentList) {
      for (const key of nameAliases(a.name)) {
        if (key && !byName.has(key)) byName.set(key, a);
      }
    }
    // Keep a crew avatar on the matching Paperclip stand-in (pc id, exact name,
    // or alias). Otherwise that avatar stays on seed and a duplicate appears.
    const used = new Set();
    for (const s of this.list) {
      const a = resolveAgent(s, byId, byName, used);
      if (!a) continue;
      s.pc = a.id;
      used.add(a.id);
    }
    const known = new Set(this.list.map((s) => s.pc).filter(Boolean));
    const names = new Set(this.list.map((s) => s.name));
    for (const a of byId.values()) {
      if (known.has(a.id)) continue;
      const nm = a.name || `Agent ${String(a.id).slice(0, 8)}`;
      const name = names.has(nm) ? `${nm} (Paperclip)` : nm;
      names.add(name);
      this.list.push(this.entry({
        key: `pc-${a.id}`,
        role: a.title || a.role || null,
        name,
        agent: 'paperclip',
        pc: a.id,
        status: a.status || 'idle',
        task: a.title || 'Paperclip agent',
      }, this.list.length));
      known.add(a.id);
    }
    const issueList = unwrapList(issues);
    const runList = unwrapList(runs);
    for (const s of this.list) {
      if (!s.pc || !byId.has(s.pc)) {
        // Linked-then-gone: idle with last heartbeat. Never-linked after a
        // successful roster poll: honest idle/offline so seed (SWA-2978…) dies.
        if (s.pc && s.live) {
          s.live = { status: 'idle', task: null, activity: null, tool: false, error: null, heartbeat: s.live.heartbeat, role: s.live.role || null };
        } else {
          s.live = unboundLive(s);
        }
        continue;
      }
      const a = byId.get(s.pc);
      const run = pickRun(runList, s.pc);
      const st = String(a.status || '').toLowerCase();
      const quiet = st === 'idle' || st === 'done' || st === 'succeeded' || st === 'success' || st === 'offline' || st === 'terminated';
      const iss = quiet ? null : pickIssue(issueList, s.pc, run);
      s.live = {
        role: a.title || a.role || null,
        status: a.status,
        heartbeat: a.lastHeartbeatAt || a.lastHeartbeat || null,
        task: issueLabel(iss),
        activity: quiet ? null : liveActivity(run),
        tool: !!(run && run.currentToolName),
        error: (st === 'error' || st === 'failed') ? clip(a.error || a.lastError || (run && (run.livenessReason || run.error)) || 'Error', 120) : null,
      };
    }
    this.finishPoll();
  }

  finishPoll() {
    for (const s of this.list) s.sig = null; // force a re-emit
  }

  tick() {
    this.readOverrides();
    const t = Date.now() / 1000;
    const now = Date.now();
    let changed = false;
    for (const s of this.list) {
      const ov = this.overrides[s.id] || {};
      let crew = s.crewStatus;
      let source = 'seed';
      if (s.live) { crew = s.live.status || crew; source = 'paperclip'; }
      if (ov.status) { crew = ov.status; source = 'override'; }

      let status;
      let stepKey = '';
      const loop = source === 'paperclip' ? null : LOOPS[crew];
      if (loop) {
        const total = loop.reduce((a, [, d]) => a + d, 0);
        let k = (t + s.offset) % total;
        let i = 0;
        while (k >= loop[i][1]) { k -= loop[i][1]; i++; }
        status = loop[i][0];
        stepKey = `${Math.floor((t + s.offset) / total)}:${i}`;
      } else if (source !== 'paperclip') status = FIXED[crew] || 'done';

      let task = s.task;
      let activity = null;
      let error = null;
      if (s.live && source !== 'seed') {
        const copy = liveUi(crew, s.live);
        task = copy.task;
        activity = copy.activity;
        error = copy.error;
        if (source === 'paperclip') { status = copy.status; stepKey = ''; }
      } else if (status === 'waiting') {
        activity = 'Paused · needs you';
      } else if (status === 'tool') {
        activity = s.seedActivity || task;
      }
      if (ov.task) task = ov.task;
      if (ov.activity) activity = ov.activity;
      // Real step data only (crew.json override: step / steps / plan[]); the
      // status loop above is a simulation, so it never fakes task progress.
      if (Number.isFinite(ov.step) && Number.isFinite(ov.steps)) { s.step = ov.step; s.steps = ov.steps; s.plan = Array.isArray(ov.plan) ? ov.plan : null; }
      else { s.step = s.steps = null; s.plan = null; }
      s.role = ov.role || (s.live && s.live.role) || s.baseRole || null;

      const reply = status === 'done' ? task : null;
      const key = `${crew}|${status}|${stepKey}|${task}|${activity}|${error || ''}`;
      // keep lastEventAt fresh so server.view() doesn't decay states
      s.lastEventAt = now;
      if (key === s.sig) continue;
      s.sig = key;
      changed = true;
      s.crew = crew;
      s.source = source;
      s.status = status;
      s.title = task;
      s.prompt = task;
      s.reply = reply;
      s.activity = activity;
      s.error = error;
      s.model = `${s.agent === 'grokbot' ? 'Grok Bot teammate' : 'Paperclip agent'} · ${crew} (${source})`;
    }
    if (changed) this.emit('change');
  }

  sessions() { return this.list; }
}

module.exports = { HurlyCrew, CREW, unwrapList, liveActivity, pickIssue, pickRun, normName, nameAliases, resolveAgent };
