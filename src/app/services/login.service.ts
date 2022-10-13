import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'asd' && password === 'asd') {
      localStorage.setItem('username', 'true');
      this.router.navigate(['dashboard']);
      return true
    } else {
      return false
    }
  }

  logout(): void {
    localStorage.removeItem('username')
    this.router.navigate(['login'])
  }

  getUser(): string {
    return localStorage.getItem('username') as string
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null
  }
}
