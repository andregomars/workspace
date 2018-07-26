import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ViewGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.user.pipe(
        tap(user => { console.log(user); } ),
        take(1),
        tap(user => { console.log(this.auth.canRead(user)); } ),
        map(user => !!(user && this.auth.canRead(user)) ),
        tap(isViewer => {
          if (!isViewer) {
            console.error('need view permission!');
            this.router.navigate(['/login']);
          }
        })
      );


  }
}
