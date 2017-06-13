import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { BaseChartDirective } from 'ng2-charts';
import { UIChart } from 'primeng/primeng';

import { DataLocalService } from '../shared/data-local';
import { DataRemoteService } from '../shared/data-remote';
import { VehicleSnapshot } from './../models/vehicle-snapshot';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  options: any;
  yesterday: Date;
  min: any;
  max: any;

  @ViewChild("demoChart")
  demoChart: UIChart;

  constructor(
        private dataLocal: DataLocalService,
        private dataRemote: DataRemoteService
  ) {}
 
  ngOnInit() {
    var vname = "3470";
    var backDays = 3;
    this.yesterday =  moment().subtract(backDays, 'day').startOf('day').toDate();
    this.min = moment(this.yesterday).startOf('day');
    this.max = moment(this.yesterday).add(1,'day').startOf('day');

    this.setOptions();
    this.dataRemote.getWholeDayVehicleSnapshot$(vname, this.yesterday)
        .subscribe((list: VehicleSnapshot[]) => {
            this.setData(list);
            this.demoChart.reinit();
        });
      
  }

  private setOptions(): void {
    this.options = {
        responsive: false,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
                unit: 'hour',
                // unitStepSize: 2,
                // round: true,
                // max: moment().subtract(1, 'day').endOf('day').toDate(), 
                tooltipFormat: 'HH:mm',
                min: this.min, 
                max: this.max, 
                displayFormats: {
                  //minute: 'HH:mm',
                  hour: 'HH:mm'
                }
            },
            ticks: {
              // beginAtZero: true
              // autoSkip: false,
              // maxTicksLimit: 24
            },
            gridLines: {
              // display: false,
              // drawTicks: true,
              // offsetGridLines: true,
            }
          }],
          yAxes: [{
            gridLines: {
              // display: true,
              // drawTicks: true,
            }
          }]
        },
    };
  }

  private setData(list: any): void {
    var filtered_A = list.filter(e => e.code === '2A');
    var filtered_B = list.filter(e => e.code === '2B');
    var labels = filtered_A.map(el => el.time);
    var dataSOC = filtered_A.map(el => el.value.toFixed(2));
    var dataEnergy = filtered_B.map(el => el.value.toFixed(2));

    this.demoChart.data = {
      labels: labels,
      datasets: [
        {
          label: 'SOC',
          data: dataSOC,
        //   yAxisID: 'ySOC',
          pointRadius: 1,
          borderColor: '#4286f4',
          fill: false,
          // showLine: false,
          // spanGaps: false,
          setppedLine: true
        }, 
        // {
        //   label: 'kWh',
        //   data: dataEnergy,
        // //   yAxisID: 'ykWh',
        //   fill: false,
        //   pointRadius: 1,
        //   borderColor: '#565656',
        // }
      ]
    }

  }
  
}

