import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, App, LoadingController, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SliderPage} from "../pages/slider/slider";
import {AraPage} from "../pages/ara/ara";
import {ServislerPage} from "../pages/servisler/servisler";
import {SorgulaPage} from "../pages/sorgula/sorgula";
import { Events } from 'ionic-angular';
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {LoginYetkiliPage} from "../pages/login-yetkili/login-yetkili";
import {UyeOlPage} from "../pages/uye-ol/uye-ol";
import { AuthPage } from '../pages/auth/auth';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { KusurKaydiPage } from '../pages/kusur-kaydi/kusur-kaydi';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any;
    public onlypage: boolean = false;


    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App,
                public events: Events
    ) {
        platform.ready().then(() => {
            this.nav.push(SliderPage);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        events.subscribe('hideHeader', (data) => {
            this.onlypage = data.isHidden;
        });

        


    }
         
            


    goToServisler() {
        this.nav.setRoot(ServislerPage);
    }

    goToAra() {
        this.nav.setRoot(AraPage);

    }

    goToSorgula() {

        this.nav.setRoot(SorgulaPage);
        }

   /* checkPreviousAuthorization(): void { 
            if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
              (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
              this.rootPage = AuthPage;
            } 
            else
             {
              this.rootPage = HomePage;
             }
    
}*/
}


