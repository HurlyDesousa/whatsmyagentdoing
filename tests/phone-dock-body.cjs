// Phone sheet dock cards: open body must not use 1fr (collapses to 0px).
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const CSS = fs.readFileSync(path.join(__dirname, '..', 'public', '4d', 'ui.css'), 'utf8');

test('phone sheet open dock body sizes with auto, not 1fr', () => {
  assert.match(
    CSS,
    /\.bhq-phone\s+\.bhq-sheet\s+\.bhq-dcard\.is-open\s+\.bhq-dbody\s*\{[^}]*grid-template-rows:\s*auto/,
    'open phone dock body must use grid-template-rows: auto',
  );
  // Desktop/generic open rule may still be 1fr — that is fine with a sized parent.
  assert.match(CSS, /\.bhq-dcard\.is-open\s+\.bhq-dbody\s*\{[^}]*grid-template-rows:\s*1fr/);
});
