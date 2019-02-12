import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServislerPage} from "../servisler/servisler";
import {SorgulaPage} from "../sorgula/sorgula";
import {Events} from "ionic-angular";



/**
 * Generated class for the AraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-ara',
    templateUrl: 'ara.html',
})
export class AraPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public events:Events) {
            

    }
    
    goToServisler(){
        this.navCtrl.push(ServislerPage);
    }

    goToSorgula(){
        this.navCtrl.push(SorgulaPage);
    }

}
