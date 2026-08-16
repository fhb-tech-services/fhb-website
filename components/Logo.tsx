import Link from "next/link";
import { siteConfig } from "@/lib/constants";

/**
 * Inline SVG wordmark — not an <img>/<Image> reference, so it can use the
 * site's actual loaded fonts (--font-display / --font-sans) via CSS
 * instead of falling back to a generic system font, and its fill colors
 * can respond to the `dark:` variant directly instead of needing two
 * swapped image files.
 *
 * `variant="light"` (the always-dark Footer) pins white/light fills
 * regardless of theme. The default ("auto", used in the Navbar) uses
 * `dark:` fill variants so the same mark works on both themes.
 */
export default function Logo({ variant = "auto" }: { variant?: "auto" | "light" }) {
  const isLight = variant === "light";
  const wordmarkFill = isLight ? "fill-white" : "fill-navy-950 dark:fill-white";
  const taglineFill = isLight ? "fill-navy-300" : "fill-ink-muted dark:fill-navy-400";
  const accentFill = isLight ? "fill-teal-400" : "fill-teal-600 dark:fill-teal-400";

  return (
    <Link href="/" className="flex items-center">
      <svg
        viewBox="-3 -3 128 56"
        className="h-8 w-auto sm:h-9"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="33"
          fontFamily="var(--font-display)"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-0.5"
          className={wordmarkFill}
        >
          fhb
        </text>
        <circle cx="61" cy="24" r="3.5" className={accentFill} />
        <rect x="0" y="43" width="16" height="2.5" rx="1.25" className={accentFill} />
        <text
          x="22"
          y="47.5"
          fontFamily="var(--font-sans)"
          fontWeight="600"
          fontSize="10"
          letterSpacing="1.6"
          className={taglineFill}
        >
          TECH SERVICES
        </text>
      </svg>
      <span className="sr-only">{siteConfig.name} — Home</span>
    </Link>
  );
}
