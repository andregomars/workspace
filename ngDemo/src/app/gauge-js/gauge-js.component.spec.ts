import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeJsComponent } from './gauge-js.component';

describe('GaugeJsComponent', () => {
  let component: GaugeJsComponent;
  let fixture: ComponentFixture<GaugeJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
