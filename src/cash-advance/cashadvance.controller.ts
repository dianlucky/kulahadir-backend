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
import { CashAdvanceService } from './cashadvance.service';
import { Auth } from 'src/common/auth.decorator';
import { WebResponse } from 'src/model/web.model';
import { Account } from '@prisma/client';
import {
  CashAdvanceResponse,
  CreateCashAdvanceRequest,
  UpdateCashAdvanceRequest,
} from 'src/model/cashadvance.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/cash-advances')
export class CashAdvanceController {
  constructor(private cashAdvanceService: CashAdvanceService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateCashAdvanceRequest,
  ): Promise<WebResponse<CashAdvanceResponse>> {
    const result = await this.cashAdvanceService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<CashAdvanceResponse[]>> {
    const result = await this.cashAdvanceService.getAll();
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
  ): Promise<WebResponse<CashAdvanceResponse[]>> {
    const result = await this.cashAdvanceService.getByMonthEmployeeId(
      new Date(month),
      employeeId,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-employee')
  @HttpCode(200)
  async getByEmployeeId(
    @Auth() account: Account,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<CashAdvanceResponse[]>> {
    const result = await this.cashAdvanceService.getByEmployeeId(employeeId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:cashAdvanceId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('cashAdvanceId', ParseIntPipe) cashAdvanceId: number,
  ): Promise<WebResponse<CashAdvanceResponse>> {
    const result = await this.cashAdvanceService.get(account.id);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:cashAdvanceId')
  @HttpCode(200)
  async update(
    @Auth()
    @Param('cashAdvanceId', ParseIntPipe)
    cashAdvanceId: number,
    @Body() request: UpdateCashAdvanceRequest,
  ): Promise<WebResponse<CashAdvanceResponse>> {
    request.id = cashAdvanceId;
    const result = await this.cashAdvanceService.update(cashAdvanceId, request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:cashAdvanceId')
  @HttpCode(200)
  async remove(
    @Auth()
    @Param('cashAdvanceId', ParseIntPipe)
    cashAdvanceId: number,
  ): Promise<WebResponse<boolean>> {
    await this.cashAdvanceService.remove(cashAdvanceId);
    return {
      data: true,
    };
  }
}
