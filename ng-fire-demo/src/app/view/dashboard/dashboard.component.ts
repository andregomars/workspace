import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(data => this.user = data);
  }

  signOut() {
    this.authService.signOut();
  }

}
