import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private sectionRepo: Repository<Section>,
  ) {}

  async findOne(id: string): Promise<Section> {
    const section = await this.sectionRepo.findOneBy({ id });

    if (!section) throw new NotFoundException('No section with given id was found');

    return section;
  }
}
