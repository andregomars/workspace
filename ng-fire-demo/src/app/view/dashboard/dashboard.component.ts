import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  user$: Observable<User>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user$ = this.authService.user;
  }

  signOut() {
    this.authService.signOut();
  }

  isCapableOf(user: User, cap: Capability) {
    let isCapable = false;
    switch (cap) {
      case Capability.Edit:
        isCapable = this.authService.canEdit(user);
        break;
      case Capability.View:
        isCapable = this.authService.canRead(user);
        break;
      default:
        isCapable = this.authService.canRead(user);
        break;
    }

    return isCapable;
  }

}

export enum Capability {
  View = 'View',
  Edit = 'Edit'
}
