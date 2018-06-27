import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';

/**
 * Generated class for the TalklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talklist',
  templateUrl: 'talklist.html',
})
export class TalklistPage {
items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
     {name:'19年河北师范大学考研1群',talk:'小糊涂：今年的数学简单吗？',time:'下午2:45',warn:2,show:true,src:'./assets/imgs/beili.jpg'},
     {name:'考研小助手',talk:'考研情报新鲜出炉！',time:'下午2:30',warn:1,show:true,src:'./assets/imgs/logo.png'},
     {name:'北理-软件-葵花姐',talk:'都考哪些专业呢？',time:'下午2:10',show:false,src:'./assets/imgs/my.jpg'},
     {name:'19年北京大学考研1群',talk:'19-计算机-小学快：那这一年...',show:false,time:'下午2:00',src:'./assets/imgs/daxue.jpg'}
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
    console.log('ionViewDidLoad TalklistPage');
  }
  openList(){
    this.navCtrl.push(ListPage);
  }
  openTalk(i){
  this.items[i].warn=null;
  this.navCtrl.push("TalkPage",this.items[i]);
  }
  top(i){
    this.items.unshift(this.items[i]);
    this.items.splice(i+1,1);
  }
  delete(i){
    this.items.splice(i,1);
    console.log("删除了下标为"+i+"的元素");
  }
}
