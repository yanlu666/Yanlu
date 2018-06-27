import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YanxunNewsPage } from '../yanxun-news/yanxun-news'
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the YanxunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yanxun',
  templateUrl: 'yanxun.html',
})
export class YanxunPage {

  public dataArr={data:[]};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YanxunPage');
  }

  showDetails(del){
    this.navCtrl.push(YanxunNewsPage,{data:del});
  }

  ngOnInit(){
    this.http
    .get('http://39.105.132.104:3000/newly-kydt',{responseType:"text"})
    .subscribe((data) => {
      this.dataArr=JSON.parse(data)
      this.dataArr.data = this.dataArr.data.filter((item)=>item.title!=="")
      console.log(this.dataArr)
    },(err)=>{console.log(err)});
  }

}
