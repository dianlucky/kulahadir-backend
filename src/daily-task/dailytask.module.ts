import { Module } from '@nestjs/common';
import { DailyTaskService } from './dailytask.service';
import { DailyTaskController } from './dailytask.controller';

@Module({
  providers: [DailyTaskService],
  controllers: [DailyTaskController],
  exports: [DailyTaskService],
})
export class DailyTaskModule {}
