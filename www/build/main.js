webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_tab__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tel_onay_tel_onay__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servisler_servisler__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        events.publish('hideHeader', { isHidden: true });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.goToTabPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tab_tab__["a" /* TabPage */]);
    };
    ProfilePage.prototype.goBackTelOnay = function () {
        this.events.publish('hideHeader', { isHidden: true });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tel_onay_tel_onay__["a" /* TelOnayPage */]);
    };
    ProfilePage.prototype.goToServisler = function () {
        if (this.user != null && this.mail != null && this.pass1 == this.pass2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__servisler_servisler__["a" /* ServislerPage */], { user: this.user });
        }
        else if (this.pass1 != this.pass2) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Şifreler eşleşmiyor',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
        else {
            this.navCtrl.push(ProfilePage_1, { user: this.user });
        }
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\profile\profile.html"*/'\n\n\n\n<ion-content>\n\n\n  <div>\n\n    <!--\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="goBackTelOnay()" style="background: transparent;margin-top:23%;font-size: 14px">\n        <ion-icon name="arrow-back" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    -->\n    <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 35%">Profil Oluştur</p>\n    </div>\n  </div>\n\n\n\n\n  <div style="margin-top:50%">\n\n\n    <ion-list inset style="padding: 40px;margin-top: -13%;">\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Kullanıcı Adı</ion-label>\n        </ion-row>\n        <ion-item >\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconKullanici.svg"></ion-label>\n          <ion-input   clearInput="true"  [(ngModel)]="user" placeholder="Adı Soyadı" type="text"  ></ion-input>    \n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Mail Adresi</ion-label>\n        </ion-row>\n        <ion-item >\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconMail.svg"></ion-label>\n          <ion-input  clearInput="true"  [(ngModel)]="mail" placeholder="E Mail Adresinizi Yazın" type="email"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Parola Oluştur</ion-label>\n        </ion-row>\n        <ion-item >\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconPass.svg"></ion-label>\n          <ion-input  clearInput="true"  [(ngModel)]="pass1"  placeholder="*******" type="password" ></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row >\n        <ion-row>\n          <ion-label>Parola Tekrarla</ion-label>\n        </ion-row>\n        <ion-item >\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconPass.svg"></ion-label>\n          <ion-input clearInput="true"  [(ngModel)]="pass2"   placeholder="*******"  type="password" ></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n \n\n    <div style="position: fixed; margin-top: -23%">\n      <img style="width: 375px; height: 175.98px;" src="https://kusurkimde.com/rest_api/imgs/profileEnd.svg">\n    </div>\n\n\n\n    <div>\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button ion-button style="width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A" round (click)="goToServisler()" >Gönder</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServislerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kusur_kaydi_kusur_kaydi__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sorgula_sorgula__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ara_ara__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__full_profile_full_profile__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ServislerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServislerPage = /** @class */ (function () {
    function ServislerPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    ServislerPage.prototype.goToKusurKaydi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kusur_kaydi_kusur_kaydi__["a" /* KusurKaydiPage */]);
    };
    ServislerPage.prototype.goToSorgula = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sorgula_sorgula__["a" /* SorgulaPage */]);
    };
    ServislerPage.prototype.goToAra = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ara_ara__["a" /* AraPage */]);
    };
    ServislerPage.prototype.seeProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__full_profile_full_profile__["a" /* FullProfilePage */]);
    };
    ServislerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-servisler',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\servisler\servisler.html"*/'\n\n\n<ion-content>\n\n  <div>\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="seeProfile()" style="background: transparent;margin-top:23%;font-size: 14px">\n        <ion-icon name="people" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <img  style="position: fixed" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 38%">Servisler</p>\n\n\n  </div>\n\n\n  <ion-row  style="margin-top: 75%">\n    <ion-col>\n      <button class="myKusurButton" ion-button  color="myWhite" (click)="goToKusurKaydi()"><font color="#7A7A7A">Yeni Kusur Kaydı Oluştur</font></button>\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\servisler\servisler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], ServislerPage);
    return ServislerPage;
}());

//# sourceMappingURL=servisler.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams, events, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.nav = nav;
        events.publish('hideHeader', { isHidden: true });
        this.slides1 = [
            {
                title: "Başlık1",
                description: "Haksızlığa mı uğradınız?<br/>Artık mağdur olmayacaksınız!",
                image: "https://kusurkimde.com/rest_api/imgs/slideImg1.svg",
            }
        ];
        this.slides2 = [
            {
                title: "Başlık2",
                description: "Şimdi kusur düzeltme zamanı!<br/>Doğru sonuç bizde!",
                image: "https://kusurkimde.com/rest_api/imgs/slideImg2.svg",
            }
        ];
        this.slides3 = [
            {
                title: "Başlık3",
                description: "Kaza anında kusur kimde?<br/>Biz de şüpheye yer yok!",
                image: "https://kusurkimde.com/rest_api/imgs/slideImg3.svg",
            }
        ];
    }
    SliderPage.prototype.next = function () {
        this.slides.slideNext();
    };
    SliderPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    SliderPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    SliderPage.prototype.goToSlide = function () {
        this.slides.slideTo(1, 500);
    };
    SliderPage.prototype.goLoginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tab_tab__["a" /* TabPage */]);
        //this.navCtrl.push(LoginPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], SliderPage.prototype, "slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\slider\slider.html"*/'<ion-content class="tutorial-page">\n\n  <ion-slides pager (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let slide of slides1">\n      <img [src]="slide.image" class="slide-image"/>\n      <p class="description" [innerHTML]="slide.description" ></p>\n      <ion-row>\n        <ion-col>\n          <button ion-button round class="prev" (click)="prev()">GER&#304;</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button round  class="next" (click)="next()">&#304;LER&#304;</button>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n    <ion-slide *ngFor="let slide of slides2">\n      <img [src]="slide.image" class="slide-image"/>\n      <p [innerHTML]="slide.description" style="font-size: 20px; margin-top: 15%"></p>\n      <ion-row>\n        <ion-col>\n          <button ion-button round class="prevO" (click)="prev()">GER&#304;</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button round  class="nextO" (click)="next()">&#304;LER&#304;</button>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n\n\n    <ion-slide *ngFor="let slide of slides3">\n      <img [src]="slide.image" class="slide-image"/>\n      <p [innerHTML]="slide.description" style="font-size: 20px; margin-top: 15%"></p>\n      <ion-row>\n        <ion-col>\n          <button ion-button round class="prev" (click)="prev()">GER&#304;</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button round  class="next" (click)="goLoginPage()">&#304;LER&#304;</button>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n\n\n<ion-footer style="text-align: center">\n  <p style="color: #9890AB; font-size: 13px">Hesabım var? <button style="color: #F00A0A; background:none; font-size: 13px" (click)="goLoginPage()">Giriş Yap</button></p>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelOnayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TelOnayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TelOnayPage = /** @class */ (function () {
    function TelOnayPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        events.publish('hideHeader', { isHidden: true });
    }
    TelOnayPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: true });
    };
    TelOnayPage.prototype.goToProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    TelOnayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tel-onay',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\tel-onay\tel-onay.html"*/'\n\n\n\n<ion-content>\n\n\n    <div>\n      <ion-buttons style="position: absolute; margin-top: 15%;">\n        <button  icon-only (click)="goBackUyeOl()" style="background: transparent;margin-top:23%;font-size: 14px">\n          <ion-icon name="arrow-back" style="color: white"></ion-icon>\n        </button>\n      </ion-buttons>\n      <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n      <div>\n        <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 35%">Onay Kodu</p>\n      </div>\n    </div>\n\n\n\n    <div class="boxInfo">\n    <p style="font-size: 20px; margin-left: 10px; margin-top:-15px">Sms Onayı</p>\n    <p style="font-size: 13px; margin-left:10px;margin-top:-15px"><font style="color: red">05*********</font> Numaralı Telefona SMS olarak onay kodu gönderilmiştir.<font style="color:red; margin-left: 30px">120 Sn.</font></p>\n\n  </div>\n\n\n  <div>\n\n    <ion-list inset class="ourTag">\n\n        <ion-row style="margin-left: 20%">\n            <img style="width: 215.93px;height: 166.35px;" src="https://kusurkimde.com/rest_api/imgs/onayKoduImage.svg">\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-row style="margin-top: 20%;">\n                    <ion-item>\n                        <ion-input   max="1" name="username" id="loginField" type="tel"></ion-input>\n                    </ion-item>\n                </ion-row>\n            </ion-col>\n            <ion-col>\n                <ion-row style="margin-top: 20%;">\n                    <ion-item>\n                        <ion-input    name="username" id="loginField1" type="tel"></ion-input>\n                    </ion-item>\n                </ion-row>\n            </ion-col>\n            <ion-col>\n                <ion-row style="margin-top: 20%;">\n                    <ion-item>\n                        <ion-input    name="username" id="loginField2" type="tel"></ion-input>\n                    </ion-item>\n                </ion-row>\n            </ion-col>\n            <ion-col>\n                <ion-row style="margin-top: 20%;">\n                    <ion-item>\n                        <ion-input    name="username" id="loginField3" type="tel"></ion-input>\n                    </ion-item>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col style="text-align: center; margin-top:20%; margin-bottom: 10%">\n              <button ion-button style="width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A" round  (click)="goToProfilePage()">Onayla</button>\n          </ion-col>\n        </ion-row>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\tel-onay\tel-onay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], TelOnayPage);
    return TelOnayPage;
}());

//# sourceMappingURL=tel-onay.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KusurKaydiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kusur_kayit_tamam_kusur_kayit_tamam__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var KusurKaydiPage = /** @class */ (function () {
    function KusurKaydiPage(navCtrl, navParams, httpc, camera, transfer, events, modalCtrl, app, base64, nav, http, alertCtrl, loadingCtrl, storage, imagePicker, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpc = httpc;
        this.camera = camera;
        this.transfer = transfer;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.base64 = base64;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.regData = { ad_soyad: '', pass: '', telefon: '', avatar: '' };
        this.imgPreview = 'assets/imgs/no-image.png';
        this.images = [];
        this.images_base64 = [];
        this.img_count = 0;
        this.imgPreview = "assets/imgs/no-image.png";
    }
    KusurKaydiPage.prototype.getPhoto = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 6,
            outType: 0,
            quality: 70,
            targetHeight: 44,
            targetWidth: 196
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.images.push(results[i]);
                _this.base64.encodeFile(results[i]).then(function (base64File) {
                    _this.regData.avatar = base64File;
                    console.log(results[i]);
                    _this.images_base64.push(base64File);
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) { });
        this.img_count = this.images_base64.length;
    };
    KusurKaydiPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Mesaj kayboldu');
        });
        toast.present();
    };
    KusurKaydiPage.prototype.goToKayitTamam = function () {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        if (this.ad_soyad == null || this.telefon == null || this.plaka == null || this.tc == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Lütfen Eksik Bilgilerinizi Giriniz!!!',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
        else if (this.ad_soyad != null || this.telefon != null || this.plaka != null || this.tc != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kusur_kayit_tamam_kusur_kayit_tamam__["a" /* KusurKayitTamamPage */]);
        }
        //İmage i server a göndermek için kullanılan kısım 
        /*  this.storage.get('id').then((val : boolean) => {

              if (val){
                  this.getId(val);
              }
              console.log('myID', val);
          }); */
    };
    KusurKaydiPage.prototype.goBackServisler = function () {
        this.events.publish('hideHeader', { isHidden: false });
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
    };
    KusurKaydiPage.prototype.getId = function (val) {
        var _this = this;
        var id = val;
        if (this.tc.length == 11) {
            var loading_1 = this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading_1.present();
            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            var myData = { ad_soyad: this.ad_soyad, telefon: this.telefon, plaka: this.plaka, tc: this.tc, id: id, aciklama: this.aciklama, images: this.images_base64 };
            //console.log(myData);
            console.log(JSON.stringify(myData));
            this.http.post("https://kusurkimde.com/rest_api/api/kusurkaydi_olustur", JSON.stringify(myData))
                .subscribe(function (result) {
                var myParseData = JSON.parse(result["_body"]);
                console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id_1 = myParseData["result"]["veri"];
                    _this.events.publish('hideHeader', { isHidden: true });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kusur_kayit_tamam_kusur_kayit_tamam__["a" /* KusurKayitTamamPage */]);
                    //console.log(id);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_2 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_2.present();
                }
                loading_1.dismiss();
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({ title: "Yanlış TC", message: "Lütfen 11 haneli Türkiye Cumhuriyeti Vatandaşlık Numaranızı Eksiksiz Girin", buttons: [{ text: 'Tamam', role: 'cancel' }] });
            alert_3.present();
        }
    };
    KusurKaydiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kusur-kaydi',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-kaydi\kusur-kaydi.html"*/'\n\n<ion-content>\n\n  <div>\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="goBackServisler()" style="background: transparent;margin-top:23%;font-size: 14px">\n        <ion-icon name="arrow-back" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <img  style="position: absolute" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 25%">Kusur Kaydı Oluştur</p>\n    </div>\n  </div>\n\n\n\n  <div style="margin-top:44%">\n\n\n    <ion-list inset style="padding: 20px">\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Kişi Bilgileri</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -16px;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconKullanici.svg"></ion-label>\n          <ion-input [(ngModel)]="ad_soyad" placeholder="Adı Soyadı" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Telefon</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -16px;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconTel.svg"></ion-label>\n          <ion-input [(ngModel)]="telefon" placeholder="Telefon No" type="tel"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Plaka</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -16px;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconPlaka.svg"></ion-label>\n          <ion-input [(ngModel)]="plaka" placeholder="Aracınızın Plakasını Yazın" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>TC</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -16px;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIcontTC.svg"></ion-label>\n          <ion-input [(ngModel)]="tc" placeholder="Türkiye Cumhuriyeti Vatandaşlık Numarası" max-length="11" type="number"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n\n  </div>\n\n\n\n  <ion-col style="height: 50px"></ion-col>\n\n    <ion-list style="padding: 10px;margin-top:-56px">\n      <ion-row>\n        <h5>KTT & Kaza Görseli</h5>\n      </ion-row>\n      <ion-row style="margin-top : -5%">\n        <p>En Az 1 Adet Tutanak ve Kaza Fotoğrafı Ekleyin</p>\n      </ion-row>\n      \n      \n      \n      <ion-row style="width: 10px"></ion-row>\n      <ion-col col-xl="2" class="kutu" *ngIf="img_count == 0"  ion-button (click)="getPhoto()"> <img src={{imgPreview}}/> </ion-col>\n\n        <!--<ion-col col-xl="2" class="aktifKutu"><button   ion-button (click)="getPictures()">Ekle</button></ion-col>\n       <ion-col col-xl="2" class="aktifKutu"> Ekle</ion-col> yorum satırı olacak  -->\n       <div *ngFor="let image of images" style="float:left;padding:3px;">\n       <ion-row style="width: 10px"> </ion-row>\n\n        <ion-col col-xl="2"  class="kutu" ion-button (click)="getPhoto()"> \n          <img src="{{image}}"/> \n        </ion-col>\n      </div>\n       \n      <!--  <ion-row style="width: 10px"></ion-row> \n        <ion-col col-xl="2" class="kutu" ion-button (click)="getPhoto()"> <img [src]=path/> </ion-col>\n        <ion-row style="width: 10px"></ion-row>\n        <ion-col col-xl="2" class="kutu"ion-button (click)="getPhoto()"> <img [src]=path/></ion-col>\n        <ion-row style="width: 10px"></ion-row>\n        <ion-col col-xl="2" class="kutu"ion-button (click)="getPhoto()"> <img [src]=path/> </ion-col>\n        <ion-row style="width: 10px"></ion-row>\n        <ion-col col-xl="2" class="kutu"ion-button (click)="getPhoto()"> <img [src]=path/> </ion-col> -->\n     \n   <br/>\n     \n      \n\n      <ion-col style="height: 30px"></ion-col>\n\n      <ion-row>\n        <ion-textarea  [(ngModel)]="aciklama" class="textKutu" placeholder="Kazayı Kısaca Anlatın!"></ion-textarea>\n      </ion-row>\n\n    </ion-list>\n\n      \n    \n  \n\n\n  <!-- <ion-row style="height: -1%"></ion-row>\n\n\n<div>\n  <ion-row style="position: absolute!important;">\n    <img  style="width: 375px; height: 152px" src="https://kusurkimde.com/rest_api/imgs/servislerEnd.svg">\n  </ion-row>\n</div> -->\n\n<div>\n  <ion-row>\n    <ion-col style="text-align: center;">\n      <button ion-button style="margin-top:0%; width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A;color:white;" round  (click)="goToKayitTamam()">Kaydet Oluştur</button>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n\n    <div class="arkaPhoto">\n      <img src="http://www.resimag.com/p1/58896c44b0.png">\n    </div>\n\n  \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-kaydi\kusur-kaydi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], KusurKaydiPage);
    return KusurKaydiPage;
}());

//# sourceMappingURL=kusur-kaydi.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KusurKayitTamamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisler_servisler__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KusurKayitTamamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KusurKayitTamamPage = /** @class */ (function () {
    function KusurKayitTamamPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        var TIME_IN_MS = 5000;
        setTimeout(function () {
            _this.events.publish('hideHeader', { isHidden: true });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
            // somecode
        }, TIME_IN_MS);
    }
    KusurKayitTamamPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    KusurKayitTamamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kusur-kayit-tamam',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-kayit-tamam\kusur-kayit-tamam.html"*/'\n\n<ion-content style="background-color: #FB3839">\n\n  <img style="margin-top: 35%;" src="https://kusurkimde.com/rest_api/imgs/onayImage.svg">\n\n\n  <ion-row>\n    <ion-col style="text-align: center;">\n      <p style="color: white; font-size: 18px">İşleminiz Başarıyla Tamamlandı!</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="height: 10px;"></ion-row>\n\n  <ion-row>\n    <ion-col style="text-align: center;">\n      <p style="color: white; font-size: 18px">Yönlendiriliyorsunuz...</p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-kayit-tamam\kusur-kayit-tamam.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], KusurKayitTamamPage);
    return KusurKayitTamamPage;
}());

//# sourceMappingURL=kusur-kayit-tamam.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KusurDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sorgula_sorgula__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the KusurDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KusurDetayPage = /** @class */ (function () {
    function KusurDetayPage(navCtrl, navParams, events, http, alertCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        // Or to get a key/value pair
        this.storage.get('detayID').then(function (val) {
            console.log('detayID', val);
            var loading = _this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading.present();
            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            _this.http.post("https://kusurkimde.com/rest_api/api/kusurdetay", JSON.stringify({ id: val }))
                .subscribe(function (result) {
                console.log(val);
                var myParseData = JSON.parse(result["_body"]);
                console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id = myParseData["result"]["veri"];
                    //console.log(id);
                    document.getElementById('isim').innerHTML = id[0]['ad_soyad'];
                    document.getElementById('tel').innerHTML = id[0]['telefon'];
                    document.getElementById('plaka').innerHTML = id[0]['plaka'];
                    document.getElementById('tc').innerHTML = id[0]['tc'];
                    document.getElementById('aciklama').innerHTML = id[0]['aciklama'];
                    _this.users = myParseData["result"]["veri"];
                    console.log(_this.users = myParseData["result"]["veri"]);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_1 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_1.present();
                }
                loading.dismiss();
            });
        });
        events.publish('hideHeader', { isHidden: true });
    }
    KusurDetayPage.prototype.goBackSorgulaPage = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__sorgula_sorgula__["a" /* SorgulaPage */]);
    };
    KusurDetayPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    KusurDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kusur-detay',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-detay\kusur-detay.html"*/'\n<ion-content>\n\n  <div>\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="goBackSorgulaPage()" style="background: transparent;margin-top:23%;font-size: 14px">\n        <ion-icon name="arrow-back" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <img  style="position: absolute" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 39%">Detaylar</p>\n    </div>\n  </div>\n\n\n  <div style="margin-top:50%">\n\n\n    <ion-list inset style="padding: 10px">\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Kişi Bilgileri</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label id="isim" style="font-size: 15px"><img  margin-right="20px" style="height: 13px; width: 15px;" src="https://kusurkimde.com/rest_api/imgs/redIconKullanici.svg"> </ion-label>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Telefon</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label id="tel" style="font-size: 15px"><img  margin-right="20px" style="height: 13px; width: 15px;" src="https://kusurkimde.com/rest_api/imgs/redIconTel.svg"></ion-label>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Plaka</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label  id="plaka" style="font-size: 15px"><img  margin-right="20px" style="height: 13px; width: 15px;" src="https://kusurkimde.com/rest_api/imgs/redIconPlaka.svg"></ion-label>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>TC</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label id="tc"  style="font-size: 15px"><img  margin-right="20px" style="height: 13px; width: 15px;" src="https://kusurkimde.com/rest_api/imgs/redIcontTC.svg"></ion-label>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n\n  </div>\n\n\n\n\n\n  <ion-col style="height: 50px"></ion-col>\n\n\n\n  <ion-list style="padding: 10px">\n    <ion-row>\n      <h5>KTT Görseli</h5>\n    </ion-row>\n    <ion-row style="margin-top : -5%">\n      <p>En Az 1 Adet Tutanak Görseli Ekleyin</p>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-xl="2" class="kutu"><img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"></ion-col>\n      <ion-row style="width: 10px"></ion-row>\n      <ion-col col-xl="2" class="kutu"> <img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"> </ion-col>\n      <ion-row style="width: 10px"></ion-row>\n      <ion-col col-xl="2" class="kutu"><img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"></ion-col>\n      <ion-row style="width: 10px"></ion-row>\n    </ion-row>\n\n    <ion-row style="height: 50px"></ion-row>\n\n    <ion-row>\n      <h5>Kaza Yorumu</h5>\n    </ion-row>\n    <ion-row style="margin-top : -5%">\n      <p style="color: red">Lütfen kısa ve anlaşılabilir bir açıklama yapınız.</p>\n    </ion-row>\n\n\n    <ion-col style="height: 30px"></ion-col>\n\n    <ion-row>\n      <ion-textarea id="aciklama" class="textKutu" ></ion-textarea>\n    </ion-row>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n  <ion-list style="padding: 10px">\n    <ion-row>\n      <h5>Kaza Görseli</h5>\n    </ion-row>\n    <ion-row style="margin-top : -5%">\n      <p>En Az 1 Kaza Görseli Ekleyin</p>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-xl="2" class="kutu"><img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"></ion-col>\n      <ion-row style="width: 10px"></ion-row>\n      <ion-col col-xl="2" class="kutu"> <img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"> </ion-col>\n      <ion-row style="width: 10px"></ion-row>\n      <ion-col col-xl="2" class="kutu"><img src="https://kusurkimde.com/rest_api/imgs/kazaImage.svg"></ion-col>\n    </ion-row>\n\n\n\n    <ion-row style="height: 50px"></ion-row>\n\n    <ion-row>\n      <h5>Durum Notları</h5>\n    </ion-row>\n    <ion-row style="margin-top : -5%">\n      <p style="color: red">Bu kısıma kısa bir açıklama gelebilir </p>\n    </ion-row>\n\n\n    <ion-col style="height: 30px"></ion-col>\n\n\n    <ion-row>\n      <ion-textarea class="textKutu" placeholder="Açıklama"></ion-textarea>\n    </ion-row>\n\n  </ion-list>\n\n  <ion-row style="height: 8%"></ion-row>\n\n  <div>\n    <ion-row style="position: absolute!important;margin-top: -10%">\n      <img  style="width: 375px; height: 152px" src="https://kusurkimde.com/rest_api/imgs/servislerEnd.svg">\n    </ion-row>\n  </div>\n\n  <div>\n    <ion-row>\n      <ion-col style="text-align: center;">\n        <button ion-button style="margin-top: 10%; width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A" round  (click)="goToKayitTamam()">Kaydet Oluştur</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\kusur-detay\kusur-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], KusurDetayPage);
    return KusurDetayPage;
}());

//# sourceMappingURL=kusur-detay.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FullProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FullProfilePage = /** @class */ (function () {
    function FullProfilePage(navCtrl, navParams, events, http, alertCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        events.publish('hideHeader', { isHidden: true });
        // Or to get a key/value pair
        this.storage.get('id').then(function (val) {
            console.log('myID', val);
            var loading = _this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading.present();
            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            _this.http.post("https://kusurkimde.com/rest_api/api/profile", JSON.stringify({ id: val }))
                .subscribe(function (result) {
                console.log(val);
                var myParseData = JSON.parse(result["_body"]);
                console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id = myParseData["result"]["veri"];
                    _this.isim = id[0]['ad_soyad'];
                    _this.mail = id[0]['email'];
                    console.log(id);
                    _this.users = myParseData["result"]["veri"];
                    console.log(_this.users = myParseData["result"]["veri"]);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_1 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_1.present();
                }
                loading.dismiss();
            });
        });
    }
    FullProfilePage.prototype.goBackServisler = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
    };
    FullProfilePage.prototype.goToServisler = function () {
        var _this = this;
        // Or to get a key/value pair
        this.storage.get('id').then(function (val) {
            console.log('myID', val);
            var loading = _this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading.present();
            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            console.log(_this.isim.valueOf());
            if (_this.passs3 == _this.passs2 || _this.passs3 == null) {
                var data = { ad_soyad: _this.isim, email: _this.mail, id: val, pass3: _this.passs3, pass2: _this.passs2 };
                _this.http.post("https://kusurkimde.com/rest_api/api/profile_edit", JSON.stringify(data))
                    .subscribe(function (result) {
                    console.log(val);
                    var myParseData = JSON.parse(result["_body"]);
                    console.log(result);
                    if (myParseData["result"]["code"] == 2000) {
                        var id = myParseData["result"]["veri"];
                        _this.isim = id[0]['ad_soyad'];
                        _this.mail = id[0]['email'];
                        console.log(id);
                        _this.users = myParseData["result"]["veri"];
                        console.log(_this.users = myParseData["result"]["veri"]);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
                    }
                    else if (myParseData["result"]["code"] == 1000) {
                        var alert_2 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                        alert_2.present();
                    }
                    loading.dismiss();
                });
            }
            else {
                var data = { ad_soyad: _this.isim.valueOf(), email: _this.mail.valueOf(), id: val };
                _this.http.post("https://192.168.12.236/htdoc/fisrtap/rest_api/api/profile_edit", JSON.stringify(data))
                    .subscribe(function (result) {
                    console.log(val);
                    var myParseData = JSON.parse(result["_body"]);
                    console.log(result);
                    if (myParseData["result"]["code"] == 2000) {
                        var id = myParseData["result"]["veri"];
                        _this.isim = id[0]['ad_soyad'];
                        _this.mail = id[0]['email'];
                        console.log(id);
                        _this.users = myParseData["result"]["veri"];
                        console.log(_this.users = myParseData["result"]["veri"]);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
                    }
                    else if (myParseData["result"]["code"] == 1000) {
                        var alert_3 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                        alert_3.present();
                    }
                    loading.dismiss();
                });
            }
        });
    };
    FullProfilePage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false });
    };
    FullProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-full-profile',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\full-profile\full-profile.html"*/'\n<ion-content>\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="goBackServisler()" style="background: transparent;margin-top:23%;font-size: 14px">\n        <ion-icon name="arrow-back" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 31%">Profil Düzenle</p>\n    </div>\n\n\n\n  <div style="margin-top:50%">\n\n\n    <ion-list inset style="padding: 40px;margin-top: -13%;">\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Kullanıcı Adı</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconKullanici.svg"></ion-label>\n          <ion-input [(ngModel)]="isim" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Mail Adresi</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -6%;"> <img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconMail.svg"></ion-label>\n          <ion-input [(ngModel)]="mail" type="email" ></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Parola Oluştur</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -6%;"><img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconPass.svg"></ion-label>\n          <ion-input [(ngModel)]="passs3" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <ion-row>\n          <ion-label>Parola Tekrarla</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label style="margin-left: -6%;"> <img  margin-left="2px" style="height: 12.46px; width: 12px" src="https://kusurkimde.com/rest_api/imgs/redIconPass.svg"></ion-label>\n          <ion-input [(ngModel)]="passs2"  type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n\n    <div style="position: fixed; margin-top: -23%">\n      <img  src="https://www.resimag.com/p1/389ba74696.png">\n    </div>\n\n\n\n    <div>\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button ion-button style="width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A" round (click)="goToServisler()" >Kaydet</button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\full-profile\full-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], FullProfilePage);
    return FullProfilePage;
}());

//# sourceMappingURL=full-profile.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_yetkili_login_yetkili__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uye_ol_uye_ol__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, events, platform, nav, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.platform = platform;
        this.nav = nav;
        this.superTabsCtrl = superTabsCtrl;
        this.pet = "Giriş Yap";
        this.isAndroid = false;
        this.page1 = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.page2 = __WEBPACK_IMPORTED_MODULE_3__uye_ol_uye_ol__["a" /* UyeOlPage */];
        this.page3 = __WEBPACK_IMPORTED_MODULE_2__login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */];
        events.publish('hideHeader', { isHidden: true });
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__uye_ol_uye_ol__["a" /* UyeOlPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */];
        this.isAndroid = platform.is('android');
    }
    HomePage.prototype.ngAfterViewInit = function () {
        // must wait for AfterViewInit if you want to modify the tabs instantly
        this.superTabsCtrl.setBadge('homeTab', 5);
    };
    HomePage.prototype.hideToolbar = function () {
        this.superTabsCtrl.showToolbar(false);
    };
    HomePage.prototype.showToolbar = function () {
        this.superTabsCtrl.showToolbar(true);
    };
    HomePage.prototype.onTabSelect = function (ev) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    };
    HomePage.prototype.goToUyeOl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__uye_ol_uye_ol__["a" /* UyeOlPage */]);
        /*
        let modal = this.modalCtrl.create(UyeOlPage);
        modal.present();*/
    };
    HomePage.prototype.goToLogin = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToLoginYetkili = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\home\home.html"*/'\n\n<ion-content>\n\n    \n    <img  style="position: fixed;" src="/assets/imgs/loginBack.svg">\n\n    <div class="box">\n        <!--\n        <div style="border-radius: 7px;box-shadow: 0px 10px 24px 2px rgba(139,139,139,0.15);">\n        <ion-tabs tabsLayout="icon-start" tabsHideOnSubPages="true">\n            <ion-tab [root]="tab1Root" tabTitle="Giriş Yap"         tabIcon="home" ></ion-tab>\n            <ion-tab [root]="tab2Root" tabTitle="Üye Ol"            tabIcon="information-circle" (ionSelect)="goToUyeOl()"></ion-tab>\n            <ion-tab [root]="tab3Root" tabTitle="Yetkili Girişi"    tabIcon="contacts"></ion-tab>\n        </ion-tabs>\n        </div>\n        -->\n\n\n        <!--\n        <super-tabs id="mainTabs" selectedTabIndex="1" toolbarColor="light" toolbarBackground="dark" indicatorColor="light" badgeColor="light" [config]="{ sideMenu: \'left\' }" (tabSelect)="onTabSelect($event)">\n            <super-tab [root]="page1" title="Giriş Yap"         icon="home" ></super-tab>\n            <super-tab [root]="page2" title="Üye Ol"            icon="information-circle"></super-tab>\n            <super-tab [root]="page3" title="Yetkili Girişi"    icon="contacts"></super-tab>\n        </super-tabs>\n\n        -->\n\n\n<!--\n        <super-tabs id="mainTabs" selectedTabIndex="1" toolbarColor="light" toolbarBackground="dark" indicatorColor="light" badgeColor="light" [config]="{ sideMenu: \'left\' }" (tabSelect)="onTabSelect($event)">\n            <super-tab [root]="page1" title="First page" icon="home" id="homeTab"></super-tab>\n            <super-tab [root]="page2" title="Second page" icon="pin" id="locationTab"></super-tab>\n            <super-tab [root]="page3" title="Third page" icon="heart" id="favouritesTab"></super-tab>\n        </super-tabs>\n\n        -->\n\n\n\n\n\n\n\n        <!--\n        <ion-row>\n            <ion-col>\n                <button ion-button  style="background:none; color: red" (click)="goToLogin()">Giriş Yap</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button style="background:none; color: red" (click)="goToUyeOl()">Üye Ol</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button  style="background:none; color: red" (click)="goToLoginYetkili()">Yetkili Girişi</button>\n            </ion-col>\n        </ion-row>\n\n        -->\n\n\n    </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabsController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_slider_slider__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ara_ara__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sorgula_sorgula__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_uye_ol_uye_ol__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tel_onay_tel_onay__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_yetkili_login_yetkili__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_kusur_kaydi_kusur_kaydi__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_full_profile_full_profile__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_kusur_kayit_tamam_kusur_kayit_tamam__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_kusur_detay_kusur_detay__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_auth_auth__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_super_tabs__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_picker__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_transfer__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ara_ara__["a" /* AraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_servisler_servisler__["a" /* ServislerPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sorgula_sorgula__["a" /* SorgulaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_uye_ol_uye_ol__["a" /* UyeOlPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tel_onay_tel_onay__["a" /* TelOnayPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kusur_kaydi_kusur_kaydi__["a" /* KusurKaydiPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_full_profile_full_profile__["a" /* FullProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_kusur_kayit_tamam_kusur_kayit_tamam__["a" /* KusurKayitTamamPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_kusur_detay_kusur_detay__["a" /* KusurDetayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic2_super_tabs__["b" /* SuperTabsModule */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__["a" /* TabPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ara_ara__["a" /* AraPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_servisler_servisler__["a" /* ServislerPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sorgula_sorgula__["a" /* SorgulaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_uye_ol_uye_ol__["a" /* UyeOlPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tel_onay_tel_onay__["a" /* TelOnayPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kusur_kaydi_kusur_kaydi__["a" /* KusurKaydiPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_full_profile_full_profile__["a" /* FullProfilePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_kusur_kayit_tamam_kusur_kayit_tamam__["a" /* KusurKayitTamamPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_kusur_detay_kusur_detay__["a" /* KusurDetayPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_slider_slider__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ara_ara__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sorgula_sorgula__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, events) {
        var _this = this;
        this.events = events;
        this.onlypage = false;
        platform.ready().then(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_slider_slider__["a" /* SliderPage */]);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        events.subscribe('hideHeader', function (data) {
            _this.onlypage = data.isHidden;
        });
    }
    MyApp.prototype.goToServisler = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_servisler_servisler__["a" /* ServislerPage */]);
    };
    MyApp.prototype.goToAra = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_ara_ara__["a" /* AraPage */]);
    };
    MyApp.prototype.goToSorgula = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_sorgula_sorgula__["a" /* SorgulaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n    <div>\n        <img *ngIf="!onlypage" style="position: absolute!important; margin-top: 140%; width: 100%" src="http://kusurkimde.com/rest_api/imgs/servislerEnd.svg">\n    </div>\n\n\n    <ion-footer *ngIf="!onlypage" class="fBox row" style="position: absolute!important;">\n\n        <div class="c3" style="text-align: center!important;">\n            <div style="height: 24px">\n            </div>\n            <a class="servisler" (click)="goToServisler()">Servisler</a>\n        </div>\n\n        <div class="c_center">\n            <div>\n                <button class="araButton" ion-button color="light" round (click)="goToAra()">\n                    <div style="text-align: center;">\n                    \n                  \n                        <a href="tel:+9002162322707"  style="  margin-top: -23px;color: white;text-decoration:none; " >    <img style="padding-top: 0px!important;" src="http://www.resimag.com/p1/c79058fc64.png"></a>\n                    </div>\n                </button>\n            </div>\n        </div>\n\n        <div class="c3" style="text-align: center!important;">\n            <div style="height: 24px"></div>\n            <a class="servisler" (click)="goToSorgula()" >Başvurularım</a>\n        </div>\n    </ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthPage = /** @class */ (function () {
    function AuthPage(nav, navParams, formBuilder) {
        this.nav = nav;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])]
        });
    }
    AuthPage.prototype.onSubmit = function (value) {
        if (this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\auth\auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Authorization Page</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n  \n<ion-content padding>\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n            <ion-label floating>Username</ion-label>\n            <ion-input formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Sorry, field username is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Sorry, only small and capital letters are allowed!</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 8!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 30!</p>\n        </ion-item>\n  \n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n            <ion-label floating>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Sorry, field password is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Sorry, minimum password length is 8!</p>\n        </ion-item>                '/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UyeOlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UyeOlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UyeOlPage = /** @class */ (function () {
    function UyeOlPage(navCtrl, navParams, events, alertCtrl, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        events.publish('hideHeader', { isHidden: true });
    }
    UyeOlPage_1 = UyeOlPage;
    UyeOlPage.prototype.ionViewWillLeave = function () {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: true });
    };
    UyeOlPage.prototype.goBackHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabPage */]);
    };
    UyeOlPage.prototype.goToTelOnayPage = function () {
        if (this.telefon != " ") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Lütfen Telefon numaranızı giriniz!!!',
                buttons: ['Tamam']
            });
            alert_1.present();
            this.navCtrl.push(UyeOlPage_1);
        }
        // this.navCtrl.push(UyeOlPage);
    };
    UyeOlPage.prototype.goBackLogin = function () {
        //this.navCtrl.popTo(TabPage);
        //this.navCtrl.push(TabPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabPage */]);
    };
    UyeOlPage = UyeOlPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uye-ol',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\uye-ol\uye-ol.html"*/'\n\n\n<ion-content>\n  <div>\n    <ion-buttons style="position: absolute; margin-top: 15%;">\n      <button  icon-only (click)="goBackLogin()" class="myBackButton">\n        <ion-icon name="arrow-back" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <img  style="position: fixed;" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p class="baslik">Üye Ol</p>\n    </div>\n  </div>\n\n  <ion-list inset style="margin-top:48%">\n    <form class="myForm">\n      <ion-row class="myRow">\n        <ion-row style="height: 50px;">\n            <ion-col col-3>\n              <ion-label class="myLabel">+90</ion-label>\n            </ion-col>\n            <ion-col col-9>\n              <ion-item style="width: 90%;">\n                <ion-input  clearInput="true"  name="username" id="loginField1" type="tel"></ion-input>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n\n\n\n\n        <ion-col class="onayButtonCol">\n          <button ion-button class="myOnayButton" style=" background-color: #ff0a0a;" round (click)="goToTelOnayPage()">&#304;LER&#304;</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\uye-ol\uye-ol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]])
    ], UyeOlPage);
    return UyeOlPage;
    var UyeOlPage_1;
}());

//# sourceMappingURL=uye-ol.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SorgulaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kusur_detay_kusur_detay__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SorgulaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SorgulaPage = /** @class */ (function () {
    function SorgulaPage(navCtrl, navParams, events, platform, http, alertCtrl, loadingCtrl, storage, nav) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.nav = nav;
        this.pet = "bekleyen";
        this.isAndroid = false;
        this.isDanger = true;
        // Or to get a key/value pair
        this.storage.get('id').then(function (val) {
            console.log('myID', val);
            var loading = _this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading.present();
            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            _this.http.post("https://kusurkimde.com/rest_api/api/kusurkaydi", JSON.stringify({ id: val }))
                .subscribe(function (result) {
                console.log(val);
                var myParseData = JSON.parse(result["_body"]);
                console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id = myParseData["result"]["veri"];
                    //console.log(id);
                    _this.users = myParseData["result"]["veri"];
                    console.log(_this.users = myParseData["result"]["veri"]);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_1 = _this.alertCtrl.create({ title: "başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_1.present();
                }
                loading.dismiss();
            });
        });
        this.isAndroid = platform.is('android');
    }
    SorgulaPage.prototype.ionViewDidLoad = function (val) {
        console.log('testt' + val);
        var id = val;
    };
    SorgulaPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    SorgulaPage.prototype.goBackServisler = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
        //this.navCtrl.push(ServislerPage);
    };
    SorgulaPage.prototype.goToKusurDetay = function (detayID) {
        this.storage.set('detayID', detayID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kusur_detay_kusur_detay__["a" /* KusurDetayPage */]);
    };
    SorgulaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sorgula',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\sorgula\sorgula.html"*/'\n\n\n<ion-content>\n\n\n  <ion-buttons style="position: absolute; margin-top: 15%;">\n    <button  icon-only (click)="goBackServisler()" style="background: transparent;margin-top:23%;font-size: 14px">\n      <ion-icon name="arrow-back" style="color: white"></ion-icon>\n    </button>\n  </ion-buttons>\n\n\n    <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/signUpBack.svg">\n\n    <div>\n      <p style="position: absolute; color:white;font-weight:400; font-size:23px ;margin-top:17%;margin-left: 23%">Başvuru Durumlarım</p>\n    </div>\n\n\n\n    <div style="margin-top: 42%" padding="50px">\n      <ion-segment [(ngModel)]="pet">\n        <ion-segment-button value="bekleyen">\n          Bekleyen\n        </ion-segment-button>\n        <ion-segment-button value="sonuçlanan">\n          Sonuçlanan\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n\n\n <!-- x.status == 0 -->\n\n\n\n\n  <ion-list no-lines>\n    <div [ngSwitch]="pet">\n      <ion-list *ngSwitchCase="\'bekleyen\'" no-lines >\n          <div class="durumKutusu"  *ngFor="let x of users"   (click)="itemSelected(x)">\n            <div *ngIf="x.status == 0 ? \'hidden\' : \'\' ">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <img style="margin-top: -9px;margin-left: -10px" src="https://kusurkimde.com/rest_api/imgs/kaza.svg">\n                  </ion-col>\n                  <ion-col col-6>\n                    KTT Takip Kodu: {{x.id}}<br> Tarih: {{x.tarih}}\n                  </ion-col>\n                  <ion-col style="margin-top: -5px;">\n                    <button ion-button style="width:79.77px; height:40px; background-color: #FF1D1E;" round (click)="goToKusurDetay(x.id)">Detay</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n      </ion-list>\n\n\n\n\n      <ion-list *ngSwitchCase="\'sonuçlanan\'" no-lines>\n        <div class="durumKutusu" *ngFor="let x of users"   (click)="itemSelected(x)">\n          <div *ngIf="x.status == 1 ? \'hidden\' : \'\' ">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <img style="margin-top: -9px;margin-left: -10px" src="https://kusurkimde.com/rest_api/imgs/kaza.svg">\n                </ion-col>\n                <ion-col col-6>\n                  KTT Takip Kodu: {{x.id}}<br> Tarih: {{x.tarih}}\n                </ion-col>\n                <ion-col style="margin-top: -5px;">\n                  <button ion-button style="width:79.77px; height:40px; background-color: #ff1c1c;" round (click)="goToKusurDetay(x.id)">Detay</button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ion-list>\n    </div>\n  </ion-list>\n\n\n<!--\n    <ion-list no-lines>\n    <button ion-item *ngFor="let x of users" (click)="itemSelected(x)">\n      <ion-row>\n         <ion-col>\n           <ion-thumbnail item-start>\n             <img src="https://raw.githubusercontent.com/ionic-team/ionic-preview-app/master/src/assets/img/thumbnail-totoro.png">\n           </ion-thumbnail>\n         </ion-col>\n         <ion-col>\n           <h2>{{x.KTTakip}}</h2>\n         </ion-col>\n         <ion-col>\n           <p>{{x.Tarih}}</p>\n         </ion-col>\n       </ion-row>\n        </button>\n    </ion-list>\n\n    -->\n\n\n  <!--\n  <ion-list no-lines item-start *ngFor="let x of users" (click)="itemSelected(x)">\n    <ion-item class="durumKutusu">\n      <ion-row>\n      </ion-row>\n      <ion-thumbnail >\n        <img style="border-radius: 30px" src="https://raw.githubusercontent.com/ionic-team/ionic-preview-app/master/src/assets/img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>{{x.KTTakip}}</h2>\n      <p>{{x.Tarih}}</p>\n    </ion-item>\n\n\n\n  </ion-list>\n\n  -->\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\sorgula\sorgula.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]])
    ], SorgulaPage);
    return SorgulaPage;
}());

//# sourceMappingURL=sorgula.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sorgula_sorgula__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AraPage = /** @class */ (function () {
    function AraPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    AraPage.prototype.goToServisler = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servisler_servisler__["a" /* ServislerPage */]);
    };
    AraPage.prototype.goToSorgula = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sorgula_sorgula__["a" /* SorgulaPage */]);
    };
    AraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ara',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\ara\ara.html"*/'\n\n<ion-content>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\ara\ara.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], AraPage);
    return AraPage;
}());

//# sourceMappingURL=ara.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_yetkili_login_yetkili__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabPage = /** @class */ (function () {
    function TabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__["a" /* UyeOlPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */];
    }
    TabPage.prototype.goToUyeOl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__["a" /* UyeOlPage */]);
        //this.nav.setRoot(UyeOlPage);
        /* let modal = this.modalCtrl.create(UyeOlPage);
         modal.present();*/
    };
    TabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\tab\tab.html"*/'\n<ion-content>\n    <div>\n        <div class="smallBox" >\n            <ion-tabs  tabsLayout="icon-start" tabsHideOnSubPages="true" style="position: absolute">\n                <ion-tab [root]="tab1Root" tabTitle="Giriş Yap"         tabIcon="home" ></ion-tab>\n                <ion-tab [root]="tab2Root" tabTitle="Üye Ol"            tabIcon="information-circle" (ionSelect)="goToUyeOl()"></ion-tab>\n                <ion-tab [root]="tab3Root" tabTitle="Yetkili Girişi"    tabIcon="contacts"></ion-tab>\n            </ion-tabs>\n        </div>\n    </div>\n</ion-content>\n\n\n\n\n\n<!---\n    <super-tabs>\n      <super-tab [root]="tab1Root" title="Giriş Yap"         icon="home"></super-tab>\n      <super-tab [root]="tab2Root" title="Üye Ol"            icon="information-circle"></super-tab>\n      <super-tab [root]="tab3Root" title="Yetkili Girişi"    icon="contacts"></super-tab>\n    </super-tabs>\n\n    --->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\tab\tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], TabPage);
    return TabPage;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_yetkili_login_yetkili__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ara_ara__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, events, nav, http, alertCtrl, loadingCtrl, nativeStorage, _storage, imagePicker, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this._storage = _storage;
        this.imagePicker = imagePicker;
        this.app = app;
        events.publish('hideHeader', { isHidden: true });
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__ara_ara__["a" /* AraPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__["a" /* UyeOlPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_yetkili_login_yetkili__["a" /* LoginYetkiliPage */];
        /**
        document.getElementById('myInput').addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

         */
    }
    Object.defineProperty(LoginPage.prototype, "storage", {
        get: function () {
            return this._storage;
        },
        set: function (value) {
            this._storage = value;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            console.log(event);
        }
    };
    LoginPage.prototype.goToServisler = function () {
        var _this = this;
        if (this.tel == null || this.pass == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Eksik Bilgi Girdiniz!!!',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
        //if(this.tel.length >=11)
        if (this.tel.length > 1) {
            var loading_1 = this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading_1.present();
            var pass2 = __WEBPACK_IMPORTED_MODULE_11_ts_md5_dist_md5__["Md5"].hashStr(this.pass);
            //var pass3 = Md5.hashStr(pass2);
            //var pass3 = Md5.hashStr(pass2);
            //console.log(pass3);
            var myData = { telefon: this.tel, pass: pass2 };
            //console.log(data);
            // console.log(JSON.stringify(myData));
            this.http.post("https://kusurkimde.com/rest_api/api/login", JSON.stringify(myData))
                .subscribe(function (result) {
                var myParseData = JSON.parse(result["_body"]);
                //console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id = myParseData["result"]["veri"];
                    var alert_2 = _this.alertCtrl.create({ title: "Hoşgeldiniz", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_2.present();
                    _this.events.publish('hideHeader', { isHidden: false });
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__servisler_servisler__["a" /* ServislerPage */]);
                    // set a key/value
                    var myStorageId = _this.storage.set('id', id);
                    //console.log(myStorageId);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_3 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_3.present();
                    _this.events.publish('hideHeader', { isHidden: true });
                }
                loading_1.dismiss();
            });
        }
        else {
            var alert_4 = this.alertCtrl.create({ title: "Eksik Tuşlama", message: "Lütfen telefon numaranızı başında 0 ile birlikte yazınız", buttons: [{ text: 'Tamam', role: 'cancel' }] });
            alert_4.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\login\login.html"*/'\n\n\n<ion-content style="overflow-y:auto !important;">\n  <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/loginBack.svg">\n  <div style="margin-top: 60%">\n    <ion-list >\n      <ion-row style="height: 150px; width: 250px;margin-top: -80px; margin-left: 45px">\n        <ion-row style="margin-top: 100px">\n          <ion-label>Telefon</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label><img  margin-left="2px" class="myIcon" src="https://kusurkimde.com/rest_api/imgs/iconKullanici.svg"></ion-label>\n          <ion-input [(ngModel)]="tel" (keydown)="onKeydown($event)" (focus)="true" clearInput="true"  id="myInput" placeholder="Telefon" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row style="width: 250px; margin-top: -50px;margin-left: 45px">\n        <ion-row style="margin-top: 40%;">\n          <ion-label>Parola</ion-label>\n        </ion-row>\n        <ion-item>\n            \n          <ion-label>\n            <!--<img  margin-left="2px" class="myIcon" src="http://kusurkimde.com/rest_api/imgs/iconPass.svg">-->\n            <img  margin-left="2px" class="myIcon" src="{{ imgSrc }}">\n          </ion-label>\n          <ion-input [(ngModel)]="pass" clearInput="true" placeholder="Şifreniz" type="password"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n\n    <ion-list style="margin-top: 12%;">\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button  ion-button class="login" style="  background-color: #F00A0A" round  (click)="goToServisler()">G&#304;R&#304;&#350; YAP</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button style="color: #FF0000; background:none">Şifremi Unuttum!</button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n<!--\n<ion-content>\n  <img  style="position: fixed;" src="http://kusurkimde.com/rest_api/imgs/loginBack.svg">\n\n\n  <div class="box">\n    <ion-list>\n\n      <div style="border-radius: 7px;box-shadow: 0px 10px 24px 2px rgba(139,139,139,0.15);">\n      <ion-row>\n        <ion-col>\n          <button ion-button  style="background:none; color: red" (click)="goToLogin()">Giriş Yap</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background:none; color: red" (click)="goToUyeOl()">Üye Ol</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button  style="background:none; color: red" (click)="goToLoginYetkili()">Yetkili Girişi</button>\n        </ion-col>\n      </ion-row>\n      </div>\n\n\n      <ion-item style="border-radius: 7px;box-shadow: 0px 10px 24px 2px rgba(139,139,139,0.15);">\n        <ion-tabs>\n          <ion-tab [root]="tab1Root" tabTitle="Giriş Yap"         tabIcon="home"></ion-tab>\n          <ion-tab [root]="tab2Root" tabTitle="Üye Ol"            tabIcon="information-circle" (ionSelect)="goToUyeOl()"></ion-tab>\n          <ion-tab [root]="tab3Root" tabTitle="Yetkili Girişi"    tabIcon="contacts" (ionSelect)="goToLoginYetkili()"></ion-tab>\n        </ion-tabs>\n      </ion-item>\n\n\n\n\n      <super-tabs>\n        <super-tab [root]="tab1Root" title="Giriş Yap"         icon="home"  ></super-tab>\n        <super-tab [root]="tab2Root" title="Üye Ol"            icon="information-circle"></super-tab>\n        <super-tab [root]="tab3Root" title="Yetkili Girişi"    icon="contacts" ></super-tab>\n      </super-tabs>\n\n\n\n\n      <ion-list inset>\n\n        <ion-row>\n          <ion-row>\n            <ion-label>Telefon</ion-label>\n          </ion-row>\n          <ion-item>\n            <ion-label><img  margin-left="2px" style="height: 12.46px; width: 12px" src="http://kusurkimde.com/rest_api/imgs/iconKullanici.svg"></ion-label>\n            <ion-input [(ngModel)]="tel" clearInput="true"  id="myInput" placeholder="Telefon" type="text"></ion-input>\n          </ion-item>\n        </ion-row>\n\n\n\n        <ion-row>\n          <ion-row>\n            <ion-label>Parola</ion-label>\n          </ion-row>\n          <ion-item>\n            <ion-label><img  margin-left="2px" style="height: 12.46px; width: 12px;font-size: 15px" src="http://kusurkimde.com/rest_api/imgs/iconPass.svg"></ion-label>\n            <ion-input [(ngModel)]="pass"  clearInput="true" placeholder="Şifreniz" type="password"></ion-input>\n          </ion-item>\n        </ion-row>\n\n      </ion-list>\n\n\n\n\n\n\n\n      <ion-list style="margin-top: 15%;">\n        <ion-row>\n          <ion-col style="text-align: center">\n            <button ion-button style="width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.20); background-color: #ff0a0a" round (click)="goToServisler()">Giriş Yap</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="text-align: center">\n            <button style="color: #FF0000; background:none">Şifremi Unuttum!</button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n\n    </ion-list>\n\n  </div>\n\n\n\n\n</ion-content>\n\n--->\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginYetkiliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ara_ara__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servisler_servisler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginYetkiliPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginYetkiliPage = /** @class */ (function () {
    function LoginYetkiliPage(navCtrl, navParams, events, nav, http, alertCtrl, loadingCtrl, nativeStorage, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.nav = nav;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.storage = storage;
        events.publish('hideHeader', { isHidden: true });
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__uye_ol_uye_ol__["a" /* UyeOlPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__ara_ara__["a" /* AraPage */];
    }
    LoginYetkiliPage.prototype.goToServisler = function () {
        var _this = this;
        if (this.kod == null || this.pass1 == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Eksik Bilgi Girdiniz!!!',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
        if (this.kod.length > 1) {
            var loading_1 = this.loadingCtrl.create({ content: "Lütfen bekleyiniz..." });
            loading_1.present();
            var myData = { acente_kod: this.kod, pass: this.pass1 };
            console.log(JSON.stringify(myData));
            this.http.post("https://kusurkimde.com/rest_api/api/yetkili_giris", JSON.stringify(myData))
                .subscribe(function (result) {
                var myParseData = JSON.parse(result["_body"]);
                console.log(result);
                if (myParseData["result"]["code"] == 2000) {
                    var id = myParseData["result"]["veri"];
                    var alert_2 = _this.alertCtrl.create({ title: "Hoşgeldiniz", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_2.present();
                    _this.events.publish('hideHeader', { isHidden: false });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__servisler_servisler__["a" /* ServislerPage */]);
                    // set a key/value
                    var myStorageId = _this.storage.set('id', id);
                    console.log(myStorageId);
                }
                else if (myParseData["result"]["code"] == 1000) {
                    var alert_3 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: myParseData["result"]["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_3.present();
                    _this.events.publish('hideHeader', { isHidden: true });
                }
                loading_1.dismiss();
            });
        }
        else {
            var alert_4 = this.alertCtrl.create({ title: "Boş bırakmayın", message: "Lütfen boş alan bırakmayınız", buttons: [{ text: 'Tamam', role: 'cancel' }] });
            alert_4.present();
        }
    };
    LoginYetkiliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-yetkili',template:/*ion-inline-start:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\login-yetkili\login-yetkili.html"*/'\n\n\n\n<ion-content>\n  <img  style="position: absolute;" src="https://kusurkimde.com/rest_api/imgs/loginBack.svg">\n\n  <div style="margin-top: 60%">\n    <ion-list inset>\n      <ion-row style="height: 150px; width: 250px;margin-top: -80px; margin-left: 45px">\n        <ion-row style="margin-top: 100px">\n          <ion-label>Yetkili Kodu</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label><img  margin-left="2px" class="myIcon" src="https://kusurkimde.com/rest_api/imgs/iconKullanici.svg"></ion-label>\n          <ion-input [(ngModel)]="kod" clearInput="true"  id="myInput" placeholder="Yetkili Kodu" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row style="width: 250px; margin-top: -50px;margin-left: 45px">\n        <ion-row style="margin-top: 40%;">\n          <ion-label>Parola</ion-label>\n        </ion-row>\n        <ion-item>\n          <ion-label><img  margin-left="2px" class="myIcon" src="https://kusurkimde.com/rest_api/imgs/iconPass.svg"></ion-label>\n          <ion-input [(ngModel)]="pass1" clearInput="true" placeholder="Şifre" type="password"></ion-input>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n\n    <ion-list style="margin-top: 12%;">\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button  ion-button class="login" style="  background-color: #F00A0A" round  (click)="goToServisler()">G&#304;R&#304;&#350; YAP</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style="text-align: center">\n          <button style="color: #FF0000; background:none">Şifremi Unuttum!</button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n<ion-content>\n  <img  style="position: fixed;" src="http://kusurkimde.com/rest_api/imgs/loginBack.svg">\n\n\n  <div class="box">\n    <ion-list>\n\n\n      <div style="border-radius: 7px;box-shadow: 0px 10px 24px 2px rgba(139,139,139,0.15);">\n      <ion-row>\n        <ion-col>\n          <button ion-button  style="background:none;color: red" (click)="goToLogin()">Giriş Yap</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button style="background:none; color: red" (click)="goToUyeOl()">Üye Ol</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button  style="background:none; color: red" (click)="goToLoginYetkili()">Yetkili Girişi</button>\n        </ion-col>\n      </ion-row>\n      </div>\n\n\n\n      <ion-item style="border-radius: 7px;box-shadow: 0px 10px 24px 2px rgba(139,139,139,0.15);">\n        <ion-tabs>\n          <ion-tab [root]="tab1Root" tabTitle="Giriş Yap"         tabIcon="home" (ionSelect)="goToLogin()"></ion-tab>\n          <ion-tab [root]="tab2Root" tabTitle="Üye Ol"            tabIcon="information-circle" (ionSelect)="goToUyeOl()"></ion-tab>\n          <ion-tab [root]="tab3Root" tabTitle="Yetkili Girişi"    tabIcon="contacts"></ion-tab>\n        </ion-tabs>\n      </ion-item>\n\n\n\n\n\n      <ion-list inset>\n        <ion-item>\n          <ion-label><img  margin-left="2px" style="height: 12.46px; width: 12px" src="http://kusurkimde.com/rest_api/imgs/iconKullanici.svg"></ion-label>\n          <ion-input [(ngModel)]="kod" placeholder="Yetkili Kodu" name="username" id="loginField" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label><img  margin-left="2px" style="height: 12.46px; width: 12px" src="http://kusurkimde.com/rest_api/imgs/iconPass.svg"></ion-label>\n          <ion-input [(ngModel)]="pass1" placeholder="Şifre" name="password" id="passwordField" type="password"></ion-input>\n        </ion-item>\n      </ion-list>\n\n\n\n      <ion-list style="margin-top: 15%;">\n        <ion-row>\n          <ion-col style="text-align: center">\n            <button ion-button style="width:196px; height:44px;box-shadow: 0px 0px 20px 5px rgba(255,0,0,0.40); background-color: #F00A0A" round  (click)="goToServisler()">Giriş Yap</button>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n\n    </ion-list>\n\n  </div>\n\n\n\n\n</ion-content>\n\n-->\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\Desktop\kusurkimde\kusurKimdeAppp\src\pages\login-yetkili\login-yetkili.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], LoginYetkiliPage);
    return LoginYetkiliPage;
}());

//# sourceMappingURL=login-yetkili.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map