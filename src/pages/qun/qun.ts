import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
   


@IonicPage()
@Component({
  selector: 'page-qun',
  templateUrl: 'qun.html',
})
export class QunPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QunPage');
  }

openWords(){
  this.navCtrl.push("WordsPage");
}

goGonggao(){
  this.navCtrl.push("QungonggaoPage");
}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享到',
      buttons: [
        {
          text: 'QQ',
        //   role: 'destructive',
          handler: () => {
            console.log('QQ');
          }
        },{
            text: '微信',
            // role: 'destructive',
            handler: () => {
              console.log('微信');
            }
          },{
            text: '微博',
            // role: 'destructive',
            handler: () => {
              console.log('微博');
            }
          },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentActionSheet2() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '只接收不提醒',
        //   role: 'destructive',
          handler: () => {
            console.log('只接收不提醒');
          }
        },{
            text: '屏蔽消息',
            // role: 'destructive',
            handler: () => {
              console.log('屏蔽消息');
            }
          },{
            text: '接收消息',
            // role: 'destructive',
            handler: () => {
              console.log('接收消息');
            }
          },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '确定退出该群?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
