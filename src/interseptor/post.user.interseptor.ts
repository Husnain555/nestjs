import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class PostUserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {

    return next.handle().pipe(
      map((data) => {
        // Modify the response data if needed
        data = 'this is from interceptor';
        return data;
      }),
    );
  }
}
