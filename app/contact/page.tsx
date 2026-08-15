import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationSection from "@/components/LocationSection";
import FadeIn from "@/components/FadeIn";
import { contactConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact FHB Tech Services Inc., a Canada-based technology consulting and software development company, to discuss your project, technical consulting needs, or software modernization plans.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-navy-50/60 py-20 sm:py-24">
        <div className="container-fhb">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
            Contact Us
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold tracking-tight text-navy-950 sm:text-5xl">
            Let&rsquo;s Talk About Your Project
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-muted">
            Whether you&rsquo;re planning a new digital product, modernizing
            an existing system, or looking for additional technical
            expertise, we&rsquo;d be happy to discuss your requirements.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="get-in-touch-heading">
        <div className="container-fhb grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <FadeIn>
            <div className="flex flex-col gap-8">
              <div>
                <h2 id="get-in-touch-heading" className="text-xl font-semibold text-navy-950">Get in Touch</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Fill out the form and we&rsquo;ll respond as soon as
                  possible, typically within one to two business days. Not
                  sure which service fits your project? Browse our{" "}
                  <Link href="/services" className="font-medium text-teal-700 hover:text-teal-800">
                    technology consulting and development services
                  </Link>
                  , or read more{" "}
                  <Link href="/about" className="font-medium text-teal-700 hover:text-teal-800">
                    about FHB Tech Services
                  </Link>
                  .
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {contactConfig.email && (
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-950">Email</p>
                      <a
                        href={`mailto:${contactConfig.email}`}
                        className="text-sm text-ink-muted transition-colors hover:text-teal-700"
                      >
                        {contactConfig.email}
                      </a>
                    </div>
                  </li>
                )}
                {contactConfig.phone && (
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-950">Phone</p>
                      <a
                        href={`tel:${contactConfig.phone}`}
                        className="text-sm text-ink-muted transition-colors hover:text-teal-700"
                      >
                        {contactConfig.phone}
                      </a>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <Clock className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-950">Response Time</p>
                    <p className="text-sm text-ink-muted">
                      We typically respond within 1–2 business days.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20" aria-labelledby="location-heading">
        <div className="container-fhb">
          <LocationSection />
        </div>
      </section>
    </>
  );
}
