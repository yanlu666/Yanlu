import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPage } from "../edit/edit";
import { TzxqPage } from "../tzxq/tzxq";
import {WodetieziPage} from "../wodetiezi/wodetiezi";
import { StartPage } from "../start/start";
import { Platform } from 'ionic-angular';
import $ from 'jquery';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  tips: string = "experience";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
    this.initializeItems();
  }

 tiezi=[];
 temps=[];
 tu='http://www.ghost64.com/qqtupian/zixunImg/local/2017/11/08/15101101075624.jpg';

 ionViewWillEnter() {
    var that=this;
    console.log(123456);
    $.ajax({
      type:"post",
      url:'http://39.105.132.104:3000/get-tiezi',
      success:function(res){
        console.log(res.data);
        that.tiezi=[];
       for(var i=0;i<res.data.length;i++){
        that.tiezi.unshift(res.data[i]);
       }
      that.temps=that.tiezi;
       console.log(that.tiezi);
      },
      error:function(err){
        console.log(err);
      }
    });
  }

  goEdit(){
    this.navCtrl.push(EditPage);
  }


  goTzxq(i){
    this.navCtrl.push(TzxqPage,{tiezi:this.tiezi[i],tu:this.tu});
  }

  // goWode(){
  //   this.navCtrl.push(WodetieziPage);
  // }

  goStart(){
    this.navCtrl.push(StartPage);
  }

  items=[];//搜索列表


  //搜索列表
  initializeItems() {
    this.tiezi=this.temps;
    this.items=this.tiezi;
    console.log(this.items);
  }

  getItems(ev) {

     // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(val);

      console.log("查询结果：")
      this.tiezi = this.items.filter((item) => {
        return (item.content.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  count=0;
  temp=0;
  zan(index){
    var zan=document.getElementById(index);
    console.log(index);
    if(this.temp==index){ this.count++; }
    else{ this.count=0;  this.count++;}

    if(this.count%2==0){
      zan.style.color= "rgb(233, 184, 204)";
    }else{
      zan.style.color="rgb(255, 0, 157)";
    }


    this.temp=index;
  }
}
