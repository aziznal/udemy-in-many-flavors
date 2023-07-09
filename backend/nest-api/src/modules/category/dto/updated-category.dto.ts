import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Course } from 'src/modules/course/entities/course.entity';

export class UpdatedCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name!: string;
}
