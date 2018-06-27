import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
    {name:'2018硕士研究生招生拟录取名单',time:'18-4-11',people:'葵花姐',size:'192k'},
    {name:'2018硕士研究生复试录取名单',time:'18-4-13',people:'老学长',size:'186k'},
    {name:'2018硕士研究生笔试录取名单',time:'18-5-01',people:'老学长',size:'98'},
    {name:'2018硕士研究生面试拟录取名单',time:'18-3-27',people:'葵花姐',size:'202k'}
    ]
  }
  getItems(e) { 
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
           console.log(item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
            return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
          })
        }
  
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }
  openFileDetail(i){
    this.navCtrl.push("FileDetailPage",this.items[i]);
  }
}
