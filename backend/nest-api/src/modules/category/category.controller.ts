import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NewCategoryDto } from './dto/new-category.dto';
import { UpdatedCategoryDto } from './dto/updated-category.dto';
import { CategoryService } from './category.service';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    validateUUID(id);
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() newCategoryDto: NewCategoryDto) {
    return this.categoryService.create(newCategoryDto);
  }

  @Patch()
  async update(@Body() updatedCategoryDto: UpdatedCategoryDto) {
    return this.categoryService.update(updatedCategoryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    validateUUID(id);
    return this.categoryService.delete(id);
  }
}
