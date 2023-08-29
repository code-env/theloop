import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(10, "Username needs to be more than 10 characters"),
  email: z.string().email(),
});

export const goalSchema = z.object({
  title: z.string(),
  name: z.string(),
});

export type typeGoalSchema = z.infer<typeof goalSchema>;

export type tFormSchema = z.infer<typeof formSchema>;

export type goalTypeVariant =
  | "Personal Goals"
  | "Accelerator Goals"
  | "Performance";
