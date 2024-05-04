import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPostComponent } from './teaching-post.component';

describe('TeachingPostComponent', () => {
  let component: TeachingPostComponent;
  let fixture: ComponentFixture<TeachingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
