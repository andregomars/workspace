import { Injectable } from '@angular/core';
// import { Headers, Http, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as moment from 'moment';

import { VehicleSnapshot } from './../models/vehicle-snapshot';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataRemoteService {
  URL_WholeDayVehicleSnapshot
    = 'http://52.35.12.17/apid/VehicleSnapshot/GetWholeDayByVehicleName';
  URL_WholeDayVehicleStatus
    = 'http://52.35.12.17/api/VehicleStatus/GetWholeDayByVehicleName';
  URL_CsvFile
    = 'http://52.33.60.220/api/VehicleDailyFile/GetFileStream';

  constructor(
    private http: HttpClient
  ) { }

  getWholeDayVehicleStatus$(vname: string, date: Date): Observable<any> {
    const dateOnly = moment(date).format('YYYY-MM-DD');
    const url = `${this.URL_WholeDayVehicleStatus}/${vname}/${dateOnly}`;
    console.log(url);
    return this.http.get(url);
  }

  getFile$(csvId: number): Observable<any> {
    const url = `${this.URL_CsvFile}/${csvId}`;
    // return this.http.get(url, { responseType: ResponseContentType.Blob })
      // .map(res => new Blob([res.blob()], { type: 'text/csv' }))
    return this.http.get(url);
  }

}
