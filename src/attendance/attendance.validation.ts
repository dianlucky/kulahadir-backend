import { z, ZodType } from 'zod';

export class AttendanceValidation {
  static readonly CHECKIN: ZodType = z.object({
    check_in: z.string().transform((val) => new Date(val)),
    schedule_id: z.number().positive(),
    attendance_long: z.string().max(100),
    attendance_lat: z.string().max(100),
    snapshot: z.string().max(255).optional(),
  });

  static readonly CHECKOUT: ZodType = z.object({
    id: z.number().positive(),
    check_out: z.string().transform((val) => new Date(val)),
    schedule_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    check_in: z
      .string()
      .transform((val) => new Date(val))
      .optional(),
    check_out: z.string().transform((val) => new Date(val)),
    status: z.string().min(1).max(100),
    schedule_id: z.number().positive(),
  });
}
