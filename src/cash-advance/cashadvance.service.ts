import { HttpException, Injectable } from '@nestjs/common';
import { Account, CashAdvance, Employee } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { EmployeeService } from 'src/employee/employee.service';
import {
  CashAdvanceResponse,
  CreateCashAdvanceRequest,
  UpdateCashAdvanceRequest,
} from 'src/model/cashadvance.model';
import { CashAdvanceValidation } from './cashadvance.validation';
import { endOfMonth, startOfMonth } from 'date-fns';

@Injectable()
export class CashAdvanceService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toCashAdvanceResponse(
    cashAdvance: CashAdvance & { employee?: Employee & { account?: Account } },
  ): CashAdvanceResponse {
    return {
      id: cashAdvance.id,
      amount: cashAdvance.amount,
      reason: cashAdvance.reason,
      status: cashAdvance.status,
      date: cashAdvance.date,
      created_at: cashAdvance.created_at,
      employee: cashAdvance.employee
        ? {
            id: cashAdvance.employee.id,
            name: cashAdvance.employee.name,
            birth_date: cashAdvance.employee.birth_date,
            phone: cashAdvance.employee.phone,
            profile_pic: cashAdvance.employee.profile_pic,
            account_id: cashAdvance.employee.account_id,
            created_at: cashAdvance.employee.created_at,
            account: cashAdvance.employee.account
              ? {
                  id: cashAdvance.employee.account.id,
                  username: cashAdvance.employee.account.username,
                  level: cashAdvance.employee.account.level,
                  status: cashAdvance.employee.account.status,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkCashAdvanceMustExists(cashAdvanceId: number | undefined) {
    const result = await this.prismaService.cashAdvance.findFirst({
      where: {
        id: cashAdvanceId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });
    if (!result) {
      throw new HttpException('Cash Advance is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateCashAdvanceRequest,
  ): Promise<CashAdvanceResponse> {
    const validatedData = await this.validationService.validate(
      CashAdvanceValidation.CREATE,
      request,
    );

    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const data = {
      ...validatedData,
      status: 'pending',
      created_at: new Date(),
    };

    const result = await this.prismaService.cashAdvance.create({
      data: data,
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    return this.toCashAdvanceResponse(result);
  }

  async getAll(): Promise<CashAdvanceResponse[]> {
    const results = await this.prismaService.cashAdvance.findMany({
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    if (!results) {
      throw new HttpException('Cash Advance is not found', 404);
    }

    return results.map((result) => this.toCashAdvanceResponse(result));
  }

  async getByMonthEmployeeId(
    month: Date,
    employeeId: number,
  ): Promise<CashAdvanceResponse[]> {
    const start = startOfMonth(month); // 2025-05-01T00:00:00.000Z
    const end = endOfMonth(month); // 2025-05-31T23:59:59.999Z

    const results = await this.prismaService.cashAdvance.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
        employee_id: employeeId,
      },
      include: {
        employee: true,
      },
    });

    if (results.length == 0) {
      return [];
    }

    return results.map((result) => this.toCashAdvanceResponse(result));
  }

  async getByEmployeeId(employeeId: number): Promise<CashAdvanceResponse[]> {
    const results = await this.prismaService.cashAdvance.findMany({
      where: {
        employee_id: employeeId,
      },
      include: {
        employee: true,
      },
    });

    if (results.length == 0) {
      return [];
    }

    return results.map((result) => this.toCashAdvanceResponse(result));
  }

  async get(cashAdvanceId: number): Promise<CashAdvanceResponse> {
    const result = await this.checkCashAdvanceMustExists(cashAdvanceId);
    return this.toCashAdvanceResponse(result);
  }

  async update(
    cashAdvanceId: number,
    request: UpdateCashAdvanceRequest,
  ): Promise<CashAdvanceResponse> {
    const validatedData = await this.validationService.validate(
      CashAdvanceValidation.UPDATE,
      request,
    );

    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const result = await this.prismaService.cashAdvance.update({
      where: {
        id: cashAdvanceId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
      data: validatedData,
    });

    return this.toCashAdvanceResponse(result);
  }

  async remove(cashAdvanceId: number): Promise<CashAdvanceResponse> {
    await this.checkCashAdvanceMustExists(cashAdvanceId);

    const result = await this.prismaService.cashAdvance.delete({
      where: {
        id: cashAdvanceId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    return this.toCashAdvanceResponse(result);
  }
}
