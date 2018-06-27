import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persons',
  templateUrl: 'persons.html',
})
export class PersonsPage {
  items;
  persons;
  qunzhu;
  results;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items=[
      {name:'北理-计算机-张学长',geqian:'只有自己能让自己发光。',src:'./assets/imgs/beili.jpg'},
      {name:'考研小助手',geqian:'欢迎新学弟学妹。',src:'./assets/imgs/logo.png'},
      {name:'北理-软件-葵花姐',geqian:'啦啦啦，做只快乐的小码农',src:'./assets/imgs/my.jpg'},
      {name:'北理-自动化-王学长',geqian:'2018，加油！',src:'./assets/imgs/daxue.jpg'},
      {name:'河北师大-计算机-小学弟',geqian:'掉入了计算机的坑。',src:'./assets/imgs/beili.jpg'},
      {name:'科大-李潇潇',geqian:'走自己的路。',src:'./assets/imgs/logo.png'},
      {name:'北工-软件-小学妹',geqian:'努力努力再努力。',src:'./assets/imgs/my.jpg'}
    ];
    this.qunzhu = [
      {name:'北理-计算机-张学长',geqian:'只有自己能让自己发光。',src:'./assets/imgs/beili.jpg'},
      {name:'考研小助手',geqian:'欢迎新学弟学妹。',src:'./assets/imgs/logo.png'},
      {name:'北理-软件-葵花姐',geqian:'啦啦啦，做只快乐的小码农',src:'./assets/imgs/my.jpg'},
      {name:'北理-自动化-王学长',geqian:'2018，加油！',src:'./assets/imgs/daxue.jpg'}
     ];
     this.persons = [
      {name:'河北师大-计算机-小学弟',geqian:'掉入了计算机的坑。',src:'./assets/imgs/beili.jpg'},
      {name:'科大-李潇潇',geqian:'走自己的路。',src:'./assets/imgs/logo.png'},
      {name:'北工-软件-小学妹',geqian:'努力努力再努力。',src:'./assets/imgs/my.jpg'},
     ]
  }
  getItems(e) {
  var list1=document.getElementById('qunzhu');
  list1.style.display="none";
  var list2=document.getElementById('chengyuan');
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
         console.log(item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
          return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
        })
        this.results=this.items;
      }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonsPage');
  }
  goPerson(){
    this.navCtrl.push("PeoplePage");
  }
}
