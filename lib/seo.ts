import type { Metadata } from "next";
import { siteConfig } from "./constants";

type PageSeoInput = {
  /** Page-specific title. Wrapped by the root template ("%s | FHB Tech Services Inc.") unless `absolute` is set. */
  title: string;
  /** ~150-160 characters, written for humans first. */
  description: string;
  /** Route path starting with "/", e.g. "/about". */
  path: string;
  /** Bypasses the title template — use only for the homepage. */
  absolute?: boolean;
};

/**
 * Builds consistent per-page metadata: canonical URL, Open Graph, and
 * Twitter/X card data. Every page should use this instead of hand-rolling
 * its own `openGraph`/`twitter` blocks, so social previews always reflect
 * the actual page rather than inheriting the homepage's.
 */
export function pageMetadata({ title, description, path, absolute }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
