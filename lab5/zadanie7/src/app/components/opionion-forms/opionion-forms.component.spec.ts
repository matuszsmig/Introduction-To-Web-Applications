import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpionionFormsComponent } from './opionion-forms.component';

describe('OpionionFormsComponent', () => {
  let component: OpionionFormsComponent;
  let fixture: ComponentFixture<OpionionFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpionionFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpionionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
