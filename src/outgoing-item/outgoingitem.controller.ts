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
  UseGuards,
} from '@nestjs/common';
import { OutgoingItemService } from './outgoingitem.service';
import {
  CreateOutgoingRequest,
  OutgoingItemResponse,
  UpdateOutgoingRequest,
} from 'src/model/outgoingitem.model';
import { WebResponse } from 'src/model/web.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/outgoing-items')
export class OutgoingItemController {
  constructor(private outgoingItemService: OutgoingItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateOutgoingRequest,
  ): Promise<WebResponse<OutgoingItemResponse>> {
    const result = await this.outgoingItemService.create(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(): Promise<WebResponse<OutgoingItemResponse[]>> {
    const result = await this.outgoingItemService.getAll();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':incomingId')
  @HttpCode(200)
  async update(
    @Param('incomingId', ParseIntPipe) incomingId: number,
    @Body() request: UpdateOutgoingRequest,
  ): Promise<WebResponse<OutgoingItemResponse>> {
    const result = await this.outgoingItemService.update(incomingId, request);
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
    await this.outgoingItemService.remove(incomingId);
    return {
      data: true,
    };
  }
}
