import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
  imports: [CategoryModule],
  providers: [ItemService],
  controllers: [ItemController],
  exports: [ItemService],
})
export class ItemModule {}
