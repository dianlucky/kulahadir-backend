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
import { endOfMonth, format, startOfMonth } from 'date-fns';
import { NotificationService } from 'src/notification/notification.service';
import { id } from 'date-fns/locale';

@Injectable()
export class AttendanceService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private scheduleService: ScheduleService,
    private notificationService: NotificationService,
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
      snapshot: attendance.snapshot,
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
    await this.scheduleService.checkScheduleMustExists(request.schedule_id);

    // 1. Ambil schedule dari DB
    const schedule = await this.prismaService.schedule.findUnique({
      where: { id: request.schedule_id },
    });

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    const startTimeStr = schedule.start_time;
    const today = new Date();
    const [hours, minutes] = startTimeStr.split(':').map(Number);

    const startTime = new Date(today);
    startTime.setHours(hours, minutes, 0, 0);

    const checkInTime = new Date(request.check_in);

    const attendanceStatus = checkInTime > startTime ? 'Late' : 'Working';

    const data = {
      ...request,
      status: 'Working',
    };

    const result = await this.prismaService.attendance.create({
      data,
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
          id: request.schedule_id,
        },
        data: {
          attendance_status: attendanceStatus,
        },
      });
    }

    if (result && attendanceStatus == 'Late') {
      const dataNotification = {
        employee_id: result.schedule.employee_id,
        type: 'Absensi',
        message: `Halo Kulateam, sepertinya Anda terlambat hari ini (Jam check in ${format(result.check_in, 'HH:mm', { locale: id })}). Mohon untuk lebih memperhatikan kedisiplinan, karena hal ini dapat memengaruhi penilaian owner terhadap kinerja Anda`,
        was_read: false,
        created_at: new Date(),
      };
      await this.notificationService.create(dataNotification);

      const targetEmployees = await this.prismaService.employee.findMany({
        where: {
          account: {
            level: {
              in: ['Owner', 'Admin'],
            },
          },
        },
        include: {
          account: true,
        },
      });

      const notifyAdmins = targetEmployees.map((admin) =>
        this.notificationService.create({
          employee_id: admin.id,
          type: `Pengajuan baru`,
          message: `Sepertinya pegawai anda (${result.schedule.employee.name}) terlambat hari ini (Jam check in ${format(result.check_in, 'HH:mm', { locale: id })}).`,
          was_read: false,
          created_at: new Date(),
        }),
      );

      await Promise.all(notifyAdmins);
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

    const data = {
      ...validatedData,
      status: 'Done',
    };
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
      data: data,
    });

    if (result) {
      await this.prismaService.schedule.update({
        where: {
          id: validatedData.schedule_id,
        },
        data: {
          attendance_status:
            result.schedule.attendance_status == 'Late' ? 'Late' : 'Present',
        },
      });

      const dataNotification = {
        employee_id: result.schedule.employee_id,
        type: 'Absensi',
        message: `Terima kasih telah melakukan absensi hari ini. Tetap semangat, dan mohon untuk selalu menjaga kedisiplinan. Silakan beristirahat, dan tetap jaga semangat Anda!`,
        was_read: false,
        created_at: new Date(),
      };
      await this.notificationService.create(dataNotification);
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

  async getByMonth(month: Date): Promise<AttendanceResponse[]> {
    const start = startOfMonth(month);
    const end = endOfMonth(month);

    const results = await this.prismaService.attendance.findMany({
      where: {
        schedule: {
          date: {
            gte: start,
            lte: end,
          },
        },
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
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

  async getByDateAll(date: Date): Promise<AttendanceResponse[]> {
    const results = await this.prismaService.attendance.findMany({
      where: {
        schedule: {
          date: date,
        },
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });

    if (!results) {
      return [];
    }
    return results.map((result) => this.toAttendanceResponse(result));
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
