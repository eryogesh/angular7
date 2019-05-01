import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  countBy = 1;
  count = 0;

  incClicked() {
    this.count = this.count + this.countBy;
  }

  decClicked() {
    this.count -= this.countBy;
  }

  ngOnInit() {
  }

}
