import Link from "next/link";
import { siteConfig } from "@/lib/constants";

/**
 * Minimal, text-based logo treatment.
 *
 * Kept intentionally simple so it can be swapped for a real SVG mark later —
 * replace the contents of the mark `<span>` below with an inline `<svg>` or
 * `next/image` reference and the surrounding layout will not need to change.
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold tracking-tight ${
          isLight ? "bg-white text-navy-950" : "bg-navy-950 text-white"
        }`}
      >
        {siteConfig.shortName}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-bold tracking-tight ${
            isLight ? "text-white" : "text-navy-950"
          }`}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={`text-[11px] font-medium tracking-wide ${
            isLight ? "text-navy-200" : "text-ink-muted"
          }`}
        >
          Tech Services Inc.
        </span>
      </span>
      <span className="sr-only"> — Home</span>
    </Link>
  );
}
