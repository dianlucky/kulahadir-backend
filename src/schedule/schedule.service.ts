import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeService } from '../employee/employee.service';
import {
  CreateScheduleRequest,
  ScheduleResponse,
  UpdateScheduleRequest,
} from '../model/schedule.model';
import { Account, Employee, Level, Schedule } from '@prisma/client';
import { ScheduleValidation } from './schedule.validation';

@Injectable()
export class ScheduleService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toScheduleResponse(
    schedule: Schedule & {
      employee?: Employee & { account?: Account & { level?: Level } };
    },
  ): ScheduleResponse {
    return {
      id: schedule.id,
      date: schedule.date,
      status: schedule.status,
      attendance_status: schedule.attendance_status,
      employee_id: schedule.employee_id,
      employee: schedule.employee
        ? {
            id: schedule.employee.id,
            name: schedule.employee.name,
            birth_date: schedule.employee.birth_date,
            phone: schedule.employee.phone,
            account_id: schedule.employee.account_id,
            account: schedule.employee.account
              ? {
                  id: schedule.employee.account.id,
                  username: schedule.employee.account.username,
                  level_id: schedule.employee.account.level_id,
                  level: schedule.employee.account.level
                    ? {
                        id: schedule.employee.account.level.id,
                        name: schedule.employee.account.level.name,
                      }
                    : undefined,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkScheduleMustExists(scheduleId: number) {
    const result = await this.prismaService.schedule.findFirst({
      where: {
        id: scheduleId,
      },
      include: {
        employee: true,
      },
    });

    if (!result) {
      throw new HttpException('Schedule is not found', 404);
    }

    return result;
  }

  // async create(request: CreateScheduleRequest): Promise<ScheduleResponse> {
  //   const validatedData = await this.validationService.validate(
  //     ScheduleValidation.CREATE,
  //     request,
  //   );

  //   await this.employeeService.checkEmployeeMustExists(
  //     validatedData.employee_id,
  //   );

  //   const result = await this.prismaService.schedule.create({
  //     data: validatedData,
  //   });

  //   return this.toScheduleResponse(result);
  // }

  async create(request: CreateScheduleRequest): Promise<ScheduleResponse[]> {
    const { month, make_schedule } = request;

    if (!make_schedule) {
      throw new BadRequestException('make_schedule must be true');
    }

    // Parsing dan validasi bulan
    const [monthStr, yearStr] = month.split('-');
    const monthNum = parseInt(monthStr, 10);
    const yearNum = parseInt(yearStr, 10);

    if (
      isNaN(monthNum) ||
      isNaN(yearNum) ||
      monthNum < 1 ||
      monthNum > 12 ||
      yearNum < 1000
    ) {
      throw new BadRequestException('Invalid month format, expected MM-YYYY');
    }

    // Ambil semua pegawai
    const employees = await this.prismaService.employee.findMany({
      where: {
        account: {
          level: {
            name: 'pegawai',
          },
        },
      },
      include: {
        account: {
          include: {
            level: true,
          },
        },
      },
    });

    // Generate tanggal dari 1 sampai akhir bulan
    const allDates: Date[] = [];
    const totalDays = new Date(yearNum, monthNum, 0).getDate(); // jumlah hari dalam bulan
    for (let day = 2; day <= totalDays + 1; day++) {
      allDates.push(new Date(yearNum, monthNum - 1, day)); // month - 1 karena JS 0-based
    }

    const createdSchedules: Schedule[] = [];

    for (const employee of employees) {
      for (const date of allDates) {
        const schedule = await this.prismaService.schedule.create({
          data: {
            date: date,
            status: 'on',
            attendance_status: '!check-in',
            employee_id: employee.id,
          },
        });
        createdSchedules.push(schedule);
      }
    }

    return createdSchedules.map(this.toScheduleResponse);
  }

  async findByDate(date: Date): Promise<ScheduleResponse[]> {
    const schedules = await this.prismaService.schedule.findMany({
      where: {
        date: {
          equals: date,
        },
      },
      include: {
        employee: {
          include: {
            account: {
              include: {
                level: true,
              },
            },
          },
        },
      },
    });

    return schedules.map(this.toScheduleResponse);
  }

  async get(scheduleId: number): Promise<ScheduleResponse> {
    const result = await this.checkScheduleMustExists(scheduleId);
    return this.toScheduleResponse(result);
  }

  async update(
    scheduleId: number,
    request: UpdateScheduleRequest,
  ): Promise<ScheduleResponse> {
    const validatedData = await this.validationService.validate(
      ScheduleValidation.UPDATE,
      request,
    );

    await this.checkScheduleMustExists(scheduleId);

    const result = await this.prismaService.schedule.update({
      where: {
        id: scheduleId,
      },
      data: validatedData,
    });

    return this.toScheduleResponse(result);
  }

  

  async remove(scheduleId: number): Promise<ScheduleResponse> {
    await this.checkScheduleMustExists(scheduleId);
    const result = await this.prismaService.schedule.delete({
      where: {
        id: scheduleId,
      },
    });

    return this.toScheduleResponse(result);
  }
}
