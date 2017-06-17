import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ButtonModule } from 'primeng/primeng';

import { DataRemoteService } from '../shared/data-remote';

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
    private dataRemote: DataRemoteService
  ) { }

  ngOnInit() {
  }

  download(): void {
    this.dataRemote.getFile$(151)
      .subscribe(res => {
        console.log(res);
        // window.open(res.url);
        window.location.assign(res.url);
      })

  }

  export(): void {

    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }

}
