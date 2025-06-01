import {
  Controller,
  Post,
  Get,
  Req,
  UseGuards,
  Body,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMeType, LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/me')
  @HttpCode(200)
  async getProfile(@Req() req: Request): Promise<AuthMeType> {
    if (!req.user || typeof req.user !== 'object') {
      throw new UnauthorizedException('User not authenticated');
    }

    const user = req.user as { sub: number };
    return this.authService.getProfile(user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  @HttpCode(200)
  async logout(@Req() req: Request) {
    return this.authService.logout(req.user);
  }
}
