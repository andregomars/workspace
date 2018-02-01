import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {
  vendors$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.vendors$ = this.db.list('vendors').valueChanges();
  }

}
