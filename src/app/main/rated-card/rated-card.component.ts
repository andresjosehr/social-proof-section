import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rated-card',
  templateUrl: './rated-card.component.html',
  styleUrls: ['./rated-card.component.scss']
})
export class RatedCardComponent implements OnInit {

  @Input() marginRight: number;

  constructor() {
    this.marginRight = 0;
  }

  ngOnInit(): void {
  }

}
