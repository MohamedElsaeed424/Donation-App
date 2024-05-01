import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsPendingRequestsComponent } from './donors-pending-requests.component';

describe('DonorssPendingRequestsComponent', () => {
  let component: DonorsPendingRequestsComponent;
  let fixture: ComponentFixture<DonorsPendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonorsPendingRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
