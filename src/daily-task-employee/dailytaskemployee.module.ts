import { Module } from '@nestjs/common';
import { DailyTaskEmployeeService } from './dailytaskemployee.service';
import { DailyTaskEmployeeController } from './dailytaskemployee.controller';
import { DailyTaskModule } from 'src/daily-task/dailytask.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [DailyTaskModule, EmployeeModule],
  providers: [DailyTaskEmployeeService],
  controllers: [DailyTaskEmployeeController],
  exports: [DailyTaskEmployeeService],
})
export class DailyTaskEmployeeModule {}
