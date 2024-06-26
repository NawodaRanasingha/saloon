import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registerComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: registerComponent;
  let fixture: ComponentFixture<registerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [registerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
