import {
  BadRequestException,
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
import { LeaveService } from './leave.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateLeaveRequest,
  LeaveResponse,
  SearchLeaveRequest,
  UpdateLeaveRequest,
} from 'src/model/leaverequest.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { File as MulterFile } from 'multer';

@Controller('/api/leaves')
export class LeaveController {
  constructor(private leaveService: LeaveService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('profile_pic', {
      storage: diskStorage({
        destination: './uploads/attachments', // path penyimpanan file
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `attachment-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async create(
    @Auth() account: Account,
    @UploadedFile() file: MulterFile,
    @Body() body: any,
  ): Promise<WebResponse<LeaveResponse>> {
    const request = new CreateLeaveRequest();
    request.reason = body.reason;
    request.type = body.type;
    request.reason = body.reason;
    request.date = body.date ? new Date(body.date) : new Date();
    request.employee_id = parseInt(body.employee_id);
    if (file) {
      // Simpan nama file ke DB
      request.attachment = file.filename;
    }
    const result = await this.leaveService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/search')
  @HttpCode(200)
  async search(
    @Auth() account: Account,
    @Query('employeeId') employeeId?: string,
    @Query('type') type?: string,
    @Query('status') status?: string,
    @Query('month') month?: string,
  ): Promise<WebResponse<LeaveResponse[]>> {
    const request: SearchLeaveRequest = {
      employeeId: employeeId ? parseInt(employeeId) : undefined,
      type: type,
      status: status,
      month: month,
    };

    return this.leaveService.search(request);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<LeaveResponse[]>> {
    const result = await this.leaveService.getAll();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-employee')
  @HttpCode(200)
  async getByEmployeeId(
    @Auth() account: Account,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<LeaveResponse[]>> {
    const result = await this.leaveService.getByEmployeeId(employeeId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:leaveId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
  ): Promise<WebResponse<LeaveResponse>> {
    const result = await this.leaveService.get(leaveId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:leaveId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
    @Body() request: UpdateLeaveRequest,
  ): Promise<WebResponse<LeaveResponse>> {
    request.id = leaveId;
    const result = await this.leaveService.update(leaveId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:leaveId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('leaveId', ParseIntPipe) leaveId: number,
  ): Promise<WebResponse<boolean>> {
    const result = await this.leaveService.remove(leaveId);
    return {
      data: true,
    };
  }
}
