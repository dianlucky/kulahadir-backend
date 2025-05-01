import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { Account } from 'generated/prisma';
import { CreateLevelRequest, LevelResponse } from 'src/model/level.model';
import { LevelValidation } from './level.validation';

@Injectable()
export class LevelService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  async create(
    account: Account,
    request: CreateLevelRequest,
  ): Promise<LevelResponse> {
    const validatedData: CreateLevelRequest = this.validationService.validate(
      LevelValidation.CREATE,
      request,
    );

    const totalLevelWithSameName = await this.prismaService.level.count({
      where: {
        name: validatedData.name,
      },
    });

    if (totalLevelWithSameName != 0) {
      throw new HttpException('Level already exists', 400);
    }

    const level = await this.prismaService.level.create({
      data: validatedData,
    });

    return {
      id: level.id,
      name: level.name,
    };
  }
}
