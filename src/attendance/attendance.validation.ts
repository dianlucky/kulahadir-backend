import { z, ZodType } from 'zod';

export class AttendanceValidation {
  static readonly CREATE: ZodType = z.object({
    check_in: z.string().transform((val) => new Date(val)),
    schedule_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    check_in: z.string().transform((val) => new Date(val)).optional(),
    check_out: z.string().transform((val) => new Date(val)),
    status: z.string().min(1).max(100),
    schedule_id: z.number().positive(),
  });
}
