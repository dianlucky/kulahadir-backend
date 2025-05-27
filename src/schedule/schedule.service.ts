import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeService } from '../employee/employee.service';
import {
  CreateScheduleRequest,
  ScheduleResponse,
  UpdateScheduleRequest,
} from '../model/schedule.model';
import { Account, Employee, Schedule } from '@prisma/client';
import { ScheduleValidation } from './schedule.validation';
import { endOfMonth, startOfMonth } from 'date-fns';
import e from 'express';

@Injectable()
export class ScheduleService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toScheduleResponse(
    schedule: Schedule & {
      employee?: Employee & { account?: Account };
    },
  ): ScheduleResponse {
    return {
      id: schedule.id,
      date: schedule.date,
      status: schedule.status,
      attendance_status: schedule.attendance_status,
      shift_code: schedule.shift_code,
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      employee_id: schedule.employee_id,
      employee: schedule.employee
        ? {
            id: schedule.employee.id,
            name: schedule.employee.name,
            birth_date: schedule.employee.birth_date,
            phone: schedule.employee.phone,
            profile_pic: schedule.employee.profile_pic,
            account_id: schedule.employee.account_id,
            created_at: schedule.employee.created_at,
            account: schedule.employee.account
              ? {
                  id: schedule.employee.account.id,
                  username: schedule.employee.account.username,
                  level: schedule.employee.account.level,
                  status: schedule.employee.account.status,
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

  async create(request: CreateScheduleRequest): Promise<ScheduleResponse[]> {
    const { month, make_schedule } = request;

    if (!make_schedule) {
      throw new BadRequestException('make_schedule must be true');
    }

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

    // Ambil pegawai dengan status tertentu
    const employees = await this.prismaService.employee.findMany({
      where: {
        account: {
          AND: [
            {
              status: {
                in: ['pegawai tetap', 'part time'],
              },
            },
            {
              level: 'pegawai',
            },
          ],
        },
      },
      include: {
        account: true, // relasi ke tabel Employee
      },
    });

    // Buat semua tanggal dalam bulan
    const allDates: Date[] = [];
    const totalDays = new Date(yearNum, monthNum, 0).getDate();
    for (let day = 1; day <= totalDays; day++) {
      allDates.push(new Date(yearNum, monthNum - 1, day + 1));
    }

    const createdSchedules: Schedule[] = [];

    for (const employee of employees) {
      const isPartTime = employee.account.status.toLowerCase() === 'part time';

      // Filter tanggal hanya Jumat, Sabtu, Minggu untuk part time
      const filteredDates = isPartTime
        ? allDates.filter((date) => {
            const day = date.getDay();
            return day === 1 || day === 6 || day === 0;
          })
        : allDates;

      for (const date of filteredDates) {
        const schedule = await this.prismaService.schedule.create({
          data: {
            date: date,
            status: 'on',
            attendance_status: 'belum hadir',
            shift_code: isPartTime ? 'SF2' : 'SF1',
            start_time: '16:00',
            end_time: '01:00',
            employee_id: employee.id,
          },
        });

        createdSchedules.push(schedule);
      }
    }

    return createdSchedules.map(this.toScheduleResponse);
  }

  async getByDate(date: Date): Promise<ScheduleResponse[]> {
    const schedules = await this.prismaService.schedule.findMany({
      where: {
        date: {
          equals: date,
        },
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    return schedules.map(this.toScheduleResponse);
  }

  async getByMonthEmployeeId(
    month: Date,
    employeeId: number,
  ): Promise<ScheduleResponse[]> {
    const start = startOfMonth(month); // 2025-05-01T00:00:00.000Z
    const end = endOfMonth(month); // 2025-05-31T23:59:59.999Z

    const schedules = await this.prismaService.schedule.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
        employee_id: employeeId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    if (schedules.length == 0) {
      return [];
    }

    return schedules.map(this.toScheduleResponse);
  }

  async getByDateEmployeeId(
    employeeId: number,
    date: Date,
  ): Promise<ScheduleResponse> {
    const result = await this.prismaService.schedule.findFirst({
      where: {
        employee_id: employeeId,
        date: {
          equals: date,
        },
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    if (!result) {
      throw new HttpException('Schedule is not found', 404);
    }

    return this.toScheduleResponse(result);
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
