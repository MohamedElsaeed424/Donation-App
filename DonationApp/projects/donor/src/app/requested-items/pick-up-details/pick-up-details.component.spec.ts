import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpDetailsComponent } from './pick-up-details.component';

describe('PickUpDetailsComponent', () => {
  let component: PickUpDetailsComponent;
  let fixture: ComponentFixture<PickUpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickUpDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
