import type { TechCategory } from "@/lib/data";

export default function TechnologyCard({ category }: { category: TechCategory }) {
  return (
    <div className="rounded-2xl border border-navy-800 bg-navy-900/60 p-6">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-300">
        {category.category}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-navy-700 bg-navy-950/50 px-3 py-1.5 text-sm text-navy-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
