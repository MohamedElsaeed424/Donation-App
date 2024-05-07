import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredOrganizationComponent } from './registered-organization.component';

describe('RegisteredOrganizationComponent', () => {
  let component: RegisteredOrganizationComponent;
  let fixture: ComponentFixture<RegisteredOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
