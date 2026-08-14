import { chromium } from "playwright";
import path from "node:path";

const url = process.argv[2] || "http://localhost:3000";
const outPath = process.argv[3] || path.resolve("./_scripts/homepage-current.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
// The site's RevealOnScroll sections only fade in once observed by an
// IntersectionObserver, which never fires for content outside the
// viewport during a single-shot full-page screenshot. The component's
// own reduced-motion path renders everything visible immediately, so
// emulate that instead of trying to script a scroll-and-wait sequence.
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: outPath, fullPage: true });

// Also slice into viewport-height chunks so each section is legible
// individually (the full-page PNG gets downsized too much to read).
const { scrollHeight } = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
}));
const viewportHeight = 900;
const dir = path.dirname(outPath);
const base = path.basename(outPath, ".png");
let i = 0;
for (let y = 0; y < scrollHeight; y += viewportHeight) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(100);
  i += 1;
  await page.screenshot({
    path: path.join(dir, `${base}-part${String(i).padStart(2, "0")}.png`),
  });
}

await browser.close();
console.log("Saved:", outPath, "and", i, "part screenshots");
