import { z, ZodType } from 'zod';

export class TaskEmployeeValidation {
  static readonly CREATE: ZodType = z.object({
    day: z.string().min(1).max(20),
    employee_id: z.number().positive(),
    task_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    day: z.string().max(20).optional(),
    employee_id: z.number().positive().optional(),
    task_id: z.number().positive().optional(),
  });
}
