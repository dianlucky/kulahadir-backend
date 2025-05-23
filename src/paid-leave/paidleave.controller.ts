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
import { PaidLeaveService } from './paidleave.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreatePaidLeaveRequest,
  PaidLeaveResponse,
  UpdatePaidLeaveRequest,
} from 'src/model/paidleave.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/paid-leaves')
export class PaidLeaveController {
  constructor(private paidLeaveService: PaidLeaveService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreatePaidLeaveRequest,
  ): Promise<WebResponse<PaidLeaveResponse>> {
    const result = await this.paidLeaveService.create(request);
    return {
      data: result,
    };
  }

  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<PaidLeaveResponse[]>> {
    const result = await this.paidLeaveService.getAll();
    return {
      data: result,
    };
  }

  @Get('/:paidLeaveId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('paidLeaveId', ParseIntPipe) paidLeaveId: number,
  ): Promise<WebResponse<PaidLeaveResponse>> {
    const result = await this.paidLeaveService.get(paidLeaveId);
    return {
      data: result,
    };
  }

  @Patch('/:paidLeaveId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('paidLeaveId', ParseIntPipe) paidLeaveId: number,
    @Body() request: UpdatePaidLeaveRequest,
  ): Promise<WebResponse<PaidLeaveResponse>> {
    request.id = paidLeaveId;
    const result = await this.paidLeaveService.update(paidLeaveId, request);
    return {
      data: result,
    };
  }

  @Delete('/:paidLeaveId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('paidLeaveId', ParseIntPipe) paidLeaveId: number,
  ): Promise<WebResponse<boolean>> {
    const result = await this.paidLeaveService.remove(paidLeaveId);
    return {
      data: true,
    };
  }
}
