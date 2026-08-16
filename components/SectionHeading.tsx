import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.14em] ${
            light ? "text-teal-300" : "text-teal-700 dark:text-teal-300"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-balance text-base leading-relaxed sm:text-lg ${
            light ? "text-navy-200" : "text-ink-muted dark:text-navy-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
