// node scripts/hurly-shot.cjs <out.png> [now|day|evening|night] [select-key]
const { chromium } = require('playwright');
(async () => {
  const [out, light = 'day', sel = ''] = process.argv.slice(2);
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  const errs = [];
  pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.addInitScript((l) => { localStorage.setItem('wmad.light', JSON.stringify(l)); }, light);
  await pg.goto('http://localhost:4545/?view=office&quality=high', { waitUntil: 'networkidle' });
  await pg.waitForTimeout(9000);
  if (sel) { await pg.click(`[data-sel="${sel}"]`).catch((e) => errs.push(String(e))); await pg.waitForTimeout(1500); }
  await pg.screenshot({ path: out });
  console.log('errors:', errs.join('\n') || 'none');
  await b.close();
})();
