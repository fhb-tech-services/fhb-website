import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "Ready to Start a Conversation?",
  description = "Tell us about your project or technical challenge. We'll respond promptly and discuss how we can help.",
  primaryLabel = "Let's Work Together",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-navy-950">
      <div className="container-fhb flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-balance max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
          {description}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
