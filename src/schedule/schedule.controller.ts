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
