import { HttpException, Injectable } from '@nestjs/common';
import { Employee, PaidLeave, Schedule } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import {
  CreatePaidLeaveRequest,
  PaidLeaveResponse,
  UpdatePaidLeaveRequest,
} from 'src/model/paidleave.model';
import { ScheduleService } from 'src/schedule/schedule.service';
import { PaidLeaveValidation } from './paidleave.validation';

@Injectable()
export class PaidLeaveService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private scheduleService: ScheduleService,
  ) {}

  toPaidLeaveResponse(
    paidLeave: PaidLeave & { schedule?: Schedule & { employee?: Employee } },
  ): PaidLeaveResponse {
    return {
      id: paidLeave.id,
      reason: paidLeave.reason,
      status: paidLeave.status,
      schedule_id: paidLeave.schedule_id,
      schedule: paidLeave.schedule
        ? {
            id: paidLeave.schedule.id,
            date: paidLeave.schedule.date,
            status: paidLeave.schedule.status,
            attendance_status: paidLeave.schedule.attendance_status,
            employee_id: paidLeave.schedule.employee_id,
            employee: paidLeave.schedule.employee
              ? {
                  id: paidLeave.schedule.employee.id,
                  name: paidLeave.schedule.employee.name,
                  phone: paidLeave.schedule.employee.phone,
                  birth_date: paidLeave.schedule.employee.birth_date,
                  account_id: paidLeave.schedule.employee.account_id,
                }
              : undefined,
          }
        : undefined,
    };
  }

  async checkPaidLeaveMustExists(paidLeaveId: number) {
    const result = await this.prismaService.paidLeave.findFirst({
      where: {
        id: paidLeaveId,
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
      throw new HttpException('Paid Leave is not found', 404);
    }

    return result;
  }

  async create(request: CreatePaidLeaveRequest): Promise<PaidLeaveResponse> {
    const validatedData = await this.validationService.validate(
      PaidLeaveValidation.CREATE,
      request,
    );

    await this.scheduleService.checkScheduleMustExists(request.schedule_id);

    const result = await this.prismaService.paidLeave.create({
      data: validatedData,
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });

    return this.toPaidLeaveResponse(result);
  }

  async get(paidLeaveId: number): Promise<PaidLeaveResponse> {
    const result = await this.checkPaidLeaveMustExists(paidLeaveId);
    return this.toPaidLeaveResponse(result);
  }

  async update(
    paidLeaveId: number,
    request: UpdatePaidLeaveRequest,
  ): Promise<PaidLeaveResponse> {
    const validatedData = await this.validationService.validate(
      PaidLeaveValidation.UPDATE,
      request,
    );

    await this.checkPaidLeaveMustExists(paidLeaveId);
    await this.scheduleService.checkScheduleMustExists(
      validatedData.schedule_id,
    );

    const result = await this.prismaService.paidLeave.update({
      where: {
        id: paidLeaveId,
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

    return this.toPaidLeaveResponse(result);
  }

  async remove(paidLeaveId: number): Promise<PaidLeaveResponse> {
    await this.checkPaidLeaveMustExists(paidLeaveId);
    const result = await this.prismaService.paidLeave.delete({
      where: {
        id: paidLeaveId,
      },
      include: {
        schedule: {
          include: {
            employee: true,
          },
        },
      },
    });
    return this.toPaidLeaveResponse(result);
  }
}
