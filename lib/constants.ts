/**
 * Central site configuration.
 *
 * Values that vary between environments (contact details, business address,
 * analytics IDs, etc.) are read from environment variables so this file
 * never needs to change between deployments. See `.env.example` for the
 * full list of supported variables and their defaults.
 */

export const siteConfig = {
  name: "FHB Tech Services Inc.",
  shortName: "FHB",
  tagline: "Technology consulting and software development for businesses across Canada and North America.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.fhbtechservices.com",
  locale: "en-CA",
} as const;

/**
 * Contact details are intentionally sourced from environment variables
 * rather than hardcoded, so real business details can be supplied at
 * deploy time without touching source code.
 */
export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  // City/region level positioning only — no street address is published
  // until an official business address is provided.
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION || "Canada",
  addressLine: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  mapEmbedUrl: process.env.NEXT_PUBLIC_MAP_EMBED_URL || "",
  // Discrete city/province fields for structured data (schema.org PostalAddress).
  // Kept separate from `region` (the human-readable "City, Province" string
  // used in UI copy) so JSON-LD doesn't need to parse a display string.
  city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "",
  province: process.env.NEXT_PUBLIC_BUSINESS_PROVINCE || "",
  country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "CA",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
] as const;

export const primaryCta = {
  label: "Let's Work Together",
  href: "/contact",
} as const;
