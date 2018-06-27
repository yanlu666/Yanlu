import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QunPage } from './qun';

@NgModule({
  declarations: [
    QunPage,
  ],
  imports: [
    IonicPageModule.forChild(QunPage),
  ],
})
export class QunPageModule {}
