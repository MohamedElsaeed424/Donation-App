import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfilledDonorsComponent } from './fulfilled-donors.component';

describe('FulfilledDonorsComponent', () => {
  let component: FulfilledDonorsComponent;
  let fixture: ComponentFixture<FulfilledDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FulfilledDonorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulfilledDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
