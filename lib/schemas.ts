import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(10, "Tell us a bit more about the project"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;