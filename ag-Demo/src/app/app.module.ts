import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';;

import { MaterialModule } from '@angular/material'

import { AppComponent } from './app.component';
import { MaterialUI } from './material-ui';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MaterialUI
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  bootstrap: [MaterialUI]
})
export class AppModule { }
