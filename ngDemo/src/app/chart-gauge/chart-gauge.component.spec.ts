import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGaugeComponent } from './chart-gauge.component';

describe('ChartGaugeComponent', () => {
  let component: ChartGaugeComponent;
  let fixture: ComponentFixture<ChartGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
