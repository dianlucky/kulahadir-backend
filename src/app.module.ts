import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';
import { DailyTaskModule } from './daily-task/dailytask.module';
import { DailyTaskEmployeeModule } from './daily-task-employee/dailytaskemployee.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LeaveModule } from './leave-request/leave.module';
import { SalaryModule } from './salary/salary.module';
import { CashAdvanceModule } from './cash-advance/cashadvance.module';
import { TaskEmployeeModule } from './task-employee/taskemployee.module';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { IncomingItemModule } from './incoming-item/incomingitem.module';
import { OutgoingItemModule } from './outgoing-item/outgoingitem.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    AccountModule,
    EmployeeModule,
    DailyTaskModule,
    DailyTaskEmployeeModule,
    ScheduleModule,
    AttendanceModule,
    LeaveModule,
    SalaryModule,
    CashAdvanceModule,
    TaskEmployeeModule,
    NotificationModule,
    CategoryModule,
    ItemModule,
    IncomingItemModule,
    OutgoingItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
