import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCourseDto } from './dto/new-course.dto';
import { UpdatedCourseDto } from './dto/updated-course.dto';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,

    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Course[]> {
    return this.courseRepo.find({});
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseRepo.findOneBy({ id });

    if (!course) {
      throw new NotFoundException('Find course failed: Course was not found');
    }

    return course;
  }

  async create(newCourseDto: NewCourseDto): Promise<Course> {
    const newCourse = this.courseRepo.create(newCourseDto);

    await this.courseRepo.save(newCourse);

    return newCourse;
  }

  async update(updatedCourseDto: UpdatedCourseDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      const {
        sections: updatedSections,
        categoryId: updatedCategoryId,
        ...simpleFields
      } = updatedCourseDto;

      // first update simple fields
      const simpleUpdatedCourse = await queryRunner.manager.preload(Course, simpleFields);

      if (!simpleUpdatedCourse)
        throw new NotFoundException('Update course failed: Course was not found');

      await queryRunner.manager.save(Course, simpleUpdatedCourse);

      // next, update complex fields, starting with category
      const complexUpdatedCourse = await queryRunner.manager.findOneBy(Course, {
        id: updatedCourseDto.id,
      });

      if (!complexUpdatedCourse)
        throw new NotFoundException('Update course failed: Course was not found');

      // if category id was updated
      if (updatedCategoryId) {
        const category = await queryRunner.manager.findOneBy(Category, { id: updatedCategoryId });

        if (!category)
          throw new NotFoundException('Change course category failed: new category was not found');

        complexUpdatedCourse.category = category;
      }

      // if sections were updated
      if (updatedSections) {
        // updated sections means new sections were added. Create them and add them here
        //
        // TODO
        //
        // Challenge: how to account for existing sections while creating potential new ones?
      }

      await queryRunner.manager.save(Course, complexUpdatedCourse);

      await queryRunner.commitTransaction();
    } catch (error: unknown) {
      await queryRunner.rollbackTransaction();

      // if unknown error
      if (!(error instanceof NotFoundException)) {
        console.error(error);
        throw new InternalServerErrorException('Something went wrong while updating course');
      }

      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: string) {
    const course = await this.courseRepo.findOneBy({ id });

    if (!course) throw new NotFoundException('Delete course failed: Course was not found');

    return this.courseRepo.delete(id);
  }
}
