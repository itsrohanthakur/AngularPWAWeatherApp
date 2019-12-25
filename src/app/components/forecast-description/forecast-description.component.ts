import { Component, OnInit, Input } from '@angular/core';
import { IForecast } from '../../interfaces';

@Component({
  selector: 'app-forecast-description',
  templateUrl: './forecast-description.component.html',
  styleUrls: ['./forecast-description.component.scss']
})
export class ForecastDescriptionComponent implements OnInit {
  @Input() public forecastData: IForecast;
  constructor() { }
  foreCastVar:number=0;
  ngOnInit() {
    
  }
  navForecast(type){
    if(type=='desc'){
      this.foreCastVar--;
    }
    else{
      this.foreCastVar++;
    }
  }
}
