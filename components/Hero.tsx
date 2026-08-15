import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { contactConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
          filter: "invert(1)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-teal-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-navy-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-fhb relative flex flex-col gap-10 py-24 sm:py-28 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        <div className="flex-1">
          {/* The badge, headline, and intro paragraph render immediately
              (no JS-driven fade-in): on narrow viewports the wrapped
              paragraph is often the page's Largest Contentful Paint
              element, and animating opacity from 0 delays LCP until after
              hydration runs. Motion is kept for elements further down. */}
          <span className="inline-flex items-center rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
            Canada-Based Technology Consulting
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technology Solutions Built Around Your Business
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-navy-200">
            We work with startups, growing businesses, and enterprise teams
            across Canada and the United States — designing, building,
            modernizing, and scaling software that holds up over time.
          </p>
          <FadeIn delay={0.16}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-400"
              >
                Let&rsquo;s Work Together
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 flex items-center gap-1.5 text-xs text-navy-400">
              <MapPin className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
              Based in {contactConfig.region}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="flex-1">
          <HeroGraphic />
        </FadeIn>
      </div>
    </section>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-label="Abstract illustration representing connected technology systems"
      >
        <circle cx="200" cy="200" r="150" stroke="#28456a" strokeWidth="1" opacity="0.5" />
        <circle cx="200" cy="200" r="110" stroke="#28456a" strokeWidth="1" opacity="0.4" />
        <circle cx="200" cy="200" r="70" stroke="#187a71" strokeWidth="1.5" opacity="0.6" />

        <g opacity="0.9">
          <rect x="168" y="168" width="64" height="64" rx="14" fill="#101826" stroke="#3fb6a5" strokeWidth="1.5" />
          <rect x="184" y="184" width="32" height="32" rx="6" fill="#23988a" />
        </g>

        {[
          [200, 50],
          [350, 200],
          [200, 350],
          [50, 200],
          [305, 95],
          [305, 305],
          [95, 305],
          [95, 95],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={i % 2 === 0 ? 6 : 4}
            fill={i % 3 === 0 ? "#3fb6a5" : "#5c7ba3"}
          />
        ))}

        <line x1="200" y1="200" x2="200" y2="50" stroke="#28456a" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="200" x2="350" y2="200" stroke="#28456a" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="200" x2="200" y2="350" stroke="#28456a" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="200" x2="50" y2="200" stroke="#28456a" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}
