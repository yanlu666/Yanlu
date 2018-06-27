import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the DeletePersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-person',
  templateUrl: 'delete-person.html',
})
export class DeletePersonPage {
  delperson=this.navParams.data;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  headers;
  user="王开心";
  phone=localStorage.getItem('phone');
  
  username;
  year;
  myschool;
  zhuanye;
  level;
  qianming;
  touxiang;
  info;
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePersonPage');
    
    this.http.post("http://39.105.132.104:3000/friend/chazhao",JSON.stringify({phone:this.delperson}), {headers:this.headers} ).subscribe(data=>{
      this.info=JSON.parse(data["_body"]).data[0];
      this.username=this.info.username;
      this.year=this.info.year;
      this.zhuanye=this.info.zhuanye;
      this.myschool=this.info.myschool;
      this.qianming=this.info.qianming;
      this.touxiang=this.info.touxiang;
      console.log(this.delperson);
      console.log(this.touxiang);
      },err=>{
        console.log("error");
      });
  }
  delete(){
    //localStorage.clear();
      console.log('hello');
      this.http.post("http://39.105.132.104:3000/persons/delete",JSON.stringify({phone:this.phone,pid:this.delperson}), {headers:this.headers} ).subscribe(data=>{
      console.log(data);
      },err=>{
        console.log("error");
      });
  }
}
