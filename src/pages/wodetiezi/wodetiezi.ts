import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WtzxqPage }from '../wtzxq/wtzxq';

@IonicPage()
@Component({
  selector: 'page-wodetiezi',
  templateUrl: 'wodetiezi.html',
})
export class WodetieziPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WodetieziPage');
  }
 

  goWtzxq(){
    var phone=localStorage.getItem('phone');
    this.navCtrl.push(WtzxqPage);
  }
}
