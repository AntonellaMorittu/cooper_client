import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PersonProvider } from '../providers/person/person';
import { CooperProvider } from '../providers/cooper/cooper';
import { PerformanceDataProvider } from '../providers/performance-data/performance-data';
import { ResultsPage } from '../pages/results/results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    RouterModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonProvider,
    CooperProvider,
    Angular2TokenService,
    PerformanceDataProvider
  ]
})
export class AppModule {}
