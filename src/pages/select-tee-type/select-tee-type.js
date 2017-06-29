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
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from "@angular/http";
import { PlayersPage } from "../players/players";
/**
 * Generated class for the SelectTeeTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectTeeTypePage = (function () {
    function SelectTeeTypePage(navCtrl, navParams, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.courseID = this.navParams.data;
    }
    SelectTeeTypePage.prototype.ionViewDidLoad = function () {
        this.presentToast("Getting Selected Course...");
        this.getSpecificCourse(this.courseID);
    };
    SelectTeeTypePage.prototype.itemSelected = function ($event, teeType) {
        this.course.selectedTee = teeType;
        this.navCtrl.push(PlayersPage, this.course);
    };
    SelectTeeTypePage.prototype.ngOnInit = function () { };
    SelectTeeTypePage.prototype.getSpecificCourse = function (id) {
        var _this = this;
        this.getSpecificCourseService(id).subscribe(function (response) {
            _this.course = JSON.parse(response.text());
            console.log(_this.course);
            // for (let tee of this.course.course.tee_types){
            //   this.tees.push(tee)
            // }
        });
    };
    SelectTeeTypePage.prototype.getSpecificCourseService = function (id) {
        var url = "https://golf-courses-api.herokuapp.com/courses/" + id;
        return this.http.get(url);
    };
    SelectTeeTypePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1000
        });
        toast.present();
    };
    return SelectTeeTypePage;
}());
SelectTeeTypePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-select-tee-type',
        templateUrl: 'select-tee-type.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ToastController,
        Http])
], SelectTeeTypePage);
export { SelectTeeTypePage };
//# sourceMappingURL=select-tee-type.js.map