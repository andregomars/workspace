import { Component, OnInit, ElementRef,
  ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { GreetingActionType } from '../core/store/greeting';
import { Post } from '../models/post.model';
import * as PostActions from '../core/store/post/post.actions';

@Component({
  selector: 'app-reactive-x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-x.component.html'
})
export class ReactiveXComponent implements OnInit {
  title = 'Redux | NgRx';
  message$: Observable<string>;
  post$: Observable<Post>;
  text = '';

  constructor(
    private http: Http,
    private store: Store<AppState>
  ) {
    this.message$ = this.store.select('greeting');
    this.post$ = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
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
  greeting: string;
  post: Post;
}
