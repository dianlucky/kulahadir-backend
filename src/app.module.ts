import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { LevelModule } from './level/level.module';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeLoanModule } from './employee-loan/employeeloan.module';
import { SalaryDeductionModule } from './salary-deduction/salarydeduction.module';
import { DailyTaskModule } from './daily-task/dailytask.module';
import { DailyTaskEmployeeModule } from './daily-task-employee/dailytaskemployee.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [
    CommonModule,
    LevelModule,
    AccountModule,
    EmployeeModule,
    EmployeeLoanModule,
    SalaryDeductionModule,
    DailyTaskModule,
    DailyTaskEmployeeModule,
    ScheduleModule,
    AttendanceModule,
    LeaveModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
