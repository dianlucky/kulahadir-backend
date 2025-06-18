import { HttpException, Injectable } from '@nestjs/common';
import { Account, Employee, LeaveRequest, Schedule } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateLeaveRequest,
  LeaveResponse,
  SearchLeaveRequest,
  UpdateLeaveRequest,
} from 'src/model/leaverequest.model';
import { LeaveValidation } from './leave.validation';
import { EmployeeService } from 'src/employee/employee.service';
import { NotificationService } from 'src/notification/notification.service';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { ScheduleService } from 'src/schedule/schedule.service';

@Injectable()
export class LeaveService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
    private notificationService: NotificationService,
    private scheduleService: ScheduleService,
  ) {}

  toLeaveResponse(
    leave: LeaveRequest & { employee?: Employee & { account?: Account } },
  ): LeaveResponse {
    return {
      id: leave.id,
      reason: leave.reason,
      status: leave.status,
      date: leave.date,
      type: leave.type,
      attachment: leave.attachment,
      created_at: leave.created_at,
      employee_id: leave.employee_id,
      employee: leave.employee
        ? {
            id: leave.employee.id,
            name: leave.employee.name,
            birth_date: leave.employee.birth_date,
            phone: leave.employee.phone,
            profile_pic: leave.employee.profile_pic,
            created_at: leave.employee.created_at,
            account_id: leave.employee.account_id,
            account: leave.employee.account
              ? {
                  id: leave.employee.account.id,
                  username: leave.employee.account.username,
                  level: leave.employee.account.level,
                  status: leave.employee.account.status,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkLeaveMustExists(leaveId: number) {
    const result = await this.prismaService.leaveRequest.findFirst({
      where: {
        id: leaveId,
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
      throw new HttpException('Leave is not found', 404);
    }

    return result;
  }

  async create(request: CreateLeaveRequest): Promise<LeaveResponse> {
    // const validatedData = await this.validationService.validate(
    //   LeaveValidation.CREATE,
    //   request,
    // );

    await this.employeeService.checkEmployeeMustExists(request.employee_id);
    const data = {
      ...request,
      status: 'pending',
      created_at: new Date(),
    };
    const result = await this.prismaService.leaveRequest.create({
      data: data,
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    if (result) {
      const dataNotification = {
        employee_id: result.employee_id,
        type: `Pengajuan izin / sakit`,
        message: `Pengajuan ${result.type} untuk tanggal ${format(result.date, 'dd MMM yyyy', { locale: id })} anda sudah diajukan, harap sabar untuk menunggu konfirmasi dari owner, atau anda dapat menghubungi owner melalui Whatsapp pribadi}`,
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
          message: `Pengajuan baru dari pegawai ${result.employee.name} telah dibuat untuk tanggal ${format(result.date, 'dd MMM yyyy', { locale: id })}. Diharapkan untuk segera ditindaklanjuti.`,
          was_read: false,
          created_at: new Date(),
        }),
      );

      await Promise.all(notifyAdmins);
    }

    return this.toLeaveResponse(result);
  }

  async getByEmployeeId(employeeId: number): Promise<LeaveResponse[] | []> {
    const results = await this.prismaService.leaveRequest.findMany({
      where: {
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

    if (!results) {
      return [];
    }

    return results.map((result) => this.toLeaveResponse(result));
  }

  async getAll(): Promise<LeaveResponse[]> {
    const results = await this.prismaService.leaveRequest.findMany({
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });
    return results.map((result) => this.toLeaveResponse(result));
  }

  async search(
    request: SearchLeaveRequest,
  ): Promise<{ data: LeaveResponse[] }> {
    console.log(request);
    const validatedData: SearchLeaveRequest = this.validationService.validate(
      LeaveValidation.SEARCH,
      request,
    );

    const filters: any = [];

    if (validatedData.employeeId) {
      filters.push({
        AND: [
          {
            employee_id: {
              contains: validatedData.employeeId,
            },
          },
        ],
      });
    }

    if (validatedData.type) {
      filters.push({
        AND: [
          {
            type: validatedData.type,
          },
        ],
      });
    }

    if (validatedData.status) {
      filters.push({
        AND: [
          {
            status: {
              contains: validatedData.status,
            },
          },
        ],
      });
    }

    if (validatedData.month) {
      const start = new Date(validatedData.month + '-01T00:00:00Z');
      const end = new Date(new Date(start).setMonth(start.getMonth() + 1));

      filters.push({
        date: {
          gte: start,
          lt: end,
        },
      });
    }

    console.log(filters);

    const results = await this.prismaService.leaveRequest.findMany({
      where: filters.length > 0 ? { AND: filters } : {},
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });

    return {
      data: results.map((result) => this.toLeaveResponse(result)),
    };
  }

  async get(leaveId: number): Promise<LeaveResponse> {
    const result = await this.checkLeaveMustExists(leaveId);
    return this.toLeaveResponse(result);
  }

  async update(
    leaveId: number,
    request: UpdateLeaveRequest,
  ): Promise<LeaveResponse> {
    const validatedData = await this.validationService.validate(
      LeaveValidation.UPDATE,
      request,
    );
    await this.checkLeaveMustExists(leaveId);
    const result = await this.prismaService.leaveRequest.update({
      where: {
        id: leaveId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
      data: validatedData,
    });

    if (result) {
      const dataNotification = {
        employee_id: result.employee_id,
        type: `Pengajuan izin / sakit`,
        message: `Pengajuan ${result.type} anda statusnya sudah dirubah menjadi ${result.status}, terimakasih atas perhatiannya, untuk lebih lengkapnya silahkan cek menu riwayat pengajuan ${result.type}`,
        was_read: false,
        created_at: new Date(),
      };
      await this.notificationService.create(dataNotification);
    }

    if (request.status == 'Accepted') {
      const schedule = await this.scheduleService.getByDateEmployeeId(
        result.employee_id,
        result.date,
      );

      const updatedStatus = {
        id: schedule.id,
        status: 'leave',
      };
      await this.scheduleService.update(schedule.id, updatedStatus);
    }

    return this.toLeaveResponse(result);
  }

  async remove(leaveId: number): Promise<LeaveResponse> {
    await this.checkLeaveMustExists(leaveId);
    const result = await this.prismaService.leaveRequest.delete({
      where: {
        id: leaveId,
      },
      include: {
        employee: {
          include: {
            account: true,
          },
        },
      },
    });
    return this.toLeaveResponse(result);
  }
}
