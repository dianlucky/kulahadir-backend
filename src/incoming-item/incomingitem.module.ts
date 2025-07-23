import { Module } from '@nestjs/common';
import { IncomingItemService } from './incomingitem.service';
import { IncomingItemController } from './incomingitem.controller';
import { EmployeeModule } from 'src/employee/employee.module';
import { IncomingDetailModule } from 'src/incoming-detail/incomingdetail.module';

@Module({
  imports: [EmployeeModule, IncomingDetailModule],
  providers: [IncomingItemService],
  controllers: [IncomingItemController],
  exports: [IncomingItemService],
})
export class IncomingItemModule {}
