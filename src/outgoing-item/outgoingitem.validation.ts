import { z, ZodType } from 'zod';

export class OutgoingItemValidation {
  static readonly CREATE: ZodType = z.object({
    employee_id: z.number().positive(),
    isFrozen: z.boolean(),
  });
}
