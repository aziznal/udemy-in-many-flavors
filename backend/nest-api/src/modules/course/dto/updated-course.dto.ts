import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { Category } from 'src/modules/category/entities/category.entity';
import { Section } from 'src/modules/section/entities/section.entity';

export class UpdatedCourseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsString()
  @IsOptional()
  sections?: Section[];
}
