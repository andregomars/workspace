import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<string> {
    const url = 'https://reqres.in/api/login';
    const params = {
      email: email,
      password: password
    };

    return this.http.post<string>(url, params).pipe(
      map(data => data['token'])
    );
  }

  logout(): Observable<null> {
    return of(null);
  }
}
