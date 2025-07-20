import { HttpException, Injectable } from '@nestjs/common';
import { Category, Item } from '@prisma/client';
import { CategoryService } from '../category/category.service';
import { ValidationService } from '../common/validation.service';
import {
  CreateItemRequest,
  ItemResponse,
  UpdateItemRequest,
} from '../model/item.model';
import { ItemValidation } from './item.validation';
import { PrismaService } from 'src/common/prisma.service';

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

  async create(request: CreateItemRequest): Promise<ItemResponse> {
    await this.categoryService.checkCategoryIsExists(request.category_id);

    const validatedData = this.validationService.validate(
      ItemValidation.CREATE,
      request,
    );

    const item = await this.prismaService.item.create({
      data: validatedData,
      include: {
        category: true,
      },
    });

    return this.toItemResponse(item);
  }

  async getById(itemId: number): Promise<ItemResponse> {
    const result = await this.checkItemMustBeExists(itemId);
    return this.toItemResponse(result);
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
