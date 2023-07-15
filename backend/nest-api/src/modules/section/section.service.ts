import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';
import { NewSectionDto } from './dto/new-section.dto';
import { UpdatedSectionDto } from './dto/updated-section.dto';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private sectionRepo: Repository<Section>,
  ) {}

  async findAll(): Promise<Section[]> {
    return this.sectionRepo.find();
  }

  async findOne(id: string): Promise<Section> {
    const section = await this.sectionRepo.findOneBy({ id });

    if (!section) throw new NotFoundException('No section with given id was found');

    return section;
  }

  async create(newSectionDto: NewSectionDto): Promise<Section> {
    const newSection = this.sectionRepo.create(newSectionDto);

    await this.sectionRepo.save(newSection);

    return newSection;
  }

  async update({ id, updatedSectionDto }: { id: string; updatedSectionDto: UpdatedSectionDto }) {
    const updatedSection = await this.sectionRepo.preload({
      id,
      ...updatedSectionDto,
    });

    if (!updatedSection) throw new NotFoundException('Update failed: Section was not found');

    await this.sectionRepo.save(updatedSection);
  }

  async delete(id: string) {
    const section = await this.sectionRepo.findOneBy({ id });

    if (!section) throw new NotFoundException('Delete section failed: Section was not found');

    await this.sectionRepo.delete(id);
  }
}
