import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable, Subject, interval, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss']
})
export class PlaybackComponent implements OnInit, OnDestroy {
  isPlaying: boolean;
  itv: any;
  len = 21;
  intSec = 2;
  source$: Observable<any>;
  queue: any[];
  labels: string[];

  lineChartLegend = false;
  lineChartType = 'line';
  lineChartOptions: any = {
    responsive: true,
    animation: {
      duration: 4000
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
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.labels = Array.from(new Array(this.len), (v, i) =>
      `${((this.len - i - 1) * this.intSec)}s`
    );

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
    if (this.itv) {
      clearInterval(this.itv);
    }
  }

  private initData() {
    this.isPlaying = true;
    this.queue = Array.from(new Array(this.len), () => {
      return { time: '', num: '' };
    });
  }

  private loadDataPeriodically() {
    this.itv = setInterval(() => {
      this.loadData();
    }, this.intSec * 1000);
  }

  private loadData() {
    this.source$ = this.dataService.getCurrentData().pipe(
      map(data => {
        this.queue.shift();
        const formatedData = this.formatDataTime(data);
        this.queue.push(formatedData);
        const queue = [...this.queue];
        return {
          tableData: this.sortTableData(queue),
          chartData: queue.map(q => q.num)
        };
      }),
      tap(x => console.log(x)),
    );

  }

  private formatDataTime(data: any) {
    return {
      time: moment(data.time).format('hh:mm:ss'),
      num: data.num
    };
  }

  private sortTableData(rows: any[]) {
    const filteredRows = rows.filter(row => row.time !== '');
    return filteredRows.sort(this.sortByTimeDesc).reverse().slice(0, 10);
  }

  private sortByTimeDesc(prev, next): number {
    return moment(prev.time).diff(moment(next.time));
  }

}
