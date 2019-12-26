import { ThemeChangeService } from './../../services/theme-change.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { CitiesService, ModalService, WeatherService} from '../../services';
import { IWeatherData, ICoordinates } from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private weatherSubscription: Subscription;
  isDarkTheme:Observable<Boolean>;

  constructor(private modalService: ModalService,
    private citiesService: CitiesService,
    private weatherService: WeatherService,
    private themeChangeService: ThemeChangeService) { }

  ngOnInit() {
    this.listenModalResults();
    this.isDarkTheme = this.themeChangeService.isDarkTheme;

  }
  toggleDarkTheme(checked:Boolean){
    this.themeChangeService.setDarkTheme(checked);
  }

  public showCitySelector(): void {
    this.modalService.showModal(CitySelectorComponent);
  }

  public onCitySelected(cityData: IWeatherData): void {
    this.weatherService.fetchWeatherDataByCityId(cityData.id);
  }

  public onCurrentCoordinatesSelected(coordinates: ICoordinates): void {
    this.weatherService.fetchWeatherDataByCoordinates(coordinates);
  }

  private listenModalResults(): void {
    this.modalService.getResult().subscribe((res: any) => {
      if (res) {
        try {
          this.citiesService.addCity(<IWeatherData> res);
        } catch (e) {}
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
