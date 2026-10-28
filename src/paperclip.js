'use strict';

// Live Paperclip crew → office sessions.
// Reads company agents + their open issues over the Paperclip API.
// No Grok Bot OAuth, no in-office Auto-review approve — status only.

const { EventEmitter } = require('events');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const OPEN = new Set(['todo', 'in_progress', 'in_review', 'blocked']);
const ACTIVE_AGENT = new Set(['running', 'busy', 'working']);

function env(name, fallback) {
  const v = process.env[name];
  return v == null || v === '' ? fallback : v;
}

function fetchJson(url, { headers = {}, timeoutMs = 8000 } = {}) {
  return new Promise((resolve, reject) => {
    let parsed;
    try { parsed = new URL(url); } catch (e) { reject(e); return; }
    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.request({
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: { accept: 'application/json', ...headers },
      timeout: timeoutMs,
    }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Paperclip ${res.statusCode}: ${raw.slice(0, 200)}`));
          return;
        }
        try { resolve(JSON.parse(raw || 'null')); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Paperclip request timed out')); });
    req.end();
  });
}

function asList(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.issues)) return payload.issues;
  if (payload && Array.isArray(payload.items)) return payload.items;
  if (payload && Array.isArray(payload.agents)) return payload.agents;
  return [];
}

function issueNeedsYou(issue) {
  if (!issue) return false;
  if (issue.status === 'in_review') return true;
  if (issue.reviewAttention) return true;
  if (issue.status === 'blocked' && issue.blockerAttention) return true;
  // Human-owned open work on the board is a "needs you" signal for that desk's buddy notes.
  if (issue.assigneeUserId && !issue.assigneeAgentId && OPEN.has(issue.status)) return true;
  return false;
}

function pickIssue(issues) {
  const rank = { in_progress: 0, in_review: 1, blocked: 2, todo: 3 };
  return [...issues].sort((a, b) => {
    const ra = rank[a.status] ?? 9;
    const rb = rank[b.status] ?? 9;
    if (ra !== rb) return ra - rb;
    return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
  })[0] || null;
}

function mapStatus(agent, issue) {
  if (agent.errorReason) return { status: 'error', activity: String(agent.errorReason).slice(0, 80) };

  // Explicit board "needs you" wins only when the issue itself is waiting on a human,
  // not when a running agent merely has review metadata on an in_progress ticket.
  const hardNeedsYou = issue && (
    issue.status === 'in_review'
    || (issue.status === 'blocked' && issue.blockerAttention)
    || (issue.assigneeUserId && !issue.assigneeAgentId)
  );
  if (hardNeedsYou) {
    return {
      status: 'waiting',
      activity: `${issue.identifier || ''} needs you`.trim() || 'Needs you',
    };
  }

  if (ACTIVE_AGENT.has(agent.status) || (issue && issue.status === 'in_progress')) {
    const label = issue
      ? `${issue.identifier || ''} ${issue.title || ''}`.trim()
      : (agent.title || 'heartbeat');
    return { status: 'tool', activity: label.slice(0, 96) || 'working' };
  }
  if (agent.status === 'paused') return { status: 'idle', activity: null };
  if (issue && issue.status === 'todo') return { status: 'thinking', activity: `${issue.identifier || 'issue'} queued` };
  if (issue && issue.status === 'blocked') {
    return { status: 'waiting', activity: `${issue.identifier || 'issue'} blocked` };
  }
  if (issueNeedsYou(issue)) {
    return {
      status: 'waiting',
      activity: issue ? `${issue.identifier || ''} needs you`.trim() : 'Needs you',
    };
  }
  // Recent heartbeat with no open issue → off-duty wanderer (done).
  if (agent.lastHeartbeatAt) return { status: 'done', activity: null };
  return { status: 'idle', activity: null };
}

class PaperclipWatcher extends EventEmitter {
  constructor({
    apiUrl = env('PAPERCLIP_API_URL'),
    apiKey = env('PAPERCLIP_API_KEY'),
    companyId = env('PAPERCLIP_COMPANY_ID'),
    interval = Number(env('PAPERCLIP_OFFICE_POLL_MS', 3000)),
  } = {}) {
    super();
    if (!apiUrl) throw new Error('PAPERCLIP_API_URL is required for --paperclip mode');
    if (!apiKey) throw new Error('PAPERCLIP_API_KEY is required for --paperclip mode');
    if (!companyId) throw new Error('PAPERCLIP_COMPANY_ID is required for --paperclip mode');
    this.apiUrl = apiUrl.replace(/\/$/, '');
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.interval = Number.isFinite(interval) && interval > 0 ? interval : 3000;
    this.list = [];
    this.lastError = null;
    this._sig = '';
  }

  headers() {
    const h = { authorization: `Bearer ${this.apiKey}` };
    if (process.env.PAPERCLIP_RUN_ID) h['x-paperclip-run-id'] = process.env.PAPERCLIP_RUN_ID;
    return h;
  }

  start() {
    this.tick();
    this.timer = setInterval(() => this.tick(), this.interval);
    if (this.timer.unref) this.timer.unref();
    return this;
  }

  stop() { clearInterval(this.timer); }

  async tick() {
    try {
      const [agentsRaw, issuesRaw] = await Promise.all([
        fetchJson(`${this.apiUrl}/api/companies/${this.companyId}/agents`, { headers: this.headers() }),
        fetchJson(
          `${this.apiUrl}/api/companies/${this.companyId}/issues?status=${encodeURIComponent([...OPEN].join(','))}`,
          { headers: this.headers() },
        ),
      ]);
      const agents = asList(agentsRaw).filter((a) => a && a.id && a.name);
      const issues = asList(issuesRaw).filter((i) => i && i.id);
      const byAgent = new Map();
      for (const issue of issues) {
        const aid = issue.assigneeAgentId;
        if (!aid) continue;
        if (!byAgent.has(aid)) byAgent.set(aid, []);
        byAgent.get(aid).push(issue);
      }

      const now = Date.now();
      const next = agents.map((agent) => {
        const mine = byAgent.get(agent.id) || [];
        const issue = pickIssue(mine);
        const mapped = mapStatus(agent, issue);
        const startedAt = agent.lastHeartbeatAt ? Date.parse(agent.lastHeartbeatAt) || now : now;
        const prompt = issue
          ? `${issue.identifier || ''} — ${issue.title || ''}`.trim()
          : (agent.title || agent.role || 'Paperclip agent');
        return {
          agent: 'paperclip',
          id: agent.id,
          sessionId: agent.urlKey || agent.id,
          file: null,
          cwd: `/paperclip/${agent.urlKey || agent.id}`,
          title: agent.name,
          model: agent.adapterType || null,
          subagent: false,
          parentId: null,
          status: mapped.status,
          activity: mapped.activity,
          prompt,
          reply: issue && issue.status === 'done' ? null : (agent.pauseReason || null),
          error: agent.errorReason || null,
          turnStartedAt: ACTIVE_AGENT.has(agent.status) ? startedAt : null,
          lastEventAt: startedAt,
          startedAt,
          // Extra fields for hover/debug; ignored by the UI if unused.
          paperclip: {
            agentStatus: agent.status,
            adapterType: agent.adapterType,
            issueId: issue?.id || null,
            issueIdentifier: issue?.identifier || null,
            issueStatus: issue?.status || null,
            openIssues: mine.length,
          },
        };
      });

      // Stable order: working first, then needs-you, then by name.
      const weight = (s) => (s.status === 'tool' || s.status === 'thinking' || s.status === 'typing' ? 0
        : s.status === 'waiting' || s.status === 'error' ? 1 : 2);
      next.sort((a, b) => weight(a) - weight(b) || a.title.localeCompare(b.title));

      const sig = JSON.stringify(next.map((s) => [s.id, s.status, s.activity, s.prompt, s.error]));
      this.list = next;
      this.lastError = null;
      if (sig !== this._sig) {
        this._sig = sig;
        this.emit('change');
      }
    } catch (err) {
      this.lastError = String(err.message || err);
      // Keep last good snapshot; surface a synthetic desk so the office still boots.
      if (!this.list.length) {
        this.list = [{
          agent: 'paperclip',
          id: 'paperclip-error',
          sessionId: null,
          file: null,
          cwd: '/paperclip/error',
          title: 'Paperclip feed',
          model: null,
          subagent: false,
          parentId: null,
          status: 'error',
          activity: this.lastError.slice(0, 96),
          prompt: 'Could not reach Paperclip API',
          reply: null,
          error: this.lastError,
          turnStartedAt: Date.now(),
          lastEventAt: Date.now(),
          startedAt: Date.now(),
        }];
        this.emit('change');
      }
    }
  }

  sessions() { return this.list; }
}

module.exports = { PaperclipWatcher, mapStatus, issueNeedsYou, pickIssue };
