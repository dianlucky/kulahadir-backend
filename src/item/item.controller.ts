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
import { ItemService } from './item.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WebResponse } from 'src/model/web.model';
import {
  CreateItemRequest,
  ItemResponse,
  UpdateItemRequest,
} from 'src/model/item.model';

@Controller('/api/items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Body() request: CreateItemRequest,
  ): Promise<WebResponse<ItemResponse>> {
    const result = await this.itemService.create(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getAll(): Promise<WebResponse<ItemResponse[]>> {
    const result = await this.itemService.getAll();
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':itemId')
  @HttpCode(200)
  async update(
    @Param('itemId', ParseIntPipe) itemId: number,
    @Body() request: UpdateItemRequest,
  ): Promise<WebResponse<ItemResponse>> {
    const result = await this.itemService.update(itemId, request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':itemId')
  @HttpCode(200)
  async remove(
    @Param('itemId', ParseIntPipe) itemId: number,
  ): Promise<WebResponse<boolean>> {
    await this.itemService.remove(itemId);
    return {
      data: true,
    };
  }
}
