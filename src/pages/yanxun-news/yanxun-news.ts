import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the YanxunNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yanxun-news',
  templateUrl: 'yanxun-news.html',
})
export class YanxunNewsPage {

  public articleD:any = {title:'',time:'',from:'',source:[]}

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YanxunNewsPage');
  }

  ngOnInit(){
    let title = this.navParams.data;
    this.http.post("http://39.105.132.104:3000/newly-kydt/details",{title:title}).subscribe((data)=>{
      this.articleD=data["0"]
      console.log(this.articleD)
    },(err)=>{console.log(err)})
  }

}
