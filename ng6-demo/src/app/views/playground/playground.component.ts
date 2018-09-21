import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { PlayChartComponent } from '../../components/play-chart/play-chart.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  data$: Observable<any>;
  chartTitle = 'the play chart';
  chartLabels: string[];
  ticks = 21;
  refreshInterval = 2000;
  @ViewChild('playchart') playchart: PlayChartComponent;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.chartLabels = Array.from(new Array(this.ticks), (v, i) =>
      `${((this.ticks - i - 1) * this.refreshInterval / 1000)}s`
    );
    this.data$ = this.dataService.getCurrentData().pipe(
      map(data => data.num)
    );
  }

  reload() {
    this.playchart.reload();
  }

  play() {
    this.playchart.play();
  }

  pause() {
    this.playchart.pause();
  }
}
