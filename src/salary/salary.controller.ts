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
  UseGuards,
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { WebResponse } from 'src/model/web.model';
import {
  CreateSalaryRequest,
  SalaryResponse,
  SearchSalaryRequest,
  UpdateSalaryRequest,
} from 'src/model/salary.model';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { format } from 'date-fns';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import { string } from 'zod';

@Controller('/api/salaries')
export class SalaryController {
  constructor(private salaryService: SalaryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateSalaryRequest,
  ): Promise<WebResponse<SalaryResponse>> {
    const result = await this.salaryService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  @HttpCode(200)
  async getAll(
    @Auth() account: Account,
  ): Promise<WebResponse<SalaryResponse[]>> {
    const result = await this.salaryService.getAll();
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
  ): Promise<WebResponse<SalaryResponse | null>> {
    const result = await this.salaryService.getByMonthEmployeeId(
      new Date(month),
      employeeId,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:salaryId')
  @HttpCode(200)
  async get(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
  ): Promise<WebResponse<SalaryResponse>> {
    const result = await this.salaryService.get(salaryId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:salaryId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
    @Body() request: UpdateSalaryRequest,
  ): Promise<WebResponse<SalaryResponse>> {
    request.id = salaryId;
    const result = await this.salaryService.update(salaryId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/pdf')
  @Header('Content-Type', 'application/pdf')
  async downloadPdf(
    @Res() res: Response,
    @Query('status') status: string,
    @Query('month') month: string,
  ) {
    // console.log('DOWNLOAD PDF - Query Params:', { status, month });
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
        .text('Laporan Data Pegawai', { align: 'center' });
      doc.moveDown(2);

      const request: SearchSalaryRequest = {
        month: month,
        status: status,
      };

      const data: any = await this.salaryService.search(request);

      // Table configuration
      const tableHeaders = ['No.', 'Nama Pegawai', 'Bulan', 'Gaji', 'Status'];
      // Adjusted column widths for better proportions
      const colWidths = [50, 200, 120, 120]; // Total: 490px
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
            'Tidak ada data pegawai yang tersedia.',
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
        data.forEach((salary, index) => {
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
          const formattedDate = salary.date
            ? format(salary.date, 'dd-MM-yyyy')
            : 'N/A';
          const formattedAmount = salary.amount
            ? `Rp. ${new Intl.NumberFormat('id-ID').format(salary.amount)}`
            : 'N/A';
          const status = salary.employee.account?.status || 'N/A';

          const rowData = [
            (index + 1).toString(),
            salary.employee.name || 'N/A',
            formattedDate,
            formattedAmount,
            status,
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
  @Delete('/:salaryId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('salaryId', ParseIntPipe) salaryId: number,
  ): Promise<WebResponse<boolean>> {
    await this.salaryService.remove(salaryId);
    return {
      data: true,
    };
  }
}
