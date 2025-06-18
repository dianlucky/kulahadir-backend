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
  Query,
  UseGuards,
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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/daily-task-employees')
export class DailyTaskEmployeeController {
  constructor(private dailyTaskEmployeeService: DailyTaskEmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateDailyTaskEmployeeRequest,
  ): Promise<WebResponse<DailyTaskEmployeeResponse[]>> {
    const result = await this.dailyTaskEmployeeService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-date')
  @HttpCode(200)
  async getByDateEmployeeId(
    @Auth() account: Account,
    @Query('date') date: string,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<DailyTaskEmployeeResponse[]>> {
    const newDate = new Date(date);
    const result = await this.dailyTaskEmployeeService.getByDateEmployeeId(
      newDate,
      employeeId,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-date-all')
  @HttpCode(200)
  async getByDate(
    @Auth() account: Account,
    @Query('date') date: string,
  ): Promise<WebResponse<DailyTaskEmployeeResponse[]>> {
    const newDate = new Date(date);
    const result = await this.dailyTaskEmployeeService.getByDate(newDate);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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
