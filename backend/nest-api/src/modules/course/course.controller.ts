import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { NewCourseDto } from './dto/new-course.dto';
import { UpdatedCourseDto } from './dto/updated-course.dto';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    validateUUID(id);
    return this.courseService.findOne(id);
  }

  @Post()
  create(@Body() newCourseDto: NewCourseDto) {
    return this.courseService.create(newCourseDto);
  }

  @Patch()
  update(@Body() updatedCourseDto: UpdatedCourseDto) {
    return this.courseService.update(updatedCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    validateUUID(id);
    return this.courseService.delete(id);
  }
}
