import {Component, OnDestroy, OnInit} from '@angular/core';
import { fromEvent, of, empty, Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  mapTo,
  scan,
  merge,
  mergeMap,
  expand,
  take,
  delay,
  skip
} from 'rxjs/operators';

@Component({
  selector: 'app-stream1',
  templateUrl: './stream1.component.html',
  styleUrls: ['./stream1.component.less']
})
export class Stream1Component implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initExample1();
    this.initExample2();
    this.initExample3();
    this.initExample4();
  }

  initExample1(): void {
    const countClickBtn = document.getElementById('click-count');
    const subscription1 = fromEvent(countClickBtn, 'click')
      .pipe(
        mapTo(2),
        scan((acc, one) => acc + one, 0)
      )
      .subscribe(value => {
        console.log(value);
      });
    this.subscriptions.push(subscription1);
  }

  initExample2(): void {
    const expandBtn = document.getElementById('expand-btn');

    const subscription2 = fromEvent(expandBtn, 'click')
      .pipe(
        mapTo(1),
        expand(x => of(2 * x).pipe(delay(1000))),
        take(10)
      )
      .subscribe(x => console.log(x));

    this.subscriptions.push(subscription2);
  }

  initExample3(): void {
    const printEvenBtn = document.getElementById('print-even');
    const subscription3 = fromEvent(printEvenBtn, 'click')
      .pipe(
        mapTo(1),
        scan((acc, one) => acc + one, 0),
        mergeMap(x => (x % 2 === 0 ? of('even'+x) : empty())),
        skip(1)
      )
      .subscribe(value => {
        console.log(value);
      });

    this.subscriptions.push(subscription3);
  }

  initExample4(): void {
    const switchMapBtn = document.getElementById('switch-map');
    fromEvent(switchMapBtn, 'click').pipe(
      switchMap(event => interval(1000))
    ).subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
