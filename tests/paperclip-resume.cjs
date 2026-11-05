const assert = require('node:assert/strict');
const test = require('node:test');
const { resumeAgent, UUID } = require('../src/paperclip-resume');

test('resumeAgent rejects bad ids without calling Paperclip', async () => {
  const r = await resumeAgent('not-a-uuid');
  assert.equal(r.ok, false);
  assert.equal(r.status, 400);
});

test('UUID pattern matches Paperclip agent ids', () => {
  assert.equal(UUID.test('2b483eac-3320-4c85-9f05-c88db157c63c'), true);
  assert.equal(UUID.test('grok'), false);
});

test('resumeAgent reports missing board token', async () => {
  const prev = process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
  delete process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
  try {
    const r = await resumeAgent('2b483eac-3320-4c85-9f05-c88db157c63c');
    assert.equal(r.ok, false);
    assert.equal(r.status, 503);
  } finally {
    if (prev == null) delete process.env.PAPERCLIP_CHIEF_BOARD_TOKEN;
    else process.env.PAPERCLIP_CHIEF_BOARD_TOKEN = prev;
  }
});
