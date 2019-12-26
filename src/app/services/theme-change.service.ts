import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {
  private _darkTheme = new BehaviorSubject<Boolean>(true);
  isDarkTheme = this._darkTheme.asObservable();
  constructor() { }

  setDarkTheme(isDarkTheme:Boolean){
    this._darkTheme.next(isDarkTheme);
  }
}
