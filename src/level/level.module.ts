import { Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

@Module({
  providers: [LevelService],
  controllers: [LevelController],
})
export class LevelModule {}
