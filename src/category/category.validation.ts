import { z, ZodType } from 'zod';

export class CategoryValidation {
  static readonly CREATE: ZodType = z.object({
    code: z.string().min(1).max(100),
    name: z.string().min(1),
  });

  static readonly UPDATE: ZodType = z.object({
    code: z.string().max(100).optional(),
    name: z.string().optional(),
  });
}
