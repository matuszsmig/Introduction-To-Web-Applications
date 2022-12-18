import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelledComponent } from './travelled.component';

describe('TravelledComponent', () => {
  let component: TravelledComponent;
  let fixture: ComponentFixture<TravelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
