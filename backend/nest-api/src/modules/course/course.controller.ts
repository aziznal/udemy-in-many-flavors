import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Course } from './entities/course.entity';
import { CourseService } from './course.service';
import { NewCourseDto } from './dto/new-course.dto';
import { UpdatedCourseDto } from './dto/updated-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param() id?: string): Promise<Course> {
    if (!id) throw new BadRequestException('id is required (/course/<your-id-here>)');

    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() newCourseDto: NewCourseDto): Promise<Course> {
    return this.courseService.create(newCourseDto);
  }

  @Patch(':id')
  update(@Body() updatedCourseDto: UpdatedCourseDto, @Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/course/<your-id-here>)');

    return this.courseService.update({ id, updatedCourseDto });
  }

  @Delete(':id')
  delete(@Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/course/<your-id-here>)');

    return this.courseService.delete(id);
  }
}
