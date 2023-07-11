import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CategoryModule } from '../category/category.module';
import { SectionModule } from '../section/section.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), CategoryModule, SectionModule],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
