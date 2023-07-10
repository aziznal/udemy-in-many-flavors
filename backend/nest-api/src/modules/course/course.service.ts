import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCourseDto } from './dto/new-course.dto';
import { UpdatedCourseDto } from './dto/updated-course.dto';
import { CategoryService } from '../category/category.service';
import { SectionService } from '../section/section.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,

    private categoryService: CategoryService,

    private sectionService: SectionService,

    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Course[]> {
    return this.courseRepo.find({});
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseRepo.findOneBy({ id });

    if (!course) {
      throw new NotFoundException('Could not find course with given id');
    }

    return course;
  }

  async create(newCourseDto: NewCourseDto): Promise<Course> {
    const newCourse = this.courseRepo.create(newCourseDto);

    await this.courseRepo.save(newCourse);

    return newCourse;
  }

  async update({ id, updatedCourseDto }: { id: string; updatedCourseDto: UpdatedCourseDto }) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      const { sections: updatedSections, categoryId: updatedCategoryId, ...simpleFields } = updatedCourseDto;

      // first update simple fields
      const simpleUpdatedCourse = await this.courseRepo.preload({ id, ...simpleFields });

      if (!simpleUpdatedCourse) throw new NotFoundException('Cannot update course with given id as it was not found');

      await this.courseRepo.save(simpleUpdatedCourse);

      // next, update complex fields, starting with category
      const complexUpdatedCourse = await this.courseRepo.findOneBy({ id });

      if (!complexUpdatedCourse) throw new NotFoundException('Cannot update course with given id as it was not found');

      // if category id was updated
      if (updatedCategoryId) {
        const category = await this.categoryService.findOne(updatedCategoryId);
        complexUpdatedCourse.category = category;
      }

      // if sections were updated
      if (updatedSections) {
        // updated sections means new sections were added. Create them and add them here
        //
        // TODO
        //
        // Challenge: how to account for existing courses while creating potential new ones?
      }

      await this.courseRepo.save(complexUpdatedCourse);

      await queryRunner.commitTransaction();
    } catch (error: unknown) {
      await queryRunner.rollbackTransaction();

      // if unknown error
      if (!(error instanceof NotFoundException))
        throw new InternalServerErrorException('Something went wrong while updating course');

      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  delete(id: string) {
    return this.courseRepo.delete(id);
  }
}
