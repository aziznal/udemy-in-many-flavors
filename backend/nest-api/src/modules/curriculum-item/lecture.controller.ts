import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { Lecture } from './entities/curriculum-item.entity';
import { NewLectureDto } from './dto/new-lecture.dto';
import { UpdatedLectureDto } from './dto/updated-lecture.dto';

@Controller('lecture')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @Get()
  findAll(): Promise<Lecture[]> {
    return this.lectureService.findAll();
  }

  @Get(':id')
  findOne(@Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/curriculum-item/<your-id-here>)');

    return this.lectureService.findOne(id);
  }

  @Post('lecture')
  createLecture(@Body() newLectureDto: NewLectureDto): Promise<Lecture> {
    return this.lectureService.createLecture(newLectureDto);
  }

  @Patch(':id')
  update(@Body() updatedLectureDto: UpdatedLectureDto, @Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/curriculum-item/<your-id-here>)');

    return this.lectureService.update({ id, updatedLectureDto });
  }

  @Delete(':id')
  async delete(@Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/curriculum-item/<your-id-here>)');

    await this.lectureService.delete(id);
  }
}
