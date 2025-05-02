import { z, ZodType } from 'zod';

export class EmployeeLoanValidation {
  static readonly CREATE: ZodType = z.object({
    amount: z.number().positive(),
    date: z.string().min(1),
    status: z.string().min(1).max(100),
    employee_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    status: z.string().min(1),
  });
}
