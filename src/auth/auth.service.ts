import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthMeType, LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.prisma.account.findFirst({
      where: { username: loginDto.username },
    });

    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(loginDto.password, user.password))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);

    const employee = await this.prisma.employee.findFirst({
      where: {
        account_id: user.id,
      },
    });

    const { password, ...safeUser } = user;

    return {
      token,
      creds: {
        ...safeUser,
        employee_id: employee?.id ?? null,
      },
    };
  }

  async getProfile(userId: number): Promise<AuthMeType> {
    const account = await this.prisma.account.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        level: true,
        status: true,
      },
    });

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    const employee = await this.prisma.employee.findFirst({
      where: {
        account_id: account.id,
      },
    });

    return {
      creds: {
        id: account.id,
        username: account.username,
        level: account.level,
        status: account.status,
        employee_id: employee?.id ?? null,
      },
      status: 'OK',
    };
  }

  async logout(user: any) {
    return { message: 'Logged out successfully' };
  }
}
