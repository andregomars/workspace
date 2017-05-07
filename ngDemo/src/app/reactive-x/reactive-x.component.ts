import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

const URL_VehicleIdentities = "http://www.mocky.io/v2/58e926392a000014022dbbb4";

@Component({
  selector: 'app-reactive-x',
  templateUrl: './reactive-x.component.html',
  styleUrls: ['./reactive-x.component.css']
})
export class ReactiveXComponent implements OnInit {
  title = 'app works!';
  
  private data: Array<Person> = [{name:'andre', age:55},{name:'carol', age:33}];
  dataFrom$: Observable<any>;
  dataOf$: Observable<any>;
  restOf$: Observable<any>;
  restFlatMap = [];
  vehicles = [];

  fList: string[] = ['AVTA','LACMTA','LBT'];
  vList: string[] = ['4370','4371', '1001', '1601'];
  fSelected: string = '';
  vSelected: string = '';

  @ViewChild("btn")
  btn: ElementRef;
  @ViewChild("fSelector")
  fSelector: ElementRef;
  @ViewChild("vSelector")
  vSelector: ElementRef;

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
      // sub.subscribe(data => console.log(data));

      this.restOf$ = this.http.get(URL_VehicleIdentities)
        .map(res => res.json());
     
      this.restOf$.subscribe(data => { 
          this.vehicles = data;
        });

      var source = Rx.Observable.fromEvent(this.btn.nativeElement, 'click');
      var subBtn = source.subscribe(()=>console.log('click through'));

      Rx.Observable.fromEvent(this.fSelector.nativeElement, 'change')
        .map(($event) => $event['target'].value)
        .subscribe((value: string) => { 
          this.fSelected = value;
          this.logSelected(this.fSelected, this.vSelected);
          this.verifyExistance();
        }); 

      Rx.Observable.fromEvent(this.vSelector.nativeElement, 'change')
        .map(($event) => $event['target'].value)
        .subscribe((value: string) => { 
          this.vSelected = value;
          this.logSelected(this.fSelected, this.vSelected);
          this.verifyExistance();
        }); 

  }

  verifyExistance(): void {
      this.restOf$.subscribe(data => { 
          var isExisted = 
            Array.from(data).findIndex(e => e['fid'] === this.fSelected && e['vid'] === this.vSelected);
          console.log('index in json: '+isExisted);
        });
  }

  btnClick(): void {
    console.log('clicked');
  }
  
  logSelected(fname: string, vname: string): void {
    console.log(`fleet: ${fname}, vehicle: ${vname}`);
  }

  fListOnChange(value): void {
    console.log('selected fleet: ' + value);
  }

  vListOnChange(value): void {
    console.log('selected vehicle: ' + value);
  }
}

class Person {
  name: string;
  age: number;
}
