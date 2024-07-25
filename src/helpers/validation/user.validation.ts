import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role_id: z.number().int(),
});

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  role_id: z.number().int().optional(),
});

export { createUserSchema, updateUserSchema };