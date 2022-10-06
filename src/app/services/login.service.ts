import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  loggedIn: boolean = false;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === '' && password === '') {
      this.loggedIn = true;
      this.router.navigate(['dashboard']);
    } else {
      this.loggedIn = false;
    }
  }
}
