import { z, ZodType } from 'zod';

export class LeaveValidation {
  static readonly CREATE: ZodType = z.object({
    reason: z.string().min(1),
    employee_id: z.number().positive(),
    type: z.string().min(1).max(100),
    date: z.preprocess((val) => {
      if (typeof val === 'string' || val instanceof Date) {
        return new Date(val);
      }
      return val;
    }, z.date()),
    attachment: z.string().max(255).optional(), // file name
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive().optional(),
    reason: z.string().optional(),
    status: z.string().max(100).optional(),
    employee_id: z.number().positive().optional(),
    type: z.string().max(100).optional(),
    date: z
      .preprocess((val) => {
        if (typeof val === 'string' || val instanceof Date) {
          return new Date(val);
        }
        return val;
      }, z.date())
      .optional(),
  });

  static readonly SEARCH: ZodType = z.object({
    id: z.number().positive().optional(),
    employeeId: z.number().positive().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    month: z.string().optional(),
  });
}
