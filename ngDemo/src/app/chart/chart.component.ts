import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('chartOne')
  chartOne: ElementRef;
  @ViewChild('chartTwo')
  chartTwo: ElementRef;
  @ViewChild('chartThree')
  chartThree: ElementRef;
  @ViewChild('chartFour')
  chartFour: ElementRef;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barWidth:number = 1920;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(
  ) {}
 
  ngOnInit() {

  }

  export(): void {
    var pdf = new jsPDF('landscape');
    const imgUrlOne = this.chartOne.nativeElement.toDataURL('image/png');
    const imgUrlTwo = this.chartTwo.nativeElement.toDataURL('image/png');
    const imgUrlThree = this.chartThree.nativeElement.toDataURL('image/png');
    const imgUrlFour = this.chartFour.nativeElement.toDataURL('image/png');
    pdf.addImage(imgUrlOne, 'PNG', 10, 10);
    pdf.addPage();
    pdf.addImage(imgUrlTwo, 'PNG', 10, 10);
    pdf.addPage();
    pdf.addImage(imgUrlThree, 'PNG', 10, 10);
    pdf.addPage();
    pdf.addImage(imgUrlFour, 'PNG', 10, 10);
    pdf.save('canvas.pdf');
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}