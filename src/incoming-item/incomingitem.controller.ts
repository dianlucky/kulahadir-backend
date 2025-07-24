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
import { IncomingItemService } from './incomingitem.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WebResponse } from 'src/model/web.model';
import {
  CreateIncomingItemRequest,
  IncomingItemResponse,
  UpdateIncomingItemRequest,
} from 'src/model/incomingitem.model';
import { IncomingDetailResponse } from 'src/model/incomingdetail.model';

@Controller('/api/incoming-items')
export class IncomingItemController {
  constructor(private incomingItemService: IncomingItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateIncomingItemRequest,
  ): Promise<WebResponse<IncomingItemResponse>> {
    const result = await this.incomingItemService.create(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(): Promise<WebResponse<IncomingItemResponse[]>> {
    const result = await this.incomingItemService.getAll();
    return {
      data: result,
    };
  }


  @UseGuards(JwtAuthGuard)
  @Get('by-date')
  @HttpCode(200)
  async getByDate(
    @Query('dateString') dateString: string,
  ): Promise<
    WebResponse<
      (IncomingItemResponse & { details: IncomingDetailResponse[] })[]
    >
  > {
    const result = await this.incomingItemService.getByDate(dateString);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':incomingId')
  @HttpCode(200)
  async update(
    @Param('incomingId', ParseIntPipe) incomingId: number,
    @Body() request: UpdateIncomingItemRequest,
  ): Promise<WebResponse<IncomingItemResponse>> {
    const result = await this.incomingItemService.update(incomingId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':incomingId')
  @HttpCode(200)
  async remove(
    @Param('incomingId', ParseIntPipe) incomingId: number,
  ): Promise<WebResponse<boolean>> {
    await this.incomingItemService.remove(incomingId);
    return {
      data: true,
    };
  }
}
