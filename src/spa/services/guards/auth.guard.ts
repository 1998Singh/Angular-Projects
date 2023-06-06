import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Session } from '../global';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    alert('auth guard intercepted - checking your session')
    if(Session.authenticated)
    return true
    else{
      console.log("sorry..Please login")
      return false
    }
  }
}