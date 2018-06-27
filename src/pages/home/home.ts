import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DatePage } from '../date/date';
import { CreatePage } from '../create/create';
import { MinePage } from '../mine/mine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
//leftTime;
  dataSource:Observable<any>;

  public info;

  public todoList;

  constructor(public navCtrl: NavController, public params: NavParams, private http: HttpClient) {

  } 

  pushPage(){
    this.navCtrl.push(DatePage);
  }

  pushMinePage(){
    this.navCtrl.push(MinePage);
  
  }

  pushCreatePage(){
    this.navCtrl.push(CreatePage);
  }

  // homeContentItemCom(i){

  // }

  homeContentItemDelete(item,i){

    console.log(item._id);
    this.http.post('http://39.105.132.104:3000/update',{_id:item._id},{responseType:"text"}).subscribe((data) => {console.log(data)},(err)=>{console.log(err)});
    this.todoList.splice(i,1);
  }


  ionViewDidLoad(){

    this.http.get('http://39.105.132.104:3000/gettask').subscribe((data) => {this.todoList = data},(err)=>{console.log(err)});

    // this.todoList=[
    //   {time:{start:'07:00',end:'08:00'},desc:'吃饭'},
    //   {time:{start:'08:00',end:'09:00'},desc:'睡觉'},
    //   {time:{start:'09:00',end:'10:00'},desc:'打豆豆'}
    // ];

    // let createItem = this.params.get('createdItem')
    // if(createItem){
    //   this.todoList.push(this.params.get('createdItem'));
    // }
    setInterval(this.getRTime,1000);
    // this.http.get('http://127.0.0.1:3000/users/dafeige',{ responseType: 'text' }).subscribe((data) => {console.log(data),(err)=>{console.log(err)}});

  }
  getRTime(){
    var EndTime= new Date('2018/12/22 8:30:00'); //截止时间
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    /*var d=Math.floor(t/1000/60/60/24);
    t-=d*(1000*60*60*24);
    var h=Math.floor(t/1000/60/60);
    t-=h*60*60*1000;
    var m=Math.floor(t/1000/60);
    t-=m*60*1000;
    var s=Math.floor(t/1000);*/
     
    var d=Math.floor(t/1000/60/60/24);
    var h=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);
    var s=Math.floor(t/1000%60);
     
    document.getElementById("t_d").innerHTML = d+"";
    document.getElementById("t_h").innerHTML = h+"";
    document.getElementById("t_m").innerHTML = m+"" ;
    document.getElementById("t_s").innerHTML = s+"";
    }
}
