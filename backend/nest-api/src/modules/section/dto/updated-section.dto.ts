import { IsOptional, IsString } from 'class-validator';

export class UpdatedSectionDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  learningObjective?: string;
}
