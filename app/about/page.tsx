import Link from "next/link";
import { ShieldCheck, Target, Handshake, MapPin, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";
import { contactConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "FHB Tech Services Inc. is a Canada-based technology consulting and software development company. Learn about our approach to technical consulting, software modernization, and client-focused delivery for businesses across North America.",
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Technical Integrity",
    description:
      "We recommend solutions based on what genuinely fits the problem, not what's easiest to sell.",
  },
  {
    icon: Target,
    title: "Business Alignment",
    description:
      "Every technical decision is evaluated against the business outcome it's meant to support.",
  },
  {
    icon: Handshake,
    title: "Clear Communication",
    description:
      "We keep clients informed with straightforward updates, honest timelines, and no unnecessary jargon.",
  },
  {
    icon: Lightbulb,
    title: "Practical Craftsmanship",
    description:
      "We care about clean, maintainable engineering — code that's built to last, not just to ship.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/60 py-20 sm:py-24 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-fhb">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm dark:bg-navy-900 dark:text-teal-300 dark:shadow-none">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            About FHB Tech Services Inc.
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-5xl">
            A Canada-Based Technology Consulting Partner
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted dark:text-navy-300">
            FHB Tech Services Inc. is a technology consulting and software
            development company based in Canada. We work with organizations
            across Canada and North America to solve technology challenges
            and build reliable, well-engineered digital products.
          </p>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-20 sm:py-24">
        <div className="container-fhb grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
              Company Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-navy-300">
              We work with startups, small and medium-sized businesses, and
              enterprise organizations that need a capable technology partner
              — whether that means building something new, modernizing an
              existing system, or extending an in-house engineering team. Our
              approach centers on understanding the business problem first,
              then applying the right technical solution.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-navy-300">
              We take on individual projects as well as longer-term
              engagements, giving clients the flexibility to work with us in
              whatever way suits their needs — from a focused consulting
              assignment to ongoing development and support. See the full
              range of what we do on our{" "}
              <Link href="/services" className="font-medium text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200">
                services page
              </Link>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-navy-300">
              To help businesses make sound technology decisions and build
              software that holds up over time — through clear communication,
              disciplined engineering, and a genuine focus on the outcomes
              that matter to each client.
            </p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
              Client-Focused Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-navy-300">
              Every engagement starts with listening. We take the time to
              understand your goals, constraints, and existing systems before
              proposing a direction, and we stay involved through
              implementation to make sure the solution actually works for
              your business.{" "}
              <Link href="/contact" className="font-medium text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200">
                Get in touch
              </Link>{" "}
              to talk about your project.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50/60 py-20 sm:py-24 dark:bg-navy-900/30" aria-labelledby="values-heading">
        <div className="container-fhb">
          <SectionHeading
            id="values-heading"
            eyebrow="Our Values"
            title="What Guides Our Work"
            align="center"
          />
          <FadeIn>
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-navy-950 dark:text-white">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted dark:text-navy-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Canada / North America positioning */}
      <section className="py-20 sm:py-24">
        <div className="container-fhb">
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-100 bg-white p-8 text-center shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none sm:p-12">
            <MapPin className="mx-auto h-8 w-8 text-teal-700 dark:text-teal-300" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
              Canada-Based. North America Focused.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-navy-300">
              FHB Tech Services Inc. is based in {contactConfig.region} and
              works remotely with clients across Canada and the United
              States. This allows us to support businesses throughout North
              America while maintaining close, responsive collaboration with
              each client.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
