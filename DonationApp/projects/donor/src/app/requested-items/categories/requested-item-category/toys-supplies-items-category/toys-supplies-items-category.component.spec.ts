import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysSuppliesItemsCategoryComponent } from './toys-supplies-items-category.component';

describe('ToysSuppliesItemsCategoryComponent', () => {
  let component: ToysSuppliesItemsCategoryComponent;
  let fixture: ComponentFixture<ToysSuppliesItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToysSuppliesItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToysSuppliesItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
