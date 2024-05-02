import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationDetailsComponent } from './blood-donation-details.component';

describe('BloodDonationComponent', () => {
  let component: BloodDonationDetailsComponent;
  let fixture: ComponentFixture<BloodDonationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodDonationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
