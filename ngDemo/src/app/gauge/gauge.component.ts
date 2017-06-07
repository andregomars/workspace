import { Component, OnInit } from '@angular/core';
import { GaugeSegment, GaugeLabel } from 'ng-gauge';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  speed: number;
  dataPieChart: any;
  optionsPieChart: any;

  optGaugeJs: any;


  constructor() { }

  ngOnInit() {

    this.optGaugeJs =  {
      angle: 0.15, /// The span of the gauge arc 
      lineWidth: 0.44, // The line thickness 
      pointer: {
        length: 0.9, // Relative to gauge radius 
        strokeWidth: 0.035 // The thickness 
      },
      colorStart: '#6FADCF',   // Colors 
      colorStop: '#8FC0DA',    // just experiment with them 
      strokeColor: '#E0E0E0'   // to see which ones work best for you 
    };

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
