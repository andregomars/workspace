import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  template: `
    <p>
      <b>{{ this.router.url }}</b>
    </p>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
