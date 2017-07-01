import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";
import {NewGamePage} from "../new-game/new-game";

/**
 * Generated class for the LoadGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-load-game',
  templateUrl: 'load-game.html',
})
export class LoadGamePage {

  public savedGames: any[] = [];
  public noGamesFound: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadGamePage');
    this.getGames();
    console.log(this.savedGames);
    if (this.savedGames.length > 0) { this.noGamesFound = false;}

  }

  itemSelected($event, game){
    this.navCtrl.push(CardPage, game);
  }

  getGames(){
    for (let i = 0; i <= 100000; i++) {
      let game: any = localStorage.getItem(i.toString());
      if (game) {this.savedGames.push(JSON.parse(game))}
    }
  }
  goToNewGame(){
    this.navCtrl.push(NewGamePage);
  }



}
