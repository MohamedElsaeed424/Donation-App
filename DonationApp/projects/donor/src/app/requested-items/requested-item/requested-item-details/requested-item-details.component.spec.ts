import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedItemDetailsComponent } from './requested-item-details.component';

describe('RequestedItemDetailsComponent', () => {
  let component: RequestedItemDetailsComponent;
  let fixture: ComponentFixture<RequestedItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestedItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
