import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';

  isLoggedIn = false;
  constructor(private readonly loginService: LoginService) {  }

  ngOnInit(): void {
    this.loginService.userName$.subscribe(userName => {
      this.isLoggedIn = !!userName;
    });
  }

  login(): void {
    this.loginService.login(this.userName);
  }

  logout(): void {
    this.loginService.logout();
  }
}
