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
  UseGuards,
} from '@nestjs/common';
import { DailyTaskService } from './dailytask.service';
import { WebResponse } from '../model/web.model';
import {
  CreateDailyTaskRequest,
  DailyTaskResponse,
  UpdateDailyTaskRequest,
} from '../model/dailytask.model';
import { Auth } from '../common/auth.decorator';
import { Account } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/daily-tasks')
export class DailyTaskController {
  constructor(private dailyTaskService: DailyTaskService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateDailyTaskRequest,
  ): Promise<WebResponse<DailyTaskResponse>> {
    const result = await this.dailyTaskService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<DailyTaskResponse[]>> {
    const result = await this.dailyTaskService.getAll();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Patch('/:taskId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('taskId', ParseIntPipe) taskId: number,
    @Body() request: UpdateDailyTaskRequest,
  ): Promise<WebResponse<DailyTaskResponse>> {
    const result = await this.dailyTaskService.update(taskId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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
