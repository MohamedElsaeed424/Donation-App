import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedItemComponent } from './requested-item.component';

describe('RequestedItemComponent', () => {
  let component: RequestedItemComponent;
  let fixture: ComponentFixture<RequestedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
