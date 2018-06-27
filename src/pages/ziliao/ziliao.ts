import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ZixiangPage} from '../zixiang/zixiang';
import { AlertController } from 'ionic-angular';
import {TuxiangPage} from '../tuxiang/tuxiang';
import {WodeziliaoPage} from '../wodeziliao/wodeziliao';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-ziliao',
  templateUrl: 'ziliao.html',
})
export class ZiliaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  

  goZixiang(i){
    this.navCtrl.push(ZixiangPage,{name:this.items[i].ming,xiang:this.items[i].xiang});
  }

  goTuxiang(){
    var hh=document.getElementById('hh').innerHTML;
    var pri=document.getElementById('pri').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh,price:pri});
  }

  goTuxiang2(){
    var hh2=document.getElementById('hh2').innerHTML;
    var pri2=document.getElementById('pri2').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh2,price:pri2});
  }

  goTuxiang3(){
    var hh3=document.getElementById('hh3').innerHTML;
    var pri3=document.getElementById('pri3').innerHTML;
    this.navCtrl.push(TuxiangPage,{title:hh3,price:pri3});
  }

  gowodeziliao(){
    this.navCtrl.push(WodeziliaoPage,{name:'liu'});
  }

  alt(){
    let alert = this.alertCtrl.create({
      title: '购买提醒!',
      subTitle: '七天若人数未满，自动退款!',
      buttons: ['OK']
    });
    alert.present();
  };

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('选择科目');

    alert.addInput({
      type: 'radio',
      label: '英语一',
      value: '英语一',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '英语二',
      value: '英语二',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '数学一',
      value: '数学一',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '数学二',
      value: '数学二',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '政治',
      value: '政治',
      checked: false
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      // handler: data => {
      //   this.testRadioOpen = false;
      //   this.testRadioResult = data;
      // }
    });
    alert.present();
  }

  kemu='';
  nianfen='';
  mingcheng='';
  xiangqing='';
  search;
  items=[];
  allitems=[];

  cc=['数学一','数学二','英语一','英语二','政治'];
  nn=['2018','2017','2016','2015','2014','2013','2012','2011','2010'];

//学科
xueke(i){
  var bb=document.getElementsByClassName('bb');
  var cc=document.getElementsByClassName('cc');

  for(var k=0;k<cc.length;k++){
    cc[k].setAttribute('style','color:black');
  }

  console.log(bb);
  this.search='';
  this.items=[];
  for(var l=0;l<this.cc.length;l++){
    if(l==i){
      bb[l].setAttribute('style','color:blue');
    }
    else{
      bb[l].setAttribute('style','color:black');
    }
  }
  console.log(this.cc[i]);
  var that=this;
  $.ajax({
    type:"post",
    url:'http://39.105.132.104:3000/xueke',
    // dataType:'json',
    data: "kemu="+this.cc[i],
    success:function(res){

      console.log(res.data);
      console.log(res.data.length);
      
      var no=document.getElementById('no');
      var list=document.getElementById('list');
      if(res.data.length==0){
        no.style.display='block';
        list.style.display='none';
      }
      else{
        no.style.display='none';
        list.style.display='block';
      }
      
      for(var i=0;i<res.data.length;i++){
        that.items.push({'ming':res.data[i].mingcheng,'xiang':res.data[i].xiangqing});
      }
      console.log(that.items);
     // that.allitems=that.items;  
    },
    error:function(err){
      console.log(err);
    }
  });
}
 

//年份
nian(i){
  var bb=document.getElementsByClassName('bb');
  var cc=document.getElementsByClassName('cc');

  for(var k=0;k<bb.length;k++){
    bb[k].setAttribute('style','color:black');
  }

  for(var l=0;l<this.cc.length;l++){
    if(l==i){
      cc[l].setAttribute('style','color:blue');
        }
    else{
      cc[l].setAttribute('style','color:black');
    }
  }

  this.search='';
  this.items=[];
  console.log(this.nn[i]);
  var that=this;
  $.ajax({
    type:"post",
    url:'http://39.105.132.104:3000/nianfen',
    // dataType:'json',
    data: "nianfen="+this.nn[i],
    success:function(res){

      
      var no=document.getElementById('no');
      var list=document.getElementById('list');
      if(res.data.length==0){
        no.style.display='block';
        list.style.display='none';
      }
      else{
        no.style.display='none';
        list.style.display='block';
      }
      
      console.log(res.data);
     
      for(var i=0;i<res.data.length;i++){
        
        that.items.push({'ming':res.data[i].mingcheng,'xiang':res.data[i].xiangqing});
      }
      console.log(that.items);
     // that.allitems=that.items;  
    },
    error:function(err){
      console.log(err);
    }
  });
}
   
  
  ionViewDidLoad() {
    var that=this;  //注意this指代
    $(function(){          
       
      $.ajax({
        type:"post",
        url:'http://39.105.132.104:3000/ziliao',
        // dataType:'json',
        // data: "nianfen=2017",
        success:function(res){
           
         
          //console.log(res);
          console.log(res.data);
          console.log(res.data.length); 
          for(var i=0;i<res.data.length;i++){
            that.items.push({'ming':res.data[i].mingcheng,'xiang':res.data[i].xiangqing});
          }
          console.log(that.items);
          that.allitems=that.items;  

          var no=document.getElementById('no');
          var list=document.getElementById('list');
          if(res.data.length==0){
            no.style.display='block';
            list.style.display='none';
          }
          else{
            no.style.display='none';
            list.style.display='block';
          }
        },
        error:function(err){
          console.log(err);
        }
      });
    }
    )}

//搜索框
    initializeItems() {
      this.items=this.allitems; 
      console.log('jjjjjj');
      console.log(this.allitems);
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
        this.items = this.items.filter((item) => {  
        return (item.ming.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    var no=document.getElementById('no');
    var list=document.getElementById('list');
    if(this.items.length==0){
      no.style.display='block';
      list.style.display='none';
    }
    else{
      no.style.display='none';
      list.style.display='block';
    }
  }
  
}
