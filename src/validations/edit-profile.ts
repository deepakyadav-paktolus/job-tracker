import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  bio: z.string().max(160, "Bio must be under 160 characters").optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;