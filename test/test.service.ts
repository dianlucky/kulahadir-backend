import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
// import { Account } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Account, Employee } from '@prisma/client';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteAll() {
    await this.deleteEmployee();
    await this.deleteAccount();
  }

  async createAccount() {
    await this.prismaService.account.create({
      data: {
        username: 'piring',
        password: await bcrypt.hash('piring', 10),
        level: 'piring',
        status: 'piring',
      },
    });
  }

  async getAccount(): Promise<Account> {
    const result = await this.prismaService.account.findFirst({
      where: {
        username: 'piring',
      },
    });
    if (!result) {
      throw new Error('Account is not found');
    }
    return result;
  }

  async deleteAccount() {
    await this.prismaService.account.deleteMany({
      where: {
        username: 'piring',
      },
    });
  }

  async createEmployee(id: number) {
    await this.prismaService.employee.create({
      data: {
        name: 'beras kering',
        created_at: new Date(),
        birth_date: new Date(),
        phone: '08123912232',
        account_id: id,
      },
    });
  }

  async getEmployee(): Promise<Employee> {
    const result = await this.prismaService.employee.findFirst({
      where: {
        account: {
          username: 'piring',
        },
      },
    });

    if (!result) {
      throw new Error('Employee is not found');
    }
    return result;
  }

  async deleteEmployee() {
    await this.prismaService.employee.deleteMany({
      where: {
        account: {
          username: 'piring',
        },
      },
    });
  }
}
