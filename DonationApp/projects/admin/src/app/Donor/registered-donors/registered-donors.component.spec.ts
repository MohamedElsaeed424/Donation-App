import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDonorsComponent } from './registered-donors.component';

describe('RegisteredDonorsComponent', () => {
  let component: RegisteredDonorsComponent;
  let fixture: ComponentFixture<RegisteredDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredDonorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
