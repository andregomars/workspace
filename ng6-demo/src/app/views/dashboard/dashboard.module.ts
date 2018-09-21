import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DataService } from '../../services/data.service';
import { DemoComponent } from './demo.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DemoComponent
  ],
  providers: [
    DataService
  ]
})
export class DashboardModule { }
