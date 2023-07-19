import { Body, Controller, Get, Param } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from './entities/subcategory.entity';
import { NewSubcategoryDto } from './dto/new-subcategory.dto';
import { UpdatedSubcategoryDto } from './dto/updated-subcategory.dto';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get()
  findAll(): Promise<Subcategory[]> {
    return this.subcategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param("id") id: string): Promise<Subcategory> {
    return this.subcategoryService.findOne(id);
  }

  create(@Body() newSubcategoryDto: NewSubcategoryDto) {
    return this.subcategoryService.create(newSubcategoryDto);
  }

  async update(@Body() updatedSubcategoryDto: UpdatedSubcategoryDto, @Param("id") id: string) {
    await this.subcategoryService.update({
      id,
      updatedSubcategoryDto,
    });
  }

  async delete(@Param("id") id: string) {
    await this.subcategoryService.delete(id);
  }
}
