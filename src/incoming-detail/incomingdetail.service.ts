import { HttpException, Injectable } from '@nestjs/common';
import {
  Category,
  Employee,
  IncomingDetail,
  IncomingItem,
  Item,
} from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateIncomingDetailRequest,
  IncomingDetailResponse,
  UpdateIncomingDetailRequest,
} from 'src/model/incomingdetail.model';
import { IncomingDetailValidation } from './incomingdetail.validation';
import { ItemService } from 'src/item/item.service';

@Injectable()
export class IncomingDetailService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private itemService: ItemService,
  ) {}

  toIncomingDetailResponse(
    incomingDetail: IncomingDetail & {
      item?: Item & { category?: Category };
      employee?: Employee;
      incomingItem?: IncomingItem;
    },
  ): IncomingDetailResponse {
    return {
      id: incomingDetail.id,
      amount: incomingDetail.amount,
      created_at: incomingDetail.created_at,
      item_id: incomingDetail.item_id,
      item: incomingDetail.item
        ? {
            id: incomingDetail.item.id,
            code: incomingDetail.item.code,
            name: incomingDetail.item.name,
            stock: incomingDetail.item.stock,
            image: incomingDetail.item.image,
            status: incomingDetail.item.status,
            category_id: incomingDetail.item.category_id,
            category: incomingDetail.item.category
              ? {
                  id: incomingDetail.item.category.id,
                  code: incomingDetail.item.category.code,
                  name: incomingDetail.item.category.name,
                }
              : undefined,
          }
        : undefined,
      incoming_id: incomingDetail.incoming_id,
      incomingItem: incomingDetail.incomingItem
        ? {
            id: incomingDetail.incomingItem.id,
            created_at: incomingDetail.incomingItem.created_at,
            employee_id: incomingDetail.incomingItem.employee_id,
          }
        : undefined,
      employee_id: incomingDetail.employee_id,
      employee: incomingDetail.employee
        ? {
            id: incomingDetail.employee.id,
            name: incomingDetail.employee.name,
            birth_date: incomingDetail.employee.birth_date,
            phone: incomingDetail.employee.phone,
            profile_pic: incomingDetail.employee.profile_pic,
            created_at: incomingDetail.employee.created_at,
            account_id: incomingDetail.employee.account_id,
          }
        : undefined,
    };
  }

  async checkDetailIsExists(detailId: number) {
    const result = await this.prismaService.incomingDetail.findUnique({
      where: {
        id: detailId,
      },
    });

    if (!result) {
      throw new HttpException('Transaction is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateIncomingDetailRequest,
  ): Promise<IncomingDetailResponse> {
    const validatedData = (await this.validationService.validate(
      IncomingDetailValidation.CREATE,
      request,
    )) as CreateIncomingDetailRequest;

    const result = await this.prismaService.incomingDetail.create({
      data: {
        ...validatedData,
        created_at: new Date(),
      },
    });

    if (result) {
      const item = await this.itemService.getById(request.item_id);

      const data = {
        stock: validatedData.amount + item.stock,
      };
      await this.itemService.update(request.item_id, data);
    }

    return this.toIncomingDetailResponse(result);
  }

  async getByItemId(itemId: number): Promise<IncomingDetailResponse[]> {
    const results = await this.prismaService.incomingDetail.findMany({
      where: {
        item_id: itemId,
      },
      include: {
        employee: true,
        incoming_item: true,
        item: {
          include: {
            category: true,
          },
        },
      },
    });

    return results.map((result) => this.toIncomingDetailResponse(result));
  }

  async getByIncomingId(id: number): Promise<IncomingDetailResponse[]> {
    const results = await this.prismaService.incomingDetail.findMany({
      where: {
        incoming_id: id,
      },
      include: {
        employee: true,
        incoming_item: true,
        item: {
          include: {
            category: true,
          },
        },
      },
    });
    return results.map((result) => this.toIncomingDetailResponse(result));
  }

  async update(
    detailId: number,
    request: UpdateIncomingDetailRequest,
  ): Promise<IncomingDetailResponse> {
    const OldDetail = await this.checkDetailIsExists(detailId);
    const validatedData = (await this.validationService.validate(
      IncomingDetailValidation.UPDATE,
      request,
    )) as UpdateIncomingDetailRequest;

    const result = await this.prismaService.incomingDetail.update({
      where: {
        id: detailId,
      },
      include: {
        employee: true,
        incoming_item: true,
        item: {
          include: {
            category: true,
          },
        },
      },
      data: validatedData,
    });

    if (result && validatedData.amount) {
      const item = await this.itemService.getById(OldDetail.item_id);
      const data = {
        stock: item.stock - OldDetail.amount + validatedData.amount,
      };

      await this.itemService.update(OldDetail.item_id, data);
    }

    return this.toIncomingDetailResponse(result);
  }

  async removeByIncomingId(incomingId: number): Promise<boolean> {
    const details = await this.prismaService.incomingDetail.findMany({
      where: {
        incoming_id: incomingId,
      },
    });

    if (details.length === 0) {
      throw new HttpException('Detail tidak ditemukan', 400);
    }

    console.log('data details', details);

    // Jalankan semua remove dalam Promise.all
    const errors: string[] = [];

    await Promise.all(
      details.map(async (detail) => {
        try {
          await this.remove(detail.id);
        } catch (err) {
          console.error(`Gagal hapus detail ID ${detail.id}:`, err.message);
          errors.push(`Detail ID ${detail.id}: ${err.message}`);
        }
      }),
    );

    if (errors.length > 0) {
      throw new HttpException(
        `Beberapa detail gagal dihapus: \n${errors.join('\n')}`,
        400,
      );
    }

    return true;
  }

  async remove(detailId: number): Promise<IncomingDetailResponse> {
    const OldDetail = await this.checkDetailIsExists(detailId);

    const result = await this.prismaService.incomingDetail.delete({
      where: {
        id: detailId,
      },
    });

    if (result) {
      const item = await this.itemService.getById(OldDetail.item_id);
      const data = {
        stock: item.stock - OldDetail.amount,
      };
      await this.itemService.update(OldDetail.item_id, data);
    }

    return this.toIncomingDetailResponse(result);
  }
}
