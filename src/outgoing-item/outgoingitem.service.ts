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

@Injectable()
export class OutgoingItemService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  toOutgoingItemResponse(
    outgoingItem: OutgoingItem & { employee?: Employee },
  ): OutgoingItemResponse {
    return {
      id: outgoingItem.id,
      created_at: outgoingItem.created_at,
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
      data: validatedData,
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

    const result = await this.prismaService.outgoingItem.delete({
      where: {
        id: outgoingId,
      },
    });

    return this.toOutgoingItemResponse(result);
  }
}
