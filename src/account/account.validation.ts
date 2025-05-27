import { z, ZodType } from 'zod';

export class AccountValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
    level: z.string().min(1).max(20),
    status: z.string().min(1).max(50),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    username: z.string().min(1).max(100).optional(),
    password: z.string().max(100).optional(),
    level: z.string().max(20).optional(),
    status: z.string().max(50).optional(),
  });
}
