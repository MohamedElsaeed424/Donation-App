import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemsCategoryComponent } from './food-items-category.component';

describe('FoodItemsCategoryComponent', () => {
  let component: FoodItemsCategoryComponent;
  let fixture: ComponentFixture<FoodItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
