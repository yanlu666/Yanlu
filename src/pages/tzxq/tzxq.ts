import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tzxq',
  templateUrl: 'tzxq.html',
})
export class TzxqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  
  // 头像、用户名、帖子同步
  name;
  content;
  tu;
  time;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TzxqPage');   
    console.log(this.navParams.data);  
    this.name= this.navParams.data.tiezi.username;
    this.content=this.navParams.data.tiezi.content;  //获取传入的参数值
    this.tu=this.navParams.data.tu;  //获取传入的参数值 
    this.time=this.navParams.data.tiezi.time;  //获取传入的参数值
    
  
  }
  
  // 页内点赞
  count=0;  
  zan(index){
    var zan=document.getElementById('zan');  
     this.count++;   
    if(this.count%2==0){
      zan.style.color= "rgb(233, 184, 204)";
    }else{
      zan.style.color="rgb(255, 0, 157)";
    }  
  }
  

  // 评论
  items=[];
  pinglun() {
    let prompt = this.alertCtrl.create({
      title: '评论', 
      inputs: [
        {
          id:'ping',
          name: 'content',
          placeholder: '写评论'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            console.log('Saved clicked');
            console.log(prompt.data.inputs[0].value);
            this.items.push(prompt.data.inputs[0].value);
            console.log(this.items);
            
          }
        }
      ]
    });
    prompt.present();

   
  }
}

