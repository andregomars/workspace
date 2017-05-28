import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ButtonModule } from 'primeng/primeng';


@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class ExporterComponent implements OnInit {
    arr = ['aaa','bbb','ccc','ddd','eee'];

    constructor(
      @Inject('Window') private window: Window,
    ) { }

    download() {

          var doc = new jsPDF();
          doc.text(20, 20, 'Hello world!');
          doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
          doc.addPage();
          doc.text(20, 20, 'Do you like that?');

          // Save the PDF
          doc.save('Test.pdf');
      }

  ngOnInit() {
  }

}
