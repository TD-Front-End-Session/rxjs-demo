import { Component, OnInit } from '@angular/core';
import { MulticastService } from '../multicast.service';
@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.less']
})
export class Consumer1Component implements OnInit {

  constructor(private multicastService: MulticastService) { }

  ngOnInit(): void {
    this.multicastService.getMessage().subscribe(value => {
      console.log(`consumer1 ${value.text}`)
    });
  }

}
