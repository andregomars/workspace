import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-gauge',
  templateUrl: './chart-gauge.component.html',
  styleUrls: ['./chart-gauge.component.css']
})
export class ChartGaugeComponent implements OnInit {

  datasets: any;
  options: any;
  @Input() value: number;
  @Input() max: number;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.options = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: false,
        tooltips: false,
        responsive: false,
        title: {
            display: true,
            padding: 0,
            text: this.title 
        }
    }

    this.datasets = [{
      data: this.getData(this.value, this.max),
      backgroundColor: [
        "#000000",
        "#36A2EB"
      ],
    }];
  }

  private getData(value: number, max: number): number[] {
    if (value < 0) value = 0;
    if (value > max) value = max;
    var valueSection = value * 100 / max;
    var remainSection = 100 - valueSection;
    return [valueSection, remainSection];
  }

}
