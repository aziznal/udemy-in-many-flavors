import { Module } from '@nestjs/common';
import { CurriculumItemService } from './curriculum-item.service';
import { CurriculumItemController } from './curriculum-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumItem } from './entities/curriculum-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumItem])],
  providers: [CurriculumItemService],
  controllers: [CurriculumItemController],
})
export class CurriculumItemModule {}
