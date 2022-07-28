import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private route: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status == 401) {
            this.auth.setUser();
            this.route.navigateByUrl('/connexion')
          }
          return throwError(err)
        })
      )
  }
}
function catchError(arg0: (err: any) => Observable<never>): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

