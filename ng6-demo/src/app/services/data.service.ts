import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getChartDataA(): Observable<any> {
    return of([65, 59, 80, 81, 56, 55, 40]);
  }
}
