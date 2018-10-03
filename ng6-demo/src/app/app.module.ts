import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultTemplateComponent } from './containers/default-template/default-template.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { PlayerBarState } from './components/player-bar/player-bar.state';
import { AuthState } from './states/auth.state';
import { AppRouterStateSerializer } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DefaultTemplateComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    NgxsModule.forRoot([
      PlayerBarState,
      AuthState
    ]),
    NgxsRouterPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.token', 'auth.email']
    })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: AppRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
