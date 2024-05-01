import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsPendingRequestsComponent } from './organizations-pending-requests.component';

describe('OrganizationsPendingRequestsComponent', () => {
  let component: OrganizationsPendingRequestsComponent;
  let fixture: ComponentFixture<OrganizationsPendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationsPendingRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationsPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
