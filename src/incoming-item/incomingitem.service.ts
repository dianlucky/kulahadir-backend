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

@Injectable()
export class IncomingItemService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
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
    const result = await this.prismaService.incomingItem.delete({
      where: {
        id: incomingId,
      },
    });

    return result;
  }
}
