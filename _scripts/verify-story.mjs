import { chromium } from "playwright";
import { mkdirSync } from "fs";

const outDir = "_scripts/screenshots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const allErrors = [];

async function run(name, viewport, fn) {
  const page = await browser.newPage({ viewport });
  page.on("console", (msg) => {
    if (msg.type() === "error") allErrors.push(`[${name}] ${msg.text()}`);
  });
  page.on("pageerror", (err) => allErrors.push(`[${name}] pageerror: ${err.message}`));
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await fn(page);
  await page.close();
}

// Headings + landmarks + nav anchors
await run("structure", { width: 1440, height: 900 }, async (page) => {
  const headings = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h1, h2, h3")).map(
      (el) => `${el.tagName}${el.id ? `#${el.id}` : ""}: "${el.textContent?.trim()}"`
    )
  );
  console.log("[structure] headings:\n  " + headings.join("\n  "));

  const sections = await page.evaluate(() =>
    Array.from(document.querySelectorAll("section")).map((el) => el.id || "(no id)")
  );
  console.log("[structure] section order:", sections.join(" -> "));

  // Nav anchors: Philosophy, Experience, Gallery, Contact should all resolve
  for (const label of ["Philosophy", "Experience", "Gallery", "Contact"]) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.getByRole("link", { name: label }).click();
    await page.waitForTimeout(400);
    const y = await page.evaluate(() => window.scrollY);
    console.log(`[structure] nav "${label}" -> scrollY ${y}`);
  }
});

// Desktop screenshots of new/changed sections
await run("desktop", { width: 1440, height: 900 }, async (page) => {
  await page.locator("#philosophy").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/desktop-philosophy.png` });

  await page.locator("#experience").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/desktop-experience.png` });

  await page.locator("#together").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/desktop-together.png` });

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/desktop-gallery.png` });

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/desktop-contact.png` });

  const href = await page.getByRole("link", { name: "Start a conversation" }).getAttribute("href");
  console.log("[desktop] contact button href:", href);
});

// Mobile
await run("mobile", { width: 375, height: 812 }, async (page) => {
  await page.locator("#philosophy").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/mobile-philosophy.png` });

  await page.locator("#together").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/mobile-together.png` });

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/mobile-gallery.png` });

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/mobile-contact.png` });
});

// Tablet
await run("tablet", { width: 900, height: 1100 }, async (page) => {
  await page.locator("#together").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/tablet-together.png` });

  await page.locator("#gallery").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${outDir}/tablet-gallery.png` });
});

// Reduced motion
await run("reduced-motion", { width: 1440, height: 900 }, async (page) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "networkidle" });
  await page.locator("#together").scrollIntoViewIfNeeded();
  await page.waitForTimeout(50);
  const opacity = await page.evaluate(() => {
    const el = document.querySelector("#together h2")?.closest("div[style]");
    return el ? getComputedStyle(el).opacity : "not found";
  });
  console.log("[reduced-motion] Human Experience opacity immediately after scroll:", opacity);
});

// Video still works (unaffected by these changes, but confirm no regression)
await run("video", { width: 1440, height: 900 }, async (page) => {
  await page.locator("#film").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  const video = page.locator("video");
  const state = await video.evaluate((el) => ({ paused: el.paused, muted: el.muted })).catch(() => "no video element");
  console.log("[video] state after scroll:", JSON.stringify(state));
});

await browser.close();

console.log("\n--- Console/page errors collected ---");
console.log(allErrors.length === 0 ? "none" : allErrors.join("\n"));
