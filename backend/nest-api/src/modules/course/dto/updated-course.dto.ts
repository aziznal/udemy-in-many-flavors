import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Section } from 'src/modules/section/entities/section.entity';

export class UpdatedCourseDto {
  @IsUUID()
  id!: string;

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
