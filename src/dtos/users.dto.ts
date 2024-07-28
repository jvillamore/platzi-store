import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  readonly state: string;
  @IsNotEmpty()
  @IsString()
  readonly fullname: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
