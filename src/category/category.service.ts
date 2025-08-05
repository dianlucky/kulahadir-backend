import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CategoryResponse,
  CreateCategoryRequest,
  UpdateCategoryRequest,
} from 'src/model/category.model';
import { CategoryValidation } from './category.validation';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(
    private validationService: ValidationService,
    private prismaService: PrismaService,
  ) {}

  toCategoryResponse(category: Category): CategoryResponse {
    return {
      id: category.id,
      code: category.code,
      name: category.name,
    };
  }

  async checkCategoryIsExists(id: number) {
    const result = await this.prismaService.category.findUnique({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new HttpException('Category is not found', 404);
    }

    return result;
  }

  async checkCategoryWithSameNameAndCode(
    data: CreateCategoryRequest,
    categoryId?: number,
  ) {
    return this.prismaService.category.count({
      where: {
        AND: [
          {
            OR: [{ name: data.name }, { code: data.code }],
          },
          ...(categoryId !== undefined
            ? [
                {
                  NOT: {
                    id: categoryId,
                  },
                },
              ]
            : []),
        ],
      },
    });
  }

  async create(request: CreateCategoryRequest): Promise<CategoryResponse> {
    const validatedData = this.validationService.validate(
      CategoryValidation.CREATE,
      request,
    ) as CreateCategoryRequest;

    const totalCategoryWithSameName: any =
      await this.checkCategoryWithSameNameAndCode(validatedData);

    if (totalCategoryWithSameName != 0) {
      throw new HttpException('Kode kategori atau nama sudah digunakan', 400);
    }

    const result = await this.prismaService.category.create({
      data: validatedData,
    });

    return this.toCategoryResponse(result);
  }

  async getAll(): Promise<CategoryResponse[]> {
    const results = await this.prismaService.category.findMany();
    return results.map((result) => this.toCategoryResponse(result));
  }

  async getCountCategory(type: string): Promise<number> {
    const isNotFrozen = type === '!Frozen';

    const result = await this.prismaService.category.count({
      where: {
        name: isNotFrozen ? { not: 'Frozen' } : 'Frozen',
      },
    });

    return result;
  }

  async update(
    categoryId: number,
    request: UpdateCategoryRequest,
  ): Promise<CategoryResponse> {
    await this.checkCategoryIsExists(categoryId);
    const validatedData = await this.validationService.validate(
      CategoryValidation.UPDATE,
      request,
    );

    const totalCategoryWithSameName: any =
      await this.checkCategoryWithSameNameAndCode(validatedData, categoryId);

    if (totalCategoryWithSameName != 0) {
      throw new HttpException('Kode kategori atau nama sudah digunakan', 400);
    }

    const result = await this.prismaService.category.update({
      where: {
        id: categoryId,
      },
      data: validatedData,
    });

    return this.toCategoryResponse(result);
  }

  async remove(categoryId: number): Promise<CategoryResponse> {
    await this.checkCategoryIsExists(categoryId);
    const isUsed = await this.prismaService.item.findMany({
      where: {
        category_id: categoryId,
      },
    });

    if (isUsed.length != 0) {
      throw new HttpException('Category sedang digunakan', 400);
    }

    const result = await this.prismaService.category.delete({
      where: {
        id: categoryId,
      },
    });

    return this.toCategoryResponse(result);
  }
}
