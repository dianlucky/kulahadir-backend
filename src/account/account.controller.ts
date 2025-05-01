import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { WebResponse } from '../model/web.model';
import {
  AccountResponse,
  LoginRequest,
  RegisterAccountRequest,
} from '../model/account.model';

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
}
