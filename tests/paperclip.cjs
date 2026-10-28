'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { mapStatus, issueNeedsYou, pickIssue } = require('../src/paperclip');

describe('paperclip status mapping', () => {
  it('marks running agents as working', () => {
    const m = mapStatus({ status: 'running', lastHeartbeatAt: new Date().toISOString() }, {
      identifier: 'SWA-1', title: 'Do the thing', status: 'in_progress',
    });
    assert.equal(m.status, 'tool');
    assert.match(m.activity, /SWA-1/);
  });

  it('marks in_review as needs-you', () => {
    assert.equal(issueNeedsYou({ status: 'in_review' }), true);
    const m = mapStatus({ status: 'idle' }, { identifier: 'SWA-2', status: 'in_review', title: 'Review me' });
    assert.equal(m.status, 'waiting');
  });

  it('keeps a running agent working even with reviewAttention metadata', () => {
    const m = mapStatus(
      { status: 'running', lastHeartbeatAt: new Date().toISOString() },
      { identifier: 'SWA-3', title: 'Ship it', status: 'in_progress', reviewAttention: true },
    );
    assert.equal(m.status, 'tool');
  });

  it('marks idle agents with heartbeats as done wanderers', () => {
    const m = mapStatus({ status: 'idle', lastHeartbeatAt: new Date().toISOString() }, null);
    assert.equal(m.status, 'done');
  });

  it('picks in_progress over todo', () => {
    const issue = pickIssue([
      { id: 'a', status: 'todo', updatedAt: '2026-10-28T02:00:00Z' },
      { id: 'b', status: 'in_progress', updatedAt: '2026-10-28T01:00:00Z' },
    ]);
    assert.equal(issue.id, 'b');
  });

  it('surfaces agent errors', () => {
    const m = mapStatus({ status: 'idle', errorReason: 'adapter crashed' }, null);
    assert.equal(m.status, 'error');
    assert.match(m.activity, /adapter crashed/);
  });
});
