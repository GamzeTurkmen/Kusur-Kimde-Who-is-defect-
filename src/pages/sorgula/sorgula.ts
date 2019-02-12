import { Component } from '@angular/core';
import {AlertController, LoadingController, Nav, NavController, NavParams, Platform} from 'ionic-angular';
import {AraPage} from "../ara/ara";
import {ServislerPage} from "../servisler/servisler";
import {Events} from "ionic-angular";
import {KusurDetayPage} from "../kusur-detay/kusur-detay";
import {Http} from "@angular/http";
import {Storage} from "@ionic/storage";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'


/**
 * Generated class for the SorgulaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



@Component({
    selector: 'page-sorgula',
    templateUrl: 'sorgula.html',
})
export class SorgulaPage {

    pet: string = "bekleyen";

    isAndroid: boolean = false;
    isDanger: boolean = true;

    ID:any;
    users:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events,public platform:Platform,
                public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
                public storage: Storage,public nav : Nav) {



        // Or to get a key/value pair
        this.storage.get('id').then((val) => {

            console.log('myID', val);


            let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
            loading.present();


            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});



            this.http.post("https://kusurkimde.com/rest_api/api/kusurkaydi",JSON.stringify({id:val}))
                .subscribe(result => {

                    console.log(val);

                    var myParseData = JSON.parse(result["_body"]);
                    console.log(result);

                    if(myParseData["result"]["code"] == 2000){
                        let id = myParseData["result"]["veri"];
                        //console.log(id);


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






        this.isAndroid = platform.is('android');






    }


    ionViewDidLoad(val){

        console.log('testt' + val);

        var id = val;


    }



    itemSelected(item: string) {
        console.log("Selected Item", item);
    }


    goBackServisler(){
        this.nav.setRoot(ServislerPage);
        //this.navCtrl.push(ServislerPage);
    }

    goToKusurDetay(detayID){


        this.storage.set('detayID',detayID);



        this.navCtrl.push(KusurDetayPage);
    }

}
