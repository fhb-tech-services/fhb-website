import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

/**
 * Contact form submission endpoint.
 *
 * This route validates and rate-limits incoming submissions but does not
 * hardcode any email provider. To connect a real email/CRM integration:
 *
 *   1. Choose a provider (e.g. Resend, SendGrid, Postmark, or a CRM webhook).
 *   2. Add the provider's SDK/API call inside `deliverSubmission()` below.
 *   3. Store the provider's API key in an environment variable
 *      (e.g. `EMAIL_PROVIDER_API_KEY`) — never hardcode it here.
 *
 * The in-memory rate limiter below is a simple first line of defense
 * against spam/abuse. It resets whenever the server process restarts, so
 * for production traffic at scale, replace it with a durable store
 * (e.g. Upstash Redis, Vercel KV) keyed by IP address.
 */

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const submissionLog = new Map<string, number[]>();

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(identifier) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionLog.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  submissionLog.set(identifier, timestamps);
  return false;
}

async function deliverSubmission(data: unknown) {
  // TODO: Integrate an email provider or CRM here.
  // Example (Resend):
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.EMAIL_PROVIDER_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: process.env.CONTACT_FROM_EMAIL,
  //     to: process.env.CONTACT_TO_EMAIL,
  //     subject: "New inquiry from fhbtechservices.com",
  //     text: JSON.stringify(data, null, 2),
  //   }),
  // });

  if (process.env.NODE_ENV !== "production") {
    console.info("[contact] New submission received:", data);
  }
}

export async function POST(request: Request) {
  const identifier =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the form for errors.", issues: result.error.issues },
      { status: 422 }
    );
  }

  // Honeypot: if filled, silently accept without delivering (bot traffic).
  if (result.data.website) {
    return NextResponse.json({ message: "Received." }, { status: 200 });
  }

  try {
    await deliverSubmission(result.data);
  } catch {
    return NextResponse.json(
      { message: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Message received." }, { status: 200 });
}
