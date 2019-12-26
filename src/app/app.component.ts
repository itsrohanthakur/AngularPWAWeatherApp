import { ThemeChangeService } from './services/theme-change.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'app';
  isDarkTheme:Boolean;
  subscription:Subscription;
  constructor(private themeChangeService:ThemeChangeService){
    
  }
  ngOnInit(){
    this.subscription= this.themeChangeService.isDarkTheme.subscribe(
      result=>{
        this.isDarkTheme=result;
      }
    )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    
  }
  
}
