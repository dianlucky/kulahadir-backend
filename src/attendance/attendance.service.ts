import { HttpException, Injectable } from '@nestjs/common';
import { Attendance, Employee, Schedule } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  AttendanceResponse,
  CheckInRequest,
  CheckOutRequest,
  UpdateAttendanceRequest,
} from 'src/model/attendance.model';
import { ScheduleService } from 'src/schedule/schedule.service';
import { AttendanceValidation } from './attendance.validation';
import { validate } from 'uuid';
import { endOfMonth, startOfMonth } from 'date-fns';

@Injectable()
export class AttendanceService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private scheduleService: ScheduleService,
  ) {}

  toAttendanceResponse(
    attendance: Attendance & { schedule?: Schedule & { employee?: Employee } },
  ): AttendanceResponse {
    return {
      id: attendance.id,
      check_in: attendance.check_in,
      check_out: attendance.check_out || undefined,
      status: attendance.status || undefined,
      attendance_long: attendance.attendance_long,
      attendance_lat: attendance.attendance_lat,
      schedule_id: attendance.schedule_id,
      schedule: attendance.schedule
        ? {
            id: attendance.schedule.id,
            date: attendance.schedule.date,
            status: attendance.schedule.status,
            attendance_status: attendance.schedule.attendance_status,
            shift_code: attendance.schedule.shift_code,
            start_time: attendance.schedule.start_time,
            end_time: attendance.schedule.end_time,
            employee_id: attendance.schedule.employee_id,
            employee: attendance.schedule.employee
              ? {
                  id: attendance.schedule.employee.id,
                  name: attendance.schedule.employee.name,
                  phone: attendance.schedule.employee.phone,
                  profile_pic: attendance.schedule.employee.profile_pic,
                  created_at: attendance.schedule.employee.created_at,
                  account_id: attendance.schedule.employee.account_id,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkAttendanceMustExist(attendanceId: number) {
    const result = await this.prismaService.attendance.findFirst({
      where: {
        id: attendanceId,
      },
    });

    if (!result) {
      throw new HttpException('Attendance is not found', 404);
    }

    return result;
  }

  async checkIn(request: CheckInRequest): Promise<AttendanceResponse> {
    const validatedData = await this.validationService.validate(
      AttendanceValidation.CHECKOUT,
      request,
    );
    await this.scheduleService.checkScheduleMustExists(request.schedule_id);
    validatedData.status = 'checked_in';
    const result = await this.prismaService.attendance.create({
      data: validatedData,
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });

    if (result) {
      await this.prismaService.schedule.update({
        where: {
          id: validatedData.schedule_id,
        },
        data: {
          attendance_status: 'working',
        },
      });
    }

    return this.toAttendanceResponse(result);
  }

  async checkOut(
    attendanceId: number,
    request: CheckOutRequest,
  ): Promise<AttendanceResponse> {
    const validatedData = await this.validationService.validate(
      AttendanceValidation.CHECKOUT,
      request,
    );

    await this.checkAttendanceMustExist(attendanceId);

    const result = await this.prismaService.attendance.update({
      where: {
        id: attendanceId,
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
      data: validatedData,
    });

    if (result) {
      await this.prismaService.schedule.update({
        where: {
          id: validatedData.schedule_id,
        },
        data: {
          attendance_status: 'present',
        },
      });
    }

    return this.toAttendanceResponse(result);
  }

  async getByScheduleId(
    scheduleId: number,
  ): Promise<AttendanceResponse | null> {
    const result = await this.prismaService.attendance.findFirst({
      where: {
        schedule_id: scheduleId,
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });

    if (!result) {
      return null;
    }

    return this.toAttendanceResponse(result);
  }

  async getByMonthEmployeeId(
    month: Date,
    employeeId: number,
  ): Promise<AttendanceResponse[]> {
    const start = startOfMonth(month);
    const end = endOfMonth(month);

    const results = await this.prismaService.attendance.findMany({
      where: {
        schedule: {
          date: {
            gte: start,
            lte: end,
          },
          employee_id: employeeId,
        },
      },
      include: {
        schedule: true,
      },
    });

    if (results.length == 0) {
      return [];
    }

    return results.map((result) => this.toAttendanceResponse(result));
  }

  async getByDateEmployeeId(
    date: Date,
    employeeId: number,
  ): Promise<AttendanceResponse | null> {
    const result = await this.prismaService.attendance.findFirst({
      where: {
        schedule: {
          date: date,
          employee_id: employeeId,
        },
      },
      include: {
        schedule: true,
      },
    });

    if (!result) {
      return null;
    }
    return this.toAttendanceResponse(result);
  }

  async get(attendanceId: number): Promise<AttendanceResponse> {
    const result = await this.checkAttendanceMustExist(attendanceId);
    return this.toAttendanceResponse(result);
  }

  async remove(attendanceId: number): Promise<AttendanceResponse> {
    await this.checkAttendanceMustExist(attendanceId);
    const result = await this.prismaService.attendance.delete({
      where: {
        id: attendanceId,
      },
    });

    return this.toAttendanceResponse(result);
  }
}
