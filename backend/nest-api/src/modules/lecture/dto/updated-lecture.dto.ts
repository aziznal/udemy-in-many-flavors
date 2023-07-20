import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatedLectureDto {
  @IsUUID()
  id!: string;

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
