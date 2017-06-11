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

  @ViewChild("demoChart")
  demoChart: UIChart;

  constructor(
        private dataLocal: DataLocalService,
        private dataRemote: DataRemoteService
  ) {}
 
  ngOnInit() {
    // var labels = this.dataLocal.getChartData().map(el => el.time);
    // var values = this.dataLocal.getChartData().map(el => el.value);
    this.setOptions();

    var vname = "3470";
    var yesterday =  moment().subtract(1, 'day').startOf('day').toDate();
    console.log(vname);
    console.log(yesterday);
    this.dataRemote.getWholeDayVehicleSnapshot$(vname, yesterday)
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
                    unit: 'minute',
                    // round: true,
                    // max: moment().subtract(1, 'day').endOf('day').toDate(), 
                    tooltipFormat: 'HH:mm',
                    displayFormats: {
                        minute: 'HH:00'
                    }
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 23
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
          fill: false,
          pointRadius: 1,
          borderColor: '#4286f4'
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

