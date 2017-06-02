import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../shared/data-local';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data: any[];

  constructor(
    private dataService: DataLocalService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getChartData().slice(0, 9);
  }

}
