import { Component, Input, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
// import '../../../node_modules/gaugeJS/dist/gauge.js';
import 'gaugeJS';
declare var Gauge: any;

@Component({
  selector: 'app-gauge-js',
  templateUrl: './gauge-js.component.html',
  styleUrls: ['./gauge-js.component.css']
})
export class GaugeJsComponent implements OnInit, OnChanges {
    gauge: any;

  @Input() options: any = {};
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 3000;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.gauge) {
      if (changes['options']) {
        this.elementRef.nativeElement.innerHTML = '';
        this.create();
      } else if (changes['min'] || changes['max'] || changes['value']) {
        this.gauge.setMinValue(this.min);
        this.gauge.maxValue = this.max;
        this.gauge.set(this.value);
      }
    }
  }

  private create() {
    // delete this.options.id;
    // this.options.parentNode = this.elementRef.nativeElement;
    this.options = {};
    this.options.maxValue = this.max;
    this.options.value = this.value;
    this.gauge = new Gauge(this.elementRef.nativeElement).setOptions(this.options);
  }

/** 
  var opts = {
  angle: 0.15, /// The span of the gauge arc 
  lineWidth: 0.44, // The line thickness 
  pointer: {
    length: 0.9, // Relative to gauge radius 
    strokeWidth: 0.035 // The thickness 
  },
  colorStart: '#6FADCF',   // Colors 
  colorStop: '#8FC0DA',    // just experiment with them 
  strokeColor: '#E0E0E0'   // to see which ones work best for you 
};
var target = document.getElementById('foo'); // your canvas element 
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge! 
gauge.maxValue = 3000; // set max gauge value 
gauge.setMinValue(0);  // set min value 
gauge.set(1250); // set actual value 
 */

}
