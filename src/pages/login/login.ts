import {Component} from '@angular/core';
import {AlertController, LoadingController, ModalController, Nav, NavController, NavParams,App} from 'ionic-angular';
import {UyeOlPage} from "../uye-ol/uye-ol";
import {LoginYetkiliPage} from "../login-yetkili/login-yetkili";
import {AraPage} from "../ara/ara";
import {ServislerPage} from "../servisler/servisler";
import { Events } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import {Md5} from 'ts-md5/dist/md5';
import { ImagePicker } from '@ionic-native/image-picker';
import {  ImagePickerOptions } from '@ionic-native/image-picker';




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    public get storage(): Storage {
        return this._storage;
    }
    public set storage(value: Storage) {
        this._storage = value;
    }

    tab1Root:any;
    tab2Root:any;
    tab3Root:any;


    posts: any;
    data:any;
    tel:any;
    pass:any;
    id:any;



    constructor(public navCtrl: NavController, public navParams: NavParams,
                public modalCtrl: ModalController,public events:Events,public nav:Nav,
                public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
                public nativeStorage: NativeStorage,
                private _storage: Storage,private imagePicker: ImagePicker,public app:App) {

        events.publish('hideHeader', { isHidden: true});



        this.tab1Root = AraPage;
        this.tab2Root = UyeOlPage;
        this.tab3Root = LoginYetkiliPage;



        /**
        document.getElementById('myInput').addEventListener('keypress', function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });

         */
    }

    
   

    onKeydown(event) {
        if (event.key === "Enter") {
            console.log(event);
        }
    }


    goToServisler(){
        if(this.tel==null || this.pass==null){
            let alert = this.alertCtrl.create({
              title: 'Hata',
              subTitle: 'Eksik Bilgi Girdiniz!!!',
              buttons: ['Tamam']
            });
            alert.present();
        }  

            //if(this.tel.length >=11)
            if(this.tel.length > 1){
                let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
                loading.present();



                var pass2 = Md5.hashStr(this.pass);
                //var pass3 = Md5.hashStr(pass2);

                //var pass3 = Md5.hashStr(pass2);
                //console.log(pass3);



                var myData = {telefon:this.tel,pass:pass2};
                //console.log(data);



               // console.log(JSON.stringify(myData));
                this.http.post("https://kusurkimde.com/rest_api/api/login",JSON.stringify(myData))
                    .subscribe(result => {

                        var myParseData = JSON.parse(result["_body"]);
                        //console.log(result);

                        if(myParseData["result"]["code"] == 2000){
                            let id = myParseData["result"]["veri"];
                            let alert = this.alertCtrl.create({title:"Hoşgeldiniz",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                            alert.present();
                            this.events.publish('hideHeader', { isHidden: false});
  
        this.app.getRootNav().setRoot(ServislerPage);

                            // set a key/value
                            var myStorageId = this.storage.set('id', id);
                            //console.log(myStorageId);

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
                let alert = this.alertCtrl.create({title:"Eksik Tuşlama",message:"Lütfen telefon numaranızı başında 0 ile birlikte yazınız",buttons:[{text:'Tamam',role:'cancel'}]});
                alert.present();
            }




        }


}
