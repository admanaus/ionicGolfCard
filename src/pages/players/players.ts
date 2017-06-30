import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";

import {Player} from "./individualPlayer.class";

/**
 * Generated class for the PlayersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  public playersArray: Player[] = [new Player];
  public course: any;
  public defaultScores: number[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
    this.course = this.navParams.data;
    this.course.gameDate = Date();
  }

  addPlayer(){
    this.playersArray.push(new Player);
  }

  savePlayers($event, players){
    this.cleanPlayersArray();
    console.log(this.playersArray);
    this.findDefaultScores();
    console.log(this.defaultScores);
    this.addDefaultScores();
    console.log("Add Scores: "+this.playersArray);
    this.course.players = this.playersArray;
    console.log(this.course);
    this.navCtrl.push(CardPage, this.course);
  }

  cleanPlayersArray(){
    this.playersArray.forEach((item, index) => {
      if (!item.name) {
        this.playersArray.splice(index, 1);
      }
    })
    }

  findDefaultScores(){
    let par: number;
    this.defaultScores = [];
    this.course.course.holes.forEach((hole) => {
      par = hole.tee_boxes[0].par;
      this.defaultScores.push(par);

    })
  }

  addDefaultScores(){
    this.playersArray.forEach((player) => {
      player.score = this.defaultScores;
    })
  }

}



