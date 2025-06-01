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
import { EmployeeService } from './employee.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateEmployeeRequest,
  EmployeeResponse,
  SearchEmployeeRequest,
  UpdateEmployeeRequest,
} from 'src/model/employee.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File as MulterFile } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateEmployeeRequest,
  ): Promise<WebResponse<EmployeeResponse>> {
    if (!request.account_id) {
      request.account_id = account.id;
    }

    const result = await this.employeeService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/current')
  @HttpCode(200)
  async get(@Auth() account: Account): Promise<WebResponse<EmployeeResponse>> {
    const result = await this.employeeService.get(account.id);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<EmployeeResponse[]>> {
    const result = await this.employeeService.getAll();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  @HttpCode(200)
  async search(
    @Auth() account: Account,
    @Query('name') name?: string,
    @Query('birth_date') birth_date?: Date,
    @Query('phone') phone?: string,
  ): Promise<WebResponse<EmployeeResponse[]>> {
    const request: SearchEmployeeRequest = {
      name: name,
      birth_date: birth_date,
      phone: phone,
    };

    return this.employeeService.search(request);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-account')
  @HttpCode(200)
  async getByAccountId(
    @Auth() account: Account,
    @Query('accountId', ParseIntPipe) accountId: number,
  ): Promise<WebResponse<EmployeeResponse | null>> {
    const result = await this.employeeService.getByAccountId(accountId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:employeeId')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('profile_pic', {
      storage: diskStorage({
        destination: './uploads/employees', // path penyimpanan file
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `employee-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async update(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @UploadedFile() file: MulterFile,
    @Body() body: any, // gunakan "any" dulu, karena body dikirim via FormData
  ): Promise<WebResponse<EmployeeResponse>> {
    const request = new UpdateEmployeeRequest();
    request.id = employeeId;
    request.name = body.name;
    request.phone = body.phone;
    request.birth_date = body.birth_date
      ? new Date(body.birth_date)
      : undefined;

    if (file) {
      // Simpan nama file ke DB
      request.profile_pic = file.filename;
    }

    const result = await this.employeeService.update(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:employeeId')
  @HttpCode(200)
  async remove(
    @Auth()
    @Param('employeeId', ParseIntPipe)
    employeeId: number,
  ): Promise<WebResponse<boolean>> {
    await this.employeeService.remove(employeeId);

    return {
      data: true,
    };
  }
}
