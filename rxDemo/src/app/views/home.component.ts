import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <a routerLink="/product">Product</a>
    <br />
    <a routerLink="/about">About</a>
    <br />
    <br />
    <a routerLink="/login"><b>Logout</b></a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
