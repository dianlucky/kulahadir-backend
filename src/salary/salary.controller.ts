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
  UseGuards,
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateSalaryRequest,
  SalaryResponse,
  UpdateSalaryRequest,
} from 'src/model/salary.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { format } from 'date-fns';

@Controller('/api/salaries')
export class SalaryController {
  constructor(private salaryService: SalaryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateSalaryRequest,
  ): Promise<WebResponse<SalaryResponse>> {
    const result = await this.salaryService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-month')
  @HttpCode(200)
  async getByMonthEmployeeId(
    @Auth() account: Account,
    @Query('month') month: string,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<SalaryResponse | null>> {
    const result = await this.salaryService.getByMonthEmployeeId(
      new Date(month),
      employeeId,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:salaryId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
  ): Promise<WebResponse<SalaryResponse>> {
    const result = await this.salaryService.get(salaryId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:salaryId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
    @Body() request: UpdateSalaryRequest,
  ): Promise<WebResponse<SalaryResponse>> {
    request.id = salaryId;
    const result = await this.salaryService.update(salaryId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:salaryId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
  ): Promise<WebResponse<boolean>> {
    await this.salaryService.remove(salaryId);
    return {
      data: true,
    };
  }
}
