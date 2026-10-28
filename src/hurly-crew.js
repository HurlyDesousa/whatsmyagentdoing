'use strict';

// `--hurly`: Hurly's ops crew (Grok Bot teammates + Paperclip agents) as
// office avatars. Same interface as Watcher / DemoWatcher.
//
// Sources, in priority order:
//   1. Paperclip live feed (Paperclip agents only) when PAPERCLIP_CHIEF_BOARD_TOKEN
//      is set: GET /api/companies/:id/agents + in_progress issues, every 30 s.
//   2. Override file (HURLY_CREW_FILE, default ../crew.json next to the repo):
//      { "<key>": { "status": "...", "task": "...", "activity": "..." } }
//      Re-read on change; this is how teammate notes get in today.
//   3. Built-in seed below (snapshot ~02:30 Europe/Berlin, 28 Oct 2026).
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
const POLL_MS = 30_000;

// key, display name, agent badge, paperclip agent id (live), seed status, task, activity
const CREW = [
  // Grok Bot teammates
  { key: 'chief', role: 'Ops lead', name: 'Chief Master', agent: 'grokbot', status: 'active', task: 'Ops coordination · SWA-2978 3D office spike', activity: 'Planning next dispatch' },
  { key: 'monitor', role: 'Monitoring', name: 'Monitor Master', agent: 'grokbot', status: 'watching', task: 'Charting mem watch', activity: 'Watching memory charts' },
  { key: 'proxmox', role: 'Proxmox infra', name: 'Proxmox Master', agent: 'grokbot', status: 'idle', task: 'Proxmox cluster (pve*)' },
  { key: 'dockhand', role: 'Docker hosts', name: 'Dockhand Master', agent: 'grokbot', status: 'idle', task: 'Docker hosts' },
  { key: 'truenas', role: 'Storage', name: 'TrueNAS Master', agent: 'grokbot', status: 'idle', task: 'TrueNAS storage' },
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

// Small loops so working avatars visibly move between thinking / tools / typing.
const LOOPS = {
  running: [['thinking', 4], ['tool', 8], ['thinking', 3], ['tool', 6], ['typing', 4]],
  active: [['thinking', 9], ['typing', 4], ['thinking', 6], ['tool', 4]],
  watching: [['tool', 10], ['thinking', 5]],
};
// Crew vocabulary -> UI status (non-looping ones).
const FIXED = { paused: 'waiting', waiting: 'waiting', error: 'error', idle: 'done', done: 'done', offline: 'idle', terminated: 'idle' };

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
    const token = process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
    const base = `${PAPERCLIP_URL}/api/companies/${PAPERCLIP_COMPANY}`;
    try {
      const [agents, issues] = await Promise.all([
        getJSON(`${base}/agents`, token),
        getJSON(`${base}/issues?status=in_progress`, token).catch(() => []),
      ]);
      const byId = new Map((Array.isArray(agents) ? agents : []).map((a) => [a.id, a]));
      const issueOf = new Map();
      for (const x of Array.isArray(issues) ? issues : []) if (x.assigneeAgentId && !issueOf.has(x.assigneeAgentId)) issueOf.set(x.assigneeAgentId, x);
      // Paperclip agents that aren't in the seed (new hires, stand-ins) join
      // the office too, so the floor always shows the full Paperclip crew.
      const known = new Set(this.list.map((s) => s.pc).filter(Boolean));
      const names = new Set(this.list.map((s) => s.name));
      for (const a of byId.values()) {
        if (!a || !a.id || known.has(a.id)) continue;
        const nm = a.name || `Agent ${String(a.id).slice(0, 8)}`;
        const name = names.has(nm) ? `${nm} (Paperclip)` : nm;
        names.add(name);
        this.list.push(this.entry({ key: `pc-${a.id}`, role: a.title || a.role || null, name, agent: 'paperclip', pc: a.id, status: a.status || 'idle', task: a.title || 'Paperclip agent' }, this.list.length));
        known.add(a.id);
      }
      for (const s of this.list) {
        if (!s.pc || !byId.has(s.pc)) continue;
        const a = byId.get(s.pc);
        const iss = issueOf.get(s.pc);
        s.live = { role: a.title || a.role || null, status: a.status, heartbeat: a.lastHeartbeatAt, task: iss ? `${iss.identifier} ${iss.title}` : null };
      }
      if (this.liveError) console.error('paperclip poll recovered');
      this.liveError = null;
      this.liveAt = Date.now();
    } catch (e) {
      const msg = String(e.message || e);
      if (msg !== this.liveError) console.error(`paperclip poll failed: ${msg} (showing seed/crew.json)`);
      this.liveError = msg;
    }
    return this.finishPoll();
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
      let task = s.task;
      let source = 'seed';
      if (s.live) {
        crew = s.live.status; source = 'paperclip';
        if (s.live.task) task = s.live.task;
        else if (crew === 'paused') task = 'Paused — needs Hurly';
        else if (crew === 'idle') task = `Idle${s.live.heartbeat ? ` · last heartbeat ${new Date(s.live.heartbeat).toLocaleString('en-GB', { timeZone: 'Europe/Berlin' })}` : ''}`;
      }
      if (ov.status) { crew = ov.status; source = 'override'; }
      if (ov.task) task = ov.task;

      let status;
      let stepKey = '';
      const loop = LOOPS[crew];
      if (loop) {
        const total = loop.reduce((a, [, d]) => a + d, 0);
        let k = (t + s.offset) % total;
        let i = 0;
        while (k >= loop[i][1]) { k -= loop[i][1]; i++; }
        status = loop[i][0];
        stepKey = `${Math.floor((t + s.offset) / total)}:${i}`;
      } else status = FIXED[crew] || 'done';
      // Real step data only (crew.json override: step / steps / plan[]); the
      // status loop above is a simulation, so it never fakes task progress.
      if (Number.isFinite(ov.step) && Number.isFinite(ov.steps)) { s.step = ov.step; s.steps = ov.steps; s.plan = Array.isArray(ov.plan) ? ov.plan : null; }
      else { s.step = s.steps = null; s.plan = null; }
      s.role = ov.role || (s.live && s.live.role) || s.baseRole || null;

      const activity = ov.activity || (status === 'waiting' ? 'Paused · needs you' : status === 'tool' ? (source === 'seed' && s.seedActivity ? s.seedActivity : task) : null);
      const reply = status === 'done' ? task : null;
      const key = `${crew}|${status}|${stepKey}|${task}|${activity}`;
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
      s.model = `${s.agent === 'grokbot' ? 'Grok Bot teammate' : 'Paperclip agent'} · ${crew} (${source})`;
    }
    if (changed) this.emit('change');
  }

  sessions() { return this.list; }
}

module.exports = { HurlyCrew, CREW };
