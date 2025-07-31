import { HttpException, Injectable } from '@nestjs/common';
import { Category, Item } from '@prisma/client';
import { CategoryService } from '../category/category.service';
import { ValidationService } from '../common/validation.service';
import {
  CreateItemRequest,
  ItemResponse,
  ItemStatsParams,
  ItemStatsResponse,
  UpdateItemRequest,
} from '../model/item.model';
import { ItemValidation } from './item.validation';
import { PrismaService } from 'src/common/prisma.service';
import { addDays, format, parseISO, startOfWeek, subDays } from 'date-fns';

@Injectable()
export class ItemService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private categoryService: CategoryService,
  ) {}

  toItemResponse(item: Item & { category?: Category }): ItemResponse {
    return {
      id: item.id,
      code: item.code,
      name: item.name,
      stock: item.stock,
      image: item.image,
      status: item.status,
      category_id: item.category_id,
      category: item.category
        ? {
            id: item.category.id,
            code: item.category.code,
            name: item.category.name,
          }
        : undefined,
    };
  }

  async checkItemMustBeExists(itemId: number) {
    const result = await this.prismaService.item.findFirst({
      where: {
        id: itemId,
      },
      include: {
        category: true,
      },
    });

    if (!result) {
      throw new HttpException('Item is not found', 404);
    }

    return result;
  }

  async checkUniqueNameAndCode(data: UpdateItemRequest, itemId?: number) {
    return this.prismaService.item.count({
      where: {
        AND: [
          {
            OR: [{ name: data.name }, { code: data.code }],
          },
          ...(itemId !== undefined
            ? [
                {
                  NOT: {
                    id: itemId,
                  },
                },
              ]
            : []),
        ],
      },
    });
  }

  async create(request: CreateItemRequest): Promise<ItemResponse> {
    const validatedData = this.validationService.validate(
      ItemValidation.CREATE,
      request,
    );
    await this.categoryService.checkCategoryIsExists(validatedData.category_id);
    const checkUnique = await this.checkUniqueNameAndCode(validatedData);
    if (checkUnique != 0) {
      throw new HttpException('Kode barang atau nama sudah digunakan', 400);
    }

    const item = await this.prismaService.item.create({
      data: validatedData,
      include: {
        category: true,
      },
    });

    return this.toItemResponse(item);
  }

  async getByCategory(category: string): Promise<ItemResponse[]> {
    const isFrozen = category === 'frozen' || category === 'Frozen';
    const result = await this.prismaService.item.findMany({
      where: {
        category: {
          name: isFrozen
            ? 'Frozen'
            : {
                not: 'Frozen',
              },
        },
        status: 'aktif',
      },
      include: {
        category: true,
      },
    });

    return result.map(this.toItemResponse);
  }

  async getById(itemId: number): Promise<ItemResponse> {
    const result = await this.checkItemMustBeExists(itemId);
    return this.toItemResponse(result);
  }

  async getStatsWeekly(
    itemId: number,
    startDateParams: string,
  ): Promise<ItemStatsResponse[]> {
    await this.checkItemMustBeExists(itemId);
    const endDate = parseISO(startDateParams);
    const startDate = subDays(endDate, 6);
    const result: { date: string; Masuk: number; Keluar: number }[] = [];

    const incomingData = await this.prismaService.incomingDetail.findMany({
      where: {
        item_id: itemId,
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        item: true,
      },
    });

    const outgoingData = await this.prismaService.outgoingDetail.findMany({
      where: {
        item_id: itemId,
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        item: true,
      },
    });

    for (let i = 0; i <= 6; i++) {
      const currentDate = addDays(startDate, i);
      const dateString = format(currentDate, 'dd');

      const masuk = incomingData
        .filter((d) => format(d.created_at, 'yyyy-MM-dd') === dateString)
        .reduce((sum, curr) => sum + curr.amount, 0);

      const keluar = outgoingData
        .filter((d) => format(d.created_at, 'yyyy-MM-dd') === dateString)
        .reduce((sum, curr) => sum + curr.amount, 0);

      result.push({
        date: dateString,
        Masuk: masuk,
        Keluar: keluar,
      });
    }

    return result;
  }

  async getAll(): Promise<ItemResponse[]> {
    const results = await this.prismaService.item.findMany({
      include: {
        category: true,
      },
    });

    if (results.length === 0) {
      throw new HttpException('No items found', 404);
    }

    return results.map((result) => {
      console.log('DEBUG item before transform:', result);
      return this.toItemResponse(result);
    });
  }

  async update(
    itemId: number,
    request: UpdateItemRequest,
  ): Promise<ItemResponse> {
    await this.checkItemMustBeExists(itemId);
    const validatedData = (await this.validationService.validate(
      ItemValidation.UPDATE,
      request,
    )) as UpdateItemRequest;
    if (request.category_id) {
      await this.categoryService.checkCategoryIsExists(request.category_id);
    }
    const item = await this.prismaService.item.update({
      where: {
        id: itemId,
      },
      include: {
        category: true,
      },
      data: validatedData,
    });

    return this.toItemResponse(item);
  }

  async tempRemove(itemId: number): Promise<ItemResponse> {
    await this.checkItemMustBeExists(itemId);
    const result = await this.prismaService.item.update({
      where: {
        id: itemId,
      },
      include: {
        category: true,
      },
      data: {
        status: 'inactive',
      },
    });

    return this.toItemResponse(result);
  }

  async remove(itemId: number): Promise<ItemResponse> {
    await this.checkItemMustBeExists(itemId);
    const item = await this.prismaService.item.delete({
      where: {
        id: itemId,
      },
      include: {
        category: true,
      },
    });

    return this.toItemResponse(item);
  }
}
