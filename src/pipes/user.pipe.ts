import { Injectable, PipeTransform } from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any): any {
    if (value.id == 1){
      throw ValidationError
    }
  }
}