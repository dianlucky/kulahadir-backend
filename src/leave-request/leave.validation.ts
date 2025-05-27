import { z, ZodType } from 'zod';

export class LeaveValidation {
  static readonly CREATE: ZodType = z.object({
    reason: z.string().min(1),
    employee_id: z.number().positive(),
    type: z.string().min(1).max(100),
    date: z.string().transform((val) => new Date(val)),
  });

  static readonly UPDATE: ZodType = z.object({
    id: z.number().positive(),
    reason: z.string().min(1),
    status: z.string().min(1).max(100),
    employee_id: z.number().positive(),
    type: z.string().min(1).max(100),
    date: z.string().transform((val) => new Date(val)),
  });

  static readonly SEARCH: ZodType = z.object({
    id: z.number().positive().optional(),
    employeeId: z.number().positive().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    month: z.string().optional(),
  });
}
