import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NewGamePage} from "../pages/new-game/new-game";
import {HttpModule} from "@angular/http";
import {SelectTeeTypePage} from "../pages/select-tee-type/select-tee-type";
import {PlayersPage} from "../pages/players/players";
import {CardPage} from "../pages/card/card";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewGamePage,
    SelectTeeTypePage,
    PlayersPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewGamePage,
    SelectTeeTypePage,
    PlayersPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
