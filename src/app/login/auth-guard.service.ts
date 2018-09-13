import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _loginService: LoginService,
    private _router: Router) {}

  canActivate() {
    if (this._loginService.isLoggedin) {
      return true;
    }

    // imperative navigation
    this._router.navigate(['login']);

    return false;

  }
}
