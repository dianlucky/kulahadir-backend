import { z, ZodType } from 'zod';

export class IncomingDetailValidation {
  static readonly CREATE: ZodType = z.object({
    incoming_id: z.number().positive(),
    item_id: z.number().positive(),
    employee_id: z.number().positive(),
    amount: z.number().positive().min(1),
  });
  static readonly UPDATE: ZodType = z.object({
    incoming_id: z.number().positive().optional(),
    item_id: z.number().positive().optional(),
    employee_id: z.number().positive().optional(),
    amount: z.number().positive().optional(),
  });
}
