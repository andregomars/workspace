import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;
  options: any;

  constructor(
  ) {}
 
  ngOnInit() {
    this.options = {
      scales: {
        xAxes: [{
            ticks: {
                userCallback: function(value, index, values) {
                    return value.replace(":", "-");
                }
            }
        }]
      }
    };

    this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
      
  }
}
