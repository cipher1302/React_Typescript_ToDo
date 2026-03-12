import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .min(3, "It's too short name for task")
    .max(50, "It's too long name for task"),
  description: z
    .string()
    .min(5, "Write more about your task. This description is too short")
    .max(100, "It's too long description for task"),

  image: z.any().nullable(),
});

export type FormInterface = z.infer<typeof FormSchema>;
