import { HttpException, Injectable } from '@nestjs/common';
import { Account, Employee, Salary } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { EmployeeService } from 'src/employee/employee.service';
import {
  CreateSalaryRequest,
  SalaryResponse,
  UpdateSalaryRequest,
} from 'src/model/salary.model';
import { SalaryValidation } from './salary.validation';
import { endOfMonth, startOfMonth } from 'date-fns';

@Injectable()
export class SalaryService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toSalaryResponse(
    salary: Salary & { employee?: Employee & { account?: Account } },
  ): SalaryResponse {
    return {
      id: salary.id,
      amount: salary.amount,
      bonus: salary.bonus,
      salary_deduction: salary.salary_deduction,
      cash_advance: salary.cash_advance,
      note: salary.note,
      date: salary.date,
      created_at: salary.created_at,
      employee_id: salary.employee_id,
      employee: salary.employee
        ? {
            id: salary.employee.id,
            name: salary.employee.name,
            birth_date: salary.employee.birth_date,
            phone: salary.employee.phone,
            profile_pic: salary.employee.profile_pic,
            created_at: salary.employee.created_at,
            account_id: salary.employee.account_id,
            account: salary.employee.account
              ? {
                  id: salary.employee.account.id,
                  username: salary.employee.account.username,
                  status: salary.employee.account.status,
                  level: salary.employee.account.level,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkSalaryMustExists(salaryId: number) {
    const result = await this.prismaService.salary.findFirst({
      where: {
        id: salaryId,
      },
      include: {
        employee: true,
      },
    });

    if (!result) {
      throw new HttpException('Salary is not found', 404);
    }

    return result;
  }

  async create(request: CreateSalaryRequest): Promise<SalaryResponse> {
    const validatedData = await this.validationService.validate(
      SalaryValidation.CREATE,
      request,
    );

    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const data = {
      ...validatedData,
      date: new Date(request.date),
      created_at: new Date(),
    };

    const result = await this.prismaService.salary.create({
      data: data,
    });

    return this.toSalaryResponse(result);
  }

  async get(salaryId: number): Promise<SalaryResponse> {
    const result = await this.checkSalaryMustExists(salaryId);
    return this.toSalaryResponse(result);
  }

  async getByMonthEmployeeId(
    month: Date,
    employeeId: number,
  ): Promise<SalaryResponse | null> {
    const start = startOfMonth(month);
    const end = endOfMonth(month);

    const result = await this.prismaService.salary.findFirst({
      where: {
        date: {
          gte: start,
          lte: end,
        },
        employee_id: employeeId,
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
      return null;
    }

    return this.toSalaryResponse(result);
  }

  async update(
    salaryId: number,
    request: UpdateSalaryRequest,
  ): Promise<SalaryResponse> {
    const validatedData = await this.validationService.validate(
      SalaryValidation.UPDATE,
      request,
    );

    await this.checkSalaryMustExists(salaryId);
    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const result = await this.prismaService.salary.update({
      where: {
        id: salaryId,
      },
      include: {
        employee: true,
      },
      data: validatedData,
    });

    return this.toSalaryResponse(result);
  }

  async remove(salaryId: number): Promise<SalaryResponse> {
    await this.checkSalaryMustExists(salaryId);
    const result = await this.prismaService.salary.delete({
      where: {
        id: salaryId,
      },
      include: {
        employee: true,
      },
    });

    return this.toSalaryResponse(result);
  }
}
