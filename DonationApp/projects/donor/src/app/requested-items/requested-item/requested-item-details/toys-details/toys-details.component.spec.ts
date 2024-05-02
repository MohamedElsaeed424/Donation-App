import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysDetailsComponent } from './toys-details.component';

describe('ToysComponent', () => {
  let component: ToysDetailsComponent;
  let fixture: ComponentFixture<ToysDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToysDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
