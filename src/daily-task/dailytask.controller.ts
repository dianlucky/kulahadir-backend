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
import { DailyTaskService } from './dailytask.service';
import { WebResponse } from '../model/web.model';
import { DailyTaskRequest, DailyTaskResponse } from '../model/dailytask.model';
import { Auth } from '../common/auth.decorator';
import { Account } from '@prisma/client';

@Controller('/api/daily-tasks')
export class DailyTaskController {
  constructor(private dailyTaskService: DailyTaskService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: DailyTaskRequest,
  ): Promise<WebResponse<DailyTaskResponse>> {
    const result = await this.dailyTaskService.create(request);
    return {
      data: result,
    };
  }

  @Get('/:taskId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('taskId', ParseIntPipe) taskId: number,
  ): Promise<WebResponse<DailyTaskResponse>> {
    const result = await this.dailyTaskService.get(taskId);
    return {
      data: result,
    };
  }

  @Patch('/:taskId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('taskId', ParseIntPipe) taskId: number,
    @Body() request: DailyTaskRequest,
  ): Promise<WebResponse<DailyTaskResponse>> {
    const result = await this.dailyTaskService.update(taskId, request);
    return {
      data: result,
    };
  }

  @Delete('/:taskId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('taskId', ParseIntPipe) taskId: number,
  ): Promise<WebResponse<boolean>> {
    await this.dailyTaskService.remove(taskId);
    return {
      data: true,
    };
  }
}
