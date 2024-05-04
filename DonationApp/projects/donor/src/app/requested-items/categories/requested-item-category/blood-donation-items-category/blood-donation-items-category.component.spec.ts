import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationItemsCategoryComponent } from './blood-donation-items-category.component';

describe('BloodDonationItemsCategoryComponent', () => {
  let component: BloodDonationItemsCategoryComponent;
  let fixture: ComponentFixture<BloodDonationItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodDonationItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodDonationItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
