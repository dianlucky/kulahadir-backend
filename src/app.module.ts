import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { LevelModule } from './level/level.module';
import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [CommonModule, LevelModule, AccountModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
