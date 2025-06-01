import { z, ZodType } from 'zod';

export class SalaryValidation {
  static readonly CREATE: ZodType = z.object({
    bonus: z.number().optional(),
    salary_deduction: z.number().optional(),
    cash_advance: z.number().optional(),
    amount: z.number().optional(),
    note: z.string().optional(),
    employee_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    bonus: z.number().optional(),
    salary_deduction: z.number().optional(),
    cash_advance: z.number().optional(),
    note: z.string().optional(),
    employee_id: z.number().positive(),
  });
}
