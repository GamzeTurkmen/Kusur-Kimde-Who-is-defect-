import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {UyeOlPage} from "../uye-ol/uye-ol";
import { Events } from 'ionic-angular';


/**
 * Generated class for the TelOnayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-tel-onay',
    templateUrl: 'tel-onay.html',
})
export class TelOnayPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public events:Events) {
        events.publish('hideHeader', { isHidden: true});

    }

    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: true});
    }

    goToProfilePage(){
        this.navCtrl.push(ProfilePage);
    }

    /*goBackUyeOl(){
        this.navCtrl.push(UyeOlPage);
    } */

}
