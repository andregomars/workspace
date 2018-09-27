import { Component, OnInit, ViewChild } from '@angular/core';

import { PlayerBarComponent } from '../../components/player-bar/player-bar.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  chartTitle = 'the play chart';
  chartLabels: string[];
  ticks = 21;
  refreshInterval = 2000;
  isPlaying = true;
  @ViewChild('playerbar') playerbar: PlayerBarComponent;

  lineChartLegend = false;
  lineChartType = 'line';

  lineChartOptions: any = {
    responsive: true,
    animation: {
      duration: 1000
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          max: 100,
          beginAtZero: true
        }
      }]
    }
  };

  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  constructor(
  ) { }

  ngOnInit() {
    this.chartLabels = Array.from(new Array(this.ticks), (v, i) =>
      `${((this.ticks - i - 1) * this.refreshInterval / 1000)}s`
    );

  }

}
