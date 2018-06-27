import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityDataProvider} from "../../providers/city-data/city-data";
import { ZhuanyeDataProvider } from "../../providers/city-data/zhuanye-data ";
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import $ from 'jquery';
import { App } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  cityColumns: any[];
  zhuanyeColumns: any[];

  constructor(public navCtrl: NavController,public App: App, public navParams: NavParams, public cityDataProvider: CityDataProvider,public zhuanyeDataProvider: ZhuanyeDataProvider) {
    this.cityColumns = this.cityDataProvider.cities;
    this.zhuanyeColumns = this.zhuanyeDataProvider.zhuanyes;

  }


  username='未登录';
  qianming;
  year;
  myschool;
  mubiaoschool;
  zhuanye;
  touxiang="./assets/imgs/female.jpg ";




  ionViewWillEnter(){
    var that=this;

    $(function(){
      var phone= localStorage.getItem('phone');
      console.log(phone);
      if(phone!=null){
        document.getElementById("out").style.display='block';
        document.getElementById("btn2").style.display='block';
        $.ajax({
          type:"post",
          url:'http://39.105.132.104:3000/huoqu',
          data: "phone="+phone,
          success:function(res){

            console.log(res);
            console.log(res.data);
            console.log(res.data[0]);

            that.username=res.data[0].username;
            that.qianming=res.data[0].qianming;
            that.touxiang=res.data[0].touxiang;
            that.year=res.data[0].year;
            that.myschool=res.data[0].myschool;
            that.mubiaoschool=res.data[0].mubiaoschool;
            that.zhuanye=res.data[0].zhuanye;

          },
          error:function(err){
            console.log(err);
          }
        });

        $('#btn2').click(function(){
          $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/baocun',
            data: "username="+that.username+"&year="+that.year+"&qianming="+that.qianming+"&myschool="+that.myschool+"&mubiaoschool="+that.mubiaoschool+"&zhuanye="+that.zhuanye+"&phone="+phone+"&touxiang="+that.touxiang,
            success:function(res){
              console.log(res.data);
              console.log(res.data[0]);
            },
            error:function(err){
              console.log(err);
            }
          });

          $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/baocun-yonghu',
            data: "username="+that.username+"&phone="+phone,
            success:function(res){
              console.log(res.data);
              console.log(res.data[0]);
            },
            error:function(err){
              console.log(err);
            }
          });

          $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/baocun-people',
            data: "username="+that.username+"&phone="+phone,
            success:function(res){
              console.log(res.data);
              console.log(res.data[0]);
            },
            error:function(err){
              console.log(err);
            }
          });
        })


      }else{
        document.getElementById("out").style.display='none';
        document.getElementById("btn2").style.display='none';
      }
    })

  }


    logout(){
      localStorage.removeItem('phone');
      this.App.getRootNavs()[0].setRoot(TabsPage);
    }
  }

