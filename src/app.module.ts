import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { LevelModule } from './level/level.module';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeLoanModule } from './employee-loan/employeeloan.module';
import { SalaryDeductionModule } from './salary-deduction/salarydeduction.module';

@Module({
  imports: [
    CommonModule,
    LevelModule,
    AccountModule,
    EmployeeModule,
    EmployeeLoanModule,
    SalaryDeductionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
