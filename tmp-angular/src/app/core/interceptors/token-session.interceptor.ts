import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('👉 Checka');
    const checkToken: boolean = this.cookieService.check('token')
    if (checkToken) {
      const token: string = this.cookieService.get('token')
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })

      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }


  }
}
