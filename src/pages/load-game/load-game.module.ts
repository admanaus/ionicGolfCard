import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadGamePage } from './load-game';

@NgModule({
  declarations: [
    LoadGamePage,
  ],
  imports: [
    IonicPageModule.forChild(LoadGamePage),
  ],
  exports: [
    LoadGamePage
  ]
})
export class LoadGamePageModule {}
