import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import {SelectTeeTypePage} from "../select-tee-type/select-tee-type";

/**
 * Generated class for the NewGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',
})
export class NewGamePage implements OnInit{

  userLat: number;
  userLong: number;
  nearbyCourses: any;
  location: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private http: Http,
              private loadingController: LoadingController
              ) {}


  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting nearby courses ...'
    });
    loader.present().then(() => {
      this.getLocation();

      loader.dismiss();
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewGamePage');
  //   this.getLocation();
  // }


  ngOnInit(){
    // this.getLocation();
  }
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3500
    });
    toast.present();
  }
  getLocationService(){
    this.presentToast('Finding your location...');
    return new Promise(executor);

    function executor(resolve, reject){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position){
            resolve(position);
          },
          function(error){
            reject(error);
          });
      } else {
        reject({message: 'no geolocation avalible'});
      }
    }
  }
  getLocation(){
    this.getLocationService().then(location  => {
      this.location = location;
      this.userLat = this.location.coords.latitude;
      this.userLong = this.location.coords.longitude;
      console.log("Lat: " + this.userLat);
      console.log("Long: " + this.userLong);
      this.getNearbyCourses();
    })
  }

  getNearbyCoursesService(lat, long) { // lat and long are pulled from user's current geolocation
    let url: string = "http://golf-courses-api.herokuapp.com/courses/";
    let body: object = {
      "latitude": lat,
      "longitude": long,
      "radius": 50 // in kilometers
    };

    return this.http.post(url, body)

  }

  getNearbyCourses(){
    this.getNearbyCoursesService(this.userLat, this.userLong)
      .subscribe(response => {
        this.nearbyCourses = JSON.parse(response.text());
      })
  }

  itemSelected(event, courseID){
    this.navCtrl.push(SelectTeeTypePage, courseID);
  }

}
