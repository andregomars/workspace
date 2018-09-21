import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlayChartComponent } from '../../components/play-chart/play-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    ChartsModule
  ],
  declarations: [
    PlaygroundComponent,
    PlayChartComponent
  ]
})
export class PlaygroundModule { }
