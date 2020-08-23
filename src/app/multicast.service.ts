import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from './model/message';

@Injectable({
  providedIn: 'root'
})
export class MulticastService {
private subject = new Subject<Message>();
  constructor() { }

  sendMessage(message: Message) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<Message> {
    return this.subject.asObservable();
  }
}
