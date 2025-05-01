import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
  AccountResponse,
  AccountType,
  LoginRequest,
  RegisterAccountRequest,
  UpdateAccountRequest,
} from '../model/account.model';
import { ValidationService } from 'src/common/validation.service';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { AccountValidation } from './account.validation';
import * as bcrypt from 'bcrypt';
import { v4 as UUID } from 'uuid';
import { Account } from 'generated/prisma';

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
    const validatedData: RegisterAccountRequest =
      this.validationService.validate(AccountValidation.REGISTER, request);
    const totalAccountWithSameUsername = await this.prismaService.account.count(
      {
        where: {
          username: validatedData.username,
        },
      },
    );

    if (totalAccountWithSameUsername != 0) {
      throw new HttpException('Username already exists', 400);
    }

    validatedData.password = await bcrypt.hash(validatedData.password, 10);

    const account = await this.prismaService.account.create({
      data: validatedData,
    });

    return {
      username: account.username,
      level_id: account.level_id,
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
      level_id: account.level_id,
    };
  }

  async login(request: LoginRequest): Promise<AccountResponse> {
    this.logger.debug(`AccountService.login(${JSON.stringify(request)})`);
    const validatedData: LoginRequest = this.validationService.validate(
      AccountValidation.LOGIN,
      request,
    );

    const user = (await this.prismaService.account.findFirst({
      where: {
        username: validatedData.username,
      },
    })) as AccountType;

    if (!user) {
      throw new HttpException('Username or password is invalid', 401);
    }

    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new HttpException('Username or password is invalid', 401);
    }

    const updatedData: Account = await this.prismaService.account.update({
      where: {
        id: user.id,
      },
      data: {
        token: UUID(),
      },
    });

    return {
      username: updatedData.username,
      level_id: updatedData.level_id,
      token: updatedData.token || undefined,
    };
  }

  async get(account: Account): Promise<AccountResponse> {
     this.logger.info(`Get account that used to login ${JSON.stringify(account.id)}`);
    return {
      username: account.username,
      level_id: account.level_id,
    };
  }

  async update(
    account: Account,
    request: UpdateAccountRequest,
  ): Promise<AccountResponse> {
     this.logger.info(`Update Account that used to login ${JSON.stringify(request)}`);
    const validatedData = await this.validationService.validate(
      AccountValidation.UPDATE,
      request,
    );

    if (request.password) {
      validatedData.password = validatedData.password = await bcrypt.hash(
        validatedData.password,
        10,
      );
    }
    const updatedAccount = await this.prismaService.account.update({
      where: {
        id: account.id,
      },
      data: validatedData,
    });

    return this.toAccountResponse(updatedAccount);
  }

  async logout(account: Account): Promise<AccountResponse> {
     this.logger.info(`Logout ${JSON.stringify(account.username)}`);
    const result = await this.prismaService.account.update({
      where: {
        id: account.id,
      },
      data: {
        token: null,
      },
    });

    return {
      username: result.username,
      level_id: result.level_id,
    };
  }
}
