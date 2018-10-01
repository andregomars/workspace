import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultTemplateComponent } from './containers/default-template/default-template.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { PlayerBarState } from './components/player-bar/player-bar.state';

@NgModule({
  declarations: [
    AppComponent,
    DefaultTemplateComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    NgxsModule.forRoot([PlayerBarState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
