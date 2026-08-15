"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues, contactFormDefaults } from "@/lib/validation";
import { serviceInterestOptions } from "@/lib/data";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;
type SubmitState = "idle" | "submitting" | "success" | "error";

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
        className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-teal-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-navy-950">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
          Thank you for reaching out. We&rsquo;ve received your message and will
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitState("idle")}
          className="mt-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
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
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
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
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={inputClass(Boolean(errors.company))}
          />
        </Field>
      </div>

      <Field label="Service Interested In" htmlFor="serviceInterest" required error={errors.serviceInterest}>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={values.serviceInterest}
          onChange={(e) => updateField("serviceInterest", e.target.value as ContactFormValues["serviceInterest"])}
          aria-invalid={Boolean(errors.serviceInterest)}
          aria-describedby={errors.serviceInterest ? "serviceInterest-error" : undefined}
          className={inputClass(Boolean(errors.serviceInterest))}
        >
          {serviceInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
          className={inputClass(Boolean(errors.message))}
          placeholder="Tell us a bit about your project, goals, or technical challenge."
        />
      </Field>

      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitState === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {submitState === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-ink-muted">
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
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-950">
        {label} {required && <span className="text-teal-700">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy-950 shadow-sm transition-colors placeholder:text-navy-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
    hasError ? "border-red-400" : "border-navy-200"
  }`;
}
