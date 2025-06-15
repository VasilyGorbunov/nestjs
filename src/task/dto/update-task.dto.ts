/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Не может быть пустым.' })
  @Length(2, 40)
  title: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsString()
  @IsOptional()
  description?: string;
}
