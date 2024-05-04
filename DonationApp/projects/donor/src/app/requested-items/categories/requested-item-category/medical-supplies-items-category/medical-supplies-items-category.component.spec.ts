import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSuppliesItemsCategoryComponent } from './medical-supplies-items-category.component';

describe('MedicalSuppliesItemsCategoryComponent', () => {
  let component: MedicalSuppliesItemsCategoryComponent;
  let fixture: ComponentFixture<MedicalSuppliesItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalSuppliesItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalSuppliesItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
