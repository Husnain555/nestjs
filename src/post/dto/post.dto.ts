import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class PostDto {
@ApiProperty()
@IsOptional()
@IsString()
  date : string;
@ApiProperty()
  @IsOptional()
  @IsString()
  description: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userId : number;


}
