import { Module } from '@nestjs/common';
import { DailyTaskModule } from 'src/daily-task/dailytask.module';
import { TaskEmployeeController } from './taskemployee.controller';
import { TaskEmployeeService } from './taskemployee.service';

@Module({
  imports: [DailyTaskModule],
  controllers: [TaskEmployeeController],
  providers: [TaskEmployeeService],
  exports: [TaskEmployeeService],
})
export class TaskEmployeeModule {}
