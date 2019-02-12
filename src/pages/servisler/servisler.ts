import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {KusurKaydiPage} from "../kusur-kaydi/kusur-kaydi";
import {SorgulaPage} from "../sorgula/sorgula";
import {AraPage} from "../ara/ara";
import {Events} from "ionic-angular";
import {FullProfilePage} from "../full-profile/full-profile";

/**
 * Generated class for the ServislerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-servisler',
    templateUrl: 'servisler.html',
})
export class ServislerPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {

    }

    goToKusurKaydi(){
        this.navCtrl.push(KusurKaydiPage);
    }


    goToSorgula(){
        this.navCtrl.push(SorgulaPage);
    }

    goToAra(){
        this.navCtrl.push(AraPage);
    }


    seeProfile(){
        this.navCtrl.push(FullProfilePage);
    }


}
