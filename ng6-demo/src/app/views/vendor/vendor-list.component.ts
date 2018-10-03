import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendors: number[];

  constructor() { }

  ngOnInit() {
    this.vendors = [29051, 29734, 30015];
  }

}
