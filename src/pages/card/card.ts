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

  changeScore(name, hole, amount){
    this.course.players.forEach((player) => {
      if (player.name === name) {
        player.score[hole - 1] = player.score[hole - 1] + amount;
      }
    })
    console.log(this.course.players);
  }

}
