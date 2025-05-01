import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { WebResponse } from '../model/web.model';
import {
  AccountResponse,
  LoginRequest,
  RegisterAccountRequest,
  UpdateAccountRequest,
} from '../model/account.model';
import { Auth } from '../common/auth.decorator';
import { Account } from 'generated/prisma';

@Controller('/api/accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  @HttpCode(200)
  async register(
    @Body() request: RegisterAccountRequest,
  ): Promise<WebResponse<AccountResponse>> {
    const result = await this.accountService.register(request);
    return {
      data: result,
    };
  }

  @Post('/login')
  @HttpCode(200)
  async login(
    @Body() request: LoginRequest,
  ): Promise<WebResponse<AccountResponse>> {
    const result = await this.accountService.login(request);
    return {
      data: result,
    };
  }

  @Get()
  @HttpCode(200)
  async get(@Auth() account: Account): Promise<WebResponse<AccountResponse>> {
    const result = await this.accountService.get(account);
    return {
      data: result,
    };
  }

  @Patch('/current')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Body() request: UpdateAccountRequest,
  ): Promise<WebResponse<AccountResponse>> {
    const result = await this.accountService.update(account, request);
    return {
      data: result,
    };
  }

  @Delete('/current')
  @HttpCode(200)
  async logout(@Auth() account: Account): Promise<WebResponse<boolean>> {
    const result = await this.accountService.logout(account);
    return {
      data: true,
    };
  }
}
