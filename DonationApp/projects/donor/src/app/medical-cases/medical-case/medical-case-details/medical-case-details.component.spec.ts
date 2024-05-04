import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCaseDetailsComponent } from './medical-case-details.component';

describe('MedicalCaseDetailsComponent', () => {
  let component: MedicalCaseDetailsComponent;
  let fixture: ComponentFixture<MedicalCaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalCaseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalCaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
