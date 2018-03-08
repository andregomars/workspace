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
import { VehicleStatus } from './../models/vehicle-status';
import { YAxis } from './../models/yAxis.model';

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

  @ViewChild('demoChart')
  demoChart: UIChart;

  constructor(
        private dataLocal: DataLocalService,
        private dataRemote: DataRemoteService
  ) {}

  ngOnInit() {
    const vname = '1601';
    const backDays = 3;
    this.yesterday =  moment().subtract(backDays, 'day').startOf('day').toDate();
    this.min = moment('2018-03-02');
    this.max = this.min;
    // this.min = moment(this.yesterday).startOf('day');
    // this.max = moment(this.min).add(1, 'day').startOf('day');

    this.setOptions();
    this.dataRemote.getWholeDayVehicleStatus$(vname, this.min)
        .subscribe((list: VehicleStatus[]) => {
            this.setData(list);
            this.demoChart.reinit();
        });
  }

  onClick(): void {
    console.log('hit');

    this.demoChart.options.scales.xAxes[0].time.tooltipFormat = 'HH';
    this.demoChart.options.scales.xAxes[0].time.min = this.min.add(2, 'hour');
    this.demoChart.reinit();
  }

  private setOptions(): void {
    const leftY = new YAxis('SOC', '#4286f4', 0, 200);
    const rightY = new YAxis('kWh', '#565656', 0, 600);
    this.options = this.getChartOptions(leftY, rightY)
  }

  getChartOptions(leftY: YAxis, rightY: YAxis): any {
    return {
      responsive: false,
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'hour',
            tooltipFormat: 'HH:mm',
            min: moment(this.min).startOf('day'),
            max: moment(this.max).add(1, 'day').startOf('day'),
            displayFormats: {
              hour: 'HH:mm'
            }
          },
       }],
        yAxes: [{
          id: 'y' + leftY.label,
          scaleLabel: {
            display: true,
            labelString: leftY.label,
            fontColor: leftY.color
          },
          position: 'left',
          ticks: {
            fontColor: leftY.color,
            stepSize: leftY.stepSize,
            max: leftY.max,
            beginAtZero: true
          }
        }, {
          id: 'y' + rightY.label,
          scaleLabel: {
            display: true,
            labelString: rightY.label,
            fontColor: rightY.color
          },
          position: 'right',
          ticks: {
            fontColor: rightY.color,
            stepSize: rightY.stepSize,
            max: rightY.max,
            beginAtZero: true
          }
        }]
      }
    };
  }

  private setData(list: any): void {
    const labels = list.map(x => x.updated);
    const dataSoc = list.map(x => x.soc === 0 ? null : x.soc.toFixed(1))
    const dataEnergy = list.map(x => x.remainingenergy === 0 ? null : x.remainingenergy.toFixed(1));
    // const dataSoc = list.map(x => x.soc.toFixed(1));
    // const dataEnergy = list.map(x => x.remainingenergy.toFixed(1));

    this.demoChart.data = {
      labels: labels,
      datasets: [
        {
          label: 'SOC',
          data: dataSoc,
          yAxisID: 'ySOC',
          fill: false,
          pointRadius: 1,
          borderColor: '#4286f4'
        }, {
          label: 'kWh',
          data: dataEnergy,
          yAxisID: 'ykWh',
          fill: false,
          pointRadius: 1,
          borderColor: '#565656',
        }
      ]
    }
  }
}

