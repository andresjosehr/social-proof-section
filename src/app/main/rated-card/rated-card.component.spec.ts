import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedCardComponent } from './rated-card.component';

describe('RatedCardComponent', () => {
  let component: RatedCardComponent;
  let fixture: ComponentFixture<RatedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
