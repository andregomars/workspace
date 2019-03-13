import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription, Observable, Observer, from, observable, BehaviorSubject } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  template: `
    <a routerLink="/home">Login</a>
  `,
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {
  loginTimer: Subscription;
  logNumber: number;
  behavior = new BehaviorSubject<number>(0);


  constructor() { }

  ngOnInit() {
    this.loginTimer = timer(0, 1000).subscribe((n) => {
      this.logNumber = n;
      console.log('from timer: ' + this.logNumber);
    });

    // const currentTime$ = new Observable<Date>((observer: Observer<Date>) => {
    //   setInterval(() => observer.next(new Date()), 1000);
    // });
    // currentTime$.subscribe(time => console.log(time));

    // const obs = from([1, 2, 3, 4, 5]);
    // obs.subscribe(n => console.log(n));

    this.behavior.subscribe(async (n) => console.log(n));
    this.behavior.next(1);
    this.behavior.next(2);
    this.behavior.next(3);
    this.behavior.complete();
    // this.behavior.unsubscribe();

    setInterval(() => {
      console.log('behavior is closed: ' + this.behavior.closed);
      console.log('behavior is stopped: ' + this.behavior.isStopped);
      console.log('loginTimer is closed: ' + this.loginTimer.closed);
    }, 1000);

  }

  ngOnDestroy() {
    this.loginTimer.unsubscribe();
  }

}
