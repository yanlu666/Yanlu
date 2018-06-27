import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FindPage } from '../find/find';
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { App } from 'ionic-angular';
import $ from 'jquery';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public App:App,public navParams: NavParams) {
  }

  phone='';
  psw='';
  tx='./assets/imgs/female.jpg';

  ionViewWillEnter() {
    console.log('ionViewWillEnter LoginPage');
    var that=this;  //注意this指代
    $('#btn2').click(function(){
        console.log( that.phone);
        console.log( that.psw);

        $('#phoneErr').html('');
        $('#pswErr').html('');
        if( that.phone==''){
          $('#phoneErr').html('手机号不能为空');
        }
        else if( that.psw==''){
          $('#pswErr').html('密码不能为空');
        }
      else{
      $.ajax({
        type:"post",
        url:'http://39.105.132.104:3000/index',
        // dataType:'json',
        data: "phone="+that.phone+"&password="+that.psw,
        success:function(res){
          console.log(res.data);
          console.log(res.data[0]);

          that.App.getRootNavs()[0].setRoot(TabsPage);
          localStorage.setItem('phone',that.phone);
        },
        error:function(err){
          console.log(err);
        }
      });
      }
    });
  }

  goRes(){
    this.navCtrl.push(RegisterPage);
  }

  goFind(){
    this.navCtrl.push(FindPage);
  }


}

