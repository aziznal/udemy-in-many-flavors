import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NewCategoryDto } from './dto/new-category.dto';
import { UpdatedCategoryDto } from './dto/updated-category.dto';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() newCategoryDto: NewCategoryDto): Promise<Category> {
    return this.categoryService.create(newCategoryDto);
  }

  @Patch(':id')
  async update(@Body() updatedCategoryDto: UpdatedCategoryDto): Promise<void> {
    return this.categoryService.update(updatedCategoryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
