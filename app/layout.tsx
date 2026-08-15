import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

// Self-hosted variable fonts, vendored under app/fonts/ (sourced from the
// @fontsource-variable packages). Using next/font/local — rather than a
// plain CSS @import — gets automatic fallback-font metric matching, which
// reduces layout shift while the font loads, on top of font-display: swap
// and zero third-party network requests.
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Technology Consulting & Software Development`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "FHB Tech Services Inc. provides technology consulting, software development, mobile, web, cloud, modernization, and AI solutions to businesses across Canada and North America.",
  keywords: [
    "technology consulting Canada",
    "software development Canada",
    "software consulting Canada",
    "iOS development Canada",
    "mobile app development Canada",
    "web application development Canada",
    "technology consulting North America",
    "software development consulting",
    "software modernization",
    "technical consulting",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Technology Consulting & Software Development`,
    description:
      "Technology consulting and software development for businesses across Canada and North America.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Technology Consulting & Software Development`,
    description:
      "Technology consulting and software development for businesses across Canada and North America.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.locale} className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          // Escape "<" so a stray "</script>" inside any env-sourced value
          // (business name, address, etc.) can't break out of this tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
