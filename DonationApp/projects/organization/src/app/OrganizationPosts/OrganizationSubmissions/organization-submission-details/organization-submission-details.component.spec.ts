import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSubmissionDetailsComponent } from './organization-submission-details.component';

describe('OrganizationSubmissionDetailsComponent', () => {
  let component: OrganizationSubmissionDetailsComponent;
  let fixture: ComponentFixture<OrganizationSubmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationSubmissionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
