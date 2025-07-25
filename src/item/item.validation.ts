import { image } from 'pdfkit';
import { z, ZodType } from 'zod';

export class ItemValidation {
  static readonly CREATE: ZodType = z.object({
    code: z
      .string({ required_error: 'Kode harus diisi' })
      .min(1, { message: 'Kode tidak boleh kosong' })
      .max(100, { message: 'Kode maksimal 100 karakter' }),

    name: z
      .string({ required_error: 'Nama harus diisi' })
      .min(1, { message: 'Nama tidak boleh kosong' })
      .max(100, { message: 'Nama maksimal 100 karakter' }),

    stock: z.number({ required_error: 'Stok harus diisi' }),

    category_id: z
      .number({ required_error: 'Kategori harus diisi' })
      .positive({ message: 'Kategori tidak valid' }),
    image: z.string().optional(),
  });

  static readonly UPDATE: ZodType = z.object({
    code: z.string().max(100).optional(),
    name: z.string().max(100).optional(),
    stock: z.number().min(0).optional(),
    category_id: z.number().positive().optional(),
    image: z.string().optional(),
  });
}
