import { HttpException, Injectable } from '@nestjs/common';
import { Employee, Salary } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { EmployeeService } from 'src/employee/employee.service';
import {
  CreateSalaryRequest,
  SalaryResponse,
  UpdateSalaryRequest,
} from 'src/model/salary.model';
import { SalaryValidation } from './salary.validation';

@Injectable()
export class SalaryService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toSalaryResponse(salary: Salary & { employee?: Employee }): SalaryResponse {
    return {
      id: salary.id,
      amount: salary.amount,
      bonus: salary.bonus,
      salary_deduction: salary.salary_deduction,
      date: salary.date,
      employee_id: salary.employee_id,
      employee: salary.employee
        ? {
            id: salary.employee.id,
            name: salary.employee.name,
            birth_date: salary.employee.birth_date,
            phone: salary.employee.phone,
            account_id: salary.employee.account_id,
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
    const result = await this.prismaService.salary.create({
      data: validatedData,
    });

    return this.toSalaryResponse(result);
  }

  async get(salaryId: number): Promise<SalaryResponse> {
    const result = await this.checkSalaryMustExists(salaryId);
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
