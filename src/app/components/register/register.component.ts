import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  form = new FormGroup({
    username: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl<string>('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(8)
    ])
  })

  username() {
    return this.form.controls.username as FormControl;
  }

  email() {
    return this.form.controls.email as FormControl;
  }

  // password() {
  //   return this.form.controls.password as FormControl;
  // }

  constructor(private router: Router, private authService: AuthService) {
  }

  tryRegister() {
    console.log(this.form.value)
    this.authService.register(this.form.controls.username.value as string,
      this.form.controls.email.value as string, this.form.controls.password.value as string);
    this.router.navigate(['login'])
  }
}
