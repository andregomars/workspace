import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../states/auth.state';
import { Logout } from '../../actions/auth.actions';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent implements OnInit {
  @Select(AuthState.email) email$: Observable<string>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
