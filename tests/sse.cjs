// SSE keepalive: proxies idle-cut a quiet event-stream, and a dead client
// must not stop writes to the ones that are still listening.
const assert = require('node:assert/strict');
const http = require('http');
const { EventEmitter } = require('node:events');
const test = require('node:test');
const { createServer } = require('../src/server');

function serve(sessions = () => []) {
  const watcher = new EventEmitter();
  watcher.sessions = sessions;
  const server = createServer(watcher, { demo: true });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, watcher, port: server.address().port }));
  });
}

function close(server) {
  server.closeAllConnections();
  return new Promise((resolve) => server.close(resolve));
}

function openEvents(port) {
  return new Promise((resolve, reject) => {
    const req = http.get({ host: '127.0.0.1', port, path: '/events' }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      resolve({
        req,
        res,
        headers: res.headers,
        status: res.statusCode,
        text: () => body,
      });
    });
    req.on('error', (err) => { if (err.code !== 'ECONNRESET') reject(err); });
  });
}

test('SSE sends an immediate padded heartbeat and a fast retry', async () => {
  const { server, port } = await serve();
  try {
    const ev = await openEvents(port);
    await new Promise((r) => setTimeout(r, 100));
    const body = ev.text();
    ev.req.destroy();
    assert.equal(ev.status, 200);
    assert.match(ev.headers['content-type'], /^text\/event-stream/);
    assert.equal(ev.headers['x-accel-buffering'], 'no');
    assert.match(ev.headers['cache-control'], /no-store/);
    assert.match(ev.headers['cache-control'], /no-transform/);
    assert.match(body, /^retry: 2000\n/);
    assert.match(body, /data: \{"now":\d+,"lang":null,"sessions":\[\]\}\n\n/);
    assert.match(body, /event: ping\ndata: \d+\n\n/);
    const pad = body.split('\n').find((line) => line.startsWith(':') && line.length > 1000);
    assert.ok(pad, 'expected a long SSE comment so proxy buffers flush');
    assert.ok(pad.length >= 8192, `pad was ${pad.length} bytes`);
  } finally {
    await close(server);
  }
});

test('a dropped SSE client does not block snapshots for the others', async () => {
  let sessions = [];
  const { server, watcher, port } = await serve(() => sessions);
  try {
    const live = await openEvents(port);
    const dead = await openEvents(port);
    await new Promise((r) => setTimeout(r, 30));
    dead.req.destroy();
    await new Promise((r) => setTimeout(r, 30));
    sessions = [{
      agent: 'claude', id: 'one', status: 'thinking',
      lastEventAt: Date.now(), mtime: Date.now(),
    }];
    watcher.emit('change');
    await new Promise((r) => setTimeout(r, 80));
    const body = live.text();
    live.req.destroy();
    assert.match(body, /"agent":"claude"/);
    assert.match(body, /"id":"one"/);
  } finally {
    await close(server);
  }
});
