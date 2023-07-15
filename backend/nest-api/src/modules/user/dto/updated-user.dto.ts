import { IsOptional, IsString } from 'class-validator';

export class UpdatedUserDto {
  @IsString()
  @IsOptional()
  fullname?: string;
}
