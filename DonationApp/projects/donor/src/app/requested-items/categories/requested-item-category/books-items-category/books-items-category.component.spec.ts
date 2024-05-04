import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemsCategoryComponent } from './books-items-category.component';

describe('BooksItemsCategoryComponent', () => {
  let component: BooksItemsCategoryComponent;
  let fixture: ComponentFixture<BooksItemsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksItemsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksItemsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
