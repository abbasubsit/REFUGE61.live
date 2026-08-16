import { chromium } from "playwright";

const url = process.argv[2];
const outBase = process.argv[3];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(600);
await page.screenshot({ path: `${outBase}-nav-transparent.png`, clip: { x: 0, y: 0, width: 1440, height: 90 } });

await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
await page.waitForTimeout(400);
await page.screenshot({ path: `${outBase}-nav-solid.png`, clip: { x: 0, y: 0, width: 1440, height: 90 } });

await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(400);
await page.screenshot({ path: `${outBase}-footer.png` });

await browser.close();
console.log("Saved:", outBase);
