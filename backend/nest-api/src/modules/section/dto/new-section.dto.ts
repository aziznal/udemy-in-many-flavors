import { IsString } from 'class-validator';

export class NewSectionDto {
  @IsString()
  title!: string;

  @IsString()
  learningObjective!: string;

  @IsString()
  courseId!: string;
}
