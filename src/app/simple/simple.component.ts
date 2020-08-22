import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.less']
})
export class SimpleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const el = document.getElementById('my-element');

    const mouseMoves = fromEvent(document, 'mousemove');

    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      
      el.innerHTML = `Coords: ${evt.clientX} X ${evt.clientY}`;

      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }
}
