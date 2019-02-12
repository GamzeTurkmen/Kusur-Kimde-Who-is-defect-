import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {TabPage} from "../tab/tab";




/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-slider',
    templateUrl: 'slider.html',
})
export class SliderPage {


    @ViewChild(Slides) slides: Slides;




    slides1:any;
    slides2:any;
    slides3:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public events:Events,public nav:Nav
                ) {

        events.publish('hideHeader', { isHidden: true});





         this.slides1 = [
            {
                title: "Başlık1",
                description: "Haksızlığa mı uğradınız?<br/>Artık mağdur olmayacaksınız!",
                image: "https://kusurkimde.com/rest_api/imgs/slideImg1.svg",
            }
            ];


        this.slides2 = [
            {
                title: "Başlık2",
                description: "Şimdi kusur düzeltme zamanı!<br/>Doğru sonuç bizde!",
                image: "https://kusurkimde.com/rest_api/imgs/slideImg2.svg",
            }

        ];

         this.slides3 = [

             {
                 title: "Başlık3",
                 description: "Kaza anında kusur kimde?<br/>Biz de şüpheye yer yok!",
                 image: "https://kusurkimde.com/rest_api/imgs/slideImg3.svg",
             }

         ];
    }



    next() {
        this.slides.slideNext();
    }


    prev() {
        this.slides.slidePrev();
    }


    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    }


    goToSlide() {
        this.slides.slideTo(1, 500);
    }



    goLoginPage(){
        this.nav.setRoot(TabPage);
        //this.navCtrl.push(LoginPage);
    }


}
