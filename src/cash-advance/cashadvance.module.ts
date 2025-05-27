import { Module } from '@nestjs/common';
import { CashAdvanceService } from './cashadvance.service';
import { CashAdvanceController } from './cashadvance.controller';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [CashAdvanceService],
  controllers: [CashAdvanceController],
  exports: [CashAdvanceService],
})
export class CashAdvanceModule {}
