import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  user: User;

  login(username): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(val => {
        this.isLoggedIn = true;
        this.user = new User(username);
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.user = null;
  }
}
