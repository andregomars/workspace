import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private TOKEN = 'TOKEN';

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(this.TOKEN) !== null;
  }
}
