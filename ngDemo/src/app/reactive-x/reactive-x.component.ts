import { Component, OnInit, ElementRef,
  ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { GreetingActionType } from '../core/store/greeting/index';


@Component({
  selector: 'app-reactive-x',
  templateUrl: './reactive-x.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveXComponent implements OnInit {
  title = 'Redux | NgRx';
  message$: Observable<string>;

  constructor(
    private http: Http,
    private store: Store<AppState>
  ) {
    this.message$ = this.store.select('message');
  }

  chineseMessage() {
    this.store.dispatch({type: GreetingActionType.ToChinese});
  }

  englishMessage() {
    this.store.dispatch({type: GreetingActionType.ToEnglish});
  }

  ngOnInit(): void {
  }
}

interface AppState {
  message: string;
}
