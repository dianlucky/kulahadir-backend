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
import { OutgoingDetailService } from './outgoingdetail.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  CreateOutgoingDetailRequest,
  OutgoingDetailResponse,
  UpdateOutgoingDetailRequest,
} from 'src/model/outgoingdetail.model';
import { WebResponse } from 'src/model/web.model';
import { IncomingDetailResponse } from 'src/model/incomingdetail.model';

@Controller('/api/outgoing-details')
export class OutgoingDetailController {
  constructor(private outgoingDetailService: OutgoingDetailService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateOutgoingDetailRequest,
  ): Promise<WebResponse<OutgoingDetailResponse>> {
    const result = await this.outgoingDetailService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getByItemId(
    @Query('itemId', ParseIntPipe) itemId: number,
  ): Promise<WebResponse<OutgoingDetailResponse[]>> {
    const result = await this.outgoingDetailService.getByItemId(itemId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':detailId')
  @HttpCode(200)
  async update(
    @Param('detailId', ParseIntPipe) detailId: number,
    @Body() request: UpdateOutgoingDetailRequest,
  ): Promise<WebResponse<OutgoingDetailResponse>> {
    const result = await this.outgoingDetailService.update(detailId, request);

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
    await this.outgoingDetailService.remove(detailId);
    return {
      data: true,
    };
  }
}
