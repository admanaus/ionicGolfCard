var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from "@angular/http";
import { SelectTeeTypePage } from "../select-tee-type/select-tee-type";
/**
 * Generated class for the NewGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewGamePage = (function () {
    function NewGamePage(navCtrl, navParams, toastCtrl, http, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.loadingController = loadingController;
    }
    NewGamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting nearby courses ...'
        });
        loader.present().then(function () {
            _this.getLocation();
            loader.dismiss();
        });
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad NewGamePage');
    //   this.getLocation();
    // }
    NewGamePage.prototype.ngOnInit = function () {
        // this.getLocation();
    };
    NewGamePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3500
        });
        toast.present();
    };
    NewGamePage.prototype.getLocationService = function () {
        this.presentToast('Finding your location...');
        return new Promise(executor);
        function executor(resolve, reject) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position);
                }, function (error) {
                    reject(error);
                });
            }
            else {
                reject({ message: 'no geolocation avalible' });
            }
        }
    };
    NewGamePage.prototype.getLocation = function () {
        var _this = this;
        this.getLocationService().then(function (location) {
            _this.location = location;
            _this.userLat = _this.location.coords.latitude;
            _this.userLong = _this.location.coords.longitude;
            console.log("Lat: " + _this.userLat);
            console.log("Long: " + _this.userLong);
            _this.getNearbyCourses();
        });
    };
    NewGamePage.prototype.getNearbyCoursesService = function (lat, long) {
        var url = "http://golf-courses-api.herokuapp.com/courses/";
        var body = {
            "latitude": lat,
            "longitude": long,
            "radius": 50 // in kilometers
        };
        return this.http.post(url, body);
    };
    NewGamePage.prototype.getNearbyCourses = function () {
        var _this = this;
        this.getNearbyCoursesService(this.userLat, this.userLong)
            .subscribe(function (response) {
            _this.nearbyCourses = JSON.parse(response.text());
        });
    };
    NewGamePage.prototype.itemSelected = function (event, courseID) {
        this.navCtrl.push(SelectTeeTypePage, courseID);
    };
    return NewGamePage;
}());
NewGamePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-new-game',
        templateUrl: 'new-game.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ToastController,
        Http,
        LoadingController])
], NewGamePage);
export { NewGamePage };
//# sourceMappingURL=new-game.js.map