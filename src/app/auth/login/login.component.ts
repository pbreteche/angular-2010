import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

  login(): void {
    this.auth.login(this.username).subscribe(val => {
      this.username = '';
      if (this.auth.redirectUrl) {
        this.router.navigateByUrl(this.auth.redirectUrl);
      }
    });
  }
}
