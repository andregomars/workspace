import { Injectable } from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class NeedAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private customer: CustomerService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.customer.isLogged()) {
        return true;
      }

     this.router.navigate(['/login']);

      return false;
  }
}
