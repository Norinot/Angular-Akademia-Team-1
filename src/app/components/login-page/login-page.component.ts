import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { interval } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  login_form: FormGroup;
  invalidLoginMessage: boolean = false;

  constructor(fb: FormBuilder, public loginService: LoginService) {
    this.login_form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.loginService.login(
      this.login_form.value.email,
      this.login_form.value.password
    );
    if (this.loginService.loggedIn === false) {
      this.invalidLoginMessage = true;
      setTimeout(() => {
        this.invalidLoginMessage = false;
      }, 3000);
    }
  }

  ngOnDestroy(): void {}
}
