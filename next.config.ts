import type { NextConfig } from "next";
import path from "node:path";

const isDev = process.env.NODE_ENV !== "production";

// Conservative Content-Security-Policy: allows same-origin assets, the
// inline JSON-LD/hydration scripts Next.js itself relies on, and the
// Google Maps embed used on the Contact page. Tighten `script-src`/
// `style-src` to a nonce-based policy (via middleware) if that inline
// usage is ever removed.
//
// `'unsafe-eval'` is added to `script-src` in development only — React's
// dev-mode Fast Refresh and Turbopack's HMR runtime rely on eval() for
// debugging (stack trace reconstruction, module re-execution). It is never
// needed (or included) in the production build.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "frame-src https://www.google.com https://maps.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  // Pin the workspace root to this project directory. Without this,
  // Turbopack walks up the filesystem looking for a lockfile/git root and
  // can pick the wrong one if an unrelated package-lock.json or .git
  // happens to exist further up the tree (e.g. in a parent folder on a
  // developer's machine), which otherwise prints a misleading
  // "ignored package-lock.json ... outside the current Git repository"
  // warning.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Tree-shake named imports from these packages more aggressively so
  // unused icons/animation helpers don't bloat the client bundle.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
