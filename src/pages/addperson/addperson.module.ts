import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpersonPage } from './addperson';

@NgModule({
  declarations: [
    AddpersonPage,
  ],
  imports: [
    IonicPageModule.forChild(AddpersonPage),
  ],
})
export class AddpersonPageModule {}
