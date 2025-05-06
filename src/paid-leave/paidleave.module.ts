import { Module } from '@nestjs/common';
import { PaidLeaveService } from './paidleave.service';
import { PaidLeaveController } from './paidleave.controller';
import { ScheduleModule } from 'src/schedule/schedule.module';

@Module({
  imports: [ScheduleModule],
  providers: [PaidLeaveService],
  controllers: [PaidLeaveController],
  exports: [PaidLeaveService],
})
export class PaidLeaveModule {}
