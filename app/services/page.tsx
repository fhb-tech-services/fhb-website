import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Mobile application development (iOS, Android, React Native), software consulting, application integration, and engineering support for businesses across Canada and North America.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/60 py-20 sm:py-24 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-fhb">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm dark:bg-navy-900 dark:text-teal-300 dark:shadow-none">
            Our Services
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-5xl">
            Technology Services Built for Real Business Outcomes
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted dark:text-navy-300">
            Whether you need a single project delivered or an ongoing
            technical partner, we offer a focused set of services designed
            to help your business build and maintain reliable software.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-label="Service details">
        <div className="container-fhb flex flex-col gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-8 rounded-2xl border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-10"
              >
                <div className={`flex flex-col gap-4 lg:w-56 ${isEven ? "lg:order-2" : ""}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-white dark:bg-white dark:text-navy-950">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-navy-950 dark:text-white">
                    {service.title}
                  </h2>
                </div>

                <div className={isEven ? "lg:order-1" : ""}>
                  <p className="text-base leading-relaxed text-ink-muted dark:text-navy-300">
                    {service.description}
                  </p>

                  {service.subsections && (
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {service.subsections.map((subsection) => (
                        <div
                          key={subsection.title}
                          className="rounded-xl border border-navy-100 bg-navy-50/60 p-5 dark:border-navy-800 dark:bg-navy-900/40"
                        >
                          <h3 className="text-sm font-semibold text-navy-950 dark:text-white">
                            {subsection.title}
                          </h3>
                          <ul className="mt-3 flex flex-col gap-2">
                            {subsection.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-navy-900 dark:text-navy-200"
                              >
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    {service.subsections && (
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950 dark:text-white">
                        Additional Capabilities
                      </h3>
                    )}
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-sm text-navy-900 dark:text-navy-200">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 dark:bg-navy-900/30">
        <div className="container-fhb">
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="Let's Talk About Your Specific Needs"
            description="Every business is different. If you're not sure which service fits, we're happy to help you figure it out."
            align="center"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
