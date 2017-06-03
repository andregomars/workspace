import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../shared/data-local';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data: any[];
  cols: any[];

  constructor(
    private dataService: DataLocalService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getChartData().slice(0, 9);
    this.cols = [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "value", header: "Value" },
      { field: "unit", header: "Unit" },
      { field: "time", header: "Time" },
      { field: "time", header: "Time 2" },
      { field: "time", header: "Time 3" },
      { field: "time", header: "Time 4" },
      { field: "time", header: "Time 5" }
    ];
  }

}
