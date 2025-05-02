import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateEmployeeRequest,
  EmployeeResponse,
  SearchEmployeeRequest,
  UpdateEmployeeRequest,
} from 'src/model/employee.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateEmployeeRequest,
  ): Promise<WebResponse<EmployeeResponse>> {
    if (!request.account_id) {
      request.account_id = account.id;
    }

    const result = await this.employeeService.create(request);
    return {
      data: result,
    };
  }

  @Get('/current')
  @HttpCode(200)
  async get(@Auth() account: Account): Promise<WebResponse<EmployeeResponse>> {
    const result = await this.employeeService.get(account.id);
    return {
      data: result,
    };
  }

  @Get('')
  @HttpCode(200)
  async search(
    @Auth() account: Account,
    @Query('name') name?: string,
    @Query('birth_date') birth_date?: Date,
    @Query('phone') phone?: string,
  ): Promise<WebResponse<EmployeeResponse[]>> {
    const request: SearchEmployeeRequest = {
      name: name,
      birth_date: birth_date,
      phone: phone,
    };

    return this.employeeService.search(request);
  }

  @Patch('/:employeeId')
  @HttpCode(200)
  async update(
    @Auth()
    @Param('employeeId', ParseIntPipe)
    employeeId: number,
    @Body() request: UpdateEmployeeRequest,
  ): Promise<WebResponse<EmployeeResponse>> {
    request.id = employeeId;
    const result = await this.employeeService.update(request);

    return {
      data: result,
    };
  }

  @Delete('/:employeeId')
  @HttpCode(200)
  async remove(
    @Auth()
    @Param('employeeId', ParseIntPipe)
    employeeId: number,
  ): Promise<WebResponse<boolean>> {
    await this.employeeService.remove(employeeId);

    return {
      data: true,
    };
  }
}
