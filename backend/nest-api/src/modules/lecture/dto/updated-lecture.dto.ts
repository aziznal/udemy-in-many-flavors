import { IsOptional, IsString } from 'class-validator';

export class UpdatedLectureDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  sectionId?: string;
}
