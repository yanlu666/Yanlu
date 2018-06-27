import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
list=[];
gets='';
info;
data=this.navParams.data;
person={name:this.data,src:'./assets/imgs/my.jpg',geqian:'让自己发光~'};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
  headers;
  user="王开心";
  phone=localStorage.getItem('phone');
  pid="18947882990";
  pusername="赵子旭";
  username;
  year;
  myschool;
  zhuanye;
  level;
  qianming;
  touxiang;
//   ionViewWillEnter(){
//     this.gets=JSON.stringify(window.localStorage.getItem('temp'));
//     console.log(this.data);
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
    console.log(this.data);
    this.http.post("http://39.105.132.104:3000/friend/chazhao",JSON.stringify({phone:this.data.phone}), {headers:this.headers} ).subscribe(data=>{
      this.info=this.data;
      this.username=this.info.username;
      console.log(this.info.username);
      this.year=this.info.year;
      this.zhuanye=this.info.zhuanye;
      this.myschool=this.info.myschool;
      this.qianming=this.info.qianming;
      this.touxiang=this.info.touxiang;
      console.log(this.touxiang);
      },err=>{
        console.log("error");
      });
  }
add(){
  this.list.push(this.person);
  localStorage.setItem('temp',JSON.stringify(this.list));
  console.log(localStorage.getItem('temp'));

  }
  request(){
    console.log('hello');
   this.http.post("http://39.105.132.104:3000/persons/chazhao",JSON.stringify({phone:this.phone}), {headers:this.headers} ).subscribe(data=>{
      var persons=JSON.parse(data["_body"]).data[0].persons;
      var flag=0;
      for(var i=0;i<persons.length;i++){
       // console.log(persons[i].pid,this.data);
        if(persons[i].pid == this.data){
          console.log("已存在");
          flag=1;
        }
        else{
          flag=0;
        }
      }
      if(flag==0){
      this.http.post("http://39.105.132.104:3000/persons/add",JSON.stringify({phone:this.phone,pid:this.data.phone,username:this.username,touxiang:this.data.touxiang}), {headers:this.headers} ).subscribe(data=>{
        console.log(data);
        },err=>{
          console.log("error");
        });
     }
     },err=>{
       console.log("error");
     });

   console.log(this.user);
   }
}
