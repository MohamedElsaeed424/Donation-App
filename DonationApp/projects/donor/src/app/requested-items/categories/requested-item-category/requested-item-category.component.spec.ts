import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedItemCategoryComponent } from './requested-item-category.component';

describe('RequestedItemCategoryComponent', () => {
  let component: RequestedItemCategoryComponent;
  let fixture: ComponentFixture<RequestedItemCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestedItemCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestedItemCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
