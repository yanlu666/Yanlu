import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalklistPage } from './talklist';

@NgModule({
  declarations: [
    TalklistPage,
  ],
  imports: [
    IonicPageModule.forChild(TalklistPage),
  ],
})
export class TalklistPageModule {}
