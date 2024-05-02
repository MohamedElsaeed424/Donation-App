import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSuppliesDetailsComponent } from './school-supplies-details.component';

describe('SchoolSuppliesComponent', () => {
  let component: SchoolSuppliesDetailsComponent;
  let fixture: ComponentFixture<SchoolSuppliesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolSuppliesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSuppliesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
