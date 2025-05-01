import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Account } from 'generated/prisma';
import { Auth } from 'src/common/auth.decorator';
import {
  CreateLevelRequest,
  LevelResponse,
  UpdateLevelRequest,
} from 'src/model/level.model';
import { WebResponse } from 'src/model/web.model';
import { LevelService } from './level.service';

@Controller('/api/levels')
export class LevelController {
  constructor(private levelService: LevelService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateLevelRequest,
  ): Promise<WebResponse<LevelResponse>> {
    const result = await this.levelService.create(account, request);
    return {
      data: result,
    };
  }

  @Get('/:levelId')
  @HttpCode(200)
  async get(
    @Auth()
    @Param('levelId', ParseIntPipe)
    levelId: number,
  ): Promise<WebResponse<LevelResponse>> {
    const result = await this.levelService.get(levelId);
    return {
      data: result,
    };
  }

  @Put('/:levelId')
  @HttpCode(200)
  async update(
    @Auth()
    @Param('levelId', ParseIntPipe)
    levelId: number,
    @Body() request: UpdateLevelRequest,
  ): Promise<WebResponse<LevelResponse>> {
    request.id = levelId;
    const result = await this.levelService.update(request);

    return {
      data: result,
    };
  }

  @Delete('/:levelId')
  @HttpCode(200)
  async remove(
    @Auth()
    @Param('levelId', ParseIntPipe)
    levelId: number,
  ): Promise<WebResponse<boolean>> {
    const result = await this.levelService.remove(levelId);

    return {
      data: true,
    };
  }
}
