import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPostsListComponent } from './teaching-posts-list.component';

describe('TeachingPostsListComponent', () => {
  let component: TeachingPostsListComponent;
  let fixture: ComponentFixture<TeachingPostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingPostsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
