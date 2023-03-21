import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  tryRegister() {
    this.authService.register(this.username, this.email, this.password).subscribe(response => {
      console.log(response);
    })
  }
}
