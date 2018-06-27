import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import $ from 'jquery';
 
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
     
  }
   
  type="expirence";
  time ;
  username;
  content;
  touxiang;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EidtPage');
    
    var that=this;
    var phone=localStorage.getItem('phone');
    console.log(that.time); 

    $('#fabu').click(function(){ 

      that.time=new Date().toLocaleString();
      //查询用户名
      $.ajax({
        type:"post",
        url:'http://39.105.132.104:3000/index', 
        data: "phone="+phone,
        success:function(res){  
          console.log(res.data[0].username); 
          that.username=res.data[0].username; 
          console.log(that.username); 

         //存储帖子
          $.ajax({
            type:"post",
            url:'http://39.105.132.104:3000/fabu', 
            data: "phone="+phone+"&type="+that.type+"&time="+that.time+"&content="+that.content+"&username="+that.username ,
            success:function(res){ 
              console.log(that.username);
              console.log(res.data);
              console.log(res.data[0]); 
            },
            error:function(err){
              console.log(err);
            }
          });
              
        },
        error:function(err){
          console.log(err);
        }
      });
      
     
    
  }
    )}
   

  
  fabu(){     
    console.log(this.content);

    var expirence=document.getElementById('expirence');
    var question=document.getElementById('question');
    var other=document.getElementById('other');
    
    console.log(expirence.getAttribute('checked'));
    if(Boolean(expirence.getAttribute('checked'))==true){
      console.log('经验贴'); 
      this.type='expirence';
    }else if(Boolean(question.getAttribute('checked'))==true){
      console.log('提问贴'); 
      this.type='question';
    }else if(Boolean(other.getAttribute('checked'))==true){
      console.log('其他贴'); 
      this.type='other';
    }
  
    //发布帖子
    //如内容不为空
    if(this.content&&this.content.trim() != ''){ 

      let alert = this.alertCtrl.create({
        title: '发布成功!' 
      });
 
      alert.present();
    }
    // 如贴子为空
    else{
      let tip = this.alertCtrl.create({
        title: '还没有写内容哦~~'
      });
      tip.present();
    }
   
   

  }

  
  
}
