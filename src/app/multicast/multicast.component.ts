import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.less']
})
export class MulticastComponent implements OnInit {
  subject: Subject;
  constructor() {}

  ngOnInit(): void {
    const multicastBtn = document.getElementById('multicast-btn');
    this.subject = fromEvent(multicastBtn,'click');
  }
}
