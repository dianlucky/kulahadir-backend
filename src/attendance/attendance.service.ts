import { HttpException, Injectable } from '@nestjs/common';
import { Attendance, Employee, Schedule } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  AttendanceResponse,
  CreateAttendanceRequest,
  UpdateAttendanceRequest,
} from 'src/model/attendance.model';
import { ScheduleService } from 'src/schedule/schedule.service';
import { AttendanceValidation } from './attendance.validation';
import { validate } from 'uuid';

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
      schedule_id: attendance.schedule_id,
      schedule: attendance.schedule
        ? {
            id: attendance.schedule.id,
            date: attendance.schedule.date,
            status: attendance.schedule.status,
            attendance_status: attendance.schedule.attendance_status,
            employee_id: attendance.schedule.employee_id,
            employee: attendance.schedule.employee
              ? {
                  id: attendance.schedule.employee.id,
                  name: attendance.schedule.employee.name,
                  phone: attendance.schedule.employee.phone,
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

  async create(request: CreateAttendanceRequest): Promise<AttendanceResponse> {
    const validatedData = await this.validationService.validate(
      AttendanceValidation.CREATE,
      request,
    );
    await this.scheduleService.checkScheduleMustExists(request.schedule_id);

    const result = await this.prismaService.attendance.create({
      data: validatedData,
    });

    return this.toAttendanceResponse(result);
  }

  async get(attendanceId: number): Promise<AttendanceResponse> {
    const result = await this.checkAttendanceMustExist(attendanceId);
    return this.toAttendanceResponse(result);
  }

  async update(
    attendaceId: number,
    request: UpdateAttendanceRequest,
  ): Promise<AttendanceResponse> {
    const validatedData = await this.validationService.validate(
      AttendanceValidation.UPDATE,
      request,
    );

    await this.checkAttendanceMustExist(validatedData.id);
    await this.scheduleService.checkScheduleMustExists(
      validatedData.schedule_id,
    );

    const result = await this.prismaService.attendance.update({
      where: {
        id: attendaceId,
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
