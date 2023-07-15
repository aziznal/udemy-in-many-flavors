import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Subcategory } from './entities/subcategory.entity';
import { NewSubcategoryDto } from './dto/new-subcategory.dto';
import { CategoryService } from '../category/category.service';
import { UpdatedSubcategoryDto } from './dto/updated-subcategory.dto';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private subcategoryRepo: Repository<Subcategory>,

    private categoryService: CategoryService,

    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<Subcategory[]> {
    return this.subcategoryRepo.find();
  }

  async findOne(id: string) {
    const subcategory = await this.subcategoryRepo.findOneBy({ id });

    if (!subcategory)
      throw new NotFoundException('Find subcategory failed: subcategory was not found');

    return subcategory;
  }

  async create(newSubcategoryDto: NewSubcategoryDto) {
    const parentCategory = await this.categoryService.findOne(newSubcategoryDto.categoryId);

    if (!parentCategory)
      throw new NotFoundException('Create subcategory failed: parent category was not found');

    const newSubcategory = this.subcategoryRepo.create({
      name: newSubcategoryDto.name,
      category: parentCategory,
    });

    await this.subcategoryRepo.save(newSubcategory);
  }

  async update({
    id,
    updatedSubcategoryDto,
  }: {
    id: string;
    updatedSubcategoryDto: UpdatedSubcategoryDto;
  }) {
    const { newCategoryId, ...simpleFields } = updatedSubcategoryDto;

    const queryRunner = this.dataSource.createQueryRunner();

    try {
      // first update simple fields
      const simpleSubcategoryUpdate = await queryRunner.manager.preload(Subcategory, simpleFields);

      if (!simpleSubcategoryUpdate)
        throw new NotFoundException('Update subcategory failed: subcategory was not found');

      await queryRunner.manager.save(simpleSubcategoryUpdate);

      // move to new category if new category id was given
      if (newCategoryId) {
        const newCategory = await queryRunner.manager.findOneBy(Category, { id: newCategoryId });

        if (!newCategory)
          throw new NotFoundException('Move subcategory failed: new parent category was not found');

        const movedSubcategory = await queryRunner.manager.findOneBy(Subcategory, { id });

        if (!movedSubcategory)
          throw new NotFoundException('Move subcategory failed: Subcategory was not found');

        movedSubcategory.category = newCategory;

        await queryRunner.manager.save(Subcategory, movedSubcategory);

        await queryRunner.commitTransaction();
      }
    } catch (e: unknown) {
      console.error(`[${SubcategoryService.name} | Update Error] ${e}`);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: string) {
    const subcategory = await this.subcategoryRepo.findOneBy({ id });

    if (!subcategory)
      throw new NotFoundException('Delete subcategory failed: Subcategory was not found');

    await this.subcategoryRepo.delete(id);
  }
}
