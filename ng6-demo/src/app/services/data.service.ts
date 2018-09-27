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
    return of(this.randomArray());
  }

  getChartNumber() {
    return of(this.randomNumber());
  }

  getCurrentData() {
    return of(this.randomObject());
  }

  private randomArray(): any[] {
    return Array.from(new Array(7), () => this.randomNumber());
  }

  private randomObject(): any {
    const time = new Date();
    // const num = this.randomNumber();
    const num = this.randomNumberRange(45, 80);
    return {
      time: time,
      num: num
    };
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * 100 + 1);
  }

  private randomNumberRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
