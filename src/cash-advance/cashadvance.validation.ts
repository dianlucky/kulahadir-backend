import { z, ZodType } from 'zod';

export class CashAdvanceValidation {
  static readonly CREATE: ZodType = z.object({
    employee_id: z.number().positive(),
    date: z.string(),
    amount: z.number().positive(),
    reason: z.string().optional(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    employee_id: z.number().positive().optional(),
    amount: z.number().positive().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
  });
}
