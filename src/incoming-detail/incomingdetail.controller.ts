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
  UseGuards,
} from '@nestjs/common';
import { IncomingDetailService } from './incomingdetail.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WebResponse } from 'src/model/web.model';
import {
  AnnualIncomingStats,
  CreateIncomingDetailRequest,
  IncomingDetailResponse,
  MonthlyIncomingStats,
  UpdateIncomingDetailRequest,
} from 'src/model/incomingdetail.model';
import { ItemStatsMonthlyResponse } from 'src/model/item.model';

@Controller('/api/incoming-details/')
export class IncomingDetailController {
  constructor(private incomingDetailService: IncomingDetailService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateIncomingDetailRequest,
  ): Promise<WebResponse<IncomingDetailResponse>> {
    const result = await this.incomingDetailService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-incomingId')
  @HttpCode(200)
  async getByIncomingId(
    @Query('incomingId', ParseIntPipe) incomingId: number,
  ): Promise<WebResponse<IncomingDetailResponse[]>> {
    const result = await this.incomingDetailService.getByIncomingId(incomingId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/by-itemId')
  @HttpCode(200)
  async getByItemId(
    @Query('itemId', ParseIntPipe) itemId: number,
  ): Promise<WebResponse<IncomingDetailResponse[]>> {
    const result = await this.incomingDetailService.getByItemId(itemId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/monthly-stats')
  @HttpCode(200)
  async getWeeklyStats(
    @Query('monthParams') monthParams: string,
  ): Promise<WebResponse<ItemStatsMonthlyResponse[]>> {
    const result =
      await this.incomingDetailService.getStatsMonthly(monthParams);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/annual-stats')
  @HttpCode(200)
  async getAnnualStats(
    @Query('type') type: string,
    @Query('yearParams') yearParams: string,
  ): Promise<WebResponse<AnnualIncomingStats[]>> {
    const result = await this.incomingDetailService.getStatsAnnual(
      type,
      yearParams,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/daily-month-stats')
  @HttpCode(200)
  async getStatsDailyPerMonth(
    @Query('type') type: string,
    @Query('monthParams') monthParams: string,
  ): Promise<WebResponse<MonthlyIncomingStats[]>> {
    const result = await this.incomingDetailService.getStatsDailyPerMonth(
      type,
      monthParams,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':detailId')
  @HttpCode(200)
  async update(
    @Param('detailId', ParseIntPipe) detailId: number,
    @Body() request: UpdateIncomingDetailRequest,
  ): Promise<WebResponse<IncomingDetailResponse>> {
    const result = await this.incomingDetailService.update(detailId, request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':detailId')
  @HttpCode(200)
  async remove(
    @Param('detailId', ParseIntPipe) detailId: number,
  ): Promise<WebResponse<boolean>> {
    await this.incomingDetailService.remove(detailId);
    return {
      data: true,
    };
  }
}
