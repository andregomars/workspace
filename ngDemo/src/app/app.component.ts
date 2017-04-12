import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

const URL_VehicleIdentities = "http://www.mocky.io/v2/58e926392a000014022dbbb4";

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
  restOf$: Observable<any>;
  restFlatMap = [];
  vehicles = [];

  constructor(
    private http: Http
  ) {
  }

  ngOnInit(): void {
      this.dataFrom$ = Rx.Observable.from(this.data);
      this.dataOf$ = Rx.Observable.of(this.data);
      // this.restOf$ = this.http.get(URL_VehicleIdentities)
      //   .map(res => res.json()
      //     .map(v => v.fid)
      //     .filter((el, i, arr) => arr.indexOf(el) === i)
      //   )
      //   .do(data => console.log(JSON.stringify(data)));
      var sub = this.http.get(URL_VehicleIdentities)
        .flatMap(data => data.json())
        .publishReplay(1)
        .refCount();

      sub.subscribe(data => this.restFlatMap.push(data));
      sub.subscribe(data => console.log(data));


  }
}

class Person {
  name: string;
  age: number;
}
