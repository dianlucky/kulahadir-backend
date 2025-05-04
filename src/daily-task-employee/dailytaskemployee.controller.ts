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
import { DailyTaskEmployeeService } from './dailytaskemployee.service';
import { WebResponse } from '../model/web.model';
import {
  CreateDailyTaskEmployeeRequest,
  DailyTaskEmployeeResponse,
  UpdateDailyTaskEmployeeRequest,
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

  @Patch('/:taskEmployeeId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('taskEmployeeId', ParseIntPipe) taskEmployeeId: number,
    @Body() request: UpdateDailyTaskEmployeeRequest,
  ): Promise<WebResponse<DailyTaskEmployeeResponse>> {
    request.id = taskEmployeeId;
    const result = await this.dailyTaskEmployeeService.update(
      taskEmployeeId,
      request,
    );

    return {
      data: result,
    };
  }

  @Delete('/:taskEmployeeId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('taskEmployeeId', ParseIntPipe) taskEmployeeId: number,
  ): Promise<WebResponse<boolean>> {
    await this.dailyTaskEmployeeService.remove(taskEmployeeId);

    return {
      data: true,
    };
  }
}
