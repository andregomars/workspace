import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private root = 'https://reqres.in';

  constructor(
    private http: HttpClient
  ) { }

  public getPersons(): Observable<Person[]> {
    return this.http.get<any>(this.root + '/api/users?page=2').pipe(
      map(resp => {
        const data: any[] = resp.data;
        const persons = this.attachEditDate(data);
        return persons;
      })
    );
  }

  private attachEditDate(data: any): Person[] {
    return data.map(x => Object.assign({}, x, { editTime: new Date() }));
  }
}
