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
} from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { SalaryDeductionService } from './salarydeduction.service';
import { WebResponse } from '../model/web.model';
import {
  CreateSalaryDeductionRequest,
  SalaryDeductionResponse,
  UpdateSalaryDeductionRequest,
} from '../model/salarydeduction.model';
import { Auth } from '../common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/salary-deductions')
export class SalaryDeductionController {
  constructor(
    private employeeService: EmployeeService,
    private salaryDeductionService: SalaryDeductionService,
  ) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateSalaryDeductionRequest,
  ): Promise<WebResponse<SalaryDeductionResponse>> {
    const result = await this.salaryDeductionService.create(request);

    return {
      data: result,
    };
  }

  @Get('/:salarydeductionId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('salarydeductionId', ParseIntPipe) deductionId: number,
  ): Promise<WebResponse<SalaryDeductionResponse>> {
    const result = await this.salaryDeductionService.get(deductionId);

    return {
      data: result,
    };
  }

  @Patch('/:salarydeductionId')
  @HttpCode(200)
  async update(
    @Auth()
    @Param('salarydeductionId', ParseIntPipe)
    deductionId: number,
    @Body() request: UpdateSalaryDeductionRequest,
  ): Promise<WebResponse<SalaryDeductionResponse>> {
    request.id = deductionId;

    const result = await this.salaryDeductionService.update(
      deductionId,
      request,
    );

    return {
      data: result,
    };
  }

  @Delete('/:salarydeductionId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('salarydeductionId', ParseIntPipe) deductionId: number,
  ): Promise<WebResponse<boolean>> {
    const result = await this.salaryDeductionService.remove(deductionId);

    return {
      data: true,
    };
  }
}
