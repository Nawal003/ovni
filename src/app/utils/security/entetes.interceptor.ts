import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EntetesInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap(stat => {
          console.log('interception de stat', stat);

        })
      )
  }
}
function tap(arg0: (stat: any) => void): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

