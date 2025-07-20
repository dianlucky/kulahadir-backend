import { Module } from '@nestjs/common';
import { IncomingDetailService } from './incomingdetail.service';
import { IncomingDetailController } from './incomingdetail.controller';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [ItemModule],
  providers: [IncomingDetailService],
  controllers: [IncomingDetailController],
  exports: [IncomingDetailService],
})
export class IncomingDetailModule {}
