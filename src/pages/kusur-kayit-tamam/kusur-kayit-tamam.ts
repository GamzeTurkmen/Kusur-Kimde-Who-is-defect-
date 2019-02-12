import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';

import {ServislerPage} from "../servisler/servisler";

/**
 * Generated class for the KusurKayitTamamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kusur-kayit-tamam',
  templateUrl: 'kusur-kayit-tamam.html',
})
export class KusurKayitTamamPage {


    constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events)


  {





      let TIME_IN_MS = 5000;
      setTimeout( () => {
          this.events.publish('hideHeader', { isHidden: true});
          this.navCtrl.push(ServislerPage);
          // somecode
      }, TIME_IN_MS);



  }


    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false});
    }






}
