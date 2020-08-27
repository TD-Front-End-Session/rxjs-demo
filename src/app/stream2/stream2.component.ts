import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, merge, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stream2',
  templateUrl: './stream2.component.html',
  styleUrls: ['./stream2.component.less']
})
export class Stream2Component implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const btn = document.getElementById('my-button');
    const eventObservable = fromEvent(btn, 'click');
    const intervalObservable = interval(1000);

    this.subscription = merge(eventObservable, intervalObservable)
    .subscribe(
      (value) => {
        console.log(value);
      },
      () => {
        console.log('error');
      },
      () => {
        console.log('complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
