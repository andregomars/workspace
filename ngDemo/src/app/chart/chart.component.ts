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
                callback: function(value, index, values) {
                    console.log(value);
                    return value.replace("/:[0-9]{2}", ":00");
                }
            }
        }]
      }
    };

    this.data = {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            labels: ['08:25','09:32','10:45','11:33','12:54','13:22','14:05'],
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
