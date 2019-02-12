import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabPage} from "../pages/tab/tab";
import {HomePage} from "../pages/home/home";
import {SliderPage} from "../pages/slider/slider";
import {LoginPage} from "../pages/login/login";
import {AraPage} from "../pages/ara/ara";
import {ServislerPage} from "../pages/servisler/servisler";
import {SorgulaPage} from "../pages/sorgula/sorgula";
import {UyeOlPage} from "../pages/uye-ol/uye-ol";
import {TelOnayPage} from "../pages/tel-onay/tel-onay";
import {ProfilePage} from "../pages/profile/profile";
import {LoginYetkiliPage} from "../pages/login-yetkili/login-yetkili";
import {KusurKaydiPage} from "../pages/kusur-kaydi/kusur-kaydi";
import {FullProfilePage} from "../pages/full-profile/full-profile";
import {KusurKayitTamamPage} from "../pages/kusur-kayit-tamam/kusur-kayit-tamam";
import {KusurDetayPage} from "../pages/kusur-detay/kusur-detay";
import { AuthPage } from '../pages/auth/auth';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NativeStorage} from "@ionic-native/native-storage";
import {IonicStorageModule} from "@ionic/storage";
import {SuperTabsModule} from "ionic2-super-tabs";
import { Base64 } from '@ionic-native/base64';
import { ImagePicker } from '@ionic-native/image-picker';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
      TabPage,
      HomePage,
      SliderPage,
      LoginPage,
      AuthPage,
      AraPage,
      ServislerPage,
      SorgulaPage,
      UyeOlPage,
      TelOnayPage,
      ProfilePage,
      LoginYetkiliPage,
      KusurKaydiPage,
      FullProfilePage,
      KusurKayitTamamPage,
      KusurDetayPage,

  ],
  imports: [
    BrowserModule,
      HttpModule,
      HttpClientModule,
      SuperTabsModule,
      IonicStorageModule.forRoot(),
      SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: true,
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      TabPage,
      HomePage,
      SliderPage,
      LoginPage,
      AraPage,
      ServislerPage,
      SorgulaPage,
      UyeOlPage,
      TelOnayPage,
      ProfilePage,
      AuthPage,
      LoginYetkiliPage,
      KusurKaydiPage,
      FullProfilePage,
      KusurKayitTamamPage,
      KusurDetayPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Base64,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
      
      NativeStorage,
      ImagePicker,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
