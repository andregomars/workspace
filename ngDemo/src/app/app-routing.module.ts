import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { ExporterComponent } from './exporter/exporter.component';
import { ChartComponent } from './chart/chart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GaugeComponent } from './gauge/gauge.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { AuthGuardService } from './auth-guard.service';
import { FireComponent } from './fire/fire.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormReactiveComponent } from './signup-form-reactive/signup-form-reactive.component';

const routes: Routes = [
    { path: 'reactivex', component: ReactiveXComponent },
    { path: 'googlemap', component: GoogleMapComponent, canActivate: [AuthGuardService] },
    { path: 'exporter', component: ExporterComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'table', component: DataTableComponent },
    { path: 'gauge', component: GaugeComponent },
    { path: 'cards', component: DataCardsComponent },
    { path: 'firebase', component: FireComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'signup-reactive', component: SignupFormReactiveComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [ AuthGuardService ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
