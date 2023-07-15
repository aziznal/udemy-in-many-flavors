import { Injectable, NotFoundException } from '@nestjs/common';
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
      throw new NotFoundException('Find category failed: Category was not found');
    }

    return category;
  }

  async create(newCategoryDto: NewCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepo.create(newCategoryDto);

    await this.categoryRepo.save(newCategory);

    return newCategory;
  }

  async update({
    id,
    updatedCategoryDto,
  }: {
    id: string;
    updatedCategoryDto: UpdatedCategoryDto;
  }): Promise<void> {
    const category = await this.categoryRepo.preload({ id, ...updatedCategoryDto });

    if (!category) throw new NotFoundException('Updated category failed: Category was not found');

    await this.categoryRepo.save(category);
  }

  async delete(id: string) {
    const category = await this.categoryRepo.findOneBy({ id });

    if (!category) throw new NotFoundException('Delete category failed: Category was not found');

    await this.categoryRepo.delete(category);
  }
}
