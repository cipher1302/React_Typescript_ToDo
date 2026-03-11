import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(3, "It's too short name for task"),
  description: z
    .string()
    .min(5, "Write more about your task. This description is too short"),
});

export type FormInterface = z.infer<typeof FormSchema>;
