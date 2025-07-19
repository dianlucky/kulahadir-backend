import { z, ZodType } from 'zod';

export class IncomingItemValidation {
  static readonly CREATE: ZodType = z.object({
    employee_id: z.number().positive(),
  });
}
