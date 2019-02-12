import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {TabPage} from "../tab/tab";
import {TelOnayPage} from "../tel-onay/tel-onay";
import {ServislerPage} from "../servisler/servisler";
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';





/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
                public events:Events,private alertCtrl: AlertController
                )
    {
        events.publish('hideHeader', { isHidden: true}); 
      
    }
       
 
    goToTabPage(){
        this.navCtrl.push(TabPage);
    }


    goBackTelOnay(){
        this.events.publish('hideHeader', { isHidden: true});
        this.navCtrl.push(TelOnayPage);
    }
    user:any;
    mail:any;
    pass1:any;
    pass2:any;
    goToServisler(){
            

          
            if(this.user!=null && this.mail!=null && this.pass1==this.pass2)
            {

                this.navCtrl.push(ServislerPage, {user:this.user});
               

            }
            else if(this.pass1 != this.pass2)
            {
                let alert = this.alertCtrl.create({
                    title: 'Hata',
                    subTitle: 'Şifreler eşleşmiyor',
                    buttons: ['Tamam']
                  });
                  alert.present();
                
                
            }
            else{
                this.navCtrl.push(ProfilePage,{user:this.user});
            }
            
  
   
    } 


    ionViewWillLeave() {
        //Make footer visiable while leaving the page.
        this.events.publish('hideHeader', { isHidden: false});
    }
   

    
    
      


}
