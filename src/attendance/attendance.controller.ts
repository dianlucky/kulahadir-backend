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
  Query,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { WebResponse } from '../model/web.model';
import {
  AttendanceResponse,
  CheckInRequest,
  UpdateAttendanceRequest,
} from '../model/attendance.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';
import { scheduled } from 'rxjs';

@Controller('/api/attendances')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CheckInRequest,
  ): Promise<WebResponse<AttendanceResponse>> {
    const result = await this.attendanceService.checkIn(request);
    return {
      data: result,
    };
  }
  @Get('by-schedule')
  @HttpCode(200)
  async getByScheduleId(
    @Auth() account: Account,
    @Query('scheduleId', ParseIntPipe) scheduleId: number,
  ): Promise<WebResponse<AttendanceResponse | null>> {
    const result = await this.attendanceService.getByScheduleId(scheduleId);
    return {
      data: result,
    };
  }

  @Get('/by-month')
  @HttpCode(200)
  async getByMonthEmployeeId(
    @Auth() account: Account,
    @Query('month') month: string,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<AttendanceResponse[]>> {
    const result = await this.attendanceService.getByMonthEmployeeId(
      new Date(month),
      employeeId,
    );
    return {
      data: result,
    };
  }

  @Get('/by-date')
  @HttpCode(200)
  async getByDateEmployeeId(
    @Auth() account: Account,
    @Query('date') date: string,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<AttendanceResponse | null>> {
    const result = await this.attendanceService.getByDateEmployeeId(
      new Date(date),
      employeeId,
    );
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
  async checkOut(
    @Auth() account: Account,
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
    @Body() request: UpdateAttendanceRequest,
  ): Promise<WebResponse<AttendanceResponse>> {
    request.id = attendanceId;
    const result = await this.attendanceService.checkOut(attendanceId, request);
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
