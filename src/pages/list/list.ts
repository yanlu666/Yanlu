import { Component ,Input,Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @Input() list:Array<any>;
  pet: string = "puppies";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
   // this.isAndroid = platform.is('android');
  }
  headers;
  user="王开心";
  phone=localStorage.getItem('phone');
 // data=JSON.parse(localStorage.getItem('temp'));
 data;
 quns;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  ionViewWillEnter(){
    this.http.post("http://39.105.132.104:3000/persons/chazhao",JSON.stringify({phone:this.phone}), {headers:this.headers} ).subscribe(data=>{
      this.data=JSON.parse(data["_body"]).data[0].persons;
      this.quns=JSON.parse(data["_body"]).data[0].quns;
      
      console.log(this.data);
      console.log(this.quns);
      },err=>{
        console.log("error");
      });
  }
  openAdd(){
    this.navCtrl.push("AddPage");
  }
  openDelete(i){
    console.log(this.data[i].pusername,this.data[i].pid);
    this.navCtrl.push("DeletePersonPage",this.data[i].pid);
  }
  openQun(i){
    this.navCtrl.push("QunPage");
  }
}
