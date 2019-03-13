import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <app-nav-bar></app-nav-bar>
    <p>
      product works!
    </p>
    <a routerLink="/home">Back Home</a>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
