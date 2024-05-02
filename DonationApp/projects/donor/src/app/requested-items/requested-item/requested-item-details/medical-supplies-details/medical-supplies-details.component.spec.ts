import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSuppliesDetailsComponent } from './medical-supplies-details.component';

describe('MedicalSuppliesComponent', () => {
  let component: MedicalSuppliesDetailsComponent;
  let fixture: ComponentFixture<MedicalSuppliesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalSuppliesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSuppliesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
