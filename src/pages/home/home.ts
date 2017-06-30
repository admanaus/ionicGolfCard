import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewGamePage} from "../new-game/new-game";
import {LoadGamePage} from "../load-game/load-game";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNewGame(){
    this.navCtrl.push(NewGamePage);
  }

  goToSavedGame(){
    this.navCtrl.push(LoadGamePage);
  }
}
