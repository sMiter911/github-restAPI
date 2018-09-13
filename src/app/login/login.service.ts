import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginService {
  isLoggedin = false;

  login(username, pasword) {
    if (username === 'Jason' && pasword === '123') {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }

    return this.isLoggedin;
  }

  logout() {
    this.isLoggedin = false;
    return this.isLoggedin;
  }
}
