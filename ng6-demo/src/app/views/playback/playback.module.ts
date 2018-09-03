import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { PlaybackRoutingModule } from './playback-routing.module';
import { PlaybackComponent } from './playback.component';
import { DataService } from '../../services/data.service';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    PlaybackRoutingModule
  ],
  declarations: [
    PlaybackComponent
  ],
  providers: [
    DataService
  ]
})
export class PlaybackModule { }
