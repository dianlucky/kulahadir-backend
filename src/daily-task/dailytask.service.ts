import { HttpException, Injectable } from '@nestjs/common';
import { DailyTask } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { DailyTaskRequest, DailyTaskResponse } from 'src/model/dailytask.model';
import { DailyTaskValidation } from './dailytask.validation';

@Injectable()
export class DailyTaskService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  toDailyTaskResponse(task: DailyTask): DailyTaskResponse {
    return {
      id: task.id,
      task: task.task,
    };
  }

  async checkTaskIsExists(id: number) {
    const result = await this.prismaService.dailyTask.findUnique({
      where: {
        id: id,
      },
    });

    if (!result) {
      throw new HttpException('Task is not found', 404);
    }

    return result;
  }

  async create(request: DailyTaskRequest): Promise<DailyTaskResponse> {
    const validatedData = await this.validationService.validate(
      DailyTaskValidation.CREATE,
      request,
    );

    const totalTaskWithSameTask = await this.prismaService.dailyTask.count({
      where: {
        task: validatedData.task,
      },
    });

    if (totalTaskWithSameTask != 0) {
      throw new HttpException('Task already exists!', 404);
    }

    const result = await this.prismaService.dailyTask.create({
      data: validatedData,
    });

    return this.toDailyTaskResponse(result);
  }

  async getAll(): Promise<DailyTaskResponse[]> {
    const results = await this.prismaService.dailyTask.findMany();
    return results.map((result) => this.toDailyTaskResponse(result));
  }

  async get(taskId: number): Promise<DailyTaskResponse> {
    const result = await this.checkTaskIsExists(taskId);
    return this.toDailyTaskResponse(result);
  }

  async update(
    taskId: number,
    request: DailyTaskRequest,
  ): Promise<DailyTaskResponse> {
    await this.checkTaskIsExists(taskId);
    const validatedData = await this.validationService.validate(
      DailyTaskValidation.UPDATE,
      request,
    );

    const result = await this.prismaService.dailyTask.update({
      where: {
        id: taskId,
      },
      data: validatedData,
    });

    return this.toDailyTaskResponse(result);
  }

  async remove(taskId: number): Promise<DailyTaskResponse> {
    await this.checkTaskIsExists(taskId);
    const result = await this.prismaService.dailyTask.delete({
      where: {
        id: taskId,
      },
    });

    return this.toDailyTaskResponse(result);
  }
}
