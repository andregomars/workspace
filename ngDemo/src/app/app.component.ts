import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private data: Array<Person> = [{name:'andre', age:55},{name:'carol', age:33}];
  dataFrom$: Observable<any>;
  dataOf$: Observable<any>;

  constructor() {
  }

  ngOnInit(): void {
      this.dataFrom$ = Rx.Observable.from(this.data);
      this.dataOf$ = Rx.Observable.of(this.data);
        // .map(v => v.name);
  }
}

class Person {
  name: string;
  age: number;
}
