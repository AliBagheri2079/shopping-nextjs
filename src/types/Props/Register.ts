import * as z from 'zod';

const Register = z.enum(['signup', 'login']);
export type RegisterType = z.infer<typeof Register>;

const DefaultSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
});

export const SignupSchema = DefaultSchema.extend({
  name: z.string().optional(),
  password: z
    .string()
    .regex(/[0-9]/, { message: 'number' })
    .regex(/[a-z]/, { message: 'lowercase letter' })
    .regex(/[A-Z]/, { message: 'uppercase letter' })
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, { message: 'special symbol' })
    .min(6, { message: 'at least 6 character(s)' })
    .max(15, { message: 'must contain at most 15 character(s)' }),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
});
export type SignupType = z.infer<typeof SignupSchema>;

export const LoginSchema = DefaultSchema.extend({
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});
export type LoginType = z.infer<typeof LoginSchema>;
