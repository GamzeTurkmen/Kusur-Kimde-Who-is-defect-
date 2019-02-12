import { Component } from '@angular/core';
import {AlertController, Events, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ServislerPage} from "../servisler/servisler";
import {SorgulaPage} from "../sorgula/sorgula";
import {Http} from "@angular/http";
import {Storage} from "@ionic/storage";


/**
 * Generated class for the FullProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-full-profile',
  templateUrl: 'full-profile.html',
})
export class FullProfilePage {

    users:any;
    isim:any;
    mail:any;
    passs3:any;
    passs2:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events,
              public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
              public storage: Storage) {


      events.publish('hideHeader', { isHidden: true});

      // Or to get a key/value pair
      this.storage.get('id').then((val) => {

          console.log('myID', val);


          let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
          loading.present();


          //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});



          this.http.post("https://kusurkimde.com/rest_api/api/profile",JSON.stringify({id:val}))
              .subscribe(result => {

                  console.log(val);

                  var myParseData = JSON.parse(result["_body"]);
                  console.log(result);

                  if(myParseData["result"]["code"] == 2000){
                      let id = myParseData["result"]["veri"];
                      this.isim = id[0]['ad_soyad'];
                      this.mail = id[0]['email'];
                      console.log(id);


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

      
  }


    goBackServisler(){

        this.navCtrl.popTo(ServislerPage);

    }


    goToServisler(){


        // Or to get a key/value pair
        this.storage.get('id').then((val) => {

            console.log('myID', val);


            let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
            loading.present();


            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});
            console.log(this.isim.valueOf());




            if (this.passs3 == this.passs2 || this.passs3 == null){
                let data = {ad_soyad:this.isim,email:this.mail,id:val,pass3:this.passs3,pass2:this.passs2};
                this.http.post("https://kusurkimde.com/rest_api/api/profile_edit",JSON.stringify(data))
                    .subscribe(result => {


                        console.log(val);

                        var myParseData = JSON.parse(result["_body"]);
                        console.log(result);

                        if(myParseData["result"]["code"] == 2000){
                            let id = myParseData["result"]["veri"];
                            this.isim = id[0]['ad_soyad'];
                            this.mail = id[0]['email'];
                            console.log(id);



                            this.users = myParseData["result"]["veri"];
                            console.log(this.users = myParseData["result"]["veri"]);

                            this.navCtrl.push(ServislerPage);


                        }
                        else if (myParseData["result"]["code"] == 1000) {

                            let alert = this.alertCtrl.create({title:"başarısız",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                            alert.present();
                        }

                        loading.dismiss();

                    });


            } else{


                let data = {ad_soyad:this.isim.valueOf(),email:this.mail.valueOf(),id:val};
                this.http.post("https://192.168.12.236/htdoc/fisrtap/rest_api/api/profile_edit",JSON.stringify(data))
                    .subscribe(result => {

                        console.log(val);

                        var myParseData = JSON.parse(result["_body"]);
                        console.log(result);

                        if(myParseData["result"]["code"] == 2000){
                            let id = myParseData["result"]["veri"];
                            this.isim = id[0]['ad_soyad'];
                            this.mail = id[0]['email'];
                            console.log(id);





                            this.users = myParseData["result"]["veri"];
                            console.log(this.users = myParseData["result"]["veri"]);

                            this.navCtrl.push(ServislerPage);





                        }
                        else if (myParseData["result"]["code"] == 1000) {

                            let alert = this.alertCtrl.create({title:"başarısız",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                            alert.present();
                        }

                        loading.dismiss();

                    });






            }






        });
    }



    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false});
    }



}
