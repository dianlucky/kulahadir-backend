import {
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  AccountResponse,
  RegisterAccountRequest,
  UpdateAccountRequest,
} from '../model/account.model';
import { ValidationService } from 'src/common/validation.service';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { AccountValidation } from './account.validation';
import * as bcrypt from 'bcrypt';
import { Account } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(
    private validationService: ValidationService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
    private prismaService: PrismaService,
  ) {}

  async register(request: RegisterAccountRequest): Promise<AccountResponse> {
    this.logger.info(`Register new account ${JSON.stringify(request)}`);
    const validatedData = this.validationService.validate(
      AccountValidation.REGISTER,
      request,
    ) as RegisterAccountRequest;

    const totalAccountWithSameUsername: any =
      await this.prismaService.account.count({
        where: {
          username: validatedData.username,
        },
      });

    if (totalAccountWithSameUsername != 0) {
      throw new HttpException('Username already exists', 400);
    }

    validatedData.password = await bcrypt.hash(validatedData.password, 10);

    const account = await this.prismaService.account.create({
      data: validatedData,
    });

    return {
      id: account.id,
      username: account.username,
      level: account.level,
      status: account.status,
    };
  }

  async checkAccountMustExists(accountId: number) {
    const result = await this.prismaService.account.findFirst({
      where: {
        id: accountId,
      },
    });

    return result;
  }

  toAccountResponse(account: Account): AccountResponse {
    return {
      id: account.id,
      username: account.username,
      level: account.level,
      status: account.status,
    };
  }

  async getAllAccount(): Promise<AccountResponse[]> {
    this.logger.info(`Getting all account that exists in database`);
    const results = await this.prismaService.account.findMany();
    return results.map((result) => this.toAccountResponse(result));
  }

  async getById(accountId: number): Promise<AccountResponse> {
    const result = await this.prismaService.account.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!result) {
      throw new HttpException('Account is not found', 404);
    }

    return this.toAccountResponse(result);
  }

  async get(account: Account): Promise<AccountResponse> {
    this.logger.info(
      `Get account that used to login ${JSON.stringify(account.id)}`,
    );
    const result = await this.prismaService.account.findFirst({
      where: {
        id: account.id,
      },
    });

    if (!result) {
      throw new NotFoundException(`Account with ID ${account.id} not found`);
    }
    return this.toAccountResponse(result);
  }

  async update(
    account: Account,
    request: UpdateAccountRequest,
  ): Promise<AccountResponse> {
    this.logger.info(
      `Update Account that used to login ${JSON.stringify(request)}`,
    );
    const validatedData = await this.validationService.validate(
      AccountValidation.UPDATE,
      request,
    );

    if (request.password) {
      validatedData.password = await bcrypt.hash(validatedData.password, 10);
    }

    const updatedAccount = await this.prismaService.account.update({
      where: {
        id: account.id,
      },
      data: validatedData,
    });

    return this.toAccountResponse(updatedAccount);
  }

  async updateById(
    accountId: number,
    request: UpdateAccountRequest,
  ): Promise<AccountResponse> {
    const validatedData = await this.validationService.validate(
      AccountValidation.UPDATE,
      request,
    );

    const oldAccount = await this.checkAccountMustExists(accountId);
    if (!oldAccount) {
      throw new HttpException('Account is not found', 404);
    }

    if (request.password) {
      validatedData.password = validatedData.password = await bcrypt.hash(
        validatedData.password,
        10,
      );
    }

    const result = await this.prismaService.account.update({
      where: {
        id: accountId,
      },
      data: validatedData,
    });

    return this.toAccountResponse(result);
  }

  async remove(accountId: number): Promise<AccountResponse> {
    await this.checkAccountMustExists(accountId);
    const result = await this.prismaService.account.delete({
      where: {
        id: accountId,
      },
    });

    return this.toAccountResponse(result);
  }
}
