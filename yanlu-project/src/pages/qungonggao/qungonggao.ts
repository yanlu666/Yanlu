import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GonggaoxiangPage } from '../gonggaoxiang/gonggaoxiang';

/**
 * Generated class for the QungonggaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qungonggao',
  templateUrl: 'qungonggao.html',
})
export class QungonggaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QungonggaoPage');
  }

  gogonggao(){
    var z1=document.getElementById('z1').innerHTML;
    var z2=document.getElementById('z2').innerHTML;
    this.navCtrl.push(GonggaoxiangPage,{name:z1,content:z2});
  }

  gogonggao2(){
    var z3=document.getElementById('z3').innerHTML;
    var z4=document.getElementById('z4').innerHTML;
    this.navCtrl.push(GonggaoxiangPage,{name:z3,content:z4});
  }

}
