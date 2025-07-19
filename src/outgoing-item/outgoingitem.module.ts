import { Module } from '@nestjs/common';
import { OutgoingItemService } from './outgoingitem.service';
import { EmployeeModule } from 'src/employee/employee.module';
import { OutgoingItemController } from './outgoingitem.controller';

@Module({
  imports: [EmployeeModule],
  providers: [OutgoingItemService],
  controllers: [OutgoingItemController],
  exports: [OutgoingItemService],
})
export class OutgoingItemModule {}
