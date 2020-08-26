import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.less']
})
export class SimpleComponent implements OnInit, OnDestroy {
  observable: Observable<Number>;
  subscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    // 1. 定义被观察者
    this.observable = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      // observer.error("e");
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
    this.subscription = this.observable.pipe(
      finalize(() => {console.log('finalize')}),
    )
    .subscribe(observerA);
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
