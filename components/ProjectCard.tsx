import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/portfolio";

/** Compact teaser card — mirrors ServiceCard's role on the homepage. */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none">
      <span className="inline-flex w-fit items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
        {project.industry}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-950 dark:text-white">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted dark:text-navy-300">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-navy-100 bg-navy-50/60 px-2 py-1 text-xs font-medium text-navy-700 dark:border-navy-800 dark:bg-navy-900 dark:text-navy-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/portfolio#${project.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
      >
        View case study
        <span className="sr-only"> for {project.name}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
