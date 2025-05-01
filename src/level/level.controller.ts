import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Account } from 'generated/prisma';
import { Auth } from 'src/common/auth.decorator';
import { CreateLevelRequest, LevelResponse } from 'src/model/level.model';
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
}
