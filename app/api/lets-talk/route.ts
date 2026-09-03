// Receives the Let's Talk questionnaire and emails it to the hosts.
//
// Until now the form validated what a guest typed, showed them a thank-you
// screen, and threw the message away -- the only contact route on the site
// silently lost every enquiry.
//
// Delivery is a plain fetch to Resend's REST API rather than an SDK: the
// project deliberately depends on nothing but next, react and react-dom, and
// this needs one HTTP POST.
//
// Configuration (set these on the host, not in the repo):
//
//   RESEND_API_KEY        from resend.com
//   LETS_TALK_TO          who receives enquiries; comma-separated for both
//                         hosts, e.g. "bjorn@…,mathieu@…"
//   LETS_TALK_FROM        a verified sender on your domain,
//                         e.g. "REFUGE61 <hello@refuge61.com>"
//
// If they are absent the route does NOT pretend to have sent anything: it
// answers 503 so the form can tell the guest to write directly, and it writes
// the whole enquiry to the server log first, so a message is recoverable from
// the hosting logs rather than lost.

import { NextResponse } from "next/server";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  country?: string;
  age?: string;
  week?: string;
  comingWith?: string;
  attracts?: string;
  days?: string[];
  active?: string;
  sharing?: string;
  anythingElse?: string;
  consent?: boolean;
};

/** The fields the form itself marks with an asterisk, plus consent. */
const REQUIRED: (keyof Payload)[] = [
  "firstName",
  "lastName",
  "email",
  "country",
  "attracts",
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function textOf(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "yes" : "no";
  return typeof value === "string" ? value.trim() : "";
}

const LABELS: [keyof Payload, string][] = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone / WhatsApp"],
  ["country", "Country"],
  ["age", "Age"],
  ["week", "Preferred week"],
  ["comingWith", "Coming with"],
  ["attracts", "What attracts them"],
  ["days", "How they imagine their days"],
  ["active", "How active"],
  ["sharing", "Room sharing"],
  ["anythingElse", "Anything else"],
];

function asText(data: Payload): string {
  const lines = LABELS.map(([key, label]) => {
    const value = textOf(data[key]);
    return `${label}: ${value || "—"}`;
  });
  return lines.join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function asHtml(data: Payload): string {
  const rows = LABELS.map(([key, label]) => {
    const value = escapeHtml(textOf(data[key])) || "&mdash;";
    return (
      `<tr>` +
      `<td style="padding:6px 16px 6px 0;vertical-align:top;color:#6b6a63;` +
      `font:12px/1.5 system-ui,sans-serif;white-space:nowrap">${label}</td>` +
      `<td style="padding:6px 0;vertical-align:top;color:#1e1e1c;` +
      `font:14px/1.6 system-ui,sans-serif">${value}</td>` +
      `</tr>`
    );
  }).join("");
  return (
    `<div style="background:#f7f5f1;padding:24px">` +
    `<h1 style="font:600 18px/1.3 Georgia,serif;color:#2c3b2e;margin:0 0 16px">` +
    `New REFUGE61 enquiry</h1>` +
    `<table style="border-collapse:collapse">${rows}</table>` +
    `</div>`
  );
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const missing = REQUIRED.filter((k) => !textOf(data[k]));
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "missing_fields", fields: missing },
      { status: 422 },
    );
  }
  if (!EMAIL.test(textOf(data.email))) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 422 },
    );
  }
  if (data.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "consent_required" },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.LETS_TALK_TO || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.LETS_TALK_FROM;

  const name = `${textOf(data.firstName)} ${textOf(data.lastName)}`.trim();

  if (!apiKey || to.length === 0 || !from) {
    // Log before refusing, so the enquiry survives in the hosting logs even
    // though it could not be delivered.
    console.error(
      "[lets-talk] email is not configured; enquiry NOT delivered:\n" +
        asText(data),
    );
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: textOf(data.email),
        subject: `REFUGE61 enquiry — ${name}`,
        text: asText(data),
        html: asHtml(data),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(
        `[lets-talk] Resend returned ${response.status}: ${detail}\n` +
          `enquiry NOT delivered:\n${asText(data)}`,
      );
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error(
      `[lets-talk] could not reach the email service: ${String(error)}\n` +
        `enquiry NOT delivered:\n${asText(data)}`,
    );
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
