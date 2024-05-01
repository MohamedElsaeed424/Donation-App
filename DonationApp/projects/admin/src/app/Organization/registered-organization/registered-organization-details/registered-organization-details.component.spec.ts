import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredOrganizationDetailsComponent } from './registered-organization-details.component';

describe('RegisteredOrganizationDetailsComponent', () => {
  let component: RegisteredOrganizationDetailsComponent;
  let fixture: ComponentFixture<RegisteredOrganizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredOrganizationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
