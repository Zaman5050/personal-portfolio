import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/data/site";

/**
 * Sends contact-form messages via Resend (https://resend.com).
 * Set RESEND_API_KEY in Vercel → Project → Settings → Environment Variables.
 * Without it, the API returns 503 and the form falls back to opening the visitor's email app.
 */
export async function POST(req: Request) {
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Email service not configured" }, { status: 503 });

  const { name, email, subject, message } = parsed.data;
  const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? site.email,
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `<p><b>From:</b> ${esc(name)} &lt;${esc(email)}&gt;</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
