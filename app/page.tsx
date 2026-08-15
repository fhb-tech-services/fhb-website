import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import WhyFHB from "@/components/WhyFHB";
import TechnologyCard from "@/components/TechnologyCard";
import ProcessStep from "@/components/ProcessStep";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { services, techStack, processSteps, industries } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = pageMetadata({
  title: "FHB Tech Services Inc. | Technology Consulting & Software Development",
  description:
    "FHB Tech Services Inc. is a Canada-based technology consulting and software development company. We build web, mobile, and cloud applications, and help businesses across Canada and North America modernize their software.",
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
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 sm:inline-flex"
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
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 sm:hidden"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <WhyFHB />

      {/* Technology expertise */}
      <section className="bg-navy-950 py-20 sm:py-24" aria-labelledby="tech-heading">
        <div className="container-fhb">
          <SectionHeading
            id="tech-heading"
            eyebrow="Technology Expertise"
            title="Technologies We Work With"
            description="A focused, modern toolset — chosen for reliability and long-term maintainability rather than novelty."
            light
          />
          <FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {techStack.map((category) => (
                <TechnologyCard key={category.category} category={category} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

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

      {/* Industries */}
      <section className="bg-navy-50/60 py-20 sm:py-24" aria-labelledby="industries-heading">
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
