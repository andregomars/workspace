import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { Observable, from, of, timer } from 'rxjs';
import { switchMap, tap, map, share } from 'rxjs/operators';
import { DataService } from '../data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-about',
  template: `
    <app-nav-bar></app-nav-bar>
    <p>Lucky person: {{ (luckyMan$ | async)?.first_name }}
    {{ (luckyMan$ | async)?.last_name }}</p>
    <img src="{{ (luckyMan$ | async)?.avatar }}" />
    <p>Lucky time: {{ (luckyMan$ | async)?.editTime }}
    <app-employee [customers]="persons$ | async"></app-employee>
    <a routerLink="/home">Back Home</a>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  data$: Observable<Person[]>;
  persons$: Observable<Person[]>;
  luckyMan$: Observable<Person>;
  interval = 5000;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data$ = this.loadPersons();

    this.persons$ = timer(0, this.interval).pipe(
      switchMap(() => this.data$),
      share()
    );

    this.luckyMan$ = this.persons$.pipe(
      map(persons => persons[_.random(0, 2)])
    );
  }

  private loadPersonsLocal(): Person[] {
    return [{
      id: 1,
      first_name: 'andre',
      last_name: 'shen',
      avatar: 'https://avatar.png',
      editTime: new Date()
    }];
  }

  private loadPersons(): Observable<Person[]> {
    return this.dataService.getPersons();
  }
}
