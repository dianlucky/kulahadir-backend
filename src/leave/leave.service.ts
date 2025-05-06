import { HttpException, Injectable } from '@nestjs/common';
import { Employee, Leave, Schedule } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreateLeaveRequest,
  LeaveResponse,
  UpdateLeaveRequest,
} from 'src/model/leave.model';
import { ScheduleService } from 'src/schedule/schedule.service';
import { LeaveValidation } from './leave.validation';

@Injectable()
export class LeaveService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private scheduleService: ScheduleService,
  ) {}

  toLeaveResponse(
    leave: Leave & { schedule?: Schedule & { employee?: Employee } },
  ): LeaveResponse {
    return {
      id: leave.id,
      reason: leave.reason,
      status: leave.status,
      schedule_id: leave.schedule_id,
      schedule: leave.schedule
        ? {
            id: leave.schedule.id,
            date: leave.schedule.date,
            status: leave.schedule.status,
            attendance_status: leave.schedule.attendance_status,
            employee_id: leave.schedule.employee_id,
            employee: leave.schedule.employee
              ? {
                  id: leave.schedule.employee.id,
                  name: leave.schedule.employee.name,
                  phone: leave.schedule.employee.phone,
                  birth_date: leave.schedule.employee.birth_date,
                  account_id: leave.schedule.employee.account_id,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkLeaveMustExists(leaveId: number) {
    const result = await this.prismaService.leave.findFirst({
      where: {
        id: leaveId,
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
      throw new HttpException('Leave is not found', 404);
    }

    return result;
  }

  async create(request: CreateLeaveRequest): Promise<LeaveResponse> {
    const validatedData = await this.validationService.validate(
      LeaveValidation.CREATE,
      request,
    );
    await this.scheduleService.checkScheduleMustExists(
      validatedData.schedule_id,
    );

    const result = await this.prismaService.leave.create({
      data: validatedData,
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });

    return this.toLeaveResponse(result);
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
    await this.scheduleService.checkScheduleMustExists(
      validatedData.schedule_id,
    );
    const result = await this.prismaService.leave.update({
      where: {
        id: leaveId,
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

    return this.toLeaveResponse(result);
  }

  async remove(leaveId: number): Promise<LeaveResponse> {
    await this.checkLeaveMustExists(leaveId);
    const result = await this.prismaService.leave.delete({
      where: {
        id: leaveId,
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });
    return this.toLeaveResponse(result);
  }
}
