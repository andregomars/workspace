import { Component, OnInit, OnDestroy } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Subscription, Observable } from 'rxjs';
import { map, shareReplay, tap, bufferCount, take, concatMap, scan, reduce } from 'rxjs/operators';
import { format } from 'date-fns';
import { RxQueue } from 'rx-queue';
import { queue } from 'rxjs/internal/scheduler/queue';

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
  messages: string[] = [];

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
    // this.subscription =
    //   this.mqttService.observe(this.topic).subscribe(
    //     (message: IMqttMessage) => {
    //       this.messages.push(`${message.payload.toString()} @${format(new Date(), 'hh:mm:ss')}`);
    //   });
    // this.subscription =

    // this.queue =
    //   this.mqttService.observe(this.topic).pipe(
    //     concatMap((message: IMqttMessage) => {
    //       const msg = `${message.payload.toString()} @${format(new Date(), 'hh:mm:ss')}`;
    //       this.queue.next(msg);
    //       return this.queue.asObservable();
    //     })
    //   );

    // this.messages$ =
      this.mqttService.observe(this.topic).pipe(
        map((message: IMqttMessage) =>
          `${message.payload.toString()} @${format(new Date(), 'hh:mm:ss')}`
        ),
        scan((acc, cur) => { acc.push(cur); return acc; }, []),
        bufferCount(5),
        take(4),
        // map(msg => this.queue.next(msg)),
        tap(x => console.log(x))
      );

  }
}
