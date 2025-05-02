import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmployeeLoanService } from './employeeloan.service';
import { WebResponse } from '../model/web.model';
import {
  CreateEmployeeLoanRequest,
  EmployeeLoanResponse,
  UpdateEmployeeLoanRequest,
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
    if (!request.employee_id) {
      const employee: EmployeeResponse = await this.employeeService.get(
        account.id,
      );
      if (!employee) {
        throw new HttpException(`Employee doesn't exists`, 404);
      }
      request.employee_id = employee.id;
    }

    const result = await this.employeeLoanService.create(request);
    return {
      data: result,
    };
  }

  @Get('/:employeeId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Query('date') date?: string,
    @Query('status') status?: string,
  ): Promise<WebResponse<EmployeeLoanResponse[]>> {
    return this.employeeLoanService.get(employeeId, date, status);
  }

  @Patch('/:employeeloanId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('employeeloanId', ParseIntPipe) loanId: number,
    @Body() request: UpdateEmployeeLoanRequest,
  ): Promise<WebResponse<EmployeeLoanResponse>> {
    const result = await this.employeeLoanService.update(loanId, request);
    return {
      data: result,
    };
  }
}
