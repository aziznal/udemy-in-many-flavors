import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureController } from './lecture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculumItem } from './entities/curriculum-item.entity';
import { SectionModule } from '../section/section.module';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculumItem]), SectionModule],
  controllers: [LectureController],
  providers: [LectureService],
  exports: [LectureService],
})
export class CurriculumItemModule {}
