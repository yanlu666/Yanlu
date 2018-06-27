import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html',
})
export class AddpersonPage {
  items;
  persons;
  qun;
  results=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
     '19年北京邮电大学考研1群',
     '19年北京理工大学考研1群',
     '考研小助手',
     '北理-软件-学姐',
     '北大-计算机-学长'
    ];
    this.qun=[
      '19年北京邮电大学考研1群',
      '19年北京理工大学考研1群'
    ];
    this.persons = [
      '考研小助手',
      '北理-软件-学姐',
      '北大-计算机-学长'
     ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpersonPage');
  }
  search(e) {
    var list1=document.getElementById('qun');
    list1.style.display="none";
    var list2=document.getElementById('person');
    list2.style.display="none";
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = e.target.value;
   //var val = this.data;
    console.log(val);
    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        console.log('hi2');
        this.items=this.items.filter((item)=>{
         console.log(item.toLowerCase().indexOf(val.toLowerCase())>-1);
          return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
        })
        this.results=this.items;
      }
      else{
        this.results=[];
      }

  }
  goPerson1(i){
    this.navCtrl.push("PeoplePage",this.items[i]);
  }
  goPerson2(i){
    this.navCtrl.push("PeoplePage",this.qun[i]);
  }
  goPerson3(i){
    this.navCtrl.push("PeoplePage",this.persons[i]);
  }
}
