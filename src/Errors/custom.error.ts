import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CustomError extends HttpException{
  constructor() {
    super('CustomError',HttpStatus.BAD_REQUEST);
  }
}