import {Component, ViewChild} from '@angular/core';
import {Events, Nav, NavController, NavParams, Platform} from 'ionic-angular';
import {KusurKaydiPage} from "../kusur-kaydi/kusur-kaydi";
import {LoginYetkiliPage} from "../login-yetkili/login-yetkili";
import {UyeOlPage} from "../uye-ol/uye-ol";
import {AraPage} from "../ara/ara";
import {LoginPage} from "../login/login";
import {SuperTabs, SuperTabsController} from "ionic2-super-tabs";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {


    pet: string = "Giriş Yap";
    isAndroid: boolean = false;
    tab1Root:any;
    tab2Root:any;
    tab3Root:any;

    page1: any = LoginPage;
    page2: any = UyeOlPage;
    page3: any = LoginYetkiliPage;


    constructor(public navCtrl: NavController, private navParams: NavParams, public events:Events,public platform:Platform,public nav:Nav,
                public superTabsCtrl: SuperTabsController) {

        events.publish('hideHeader', { isHidden: true});

        this.tab1Root = LoginPage;
        this.tab2Root = UyeOlPage;
        this.tab3Root = LoginYetkiliPage;


        this.isAndroid = platform.is('android');


    }



    ngAfterViewInit() {

        // must wait for AfterViewInit if you want to modify the tabs instantly
        this.superTabsCtrl.setBadge('homeTab', 5);

    }

    hideToolbar() {
        this.superTabsCtrl.showToolbar(false);
    }

    showToolbar() {
        this.superTabsCtrl.showToolbar(true);
    }


    onTabSelect(ev: any) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    }



        goToUyeOl(){
            this.navCtrl.push(UyeOlPage);

            /*
            let modal = this.modalCtrl.create(UyeOlPage);
            modal.present();*/
        }


        goToLogin(){
            this.nav.setRoot(LoginPage);
        }


    goToLoginYetkili(){
        this.nav.setRoot(LoginYetkiliPage);
    }

    


}
