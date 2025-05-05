import { z, ZodType } from 'zod';

export class ScheduleValidation {
  static readonly CREATE: ZodType = z.object({
    date: z.string().transform((val) => new Date(val)),
    status: z.string().min(1).max(100),
    attendance_status: z.string().min(1).max(100),
    employee_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    date: z.string().transform((val) => new Date(val)).optional(),
    status: z.string().min(1).max(100).optional(),
    attendance_status: z.string().min(1).max(100).optional(),
    employee_id: z.number().positive().optional(),
  });
}
