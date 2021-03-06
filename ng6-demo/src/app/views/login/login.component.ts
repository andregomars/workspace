import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new Login(this.email, this.password));
  }
}
