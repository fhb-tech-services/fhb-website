"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { contactFormSchema, type ContactFormValues, contactFormDefaults } from "@/lib/validation";
import { projectTypeOptions } from "@/lib/data";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;
type SubmitState = "idle" | "submitting" | "success" | "error";

/** Formats digits as a North American phone number, e.g. "+1 (123) 456-7890", as the user types. */
function formatPhoneNumber(value: string): string {
  // Strip the "+1" prefix as literal text before counting digits, so the "1"
  // in an already-formatted value (e.g. while backspacing) is never mistaken
  // for part of the number itself.
  const withoutPrefix = value.startsWith("+1") ? value.slice(2) : value;
  const digits = withoutPrefix.replace(/\D/g, "").slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `+1 (${digits}`;
  if (digits.length < 7) return `+1 (${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(contactFormDefaults);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      setValues(contactFormDefaults);
    } catch (err) {
      setSubmitState("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (submitState === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-12 text-center dark:border-teal-800 dark:bg-teal-500/10"
      >
        <CheckCircle2 className="h-10 w-10 text-teal-600 dark:text-teal-400" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-navy-950 dark:text-white">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-muted dark:text-navy-300">
          Thank you for reaching out. We&rsquo;ve received your message and will
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-2 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot field for basic bot protection — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+1 (123) 456-7890"
            value={values.phone}
            onChange={(e) => updateField("phone", formatPhoneNumber(e.target.value))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field label="Company" htmlFor="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={inputClass(Boolean(errors.company))}
          />
        </Field>
      </div>

      <Field label="Project Type" htmlFor="projectType" required error={errors.projectType}>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => updateField("projectType", e.target.value as ContactFormValues["projectType"])}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={`appearance-none pr-10 ${inputClass(Boolean(errors.projectType))}`}
          >
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400 dark:text-navy-500"
            aria-hidden="true"
          />
        </div>
      </Field>

      <Field label="Message" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`min-h-[120px] max-h-[360px] ${inputClass(Boolean(errors.message))}`}
          placeholder="Tell us a bit about your project, goals, or technical challenge."
        />
      </Field>

      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-500/10 dark:text-red-300"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-navy-950 dark:hover:bg-teal-300"
      >
        {submitState === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {submitState === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-ink-muted dark:text-navy-400">
        Fields marked with * are required. By submitting this form, you agree
        to be contacted about your inquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-950 dark:text-white">
        {label} {required && <span className="text-teal-700 dark:text-teal-300">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy-950 shadow-sm transition-colors placeholder:text-navy-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:bg-navy-900 dark:text-white dark:placeholder:text-navy-500 ${
    hasError ? "border-red-400 dark:border-red-700" : "border-navy-200 dark:border-navy-700"
  }`;
}
