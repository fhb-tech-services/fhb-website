# FHB Tech Services Inc. — Corporate Website

Production website for FHB Tech Services Inc., a Canada-based technology
consulting and software development company. Built with Next.js (App
Router), React, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

All environment-specific values (contact email/phone, business address, map
embed, email provider credentials) are read from environment variables —
see `.env.example` for the full list. None of these are hardcoded in the
source, and nothing sensitive is exposed to the browser: variables prefixed
`NEXT_PUBLIC_` are safe to expose (they're rendered in the UI), while
provider API keys are server-only and used exclusively inside
`app/api/contact/route.ts`.

## Connecting the Contact Form to a Real Backend

The contact form (`components/ContactForm.tsx`) posts to
`app/api/contact/route.ts`, which validates submissions with `zod` and
applies basic in-memory rate limiting. It does not send email yet — wire up
a provider (Resend, SendGrid, Postmark, or a CRM webhook) inside the
`deliverSubmission()` function in that file, and store the provider's API
key as `EMAIL_PROVIDER_API_KEY` (or similar) in your environment, never in
source code.

For production traffic at meaningful scale, replace the in-memory rate
limiter with a durable store (e.g. Upstash Redis, Vercel KV) keyed by IP.

## Project Structure

```
app/                    App Router routes
  page.tsx              Home
  about/                About
  services/              Services
  contact/               Contact
  privacy-policy/         Privacy Policy
  terms-of-service/       Terms of Service
  api/contact/route.ts   Contact form submission endpoint
  sitemap.ts, robots.ts  SEO
components/             Reusable UI components
lib/                    Site content, config, and validation schemas
```

## Replacing the Logo

`components/Logo.tsx` currently renders a minimal text-based "FHB" mark.
Swap in a real SVG logo by replacing the contents of that component — the
surrounding layout (Navbar, Footer) does not need to change.

## Deployment

The site builds with `npm run build` and can be deployed to any platform
that supports Next.js (Vercel, Netlify, a Node server, etc.). Set the
environment variables from `.env.example` in your hosting provider's
dashboard before going live.
