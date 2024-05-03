import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorSubmissionsComponent } from './donor-submissions.component';

describe('DonorSubmissionsComponent', () => {
  let component: DonorSubmissionsComponent;
  let fixture: ComponentFixture<DonorSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonorSubmissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonorSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
