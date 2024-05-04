import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPostDetailsComponent } from './teaching-post-details.component';

describe('TeachingPostDetailsComponent', () => {
  let component: TeachingPostDetailsComponent;
  let fixture: ComponentFixture<TeachingPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingPostDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
