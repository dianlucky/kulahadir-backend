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
import { LeaveService } from './leave.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateLeaveRequest,
  LeaveResponse,
  UpdateLeaveRequest,
} from 'src/model/leave.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';

@Controller('/api/leaves')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateLeaveRequest,
  ): Promise<WebResponse<LeaveResponse>> {
    const result = await this.leaveService.create(request);
    return {
      data: result,
    };
  }

  @Get('/:leaveId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
  ): Promise<WebResponse<LeaveResponse>> {
    const result = await this.leaveService.get(leaveId);
    return {
      data: result,
    };
  }

  @Patch('/:leaveId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
    @Body() request: UpdateLeaveRequest,
  ): Promise<WebResponse<LeaveResponse>> {
    request.id = leaveId;
    const result = await this.leaveService.update(leaveId, request);
    return {
      data: result,
    };
  }

  @Delete('/:leaveId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
  ): Promise<WebResponse<boolean>> {
    const result = await this.leaveService.remove(leaveId);
    return {
      data: true,
    };
  }
}
