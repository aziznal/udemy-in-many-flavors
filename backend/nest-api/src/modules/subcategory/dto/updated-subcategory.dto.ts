import { IsOptional, IsString } from 'class-validator';

export class UpdatedSubcategoryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  newCategoryId?: string;
}
