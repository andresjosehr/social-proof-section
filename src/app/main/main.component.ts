import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  testimonialsData: Array<any>

  constructor() {
    this.testimonialsData=[{
      name: "Colton Smith",
      profile: "Verified Buyer",
      image: "image-colton.jpg",
      testimonial: '" We needed the same printed design as the one we had ordered a week prior. Not only did the find original order, but we also received it in time. Excellent! "',
      stars: 5,
      starsDescription:"Rated 5 Stars in Reviews"
    },
    {
      name: "Irene Roberts",
      profile: "Verified Buyer",
      image: "image-irene.jpg",
      testimonial: '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed oh the delivery "',
      stars: 5,
      starsDescription:"Rated 5 stars in Report Guru"
    },
    {
      name: "Anne Wallace",
      profile: "Verified Buyer",
      image: "image-anne.jpg",
      testimonial: '" Put an order with this company and can only praise them for the very high standad. Will definitely use them agay and recommend them to everyone! "',
      stars: 5,
      starsDescription:"Rated 5 in BestTech"
    }]
  }

  ngOnInit(): void {
  }

}
