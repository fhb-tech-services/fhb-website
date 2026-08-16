import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { contactConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-200">
      <div className="container-fhb grid gap-10 py-14 sm:py-16 md:grid-cols-3">
        <div className="flex flex-col gap-4 md:col-span-1">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-navy-300">
            Technology consulting and software development for businesses
            across Canada and North America.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h2>
          <ul className="mt-4 grid grid-flow-col grid-rows-4 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-navy-300 transition-colors hover:text-teal-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-300">
            {contactConfig.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="transition-colors hover:text-teal-300"
                >
                  {contactConfig.email}
                </a>
              </li>
            )}
            {contactConfig.phone && (
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="transition-colors hover:text-teal-300"
                >
                  {contactConfig.phone}
                </a>
              </li>
            )}
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              {contactConfig.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-fhb flex flex-col gap-2 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} FHB Tech Services Inc. All rights reserved.</p>
          <p>
            <span aria-hidden="true">🇨🇦</span> Based in Canada · Serving clients across North America
          </p>
        </div>
      </div>
    </footer>
  );
}
