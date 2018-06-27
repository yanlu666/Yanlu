import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from "../settings/settings";
import { LoginPage } from "../login/login";
import { WodeziliaoPage } from "../wodeziliao/wodeziliao";

import { WodetieziPage } from "../wodetiezi/wodetiezi";
import $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushSettingPage(){
    this.navCtrl.push(SettingsPage);
  }

    username='请前往登录';
    qianming='';
    touxiang="./assets/imgs/female.jpg";


  ionViewWillEnter() {//这个函数可以实时更新
     var that=this;  //注意this指代

      var phone= localStorage.getItem('phone');


       if(phone!=null){
         $.ajax({
           type:"post",
           url:'http://39.105.132.104:3000/huoqu',
           data: "phone="+ phone,
           success:function(res){

             console.log(res.data);
             console.log(res.data[0]);

             that.username=res.data[0].username;
             that.qianming=res.data[0].qianming;
             that.touxiang=res.data[0].touxiang;

           },
           error:function(err){
             console.log(err);
           }
         });
       }else{
        that.username='请前往登录';
        that.qianming='';
        that.touxiang="./assets/imgs/female.jpg";
       }


       var un=document.getElementById("username");
       var ziliao=document.getElementById("ziliao");
       var wdtz=document.getElementById("wdtz");

       console.log(phone);
       un.onclick=function(){
        console.log(123);
          if(phone==null ){
            that.navCtrl.push(LoginPage);
          }
        }

       wdtz.onclick=function(){
          if(phone!=null ){
            that.navCtrl.push(WodetieziPage);
          }
        }

       ziliao.onclick=function(){
          if(phone!=null ){
            console.log('跳转到我的资料页');
            that.navCtrl.push(WodeziliaoPage);
          }
        }
  }





}
