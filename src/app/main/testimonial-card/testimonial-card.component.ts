import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  
  @Input() marginTop: number;
  @Input() testimonialData: any;

  constructor() {
    this.marginTop=0
  }

  ngOnInit(): void {
  }

}
