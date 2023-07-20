import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { Lecture } from './entities/lecture.entity';
import { NewLectureDto } from './dto/new-lecture.dto';
import { UpdatedLectureDto } from './dto/updated-lecture.dto';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @Get()
  findAll(): Promise<Lecture[]> {
    return this.lectureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    validateUUID(id);
    return this.lectureService.findOne(id);
  }

  @Post('lecture')
  createLecture(@Body() newLectureDto: NewLectureDto): Promise<Lecture> {
    return this.lectureService.createLecture(newLectureDto);
  }

  @Patch()
  update(@Body() updatedLectureDto: UpdatedLectureDto) {
    return this.lectureService.update(updatedLectureDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    validateUUID(id);
    await this.lectureService.delete(id);
  }
}
