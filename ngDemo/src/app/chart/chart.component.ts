import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';
import { DataLocalService } from '../shared/data-local';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;
  options: any;

  constructor(
        private dataService: DataLocalService
  ) {}
 
  ngOnInit() {
    var labels = this.dataService.getChartData().map(el => el.time);
    var values = this.dataService.getChartData().map(el => el.value);
    this.getBalancedData(values);

    this.options = {
      responsive: false,
      scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'minute',
                round: true,
                max: '2017-05-03T23:45:36',
                tooltipFormat: 'HH:mm',
                displayFormats: {
                    minute: 'HH:00'
                }
            },
            ticks: {
                autoSkip: true,
                maxTicksLimit: 24
                // callback: function(value, index, values) {
                //     console.log(value);
                //     return value.split(":")[0]+":00";
                // }
            }
        }],
        // yAxes: [{
        //     ticks: {
        //         callback: function(value, index, values) {
        //             // return value.split(":")[0]+":00";
        //             // return value;
        //             return value+" new";
        //         }
        //     }
        // }]
      }
    };

    this.data = {
            // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            labels: labels,
            datasets: [
                // {
                //     label: 'My First dataset',
                //     backgroundColor: '#42A5F5',
                //     borderColor: '#1E88E5',
                //     fill: false,
                //     data: [65, 59, 80, 81, 56, 55, 40]
                // },
                {
                    label: 'Demo',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    fill: false,
                    data: values 
                }
            ]
        }
      
  }
  
  private getBalancedData(data: Snapshot[]): any {
     console.log("total count: "+ data.length );

     var times = data.map((x,i) => {
        return { hour: moment(x.time).hour(), idx: i}
    });

    console.log(times);

     return null; 
  }
}

interface Snapshot {
    code: string,
    name: string,
    value: number,
    unit: string,
    time: Date
}
