import { z, ZodType } from 'zod';

export class SalaryValidation {
  static readonly CREATE: ZodType = z.object({
    amount: z.number().positive().min(1),
    bonus: z.number(),
    salary_deduction: z.number(),
    date: z.string().transform((val) => new Date(val)),
    employee_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    amount: z.number().positive().min(1),
    bonus: z.number(),
    salary_deduction: z.number(),
    date: z.string().transform((val) => new Date(val)),
    employee_id: z.number().positive(),
  });
}
