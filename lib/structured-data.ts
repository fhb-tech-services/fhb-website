import { siteConfig, contactConfig } from "./constants";
import { services } from "./data";

/**
 * Organization / local business structured data (schema.org JSON-LD),
 * rendered once in the root layout so it applies site-wide.
 *
 * Uses `ProfessionalService` — a subtype of both `Organization` and
 * `LocalBusiness` — which fits a technology consulting firm better than a
 * generic storefront `LocalBusiness` type. Fields are only included when a
 * real value is configured (see lib/constants.ts), so nothing invented
 * shows up in search results.
 */
export function organizationJsonLd() {
  const hasAddress = Boolean(contactConfig.city && contactConfig.province);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.tagline,
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        addressLocality: contactConfig.city,
        addressRegion: contactConfig.province,
        addressCountry: contactConfig.country,
      },
    }),
    ...(contactConfig.email && { email: contactConfig.email }),
    ...(contactConfig.phone && { telephone: contactConfig.phone }),
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Consulting & Software Development Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        url: `${siteConfig.url}/services#${service.slug}`,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
        },
      })),
    },
  };
}
