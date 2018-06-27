import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the DatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var laydate:any;

@IonicPage()
@Component({
  selector: 'page-date',
  templateUrl: 'date.html',
})
export class DatePage {

  public dateTask:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePage');
  }

  ngOnInit(){
  const mythis=this;
  laydate.render({
    elem: '#test2',
    position: 'static',
    showBottom: false,
    change: function(value, date){
      let year=date.year,month=date.month,day=date.date;
      if(Number(day)<=9){
        day='0'+day;
      }
      mythis.http.get('http://39.105.132.104:3000/getdatetask/'+year+month+day)
      .subscribe((data) => {
        mythis.dateTask=data;
      } ,(err)=>{console.log(err)});
    }
  })
  }
}
