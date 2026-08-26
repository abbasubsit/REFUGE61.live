const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1440x900 - Dark hero page (/lets-talk)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3003/lets-talk');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot_lets-talk_1440.png' });
  
  // 390x844 - Dark hero page (/lets-talk)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3003/lets-talk');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot_lets-talk_390.png' });
  
  // 1440x900 - Light page (/practical-information)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3003/practical-information');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot_practical_1440.png' });
  
  // 390x844 - Light page (/practical-information)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3003/practical-information');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot_practical_390.png' });

  await browser.close();
})();
