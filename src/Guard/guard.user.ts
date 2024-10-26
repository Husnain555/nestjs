import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import {Request} from 'express';
@Injectable()
export class Guard implements CanActivate {
  public key : string = 'husnain1998@';
  canActivate(
    context: ExecutionContext,
  ): boolean  {
    const ctx = context.switchToHttp();
    const responce = ctx.getRequest<Request>()
if (responce.header('key')== undefined) {
  return false;
}
return responce.header('key') === this.key;


  }
}