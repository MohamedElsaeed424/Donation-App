import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedTimeComponent } from './estimated-time.component';

describe('EstimatedTimeComponent', () => {
  let component: EstimatedTimeComponent;
  let fixture: ComponentFixture<EstimatedTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstimatedTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimatedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
