import {
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
import { Account, Level } from '@prisma/client';

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
      include: {
        level: true,
      },
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
      include: {
        level: true,
      },
    });

    return result;
  }

  toAccountResponse(account: Account & { level?: Level }): AccountResponse {
    return {
      id: account.id,
      username: account.username,
      level_id: account.level_id,
      level: account.level
        ? {
            id: account.level.id,
            name: account.level.name,
          }
        : undefined,
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
      include: {
        level: true,
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
      include: {
        level: true,
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
    this.logger.info(
      `Get account that used to login ${JSON.stringify(account.id)}`,
    );
    const result = await this.prismaService.account.findFirst({
      where: {
        id: account.id,
      },
      include: {
        level: true,
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
      validatedData.password = validatedData.password = await bcrypt.hash(
        validatedData.password,
        10,
      );
    }
    const updatedAccount = await this.prismaService.account.update({
      where: {
        id: account.id,
      },
      include: {
        level: true,
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
      include: {
        level: true,
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
