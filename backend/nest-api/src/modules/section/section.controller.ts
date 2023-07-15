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
import { SectionService } from './section.service';
import { Section } from './entities/section.entity';
import { NewSectionDto } from './dto/new-section.dto';
import { UpdatedSectionDto } from './dto/updated-section.dto';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  findAll(): Promise<Section[]> {
    return this.sectionService.findAll();
  }

  @Get(':id')
  findOne(@Param() id?: string): Promise<Section> {
    if (!id) throw new BadRequestException('id is required (/section/<your-id-here>)');

    return this.sectionService.findOne(id);
  }

  @Post()
  create(@Body() newSectionDto: NewSectionDto): Promise<Section> {
    return this.sectionService.create(newSectionDto);
  }

  @Patch(':id')
  update(
    @Body()
    updatedSectionDto: UpdatedSectionDto,
    @Param()
    id?: string,
  ) {
    if (!id) throw new BadRequestException('id is required (/section/<your-id-here>)');

    return this.sectionService.update({ id, updatedSectionDto });
  }

  @Delete(':id')
  delete(
    @Param()
    id?: string,
  ) {
    if (!id) throw new BadRequestException('id is required (/section/<your-id-here>)');

    return this.sectionService.delete(id);
  }
}
