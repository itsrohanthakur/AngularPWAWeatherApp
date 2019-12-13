import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDescriptionComponent } from './forecast-description.component';

describe('ForecastDescriptionComponent', () => {
  let component: ForecastDescriptionComponent;
  let fixture: ComponentFixture<ForecastDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
