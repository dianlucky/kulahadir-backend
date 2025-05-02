import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeLoanValidation } from './employeeloan.validation';
import { Employee, EmployeeLoan } from '@prisma/client';
import {
  CreateEmployeeLoanRequest,
  EmployeeLoanResponse,
} from '../model/employeeloan.model';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class EmployeeLoanService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toEmployeeLoanResponse(
    employeeloan: EmployeeLoan & { employee: Employee },
  ): EmployeeLoanResponse {
    return {
      id: employeeloan.id,
      amount: employeeloan.amount,
      date: employeeloan.date,
      status: employeeloan.status,
      employee_id: employeeloan.employee_id,
      employee: employeeloan.employee
        ? {
            id: employeeloan.employee.id,
            name: employeeloan.employee.name,
            birth_date: employeeloan.employee.birth_date,
            phone: employeeloan.employee.phone,
            account_id: employeeloan.employee.account_id,
          }
        : undefined,
    };
  }

  async checkEmployeeLoanMustExists(employeeloanId: number) {
    const result = await this.prismaService.employeeLoan.findFirst({
      where: {
        id: employeeloanId,
      },
      include: {
        employee: true,
      },
    });

    if (!result) {
      throw new HttpException('Employee Loan is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateEmployeeLoanRequest,
  ): Promise<EmployeeLoanResponse> {
    const validatedData = await this.validationService.validate(
      EmployeeLoanValidation.CREATE,
      request,
    );
    await this.employeeService.checkEmployeeMustExists(request.employee_id);
    const employeeLoan = await this.prismaService.employeeLoan.create({
      data: validatedData,
      include: {
        employee: true,
      },
    });

    return this.toEmployeeLoanResponse(employeeLoan);
  }
}
