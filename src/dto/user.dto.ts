import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class UserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  id: number;

@ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
@ApiProperty()
  @IsOptional()
  @IsString()
  email: string;
@ApiProperty()
  @IsOptional()
  @IsString()
  password: string;

}