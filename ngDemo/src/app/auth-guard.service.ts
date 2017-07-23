import { Injectable } from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
      // var url = state.url;
      // console.log(url);

      return true;
  }

}