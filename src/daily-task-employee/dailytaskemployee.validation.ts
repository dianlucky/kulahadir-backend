import { z, ZodType } from 'zod';

export class DailyTaskEmployeeValidation {
  static readonly CREATE: ZodType = z.object({
    day: z.string().min(1).max(100),
    task_id: z.number().positive(),
    employee_id: z.number().positive(),
  });
  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    day: z.string().min(1).max(100).optional(),
    task_id: z.number().positive().optional(),
    employee_id: z.number().positive().optional(),
  });
}
