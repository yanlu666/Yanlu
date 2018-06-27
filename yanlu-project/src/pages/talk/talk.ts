import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html',
})
export class TalkPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  message;
  opened=false;
  data=this.navParams.data;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TalkPage');
    var face = document.getElementById('face');
    for(var i = 0; i < 80; i++) {
        var a = document.createElement("a");
        a.className="emoji";
        a.href = "javascript:;";
        if(i < 10) {
            a.innerHTML = '<img class="emojiSvg" src="./assets/imgs/emoji/emoji_' + i + '.png" alt="" />';
        } else {
            a.innerHTML = '<img class="emojiSvg" src="./assets/imgs/emoji/emoji_' + i + '.png" alt="" />';
        }
        face.appendChild(a);
    };
  }

  openHistory(){
    this.navCtrl.push("HistoryPage");
  }
//  msg(e){
//   this.message=e.target.value;
//   console.log(456);
//  }
 emoji() {
  function insertHtmlAtCaret(html) {

    var sel, range;
    if(window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if(sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            // var el = document.createElement("div");
            // el.innerHTML = html;
            var text =  <HTMLInputElement>document.getElementById('text');
            text.value+=html;
            var frag = document.createDocumentFragment(),
                node, lastNode;
            while((node = text.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            // Preserve the selection
            if(lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }
}
  console.log(456);
  var face = document.getElementById('face');
  var pickers = face.getElementsByTagName('a');
  var text = document.getElementById('text');
  face.style.display="block";
  for(var i = 0; i < pickers.length; i++) {
      pickers[i].onclick = function(e) {
         document.getElementById('text').focus();
          insertHtmlAtCaret(this.innerHTML);
          //    emojiInput.innerHTML+=this.innerHTML;
      }
  }
}
  send(){
    var face = document.getElementById('face');
    face.style.display="none";
    console.log(123);
    console.log(this.message);
    //var arrIcon = ['http://www.xttblog.com/icons/favicon.ico','http://www.xttblog.com/wp-content/uploads/2016/03/123.png'];
    var num = 0;     //控制头像改变
    var iNow = 0;    //用来累加改变左右浮动
    //var icon = document.getElementById('user_face_icon').getElementsByTagName('img');
    var btn = document.getElementById('btn');
    var text = <HTMLInputElement>document.getElementById('text');
    var content = document.getElementsByTagName('ul')[0];
    var img = content.getElementsByTagName('img');
    var span = content.getElementsByTagName('span');
    if(text.value ==''){
      alert('不能发送空消息');
  }else {
      content.innerHTML += '<li><img src="http://www.ghost64.com/qqtupian/zixunImg/local/2017/11/08/15101101075624.jpg" class="imgright"><span class="spanright">'+text.value+'</span></li>';
      text.value = '';
// 内容过多时,将滚动条放置到最底端
content.scrollTop=content.scrollHeight;
  }
}
  }

