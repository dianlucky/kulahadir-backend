import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
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
import { Account } from '@prisma/client';

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
  async getAllAccount(
    @Auth() account: Account,
  ): Promise<WebResponse<AccountResponse[]>> {
    const result = await this.accountService.getAllAccount();
    return {
      data: result,
    };
  }

  @Get('/:accountId')
  @HttpCode(200)
  async getById(
    @Auth() account: Account,
    @Param('accountId', ParseIntPipe) accountId: number,
  ): Promise<WebResponse<AccountResponse>> {
    const result = await this.accountService.getById(accountId);
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

  @Patch('/:accountId')
  @HttpCode(200)
  async updateById(
    @Auth() account: Account,
    @Param('accountId', ParseIntPipe) accountId: number,
    @Body() request: UpdateAccountRequest,
  ): Promise<WebResponse<AccountResponse>> {
    request.id = accountId;
    const result = await this.accountService.updateById(accountId, request);
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

  @Delete('/:accountId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('accountId', ParseIntPipe) accountId: number,
  ): Promise<WebResponse<boolean>> {
    await this.accountService.remove(accountId);
    return {
      data: true,
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
