import { Component, OnInit } from '@angular/core';
import { of, from, interval, Subscription } from 'rxjs';
import { map, filter, concat, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat-stream',
  templateUrl: './concat-stream.component.html',
  styleUrls: ['./concat-stream.component.less']
})
export class ConcatStreamComponent implements OnInit {
  subscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const el = document.getElementById('my-element');

    const numbers = of(10, 20, 30);
    const letters = from(['a', 'b', 'c']);
    const intervalObservable = interval(1000).pipe(take(6));
    this.subscription = numbers.pipe(
      map(x => x+1),
      filter(x => x > 15),
      concat(letters, intervalObservable)
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
