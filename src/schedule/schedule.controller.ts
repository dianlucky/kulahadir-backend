import {
  Body,
  Controller,
  DefaultValuePipe,
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
import { ScheduleService } from './schedule.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateScheduleRequest,
  ScheduleResponse,
  UpdateByDateEmployeeIdRequest,
  UpdateScheduleRequest,
} from 'src/model/schedule.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/schedules')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateScheduleRequest,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.create(request);
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-date')
  @HttpCode(200)
  async getByDate(
    @Auth() account: Account,
    @Query('date') date: string,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.getByDate(new Date(date));
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-date-status')
  @HttpCode(200)
  async getByDateStatus(
    @Auth() account: Account,
    @Query('date') date: string,
    @Query('status') status: string,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.getByDateStatus(
      new Date(date),
      status,
    );
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-month')
  @HttpCode(200)
  async getByMonthEmployeeId(
    @Auth() account: Account,
    @Query('month') month: string,
    @Query('employeeId', ParseIntPipe)
    employeeId: number,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.getByMonthEmployeeId(
      new Date(month),
      employeeId,
    );
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-month-all')
  @HttpCode(200)
  async getByMonthAll(
    @Auth() account: Account,
    @Query('month') month: string,
    employeeId: number,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.getByMonthAll(new Date(month));
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getByDateEmployeeId(
    @Auth() account: Account,
    @Query('employeeId', ParseIntPipe)
    employeeId: number,
    @Query('date') date: string,
  ): Promise<WebResponse<ScheduleResponse>> {
    const result = await this.scheduleService.getByDateEmployeeId(
      employeeId,
      new Date(date),
    );
    return { data: result };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:scheduleId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('scheduleId', ParseIntPipe) scheduleId: number,
  ): Promise<WebResponse<ScheduleResponse>> {
    const result = await this.scheduleService.get(scheduleId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/by-date')
  @HttpCode(200)
  async updateByDateEmployeeId(
    @Auth() account: Account,
    @Body() request: UpdateByDateEmployeeIdRequest,
  ): Promise<WebResponse<ScheduleResponse>> {
    const result = await this.scheduleService.updateByDateEmployeeId(
      request.date,
      request,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:scheduleId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('scheduleId', ParseIntPipe) scheduleId: number,
    @Body() request: UpdateScheduleRequest,
  ): Promise<WebResponse<ScheduleResponse>> {
    request.id = scheduleId;
    const result = await this.scheduleService.update(scheduleId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:scheduleId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('scheduleId', ParseIntPipe) scheduleId: number,
  ): Promise<WebResponse<boolean>> {
    await this.scheduleService.remove(scheduleId);
    return {
      data: true,
    };
  }
}
