import { Module } from '@nestjs/common';
import { ScheduleModule } from 'src/schedule/schedule.module';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [ScheduleModule, NotificationModule],
  controllers: [AttendanceController],
  providers: [AttendanceService],
  exports: [AttendanceService],
})
export class AttendanceModule {}
