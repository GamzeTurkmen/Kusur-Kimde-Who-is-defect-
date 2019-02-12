import { Component } from '@angular/core';
import {ModalController, Nav, NavController, NavParams} from 'ionic-angular';
import {SorgulaPage} from "../sorgula/sorgula";
import {AraPage} from "../ara/ara";
import {ServislerPage} from "../servisler/servisler";
import {UyeOlPage} from "../uye-ol/uye-ol";
import {LoginPage} from "../login/login";
import {LoginYetkiliPage} from "../login-yetkili/login-yetkili";

/**
 * Generated class for the TabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-tab',
    templateUrl: 'tab.html',
})
export class TabPage {

    tab1Root:any;
    tab2Root:any;
    tab3Root:any;

    chatParams:any;

    constructor(public navCtrl: NavController, public navParams: NavParams ) {


        this.tab1Root = LoginPage;
        this.tab2Root = UyeOlPage;
        this.tab3Root = LoginYetkiliPage;

    }


    goToUyeOl(){
        this.navCtrl.push(UyeOlPage);

        //this.nav.setRoot(UyeOlPage);


       /* let modal = this.modalCtrl.create(UyeOlPage);
        modal.present();*/
    }





}
