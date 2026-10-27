const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  const screenshotDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 1. Render OG image PNG from SVG
  console.log('Rendering og-image.png...');
  await page.setViewportSize({ width: 1200, height: 630 });
  const ogSvgPath = path.join(__dirname, '..', 'public', 'og-image.svg');
  await page.goto('file:///' + ogSvgPath.replace(/\\/g, '/'));
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'og-image.png') });
  console.log('Saved public/og-image.png');

  // Viewports to test
  const viewports = [
    { width: 1440, height: 900, name: '1440px' },
    { width: 1024, height: 768, name: '1024px' },
    { width: 768, height: 1024, name: '768px' },
    { width: 390, height: 844, name: '390px' },
  ];

  const routes = [
    { path: '/', name: 'overview' },
    { path: '/projects', name: 'projects' },
    { path: '/integrations', name: 'integrations' },
    { path: '/themes', name: 'themes' },
    { path: '/services', name: 'services' },
    { path: '/contact', name: 'contact' },
  ];

  for (const vp of viewports) {
    console.log(`\nTesting viewport ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of routes) {
      const url = `http://localhost:5174${route.path}`;
      await page.goto(url, { waitUntil: 'networkidle' });

      // Check horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const hasHorizontalScroll = scrollWidth > clientWidth;

      console.log(
        `  ${route.name} (${vp.name}): scrollWidth=${scrollWidth}, clientWidth=${clientWidth}, overflow=${hasHorizontalScroll}`
      );

      const shotPath = path.join(screenshotDir, `${route.name}_${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
    }

    // Special test at 390px: test mobile drawer toggle
    if (vp.width === 390) {
      console.log('  Testing mobile navigation drawer toggle at 390px...');
      await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
      // Click the mobile nav toggle button in TopBar
      const toggleButton = page.locator('button[aria-label*="navigation" i], button[aria-label*="menu" i], .Polaris-TopBar__NavigationIcon button');
      if (await toggleButton.count() > 0) {
        await toggleButton.first().click();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(screenshotDir, `mobile_drawer_open_390px.png`) });
        console.log('  Saved mobile drawer screenshot');
      }
    }
  }

  await browser.close();
  console.log('\nAll quality check screenshots captured successfully.');
}

run().catch((err) => {
  console.error('Error during quality check:', err);
  process.exit(1);
});
