import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  degree: number;
  speed: number;
  dataPieChart: any;
  optionsPieChart: any;

  constructor() { }

  ngOnInit() {
    this.degree = 25;
    this.speed = 45;
    
    this.dataPieChart = {
        labels: ['A','B','C'],
        datasets: [{
            data: [85,15],
            backgroundColor: [
                "#36A2EB",
                "silver"
            ],
            hoverBackgroundColor: [
                "#36A2EB",
                "silver"
            ]
        }]
    };

    this.optionsPieChart = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: false,
        tooltips: false,
    }
  }

}
