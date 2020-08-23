import { Component, OnInit } from '@angular/core';
import { MulticastService } from '../multicast.service';
@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.less']
})
export class Consumer2Component implements OnInit {

  constructor(private multicastService: MulticastService) { }

  ngOnInit(): void {
    this.multicastService.getMessage().subscribe(value => {
      console.log(`consumer2 ${value.text}`)
    });
  }

}
