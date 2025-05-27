import { date, z, ZodType } from 'zod';

export class DailyTaskEmployeeValidation {
  static readonly CREATE: ZodType = z.object({
    status: z.string().min(1).max(100).optional(),
    date: z.string().transform((val) => new Date(val)),
    task_employee_id: z.number().positive(),
  });
  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    status: z.string().max(100).optional(),
    task_employee_id: z.number().positive().optional(),
  });
}
