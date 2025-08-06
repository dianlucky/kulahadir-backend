import { HttpException, Injectable } from '@nestjs/common';
import { Employee, OutgoingItem } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateOutgoingRequest,
  OutgoingItemResponse,
  UpdateOutgoingRequest,
} from 'src/model/outgoingitem.model';
import { OutgoingItemValidation } from './outgoingitem.validation';
import { OutgoingDetailResponse } from 'src/model/outgoingdetail.model';
import { OutgoingDetailService } from 'src/outgoing-detail/outgoingdetail.service';

@Injectable()
export class OutgoingItemService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private detailService: OutgoingDetailService,
  ) {}

  toOutgoingItemResponse(
    outgoingItem: OutgoingItem & { employee?: Employee },
  ): OutgoingItemResponse {
    return {
      id: outgoingItem.id,
      created_at: outgoingItem.created_at,
      isFrozen: outgoingItem.isFrozen,
      employee_id: outgoingItem.employee_id,
      employee: outgoingItem.employee
        ? {
            id: outgoingItem.employee.id,
            account_id: outgoingItem.employee.account_id,
            name: outgoingItem.employee.name,
            phone: outgoingItem.employee.phone,
            birth_date: outgoingItem.employee.birth_date,
            profile_pic: outgoingItem.employee.profile_pic,
            created_at: outgoingItem.employee.created_at,
          }
        : undefined,
    };
  }

  async checkOutgoingItemMustExists(
    outgoingId: number,
  ): Promise<OutgoingItemResponse> {
    const result = await this.prismaService.outgoingItem.findUnique({
      where: {
        id: outgoingId,
      },
    });

    if (!result) {
      throw new HttpException('outgoing history is not found', 404);
    }

    return result;
  }

  async create(request: CreateOutgoingRequest): Promise<OutgoingItemResponse> {
    const validatedData = await this.validationService.validate(
      OutgoingItemValidation.CREATE,
      request,
    );

    const result = await this.prismaService.outgoingItem.create({
      include: {
        employee: true,
      },
      data: {
        ...validatedData,
        created_at: new Date(),
      },
    });

    return this.toOutgoingItemResponse(result);
  }

  async getAll(): Promise<OutgoingItemResponse[]> {
    const results = await this.prismaService.outgoingItem.findMany({
      include: {
        employee: true,
      },
    });

    return results.map((result) => this.toOutgoingItemResponse(result));
  }

  async getByDate(
    type: string,
    dateString: string,
  ): Promise<(OutgoingItemResponse & { details: OutgoingDetailResponse[] })[]> {
    const date = new Date(dateString);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // 1. Ambil OutgoingItem
    const outgoingItems = await this.prismaService.outgoingItem.findMany({
      where: {
        isFrozen: type == 'Frozen',
        created_at: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        employee: true,
      },
    });

    const outgoingIds = outgoingItems.map((data) => data.id);
    if (outgoingIds.length === 0) return [];

    // 2. Ambil incomingDetail berdasarkan incoming_id
    const outgoingDetails = await this.prismaService.outgoingDetail.findMany({
      where: {
        outgoing_id: { in: outgoingIds },
      },
      include: {
        item: {
          include: {
            category: true,
          },
        },
        employee: true,
        outgoing_item: true,
      },
    });

    // 3. Gabungkan response
    return outgoingItems.map((outgoingItem) => {
      const details = outgoingDetails
        .filter((detail) => detail.outgoing_id === outgoingItem.id)
        .map((detail) => this.detailService.toOutgoingDetailResponse(detail));

      return {
        ...this.toOutgoingItemResponse(outgoingItem),
        details,
      };
    });
  }

  async update(
    outgoingId: number,
    request: UpdateOutgoingRequest,
  ): Promise<OutgoingItemResponse> {
    await this.checkOutgoingItemMustExists(outgoingId);

    const result = await this.prismaService.outgoingItem.update({
      where: {
        id: outgoingId,
      },
      include: {
        employee: true,
      },
      data: request,
    });

    return this.toOutgoingItemResponse(result);
  }

  async remove(outgoingId: number): Promise<OutgoingItemResponse> {
    await this.checkOutgoingItemMustExists(outgoingId);
    await this.detailService.removeByOutgoingId(outgoingId);
    const result = await this.prismaService.outgoingItem.delete({
      where: {
        id: outgoingId,
      },
    });

    return this.toOutgoingItemResponse(result);
  }
}
