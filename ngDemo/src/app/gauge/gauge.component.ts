import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  degree: number;
  speed: number;

  constructor() { }

  ngOnInit() {
    this.degree = 25;
    this.speed = 45;
  }

}
