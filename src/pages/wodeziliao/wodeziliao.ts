import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TuxiangPage } from '../tuxiang/tuxiang';

/**
 * Generated class for the WodeziliaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wodeziliao',
  templateUrl: 'wodeziliao.html',
})
export class WodeziliaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WodeziliaoPage');
  }

  goTuxiang(){
    this.navCtrl.push(TuxiangPage);
  }

}
