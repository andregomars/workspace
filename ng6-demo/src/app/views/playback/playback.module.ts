import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaybackRoutingModule } from './playback-routing.module';
import { PlaybackComponent } from './playback.component';


@NgModule({
  imports: [
    CommonModule,
    PlaybackRoutingModule
  ],
  declarations: [
    PlaybackComponent
  ]
})
export class PlaybackModule { }
