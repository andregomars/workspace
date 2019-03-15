import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { Observable, never, from, of, timer, Subject, BehaviorSubject, NEVER } from 'rxjs';
import { switchMap, tap, map, share, takeUntil, takeWhile, skipWhile, repeatWhen } from 'rxjs/operators';
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
    <div><button (click)="toggle()">{{ pauser.value ? 'Play' : 'Pause' }}</button></div>
    <app-employee [customers]="pausable$ | async"></app-employee>
    <a routerLink="/home">Back Home</a>
  `,
})
export class AboutComponent implements OnInit, OnDestroy {
  persons$: Observable<Person[]>;
  luckyMan$: Observable<Person>;
  interval = 3000;
  pauser = new BehaviorSubject<boolean>(false);
  pausable$: Observable<Person[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.persons$ = timer(0, this.interval).pipe(
      switchMap(() => this.dataService.getPersons()),
      share()
    );

    this.pausable$ = this.pauser.pipe(
      switchMap(paused => paused ? NEVER : this.persons$),
    );

    this.luckyMan$ = this.pausable$.pipe(
      map(persons => persons[_.random(0, 2)])
    );
  }

  ngOnDestroy() {
    this.unSub();
  }

  public toggle() {
    this.pauser.next(!this.pauser.value);
  }

  private unSub() {
    if (this.pauser) {
      this.pauser.unsubscribe();
    }
  }

}
