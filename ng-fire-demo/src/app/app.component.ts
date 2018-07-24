import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Observable<any[]>;

  constructor(
    private dataService: DataService
  ) {
    this.users = this.dataService.getUsers();
  }
}
