import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '@angular/material';
import { ChartModule, TieredMenuModule, ButtonModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { ExporterComponent } from './exporter/exporter.component';
import { ChartComponent } from './chart/chart.component';
import { DataLocalService } from './shared/data-local';
import { MenuComponent } from './menu/menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GaugeComponent } from './gauge/gauge.component';
import { LinearGaugeComponent, RadialGaugeComponent } from 'ng-canvas-gauges/component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ReactiveXComponent,
    ExporterComponent,
    ChartComponent,
    MenuComponent,
    DataTableComponent,
    GaugeComponent,
    LinearGaugeComponent,
    RadialGaugeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MaterialModule,
    ChartModule,
    TieredMenuModule,
    ButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqZcZ_L6UIsGVHcDqWdu-GrsRSPcpWeqU'
    })
  ],
  providers: [
    DataLocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
