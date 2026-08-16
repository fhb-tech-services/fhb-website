import type { Industry } from "@/lib/data";

export default function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-5 py-4 transition-colors hover:border-teal-200 hover:bg-teal-50/40 dark:border-navy-800 dark:bg-navy-900/60 dark:hover:border-teal-700 dark:hover:bg-teal-500/10">
      <Icon className="h-5 w-5 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden="true" />
      <span className="text-sm font-medium text-navy-950 dark:text-white">{industry.name}</span>
    </div>
  );
}
