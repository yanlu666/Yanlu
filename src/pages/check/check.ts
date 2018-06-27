import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-check',
  templateUrl: 'check.html',
})
export class CheckPage {

  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckPage');
    this.changeImg();
  }


  code;//声明一个变量用于存储生成的验证码
  vcode='';
  phone=this.navParams.data.phone;
  uname=this.navParams.data.uname;
  xingbie=this.navParams.data.xiangbie;
  psw1=this.navParams.data.psw1;
  message='';

  changeImg(){
      //alert("换图片");
      var arrays=new Array(
          '1','2','3','4','5','6','7','8','9','0',
          'a','b','c','d','e','f','g','h','i','j',
          'k','l','m','n','o','p','q','r','s','t',
          'u','v','w','x','y','z',
          'A','B','C','D','E','F','G','H','I','J',
          'K','L','M','N','O','P','Q','R','S','T',
          'U','V','W','X','Y','Z'
      );
      this.code='';//重新初始化验证码
      //alert(arrays.length);
      //随机从数组中获取四个元素组成验证码
      for(var i=0;i<4;i++){
      //随机获取一个数组的下标
          var r=Math.trunc(Math.random()*arrays.length) ;
          this.code+=arrays[r];
          //alert(arrays[r]);
       }
      console.log(this.code);
      document.getElementById('code').innerHTML=this.code;//将验证码写入指定区域
  }

   //效验图片验证码(表单被提交时触发)
   check(){
      //获取用户输入的验证码
      //alert(input_code+"----"+code);
      if(this.vcode.toLowerCase()==this.code.toLowerCase())
      {
          //验证码正确(表单提交)
          document.getElementById('yanErr').innerHTML="";
          return true;
      }
      document.getElementById('yanErr').innerHTML="验证码不正确";
      //验证码不正确,表单不允许提交
      return false;
  }




  getMessage(){
     var count=60;
     function  a(){
      var btn=document.getElementById('btn');
      if( count>1){
        btn.innerHTML= --count+'  s';
        btn.setAttribute('disabled','disabled'); //禁用
        }
        else{ 
        clearInterval(id);
        btn.setAttribute('disabled','');//解除禁用
        btn.innerHTML='短信验证码'; 
         }
        }

        document.getElementById('btn').setAttribute('disabled','disabled');
        var id=setInterval(a,1000);

        // 发送短信验证码请求
        $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/duanxin',
            data:"phone="+this.phone,
            success:function(res){
              console.log(123);
              console.log(res.data);
            },
            error:function(err){
              console.log(err);
            }
          });
  }
   
      //注册成功提示
      showSuccess() {
        let alert = this.alertCtrl.create({
          title: '提示',
          subTitle: '注册成功！',
          buttons: ['前往登录']
        });
        alert.present();
      }

     //手机号已注册提示
    showErr() {
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '该手机号已被注册！',
        buttons: ['确定']
      });
      alert.present();
    }  

   goLogin(){
       var that=this;
       
       if(this.vcode==''){
        document.getElementById('yanErr').innerHTML="请输入图片验证码";
       }
       else if(this.vcode!=''){
           this.check();
       }
       if(this.message==''){
           document.getElementById('mesErr').innerHTML="请输入短信验证码";
       }
       else{
         
        $.ajax({
          type:"post",
          url:'http://39.105.132.104:3000/register-user',
          data: "username="+that.uname+"&sex="+that.xingbie+"&phone="+that.phone+"&password="+that.psw1,
          success:function(res){
            console.log(res.data);
            if(res.status=='n'){
              that.showErr();
              // console.log('该手机号已被注册');
            } 
          },
          error:function(err){
            console.log(err);
          }
        });
 
        $.ajax({
          type:"post",
          url:'http://39.105.132.104:3000/register-people',
          data: "username="+that.uname+"&sex="+that.xingbie+"&phone="+that.phone+"&password="+that.psw1,
          success:function(res){
            console.log(res.data);
          },
          error:function(err){
            console.log(err);
          }
        });


        $.ajax({
          type:"post",
          url:'http://39.105.132.104:3000/register-geren',
          data: "username="+that.uname+"&phone="+that.phone,
          success:function(res){
            console.log(res.data);

            if(res.status=='n'){
              // console.log('个人添加失败');
            }

          },
          error:function(err){
            console.log(err);
          }
        });

        $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/confirm',
            data:"authCode="+this.message,
            success:function(res){
              console.log('验证码正确');
              console.log(res.data);
              that.showSuccess();
              // that.App.getRootNavs()[0].setRoot(TabsPage); 
            
            },
            error:function(err){
              console.log(err);
            }
          });

          
       }
 
   }




}


