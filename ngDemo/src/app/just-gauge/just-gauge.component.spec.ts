import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustGaugeComponent } from './just-gauge.component';

describe('JustGaugeComponent', () => {
  let component: JustGaugeComponent;
  let fixture: ComponentFixture<JustGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
