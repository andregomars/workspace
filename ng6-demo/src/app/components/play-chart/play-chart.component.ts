import { Component, OnInit, OnDestroy, Input,
  OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-play-chart',
  templateUrl: './play-chart.component.html',
  styleUrls: ['./play-chart.component.scss']
})
export class PlayChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() interval = 2000;
  @Input() labels: string[];
  // @Input() data$: Observable<any>;
  @Input() data: any;
  @Input() options: any;
  @Input() colors: any;
  @Input() legend: boolean;
  @Input() chartType: string;
  @ViewChild('chart') chart: BaseChartDirective;

  source$: Observable<any>;
  queue: any[];

  private intervalRef: any;

  ngOnInit() {
    this.initData();
    this.loadDataPeriodically();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.loadData();
      this.chart.ngOnChanges({} as SimpleChanges);
    }
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
    this.clear();
  }

  play() {
    this.loadDataPeriodically();
  }

  private clear() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  private initData() {
    this.queue = Array.from(this.labels, () => '');
  }

  private loadDataPeriodically() {
    this.intervalRef = setInterval(() => {
      this.loadData();
    }, this.interval);
  }

  private loadData() {
    // this.source$ = this.data$.pipe(
    //   map(data => {
    //     this.queue.shift();
    //     this.queue.push(data);
    //     return [...this.queue];
    //   }),
    //   tap(x => console.log(x)),
    // );
    console.log(this.queue)

    if (this.queue && this.queue.length > 0) {
      this.queue.shift();
      this.queue.push(this.data);
    }
  }

}
