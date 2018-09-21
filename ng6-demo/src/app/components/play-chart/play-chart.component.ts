import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-play-chart',
  templateUrl: './play-chart.component.html',
  styleUrls: ['./play-chart.component.scss']
})
export class PlayChartComponent implements OnInit, OnDestroy {
  @Input() interval = 2000;
  @Input() labels: string[];
  @Input() data$: Observable<any>;

  isPlaying: boolean;
  source$: Observable<any>;
  queue: any[];

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

  private intervalRef: any;

  ngOnInit() {
    this.initData();
    this.loadDataPeriodically();
  }

  ngOnDestroy() {
    this.clear();
  }

  reload() {
    this.clear();
    this.initData();
    this.loadDataPeriodically();
  }

  pause() {
    this.isPlaying = !this.isPlaying;
    this.clear();
  }

  play() {
    this.isPlaying = !this.isPlaying;
    this.loadDataPeriodically();
  }

  private clear() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  private initData() {
    this.isPlaying = true;
    this.queue = Array.from(this.labels, () => '');
  }

  private loadDataPeriodically() {
    this.intervalRef = setInterval(() => {
      this.loadData();
    }, this.interval);
  }

  private loadData() {
    this.source$ = this.data$.pipe(
      tap(x => console.log(x)),
      map(data => {
        this.queue.shift();
        this.queue.push(data);
        return [...this.queue];
      }),
      tap(x => console.log(x)),
    );
  }

}
