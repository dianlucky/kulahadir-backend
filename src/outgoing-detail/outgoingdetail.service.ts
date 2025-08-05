import { HttpException, Injectable } from '@nestjs/common';
import {
  Category,
  Employee,
  Item,
  OutgoingDetail,
  OutgoingItem,
} from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { ItemService } from 'src/item/item.service';
import {
  AnnualOutgoingStats,
  CreateOutgoingDetailRequest,
  OutgoingDetailResponse,
  OutgoingItemStats,
  UpdateOutgoingDetailRequest,
} from 'src/model/outgoingdetail.model';
import { OutgoingDetailValidation } from './outgoingdetail.validation';
import { ItemStatsMonthlyResponse } from 'src/model/item.model';
import {
  endOfMonth,
  endOfYear,
  format,
  parse,
  startOfMonth,
  startOfYear,
} from 'date-fns';

@Injectable()
export class OutgoingDetailService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private itemService: ItemService,
  ) {}

  toOutgoingDetailResponse(
    outgoingDetail: OutgoingDetail & {
      item?: Item & { category?: Category };
      employee?: Employee;
      outgoingItem?: OutgoingItem;
    },
  ): OutgoingDetailResponse {
    return {
      id: outgoingDetail.id,
      amount: outgoingDetail.amount,
      created_at: outgoingDetail.created_at,
      item_id: outgoingDetail.item_id,
      item: outgoingDetail.item
        ? {
            id: outgoingDetail.item.id,
            code: outgoingDetail.item.code,
            name: outgoingDetail.item.name,
            stock: outgoingDetail.item.stock,
            image: outgoingDetail.item.image,
            status: outgoingDetail.item.status,
            category_id: outgoingDetail.item.category_id,
            category: outgoingDetail.item.category
              ? {
                  id: outgoingDetail.item.category.id,
                  code: outgoingDetail.item.category.code,
                  name: outgoingDetail.item.category.name,
                }
              : undefined,
          }
        : undefined,
      outgoing_id: outgoingDetail.outgoing_id,
      outgoingItem: outgoingDetail.outgoingItem
        ? {
            id: outgoingDetail.outgoingItem.id,
            created_at: outgoingDetail.outgoingItem.created_at,
            employee_id: outgoingDetail.outgoingItem.employee_id,
          }
        : undefined,
      employee_id: outgoingDetail.employee_id,
      employee: outgoingDetail.employee
        ? {
            id: outgoingDetail.employee.id,
            name: outgoingDetail.employee.name,
            birth_date: outgoingDetail.employee.birth_date,
            phone: outgoingDetail.employee.phone,
            profile_pic: outgoingDetail.employee.profile_pic,
            created_at: outgoingDetail.employee.created_at,
            account_id: outgoingDetail.employee.account_id,
          }
        : undefined,
    };
  }

  async checkDetailIsExists(detailId: number) {
    const result = await this.prismaService.outgoingDetail.findUnique({
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
    request: CreateOutgoingDetailRequest,
  ): Promise<OutgoingDetailResponse> {
    const validatedData = (await this.validationService.validate(
      OutgoingDetailValidation.CREATE,
      request,
    )) as CreateOutgoingDetailRequest;

    const result = await this.prismaService.outgoingDetail.create({
      data: {
        ...validatedData,
        created_at: new Date(),
      },
    });

    if (result) {
      const item = await this.itemService.getById(request.item_id);

      const data = {
        stock: item.stock - validatedData.amount,
      };
      await this.itemService.update(request.item_id, data);
    }

    return this.toOutgoingDetailResponse(result);
  }

  async getByOutgoingId(id: number): Promise<OutgoingDetailResponse[]> {
    const results = await this.prismaService.outgoingDetail.findMany({
      where: {
        outgoing_id: id,
      },
      include: {
        employee: true,
        outgoing_item: true,
        item: {
          include: {
            category: true,
          },
        },
      },
    });
    return results.map((result) => this.toOutgoingDetailResponse(result));
  }

  async getByItemId(itemId: number): Promise<OutgoingDetailResponse[]> {
    const results = await this.prismaService.outgoingDetail.findMany({
      where: {
        item_id: itemId,
      },
      include: {
        employee: true,
        outgoing_item: true,
        item: {
          include: {
            category: true,
          },
        },
      },
    });

    return results.map((result) => this.toOutgoingDetailResponse(result));
  }

  async getStatsMonthly(
    monthParam: string,
  ): Promise<ItemStatsMonthlyResponse[]> {
    const parsedMonth = parse(monthParam, 'yyyy-MM', new Date());
    const startDate = startOfMonth(parsedMonth);
    const endDate = endOfMonth(parsedMonth);

    const outgoingData = await this.prismaService.outgoingDetail.findMany({
      where: {
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        item: true,
      },
    });

    const grouped: Record<string, number> = {};

    for (const record of outgoingData) {
      const name = record.item.name;
      if (!grouped[name]) {
        grouped[name] = 0;
      }
      grouped[name] += record.amount;
    }

    const result = Object.entries(grouped)
      .map(([name, totalAmount]) => ({
        name,
        totalAmount,
      }))
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, 10);

    return result;
  }

  async getStatsAnnual(yearParams: string): Promise<AnnualOutgoingStats[]> {
    const parsedYear = parse(yearParams, 'yyyy', new Date());
    const startDate = startOfYear(parsedYear);
    const endDate = endOfYear(parsedYear);

    const outgoingData = await this.prismaService.outgoingDetail.findMany({
      where: {
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        item: true, // agar bisa ambil item.name
      },
    });

    const monthlyMap = new Map<
      string,
      { total: number; items: Map<string, number> }
    >();

    for (const record of outgoingData) {
      const month = format(record.created_at, 'MMMM'); // misalnya "January"
      const itemName = record.item.name;
      const amount = record.amount;

      if (!monthlyMap.has(month)) {
        monthlyMap.set(month, { total: 0, items: new Map() });
      }

      const monthData = monthlyMap.get(month)!;
      monthData.total += amount;

      const currentItemAmount = monthData.items.get(itemName) || 0;
      monthData.items.set(itemName, currentItemAmount + amount);
    }

    const result: AnnualOutgoingStats[] = [];

    for (const [month, data] of monthlyMap.entries()) {
      const outgoingItems: OutgoingItemStats[] = [];

      for (const [name, amount] of data.items.entries()) {
        outgoingItems.push({ name, amount });
      }

      result.push({
        month,
        totalAmount: data.total,
        data: outgoingItems,
      });
    }

    const monthOrder = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    result.sort(
      (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month),
    );

    return result;
  }

  async update(
    detailId: number,
    request: UpdateOutgoingDetailRequest,
  ): Promise<OutgoingDetailResponse> {
    const OldDetail = await this.checkDetailIsExists(detailId);
    const validatedData = (await this.validationService.validate(
      OutgoingDetailValidation.UPDATE,
      request,
    )) as UpdateOutgoingDetailRequest;

    const result = await this.prismaService.outgoingDetail.update({
      where: {
        id: detailId,
      },
      include: {
        employee: true,
        outgoing_item: true,
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
        stock: item.stock + OldDetail.amount - validatedData.amount,
      };

      await this.itemService.update(OldDetail.item_id, data);
    }

    return this.toOutgoingDetailResponse(result);
  }

  async removeByOutgoingId(outgoingId: number): Promise<boolean> {
    const details = await this.prismaService.outgoingDetail.findMany({
      where: {
        outgoing_id: outgoingId,
      },
    });

    if (details.length == 0) {
      throw new HttpException('Detail tidak ditemukan', 400);
    }

    for (const detail of details) {
      await this.remove(detail.id);
    }

    return true;
  }

  async remove(detailId: number): Promise<OutgoingDetailResponse> {
    const oldDetail = await this.checkDetailIsExists(detailId);

    const result = await this.prismaService.outgoingDetail.delete({
      where: {
        id: detailId,
      },
    });

    if (result) {
      const item = await this.itemService.getById(oldDetail.item_id);
      const data = {
        stock: item.stock + oldDetail.amount,
      };
      await this.itemService.update(oldDetail.item_id, data);
    }

    return this.toOutgoingDetailResponse(result);
  }
}
