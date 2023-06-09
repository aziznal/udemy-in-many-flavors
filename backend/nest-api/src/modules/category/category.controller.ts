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
  findOne(@Param() id?: string): Promise<Category> {
    if (!id) throw new BadRequestException('id is required (/category/<your-id-here>)');

    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() newCategoryDto: NewCategoryDto): Promise<Category> {
    return this.categoryService.create(newCategoryDto);
  }

  @Patch(':id')
  async update(
    @Body() updatedCategoryDto: UpdatedCategoryDto,
    @Param() id?: string,
  ): Promise<void> {
    if (!id) throw new BadRequestException('id is required (/category/<your-id-here>)');

    return this.categoryService.update({
      id,
      updatedCategoryDto,
    });
  }

  @Delete(':id')
  delete(@Param() id?: string) {
    if (!id) throw new BadRequestException('id is required (/category/<your-id-here>)');

    return this.categoryService.delete(id);
  }
}
