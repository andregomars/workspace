import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit, OnDestroy {
  @Input() ticks: number;
  @Input() interval: number;

  private data$: Observable<any>;
  private intervalRef: any;
  private isPlaying: boolean;
  private queue: any[];

  get data(): Observable<any> {
    return this.data$;
  }

  constructor(
    private dataService: DataService
  ) { }

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
    this.queue = Array.from(new Array(this.ticks), () => 0);
  }

  private loadDataPeriodically() {
    this.intervalRef = setInterval(() => {
      this.loadData();
    }, this.interval);
  }

  private loadData() {
    this.data$ = this.dataService.getChartNumber().pipe(
      map(data => {
        this.queue.shift();
        this.queue.push(data);
        const queueCopy = [...this.queue];
        return queueCopy;
      })
    );
  }

}
