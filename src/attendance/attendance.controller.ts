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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { WebResponse } from '../model/web.model';
import {
  AttendanceResponse,
  CheckInRequest,
  CheckOutRequest,
  UpdateAttendanceRequest,
} from '../model/attendance.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File as MulterFile } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/api/attendances')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('snapshot', {
      storage: diskStorage({
        destination: './uploads/attendances', // path penyimpanan file
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `employee-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async checkIn(
    @UploadedFile() file: MulterFile,
    @Body('schedule_id', ParseIntPipe) scheduleId: number,
    @Body() body: any,
  ): Promise<WebResponse<AttendanceResponse>> {
    const request = new CheckInRequest();
    request.check_in = new Date(body.check_in);
    request.attendance_lat = body.attendanc_lat;
    request.attendance_long = body.attendance_long;
    request.schedule_id = scheduleId;

    if (file) {
      request.snapshot = file.filename;
    }

    const result = await this.attendanceService.checkIn(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-schedule')
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

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get('/by-month-all')
  @HttpCode(200)
  async getByMonthAll(
    @Auth() account: Account,
    @Query('month') month: string,
  ): Promise<WebResponse<AttendanceResponse[]>> {
    const result = await this.attendanceService.getByMonth(new Date(month));
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get('/by-date-all')
  @HttpCode(200)
  async getByDateAll(
    @Auth() account: Account,
    @Query('date') date: string,
  ): Promise<WebResponse<AttendanceResponse[]>> {
    const result = await this.attendanceService.getByDateAll(new Date(date));
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Patch('/:attendanceId')
  @HttpCode(200)
  async checkOut(
    @Auth() account: Account,
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
    @Body() request: CheckOutRequest,
  ): Promise<WebResponse<AttendanceResponse>> {
    request.id = attendanceId;
    const result = await this.attendanceService.checkOut(attendanceId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
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
