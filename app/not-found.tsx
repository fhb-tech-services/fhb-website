import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="font-display text-6xl font-bold text-navy-100 dark:text-navy-800">404</span>
      <h1 className="text-2xl font-bold tracking-tight text-navy-950 dark:text-white">Page Not Found</h1>
      <p className="max-w-sm text-sm leading-relaxed text-ink-muted dark:text-navy-300">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-navy-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-white dark:text-navy-950 dark:hover:bg-teal-300"
      >
        Back to Home
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
