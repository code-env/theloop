import { z } from "zod";

export const formSchema = z.object({
  username: z.string(),
  email: z.string().email(),
});

export type tFormSchema = z.infer<typeof formSchema>;
