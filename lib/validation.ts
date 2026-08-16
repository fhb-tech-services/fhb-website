import { z } from "zod";
import { projectTypeOptions } from "./data";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(160, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypeOptions, {
    message: "Please select a project type.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please provide a few details about your project (at least 20 characters).")
    .max(5000, "Message is too long."),
  // Honeypot field — left empty by real users, often filled by bots.
  // Intentionally unconstrained here so a filled honeypot doesn't surface a
  // validation error (which would tip off bots); the API route checks this
  // value after successful validation and silently drops the submission.
  website: z.string().max(200).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Software Consulting",
  message: "",
  website: "",
};
