import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [SalaryService],
  controllers: [SalaryController],
  exports: [SalaryService],
})
export class SalaryModule {}
