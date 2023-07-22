import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
    return this.categoryRepo.find({
      relations: ['subcategories'],
    });
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepo.find({
      where: { id },
      relations: ['subcategories'],
      take: 1,
    });

    if (!category || category.length === 0) {
      throw new NotFoundException('Find category failed: Category was not found');
    }

    return category[0];
  }

  async create(newCategoryDto: NewCategoryDto): Promise<Category> {
    // Confirm no other category exists with given name
    const existingCategory = await this.categoryRepo.findOneBy({ name: newCategoryDto.name });

    if (existingCategory) {
      throw new ConflictException(
        'Create category failed: Category with given name already exists',
      );
    }

    const newCategory = this.categoryRepo.create(newCategoryDto);

    await this.categoryRepo.save(newCategory);

    console.log(newCategory);

    return newCategory;
  }

  async update(updatedCategoryDto: UpdatedCategoryDto): Promise<void> {
    const category = await this.categoryRepo.preload({ ...updatedCategoryDto });

    if (!category) throw new NotFoundException('Updated category failed: Category was not found');

    await this.categoryRepo.save(category);
  }

  async delete(id: string): Promise<void> {
    const category = await this.categoryRepo.findOneBy({ id });

    if (!category) throw new NotFoundException('Delete category failed: Category was not found');

    await this.categoryRepo.remove(category);
  }
}
