import { contactConfig, siteConfig } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How FHB Tech Services Inc. collects, uses, and protects personal information submitted through this website.",
  path: "/privacy-policy",
});

const lastUpdated = "August 15, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-fhb max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy-950">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: {lastUpdated}</p>

        <div className="prose-fhb mt-10 flex flex-col gap-8 text-base leading-relaxed text-ink-muted">
          <p>
            FHB Tech Services Inc. (&ldquo;FHB,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and
            is committed to protecting the personal information you share
            with us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard information when you visit our website or
            contact us regarding our services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Information We Collect</h2>
            <p className="mt-3">
              We may collect personal information that you voluntarily
              provide to us, such as your name, email address, phone number,
              company name, and the details of your inquiry when you submit
              our contact form. We may also collect limited technical
              information automatically, such as browser type and general
              usage data, to help us understand how our website is used.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and communicate with prospective and current clients</li>
              <li>Provide, operate, and improve our services</li>
              <li>Maintain the security and functionality of our website</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">How We Share Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share
              information with trusted service providers who assist us in
              operating our website or delivering our services (for example,
              email delivery or hosting providers), and only to the extent
              necessary for them to perform those services on our behalf. We
              may also disclose information if required to do so by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Data Retention</h2>
            <p className="mt-3">
              We retain personal information only for as long as necessary to
              fulfill the purposes described in this policy, or as required
              by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Your Rights</h2>
            <p className="mt-3">
              Depending on your jurisdiction, you may have the right to
              access, correct, or request deletion of your personal
              information. To make such a request, please contact us using
              the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Security</h2>
            <p className="mt-3">
              We take reasonable technical and organizational measures to
              protect the personal information we collect. However, no method
              of transmission or storage over the internet is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated
              &ldquo;last updated&rdquo; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy-950">Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact
              us{contactConfig.email ? (
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
              {" "}or visit{" "}
              <a href="/contact" className="font-medium text-teal-700">
                {siteConfig.name}&rsquo;s contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
