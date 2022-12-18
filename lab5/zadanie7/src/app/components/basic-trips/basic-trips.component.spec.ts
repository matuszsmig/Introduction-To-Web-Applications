import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTripsComponent } from './basic-trips.component';

describe('BasicTripsComponent', () => {
  let component: BasicTripsComponent;
  let fixture: ComponentFixture<BasicTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
