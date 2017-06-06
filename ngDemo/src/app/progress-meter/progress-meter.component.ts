import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-progress-meter',
  templateUrl: './progress-meter.component.html',
  styleUrls: ['./progress-meter.component.css']
})
export class ProgressMeterComponent implements OnInit, OnChanges {

  Math = Math;
  degreeNegative: string;
  degreePositive: string;
  meterNegativeStyle: string;
  meterPositiveStyle: string;
    
  @Input() degree: number = 0;
  @Input() minDegree: number = -100;
  @Input() maxDegree: number = 100;
  @Input() meterType: string = "current";

  constructor() { }

  ngOnInit() {
    this.build();
  }

  ngOnChanges() {
    this.build();
  }

  private build(): void {
    console.log(this.meterType);
   switch (this.meterType) {
      case "current":
        this.meterNegativeStyle = "col-6 text-right";
        this.meterPositiveStyle = "col-6 text-left";
      case "temperature":
      console.log('touch');
        this.meterNegativeStyle = "col-3 text-right";
        this.meterPositiveStyle = "col-9 text-left";
      default:
        this.meterNegativeStyle = "col-6 text-right";
        this.meterPositiveStyle = "col-6 text-left";
    }

    this.degreeNegative =
      this.degree < 0 ? (Math.abs(this.degree * 100) / Math.abs(this.minDegree)).toFixed(0) + '%' : '0%';
    this.degreePositive = 
      this.degree > 0 ? (Math.abs(this.degree * 100) / Math.abs(this.maxDegree)).toFixed(0) + '%' : '0%';
    
  }
}
