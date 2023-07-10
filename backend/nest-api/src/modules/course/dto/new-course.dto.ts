import { IsString } from 'class-validator';

export class NewCourseDto {
  @IsString()
  title!: string;
}
