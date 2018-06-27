import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-gonggaoxiang',
  templateUrl: 'gonggaoxiang.html',
})
export class GonggaoxiangPage {
  z1;
  z2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GonggaoxiangPage');
    this.z1=this.navParams.data.name;
    this.z2=this.navParams.data.content;
    console.log(this.navParams.data.name);
  }

}
