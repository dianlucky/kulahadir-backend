import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { LevelModule } from './level/level.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [CommonModule, LevelModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
