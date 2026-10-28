const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const pg = await b.newPage({ viewport: { width: 1280, height: 860 }, deviceScaleFactor: 1.5 });
  const errs = [];
  pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  pg.on('pageerror', (e) => errs.push(String(e)));
  await pg.goto('http://localhost:4545/?view=office&quality=high', { waitUntil: 'networkidle' });
  await pg.waitForTimeout(9000);
  await pg.screenshot({ path: process.argv[2] });
  console.log('errors:', errs.join('\n') || 'none');
  await b.close();
})();
