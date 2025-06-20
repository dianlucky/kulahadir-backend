import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  InternalServerErrorException,
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
import { AttendanceService } from './attendance.service';
import { WebResponse } from '../model/web.model';
import {
  AttendanceResponse,
  CheckInRequest,
  CheckOutRequest,
} from '../model/attendance.model';
import { Account } from '@prisma/client';
import { Auth } from 'src/common/auth.decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File as MulterFile } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as PDFDocument from 'pdfkit';
import { format } from 'date-fns';
import * as ExcelJS from 'exceljs';
import { id } from 'date-fns/locale';

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
  @Get('/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadPdf(@Res() res: Response, @Query('date') date: string) {
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=report.pdf',
    });

    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(res);

    res.on('finish', () => {
      console.log('PDF stream finished successfully.');
    });
    res.on('error', (err) => {
      console.error("Error during PDF stream (res.on('error')):", err);
    });
    res.on('close', () => {
      console.log('PDF stream closed (client disconnected or stream ended).');
    });

    try {
      // Header/Title
      doc
        .fontSize(20)
        .font('Helvetica-Bold')
        .text('Laporan Data Kehadiran', { align: 'center' });
      doc.moveDown(2);

      const data: AttendanceResponse[] =
        await this.attendanceService.getByDateAll(new Date(date));

      // Table configuration
      const tableHeaders = [
        'No.',
        'Nama Pegawai',
        'Check-in',
        'Check-out',
        'Status',
      ];
      // Adjusted column widths for better proportions
      const colWidths = [50, 200, 90, 90, 60]; // Total: 490px
      const rowHeight = 35;
      const fontSize = 10;

      // Calculate table positioning
      const totalTableWidth = colWidths.reduce((sum, width) => sum + width, 0);
      const startX = (doc.page.width - totalTableWidth) / 2;
      let currentY = doc.y + 20;

      // Function to draw table row
      const drawTableRow = (
        rowContent: string[],
        y: number,
        isHeader: boolean = false,
      ) => {
        let currentX = startX;

        // Set font style
        if (isHeader) {
          doc.font('Helvetica-Bold').fontSize(fontSize + 1);
        } else {
          doc.font('Helvetica').fontSize(fontSize);
        }

        rowContent.forEach((text, colIndex) => {
          // Draw cell border
          doc.rect(currentX, y, colWidths[colIndex], rowHeight).stroke();

          // Calculate text positioning for vertical centering
          const padding = 8;
          const availableWidth = colWidths[colIndex] - padding * 2;

          // Handle text wrapping and truncation
          let displayText = text;
          const maxLines = 2;

          if (!isHeader) {
            // For data cells, check if text fits
            const textWidth = doc.widthOfString(text);
            if (textWidth > availableWidth) {
              // Truncate with ellipsis if too long
              while (
                doc.widthOfString(displayText + '...') > availableWidth &&
                displayText.length > 0
              ) {
                displayText = displayText.slice(0, -1);
              }
              displayText += '...';
            }
          }

          // Calculate vertical position for centering
          const textHeight = doc.heightOfString(displayText, {
            width: availableWidth,
          });
          const textY = y + (rowHeight - textHeight) / 2;

          // Add text to cell
          doc.fillColor('black').text(displayText, currentX + padding, textY, {
            width: availableWidth,
            align: colIndex === 0 ? 'center' : 'left', // Center align for No. column
            lineBreak: false,
          });

          currentX += colWidths[colIndex];
        });
      };

      // Check if we have data
      if (!data || data.length === 0) {
        // Draw header
        drawTableRow(tableHeaders, currentY, true);
        currentY += rowHeight;

        // No data message
        doc
          .fontSize(12)
          .font('Helvetica')
          .text(
            'Tidak ada data kehadiran yang tersedia.',
            startX,
            currentY + 20,
            {
              width: totalTableWidth,
              align: 'center',
            },
          );
      } else {
        // Draw header
        drawTableRow(tableHeaders, currentY, true);
        currentY += rowHeight;

        // Draw data rows
        data.forEach((attendance, index) => {
          // Check if we need a new page
          if (
            currentY + rowHeight >
            doc.page.height - doc.page.margins.bottom
          ) {
            doc.addPage();
            currentY = doc.page.margins.top;

            // Redraw header on new page
            drawTableRow(tableHeaders, currentY, true);
            currentY += rowHeight;
          }

          // Prepare row data
          const checkIn = attendance.check_in
            ? format(attendance.check_in, 'HH:mm')
            : 'N/A';
          const checkOut = attendance.check_out
            ? format(attendance.check_out, 'HH:mm')
            : 'N/A';

          const rowData = [
            (index + 1).toString(),
            attendance.schedule?.employee?.name || 'N/A',
            checkIn,
            checkOut,
            attendance.schedule?.attendance_status || 'N/A',
          ];

          // Draw data row
          drawTableRow(rowData, currentY, false);
          currentY += rowHeight;
        });
      }

      // Add footer with generation info
      doc
        .fontSize(8)
        .font('Helvetica')
        .text(
          `Generated on: ${new Date().toLocaleString('id-ID')}`,
          doc.page.margins.left,
          doc.page.height - doc.page.margins.bottom + 10,
        );

      doc.end();

      return new Promise<void>((resolve, reject) => {
        res.on('finish', () => resolve());
        res.on('error', (err) => reject(err));
      });
    } catch (error) {
      console.error('Error generating PDF content (try-catch block):', error);
      console.trace(error);
      doc.end();
      throw new InternalServerErrorException(
        'Gagal menghasilkan PDF karena error internal server.',
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/excel')
  @Header(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  )
  async downloadExcel(@Res() res: Response, @Query('date') date: string) {
    try {
      const data: AttendanceResponse[] =
        await this.attendanceService.getByDateAll(new Date(date));

      // Create workbook and worksheet
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Laporan Data Kehadiran');

      // Set worksheet properties
      worksheet.properties.defaultRowHeight = 20;

      // Add title
      worksheet.mergeCells('A1:E1');
      const titleCell = worksheet.getCell('A1');
      titleCell.value = `LAPORAN DATA KEHADIRAN - ${format(new Date(date), 'EEEE, dd MMMM yyyy', { locale: id })}`;
      titleCell.font = {
        size: 16,
        bold: true,
        color: { argb: 'FF000000' },
      };
      titleCell.alignment = {
        horizontal: 'center',
        vertical: 'middle',
      };
      titleCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE6E6FA' },
      };

      // Add empty row for spacing
      worksheet.addRow([]);

      // Define headers
      const headers = [
        'No.',
        'Nama Pegawai',
        'Check-in',
        'Check-out',
        'Status',
      ];
      const headerRow = worksheet.addRow(headers);

      // Style header row
      headerRow.eachCell((cell, colNumber) => {
        cell.font = {
          bold: true,
          color: { argb: 'FFFFFFFF' },
        };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF4472C4' },
        };
        cell.alignment = {
          horizontal: 'center',
          vertical: 'middle',
        };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });

      // Check if data exists and has length
      if (data && Array.isArray(data) && data.length > 0) {
        data.forEach((data, index) => {
          const checkIn = data.check_in
            ? format(data.check_in, 'HH:mm')
            : 'N/A';
          const checkOut = data.check_out
            ? format(data.check_out, 'HH:mm')
            : 'N/A';

          const attendanceStatus = data.schedule?.attendance_status || 'N/A';

          const row = worksheet.addRow([
            index + 1,
            data.schedule?.employee?.name || 'N/A',
            checkIn,
            checkOut,
            attendanceStatus,
          ]);

          // Style data rows
          row.eachCell((cell, colNumber) => {
            cell.alignment = {
              horizontal: colNumber === 1 ? 'center' : 'left',
              vertical: 'middle',
            };
            cell.border = {
              top: { style: 'thin' },
              left: { style: 'thin' },
              bottom: { style: 'thin' },
              right: { style: 'thin' },
            };

            // Alternate row colors
            if (index % 2 === 0) {
              cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF8F9FA' },
              };
            }
          });
        });
      } else {
        // No data message
        const noDataRow = worksheet.addRow([
          '',
          'Tidak ada data kehadiran yang tersedia',
          '',
          '',
        ]);
        worksheet.mergeCells(`A${noDataRow.number}:D${noDataRow.number}`);
        const noDataCell = worksheet.getCell(`A${noDataRow.number}`);
        noDataCell.alignment = { horizontal: 'center', vertical: 'middle' };
        noDataCell.font = { italic: true, color: { argb: 'FF666666' } };
      }

      // Set column widths
      worksheet.getColumn(1).width = 8; // No.
      worksheet.getColumn(2).width = 25; // Nama Pegawai
      worksheet.getColumn(3).width = 18; // Check in
      worksheet.getColumn(4).width = 18; // Check out
      worksheet.getColumn(5).width = 15; // Status

      // Add footer with generation info
      const footerRowNum = worksheet.rowCount + 2;
      worksheet.mergeCells(`A${footerRowNum}:D${footerRowNum}`);
      const footerCell = worksheet.getCell(`A${footerRowNum}`);
      footerCell.value = `Generated on: ${new Date().toLocaleString('id-ID')}`;
      footerCell.font = {
        size: 10,
        italic: true,
        color: { argb: 'FF666666' },
      };
      footerCell.alignment = { horizontal: 'center' };

      // Set response headers
      const filename = `laporan-kehadiran-${new Date().toISOString().split('T')[0]}.xlsx`;
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );

      // Write to response
      await workbook.xlsx.write(res);
      res.end();
    } catch (error) {
      console.error('Error generating Excel file:', error);
      throw new InternalServerErrorException(
        'Gagal menghasilkan file Excel karena error internal server.',
      );
    }
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
