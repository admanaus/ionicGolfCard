import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  public course: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
    this.course = this.navParams.data;
    this.cleanTees();
    this.saveToLocalStorage();
    let id = this.course.gameID;
    this.course = JSON.parse(localStorage.getItem(id.toString()));
    this.cleanPlayerNames();
    this.playerTotal();
  }

  cleanTees(){
    let selectedTee = this.course.selectedTee;
    console.log(selectedTee);
    for (let hole of this.course.course.holes){
      hole.tee_boxes.forEach((item, index) => {
        if (item.tee_type === selectedTee) {
          hole.tee_boxes.splice(0, 0, item)
        }
      });
    }
    console.log(this.course.course.holes);
  }

  changeScore($event, index, hole, amount){

    this.course.players[index].score[hole - 1] = this.course.players[index].score[hole - 1] + amount;
    this.playerTotal();
    this.saveToLocalStorage();
    console.log(this.course.players);

  }

  saveToLocalStorage(){
    localStorage.setItem(this.course.gameID, JSON.stringify(this.course));
  }

  cleanPlayerNames() {
    this.course.players.forEach((player1, index1) =>{
      let counter: number = 1;
      this.course.players.forEach((player2, index2) =>{
        if (player1.name === player2.name && index1 != index2) {
          player2.name = player2.name + " (" + counter + ")";
          counter++;
        }
      })
    })
  }

  playerTotal(){
    this.course.players.forEach(player => {
      let score: number = 0;
      player.score.forEach(number => score = score + number);
      player.scoreTotal = score;
      player.offPar = score - this.course.course.tee_types[0].par;
    })
  }
}
