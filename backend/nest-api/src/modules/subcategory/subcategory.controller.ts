import { BadRequestException, Body, Controller, Get, Param } from '@nestjs/common';
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
  findOne(@Param() id?: string): Promise<Subcategory> {
    if (!id) throw new BadRequestException('id is required (/subcategory/<your-id-here>)');

    return this.subcategoryService.findOne(id);
  }

  create(@Body() newSubcategoryDto: NewSubcategoryDto) {
    return this.subcategoryService.create(newSubcategoryDto);
  }

  async update(@Body() updatedSubcategoryDto: UpdatedSubcategoryDto, @Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/section/<your-id-here>)');

    await this.subcategoryService.update({
      id,
      updatedSubcategoryDto,
    });
  }

  async delete(@Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/section/<your-id-here>)');

    await this.subcategoryService.delete(id);
  }
}
