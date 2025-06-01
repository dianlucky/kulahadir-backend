import { date, z, ZodType } from 'zod';

export class DailyTaskEmployeeValidation {
  static readonly CREATE: ZodType = z.object({
    month: z.string(),
    make_task: z.boolean(),
  });
  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    status: z.string().max(100).optional(),
    task_employee_id: z.number().positive().optional(),
  });
}
