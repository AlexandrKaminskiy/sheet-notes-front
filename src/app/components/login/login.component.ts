import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
  }
  username: string;
  password: string;

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log(response);
    })
  }

  register() {
    this.router.navigate(['register'])
  }
}
