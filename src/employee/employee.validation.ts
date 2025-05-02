import { z, ZodType } from 'zod';

export class EmployeeValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.string().min(1).max(100),
    birth_date: z.string(),
    phone: z.string().min(1).max(100),
    account_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    name: z.string().min(1).max(100).optional(),
    birth_date: z.string().optional(),
    phone: z.string().min(1).max(100).optional(),
    account_id: z.number().positive().optional(),
  });

  static readonly SEARCH: ZodType = z.object({
    name: z.string().max(100).optional(),
    birth_date: z.string().optional(),
    phone: z.string().max(100).optional(),
  });
}
