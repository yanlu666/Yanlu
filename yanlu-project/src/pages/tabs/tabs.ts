import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { ZiliaoPage } from '../ziliao/ziliao';
import { HomePage } from '../home/home';
import { TalklistPage } from '../talklist/talklist';
import { YanxunPage } from '../yanxun/yanxun';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = YanxunPage;
  tab3Root = ZiliaoPage;
  tab4Root = ContactPage;
  tab5Root = TalklistPage;
  constructor() {

  }
}
