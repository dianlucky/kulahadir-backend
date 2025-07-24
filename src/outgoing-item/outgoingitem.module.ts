import { Module } from '@nestjs/common';
import { OutgoingItemService } from './outgoingitem.service';
import { EmployeeModule } from 'src/employee/employee.module';
import { OutgoingItemController } from './outgoingitem.controller';
import { OutgoingDetailModule } from 'src/outgoing-detail/outgoingdetail.module';

@Module({
  imports: [EmployeeModule, OutgoingDetailModule],
  providers: [OutgoingItemService],
  controllers: [OutgoingItemController],
  exports: [OutgoingItemService],
})
export class OutgoingItemModule {}
