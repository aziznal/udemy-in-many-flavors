import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(4)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  @MinLength(8)
  password: string;
}
