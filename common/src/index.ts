import z from "zod";

export const singupInput = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const singinInput = z.object({
  username: z.string(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type SingupInput = z.infer<typeof singupInput>;
export type SinginInput = z.infer<typeof singinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
