import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { DailyTaskService } from '../daily-task/dailytask.service';
import { EmployeeService } from '../employee/employee.service';
import {
  CreateDailyTaskEmployeeRequest,
  DailyTaskEmployeeResponse,
} from 'src/model/dailytaskemployee.model';
import { DailyTask, DailyTaskEmployee, Employee } from '@prisma/client';
import { DailyTaskEmployeeValidation } from './dailytaskemployee.validation';

@Injectable()
export class DailyTaskEmployeeService {
  constructor(
    private validationService: ValidationService,
    private prismaService: PrismaService,
    private employeeService: EmployeeService,
    private dailyTaskService: DailyTaskService,
  ) {}

  toDailyTaskEmployeeResponse(
    dailyTaskEmployee: DailyTaskEmployee & {
      employee?: Employee;
      dailyTask?: DailyTask;
    },
  ): DailyTaskEmployeeResponse {
    return {
      id: dailyTaskEmployee.id,
      day: dailyTaskEmployee.day,
      task_id: dailyTaskEmployee.task_id,
      dailyTask: dailyTaskEmployee.dailyTask
        ? {
            id: dailyTaskEmployee.dailyTask.id,
            task: dailyTaskEmployee.dailyTask.task,
          }
        : undefined,
      employee_id: dailyTaskEmployee.employee_id,
      employee: dailyTaskEmployee.employee
        ? {
            id: dailyTaskEmployee.employee.id,
            name: dailyTaskEmployee.employee.name,
            birth_date: dailyTaskEmployee.employee.birth_date,
            phone: dailyTaskEmployee.employee.phone,
            account_id: dailyTaskEmployee.employee.account_id,
          }
        : undefined,
    };
  }

  async checkTaskEmployeeMustExists(taskEmployeeId: number) {
    const result = await this.prismaService.dailyTaskEmployee.findFirst({
      where: {
        id: taskEmployeeId,
      },
      include: {
        employee: true,
        dailytask: true,
      },
    });

    if (!result) {
      throw new HttpException('Employee task is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateDailyTaskEmployeeRequest,
  ): Promise<DailyTaskEmployeeResponse> {
    const validatedData = await this.validationService.validate(
      DailyTaskEmployeeValidation.CREATE,
      request,
    );

    const result = await this.prismaService.dailyTaskEmployee.create({
      data: validatedData,
    });

    return this.toDailyTaskEmployeeResponse(result);
  }

  async get(taskEmployeeId: number): Promise<DailyTaskEmployeeResponse> {
    const result = await this.checkTaskEmployeeMustExists(taskEmployeeId);
    return this.toDailyTaskEmployeeResponse(result);
  }

}
