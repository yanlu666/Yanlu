import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ZixiangPage } from '../zixiang/zixiang';
import { ZhifuPage } from '../zhifu/zhifu';



@IonicPage()
@Component({
  selector: 'page-tuxiang',
  templateUrl: 'tuxiang.html',
})
export class TuxiangPage {
  hh;
  price;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TuxiangPage');
    this.hh=this.navParams.data.title;
    this.price=this.navParams.data.price;
    console.log(this.navParams.data.title);
    console.log(this.navParams.data.price);
  };

  
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: '注意事项',
      message: '若七天后人数不过，将自动退还金额！',
      buttons: [
        {
          text: '返回',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(ZhifuPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
