import { Module } from '@nestjs/common';
import { EmployeeLoanService } from './employeeloan.service';
import { EmployeeLoanController } from './employeeloan.controller';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [EmployeeLoanService],
  controllers: [EmployeeLoanController],
  exports: [EmployeeLoanService],
})
export class EmployeeLoanModule {}
