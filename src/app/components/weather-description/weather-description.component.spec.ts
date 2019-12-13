import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDescriptionComponent } from './weather-description.component';

describe('WeatherDescriptionComponent', () => {
  let component: WeatherDescriptionComponent;
  let fixture: ComponentFixture<WeatherDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
