import { z, ZodType } from 'zod';

export class PaidLeaveValidation {
  static readonly CREATE: ZodType = z.object({
    reason: z.string().min(1),
    status: z.string().min(1).max(100),
    schedule_id: z.number().positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    reason: z.string().min(1).optional(),
    status: z.string().min(1).max(100).optional(),
    schedule_id: z.number().positive(),
  });
}
