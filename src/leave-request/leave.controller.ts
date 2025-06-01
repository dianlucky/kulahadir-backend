import {
  BadRequestException,
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
import { LeaveService } from './leave.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateLeaveRequest,
  LeaveResponse,
  SearchLeaveRequest,
  UpdateLeaveRequest,
} from 'src/model/leaverequest.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/leaves')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get('/search')
  @HttpCode(200)
  async search(
    @Auth() account: Account,
    @Query('employeeId') employeeId?: string,
    @Query('type') type?: string,
    @Query('status') status?: string,
    @Query('month') month?: string,
  ): Promise<WebResponse<LeaveResponse[]>> {
    const request: SearchLeaveRequest = {
      employeeId: employeeId ? parseInt(employeeId) : undefined,
      type: type,
      status: status,
      month: month,
    };

    return this.leaveService.search(request);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<LeaveResponse[]>> {
    const result = await this.leaveService.getAll();
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
  ): Promise<WebResponse<LeaveResponse[]>> {
    const result = await this.leaveService.getByEmployeeId(employeeId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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
