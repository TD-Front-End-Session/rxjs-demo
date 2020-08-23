import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { mapTo, scan } from 'rxjs/operators';
import { Message } from '../model/message';
import { MulticastService } from '../multicast.service';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.less']
})
export class MulticastComponent implements OnInit {
  subject = new Subject<Message>();
  constructor(private multicastService: MulticastService) {}

  ngOnInit(): void {
    const multicastBtn = document.getElementById('multicast-btn');
    fromEvent(multicastBtn,'click')
    .pipe(
      mapTo(1),
      scan((acc, one) => acc + one, 0),
    )
    .subscribe(value => {
      const message = {
        text: `click ${value}`
      };
      this.multicastService.sendMessage(message);
    });
  };
}
