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
import { AttendanceService } from './attendance.service';
import { WebResponse } from '../model/web.model';
import {
  AttendanceResponse,
  CreateAttendanceRequest,
  UpdateAttendanceRequest,
} from '../model/attendance.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';

@Controller('/api/attendances')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateAttendanceRequest,
  ): Promise<WebResponse<AttendanceResponse>> {
    const result = await this.attendanceService.create(request);
    return {
      data: result,
    };
  }

  @Get('/:attendanceId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
  ): Promise<WebResponse<AttendanceResponse>> {
    const result = await this.attendanceService.get(attendanceId);
    return {
      data: result,
    };
  }

  @Patch('/:attendanceId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
    @Body() request: UpdateAttendanceRequest,
  ): Promise<WebResponse<AttendanceResponse>> {
    request.id = attendanceId;
    const result = await this.attendanceService.update(attendanceId, request);
    return {
      data: result,
    };
  }

  @Delete('/:attendanceId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
  ): Promise<WebResponse<boolean>> {
    await this.attendanceService.remove(attendanceId);
    return {
      data: true,
    };
  }
}
