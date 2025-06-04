import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { Account, Employee } from '@prisma/client';
import {
  CreateEmployeeRequest,
  EmployeeResponse,
  SearchEmployeeRequest,
  UpdateEmployeeRequest,
} from '../model/employee.model';
import { AccountService } from '../account/account.service';
import { EmployeeValidation } from './employee.validation';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private accountService: AccountService,
    private notificationService: NotificationService,
  ) {}

  toEmployeeResponse(
    employee: Employee & { account?: Account },
  ): EmployeeResponse {
    return {
      id: employee.id,
      name: employee.name,
      birth_date: employee.birth_date,
      phone: employee.phone,
      profile_pic: employee.profile_pic,
      account_id: employee.account_id,
      created_at: employee.created_at,
      account: employee.account
        ? {
            id: employee.account.id,
            username: employee.account.username,
            level: employee.account.level,
            status: employee.account.status,
          }
        : undefined,
    };
  }

  async checkEmployeeMustExists(employeeId: number | undefined) {
    const result = await this.prismaService.employee.findFirst({
      where: {
        id: employeeId,
      },
      include: {
        account: true,
      },
    });

    if (!result) {
      throw new HttpException('Employee is not found', 404);
    }

    return result;
  }

  async create(request: CreateEmployeeRequest): Promise<EmployeeResponse> {
    const account = await this.accountService.checkAccountMustExists(
      request.account_id,
    );
    console.log(account);

    const validatedData = this.validationService.validate(
      EmployeeValidation.CREATE,
      request,
    );

    if (validatedData.birth_date) {
      validatedData.birth_date = new Date(validatedData.birth_date);
    }

    const employee = await this.prismaService.employee.create({
      data: {
        ...validatedData,
        created_at: new Date(),
      },
      include: {
        account: true,
      },
    });

    if (employee) {
      const dataNotification = {
        employee_id: employee.id,
        type: 'Akun',
        message: `Selamat datang di kulateam!`,
        was_read: false,
        created_at: new Date(),
      };
      await this.notificationService.create(dataNotification);
    }

    return this.toEmployeeResponse(employee);
  }

  async getAll(): Promise<EmployeeResponse[]> {
    const results = await this.prismaService.employee.findMany({
      include: {
        account: true,
      },
    });

    if (!results) {
      throw new HttpException('Employee is not exists', 404);
    }

    return results.map((result) => this.toEmployeeResponse(result));
  }

  async getByAccountId(accountId: number): Promise<EmployeeResponse | null> {
    const result = await this.prismaService.employee.findFirst({
      where: {
        account_id: accountId,
      },
      include: {
        account: true,
      },
    });

    if (!result) {
      return null;
    }

    return this.toEmployeeResponse(result);
  }

  async get(accountId: number): Promise<EmployeeResponse> {
    const employee = await this.prismaService.employee.findFirst({
      where: {
        account_id: accountId,
      },
      include: {
        account: true,
      },
    });

    if (!employee) {
      throw new HttpException('Employee is not found', 404);
    }

    return this.toEmployeeResponse(employee);
  }

  async search(
    request: SearchEmployeeRequest,
  ): Promise<{ data: EmployeeResponse[] }> {
    console.log(request);
    const validatedData: SearchEmployeeRequest =
      this.validationService.validate(EmployeeValidation.SEARCH, request);

    const filters: any = [];
    if (validatedData.name) {
      filters.push({
        OR: [
          {
            name: {
              contains: validatedData.name,
            },
          },
        ],
      });
    }
    if (validatedData.status && validatedData.status != 'Semua') {
      filters.push({
        OR: [
          {
            account: {
              status: validatedData.status,
            },
          },
        ],
      });
    }

    if (validatedData.birth_date) {
      filters.push({
        OR: [
          {
            birth_date: {
              contains: validatedData.birth_date,
            },
          },
        ],
      });
    }

    if (validatedData.phone) {
      filters.push({
        OR: [
          {
            phone: {
              contains: validatedData.phone,
            },
          },
        ],
      });
    }

    console.log(filters);

    const employees = await this.prismaService.employee.findMany({
      where: {
        ...(filters.length > 0 ? { OR: filters } : {}),
        account: {
          level: 'Pegawai',
        },
      },
      include: {
        account: true,
      },
    });

    return {
      data: employees.map((employee) => this.toEmployeeResponse(employee)),
    };
  }

  async update(request: UpdateEmployeeRequest): Promise<EmployeeResponse> {
    const validatedData = await this.validationService.validate(
      EmployeeValidation.UPDATE,
      request,
    );

    await this.checkEmployeeMustExists(request.id);

    const employee = await this.prismaService.employee.update({
      where: {
        id: request.id,
      },
      include: {
        account: true,
      },
      data: validatedData,
    });

    return this.toEmployeeResponse(employee);
  }

  async remove(employeeId: number): Promise<EmployeeResponse> {
    await this.checkEmployeeMustExists(employeeId);

    const employee = await this.prismaService.employee.delete({
      where: {
        id: employeeId,
      },
      include: {
        account: true,
      },
    });

    return this.toEmployeeResponse(employee);
  }
}
