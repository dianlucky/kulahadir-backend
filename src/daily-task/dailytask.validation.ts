import { z, ZodType } from 'zod';

export class DailyTaskValidation {
  static readonly CREATE: ZodType = z.object({
    task_code: z.string().min(1).max(20),
    task_name: z.string().min(1),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    task_code: z.string().max(20).optional(),
    task_name: z.string().optional(),
  });
}
