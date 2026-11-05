'use strict';

// Office → Paperclip agent resume (Start when paused / waiting).
// Uses the same board token as the live Hurly crew poller.

const https = require('https');
const http = require('http');
const { URL } = require('url');

const PAPERCLIP_URL = process.env.PAPERCLIP_URL || 'https://paperclip.s-w.art';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function boardToken() {
  return process.env.PAPERCLIP_CHIEF_BOARD_TOKEN || '';
}

function postJson(url, token, body) {
  return new Promise((resolve, reject) => {
    let parsed;
    try { parsed = new URL(url); } catch (e) { reject(e); return; }
    const lib = parsed.protocol === 'http:' ? http : https;
    const payload = Buffer.from(JSON.stringify(body == null ? {} : body));
    const req = lib.request({
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'http:' ? 80 : 443),
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'content-length': payload.length,
        accept: 'application/json',
      },
      timeout: 15_000,
    }, (res) => {
      let data = '';
      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        let json = null;
        try { json = data ? JSON.parse(data) : null; } catch { json = { raw: data.slice(0, 400) }; }
        resolve({ status: res.statusCode || 0, body: json });
      });
    });
    req.on('error', reject);
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.write(payload);
    req.end();
  });
}

async function resumeAgent(agentId) {
  const id = String(agentId || '').trim();
  if (!UUID.test(id)) return { ok: false, status: 400, error: 'invalid agent id' };
  const token = boardToken();
  if (!token) return { ok: false, status: 503, error: 'Paperclip board token not configured' };
  const base = PAPERCLIP_URL.replace(/\/+$/, '');
  try {
    const resumed = await postJson(`${base}/api/agents/${encodeURIComponent(id)}/resume`, token, {});
    if (resumed.status >= 200 && resumed.status < 300) {
      return { ok: true, status: resumed.status, via: 'resume', body: resumed.body };
    }
    // Already running / idle agents may reject resume — nudge a heartbeat wake.
    const woke = await postJson(`${base}/api/agents/${encodeURIComponent(id)}/wakeup`, token, {
      source: 'on_demand',
      triggerDetail: 'manual',
      reason: 'office.s-w.art Start',
      forceFreshSession: false,
    });
    if (woke.status >= 200 && woke.status < 300) {
      return { ok: true, status: woke.status, via: 'wakeup', body: woke.body, resumeStatus: resumed.status };
    }
    return {
      ok: false,
      status: woke.status || resumed.status || 502,
      error: (woke.body && (woke.body.error || woke.body.message))
        || (resumed.body && (resumed.body.error || resumed.body.message))
        || 'Paperclip resume failed',
      resumeStatus: resumed.status,
      wakeupStatus: woke.status,
    };
  } catch (e) {
    return { ok: false, status: 502, error: String(e.message || e) };
  }
}

module.exports = { resumeAgent, boardToken, PAPERCLIP_URL, UUID };
