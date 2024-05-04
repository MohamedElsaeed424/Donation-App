import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCasesListComponent } from './medical-cases-list.component';

describe('MedicalCasesListComponent', () => {
  let component: MedicalCasesListComponent;
  let fixture: ComponentFixture<MedicalCasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalCasesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalCasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
