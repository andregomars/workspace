import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule, TieredMenuModule, ButtonModule, DataTableModule,
  ProgressBarModule } from 'primeng/primeng';
import { ChartsModule } from 'ng2-charts';

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
import { GaugesModule } from 'ng-canvas-gauges/lib';
import { ProgressMeterComponent } from './progress-meter/progress-meter.component';
import { JustGaugeComponent } from './just-gauge/just-gauge.component';
import { GaugeJsComponent } from './gauge-js/gauge-js.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { JustgageModule } from 'angular2-justgage';
import { ChartGaugeComponent } from './chart-gauge/chart-gauge.component';


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
    ProgressMeterComponent,
    JustGaugeComponent,
    GaugeJsComponent,
    DataCardsComponent,
    ChartGaugeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    TieredMenuModule,
    ButtonModule,
    DataTableModule,
    ProgressBarModule,
    GaugesModule,
    JustgageModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqZcZ_L6UIsGVHcDqWdu-GrsRSPcpWeqU'
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [
    DataLocalService,
    DataRemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
