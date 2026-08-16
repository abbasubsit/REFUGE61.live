import { chromium } from "playwright";

const url = process.argv[2];
const outPath = process.argv[3];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(800);
await page.getByRole("button", { name: /open menu/i }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: outPath });
await browser.close();
console.log("Saved:", outPath);
