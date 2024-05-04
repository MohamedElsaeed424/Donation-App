import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPostsComponent } from './teaching-posts.component';

describe('TeachingPostsComponent', () => {
  let component: TeachingPostsComponent;
  let fixture: ComponentFixture<TeachingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
