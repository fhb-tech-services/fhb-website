import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white transition-colors duration-300 group-hover:bg-teal-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-navy-950">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {service.summary}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
      >
        Learn more
        <span className="sr-only"> about {service.title}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
