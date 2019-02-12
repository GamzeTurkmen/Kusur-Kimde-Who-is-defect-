import { Component } from '@angular/core';
import {AlertController, Events, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SorgulaPage} from "../sorgula/sorgula";
import {Http} from "@angular/http";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the KusurDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-kusur-detay',
  templateUrl: 'kusur-detay.html',
})
export class KusurDetayPage {

    users:any;
    isim:any;
    tc:any;
    plaka:any;
    tel:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events,
              public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
              public storage: Storage) {



      // Or to get a key/value pair
      this.storage.get('detayID').then((val) => {

          console.log('detayID', val);


          let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
          loading.present();


          //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});



          this.http.post("https://kusurkimde.com/rest_api/api/kusurdetay",JSON.stringify({id:val}))
              .subscribe(result => {


                  console.log(val);

                  var myParseData = JSON.parse(result["_body"]);
                  console.log(result);

                  if(myParseData["result"]["code"] == 2000){
                      let id = myParseData["result"]["veri"];
                      //console.log(id);
                      document.getElementById('isim').innerHTML =id[0]['ad_soyad'];
                      document.getElementById('tel').innerHTML =id[0]['telefon'];
                      document.getElementById('plaka').innerHTML =id[0]['plaka'];
                      document.getElementById('tc').innerHTML =id[0]['tc'];
                      document.getElementById('aciklama').innerHTML =id[0]['aciklama'];






                      this.users = myParseData["result"]["veri"];
                      console.log(this.users = myParseData["result"]["veri"]);



                  }
                  else if (myParseData["result"]["code"] == 1000) {

                      let alert = this.alertCtrl.create({title:"başarısız",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                      alert.present();
                  }

                  loading.dismiss();

              });




      });




      events.publish('hideHeader', { isHidden: true});

  }



  goBackSorgulaPage(){
    this.navCtrl.popTo(SorgulaPage);
  }


    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false});
    }



}
