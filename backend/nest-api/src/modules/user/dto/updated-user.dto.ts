import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatedUserDto {
  @IsUUID()
  id!: string;

  @IsString()
  @IsOptional()
  fullname?: string;
}
