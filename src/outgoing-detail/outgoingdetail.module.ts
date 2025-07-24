import { Module } from '@nestjs/common';
import { OutgoingDetailService } from './outgoingdetail.service';
import { OutgoingDetailController } from './outgoingdetail.controller';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [ItemModule],
  providers: [OutgoingDetailService],
  controllers: [OutgoingDetailController],
  exports: [OutgoingDetailService],
})
export class OutgoingDetailModule {}
