import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormReactiveComponent } from './signup-form-reactive.component';

describe('SignupFormReactiveComponent', () => {
  let component: SignupFormReactiveComponent;
  let fixture: ComponentFixture<SignupFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
