import { Component, OnInit, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription, Observable } from 'rxjs';
import { map, shareReplay, tap, bufferCount, take, concatMap, scan, reduce } from 'rxjs/operators';
import { format } from 'date-fns';
import { RxQueue } from 'rx-queue';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private topic = 'mytopic';
  messages$: Observable<string[]>;
  queue: RxQueue<string> = new RxQueue<string>();
  // messages: string[] = [];

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

    const queue: string[] = [];
    this.messages$ =
      this.mqttService.observe(this.topic).pipe(
        map((message: IMqttMessage) =>
          `${message.payload.toString()} @${format(new Date(), 'hh:mm:ss')}`
        ),
        map(msg => {
          if (queue.length > 5) {
            queue.pop();
          }
          queue.unshift(msg);
          return queue;
        }),
        // tap(x => console.log(x))
      );

  }
}
