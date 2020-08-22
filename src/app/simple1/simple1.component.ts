import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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
    this.observable = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete(1);
    });

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
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
