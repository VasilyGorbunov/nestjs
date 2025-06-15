/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Не может быть пустым.' })
  @Length(2, 40)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  @IsPositive()
  priority: number;

  @IsOptional()
  @IsArray()
  @IsEnum(TaskTag, { each: true })
  tags: string[];
}
