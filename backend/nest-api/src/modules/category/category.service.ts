import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCategoryDto } from './dto/new-category.dto';
import { UpdatedCategoryDto } from './dto/updated-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepo.findOneBy({ id });

    if (!category) {
      throw new NotFoundException('Category with given ID was not found');
    }

    return category;
  }

  async create(newCategoryDto: NewCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepo.create(newCategoryDto);

    await this.categoryRepo.save(newCategory);

    return newCategory;
  }

  async update({ id, updatedCategoryDto }: { id: string; updatedCategoryDto: UpdatedCategoryDto }): Promise<void> {
    try {
      await this.findOne(id);
    } catch (e: unknown) {
      throw new NotFoundException('Cannot update course as it was not found');
    }

    const result = await this.categoryRepo.update({ id: id }, updatedCategoryDto);

    if (!result.affected) throw new InternalServerErrorException('Something went wrong while updating category!');
  }

  async delete(id: string) {
    try {
      await this.findOne(id);
    } catch (e: unknown) {
      throw new NotFoundException('Cannot delete course as it was not found');
    }

    const result = await this.categoryRepo.delete({ id: id });

    if (!result.affected) throw new InternalServerErrorException('Something went wrong while deleting category!');
  }
}
