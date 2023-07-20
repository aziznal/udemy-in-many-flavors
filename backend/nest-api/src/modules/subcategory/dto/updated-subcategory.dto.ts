import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatedSubcategoryDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  newCategoryId?: string;
}
