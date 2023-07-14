import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from './entities/lecture.entity';
import { DataSource, Repository } from 'typeorm';
import { NewLectureDto } from './dto/new-lecture.dto';
import { UpdatedLectureDto } from './dto/updated-lecture.dto';
import { Section } from '../section/entities/section.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private lectureRepo: Repository<Lecture>,

    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Lecture[]> {
    return this.lectureRepo.find();
  }

  async findOne(id: string): Promise<Lecture> {
    const lecture = await this.lectureRepo.findOneBy({ id });

    if (!lecture) throw new NotFoundException('Lecture with given id was not found');

    return lecture;
  }

  async createLecture(newLectureDto: NewLectureDto): Promise<Lecture> {
    const newLecture = this.lectureRepo.create(newLectureDto);

    await this.lectureRepo.save(newLecture);

    return newLecture;
  }

  async update({ id, updatedLectureDto }: { id: string; updatedLectureDto: UpdatedLectureDto }) {
    const { sectionId: updatedSectionId, ...simpleFields } = updatedLectureDto;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const simpleUpdatedLecture = await queryRunner.manager.preload(Lecture, {
        id,
        ...simpleFields,
      });

      if (!simpleUpdatedLecture) {
        throw new NotFoundException('Cannot updated Lecture as it was not found');
      }

      await queryRunner.manager.save(Lecture, simpleUpdatedLecture);

      // if section id changed, this lecture now belongs to a different section
      if (updatedSectionId) {
        const newSection = await queryRunner.manager.findOneBy(Section, { id: updatedSectionId });
        if (!newSection)
          throw new NotFoundException(
            'Update failed: Could not change lecture section as the section was not found with the given id',
          );

        const lecture = await queryRunner.manager.findOneBy(Lecture, { id });
        if (!lecture)
          throw new NotFoundException(
            'Update failed: Could not change lecture section as the lecture was not found with the given id',
          );

        lecture.section = newSection;

        await queryRunner.manager.save(Lecture, lecture);
      }

      await queryRunner.commitTransaction();
    } catch (error: unknown) {
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: string) {
    await this.lectureRepo.delete(id);
  }
}
