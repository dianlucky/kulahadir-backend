import { z, ZodType } from 'zod';

export class DailyTaskValidation {
  static readonly CREATE: ZodType = z.object({
    task: z.string().min(1),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    task: z.string().min(1),
  });
}
