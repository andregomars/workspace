import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { ExporterComponent } from './exporter/exporter.component';

const routes: Routes = [
    { path: 'reactivex', component: ReactiveXComponent },
    { path: 'googlemap', component: GoogleMapComponent },
    { path: 'exporter', component: ExporterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
