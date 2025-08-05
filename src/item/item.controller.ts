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
import { ItemService } from './item.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { WebResponse } from 'src/model/web.model';
import {
  CreateItemRequest,
  ItemResponse,
  ItemStatsResponse,
  UpdateItemRequest,
} from 'src/model/item.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { File as MulterFile } from 'multer';

@Controller('/api/items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/items', // path penyimpanan file
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `items-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: MulterFile,
    @Body() body: any,
  ): Promise<WebResponse<ItemResponse>> {
    const request = new CreateItemRequest();
    request.code = body.code;
    request.name = body.name;
    request.stock = parseInt(body.stock);
    request.category_id = parseInt(body.category_id);
    if (file) {
      request.image = file.filename;
    }
    console.log('Validate with data:', request);
    const result = await this.itemService.create(request);

    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/weekly-stats')
  @HttpCode(200)
  async getWeeklyStats(
    @Query('itemId', ParseIntPipe) itemId: number,
    @Query('startDateParams') startDateParams: string,
  ): Promise<WebResponse<ItemStatsResponse[]>> {
    const result = await this.itemService.getStatsWeekly(
      itemId,
      startDateParams,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/count')
  @HttpCode(200)
  async getCount(@Query('type') type: string): Promise<WebResponse<number>> {
    const result = await this.itemService.getCount(type);
    return {
      data: result,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/by-category')
  @HttpCode(200)
  async getByCategory(
    @Query('category') category: string,
  ): Promise<WebResponse<ItemResponse[]>> {
    const result = await this.itemService.getByCategory(category);
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
  @Get(':itemId')
  @HttpCode(200)
  async getById(
    @Param('itemId', ParseIntPipe) itemId: number,
  ): Promise<WebResponse<ItemResponse>> {
    const result = await this.itemService.getById(itemId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':itemId')
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/items', // path penyimpanan file
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `items-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async update(
    @Param('itemId', ParseIntPipe) itemId: number,
    @UploadedFile() file: MulterFile,
    @Body() body: any,
  ): Promise<WebResponse<ItemResponse>> {
    const request = new UpdateItemRequest();
    request.code = body.code;
    request.name = body.name;
    request.category_id = parseInt(body.category_id);
    if (file) {
      request.image = file.filename;
    }
    console.log('data yang dikirim :', request);
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
  ): Promise<WebResponse<ItemResponse>> {
    console.log(itemId);
    const result = await this.itemService.tempRemove(itemId);
    return {
      data: result,
    };
  }
}
