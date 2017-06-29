import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewGamePage} from "../new-game/new-game";

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

}
