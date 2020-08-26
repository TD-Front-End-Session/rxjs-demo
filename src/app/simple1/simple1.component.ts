import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-simple1',
  templateUrl: './simple1.component.html',
  styleUrls: ['./simple1.component.less']
})
export class Simple1Component implements OnInit, OnDestroy {
  observable: Observable<Number>;
  subscriptions: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {
    // 1. 定义被观察者
    this.observable = timer(1000, 1000).pipe(take(7));

    // 2. 定义观察者
    const observerA = {
      next: value => {
        console.log('observerA', value);
      },
      error: error => {
        console.log('observerA', error);
      },
      complete: () => {
        console.log('observerA', 'complete');
      }
    };

    // 3. 订阅
    const subscriptionA = this.observable.subscribe(observerA);
    this.subscriptions.push(subscriptionA);

    setTimeout(() => {
      console.log('in setTimeout');
      const subscriptionB = this.observable.subscribe(
        value => {
          console.log('observerB', value);
        },
        error => {
          console.log('observerB', error);
        },
        () => {
          console.log('observerB', 'complete');
        }
      );
      this.subscriptions.push(subscriptionB);
    }, 1000);
  };

  ngOnDestroy():void {
    // 4 取消订阅
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
