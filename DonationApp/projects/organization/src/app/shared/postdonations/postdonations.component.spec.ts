import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdonationsComponent } from './postdonations.component';

describe('PostdonationsComponent', () => {
  let component: PostdonationsComponent;
  let fixture: ComponentFixture<PostdonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostdonationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostdonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
