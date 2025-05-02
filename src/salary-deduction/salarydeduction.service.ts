import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeService } from '../employee/employee.service';
import { Employee, SalaryDeduction } from '@prisma/client';
import {
  CreateSalaryDeductionRequest,
  SalaryDeductionResponse,
  UpdateSalaryDeductionRequest,
} from '../model/salarydeduction.model';
import { SalaryDeductionValidation } from './salarydeduction.validation';

@Injectable()
export class SalaryDeductionService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toSalaryDeductionResponse(
    salaryDeduction: SalaryDeduction & { employee: Employee },
  ): SalaryDeductionResponse {
    return {
      id: salaryDeduction.id,
      amount: salaryDeduction.amount,
      date: salaryDeduction.date,
      employee_id: salaryDeduction.employee_id,
      employee: salaryDeduction.employee
        ? {
            id: salaryDeduction.employee.id,
            name: salaryDeduction.employee.name,
            birth_date: salaryDeduction.employee.birth_date,
            phone: salaryDeduction.employee.phone,
            account_id: salaryDeduction.employee.account_id,
          }
        : undefined,
    };
  }

  async checkDeductionMustExists(deductionId: number) {
    const result = await this.prismaService.salaryDeduction.findFirst({
      where: {
        id: deductionId,
      },
      include: {
        employee: true,
      },
    });

    if (!result) {
      throw new HttpException('Salary Deduction is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateSalaryDeductionRequest,
  ): Promise<SalaryDeductionResponse> {
    console.log(request);
    const validatedData = await this.validationService.validate(
      SalaryDeductionValidation.CREATE,
      request,
    );

    await this.employeeService.checkEmployeeMustExists(request.employee_id);
    const result = await this.prismaService.salaryDeduction.create({
      data: validatedData,
      include: {
        employee: true,
      },
    });

    return this.toSalaryDeductionResponse(result);
  }

  async get(deductionId: number): Promise<SalaryDeductionResponse> {
    const result = await this.checkDeductionMustExists(deductionId);

    return this.toSalaryDeductionResponse(result);
  }

  async update(
    deductionId: number,
    request: UpdateSalaryDeductionRequest,
  ): Promise<SalaryDeductionResponse> {
    const oldDeduction = await this.checkDeductionMustExists(deductionId);
    console.log(oldDeduction.amount);

    const validatedData = await this.validationService.validate(
      SalaryDeductionValidation.UPDATE,
      request,
    );

    validatedData.amount = oldDeduction.amount + validatedData.amount;

    const result = await this.prismaService.salaryDeduction.update({
      where: {
        id: deductionId,
      },
      include: {
        employee: true,
      },
      data: validatedData,
    });

    return this.toSalaryDeductionResponse(result);
  }

  async remove(deductionId: number): Promise<SalaryDeductionResponse> {
    await this.checkDeductionMustExists(deductionId);

    const result = await this.prismaService.salaryDeduction.delete({
      where: {
        id: deductionId,
      },
      include: {
        employee: true,
      },
    });

    return this.toSalaryDeductionResponse(result);
  }
}
