import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesItemsCategoryComponent } from './clothes-items-category.component';

describe('ClothesItemsCategoryComponent', () => {
  let component: ClothesItemsCategoryComponent;
  let fixture: ComponentFixture<ClothesItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
