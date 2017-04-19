import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReactiveXComponent } from './reactive-x/reactive-x.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ReactiveXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqZcZ_L6UIsGVHcDqWdu-GrsRSPcpWeqU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
