import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from '@angular/material';
import { ChartModule, TieredMenuModule, ButtonModule, DataTableModule,
  ProgressBarModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';
import { ExporterComponent } from './exporter/exporter.component';
import { ChartComponent } from './chart/chart.component';
import { DataLocalService } from './shared/data-local';
import { DataRemoteService } from './shared/data-remote';
import { MenuComponent } from './menu/menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { GaugeComponent } from './gauge/gauge.component';
import { LinearGaugeComponent, RadialGaugeComponent } from 'ng-canvas-gauges/component';
import { ProgressMeterComponent } from './progress-meter/progress-meter.component';
import { JustGaugeComponent } from './just-gauge/just-gauge.component';
import { GaugeModule } from 'ng-gauge';
import { GaugeJsComponent } from './gauge-js/gauge-js.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { JustgageModule } from 'angular2-justgage';


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
    RadialGaugeComponent,
    ProgressMeterComponent,
    JustGaugeComponent,
    GaugeJsComponent,
    DataCardsComponent
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
    DataTableModule,
    ProgressBarModule,
    GaugeModule,
    JustgageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqZcZ_L6UIsGVHcDqWdu-GrsRSPcpWeqU'
    })
  ],
  providers: [
    DataLocalService,
    DataRemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
