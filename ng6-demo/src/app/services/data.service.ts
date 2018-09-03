import { Injectable } from '@angular/core';
import { Observable, Subject, from, of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getChartDataA(): Observable<any> {
    return of([65, 59, 80, 81, 56, 55, 40]);
  }

  getChartData() {
    return of(this.randomize());

    // const store = new Subject<any>();
    // store.next(this.randomize());
    // store.next(this.randomize());
    // store.next(this.randomize());
    // return store;

  }

  private randomize(): any[] {
    return Array.from(new Array(7), () => Math.floor(Math.random()*100+1));
  }
}
