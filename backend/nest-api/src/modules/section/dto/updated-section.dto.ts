import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatedSectionDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  learningObjective?: string;
}
