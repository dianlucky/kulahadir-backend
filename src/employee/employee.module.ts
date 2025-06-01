import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { AccountModule } from '../account/account.module';
import { PrismaService } from '../common/prisma.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [AccountModule, NotificationModule],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
