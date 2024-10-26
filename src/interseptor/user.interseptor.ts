import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UserInterseptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
    console.log('this is interseptor');
    const now = Date.now();
    return next.handle().pipe(tap(()=>console.log(`After.... ${Date.now()  - now} ms`)));
  }


}