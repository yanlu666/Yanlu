import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage {
items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
    {name:'考生必读',time:'18-4-11'},
    {name:'机电学院',time:'18-4-12'},
    {name:'法学院',time:'18-3-11'},
    {name:'计算机学院',time:'18-3-18'},
    {name:'软件学院',time:'18-4-15'},
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
    console.log('ionViewDidLoad WordsPage');
  }
  openFiles(){
    this.navCtrl.push("FilesPage");
  }
}
