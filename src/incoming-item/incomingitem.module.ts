import { Module } from '@nestjs/common';
import { IncomingItemService } from './incomingitem.service';
import { IncomingItemController } from './incomingitem.controller';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  providers: [IncomingItemService],
  controllers: [IncomingItemController],
  exports: [IncomingItemService],
})
export class IncomingItemModule {}
