import { Component, OnInit, Input } from '@angular/core';
import { Play, Stop, Pause } from './player-bar.actions';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
  @Input() ticks: number;
  @Input() interval: number;
  @Select(state => state.player.playing) playing$;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  reload() {
    this.stop();
    this.play();
  }

  pause() {
    this.store.dispatch(new Pause());
  }

  play() {
    this.store.dispatch(new Play(this.interval));
  }

  stop() {
    this.store.dispatch(new Stop());
  }




}
