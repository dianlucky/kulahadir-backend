import { HttpException, Inject, Injectable, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from '../common/prisma.service';
import { ValidationService } from '../common/validation.service';
import { Account, Level } from '@prisma/client';
import {
  CreateLevelRequest,
  LevelResponse,
  UpdateLevelRequest,
} from 'src/model/level.model';
import { LevelValidation } from './level.validation';

@Injectable()
export class LevelService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
  ) {}

  toLevelResponse(level: Level): LevelResponse {
    return {
      id: level.id,
      name: level.name,
    };
  }

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

  async checkLevelMustExists(levelId: number) {
    const level = await this.prismaService.level.findFirst({
      where: {
        id: levelId,
      },
    });

    if (!level) {
      throw new HttpException('Level is not found ni yee', 404);
    }
    return level;
  }

  async get(levelId: number): Promise<LevelResponse> {
    const level = await this.checkLevelMustExists(levelId);
    return this.toLevelResponse(level);
  }

  async update(request: UpdateLevelRequest): Promise<LevelResponse> {
    const validatedData = await this.validationService.validate(
      LevelValidation.UPDATE,
      request,
    );
    await this.checkLevelMustExists(validatedData.id);
    const updatedLevel = await this.prismaService.level.update({
      where: {
        id: validatedData.id,
      },
      data: validatedData,
    });

    return this.toLevelResponse(updatedLevel);
  }

  async remove(levelId: number): Promise<LevelResponse> {
    await this.checkLevelMustExists(levelId);

    const deleteLevel = await this.prismaService.level.delete({
      where: {
        id: levelId,
      },
    });

    return this.toLevelResponse(deleteLevel);
  }
}
