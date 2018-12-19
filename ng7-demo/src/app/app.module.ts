import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

export const MQTT_PUBLIC_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: false,
  protocol: 'ws',
  hostname: 'test.mosquitto.org',
  port: 8080
};

export const MQTT_PUBLIC_SSL_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: false,
  protocol: 'wss',
  hostname: 'test.mosquitto.org',
  port: 8081
};

export const MQTT_LOCAL_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: false,
  protocol: 'ws',
  hostname: 'localhost',
  port: 9001
};

export const MQTT_LOCAL_SSL_OPTIONS: IMqttServiceOptions = {
  connectOnCreate: false,
  protocol: 'wss',
  hostname: 'localhost',
  port: 9001
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_LOCAL_SSL_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
