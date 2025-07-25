import { HttpException, Injectable } from '@nestjs/common';
import { Employee, IncomingItem } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateIncomingItemRequest,
  IncomingItemResponse,
  UpdateIncomingItemRequest,
} from 'src/model/incomingitem.model';
import { IncomingItemValidation } from './incomingitem.validation';
import { IncomingDetailService } from 'src/incoming-detail/incomingdetail.service';
import { IncomingDetailResponse } from 'src/model/incomingdetail.model';

@Injectable()
export class IncomingItemService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private detailService: IncomingDetailService,
  ) {}

  toIncomingItemResponse(
    incomingItem: IncomingItem & { employee?: Employee },
  ): IncomingItemResponse {
    return {
      id: incomingItem.id,
      created_at: incomingItem.created_at,
      employee_id: incomingItem.employee_id,
      employee: incomingItem.employee
        ? {
            id: incomingItem.employee.id,
            name: incomingItem.employee.name,
            birth_date: incomingItem.employee.birth_date,
            phone: incomingItem.employee.phone,
            account_id: incomingItem.employee.account_id,
            profile_pic: incomingItem.employee.profile_pic,
            created_at: incomingItem.employee.created_at,
          }
        : undefined,
    };
  }

  async checkIncomingItemMustExists(incomingId: number) {
    const result = await this.prismaService.incomingItem.findUnique({
      where: {
        id: incomingId,
      },
    });

    if (!result) {
      throw new HttpException('History is not exists', 404);
    }

    return result;
  }

  async create(
    request: CreateIncomingItemRequest, 
  ): Promise<IncomingItemResponse> {
    const validatedData = await this.validationService.validate(
      IncomingItemValidation.CREATE,
      request,
    );

    const result = await this.prismaService.incomingItem.create({
      data: {
        ...validatedData,
        created_at: new Date(),
      },
      include: {
        employee: true,
      },
    });

    return this.toIncomingItemResponse(result);
  }

  async getAll(): Promise<IncomingItemResponse[]> {
    const results = await this.prismaService.incomingItem.findMany({
      include: {
        employee: true,
      },
    });
    return results.map((result) => this.toIncomingItemResponse(result));
  }

  async getByDate(
    dateString: string,
  ): Promise<(IncomingItemResponse & { details: IncomingDetailResponse[] })[]> {
    const date = new Date(dateString);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // 1. Ambil incomingItem
    const incomingItems = await this.prismaService.incomingItem.findMany({
      where: {
        created_at: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        employee: true,
      },
    });

    const incomingIds = incomingItems.map((item) => item.id);
    if (incomingIds.length === 0) return [];

    // 2. Ambil incomingDetail berdasarkan incoming_id
    const incomingDetails = await this.prismaService.incomingDetail.findMany({
      where: {
        incoming_id: { in: incomingIds },
      },
      include: {
        item: {
          include: {
            category: true,
          },
        },
        employee: true,
        incoming_item: true,
      },
    });

    // 3. Gabungkan response
    return incomingItems.map((incomingItem) => {
      const details = incomingDetails
        .filter((detail) => detail.incoming_id === incomingItem.id)
        .map((detail) => this.detailService.toIncomingDetailResponse(detail));

      return {
        ...this.toIncomingItemResponse(incomingItem),
        details,
      };
    });
  }


  async update(
    incomingId: number,
    request: UpdateIncomingItemRequest,
  ): Promise<IncomingItemResponse> {
    await this.checkIncomingItemMustExists(incomingId);
    const result = await this.prismaService.incomingItem.update({
      where: {
        id: incomingId,
      },
      include: {
        employee: true,
      },
      data: request,
    });

    return this.toIncomingItemResponse(result);
  }

  async remove(incomingId: number): Promise<IncomingItemResponse> {
    await this.checkIncomingItemMustExists(incomingId);
    await this.detailService.removeByIncomingId(incomingId);
    const result = await this.prismaService.incomingItem.delete({
      where: {
        id: incomingId,
      },
    });

    return result;
  }
}
