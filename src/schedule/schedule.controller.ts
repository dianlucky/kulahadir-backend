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
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateScheduleRequest,
  ScheduleResponse,
  UpdateScheduleRequest,
} from 'src/model/schedule.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/schedules')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateScheduleRequest,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.create(request);
    return { data: result };
  }

  @Get('/by-date')
  async getByDate(
    @Auth() account: Account,
    @Query('date') date: string,
  ): Promise<WebResponse<ScheduleResponse[]>> {
    const result = await this.scheduleService.getByDate(new Date(date));
    return { data: result };
  }

  @Get('/by-month')
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

  @Get()
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
