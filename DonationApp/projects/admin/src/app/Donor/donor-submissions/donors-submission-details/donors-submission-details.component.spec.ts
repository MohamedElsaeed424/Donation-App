import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsSubmissionDetailsComponent } from './donors-submission-details.component';

describe('DonorsSubmissionDetailsComponent', () => {
  let component: DonorsSubmissionDetailsComponent;
  let fixture: ComponentFixture<DonorsSubmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonorsSubmissionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonorsSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
