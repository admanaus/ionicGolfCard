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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from "../card/card";
/**
 * Generated class for the PlayersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlayersPage = (function () {
    function PlayersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.players = [null, null, null, null];
    }
    PlayersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayersPage');
        this.course = this.navParams.data;
    };
    PlayersPage.prototype.savePlayers = function ($event, players) {
        this.course.players = this.players;
        console.log(this.course);
        this.navCtrl.push(CardPage, this.course);
    };
    return PlayersPage;
}());
PlayersPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-players',
        templateUrl: 'players.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams])
], PlayersPage);
export { PlayersPage };
//# sourceMappingURL=players.js.map