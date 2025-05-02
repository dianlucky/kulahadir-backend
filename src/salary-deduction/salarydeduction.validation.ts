import { z, ZodType } from 'zod';

export class SalaryDeductionValidation {
  static readonly CREATE: ZodType = z.object({
    amount: z.number().min(1).positive(),
    date: z.string().min(1),
    employee_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    amount: z.number(),
  });
}
