import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhyFHB from "@/components/WhyFHB";
import ProcessStep from "@/components/ProcessStep";
import IndustryCard from "@/components/IndustryCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { services, processSteps, industries } from "@/lib/data";
import { projects } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = pageMetadata({
  title: "FHB Tech Services Inc. | Software Consulting & Mobile Application Development",
  description:
    "FHB Tech Services provides software consulting, mobile application development, iOS, Android, React Native solutions, and technology services across Canada and North America.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <section className="py-20 sm:py-24" aria-labelledby="services-heading">
        <div className="container-fhb">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="services-heading"
              eyebrow="What We Do"
              title="Services Built for Real Business Needs"
              description="From strategy to long-term support, we help businesses plan, build, and maintain reliable software."
            />
            <Link
              href="/services"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200 sm:inline-flex"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </FadeIn>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200 sm:hidden"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <WhyFHB />

      {/* How we work */}
      <section className="py-20 sm:py-24" aria-labelledby="process-heading">
        <div className="container-fhb">
          <SectionHeading
            id="process-heading"
            eyebrow="How We Work"
            title="A Clear, Structured Process"
            description="Every engagement follows the same disciplined approach, whether it's a short project or an ongoing partnership."
          />
          <FadeIn>
            <div className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.number} step={step} isLast={index === processSteps.length - 1} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 sm:py-24" aria-labelledby="portfolio-heading">
        <div className="container-fhb">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="portfolio-heading"
              eyebrow="Our Work"
              title="Case Studies & Delivered Projects"
              description="A look at how we've helped businesses build, modernize, and integrate the software that runs their operations."
            />
            <Link
              href="/portfolio"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200 sm:inline-flex"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </FadeIn>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200 sm:hidden"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-navy-50/60 py-20 sm:py-24 dark:bg-navy-900/30" aria-labelledby="industries-heading">
        <div className="container-fhb">
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries"
            title="Technology Solutions for a Variety of Business Needs"
            description="We work with organizations across a range of industries, adapting our approach to each business's specific requirements."
            align="center"
          />
          <FadeIn>
            <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <IndustryCard key={industry.name} industry={industry} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection secondaryLabel="Explore Services" secondaryHref="/services" />
    </>
  );
}
