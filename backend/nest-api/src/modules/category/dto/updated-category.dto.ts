import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class UpdatedCategoryDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;
}
