import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeLoanValidation } from './employeeloan.validation';
import { Employee, EmployeeLoan } from '@prisma/client';
import {
  CreateEmployeeLoanRequest,
  EmployeeLoanResponse,
  UpdateEmployeeLoanRequest,
} from '../model/employeeloan.model';
import { EmployeeService } from '../employee/employee.service';
import { SalaryDeductionService } from '../salary-deduction/salarydeduction.service';

@Injectable()
export class EmployeeLoanService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
    private salaryDeductionService: SalaryDeductionService,
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

    const result = await this.prismaService.employeeLoan.create({
      data: {
        ...validatedData,
        date: new Date(validatedData.date),
      },
      include: {
        employee: true,
      },
    });

    if (result) {
    }

    return this.toEmployeeLoanResponse(result);
  }

  async get(
    employeeId: number,
    date?: string,
    status?: string,
  ): Promise<{ data: EmployeeLoanResponse[] }> {
    await this.employeeService.checkEmployeeMustExists(employeeId);

    let dateFilter = {};
    if (date) {
      const parts = date.split('-');
      if (parts.length === 1) {
        // Format 'YYYY'
        const start = new Date(`${date}-01-01T00:00:00.000Z`);
        const end = new Date(`${Number(date) + 1}-01-01T00:00:00.000Z`);
        dateFilter = {
          date: {
            gte: start,
            lt: end,
          },
        };
      } else if (parts.length === 2) {
        // Format 'YYYY-MM'
        const start = new Date(`${date}-01T00:00:00.000Z`);
        const [year, month] = parts.map(Number);
        const end =
          month === 12
            ? new Date(`${year + 1}-01-01T00:00:00.000Z`)
            : new Date(
                `${year}-${String(month + 1).padStart(2, '0')}-01T00:00:00.000Z`,
              );
        dateFilter = {
          date: {
            gte: start,
            lt: end,
          },
        };
      }
    }

    const employeeloans = await this.prismaService.employeeLoan.findMany({
      where: {
        employee_id: employeeId,
        ...dateFilter,
        ...(status ? { status } : {}),
      },
      include: {
        employee: true,
      },
    });

    return {
      data: employeeloans.map((loan) => this.toEmployeeLoanResponse(loan)),
    };
  }

  async update(
    loanId: number,
    request: UpdateEmployeeLoanRequest,
  ): Promise<EmployeeLoanResponse> {
    const validatedData: UpdateEmployeeLoanRequest =
      await this.validationService.validate(
        EmployeeLoanValidation.UPDATE,
        request,
      );
    const loan = await this.checkEmployeeLoanMustExists(loanId);

    const result = await this.prismaService.employeeLoan.update({
      where: {
        id: loanId,
      },
      include: {
        employee: true,
      },
      data: validatedData,
    });

    if (result.status === 'Accepted') {

      const salaryDeductionData = {
        amount: loan.amount,
        date: loan.date,
        employee_id: loan.employee_id,
      };
      console.log(`DARI LOAN SERVICE : ${salaryDeductionData.date}`);
      await this.salaryDeductionService.create(salaryDeductionData);
    }

    return this.toEmployeeLoanResponse(result);
  }

  async remove(loanId: number): Promise<EmployeeLoanResponse> {
    await this.checkEmployeeLoanMustExists(loanId);

    const result = await this.prismaService.employeeLoan.delete({
      where: {
        id: loanId,
      },
      include: {
        employee: true,
      },
    });

    return this.toEmployeeLoanResponse(result);
  }
}
