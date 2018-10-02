import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../states/auth.state';
import { Store } from '@ngxs/store';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token$ = this.store.select(AuthState.token);
    return token$.pipe(
      map(token => !!token),
      tap(isTokenFound => {
        if (!isTokenFound) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
