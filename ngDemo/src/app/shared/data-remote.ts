import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as moment from 'moment';

import { VehicleSnapshot } from './../models/vehicle-snapshot';

@Injectable()
export class DataRemoteService {
  URL_WholeDayVehicleSnapshot: string 
    = 'http://52.35.12.17/api/VehicleSnapshot/GetWholeDayByVehicleName';
  URL_CsvFile: string 
    = 'http://52.33.60.220/api/VehicleDailyFile/GetFileStream';

  constructor(
    private http: Http
  ) { }

  getWholeDayVehicleSnapshot$(vname: string, date: Date): Observable<Array<VehicleSnapshot>> {
    var dateOnly: string = moment(date).format('YYYY-MM-DD');
    var url = `${this.URL_WholeDayVehicleSnapshot}/${vname}/${dateOnly}`;
    console.log(url);
    return this.http.get(url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getFile$(csvId: number): Observable<Response> {
    var url = `${this.URL_CsvFile}/${csvId}`;
    // return this.http.get(url, { responseType: ResponseContentType.Blob })
      // .map(res => new Blob([res.blob()], { type: 'text/csv' }))
    return this.http.get(url)
      // .map(res => res.url)
      .catch(this.handleError);
  }
  
  //---helper methods---
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
