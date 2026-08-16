import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { differentiators } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

export default function WhyFHB() {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-24 dark:bg-navy-900/30" aria-labelledby="why-fhb-heading">
      <div className="container-fhb">
        <SectionHeading
          id="why-fhb-heading"
          eyebrow="Why Choose Us"
          title="Why Choose FHB Tech Services"
          description="We focus on doing the work well — clear communication, sound engineering, and solutions built for the long term."
        />

        <FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-navy-950 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-navy-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
        >
          More about our approach and values
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
