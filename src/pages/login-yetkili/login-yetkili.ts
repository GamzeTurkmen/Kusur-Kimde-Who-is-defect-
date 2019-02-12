import { Component } from '@angular/core';
import {AlertController, Events, LoadingController, Nav, NavController, NavParams} from 'ionic-angular';
import {UyeOlPage} from "../uye-ol/uye-ol";
import {AraPage} from "../ara/ara";
import {ServislerPage} from "../servisler/servisler";
import {LoginPage} from "../login/login";
import {Http} from "@angular/http";
import {NativeStorage} from "@ionic-native/native-storage";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the LoginYetkiliPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login-yetkili',
    templateUrl: 'login-yetkili.html',
})
export class LoginYetkiliPage {

    tab1Root:any;
    tab2Root:any;
    tab3Root:any;

    kod:any;
    pass1:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events,
                public nav:Nav,public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
                public nativeStorage: NativeStorage,
                public storage: Storage) {

        events.publish('hideHeader', { isHidden: true});



        this.tab1Root = LoginPage;
        this.tab2Root = UyeOlPage;
        this.tab3Root = AraPage;

    }





    goToServisler(){
        if(this.kod==null || this.pass1==null){
            let alert = this.alertCtrl.create({
              title: 'Hata',
              subTitle: 'Eksik Bilgi Girdiniz!!!',
              buttons: ['Tamam']
            });
            alert.present();
        }

        if(this.kod.length > 1){
            let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
            loading.present();



            var myData = {acente_kod:this.kod,pass:this.pass1};



            console.log(JSON.stringify(myData));
            this.http.post("https://kusurkimde.com/rest_api/api/yetkili_giris",JSON.stringify(myData))
                .subscribe(result => {




                    var myParseData = JSON.parse(result["_body"]);
                    console.log(result);

                    if(myParseData["result"]["code"] == 2000){
                        let id = myParseData["result"]["veri"];
                        let alert = this.alertCtrl.create({title:"Hoşgeldiniz",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                        alert.present();
                        this.events.publish('hideHeader', { isHidden: false});

                        this.navCtrl.push(ServislerPage);

                        // set a key/value
                        var myStorageId = this.storage.set('id', id);
                        console.log(myStorageId);


                    }
                    else if (myParseData["result"]["code"] == 1000) {

                        let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                        alert.present();
                        this.events.publish('hideHeader', { isHidden: true});

                    }

                    loading.dismiss();

                });
        }

        else{
            let alert = this.alertCtrl.create({title:"Boş bırakmayın",message:"Lütfen boş alan bırakmayınız",buttons:[{text:'Tamam',role:'cancel'}]});
            alert.present();
        }

        }



}
