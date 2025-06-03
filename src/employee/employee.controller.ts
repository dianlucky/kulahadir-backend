import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
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
import PDFDocument from 'pdfkit';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';

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

  // @UseGuards(JwtAuthGuard)
  // @Get('export/pdf')
  // @HttpCode(200)
  // async exportPdf(@Res() res: Response) {
  //   const employees = await this.employeeService.getAll();

  //   const doc = new PDFDocument();
  //   const filename = 'employees.pdf';

  //   res.setHeader('Content-Type', 'application/pdf');
  //   res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

  //   doc.pipe(res);
  //   doc.fontSize(18).text('Employee List', { underline: true });
  //   doc.moveDown();

  //   employees.forEach((emp, i) => {
  //     doc
  //       .fontSize(12)
  //       .text(`${i + 1}. ${emp.name} - ${emp.phone} - ${emp.account?.level}`);
  //   });

  //   doc.end();
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('/export/excel')
  // @HttpCode(200)
  // async exportExcel(@Res() res: Response) {
  //   const employees = await this.employeeService.getAll();

  //   const workbook = new ExcelJS.Workbook();
  //   const worksheet = workbook.addWorksheet('Employees');

  //   worksheet.columns = [
  //     { header: 'No', key: 'no' },
  //     { header: 'Name', key: 'name' },
  //     { header: 'Phone', key: 'phone' },
  //     { header: 'Level', key: 'level' },
  //   ];

  //   employees.forEach((emp, i) => {
  //     worksheet.addRow({
  //       no: i + 1,
  //       name: emp.name,
  //       phone: emp.phone,
  //       level: emp.account?.level,
  //     });
  //   });

  //   const buffer = await workbook.xlsx.writeBuffer();
  //   res.set({
  //     'Content-Type':
  //       'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  //     'Content-Disposition': 'attachment; filename=employees.xlsx',
  //   });
  //   res.end(buffer);
  // }

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
