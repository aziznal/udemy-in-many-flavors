import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from './entities/subcategory.entity';
import { NewSubcategoryDto } from './dto/new-subcategory.dto';
import { UpdatedSubcategoryDto } from './dto/updated-subcategory.dto';
import { z } from 'zod';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get()
  findAll(): Promise<Subcategory[]> {
    return this.subcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subcategory> {
    validateUUID(id);

    return this.subcategoryService.findOne(id);
  }

  @Post()
  create(@Body() newSubcategoryDto: NewSubcategoryDto) {
    return this.subcategoryService.create(newSubcategoryDto);
  }

  @Patch()
  async update(@Body() updatedSubcategoryDto: UpdatedSubcategoryDto) {
    await this.subcategoryService.update(updatedSubcategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    validateUUID(id);

    await this.subcategoryService.delete(id);
  }
}
