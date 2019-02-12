import {Component} from '@angular/core';
import {AlertController, App, LoadingController, Nav, NavController, NavParams,ToastController} from 'ionic-angular';
import {ServislerPage} from "../servisler/servisler";
import { Events } from 'ionic-angular';
import {ModalController} from "ionic-angular";
import {KusurKayitTamamPage} from "../kusur-kayit-tamam/kusur-kayit-tamam";
import { Base64 } from '@ionic-native/base64';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {HTTP} from "@ionic-native/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise'
import { Storage } from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';




@Component({
    selector: 'page-kusur-kaydi',
    templateUrl: 'kusur-kaydi.html',
})
export class KusurKaydiPage {

    regData = { ad_soyad: '', pass: '', telefon: '', avatar:'' };
    imgPreview = 'assets/imgs/no-image.png';
    ad_soyad:any;
    telefon:any;
    plaka:any;
    pass:any;
    aciklama:any;
    tc:any;
    id:any;
    path:string;
    base64Image:string;
    imageFileName:any;
    imageURI:any;
    images: any = [];
    images_base64:any= [];
    img_count:any=0;
    

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpc:HttpClient,private camera:Camera,
                private transfer: FileTransfer,
                public events:Events ,public modalCtrl:ModalController,public app:App,private base64: Base64,
                public nav:Nav,public http:Http,public alertCtrl:AlertController,public loadingCtrl:LoadingController,
                public storage: Storage,private imagePicker: ImagePicker,public toastCtrl:ToastController
                )

    {
        this.imgPreview="assets/imgs/no-image.png";

    }
 
   getPhoto() {

      let options = {
        maximumImagesCount: 6,
        outType:0,
        quality: 70,
        targetHeight: 44,
        targetWidth: 196
      };
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            this.images.push(results[i]);
            this.base64.encodeFile(results[i]).then((base64File: string) => {
              this.regData.avatar = base64File;
             console.log(results[i]);
             this.images_base64.push(base64File);
            }, (err) => {
              console.log(err);
            });
        }
      }, (err) => { }); 
  
      this.img_count = this.images_base64.length;
     
    } 
    

    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });

      toast.onDidDismiss(() => {
        console.log('Mesaj kayboldu');
      });

      toast.present(); 
    } 



    goToKayitTamam(){
      const fileTransfer: FileTransferObject = this.transfer.create();
          
      let options: FileUploadOptions = {
        fileKey: 'ionicfile',
        fileName: 'ionicfile',
        chunkedMode: false,
        mimeType: "image/jpeg",
        headers: {}
      }
      
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });



  

      
      
  if(this.ad_soyad==null || this.telefon==null || this.plaka==null || this.tc==null){

    let alert = this.alertCtrl.create({
      title: 'Hata',
      subTitle: 'Lütfen Eksik Bilgilerinizi Giriniz!!!',
      buttons: ['Tamam']
    });
    alert.present();


  }
  else if(this.ad_soyad!=null || this.telefon!=null || this.plaka!=null || this.tc!=null){
    this.navCtrl.push(KusurKayitTamamPage);
  }

        
      //İmage i server a göndermek için kullanılan kısım 
      
  
      



          /*  this.storage.get('id').then((val : boolean) => {

                if (val){
                    this.getId(val);
                }
                console.log('myID', val);
            }); */

        }

    goBackServisler(){
        this.events.publish('hideHeader', { isHidden: false});
        this.navCtrl.popTo(ServislerPage);
    }


    getId(val){

        var id = val;


        if(this.tc.length == 11){
            let loading = this.loadingCtrl.create({content:"Lütfen bekleyiniz..."});
            loading.present();


            //let alert = this.alertCtrl.create({title:"Eklendi",message:'Giriş Yapiliyor',buttons:[{text:'Tamam',role:'cancel'}]});

            var myData = {ad_soyad:this.ad_soyad,telefon:this.telefon,plaka:this.plaka,tc:this.tc,id:id,aciklama:this.aciklama,images:this.images_base64};
            //console.log(myData);



            console.log(JSON.stringify(myData));
            this.http.post("https://kusurkimde.com/rest_api/api/kusurkaydi_olustur",JSON.stringify(myData))
                .subscribe(result => {

                    var myParseData = JSON.parse(result["_body"]);
                    console.log(result);

                    if(myParseData["result"]["code"] == 2000){
                        let id = myParseData["result"]["veri"];
                        this.events.publish('hideHeader', { isHidden: true});
                        this.navCtrl.push(KusurKayitTamamPage);
                        //console.log(id);
                    }
                    else if (myParseData["result"]["code"] == 1000) {

                        let alert = this.alertCtrl.create({title:"başarısız",message:myParseData["result"]["message"],buttons:[{text:'Tamam',role:'cancel'}]});
                        alert.present();
                    }

                    loading.dismiss();

                });
        }

        else{
            let alert = this.alertCtrl.create({title:"Yanlış TC",message:"Lütfen 11 haneli Türkiye Cumhuriyeti Vatandaşlık Numaranızı Eksiksiz Girin",buttons:[{text:'Tamam',role:'cancel'}]});
            alert.present();
        }



    }
    
   
      /*  Pictures(){ 
            let option={
                title:'Resim seçiniz',
                
                maximumImagesCount:4,
                outType:0
            };
            this.imagePicker.getPictures({
            }).then( results =>{
              console.log(results);
              for(let i=0; i < results.length;i++){
                this.path=results[i];
              };
            });
            
          } */

       /* uploadFile() {
      let loader = this.loadingCtrl.create({
        content: "Uploading..."
      });
      loader.present();
      const fileTransfer: FileTransferObject = this.transfer.create();
    
   
    
      fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
        .then((data) => {
        console.log(data+" Uploaded Successfully");
        this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      });
    }
*/

       

}
