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
import { TaskEmployeeService } from './taskemployee.service';
import { Auth } from '../common/auth.decorator';
import { Account } from '@prisma/client';
import {
  CreateTaskEmployeeRequest,
  TaskEmployeeResponse,
  UpdateTaskEmployeeRequest,
} from 'src/model/taskemployee.model';
import { WebResponse } from 'src/model/web.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/task-employees')
export class TaskEmployeeController {
  constructor(private taskEmployeeService: TaskEmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateTaskEmployeeRequest,
  ): Promise<WebResponse<TaskEmployeeResponse>> {
    const result = await this.taskEmployeeService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getByDay(
    @Auth() account: Account,
    @Query('day') day: string,
  ): Promise<WebResponse<TaskEmployeeResponse[]>> {
    console.log('Diterima:', day); // Tambahkan ini
    const result = await this.taskEmployeeService.getByDay(day);
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
  ): Promise<WebResponse<TaskEmployeeResponse>> {
    const result = await this.taskEmployeeService.get(taskEmployeeId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<TaskEmployeeResponse[]>> {
    const result = await this.taskEmployeeService.getAll();
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
    @Body() request: UpdateTaskEmployeeRequest,
  ): Promise<WebResponse<TaskEmployeeResponse>> {
    const result = await this.taskEmployeeService.update(
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
    await this.taskEmployeeService.remove(taskEmployeeId);
    return {
      data: true,
    };
  }
}
