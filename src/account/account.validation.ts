import { z, ZodType } from 'zod';

export class AccountValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
    level_id: z.number().positive(),
  });

  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
  });

  static readonly UPDATE: ZodType = z.object({
    username: z.string().min(1).max(100).optional(),
    password: z.string().min(1).max(100).optional(),
    level_id: z.number().positive(),
  });
}
