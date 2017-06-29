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
/**
 * Generated class for the CardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CardPage = (function () {
    function CardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
        this.course = this.navParams.data;
        this.cleanTees();
        console.log(this.course);
    };
    CardPage.prototype.cleanTees = function () {
        var selectedTee = this.course.selectedTee;
        for (var _i = 0, _a = this.course.course.holes; _i < _a.length; _i++) {
            var hole = _a[_i];
            for (var _b = 0, _c = hole.tee_boxes; _b < _c.length; _b++) {
                var tee = _c[_b];
                if (tee.tee_type !== selectedTee) {
                    tee = null;
                }
            }
        }
    };
    return CardPage;
}());
CardPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-card',
        templateUrl: 'card.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams])
], CardPage);
export { CardPage };
//# sourceMappingURL=card.js.map