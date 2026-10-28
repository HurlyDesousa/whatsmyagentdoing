'use strict';

// In-app email + password gate (SWA-2995). On only when OFFICE_PASSWORD_HASH and
// OFFICE_SESSION_SECRET are set; otherwise the server stays open (box-local dev).
//   OFFICE_ALLOWED_EMAILS  comma-separated allowlist (case-insensitive)
//   OFFICE_PASSWORD_HASH   scrypt$N$r$p$<b64url salt>$<b64url dk>
//   OFFICE_SESSION_SECRET  HMAC key for the session cookie

const crypto = require('crypto');

const COOKIE = 'office_session';
const TTL_MS = 7 * 24 * 3600_000;

const b64urlDecode = (s) => {
  s = String(s).replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Buffer.from(s, 'base64');
};
const b64url = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

function parseHash(str) {
  const parts = String(str || '').trim().replace(/^['"]|['"]$/g, '').split('$');
  if (parts.length !== 6 || parts[0] !== 'scrypt') return null;
  const [N, r, p] = parts.slice(1, 4).map(Number);
  if (![N, r, p].every((n) => Number.isInteger(n) && n > 0)) return null;
  const salt = b64urlDecode(parts[4]);
  const dk = b64urlDecode(parts[5]);
  if (!salt.length || !dk.length) return null;
  return { N, r, p, salt, dk };
}

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(a).digest();
  const hb = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(ha, hb) && a.length === b.length;
}

function parseCookies(header) {
  const out = {};
  for (const part of String(header || '').split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    if (k) out[k] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

function createAuth(env = process.env) {
  const secret = env.OFFICE_SESSION_SECRET || '';
  const hash = parseHash(env.OFFICE_PASSWORD_HASH);
  const allowed = new Set(String(env.OFFICE_ALLOWED_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean));
  const enabled = Boolean(secret && env.OFFICE_PASSWORD_HASH);

  if (!enabled) {
    console.warn('office auth: OFFICE_PASSWORD_HASH/OFFICE_SESSION_SECRET not set — login gate OFF (open, box-local dev)');
  } else {
    if (!hash) console.warn('office auth: OFFICE_PASSWORD_HASH malformed — every login will fail');
    if (!allowed.size) console.warn('office auth: OFFICE_ALLOWED_EMAILS empty — every login will fail');
    console.log(`office auth: loaded (login gate ON, ${allowed.size} allowed email${allowed.size === 1 ? '' : 's'})`);
  }

  const sign = (payload) => b64url(crypto.createHmac('sha256', secret).update(payload).digest());

  function makeToken(email) {
    const payload = b64url(JSON.stringify({ e: email, x: Date.now() + TTL_MS }));
    return `${payload}.${sign(payload)}`;
  }

  function readToken(tok) {
    if (!tok || typeof tok !== 'string') return null;
    const [payload, mac] = tok.split('.');
    if (!payload || !mac || !safeEqual(sign(payload), mac)) return null;
    try {
      const data = JSON.parse(b64urlDecode(payload).toString('utf8'));
      if (!data || typeof data.x !== 'number' || data.x < Date.now()) return null;
      if (!allowed.has(String(data.e || '').toLowerCase())) return null; // allowlist change revokes
      return data;
    } catch { return null; }
  }

  function session(req) {
    if (!enabled) return { e: null, open: true };
    return readToken(parseCookies(req.headers.cookie)[COOKIE]);
  }

  // Constant-ish work either way: always run scrypt so a bad email costs the same.
  function verify(email, password) {
    return new Promise((resolve) => {
      const em = String(email || '').trim().toLowerCase();
      const pw = String(password || '');
      const h = hash || { N: 16384, r: 8, p: 1, salt: Buffer.alloc(16), dk: Buffer.alloc(32) };
      crypto.scrypt(pw, h.salt, h.dk.length, { N: h.N, r: h.r, p: h.p, maxmem: 256 * h.N * h.r + 1024 * 1024 }, (err, dk) => {
        const pwOk = !err && Boolean(hash) && crypto.timingSafeEqual(dk, h.dk);
        resolve(pwOk && allowed.has(em) ? em : null);
      });
    });
  }

  const isHttps = (req) => String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim() === 'https' || Boolean(req.socket && req.socket.encrypted);

  function cookieHeader(req, value, maxAgeSec) {
    return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${isHttps(req) ? '; Secure' : ''}`;
  }
  const loginCookie = (req, email) => cookieHeader(req, makeToken(email), Math.floor(TTL_MS / 1000));
  const logoutCookie = (req) => cookieHeader(req, '', 0);

  // Token our own CLI can send for --stop when the gate is on (needs the secret in env).
  const stopToken = () => (secret ? sign('office-stop') : '');
  const checkStopToken = (v) => Boolean(secret && v && safeEqual(String(v), stopToken()));

  return { enabled, session, verify, loginCookie, logoutCookie, checkStopToken };
}

function stopTokenFromEnv(env = process.env) {
  if (!env.OFFICE_SESSION_SECRET) return '';
  return b64url(crypto.createHmac('sha256', env.OFFICE_SESSION_SECRET).update('office-stop').digest());
}

module.exports = { createAuth, parseHash, stopTokenFromEnv, COOKIE };
