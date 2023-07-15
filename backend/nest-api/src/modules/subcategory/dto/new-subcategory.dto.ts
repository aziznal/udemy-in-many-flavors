import { IsString } from 'class-validator';

export class NewSubcategoryDto {
  @IsString()
  name!: string;

  @IsString()
  categoryId!: string;
}
