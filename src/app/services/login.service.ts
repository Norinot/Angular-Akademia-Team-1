import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  loggedIn: boolean = false;

  constructor() {}

  login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
