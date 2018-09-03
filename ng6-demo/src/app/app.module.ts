import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultTemplateComponent } from './containers/default-template/default-template.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultTemplateComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
