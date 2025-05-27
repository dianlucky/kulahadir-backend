import { HttpException, Injectable } from '@nestjs/common';
import { Employee, LeaveRequest, Schedule } from '@prisma/client';
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

@Injectable()
export class LeaveService {
  constructor(
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private employeeService: EmployeeService,
  ) {}

  toLeaveResponse(
    leave: LeaveRequest & { employee?: Employee },
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
        employee: true,
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

    await this.employeeService.checkEmployeeMustExists(
      validatedData.employee_id,
    );

    const data = {
      ...validatedData,
      status: 'pending',
      created_at: new Date(),
    };
    const result = await this.prismaService.leaveRequest.create({
      data: data,
      include: {
        employee: true,
      },
    });

    return this.toLeaveResponse(result);
  }

  async getByEmployeeId(employeeId: number): Promise<LeaveResponse[] | []> {
    const results = await this.prismaService.leaveRequest.findMany({
      where: {
        employee_id: employeeId,
      },
      include: {
        employee: true,
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
        employee: true,
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
        employee: true,
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
        employee: true,
      },
      data: validatedData,
    });

    return this.toLeaveResponse(result);
  }

  async remove(leaveId: number): Promise<LeaveResponse> {
    await this.checkLeaveMustExists(leaveId);
    const result = await this.prismaService.leaveRequest.delete({
      where: {
        id: leaveId,
      },
      include: {
        employee: true,
      },
    });
    return this.toLeaveResponse(result);
  }
}
