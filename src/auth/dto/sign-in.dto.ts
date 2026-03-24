import z from 'zod';

export const signinSchema = z
  .object({
    username: z.string(),
    password: z.string(),
  })
  .required();

export type SigninDTO = z.infer<typeof signinSchema>;
