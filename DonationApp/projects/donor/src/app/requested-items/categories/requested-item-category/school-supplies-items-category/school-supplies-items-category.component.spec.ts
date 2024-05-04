import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSuppliesItemsCategoryComponent } from './school-supplies-items-category.component';

describe('SchoolSuppliesItemsCategoryComponent', () => {
  let component: SchoolSuppliesItemsCategoryComponent;
  let fixture: ComponentFixture<SchoolSuppliesItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolSuppliesItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolSuppliesItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
