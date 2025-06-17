import { HttpException, Injectable } from '@nestjs/common';
import { DailyTask, Employee, TaskEmployee } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { DailyTaskService } from 'src/daily-task/dailytask.service';
import {
  CreateTaskEmployeeRequest,
  TaskEmployeeResponse,
  UpdateTaskEmployeeRequest,
} from 'src/model/taskemployee.model';
import { TaskEmployeeValidation } from './taskemployee.validation';

@Injectable()
export class TaskEmployeeService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    // private dailyTaskService: DailyTaskService,
  ) {}

  toTaskEmployeeResponse(
    taskEmployee: TaskEmployee & {
      employee?: Employee;
      daily_task?: DailyTask;
    },
  ): TaskEmployeeResponse {
    return {
      id: taskEmployee.id,
      day: taskEmployee.day,
      task_id: taskEmployee.task_id,
      employee_id: taskEmployee.employee_id,
      task: taskEmployee.daily_task
        ? {
            id: taskEmployee.daily_task.id,
            task_code: taskEmployee.daily_task.task_code,
            task_name: taskEmployee.daily_task.task_name,
          }
        : undefined,
      employee: taskEmployee.employee
        ? {
            id: taskEmployee.employee.id,
            name: taskEmployee.employee.name,
            birth_date: taskEmployee.employee.birth_date,
            phone: taskEmployee.employee.phone,
            profile_pic: taskEmployee.employee.profile_pic,
            account_id: taskEmployee.employee.account_id,
            created_at: taskEmployee.employee.created_at,
          }
        : undefined,
    };
  }

  async checkTaskEmployeeMustExists(taskEmployeeId: number) {
    const result = await this.prismaService.taskEmployee.findFirst({
      where: {
        id: taskEmployeeId,
      },
      include: {
        employee: true,
        daily_task: true,
      },
    });

    if (!result) {
      throw new HttpException('Schedule is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateTaskEmployeeRequest,
  ): Promise<TaskEmployeeResponse> {
    const validatedData = await this.validationService.validate(
      TaskEmployeeValidation.CREATE,
      request,
    );

    const result = await this.prismaService.taskEmployee.create({
      data: validatedData,
    });

    return this.toTaskEmployeeResponse(result);
  }

  async getAll(): Promise<TaskEmployeeResponse[]> {
    const results = await this.prismaService.taskEmployee.findMany({
      include: {
        daily_task: true,
        employee: true,
      },
    });
    return results.map((result) => this.toTaskEmployeeResponse(result));
  }

  async getByDay(day: string): Promise<TaskEmployeeResponse[]> {
    const cleanedDay = day.trim();
    const results = await this.prismaService.taskEmployee.findMany({
      where: {
        day: cleanedDay,
      },
      include: {
        daily_task: true,
        employee: true,
      },
    });
    return results.map((result) => this.toTaskEmployeeResponse(result));
  }

  async get(taskEmployeeId: number): Promise<TaskEmployeeResponse> {
    const result = await this.checkTaskEmployeeMustExists(taskEmployeeId);
    return this.toTaskEmployeeResponse(result);
  }

  async update(
    taskEmployeeId: number,
    request: UpdateTaskEmployeeRequest,
  ): Promise<TaskEmployeeResponse> {
    await this.checkTaskEmployeeMustExists(taskEmployeeId);
    const validatedData = await this.validationService.validate(
      TaskEmployeeValidation.UPDATE,
      request,
    );

    const result = await this.prismaService.taskEmployee.update({
      where: {
        id: taskEmployeeId,
      },
      data: validatedData,
    });

    return this.toTaskEmployeeResponse(result);
  }

  async remove(taskEmployeeId: number): Promise<TaskEmployeeResponse> {
    await this.checkTaskEmployeeMustExists(taskEmployeeId);
    const result = await this.prismaService.taskEmployee.delete({
      where: {
        id: taskEmployeeId,
      },
    });

    return this.toTaskEmployeeResponse(result);
  }
}
