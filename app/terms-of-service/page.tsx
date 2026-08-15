import { contactConfig, siteConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of the FHB Tech Services Inc. website.",
  path: "/terms-of-service",
});

const lastUpdated = "August 15, 2026";

export default function TermsOfServicePage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-fhb max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy-950">Terms of Service</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: {lastUpdated}</p>

        <div className="prose-fhb mt-10 flex flex-col gap-8 text-base leading-relaxed text-ink-muted">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the {siteConfig.name} website. By accessing or using our website,
            you agree to be bound by these Terms. If you do not agree, please
            do not use our website.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Use of This Website</h2>
            <p className="mt-3">
              This website is provided for informational purposes to help you
              learn about FHB Tech Services Inc. and our services. You agree
              to use this website only for lawful purposes and in a manner
              that does not infringe the rights of, or restrict or inhibit
              the use of, this website by any third party.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including text, graphics, logos,
              and design elements, is the property of FHB Tech Services Inc.
              or its licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works from this content without our prior written
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">No Professional Advice</h2>
            <p className="mt-3">
              Information provided on this website is for general
              informational purposes only and does not constitute
              professional, technical, or legal advice. Any engagement for
              services will be governed by a separate agreement between FHB
              Tech Services Inc. and the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Contact Form Submissions</h2>
            <p className="mt-3">
              When you submit information through our contact form, you
              represent that the information provided is accurate and that
              you are authorized to submit it. We use submitted information
              solely to respond to your inquiry, in accordance with our
              Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, FHB Tech Services Inc.
              shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of this website.
              The website and its content are provided &ldquo;as is&rdquo;
              without warranties of any kind.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Third-Party Links</h2>
            <p className="mt-3">
              This website may contain links to third-party websites. We are
              not responsible for the content or practices of any linked
              third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of Canada and the
              applicable laws of the province in which FHB Tech Services Inc.
              operates, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of
              this website after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Contact Us</h2>
            <p className="mt-3">
              If you have questions about these Terms, please contact us
              {contactConfig.email ? (
                <>
                  {" "}
                  at{" "}
                  <a href={`mailto:${contactConfig.email}`} className="font-medium text-teal-700">
                    {contactConfig.email}
                  </a>
                </>
              ) : (
                " through our contact page"
              )}
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
