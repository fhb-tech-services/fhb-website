import type { ProcessStepData } from "@/lib/data";

export default function ProcessStep({
  step,
  isLast = false,
}: {
  step: ProcessStepData;
  isLast?: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-display text-3xl font-bold text-navy-100">
          {step.number}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-navy-950">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
      </div>
      {!isLast && (
        <div
          className="absolute right-[-1.25rem] top-6 hidden h-px w-8 bg-navy-200 lg:block"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
