import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { EmployeeModule } from '../employee/employee.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [EmployeeModule, NotificationModule],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
