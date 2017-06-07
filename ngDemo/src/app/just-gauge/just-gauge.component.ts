import { Component, Input, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import 'justgage';
import * as Raphael from 'raphael';
declare var JustGage: any;

@Component({
  selector: 'app-just-gauge',
  template: ''
})
export class JustGaugeComponent implements OnInit, OnChanges {
  guage: any;

  @Input() options: any = {};
  @Input() value: number = 0;
  @Input() max: number = 100;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.guage) {
      if (changes['options']) {
        this.elementRef.nativeElement.innerHTML = '';
        this.create();
      } else if (changes['max'] || changes['value']) {
        this.guage.refresh(this.value, this.max);
      }
    }
  }

  private create() {
    delete this.options.id;
    this.options.parentNode = this.elementRef.nativeElement;
    this.options.max = this.max;
    this.options.value = this.value;
    this.guage = new JustGage(this.options);
  }
}