import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { EmployeeService } from '../employee/employee.service';
import {
  CreateScheduleRequest,
  ScheduleResponse,
  UpdateScheduleRequest,
} from '../model/schedule.model';
import { Employee, Schedule } from '@prisma/client';
import { ScheduleValidation } from './schedule.validation';

@Injectable()
export class ScheduleService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toScheduleResponse(
    schedule: Schedule & { employee?: Employee },
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

  async create(request: CreateScheduleRequest): Promise<ScheduleResponse> {
    const validatedData = await this.validationService.validate(
      ScheduleValidation.CREATE,
      request,
    );

    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const result = await this.prismaService.schedule.create({
      data: validatedData,
    });

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
