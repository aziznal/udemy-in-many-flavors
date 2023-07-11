import { IsOptional, IsString } from 'class-validator';

export class NewLectureDto {
  @IsString()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  sectionId!: string;
}
