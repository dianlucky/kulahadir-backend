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
import { endOfDay, startOfDay } from 'date-fns';

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
  ): Promise<DailyTaskEmployeeResponse[]> {
    const validatedData = await this.validationService.validate(
      DailyTaskEmployeeValidation.CREATE,
      request,
    );

    const { month, make_task } = validatedData;

    if (!make_task) {
      throw new HttpException('make_schedule harus bernilai true.', 404);
    }

    // Ambil semua data TaskEmployee
    const allTaskEmployees = await this.prismaService.taskEmployee.findMany({
      include: {
        employee: true,
        daily_task: true,
      },
    });

    const [year, monthNum] = month.split('-').map(Number);
    const daysInMonth = new Date(year, monthNum, 0).getDate();

    const createdDailyTasks: DailyTaskEmployee[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, monthNum - 1, day); // FIXED

      const dayName = currentDate.toLocaleDateString('id-ID', {
        weekday: 'long',
      });

      for (const taskEmployee of allTaskEmployees) {
        if (taskEmployee.day.toLowerCase() === dayName.toLowerCase()) {
          const newEntry = await this.prismaService.dailyTaskEmployee.create({
            data: {
              status: 'Belum',
              date: currentDate,
              task_employee_id: taskEmployee.id,
            },
          });
          createdDailyTasks.push(newEntry);
        }
      }
    }

    const result = await this.prismaService.dailyTaskEmployee.findMany({
      where: {
        id: { in: createdDailyTasks.map((t) => t.id) },
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

    return result.map(this.toDailyTaskEmployeeResponse);
  }

  async getByDateEmployeeId(
    date: Date,
    employeeId: number,
  ): Promise<DailyTaskEmployeeResponse[]> {
    const results = await this.prismaService.dailyTaskEmployee.findMany({
      where: {
        date: {
          gte: startOfDay(date),
          lt: endOfDay(date),
        },
        task_employee: {
          employee_id: employeeId,
        },
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

    if (!results) {
      return [];
    }

    return results.map((result) => this.toDailyTaskEmployeeResponse(result));
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
