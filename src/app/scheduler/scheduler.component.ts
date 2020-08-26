import { Component, OnInit } from '@angular/core';
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.less']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = Observable.create(function (proxyObserver) {
      proxyObserver.next(1);
      proxyObserver.next(2);
      proxyObserver.next(3);
      proxyObserver.complete();
    }).pipe(observeOn(asyncScheduler));
    
    var finalObserver = {
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    };
    
    console.log('just before subscribe');
    observable.subscribe(finalObserver);
    console.log('just after subscribe');
  }

}
