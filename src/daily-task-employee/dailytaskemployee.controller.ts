import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DailyTaskEmployeeService } from './dailytaskemployee.service';
import { WebResponse } from '../model/web.model';
import {
  CreateDailyTaskEmployeeRequest,
  DailyTaskEmployeeResponse,
} from '../model/dailytaskemployee.model';
import { Auth } from '../common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/daily-task-employees')
export class DailyTaskEmployeeController {
  constructor(private dailyTaskEmployeeService: DailyTaskEmployeeService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateDailyTaskEmployeeRequest,
  ): Promise<WebResponse<DailyTaskEmployeeResponse>> {
    const result = await this.dailyTaskEmployeeService.create(request);
    return {
      data: result,
    };
  }

  @Get('/:taskEmployeeId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('taskEmployeeId', ParseIntPipe) taskEmployeeId: number,
  ): Promise<WebResponse<DailyTaskEmployeeResponse>> {
    const result = await this.dailyTaskEmployeeService.get(taskEmployeeId);
    return {
      data: result,
    };
  }
}
