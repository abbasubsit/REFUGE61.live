import { chromium } from "playwright";
import fs from "fs";

const PAGES = [
  ["/", "HOMEPAGE"],
  ["/the-lodge", "THE LODGE"],
  ["/practical-information", "PRACTICAL INFORMATION"],
  ["/lets-talk", "LET'S TALK"],
  ["/terms", "TERMS & CONDITIONS OF TRAVEL"],
  ["/privacy-policy", "PRIVACY POLICY"],
];

const b = await chromium.launch();
const out = [];
let id = 0;
const rows = [];

out.push("# REFUGE61 — Website copy for translation");
out.push("");
out.push("Every piece of text visible on the website, in the order it appears.");
out.push("");
out.push("**How to use:** fill in the French and Danish columns. Leave the ID and");
out.push("English columns unchanged — they are used to place each translation back");
out.push("into the correct position on the site.");
out.push("");
out.push("Notes for the translator:");
out.push("- `REFUGE61°` always keeps the degree symbol.");
out.push("- Text in CAPITALS is displayed in capitals; translate normally, the site");
out.push("  applies the capitals itself.");
out.push("- Do not translate proper names: Bjørn Jacob Haugum, Mathieu Bonnier,");
out.push("  Vinstra, Oslo, Gardermoen, Dovre.");
out.push("");

for (const [path, title] of PAGES) {
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.emulateMedia({ reducedMotion: "reduce" });
  await p.goto("http://localhost:3000" + path, { waitUntil: "load" });
  await p.waitForTimeout(2500);
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 700) { await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(90); }
  await p.waitForTimeout(600);
  // Open every FAQ accordion — a closed <details> hides its answer text,
  // so without this the FAQ never reaches the translation document.
  await p.evaluate(() => document.querySelectorAll("details").forEach(d => d.open = true));
  await p.waitForTimeout(400);

  const items = await p.evaluate(() => {
    const res = [];
    const seen = new Set();
    const sel = "main h1, main h2, main h3, main p, main li, main label, main legend, main summary, main details > div, main button, main a";
    document.querySelectorAll(sel).forEach(el => {
      if (el.closest("nav") || el.closest("footer") || el.closest("header")) return;
      const t = (el.innerText || "").trim().replace(/\s+/g, " ");
      if (!t || t.length < 2) return;
      if (seen.has(t)) return;
      // skip parents whose text is just their children concatenated
      // <summary> holds its label in a child <span>, so exempt it from the
      // parent-dedup rule or the FAQ questions are dropped entirely.
      if (el.tagName !== "SUMMARY" && [...el.children].length &&
          [...el.children].some(c => (c.innerText||"").trim() === t)) return;
      seen.add(t);
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const hidden = el.classList.contains("sr-only") || r.width <= 1 || r.height <= 1 ||
                     cs.visibility === "hidden" || cs.clipPath !== "none";
      res.push({ tag: el.tagName.toLowerCase(), text: t, hidden });
    });
    return res;
  });

  out.push("");
  out.push("---");
  out.push("");
  out.push("## " + title + "  `" + path + "`");
  out.push("");
  out.push("| ID | Type | English | French | Danish |");
  out.push("|---|---|---|---|---|");
  for (const it of items) {
    id++;
    const key = "T" + String(id).padStart(3, "0");
    const type = { h1: "Page title", h2: "Heading", h3: "Sub-heading", p: "Text",
                   li: "List item", label: "Form label", legend: "Form question",
                   summary: "FAQ question", button: "Button", a: "Link" }[it.tag] || it.tag;
    const esc = it.text.replace(/\|/g, "\|");
    const label = it.hidden ? "(not visible — for screen readers)" : type;
    out.push(`| ${key} | ${label} | ${esc} |  |  |`);
    rows.push([key, title, type, it.text]);
  }
  await p.close();
}

// shared chrome
out.push("");
out.push("---");
out.push("");
out.push("## SHARED — navigation & footer (appears on every page)");
out.push("");
out.push("| ID | Type | English | French | Danish |");
out.push("|---|---|---|---|---|");
for (const t of ["Home","The Lodge","Practical Information","Let's Talk","Terms & Conditions"]) {
  id++;
  out.push(`| T${String(id).padStart(3,"0")} | Menu item | ${t} |  |  |`);
}

fs.writeFileSync("docs/_website-copy-EN.md", out.join("\n") + "\n", "utf8");
console.log("strings extracted:", id);
await b.close();
