import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { Account, Employee, Level } from '@prisma/client';
import {
  CreateEmployeeRequest,
  EmployeeResponse,
  SearchEmployeeRequest,
  UpdateEmployeeRequest,
} from '../model/employee.model';
import { AccountService } from '../account/account.service';
import { EmployeeValidation } from './employee.validation';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private accountService: AccountService,
  ) {}

  toEmployeeResponse(
    employee: Employee & { account?: Account & { level?: Level } },
  ): EmployeeResponse {
    return {
      id: employee.id,
      name: employee.name,
      birth_date: employee.birth_date,
      phone: employee.phone,
      account_id: employee.account_id,
      account: employee.account
        ? {
            id: employee.account.id,
            username: employee.account.username,
            level_id: employee.account.level_id,
            level: employee.account.level
              ? {
                  id: employee.account.level.id,
                  name: employee.account.level.name,
                }
              : undefined,
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
        account: {
          include: {
            level: true,
          },
        },
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
    console.log(validatedData);

    const employee = await this.prismaService.employee.create({
      data: validatedData,
      include: {
        account: {
          include: {
            level: true,
          },
        },
      },
    });

    return this.toEmployeeResponse(employee);
  }

  async get(accountId: number): Promise<EmployeeResponse> {
    const employee = await this.prismaService.employee.findFirst({
      where: {
        account_id: accountId,
      },
      include: {
        account: {
          include: {
            level: true,
          },
        },
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
      where: filters.length > 0 ? { OR: filters } : {},
      include: {
        account: {
          include: {
            level: true,
          },
        },
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
        account: {
          include: {
            level: true,
          },
        },
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
        account: {
          include: {
            level: true,
          },
        },
      },
    });

    return this.toEmployeeResponse(employee);
  }
}
