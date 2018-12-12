import { Component, OnInit, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private topic = 'mytopic';
  message: string;

  constructor(private mqttService: MqttService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  publish() {
    const topic = this.topic;
    const msg = 'say hello';
    this.mqttService.unsafePublish(topic,
      msg,
      {qos: 1, retain: true}
    );
  }

  subscribe() {
    this.mqttService.connect();
    this.subscription =
      this.mqttService.observe(this.topic).subscribe(
        (message: IMqttMessage) => {
          this.message = message.payload.toString();
      });
  }

}
