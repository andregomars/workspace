import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { ExporterComponent } from './exporter/exporter.component';
import { ChartComponent } from './chart/chart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GaugeComponent } from './gauge/gauge.component';


const routes: Routes = [
    { path: 'reactivex', component: ReactiveXComponent },
    { path: 'googlemap', component: GoogleMapComponent },
    { path: 'exporter', component: ExporterComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'table', component: DataTableComponent },
    { path: 'gauge', component: GaugeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }