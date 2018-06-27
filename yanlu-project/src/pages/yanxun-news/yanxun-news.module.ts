import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YanxunNewsPage } from './yanxun-news';

@NgModule({
  declarations: [
    YanxunNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(YanxunNewsPage),
  ],
})
export class YanxunNewsPageModule {}
