import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import {PlayersPage} from "../players/players";

/**
 * Generated class for the SelectTeeTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-tee-type',
  templateUrl: 'select-tee-type.html',
})
export class SelectTeeTypePage implements OnInit{

  courseID: any;
  course: any;
  tees: any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private http: Http) {
    this.courseID = this.navParams.data;
  }

  ionViewDidLoad(){
    this.presentToast("Getting Selected Course...");
    this.getSpecificCourse(this.courseID);
  }

  itemSelected($event, teeType){
    this.course.selectedTee = teeType;
    this.navCtrl.push(PlayersPage, this.course);
  }

  ngOnInit(){}

  getSpecificCourse(id){
    this.getSpecificCourseService(id).subscribe(response => {
      this.course = JSON.parse(response.text());
      console.log(this.course);
      // for (let tee of this.course.course.tee_types){
      //   this.tees.push(tee)
      // }

    })
  }

  getSpecificCourseService(id){
    let url: string = "https://golf-courses-api.herokuapp.com/courses/" + id;

    return this.http.get(url)
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }


}
