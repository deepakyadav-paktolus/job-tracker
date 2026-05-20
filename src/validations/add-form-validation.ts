import { z } from "zod";

export const addFormValidation = z.object({
  companyName: z
    .string()
    .min(3, "Company name must be at least 3 characters long"),

  jobTitle: z
    .string()
    .min(3, "Job title must be at least 3 characters long"),

  role: z
    .string()
    .min(3, "Role must be at least 3 characters long"),

  status: z.enum([
    "Applied",
    "Interview",
    "Rejected",
    "Ghosted",
    "Offered",
  ]),

  appliedDate: z.date({
    error: "Applied date is required",
  }),

  location: z
    .string()
    .min(3, "Location must be at least 3 characters long"),

  salary: z.string().optional(),

  link: z
    .string()
    .url("Enter a valid URL")
    .optional()
    .or(z.literal("")),

  notes: z.string().optional(),

  mode: z.enum(["OnSite", "Remote", "Hybrid"]).optional(),
});

export type AddFormValidation = z.infer<typeof addFormValidation>;