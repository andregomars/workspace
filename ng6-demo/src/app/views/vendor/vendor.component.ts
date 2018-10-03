import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vcode$: Observable<number>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vcode$ = this.route.paramMap.pipe(
      map((params: ParamMap) => +params.get('id'))
    );
  }

}
