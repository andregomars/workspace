import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PlayChartComponent } from './play-chart/play-chart.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    PlayChartComponent,
    PlayerBarComponent,
    PlayerBarComponent
  ]
})
export class ComponentsModule { }
