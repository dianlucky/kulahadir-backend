import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
} from '@nestjs/common';
import { EmployeeLoanService } from './employeeloan.service';
import { WebResponse } from '../model/web.model';
import {
  CreateEmployeeLoanRequest,
  EmployeeLoanResponse,
} from '../model/employeeloan.model';
import { Account } from '@prisma/client';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeResponse } from '../model/employee.model';
import { Auth } from '../common/auth.decorator';

@Controller('/api/employee-loans')
export class EmployeeLoanController {
  constructor(
    private employeeLoanService: EmployeeLoanService,
    private employeeService: EmployeeService,
  ) {}
  
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateEmployeeLoanRequest,
  ): Promise<WebResponse<EmployeeLoanResponse>> {
    const employee: EmployeeResponse = await this.employeeService.get(
      account.id,
    );
    if (!employee) {
      throw new HttpException(`Employee doesn't exists`, 404);
    }
    if (!request.employee_id) {
      request.employee_id = employee.id;
    }

    const result = await this.employeeLoanService.create(request);
    return {
      data: result,
    };
  }
}
