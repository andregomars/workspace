import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResultModel } from './login-result-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(this.url, {
      email: email,
      password: password
    });
  }
}
