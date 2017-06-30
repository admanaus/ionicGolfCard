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

  changeScore($event, index, hole, amount){
    console.log("Index: "+ index);

    this.course.players[index].score[hole - 1] = this.course.players[index].score[hole - 1] + amount;
    this.saveToLocalStorage();
    console.log(this.course.players);

  }

  saveToLocalStorage(){
    localStorage.setItem(this.course.gameID, JSON.stringify(this.course));
  }

}
