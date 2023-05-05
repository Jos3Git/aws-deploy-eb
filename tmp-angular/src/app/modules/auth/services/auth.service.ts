import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const token = '123456'
    this.cookieService.set('token', token)
    return of({ token })
  }
}
