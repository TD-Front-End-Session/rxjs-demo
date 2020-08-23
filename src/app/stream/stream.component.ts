import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.less']
})
export class StreamComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    const el = document.getElementById('my-element');

    const mouseMoves = fromEvent(document, 'mousemove');

    this.subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      el.innerHTML = `Coords: ${evt.clientX} X ${evt.clientY}`;

      if (evt.clientX < 40 && evt.clientY < 40) {
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
