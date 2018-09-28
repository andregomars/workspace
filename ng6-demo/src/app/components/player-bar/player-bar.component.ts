import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';
import { DataService } from '../../services/data.service';
import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
  @Input() ticks: number;
  @Input() interval: number;
  @Output() change = new EventEmitter();

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
    this.loadData();
  }

  reload() {
    this.initData();
    this.loadData();
  }

  pause() {
    this.isPlaying = !this.isPlaying;
  }

  play() {
    this.isPlaying = !this.isPlaying;
    this.loadData();
  }

  private initData() {
    this.isPlaying = true;
    this.queue = Array.from(new Array(this.ticks), () => 0);
  }

  private loadData() {
    this.data$ = timer(0, this.interval).pipe(
      switchMap(() => this.dataService.getChartNumber()),
      map(data => {
        if (this.isPlaying) {
          this.queue.shift();
          this.queue.push(data);
        }
        const queueCopy = [...this.queue];
        return queueCopy;
      })
    );
  }

}
