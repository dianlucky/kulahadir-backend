import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import {
  CreateDailyTaskEmployeeRequest,
  DailyTaskEmployeeResponse,
  UpdateDailyTaskEmployeeRequest,
} from 'src/model/dailytaskemployee.model';
import {
  DailyTask,
  DailyTaskEmployee,
  Employee,
  TaskEmployee,
} from '@prisma/client';
import { DailyTaskEmployeeValidation } from './dailytaskemployee.validation';
import { TaskEmployeeService } from 'src/task-employee/taskemployee.service';

@Injectable()
export class DailyTaskEmployeeService {
  constructor(
    private validationService: ValidationService,
    private prismaService: PrismaService,
    private taskEmployeeService: TaskEmployeeService,
  ) {}

  toDailyTaskEmployeeResponse(
    dailyTaskEmployee: DailyTaskEmployee & {
      task_employee?: TaskEmployee & {
        daily_task?: DailyTask;
        employee?: Employee;
      };
    },
  ): DailyTaskEmployeeResponse {
    return {
      id: dailyTaskEmployee.id,
      status: dailyTaskEmployee.status,
      date: dailyTaskEmployee.date,
      task_employee_id: dailyTaskEmployee.task_employee_id,
      task_employee: dailyTaskEmployee.task_employee
        ? {
            id: dailyTaskEmployee.task_employee.id,
            day: dailyTaskEmployee.task_employee.day,
            employee_id: dailyTaskEmployee.task_employee.employee_id,
            task_id: dailyTaskEmployee.task_employee.task_id,
            task: dailyTaskEmployee.task_employee.daily_task
              ? {
                  id: dailyTaskEmployee.task_employee.daily_task.id,
                  task_code:
                    dailyTaskEmployee.task_employee.daily_task.task_code,
                  task_name:
                    dailyTaskEmployee.task_employee.daily_task.task_name,
                }
              : undefined,
            employee: dailyTaskEmployee.task_employee.employee
              ? {
                  id: dailyTaskEmployee.task_employee.employee.id,
                  name: dailyTaskEmployee.task_employee.employee.name,
                  phone: dailyTaskEmployee.task_employee.employee.phone,
                  birth_date:
                    dailyTaskEmployee.task_employee.employee.birth_date,
                  profile_pic:
                    dailyTaskEmployee.task_employee.employee.profile_pic,
                  created_at:
                    dailyTaskEmployee.task_employee.employee.created_at,
                  account_id:
                    dailyTaskEmployee.task_employee.employee.account_id,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkDailyTaskEmployeeMustExists(taskEmployeeId: number) {
    const result = await this.prismaService.dailyTaskEmployee.findFirst({
      where: {
        id: taskEmployeeId,
      },
      include: {
        task_employee: {
          include: {
            employee: true,
            daily_task: true,
          },
        },
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

    await this.taskEmployeeService.checkTaskEmployeeMustExists(
      validatedData.task_employee_id,
    );

    const result = await this.prismaService.dailyTaskEmployee.create({
      data: validatedData,
      include: {
        task_employee: {
          include: {
            employee: true,
            daily_task: true,
          },
        },
      },
    });

    return this.toDailyTaskEmployeeResponse(result);
  }

  async get(dailyTaskEmployeeId: number): Promise<DailyTaskEmployeeResponse> {
    const result =
      await this.checkDailyTaskEmployeeMustExists(dailyTaskEmployeeId);
    return this.toDailyTaskEmployeeResponse(result);
  }

  async update(
    dailyTaskEmployeeId: number,
    request: UpdateDailyTaskEmployeeRequest,
  ): Promise<DailyTaskEmployeeResponse> {
    const validatedData = await this.validationService.validate(
      DailyTaskEmployeeValidation.UPDATE,
      request,
    );

    await this.checkDailyTaskEmployeeMustExists(dailyTaskEmployeeId);

    const result = await this.prismaService.dailyTaskEmployee.update({
      where: {
        id: dailyTaskEmployeeId,
      },
      include: {
        task_employee: {
          include: {
            employee: true,
            daily_task: true,
          },
        },
      },
      data: validatedData,
    });

    return this.toDailyTaskEmployeeResponse(result);
  }

  async remove(
    dailyTaskEmployeeId: number,
  ): Promise<DailyTaskEmployeeResponse> {
    await this.checkDailyTaskEmployeeMustExists(dailyTaskEmployeeId);

    const result = await this.prismaService.dailyTaskEmployee.delete({
      where: {
        id: dailyTaskEmployeeId,
      },
      include: {
        task_employee: {
          include: {
            employee: true,
            daily_task: true,
          },
        },
      },
    });

    return this.toDailyTaskEmployeeResponse(result);
  }
}
