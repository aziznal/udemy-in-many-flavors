import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SectionService } from './section.service';
import { NewSectionDto } from './dto/new-section.dto';
import { UpdatedSectionDto } from './dto/updated-section.dto';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    validateUUID(id);
    return this.sectionService.findOne(id);
  }

  @Post()
  create(@Body() newSectionDto: NewSectionDto) {
    return this.sectionService.create(newSectionDto);
  }

  @Patch()
  update(
    @Body()
    updatedSectionDto: UpdatedSectionDto,
  ) {
    return this.sectionService.update(updatedSectionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    validateUUID(id);
    return this.sectionService.delete(id);
  }
}
