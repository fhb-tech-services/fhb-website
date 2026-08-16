import { MapPin, Globe2 } from "lucide-react";
import { contactConfig } from "@/lib/constants";

export default function LocationSection() {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none">
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
            <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
            Canada-Based. North America Focused.
          </span>
          <h2 id="location-heading" className="text-xl font-semibold text-navy-950 dark:text-white">
            Where We&rsquo;re Located
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted dark:text-navy-300">
            FHB Tech Services Inc. is based in Canada and works with clients
            across Canada and the United States, collaborating remotely with
            teams throughout North America.
          </p>
          {contactConfig.addressLine ? (
            <p className="flex items-start gap-2 text-sm text-navy-950 dark:text-navy-100">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              {contactConfig.addressLine}
            </p>
          ) : (
            <p className="flex items-start gap-2 text-sm text-ink-muted dark:text-navy-300">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              {contactConfig.region}
            </p>
          )}
        </div>

        <div className="relative min-h-[240px] bg-navy-950">
          {contactConfig.mapEmbedUrl ? (
            <iframe
              title="FHB Tech Services Inc. location map"
              src={contactConfig.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-grid p-8 text-center">
              <MapPin className="h-8 w-8 text-teal-400" aria-hidden="true" />
              <p className="max-w-[220px] text-sm text-navy-300">
                Map will display here once a business address is configured.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
