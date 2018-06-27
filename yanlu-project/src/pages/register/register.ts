import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import $ from 'jquery';
import { LoginPage } from '../login/login';
import { CheckPage } from '../check/check';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  uname='';
  xingbie='';
  phone=''; 
  psw1='';
  psw2='';
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    var that=this;  //注意this指代
    $('#reg').click(function(){ 
        $('#nameErr').html('');
        $('#sexErr').html('');
        $('#phoneErr').html('');
        $('#psw1Err').html('');
        $('#psw2Err').html('');

        if( that.uname==''){
          $('#nameErr').html('用户名不能为空');
        }
        else if( that.xingbie==''){
          $('#sexErr').html('请选择性别');
        }
        else if( that.phone==''){
          $('#phoneErr').html('请输入手机号');
        }
        else if( that.psw1==''){
          $('#psw1Err').html('密码不能为空');
        }
        else if( that.psw2==''){
          $('#psw2Err').html('请确认密码');
        }
        else if( that.psw2!=that.psw1){
          $('#psw2Err').html('两次密码不一致');
        }
        else{
          goRes();
  
        }
    });

  

    function goRes(){
      that.navCtrl.push(CheckPage,{phone:that.phone,uname:that.uname,xingbie:that.xingbie,psw1:that.psw1});
    }
  }



}


