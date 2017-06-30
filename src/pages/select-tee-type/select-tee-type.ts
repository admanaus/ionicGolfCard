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
  weather: any;
  temp: any;

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
      this.course.gameID = Math.floor(Math.random() * 100000);
      this.getWeather();

      // for (let tee of this.course.course.tee_types){
      //   this.tees.push(tee)
      // }

    })
  }

  getSpecificCourseService(id){
    let url: string = "https://golf-courses-api.herokuapp.com/courses/" + id;

    return this.http.get(url);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }

  getWeather(){
    this.getWeatherService().subscribe(response => {
      this.weather = JSON.parse(response.text());
      this.temp = Math.floor(this.weather.main.temp);
      console.log(this.weather);
    })
  }

  getWeatherService(){
    let zipcode = this.course.course.zip_code.slice(0, 5); //this trims off the sub-zipcode for passing into weather API
    console.log(zipcode);
    let url: string = "http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +"&units=imperial&appid=cc8ef8e5c209d938ab3801daa42b5e31";
    console.log(url);
    return this.http.get(url);
  }

}
