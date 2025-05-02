import { Module } from '@nestjs/common';
import { EmployeeLoanService } from './employeeloan.service';
import { EmployeeLoanController } from './employeeloan.controller';
import { EmployeeModule } from '../employee/employee.module';
import { SalaryDeductionModule } from '../salary-deduction/salarydeduction.module';

@Module({
  imports: [EmployeeModule, SalaryDeductionModule],
  providers: [EmployeeLoanService],
  controllers: [EmployeeLoanController],
  exports: [EmployeeLoanService],
})
export class EmployeeLoanModule {}
