import { Check, Layers, Lightbulb, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Case studies from FHB Tech Services Inc. — mobile applications, software consulting, and system integration projects delivered for clients across Canada and North America.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/60 py-20 sm:py-24 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-fhb">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm dark:bg-navy-900 dark:text-teal-300 dark:shadow-none">
            Our Work
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-5xl">
            Case Studies &amp; Delivered Projects
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted dark:text-navy-300">
            A look at how we&rsquo;ve helped businesses build, modernize, and
            integrate the software that runs their operations.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-label="Case studies">
        <div className="container-fhb flex flex-col gap-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24 rounded-2xl border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                  {project.industry}
                </span>
                {project.placeholder && (
                  <span className="inline-flex items-center rounded-full border border-navy-200 px-2.5 py-1 text-xs font-medium text-ink-muted dark:border-navy-700 dark:text-navy-400">
                    Sample Case Study
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
                {project.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">{project.role}</p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-muted dark:text-navy-300">
                {project.description}
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy-950 dark:text-white">
                    <Layers className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                    Key Features
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-navy-900 dark:text-navy-200"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-navy-100 bg-navy-50/60 px-2.5 py-1 text-xs font-medium text-navy-700 dark:border-navy-800 dark:bg-navy-900 dark:text-navy-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-navy-100 bg-navy-50/60 p-5 dark:border-navy-800 dark:bg-navy-900/40">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-navy-950 dark:text-white">
                    <Lightbulb className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                    Challenge Solved
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-navy-300">
                    {project.challenges}
                  </p>
                </div>
                <div className="rounded-xl border border-teal-100 bg-teal-50/60 p-5 dark:border-teal-900 dark:bg-teal-500/10">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-navy-950 dark:text-white">
                    <TrendingUp className="h-4 w-4 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                    Business Impact
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-navy-300">
                    {project.businessImpact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 dark:bg-navy-900/30">
        <div className="container-fhb">
          <SectionHeading
            eyebrow="Have a Project in Mind?"
            title="Let's Build Something That Delivers Results"
            description="Tell us about your project — we're happy to talk through the details and how we can help."
            align="center"
          />
        </div>
      </section>

      <CTASection secondaryLabel="Explore Services" secondaryHref="/services" />
    </>
  );
}
