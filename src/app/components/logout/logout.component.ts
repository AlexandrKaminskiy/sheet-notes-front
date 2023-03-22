import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.logout();
  }

}
