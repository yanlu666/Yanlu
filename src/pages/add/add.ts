import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  items=[];
  persons;
  qun=[ '19年北京邮电大学考研1群',
  '19年北京理工大学考研1群'];
  results=[];
  info;
  headers;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
   // this.initializeItems();
  }
  initializeItems() {
   
    // this.items = [
    //  '19年北京邮电大学考研1群',
    //  '19年北京理工大学考研1群',
    //  '考研小助手',
    //  '北理-软件-学姐',
    //  '北大-计算机-学长'
    // ];
    this.qun=[
      '19年北京邮电大学考研1群',
      '19年北京理工大学考研1群'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
    this.http.post("http://39.105.132.104:3000/friend/tuijian",JSON.stringify({}), {headers:this.headers} ).subscribe(data=>{
      this.persons=JSON.parse(data["_body"]).data;
     // console.log(this.items);
      console.log(this.persons);
      },err=>{
        console.log("error");
      });
  }

search(e) { 
  var list1=document.getElementById('qun');
  list1.style.display="none";
  var list2=document.getElementById('person');
  list2.style.display="none";
  // Reset items back to all of the items
 // this.initializeItems();
 for(var i=0;i<this.persons.length;i++){
  this.items.push(this.persons[i]);
  }
 console.log(this.items);
 console.log(this.persons);
  // set val to the value of the ev target
  var val = e.target.value;
 //var val = this.data;
  console.log(val);
  // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log('hi2');
      this.items=this.items.filter((item)=>{
       console.log(item.username.toLowerCase().indexOf(val.toLowerCase())>-1);
        return (item.username.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
      this.results=this.items;
    }
    else{
      this.results=[];
    }
  
}
goPerson1(i){
  this.navCtrl.push("PeoplePage",this.results[i]);
}
goPerson2(i){
  this.navCtrl.push("PeoplePage",this.qun[i]);
}
goPerson3(i){
  this.navCtrl.push("PeoplePage",this.persons[i]);
}
}
