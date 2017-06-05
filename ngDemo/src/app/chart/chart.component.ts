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

  dataChartist: any;
  optionsChartist: any;

  constructor(
        private dataService: DataLocalService
  ) {}
 
  ngOnInit() {
    var labels = this.dataService.getChartData().map(el => el.time);
    var values = this.dataService.getChartData().map(el => el.value);

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
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    // return value.split(":")[0]+":00";
                    // return value;
                    return value+" new";
                }
            }
        }]
      },
    //   tooltips: {
    //       callbacks: {
    //           label: function(tooltipItems, data) {
    //               return tooltipItems.yLabel + '$';
    //           }
    //       }
    //   }
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

        this.dataChartist = {
            "labels": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "series": [
                [
                    12,
                    9,
                    7,
                    8,
                    5
                ],
                [
                    2,
                    1,
                    3.5,
                    7,
                    3
                ],
                [
                    1,
                    3,
                    4,
                    5,
                    6
                ]
             ]
        }
    // this.dataChartist = {
    //     series: [
    //         {
    //         name: 'series-1',
    //         data: [
    //             {x: moment('2017-05-03T00:15:40'), y: 53},
    //             {x: moment('2017-05-03T01:15:40'), y: 40},
    //             {x: moment('2017-05-03T02:15:40'), y: 45},
    //             {x: moment('2017-05-03T03:15:40'), y: 40},
    //             {x: moment('2017-05-03T04:15:40'), y: 20},
    //             {x: moment('2017-05-03T05:15:40'), y: 32},
    //             {x: moment('2017-05-03T06:15:40'), y: 18},
    //             {x: moment('2017-05-03T07:15:40'), y: 11}
    //             ]
    //         },
    //         {
    //         name: 'series-2',
    //         data: [
    //             {x: moment('2017-05-03T00:35:40'), y: 53},
    //             {x: moment('2017-05-03T02:25:40'), y: 35},
    //             {x: moment('2017-05-03T04:05:40'), y: 30},
    //             {x: moment('2017-05-03T06:45:40'), y: 30},
    //             {x: moment('2017-05-03T07:15:40'), y: 10}
    //         ]
    //         }
    //     ]
    // };

    // this.optionsChartist = {
    //     axisX: {
    //         type: Chartist.FixedScaleAxis,
    //         divisor: 3,
    //         labelInterpolationFnc: function(value) {
    //             return moment(value).format('HH:00');
    //         }
    //     }
    // };
      
  }
  
}

interface Snapshot {
    code: string,
    name: string,
    value: number,
    unit: string,
    time: Date
}
