import { Component } from '@angular/core';
import {AlertController, LoadingController, ModalController,Nav, NavController, NavParams} from 'ionic-angular';
import {TelOnayPage} from "../tel-onay/tel-onay";
import {LoginPage} from "../login/login";
import { Events } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ProfilePage} from "../profile/profile";
import {TabPage} from "../tab/tab";


/**
 * Generated class for the UyeOlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-uye-ol',
    templateUrl: 'uye-ol.html',
})
export class UyeOlPage {
    telefon:any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events:Events,public alertCtrl:AlertController,
                public nav:Nav)
    {


        events.publish('hideHeader', { isHidden: true});

    }

    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: true});
    }



    goBackHome(){
        this.navCtrl.push(TabPage);
    }

    
    goToTelOnayPage(){
        if(this.telefon!=" "){
            this.navCtrl.push(ProfilePage);
        }
        else {
            
            let alert = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Lütfen Telefon numaranızı giriniz!!!',
                buttons: ['Tamam']
              });
              alert.present();
              this.navCtrl.push(UyeOlPage);
             
        }
        
       
      
        
        
       // this.navCtrl.push(UyeOlPage);
       
        
    }


    goBackLogin(){

        //this.navCtrl.popTo(TabPage);
        //this.navCtrl.push(TabPage);
        this.nav.setRoot(TabPage);
    }




}
