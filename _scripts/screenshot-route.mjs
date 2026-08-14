import { chromium } from "playwright";
import path from "node:path";

// Usage: node screenshot-route.mjs <url> <outBase> [width] [height] [waitMsForVideo]
const url = process.argv[2];
const outBase = process.argv[3];
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 900);
const videoWaitMs = Number(process.argv[6] || 0);

const browser = await chromium.launch();

const consoleErrors = [];

const page = await browser.newPage({ viewport: { width, height } });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(1200);
await page.screenshot({ path: `${outBase}-reduced-motion.png` });
await page.close();

// Second pass: allow motion, so an autoplaying hero video actually plays.
// Looping video keeps the network "active" forever, so wait on "load" (DOM
// ready) plus a fixed delay instead of "networkidle" (which would time out).
const page2 = await browser.newPage({ viewport: { width, height } });
page2.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
await page2.goto(url, { waitUntil: "load" });
await page2.waitForTimeout(1200 + videoWaitMs);
await page2.screenshot({ path: `${outBase}-motion.png` });
await page2.close();

await browser.close();
console.log("Saved:", outBase, "console errors:", consoleErrors.length ? consoleErrors : "none");
