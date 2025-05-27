import { Module } from '@nestjs/common';
import { DailyTaskEmployeeService } from './dailytaskemployee.service';
import { DailyTaskEmployeeController } from './dailytaskemployee.controller';
import { TaskEmployeeModule } from 'src/task-employee/taskemployee.module';

@Module({
  imports: [TaskEmployeeModule],
  providers: [DailyTaskEmployeeService],
  controllers: [DailyTaskEmployeeController],
  exports: [DailyTaskEmployeeService],
})
export class DailyTaskEmployeeModule {}
