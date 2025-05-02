import { Module } from '@nestjs/common';
import { SalaryDeductionService } from './salarydeduction.service';
import { SalaryDeductionController } from './salarydeduction.controller';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [SalaryDeductionService],
  controllers: [SalaryDeductionController],
  exports: [SalaryDeductionService],
})
export class SalaryDeductionModule {}
