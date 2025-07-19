import { z, ZodType } from 'zod';

export class ItemValidation {
  static readonly CREATE: ZodType = z.object({
    code: z.string().min(1).max(100),
    name: z.string().min(1).max(100),
    stock: z.number().positive(),
    category_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    code: z.string().max(100).optional(),
    name: z.string().max(100).optional(),
    stock: z.number().positive().optional(),
    category_id: z.number().positive().optional(),
  });

}
