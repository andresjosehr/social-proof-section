import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TestimonialCardComponent } from './main/testimonial-card/testimonial-card.component';
import { RatedCardComponent } from './main/rated-card/rated-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TestimonialCardComponent,
    RatedCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
